<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="data" label="借款日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="phone" label="电话号码" width="180"></el-table-column>
    <el-table-column prop="card" label="身份证号" width="180"></el-table-column>
    <el-table-column prop="ress" label="住址" width="180"></el-table-column>
    <el-table-column prop="time" label="到期时间" width="180"></el-table-column>
    <el-table-column prop="days" label="超出天数" width="180"></el-table-column>
  </el-table>
</template>
<script>
import { get } from "../Api";
export default {
  data() {
    return {
      tableData: [{}]
    };
  },

  async created() {
    let tableData = await get("/defa");
    let data = tableData.data;
    //  window.console.log(data)
    // 把数据渲染到页面
    this.$data.tableData = data;
    window.console.log(this.$data);
  }
};
</script>
