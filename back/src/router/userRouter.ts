import express, { Router } from 'express';
import * as userController from "../controller/userController";


const router: Router = express.Router();

router.post("/user", , userController.addUser);



module.exports = router;