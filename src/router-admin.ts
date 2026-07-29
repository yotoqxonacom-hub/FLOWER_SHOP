import express from "express";
const routerAdmin = express.Router();
import flowerController from "./controllers/flower.controller";


/** FLOWER_SHOP**/
routerAdmin.get("/", flowerController.goHome);

routerAdmin
    .get("/login", flowerController.getLogin)
    .post("/login", flowerController.processLogin);
routerAdmin
    .get("/signup", flowerController.getSignup)
    .post("/signup", flowerController.processSignup);

routerAdmin
    .get("/check-me", flowerController.checkAuthSession);

/** PRODUCTS **/
/** USER **/

export default routerAdmin;