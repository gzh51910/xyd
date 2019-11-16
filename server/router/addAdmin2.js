const express=require('express');

const Router=express.Router();

const{add,query}=require("../db/methods")

// 添加个人信息
const nane="Personal"


Router.post("/",async(req,res)=>{
    console.log(req.query,"成功")
    let {admin,personal}=  req.body;
     password=password*1
    let username= await query(nane,{"admin":admin})
    if(username.length>1){
        res.send("个人信息已存在")
    }else{
        console.log(password);
        
        await add(nane,{"admin":admin,"personal":personal})
        res.send("添加成功")
    }
})

module.exports=Router

