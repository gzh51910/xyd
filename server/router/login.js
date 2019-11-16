const express=require('express');

const Router=express.Router();

const{query}=require("../db/methods")

// 登陆
const nane="use"


Router.get("/",async(req,res)=>{
    console.log(req.query,"成功")
    let {admin,password}=  req.query;
     password=password*1
    console.log({"admin":admin,"password":password})
    let result=await query(nane,{"admin":admin,"password":password})
    console.log(result)
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    if(result.length>0){
        // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.send("成功")
    }else{
        // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end("失败")
    }
   
})

module.exports=Router