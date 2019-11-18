<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="电话号码">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="身份证号">
            <span>{{ props.row.proofCard }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{ props.row.gender }}</span>
          </el-form-item>
          <el-form-item label="学历">
            <span>{{ props.row.Record }}</span>
          </el-form-item>
          <el-form-item label="婚姻状况">
            <span>{{ props.row.marriage }}</span>
          </el-form-item>
          <el-form-item label="住址">
            <span>{{ props.row.site }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label=" ID" prop="_id"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="时间" prop="desc"></el-table-column>
  </el-table>
</template>
<script>
import { get } from "../Api";
export default {
  data() {
    return {
      tableData: [
        {
          data: "2016-05-03"
        }
      ]
    };
  },

  async created() {
    let tableData = await get("/per");
    let data = tableData.data;
    window.console.log(data);
    // 把数据渲染到页面
    this.$data.tableData = data;
    window.console.log(this.$data);
  }
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
