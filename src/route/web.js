import express from "express";
import getHomePage from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) =>{
    //where we declare call router for web
    router.get('/',(req,res)=>{
        return res.send("hien ra dc cai nay thi la chay ngon roi nhe 💖🤞🤞🤞🤞💖");
    });
    router.get('/dat9403',getHomePage.getHomePage);
    return app.use("/",router);
}

module.exports = initWebRoutes;