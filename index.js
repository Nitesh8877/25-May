const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("this is my home page")
})

app.listen(8000,()=>{
    console.log("this is my port number 8000 start the server")
})