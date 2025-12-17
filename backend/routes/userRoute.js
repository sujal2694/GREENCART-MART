import e from "express";
import { LoginUser, registerUser } from "../controllers/userController.js";

export const userRouter = e.Router();

userRouter.post("/login", LoginUser),
userRouter.post('/register', registerUser);