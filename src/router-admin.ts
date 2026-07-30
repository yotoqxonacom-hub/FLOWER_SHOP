import express from "express";
const routerAdmin = express.Router();
import flowerController from "./controllers/flower.controller";
import productController from "./controllers/product.controller";


/** FLOWER_SHOP**/
routerAdmin.get("/", flowerController.goHome)
    .get("/login", flowerController.getLogin)
    .post("/login", flowerController.processLogin)
    .get("/signup", flowerController.getSignup)
    .post("/signup", flowerController.processSignup)
    .get("/logout", flowerController.logout)
    .get("/check-me", flowerController.checkAuthSession);

/** PRODUCTS **/
routerAdmin
    .get("/product/all", productController.getAllProducts)
    .post("/product/create", productController.createNewProduct)
    .post("/product/:id", productController.updateChosenProduct)

/** USER **/

export default routerAdmin;