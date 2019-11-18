const express=require('express');

const Router=express.Router();

const{add,query}=require("../db/methods")

// 添加
const nane="user"


Router.get("/",async(req,res)=>{
    console.log(req.query,"成功")
    let {admin,password}=  req.query;
     password=password*1
    let username= await query(nane,{"admin":admin})
    if(username.length>0){
        res.send("用户名已存在")
        
    }else{
        console.log(password);
        
        await add(nane,{"admin":admin,"password":password})
        res.send("添加成功")
    }
})

module.exports=Router

