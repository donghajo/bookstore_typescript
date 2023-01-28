import { GetBook, Book } from "../data/admin";
import { Result } from "../data/result";
const jwt = require('../util/jwt.util');
const db = require('../model/database');

export async function addBook(request: Book) {
    const result: Result = {
        status: 500,
        msg: "server error",
        data: {},
    };

    await db.query(
        'insert into book(title, author, quantity, price) values(?, ?, ?, ?)',
        [
            request.title,
            request.author,
            request.quantity,
            request.price
        ]
    )
        .then(() => {
            result.status = 200;
            result.msg = "add book success";
            result.data = request;
            return result;
        }).catch((e: any) => {
            return;
        })
    return result;
}

export async function updateBook(request: Book) {
    const result: Result = {
        status: 500,
        msg: "server error",
        data: {},
    };

    await db.query(
        'update book set title = ?, author = ?, quantity = ?, price = ?',
        [
            request.title,
            request.author,
            request.quantity,
            request.price
        ]
    )
        .then(() => {
            result.status = 200;
            result.msg = "update book success";
            result.data = request;
            return result;
        }).catch((e: any) => {
            return;
        })
    return result;
}