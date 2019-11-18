<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="_id" label="序列号" width="230"></el-table-column>
    <el-table-column prop="admin" label="用户名" width="120"></el-table-column>
    <el-table-column prop="password" label="密码" width="300"></el-table-column>
    <el-table-column label="操作" width="160">
      <template slot-scope="scope">
        <el-button type="success" size="small" @click="open">添加</el-button>
        <el-button @click="handleClick(scope.row.admin)" size="small" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { get, post } from "../Api";
export default {
  methods: {
    // let admin
    open() {
      this.$prompt("请设置用户名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          let admin = value;
          this.$prompt("请设置密码", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /^[0-9]+$/,
            inputErrorMessage: "密码只能是数字"
          })
            .then(async ({ value }) => {
              let password = value;
              let res = await post("/user", {
                admin,
                password
              });
              alert(`${res.data}`);
              let tableData = await get("/adduser");
              let data = tableData.data;
              //  window.console.log(data)
              // 把数据渲染到页面
              this.$data.tableData = data;
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "取消输入"
              });
            });
          this.$message({
            type: "success",
            message: "你用户名是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
      // window.console.log(password)
    },
    async handleClick(row) {
      window.console.log(row);
      let admin = row;
      let res = await post("/dluser", {
        admin
      });
      alert(res.data);
      let tableData = await get("/adduser");
      let data = tableData.data;
      //  window.console.log(data)
      // 把数据渲染到页面
      this.$data.tableData = data;
    }
  },

  data() {
    return {
      tableData: [{}]
    };
  },
  async created() {
    let tableData = await get("/adduser");
    let data = tableData.data;
    //  window.console.log(data)
    // 把数据渲染到页面
    this.$data.tableData = data;
    window.console.log(this.$data);
  }
};
</script>
