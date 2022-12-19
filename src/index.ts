import express, { Application, Request, Response, Router } from 'express';

const app: Application = express();
const port: number = 3001;

const userRouter: Router = require('./router/userRouter');






app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
})
