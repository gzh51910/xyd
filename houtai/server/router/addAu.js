const express = require('express');

// const Router=express.Router();

const Router = express.Router();

const {
    delOne,
    query,
    add
} = require("../db/methods")

// 审核通过删除数据
const nane = "audit"
const add2 = "pass"


Router.get("/", async (req, res) => {
    console.log(req.query, "成功asd")
    let {
        admin
    } = req.query;
    //  password=password*1
    await delOne(nane, {
        "name": admin
    })
    res.send("删除成功")
})

module.exports = Router