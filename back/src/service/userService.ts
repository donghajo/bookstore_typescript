import { Request, Response } from 'express';
import { AddUser } from "../data/user";
import { Result } from "../data/result";
import { database } from "../model/database";

export async function addUser(userInfo: AddUser) {
    try {
        const existUser = await database.query("select * from user where id = ?", userInfo.id);
        console.log(existUser[0]);

        if (existUser[0]) {
            await database.query("insert into user values ?, ?, ?", userInfo);
            const result: Result = { msg: "삽입 성공", success: true, detail: userInfo.id };
            return result;
        } else {
            const result: Result = { msg: "삽입 실패", success: false, detail: "이미 존재하는 회원입니다." };
            return result
        }
    } catch (e) {
        console.log(e);
        const result: Result = { msg: "삽입 실패", success: false, detail: e };
        return result
    }
}

