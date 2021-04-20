const express = require("express");
const { dirname } = require("path");
const app= express();
const path=require("path");
// const bodyParser= require("body-parser");
const session= require("express-session");
const {v4:uuidv4}=require("uuid");
const router=require("./router");

const port= process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use("/static", express.static(path.join(__dirname,"public")));
app.use("/assets", express.static(path.join(__dirname,"public/assets")));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use("/route",router);
app.get("/",(req,res)=>{
    res.render("base", {title: "Login system"});
})



app.listen(port, ()=> console.log(`Server is listening on port ${port}`));