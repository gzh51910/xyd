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
	res.header("Acces-Control-Allow-Origin","*")
	// res.send("成功")
	// 处理CORS中的预请求
	if(req.method=="OPTIONS"){
		res.sendStatus(200)
	} else{
		next();
	}
	// next()
})
Router.use('/login', loginRouter)
Router.use("/addAdmin",addAdminRouter)
Router.use("/changeAdmin", changeAdminRouter)
Router.use('/deleAdmin',deleAdminRouter)
Router.use('/personal',personalRouter)
Router.use('/empty',emptyRouter)
module.exports=Router

