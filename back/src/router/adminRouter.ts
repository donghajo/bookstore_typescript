import express, { Router } from 'express';
import * as adminController from "../controller/adminController";
import { adminJWT } from '../middleware/jwtValidator';

const router: Router = express.Router();

router.post("/book", adminJWT, adminController.addBook);

router.put("/book/:id", adminJWT, adminController.updateBook);

module.exports = router;