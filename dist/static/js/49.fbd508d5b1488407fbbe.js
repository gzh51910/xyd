webpackJsonp([49,73],{57:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"",pass1:"",pass2:"",phone:"",code:""}},methods:{goNext:function(){console.log("待开发")},smsAjax:function(){console.log("在此发送短信ajax--组件中已$emit该函数")}}}},205:function(e,t,a){var s=a(1)(a(57),a(322),null,null);e.exports=s.exports},322:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("topComponent",{attrs:{title:"注册征信查询账号"}}),e._v(" "),e._m(0),e._v(" "),a("ul",{staticClass:"formCom form-reportReg mt20"},[a("li",[a("label",[a("span",[e._v("登录名")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入登录名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),a("li",[a("label",[a("span",[e._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.pass1,expression:"pass1",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"6~12位且必须同时包含数字和字母"},domProps:{value:e.pass1},on:{input:function(t){t.target.composing||(e.pass1=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),a("li",[a("label",[a("span",[e._v("确认密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.pass2,expression:"pass2",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"请再次输入密码"},domProps:{value:e.pass2},on:{input:function(t){t.target.composing||(e.pass2=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),a("li",[a("label",[a("span",[e._v("手机号")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phone,expression:"phone",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),a("li",[a("label",[a("span",[e._v("短信验证码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.code,expression:"code",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"由6位字母及数字组成"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),a("sendSMS",{attrs:{btn:"发送验证码"},on:{sentAjax:e.smsAjax}})],1)]),e._v(" "),a("div",{staticClass:"btnWarp"},[a("span",{staticClass:"subBtn",on:{click:e.goNext}},[e._v("下一步")])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reportStepTit"},[a("ul",[a("li",{staticClass:"step01 ok"},[a("i",[e._v("1")]),e._v("填写信息")]),e._v(" "),a("li",{staticClass:"step02 ok"},[a("i",[e._v("2")]),e._v("补充信息")]),e._v(" "),a("li",{staticClass:"step03"},[a("i",[e._v("3")]),e._v("完成注册")])])])}]}}});