<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="data" label="借款日期" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="phone" label="电话号码" width="150"></el-table-column>
    <el-table-column prop="proofCard" label="身份证" width="150"></el-table-column>
    <el-table-column prop="site" label="地址" width="300"></el-table-column>
    <el-table-column prop="Days" label="借款天数" width="120"></el-table-column>
    <el-table-column prop="time" label="到期时间" width="120"></el-table-column>
    <el-table-column prop="sum" label="借款金额" width="120"></el-table-column>
    <el-table-column label="详情" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template slot-scope="scope">
        <el-button @click="a(scope.row)" type="success" size="mini">同意</el-button>
        <el-button type="danger" @click="b(scope.row)" size="mini">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { get } from "../Api";
// 贷款审核页
export default {
  methods: {
    handleClick() {
      alert("时间关系，该功能暂未开发");
    },
    async a(n) {
      await get("/addAu", { admin: n.name });
      alert("操作成功");
      let tableData = await get("/au");
      let data = tableData.data;
      //  window.console.log(data)
      // 把数据渲染到页面
      this.$data.tableData = data;
    },
    async b(n) {
      await get("/deleAdmin", { admin: n.name });
      alert("操作成功");
      let tableData = await get("/au");
      let data = tableData.data;
      //  window.console.log(data)
      // 把数据渲染到页面
      this.$data.tableData = data;
    }
  },
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
    let tableData = await get("/au");
    let data = tableData.data;
    //  window.console.log(data)
    // 把数据渲染到页面
    this.$data.tableData = data;
    // window.console.log(this.$data);
  }
};
</script>
