import { Request, Response } from 'express';
import { Signup, Login } from '../data/user';
import { Result } from '../data/result';
import * as userService from "../service/userService";

const addUser = async (req: Request, res: Response) => {
    if (!req.body.id || !req.body.pwd || !req.body.nickname || !req.body.zipcode || !req.body.defaultAddress || !req.body.detailAddress) {
        res.status(400).send({ status: 400, message: "[fail signup] check : input value " });
        return;
    }
    const signupData: Signup = req.body;
    const result: Result = await userService.addUser(signupData);
    if (result.status == 200) {
        const { status, msg, data } = result;
        res.status(status).send({
            status,
            msg,
            data,
        });
    } else {
        const { status, msg } = result;
        res.status(status).send({
            status,
            msg,
        });
    }
};

const login = async (req: Request, res: Response) => {
    if (!req.body.id || !req.body.pwd) {
        res.status(400).send({ status: 400, message: "[fail signup] check : input value " });
        return;
    }
    const loginData: Login = req.body;
    const result: Result = await userService.login(loginData);
    if (result.status == 200) {
        const { status, msg, data } = result;
        res.status(status).send({
            status,
            msg,
            data,
        });
    } else {
        const { status, msg } = result;
        res.status(status).send({
            status,
            msg,
        });
    }
};



export {
    addUser, login,
};



