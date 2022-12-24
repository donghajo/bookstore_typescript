import { Request, Response } from 'express';
import { AddUser } from "../data/user";
import * as userService from "../service/userService";

export async function addUser(req: Request, res: Response) {
    console.log("request : ", req.body);
    const userInfo: AddUser = req.body;
    const result = await userService.addUser(userInfo);
    console.log("response : ", result);
    res.status(200).send(result);
}








