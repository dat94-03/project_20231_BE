import express from "express";

let configViewEngine = (app) =>{
    app.use(express.static("./src/public"));
    app.set("view engine","ejs");
    app.set("views","./src/views");//set where view ejs file is located
}

module.exports = configViewEngine; 