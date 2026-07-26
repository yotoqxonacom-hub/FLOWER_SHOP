
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.servive";

const flowerController: T = {};

flowerController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page")
    } catch (err) {
        console.log(" Error, goHome:", err)
    }
};

flowerController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page")
    } catch (err) {
        console.log(" Error, getLogin:", err)
    }
};

flowerController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("Signup Page")
    } catch (err) {
        console.log(" Error, getSignup:", err)
    }
}

export default flowerController;