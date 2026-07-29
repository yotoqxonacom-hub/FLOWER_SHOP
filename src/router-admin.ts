import express from "express";
const routerAdmin = express.Router();
import flowerController from "./controllers/flower.controller";


/** FLOWER_SHOP**/
routerAdmin.get("/", flowerController.goHome)
    .get("/login", flowerController.getLogin)
    .post("/login", flowerController.processLogin)
    .get("/signup", flowerController.getSignup)
    .post("/signup", flowerController.processSignup)
    .get("/logout", flowerController.logout)
    .get("/check-me", flowerController.checkAuthSession);

/** PRODUCTS **/
/** USER **/

export default routerAdmin;