add=(req,res)=>{
    res.json({
        status:200,
        success:true,
        message : "Category added successfully"
    })
}

all=(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"all api is working"
    })
}
module.exports={add,all}