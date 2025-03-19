const CategoryController=require("../apis/categories/CategoryController")

const express= require('express');
const router=express.Router();

router.get("/category/add",CategoryController.add)
router.get("/category/all",CategoryController.all)

module.exports=router;