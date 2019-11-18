<template>
  <div class="aa">
    <!-- 这里采用编程式导航 -->
    <!-- 声明式导航影响布局 -->
    <!-- 后来发现elemenetg官网有更好的解决方案 -->
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
      <el-menu-item :key="10" @click="openVn">更多功能开发中</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "/approval", navItem: "贷款审核" },
        { name: "/defa", navItem: "违约人员" },
        { name: "/per", navItem: "贷款人信息" },
        { name: "/Acc", navItem: "管理员" },
        { name: "/user", navItem: "用户管理" },
        { name: "/note", navItem: "版本信息" }
      ]
    };
  },
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "敬请期待我们的版本更新 "),
          h("i", { style: "color: teal" })
        ])
      });
    }
  }
};
</script>
<style scoped>
.aa {
  width: 100%;
  height: 100%;
  background: url(../img/背景图.jpg) no-repeat;
  background-size: 100% 100%;
  /* text-align: center */
}
span {
  display: inline-block;
}
</style>
