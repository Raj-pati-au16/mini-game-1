const express=require("express")
const app=express()

app.use(express.static('drum kit'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/drum kit/index.html')
})

app.listen("3000",(req)=>{
    console.log("server started")
})