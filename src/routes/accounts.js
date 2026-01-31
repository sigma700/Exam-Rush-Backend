import {Router} from "express";
import {createAccount} from "../controllers/accountOperations.js";

export const userRouter = Router();

userRouter.post("/create-account", createAccount);
