const express = require("express");
const app = express();
const PORT=5001;

const db=require("./servers/config/db")
const api=require("./servers/routes/ApiRoutes");
app.use("/api",api);

app.listen(PORT,()=>{
    console.log("server is running ",PORT);
});

app.get("/",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"My api is working"
    });
});

app.post("/first",()=>
{res.json({
    status:200,
    success:true,
    message:"My first api is working"
    })
})

app.all("/** ",(req,res)=>{
    res.status(404).json({
        status:404,
        success:false,
        message:"Page not found"
    })
})

