webpackJsonp([137],{"8XNO":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"\n.tree-left[data-v-23f43cc2]{\n  width: 200px;\n  float: left;\n}\n.tree-right[data-v-23f43cc2]{\n  margin-left: 200px;\n}\n.font-bold[data-v-23f43cc2]{\n  font-weight: bold;\n}\n.iconfont[data-v-23f43cc2]{\n  color: #409EFF;\n}\n.dialog .tree-layout[data-v-23f43cc2]{\n  min-height: 400px;\n  width: 90%;\n}\n.dialog .tree-layout .tree[data-v-23f43cc2]{\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: absolute;\n  border-right: 0px solid #d4dde2;\n}\n.el-dialog__body[data-v-23f43cc2]{\n  min-height: 450px;\n  overflow: auto;\n}\n.red-color[data-v-23f43cc2]{\n  color: red;\n}\n  \n",""])},BQ0O:function(e,t,a){"use strict";function l(e){a("jZ5G")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("5HJ5"),n=a("2sCs"),o=a.n(n),i={mixins:[s.a],data:function(){return{params:{queryStatus:"",queryTypeId:"",queryTopLevel:"",queryRecommend:"",queryUsername:"",queryTitle:"",queryOrderBy:"",querySiteId:"",pageNo:"",pageSize:""},types:[],labelDialogTitle:"",dialogVisible:!1,operateType:"",currentCheckChannelId:"",props:{label:"name",children:"zones",isLeaf:"isChild",id:"id"}}},methods:{getTableData:function(e){var t=this;o.a.all([o.a.post(this.$api.contentRenuseList,e),o.a.post(this.$api.contentRenusePage,e)]).then(o.a.spread(function(e,a){t.tableData=e.body,t.total=a.body.totalCount,t.loading=!1})).catch(function(e){t.loading=!1})},nodeClik:function(e){this.params.querySiteId=e.id,this.getTableData(this.params)},handleClose:function(e){e()},ansyTree:function(e,t){if(0===e.level)return t([{name:"根目录",id:"",isChild:!0}]);e.level>0&&o.a.post(this.$api.channelList,{parentId:e.data.id}).then(function(e){var a=[];for(var l in e.body){var s={};s.id=e.body[l].id,s.isChild=!(e.body[l].childCount>0),s.name=e.body[l].name,a.push(s)}return t(a)})},operate:function(e){this.dialogVisible=!0,this.operateType=e,this.labelDialogTitle=("copy"==e?"复制":"引用")+this.$getSiteName()},checkChange:function(e,t,a){t&&(this.currentCheckChannelId=e.id,this.$refs.channelTree.setCheckedKeys([e.id],!0))},confirm:function(){var e=this,t="",a={};if(a.channelId=this.currentCheckChannelId,a.ids=this.ids,"copy"==this.operateType)t=this.$api.contentCopy,a.siteId=this.$getSiteId();else{if("cite"!=this.operateType)return!1;t=this.$api.contentRefer}this.loading=!0,o.a.post(t,a).then(function(t){"200"==t.code&&(e.loading=!1,e.dialogVisible=!1,e.successMessage("copy"==e.operateType?"复制成功":"引用成功"))}).catch(function(t){e.loading=!1})},getTypeList:function(e){var t=this;o.a.post(this.$api.typeList,{hasContentOnly:!0}).then(function(e){"200"==e.code&&(t.types=e.body)}).catch(function(e){})}},created:function(){this.getTableData(this.params),this.getTypeList()}},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("section",{staticClass:"tree-left"},[a("cmsSiteTree",{on:{"node-click":e.nodeClik}})],1),e._v(" "),a("section",{staticClass:"tree-right"},[a("div",{staticClass:"cms-list-header"},[a("cms-input",{attrs:{label:"标题"},model:{value:e.params.queryTitle,callback:function(t){e.$set(e.params,"queryTitle",t)},expression:"params.queryTitle"}}),e._v(" "),a("cms-input",{attrs:{label:"发布者"},model:{value:e.params.queryUsername,callback:function(t){e.$set(e.params,"queryUsername",t)},expression:"params.queryUsername"}}),e._v(" "),a("el-button",{on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"cms-list-header"},[a("el-select",{on:{change:e.query},model:{value:e.params.queryTypeId,callback:function(t){e.$set(e.params,"queryTypeId",t)},expression:"params.queryTypeId"}},e._l(e.types,function(t,l){return a("el-option",{key:l,attrs:{label:e.types[l].name,value:e.types[l].id}})})),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.params.queryOrderBy,callback:function(t){e.$set(e.params,"queryOrderBy",t)},expression:"params.queryOrderBy"}},[a("el-option",{attrs:{label:"ID降序",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"ID升序",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"发布时间降",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"发布时间升",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"固定降,发布降",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"固定降,发布升",value:"5"}}),e._v(" "),a("el-option",{attrs:{label:"日点击降",value:"6"}}),e._v(" "),a("el-option",{attrs:{label:"周点击降",value:"7"}}),e._v(" "),a("el-option",{attrs:{label:"月点击降",value:"8"}}),e._v(" "),a("el-option",{attrs:{label:"总点击降",value:"9"}}),e._v(" "),a("el-option",{attrs:{label:"日评论降",value:"10"}}),e._v(" "),a("el-option",{attrs:{label:"周评论降",value:"11"}}),e._v(" "),a("el-option",{attrs:{label:"月评论降",value:"12"}}),e._v(" "),a("el-option",{attrs:{label:"总评论降",value:"13"}}),e._v(" "),a("el-option",{attrs:{label:"日下载降",value:"14"}}),e._v(" "),a("el-option",{attrs:{label:"周下载降",value:"15"}}),e._v(" "),a("el-option",{attrs:{label:"月下载降",value:"16"}}),e._v(" "),a("el-option",{attrs:{label:"总下载降",value:"17"}}),e._v(" "),a("el-option",{attrs:{label:"日顶降",value:"18"}}),e._v(" "),a("el-option",{attrs:{label:"周顶降",value:"19"}}),e._v(" "),a("el-option",{attrs:{label:"月顶降",value:"20"}}),e._v(" "),a("el-option",{attrs:{label:"总顶降",value:"21"}})],1),e._v(" "),a("el-checkbox",{attrs:{"true-label":"1","false-label":""},on:{change:e.query},model:{value:e.params.queryTopLevel,callback:function(t){e.$set(e.params,"queryTopLevel",t)},expression:"params.queryTopLevel"}},[e._v("固定")]),e._v(" "),a("el-checkbox",{attrs:{"true-label":"1","false-label":""},on:{change:e.query},model:{value:e.params.queryRecommend,callback:function(t){e.$set(e.params,"queryRecommend",t)},expression:"params.queryRecommend"}},[e._v("推荐")]),e._v(" "),a("div",{staticStyle:{"margin-top":"16px"}},[a("el-radio-group",{on:{change:e.query},model:{value:e.params.queryStatus,callback:function(t){e.$set(e.params,"queryStatus",t)},expression:"params.queryStatus"}},[a("el-radio",{attrs:{label:"all"}},[e._v("本站内容")]),e._v(" "),a("el-radio",{attrs:{label:"draft"}},[e._v("草稿")]),e._v(" "),a("el-radio",{attrs:{label:"prepared"}},[e._v("待审")]),e._v(" "),a("el-radio",{attrs:{label:"passed"}},[e._v("已审")]),e._v(" "),a("el-radio",{attrs:{label:"checked"}},[e._v("终审")]),e._v(" "),a("el-radio",{attrs:{label:"rejected"}},[e._v("退回")])],1)],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"400",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticClass:"overflow-text"},[t.row.shared&&e.$getSiteId()==t.row.siteId?a("span",{staticClass:"red-color",attrs:{title:"从其他站点共享到本站的内容"}},[e._v("源\n            ")]):e._e(),e._v(" "),t.row.shared&&e.$getSiteId()!=t.row.siteId?a("span",{staticClass:"red-color",attrs:{title:"从其他站点共享到本站的内容"}},[e._v("享\n            ")]):e._e(),e._v(" "),a("span",{staticClass:"font-bold"},[e._v("["+e._s(t.row.channelName)+"] ")]),e._v(" "),a("a",{staticClass:"link",attrs:{title:t.row.title,href:t.row.siteUrl,target:"_blank"}},[a("span",[e._v(e._s(t.row.title))])])])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"发布者",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"releaseDate",label:"发布时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[-1==t.row.status?a("span",[e._v("退回")]):e._e(),e._v(" "),0==t.row.status?a("span",[e._v("草稿")]):e._e(),e._v(" "),1==t.row.status?a("span",[e._v("审核中 ")]):e._e(),e._v(" "),2==t.row.status?a("span",[e._v("审核通过")]):e._e(),e._v(" "),3==t.row.status?a("span",[e._v("回收站")]):e._e(),e._v(" "),4==t.row.status?a("span",[e._v("投稿")]):e._e(),e._v(" "),5==t.row.status?a("span",[e._v("归档")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentReuse/copy",expression:"'/contentReuse/copy'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.operate("copy")}}},[e._v("复制\n        ")]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/contentReuse/refer",expression:"'/contentReuse/refer'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.operate("cite")}}},[e._v("引用\n        ")])],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1),e._v(" "),a("el-dialog",{staticClass:"dialog",attrs:{title:e.labelDialogTitle,visible:e.dialogVisible,width:"25%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"tree-layout"},[a("div",{staticClass:"tree"},[a("el-tree",{ref:"channelTree",attrs:{load:e.ansyTree,lazy:"",props:e.props,"default-expanded-keys":[""],"show-checkbox":"",indent:16,"node-key":"id"},on:{"check-change":e.checkChange}})],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("关闭")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确认")])],1)])],1)},c=[],d={render:r,staticRenderFns:c},p=d,u=a("Z0/y"),v=l,b=u(i,p,!1,v,"data-v-23f43cc2",null);t.default=b.exports},jZ5G:function(e,t,a){var l=a("8XNO");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("FIqI")("69601d80",l,!0,{})}});