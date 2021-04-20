const express= require("express");
const router= express.Router();

router.post("/login", (req, res)=>{
    if(req.body.email=="rohith@admin.com" && req.body.password=="rohith123"){
        req.session.user=req.body.email;
        res.redirect("/route/dashboard");
    }
    else{
        res.send("Invalid credentials");
    }
});

router.get("/dashboard", (req,res)=>{
    if(req.session.user){
        res.render("dashboard", {user: req.session.user});
    }
    else{
        res.send("Unauthorized user");
    }
});

router.get("/logout", (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            res.send("Error");
        }
        else{
            res.render("base",{title:"express", logout:" Successfully Logged out"});
        }
    })
})



module.exports=router;