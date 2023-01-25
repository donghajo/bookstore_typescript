import express, { Router } from 'express';
import * as adminController from "../controller/adminController";
// import { adminJWT } from '../middleware/jwtValidator';

const router: Router = express.Router();

router.post("/admin/book", adminController.addBook);

module.exports = router;