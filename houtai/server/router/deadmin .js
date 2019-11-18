const express = require('express');

// const Router=express.Router();

const Router = express.Router();

const {
    delOne
} = require("../db/methods")

// 删除管理员
const nane = "admin"


Router.post("/", async (req, res) => {
    // console.log(req.body,"成功asd")
    let {
        admin
    } = req.body;
    // console.log({"admin":admin})
    await delOne(nane, {
        "admin": admin
    })

    res.send("删除成功")
})

module.exports = Router