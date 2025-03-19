Product=(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"product api is working"
    })
}

module.exports={product}