import { GetBook, AddBook } from "../data/admin";
import { Result } from "../data/result";
const jwt = require('../util/jwt.util');
const db = require('../model/database');

export async function addBook(book: AddBook) {
    const result: Result = {
        status: 500,
        msg: "server error",
        data: {},
    };

    await db.query(
        'insert into book(title, author, quantity, price) values(?, ?, ?, ?)',
        [
            book.title,
            book.author,
            book.quantity,
            book.price
        ]
    )
        .then(() => {
            result.status = 200;
            result.msg = "add book success";
            result.data = book;
            return result;
        }).catch((e: any) => {
            return;
        })
    return result;
}