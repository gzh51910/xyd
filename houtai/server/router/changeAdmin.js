const express = require('express');

const Router = express.Router();

const {
    Modify
} = require("../db/methods")

// 修改管理员密码
const nane = "admin"


Router.post("/", async (req, res) => {
    // console.log(req.body,"成功asd")
    let {
        admin,
        password
    } = req.body;
    password = password * 1
    // console.log({"admin":admin,"password":password})
    await Modify(nane, {
        "admin": admin
    }, {
        $set: {
            "password": password
        }
    })
    // 修改格式
    // Modify(name,{"admin":"zhangsan"},{$set:{"password":987654321}})
    res.send("修改成功")
})

module.exports = Router