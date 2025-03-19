
const express = require("express");  // importing express module
const data =require("./data");   // importing data.js file
const app = express();
const zomatodata = require("./zomatodata"); // importing zomatodata.js file
const PORT=5001;

//console.log(data);   // printing data from data.js file
console.log(zomatodata);  // printing data from zomatodata.js file

app.listen(PORT,()=>{
    console.log("server is running ",PORT);
});



app.get("/name",(req,res)=>{  // used to get name of the person
    res.json({
        status:200,
        success:true,
        message:"My name is Mohit Chauhan"
    });
});
app.post("/college",(req,res)=>{    // used to get college name of the person
    res.json({
        status:200,
        success:true, 
        message:"I study at DAVIET college"
    });
});
app.get("/hobby",(req,res)=>{   // used to get hobbies of the person
    res.json({
        status:200,
        success:true,
        message:"I like to play chess and cricket"
    });
});
app.post("/course",(req,res)=>{   // used to get course of the person
    res.json({
        status:200,
        success:true, 
        message:"I am studying MERN at O7 services"
    });
});
app.get("/technologies",(req,res)=>{   // used to get technologies studied by the person
    res.json({
        status:200,
        success:true,
        message:"I have studied html , css ,bootstrap and currently persuing javascript"
    });
});

app.get("/data",(req,res)=>{                // used to get data from data.js file and print only persons with their course as mern 
    for(let i=0;i<data.length;i++){
        if (data[i].course==="react"){
            console.log(data[i]);
        }
    }
})

    app.get("/zomatodata",(req,res)=>{
      let filterdata=  zomatodata.filter((el)=>{
            if(el.info.rating.rating_text>="4"){
                return el
            }
        })
        // console.log(filterData);
        res.json({
            status:200,
            success:true,
            message:"Data loaded",
            data:filterdata,
            
        })
        
    })