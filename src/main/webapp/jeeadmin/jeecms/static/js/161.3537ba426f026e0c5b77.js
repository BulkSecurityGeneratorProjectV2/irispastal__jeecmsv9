webpackJsonp([161],{CD5r:function(e,t,r){var s=r("eVVo");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("FIqI")("207de707",s,!0,{})},amKY:function(e,t,r){"use strict";function s(e){r("CD5r")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("PHrY"),a={data:function(){return{loading:!0,count:0,state:!1,resourceInfo:{filename:"",source:""},params:{showFileName:""},rules:{showFileName:[{required:!0,message:"请填写一个文件名",trigger:"blur"}]}}},methods:{getTemplateInfo:function(e){var t=this;o.k({name:e}).then(function(e){t.loading=!1,t.resourceInfo.source=e.body}).catch(function(e){t.loading=!1,t.$message.error("网络异常")})},updateResourceInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var r=t.resourceInfo;o.q(r).then(function(e){200==e.code?t.$message.success("修改成功"):t.$message.error(e.message)})})},addTemplateInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.resourceInfo.root=t.resourceInfo.filename,t.resourceInfo.filename=t.params.showFileName;var r=t.resourceInfo;o.b(r).then(function(e){200==e.code?(t.$message.success("添加成功"),t.resourceInfo.filename="",t.params.showFileName="",t.resourceInfo.source=""):t.$message.error(e.message)}).catch(function(e){t.$message.error("添加失败")})})},back:function(){this.$router.push({path:"/templatelist",query:{name:this.$route.query.root,noceStr:Math.round(10*Math.random())}})},resetForm:function(e){var t=this.$route.query.id;this.getTemplateInfo(t)},stringReplace:function(e){var t=e.lastIndexOf("/");return e=e.substring(t+1,e.length)}},created:function(){$(window).scrollTop(0);var e=this.$route.query.type,t=this.$route.query.id;this.$route.query.rootId;"add"==e?(this.resourceInfo.filename=t,this.loading=!1):"edit"==e&&(this.resourceInfo.filename=t,this.params.showFileName=this.stringReplace(t),this.getTemplateInfo(t))},mounted:function(){$("#tmp").slimScroll({height:"100%",width:"100%",color:"#999",opacity:.5}),$(window).scrollTop(0)},watch:{$route:function(e,t){var r=this.$route.query.id;this.params.showFileName=this.stringReplace(r),this.resourceInfo.filename=r,this.loading=!0,this.getTemplateInfo(r),$(window).scrollTop(0)}}},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("cms-back"),e._v(" "),r("el-form",{ref:"topicInfo",staticClass:"cms-form",staticStyle:{padding:"0",margin:"0"},attrs:{rules:e.rules,model:e.params,"label-width":"162px"}},[r("el-form-item",{staticClass:"flex-100",attrs:{label:"新建文件",prop:"showFileName"}},["edit"==e.$route.query.type?r("el-input",{staticClass:"cms-width",attrs:{disabled:!0},model:{value:e.params.showFileName,callback:function(t){e.$set(e.params,"showFileName",t)},expression:"params.showFileName"}}):e._e(),e._v(" "),"add"==e.$route.query.type?r("el-input",{staticClass:"cms-width",model:{value:e.params.showFileName,callback:function(t){e.$set(e.params,"showFileName",t)},expression:"params.showFileName"}}):e._e()],1),e._v(" "),r("el-form-item",{staticClass:"flex-100",attrs:{label:"内容"}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resourceInfo.source,expression:"resourceInfo.source"}],staticClass:"cms-width",staticStyle:{outline:"none"},attrs:{rows:"25",id:"tmp"},domProps:{value:e.resourceInfo.source},on:{input:function(t){t.target.composing||e.$set(e.resourceInfo,"source",t.target.value)}}})])],1),e._v(" "),r("div",{staticClass:"form-footer"},["edit"==e.$route.query.type?r("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templateedit",expression:"'/templateedit'"}],attrs:{type:"primary"},on:{click:function(t){e.updateResourceInfo("topicInfo")}}},[e._v("\n                  修改\n                ")]):e._e(),e._v(" "),"add"==e.$route.query.type?r("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templatesave",expression:"'/templatesave'"}],attrs:{value:"",type:"primary"},on:{click:function(t){e.addTemplateInfo("topicInfo")}}},[e._v("\n                  添加\n                ")]):e._e(),e._v(" "),r("el-button",{attrs:{type:"info"},on:{click:e.resetForm}},[e._v("重置")])],1)],1)},i=[],l={render:n,staticRenderFns:i},c=l,u=r("Z0/y"),m=s,f=u(a,c,!1,m,"data-v-0008f047",null);t.default=f.exports},eVVo:function(e,t,r){t=e.exports=r("UTlt")(!1),t.push([e.i,"\n.w128[data-v-0008f047] {\n  width: 320px;\n}\n",""])}});