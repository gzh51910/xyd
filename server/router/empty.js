const express=require('express');

const Router=express.Router();

const{del}=require("../db/methods")

// 清空所有数据
const nane="admin"


Router.get("/",async(req,res)=>{

    await del(name)
    res.send("已删除所有")
    // 修改格式
    // Modify(name,{"admin":"zhangsan"},{$set:{"password":987654321}})
    //  res.send(res.result.nModified)
})

module.exports=Router