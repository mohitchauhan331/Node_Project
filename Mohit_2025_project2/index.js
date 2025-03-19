const express = require("express");
const app = express();
const PORT=5001;

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

