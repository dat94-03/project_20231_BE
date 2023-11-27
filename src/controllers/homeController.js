import db from "../models/index"

let getHomePage = (req,res)=>{
    return res.render('homeView.ejs');
}

module.exports={
        getHomePage:getHomePage,
    }
