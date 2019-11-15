const express=require('express');

const Router=express.Router();

const{query}=require("../db/methods")

// 管理员登陆
const nane="admin"


Router.post("/",async(req,res)=>{
    console.log(req.query,"成功")
    let {admin,password}=  req.body;
     password=password*1
    console.log({"admin":admin,"password":password})
    let result=await query(nane,{"admin":admin,"password":password})
    console.log(result)
    if(result.length>0){
        res.send("成功")
    }else{
        res.end("失败")
    }
   
})

module.exports=Router