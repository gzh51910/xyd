webpackJsonp([21,73],{89:function(r,t,o){"use strict";function e(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(150),a=e(s);t.default={data:function(){return{hasBorrow:!0,hasMore:!0,borrowMsg:"没有任何借款记录",borrowCls:"error-txt",list:[]}},mounted:function(){void 0===a.default.totalSize?this.hasBorrow=!1:this.list=a.default.data}}},150:function(r,t){r.exports={data:[],success:!0}},239:function(r,t,o){var e=o(1)(o(89),o(298),null,null);r.exports=e.exports},298:function(r,t){r.exports={render:function(){var r=this,t=r.$createElement,o=r._self._c||t;return o("div",{staticClass:"userBorrow"},[o("borrowTitle",{attrs:{idx:2}}),r._v(" "),r.hasBorrow?o("borrowList",{attrs:{items:r.list}}):r._e(),r._v(" "),r.hasBorrow?r._e():o("pageError",{class:r.borrowCls,attrs:{msg:r.borrowMsg}}),r._v(" "),r.hasMore?r._e():o("noMore")],1)},staticRenderFns:[]}}});