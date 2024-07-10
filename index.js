const express = require('express');
const app = express()
const mongoose = require('mongoose')
app.get("/",(req,res)=>{
    res.json("Hemlo")
})
mongoose.connect("mongodb+srv://uroojk844:Erp123@cluster0.d7alzlz.mongodb.net/social?retryWrites=true&w=majority&appName=Cluster0")
.then(connected=>console.log("Mongo DB connected"))
.catch(err=>console.log(err))
app.listen(5050,()=>console.log("App is running"));