const express =require("express")
const mongoose =require("mongoose")
// const UserModel =require("./models/user.model");

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/" , (req,res)=>res.send("hello"))
mongoose.connect("mongodb://localhost:27017/b21").then(()=>{

    app.listen(8080 ,()=>{
        console.log("server started on port 8080");
    })
})