import express, { Application, NextFunction, Request, Response, Router } from 'express';
const methodOverride = require('method-override');
const createError = require('http-errors');
const app: Application = express();
const port: number = 3001;
const cors = require('cors');

const errorController = require('./controller/errorController');
const userRouter: Router = require('./router/userRouter');
const adminRouter: Router = require('./router/adminRouter');

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());

//router
app.use('/', userRouter);
app.use('/admin', adminRouter);

//error handler
app.use(errorController.pageNotFountError);
app.use(errorController.respondInternalError);


app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
})
