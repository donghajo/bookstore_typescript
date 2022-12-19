import { Request, Response } from 'express';
import { AddUser } from "../data/user";
import * as userService from "../service/userService";

export async function addUser(req: Request, res: Response) {
    const userInfo: AddUser = req.body;
    const userId = await userService.addUser(userInfo);
    res.status(200).json({ userId: userId });
}








