
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const flowerController: T = {};
const memberService = new MemberService();

flowerController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome:");
        res.render("home");
    } catch (err) {
        console.log(" Error, goHome:", err)
    }
};

flowerController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup:");
        res.render("signup");
    } catch (err) {
        console.log(" Error, getSignup:", err)
    }
};


flowerController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin:");
        res.render("login");
    } catch (err) {
        console.log(" Error, getLogin:", err)
    }
};


flowerController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup:");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.FLOWER;
        const result = await memberService.processSignup(newMember);
        // TODO SESSION AUTHENTICATION

        res.send(result)
    } catch (err) {
        console.log(" Error, processSignup:", err)
        res.send(err)
    }
};

flowerController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin:");
        const input: LoginInput = req.body,
            result = await memberService.processLogin(input);
        // TODO SESSION AUTHENTICATION


        res.send(result)
    } catch (err) {
        res.send(err)
        console.log(" Error, processLogin:", err)
    }
};


export default flowerController;