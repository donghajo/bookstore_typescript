import express, { Application, NextFunction, Request, Response, Router } from 'express';
const methodOverride = require('method-override');
const createError = require('http-errors');
const app: Application = express();
const port: number = 3001;

const errorController = require('./controller/errorController');
const userRouter: Router = require('./router/userRouter');

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());

//router
app.use('/', userRouter);

//error handler
app.use(errorController.pageNotFountError);
app.use(errorController.respondInternalError);


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
})
