
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

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
        console.log(" Error, getSignup:", err);
        res.redirect("/admin");
    }
};


flowerController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin:");
        res.render("login");
    } catch (err) {
        console.log(" Error, getLogin:", err);
        res.redirect("/admin");
    }
};


flowerController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup:");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.FLOWER;
        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(() => {
            res.send(result);
        });


    } catch (err) {
        console.log(" Error, processSignup:", err)
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"): window.location.replace("/admin/signup") </script>`);
    }
};

flowerController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin:");
        const input: LoginInput = req.body,
            result = await memberService.processLogin(input);

        req.session.member = result;
        req.session.save(() => {
            res.send(result);
        });


    } catch (err) {
        console.log(" Error, processLogin:", err)
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"): window.location.replace("/admin/login") </script>`);
    }
};


flowerController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout:");
        req.session.destroy(() => {
            res.redirect("/admin");
        })

    } catch (err) {
        console.log(" Error, logout:", err);
        res.redirect("/admin");
    }
};


flowerController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession:");
        if (req.session?.member) res.send(`Hi, ${req.session.member.memberNick}`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
        res.send(err)
        console.log(" Error, checkAuthSession:", err)
    }
};


export default flowerController;