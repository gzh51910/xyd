const express=require('express');

const Router=express.Router();

const{add,query}=require("../db/methods")

// 添加管理员
const nane="admin"


Router.post("/",async(req,res)=>{
    // console.log(req.body,"成功")
    let {admin,password}=  req.body;
     password=password*1
    let username= await query(nane,{"admin":admin})
    if(username.length>0){
        res.send("用户名已存在")
    }else{
        await add(nane,{"admin":admin,"password":password})
        res.send("添加成功")
    }
})

module.exports=Router

