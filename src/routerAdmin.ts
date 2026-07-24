import express from "express";
const routerAdmin = express.Router();
import flowerController from "./controllers/flower.controller";

routerAdmin.get("/", flowerController.goHome);

routerAdmin.get("/login", flowerController.getLogin);

routerAdmin.get("/signup", flowerController.getSignup);




export default routerAdmin;