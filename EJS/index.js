const express=require("express")
const path=require("path")
const app=express()
const port=3000

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views")) // for all directory render ejs


app.listen(port,(req,res)=>{
    console.log(`listening port ${port}`)
})


app.get("/",(req,res)=>{
    res.render("home.ejs") // it render html 
})

app.get("/rolldice/roll",(req,res)=>{
    let value=Math.floor(Math.random() * 6)+1
    res.render("rollDice.ejs",{num:value})
})