const express=require('express');

let Router=express.Router();

let loginRouter=require('./login')
let addAdminRouter=require("./addAdmin")
let changeAdminRouter=require('./changeAdmin')
let deleAdminRouter=require("./deleAdmin")
let personalRouter=require("./Personal ")
let emptyRouter=require("./empty")
// console.log("hah")
// 设置跨域解决方案
// 不设置请求路径所有请求都会进入到这里,进行中间处理
Router.use((req,res,next)=>{
    // 支持CORS跨域，只需要设置响应头
    // res.header('Access-Control-Allow-Origin','*');
    let currentOrigin = req.get('Origin');
    let allowOrigin = ['http://localhost:8080','http://localhost:8081']
    if(allowOrigin.includes(currentOrigin)){
        res.set({
            'Access-Control-Allow-Origin':currentOrigin,
            'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,OPTIONS',
            'Access-Control-Allow-HEADERS':"Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        })
        
    }
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})
Router.use('/login', loginRouter)
Router.use("/addAdmin",addAdminRouter)
Router.use("/changeAdmin", changeAdminRouter)
Router.use('/deleAdmin',deleAdminRouter)
Router.use('/personal',personalRouter)
Router.use('/empty',emptyRouter)
module.exports=Router

