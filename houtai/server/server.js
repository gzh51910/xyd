// 引入模块
const express = require('express');

const app = express();

const {
    PORT
} = require('./config.json');

const allRouter = require('./router')

// var bodyParser = require('body-parser')

// 设置静态服务器
// ./表示当前目录下所有
app.use(express.static('./'))

app.use(allRouter);

app.listen(PORT, () => {
    console.log(`服务器已成功启动，端口${PORT}`)
})