import { NextFunction, Request, Response } from 'express';
const httpStatus = require('http-status-codes');

export async function pageNotFountError(req: Request, res: Response) {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist! `);
};

export async function respondInternalError(err: Error, req: Request, res: Response, next: NextFunction) {
    let errorCode = httpStatus.INTERAL_SERVER_ERROR;
    console.log(`Error occured: ${err.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Syrry, our application is experiencing a problem!`);
};