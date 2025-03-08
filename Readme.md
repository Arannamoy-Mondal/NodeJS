# Packages: Nodemon for automatically restart node server.

# Express JS :

```js
const express=require("express")
const app=express()
console.log(app)

let port=3000
app.listen(port,()=>{
    console.log(`app listening port: ${port}`)
})


app.use("/ok",(req,res)=>{ //handeling request
    console.log("request received")
    let code="<h1>OK</h1>"
    res.send(code) // send response
})

app.get("/home",(req,res)=>{
    res.send("Home")
})



app.post("/",(req,res)=>{
    res.send("You sent a post request to root")
})

app.get("/user/:username",(req,res)=>{ // param query
    console.log(req.params)
})

app.get("/query",(req,res)=>{
    console.log(req.query) // http://localhost:3000/query?q=hello&&color=red
    res.send("Found")
})

app.get("*",(req,res)=>{ // for all route if not exist
    res.send("4045")
})
```

# EJS (Embedded JS) Template:

