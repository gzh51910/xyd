<template>
  <div id="ceshi">
    <div class="title">
      <h3>信用贷后后管理系统</h3>
    </div>
    <div id="spacing">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm', ruleForm.pass, ruleForm.checkPass)"
          >提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import post from "../API/po.js"
import { post } from "../Api";
// import axios from "axios"
window.console.log(post);
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^[0-9]+$/.test(value)) {
        callback(new Error("密码只能是数字!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName, n2, p1) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let admin = n2;
          let password = p1;
          let { data } = await post("/login", {
            admin,
            password
          });
          // window.console.log(data);
          if (data == "失败") {
            alert("用户名或密码错误");
          } else {
            localStorage.setItem("admin", data);
            this.$router.replace("/admin");
            // window.console.log(data);
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
#spacing {
  margin-top: 70px;
  margin-left: 400px;
  margin-right: 400px;
}
.ground {
  width: 100%;
  height: 100%;
  font-size: 24px;
}
.title {
  padding-top: 40px;
}
#ceshi {
  width: 100%;
  height: 100%;
  background: url(../img/daxue_shumu-001.jpg) no-repeat;
  background-size: 100% 100%;
  text-align: center;
}
</style>
