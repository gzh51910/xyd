const express=require('express');

const Router=express.Router();

const{query}=require("../db/methods")

// const Router=express.Router();

// 查询所有违约信息
const nane="defa"


Router.get("/",async(req,res)=>{
    
    let {admin}=  req.body;

    console.log({"admin":admin})
    // 该函数接收两个参数
    /**
     * nane  查询的集合
     * conditions 查询条件
     */
    let data = await query(nane)
    // console.log("成功")
     res.send(data)
})

module.exports=Router