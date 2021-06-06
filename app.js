const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.get("/courses",function(req,res){
    res.sendFile(__dirname + "/courses.html");
})
app.get("/test",function(req,res){
    res.sendFile(__dirname + "/test.html");
})
app.get("/notes",function(req,res){
    res.sendFile(__dirname + "/notes.html");
})
app.get("/qbank",function(req,res){
    res.sendFile(__dirname + "/qbank.html");
})





app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("server started at port no. 3000");
    }

})