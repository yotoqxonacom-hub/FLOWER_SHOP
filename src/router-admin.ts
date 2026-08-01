import express from "express";
const routerAdmin = express.Router();
import flowerController from "./controllers/flower.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";


/** FLOWER_SHOP**/
routerAdmin.get("/", flowerController.goHome)
    .get("/login", flowerController.getLogin)
    .post("/login", flowerController.processLogin)
    .get("/signup", flowerController.getSignup)
    .post("/signup", makeUploader("members").single("memberImage"), flowerController.processSignup)
    .get("/logout", flowerController.logout)
    .get("/check-me", flowerController.checkAuthSession);

/** PRODUCTS **/
routerAdmin
    .get("/product/all", flowerController.verfyRestaurant, productController.getAllProducts)
    .post("/product/create", makeUploader("products").array("productImage"), flowerController.verfyRestaurant, productController.createNewProduct)
    .post("/product/:id", flowerController.verfyRestaurant, productController.updateChosenProduct)

/** USER **/

routerAdmin
    .get("/user/all", flowerController.verfyRestaurant, flowerController.getUsers)
    .post("/user/edit", flowerController.verfyRestaurant, flowerController.updateChosenUsers)

export default routerAdmin;