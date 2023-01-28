import { Signup, Login, JwtUser } from "../data/user";
import { Result } from "../data/result";
const jwt = require('../util/jwt.util');
const db = require('../model/database');

export async function addUser(userInfo: Signup) {
    const result: Result = {
        status: 500,
        msg: "server error",
        data: {},
    };
    let isIdExist = false;
    //validate id already exists
    await db.query(
        'select * from user where id = ?',
        userInfo.id
    )
        .then((data: any) => {
            console.log(data[0]);

            if (data[0].length) {
                isIdExist = true;
                result.status = 400;
                result.msg = "id already exist";
            }
        })
        .catch((e: any) => {
            console.log(e);
            result.status = 500;
            result.msg = "server error";
            return;
        });


    if (!isIdExist) {
        // insert query
        await db.query(
            'insert into user(id, pwd, nickname) values (?, ?, ?)',
            [
                userInfo.id,
                userInfo.pwd,
                userInfo.nickname
            ]
        )
            .then(() => {
                //address add query
                db.query(
                    'insert into address(zipcode, default_address, detail_address, user_id) values(?, ?, ?, ?)',
                    [
                        userInfo.zipcode,
                        userInfo.defaultAddress,
                        userInfo.detailAddress,
                        userInfo.id
                    ]
                );
                // jwt 
                const user: JwtUser = {
                    id: userInfo.id,
                    role: "USER",
                };
                const accessToken = jwt.sign(user);
                const refreshToken = jwt.refresh();
                console.log("accessToken >>> ", accessToken);
                console.log("refreshToken >>> ", refreshToken);

                result.status = 200;
                result.msg = "signup success";
                result.data = {
                    accessToken,
                    refreshToken
                };
            })
            .catch((e: any) => {
                console.log(e);
                result.status = 500;
                result.msg = "server error";
                return;
            });
    }
    console.log("result >>> ", result);
    return result;
};

export async function login(userInfo: Login) {
    const result: Result = {
        status: 500,
        msg: "server error",
        data: {},
    };
    await db.query(
        'select * from user where id = ? and pwd = ?',
        [
            userInfo.id,
            userInfo.pwd
        ]
    )
        .then((data: any) => {
            if (data[0].length) {
                const user: JwtUser = {
                    id: userInfo.id,
                    role: data[0][0].role,
                };
                const accessToken = jwt.sign(user);
                const refreshToken = jwt.refresh();
                console.log("accessToken >>> ", accessToken);
                console.log("refreshToken >>> ", refreshToken);

                result.status = 200;
                result.msg = "login success";
                result.data = {
                    accessToken,
                    refreshToken
                };
            } else {
                result.status = 401;
                result.msg = "login fail >>> please check id or password";
                return;
            }
        }).catch((e: any) => {
            console.log(e);
            result.status = 500;
            result.msg = "server error";
            return;
        });
    return result;

}
