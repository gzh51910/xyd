webpackJsonp([30,73],{13:function(n,a){n.exports=[{cls:"bank10",name:"招商银行",id:1},{cls:"bank20",name:"工商银行"},{cls:"bank30",name:"农业银行"},{cls:"bank40",name:"中国银行"},{cls:"bank50",name:"浦发银行"},{cls:"bank60",name:"建设银行"},{cls:"bank70",name:"邮政储蓄银行"},{cls:"bank80",name:"交通银行"},{cls:"bank90",name:"北京银行"},{cls:"bank100",name:"光大银行"},{cls:"bank110",name:"兴业银行"},{cls:"bank120",name:"民生银行"},{cls:"bank130",name:"中信银行"},{cls:"bank140",name:"平安银行"},{cls:"bank150",name:"广发银行"},{cls:"bank160",name:"华夏银行"},{cls:"bank170",name:"深圳农村商业银行"},{cls:"bank180",name:"上海银行"},{cls:"bank190",name:"重庆农村商业银行"}]},63:function(n,a,e){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(a,"__esModule",{value:!0});var s=e(13),c=t(s);a.default={data:function(){return{datas:[]}},mounted:function(){this.datas=c.default}}},210:function(n,a,e){var t=e(1)(e(63),e(294),null,null);n.exports=t.exports},294:function(n,a){n.exports={render:function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{staticClass:"container"},[e("topComponent",{attrs:{title:"请选择银行"}}),n._v(" "),e("ul",{staticClass:"listCom list-arrow list-bank no-top"},n._l(n.datas,function(a,t){return e("li",{class:a.cls,on:{click:function(a){return n.$router.push("/credit/waterLogin/"+t)}}},[n._v("\n      "+n._s(a.name)+"\n    ")])}),0)],1)},staticRenderFns:[]}}});