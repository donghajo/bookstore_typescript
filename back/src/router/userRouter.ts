import express, { Router } from 'express';
import * as userController from "../controller/userController";
const refresh = require('../refresh');


const router: Router = express.Router();

//회원가입
router.post("/signup", userController.addUser);

//로그인
router.post("/login", userController.login);

//토큰 재발급
router.get("/refresh", refresh);


module.exports = router;