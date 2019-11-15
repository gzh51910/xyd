// 引入模块
const{MongoClient,objectId}=require('mongodb')
// const assert = require('assert');

// 连接mongDB数据库
const {dbUrl,dbName}=require("../config.json")

// mongodbclient默认返回一个pormins对象
// 传回调结果就在回调函数里出现，不传结果就在promis对象中出现
async function connect(){
  const client =await MongoClient.connect(dbUrl,{useUnifiedTopology: true})
  // client连接成功后的mongo客户端
  const db=client.db(dbName);
  console.log("Connected successfully to server")
  return {client,db}
}
  // 连接测试
// async function a (){
//   let {client,db}= await connect()
//   console.log(db)
// }
// a()
module.exports={
  connect
}