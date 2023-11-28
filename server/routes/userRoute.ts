// import { Router } from "express";\
import express from "express";
import { Request, Response } from "express";
import { Services } from "../mongoos/servicesModel";
import asyncHandler from "express-async-handler";
import userController from "../controller/userController";

const userRouter = () => {
    const route = express.Router();
    const controller = userController()

    route.get("/all-services", controller.getAllWorks);

};

export default userRouter;
