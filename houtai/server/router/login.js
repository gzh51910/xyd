const express = require('express');

const Router = express.Router();

// 引入token
var jwt = require('jsonwebtoken');

const {
    query
} = require("../db/methods")

// 管理员登陆
const nane = "admin"


Router.post("/", async (req, res) => {
    // console.log(req.body)
    let {
        admin,
        password
    } = req.body;
    password = password * 1
    // console.log({"admin":admin,"password":password})
    let result = await query(nane, {
        "admin": admin,
        "password": password
    })
    // console.log(result)

    if (result.length > 0) {
        // res.send("成功")
        let a = jwt.sign({
            // 有效期，data.now获取当前的时间戳,后面60*60表示秒,表在示当前的时间上加上1小时
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            // 加密的数据
            data: '成功'
            // secret加密方法
        }, 'wang')
        let Authorization = a;
        res.set({
            // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
            'Access-Control-Expose-Headers': 'Authorization',
            'Authorization': Authorization
        });
        res.send(a)
        //   console.log(a)
    } else {
        res.end("失败")
    }

})

module.exports = Router