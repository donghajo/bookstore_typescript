import { Request, Response } from 'express';
import { GetBook, AddBook } from '../data/admin';
import { Result } from '../data/result';
import * as adminService from "../service/adminService";

const addBook = async (req: Request, res: Response) => {
    if (!req.body.title || !req.body.quthor || !req.body.quantity || !req.body.price) {
        res.status(400).send({ status: 400, message: "[fail signup] check : input value " });
        return;
    }
    const book: AddBook = req.body;
    const result: Result = await adminService.addBook(book);
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

}


export {
    addBook
};