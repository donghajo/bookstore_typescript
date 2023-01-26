import { Request, Response, NextFunction } from 'express';
const { verify } = require('../util/jwt.util');

export const userJWT = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        const result = verify(token);
        if (result.role === 'USER') {
            next();
        } else {
            res.status(401).json({
                ok: false,
                message: result.message,
            });
        }
    }
}

export const adminJWT = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        console.log(token);

        const result = verify(token);
        console.log(result);

        if (result.role === 'ADMIN') {
            next();
        } else {
            res.status(401).json({
                ok: false,
                message: 'only administrator',
            });
        }
    }
}
