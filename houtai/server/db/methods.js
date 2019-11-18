const {connect}=require("./mogdb")

/**
 * 
 * @param {string} name    集合名字
 * @param {object} conditions  查询条件
 */
// 添加
async function add(name,conditions){
    let {client,db} = await connect()
    let data= await db.collection(name).insertOne(conditions)
    client.close();
    return data
}
// add("admin",{"admin":"zhangsan","password":7891011})

//  查询
async function query(name,conditions=""){
    let {client,db} = await connect()
    let data= await db.collection(name).find(conditions).toArray()
    // console.log(data)
    client.close();
    return data
 }
//  query()
/**
 * 
 * @param {object} value     修改的值 
 * @param {object} conditions 条件
 */
//  修改
async function Modify(name,conditions,value){
    let {client,db} = await connect()
    await db.collection(name).updateOne(conditions,value)
    client.close();
    // console.log(data)
    // return data
}
// Modify("admin",{"admin":"zhangsan"},{$set:{"password":987654321}})

//删除所有
async function del(name,conditions=""){
    let {client,db} = await connect()
    let data= await db.collection(name).remove(conditions)
    // 关闭连接释放资源
    client.close();
    console.log(data)
}
// del(name,{"admin":"zhangan"})

// 删除单个

async function delOne(name,conditions){
    let {client,db} = await connect()
    let data= await db.collection(name).deleteOne(conditions)
    // 关闭连接释放资源
    client.close();
    console.log(data)
}

module.exports={
    add,
    del,
    Modify,
    query,
    delOne
}

