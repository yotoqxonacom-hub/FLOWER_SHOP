import express from "express";
import path from "path";

/** 1- ENTRENCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));  // traditional API support
app.use(express.json()); // rest API support

/** 2- SESSIONS **/


/** 3- VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4- ROUTER **/

export default app;