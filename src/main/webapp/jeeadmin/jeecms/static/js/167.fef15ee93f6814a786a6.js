webpackJsonp([167],{IT3q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("5HJ5"),n={mixins:[l.a],data:function(){return{params:{title:"",pageNo:"",pageSize:""}}},methods:{},created:function(){this.initTableData(this.$api.jobapplyList,this.params)}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("cms-input",{attrs:{label:"申请职位"},model:{value:e.params.title,callback:function(t){e.$set(e.params,"title",t)},expression:"params.title"}}),e._v(" "),a("el-button",{on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contentTitle",label:"职位申请",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("a",{staticClass:"link",attrs:{href:t.row.contentURL,title:"申请职位",target:"_blank"}},[e._v(e._s(t.row.contentTitle))])])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"申请用户",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"applyTime",label:"申请时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"简历",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("a",{staticClass:"link",on:{click:function(a){e.routerLink("/job/seek",t.row.userId,t.row.contentId)}}},[e._v("查看")])])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{},[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/job/delete",expression:"'/job/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){e.deleteBatch(e.$api.jobapplyDelete,t.row.id)}}})],1)}}])})],1),e._v(" "),a("div",{staticClass:"cms-list-footer "},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/job/delete",expression:"'/job/delete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteBatch(e.$api.jobapplyDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},i=[],r={render:s,staticRenderFns:i},o=r,c=a("Z0/y"),d=c(n,o,!1,null,null,null);t.default=d.exports}});