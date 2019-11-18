const express = require('express');

let Router = express.Router();

let loginRouter = require('./login')
let addAdminRouter = require("./addAdmin")
let changeAdminRouter = require('./changeAdmin')
let deleAdminRouter = require("./deleAdmin")
let personalRouter = require("./Personal ")
let emptyRouter = require("./empty")
let auRouter = require("./au")
let addAuRouter = require("./addAu")
let defaAuRouter = require("./defa")
let perRouter = require("./per")
let adminRouter = require("./admin")
let deadmin = require("./deadmin ")
let user=require("./user")
let dluser=require("./dluser")
let adduser=require("./adduser")
// console.log("hah")
// 设置跨域解决方案
// 不设置请求路径所有请求都会进入到这里,进行中间处理
Router.use((req, res, next) => {
	// 允许所有的端口访问
	res.header("Access-Control-Allow-Origin", "*")
	// 允许访问的请求头类型
	res.header("Access-Control-Allow-Headers", "content-type");

	// next();
	// res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
	// res.send("成功")
	// 处理CORS中的预请求
	if (req.method == "OPTIONS") {
		res.sendStatus(200)
	} else {
		next();
	}
	// next()
	// res.send("成功")
})
// 转成json格式数据
Router.use(express.json(), express.urlencoded({
	extended: false
}));
// console.log('aaaa')
Router.use('/login', loginRouter)
Router.use("/addAdmin", addAdminRouter)
Router.use("/changeAdmin", changeAdminRouter)
Router.use('/deleAdmin', deleAdminRouter)
Router.use('/personal', personalRouter)
Router.use('/empty', emptyRouter)
Router.use('/au', auRouter)
Router.use('/addAu', addAuRouter)
Router.use('/defa', defaAuRouter)
Router.use('/per', perRouter)
Router.use('/admin', adminRouter)
Router.use('/deadmin', deadmin)
Router.use('/user', user)
Router.use('/dluser', dluser)
Router.use('/adduser',adduser)
module.exports = Router