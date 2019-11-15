
const express=require('express');

// const Router=express.Router();

const Router=express.Router();

const{delOne}=require("../db/methods")

// 删除数据
const nane="admin"


Router.delete("/",async(req,res)=>{
    console.log(req.body,"成功asd")
    let {admin}=  req.body;
    //  password=password*1
    console.log({"admin":admin})
    await delOne(nane,{"admin":admin})
   
     res.send("删除成功")
})

module.exports=Router