webpackJsonp([141],{"9YC/":function(n,t,e){var a=e("YHHt");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("FIqI")("1fd533ae",a,!0,{})},YHHt:function(n,t,e){t=n.exports=e("UTlt")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},tEhn:function(n,t,e){"use strict";function a(n){e("9YC/")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("HzJ8"),r=e.n(s),o=e("a3Yh"),l=e.n(o),i=e("2sCs"),c=e.n(i),d=e("x1ym"),f=e("lcoF"),p={mixins:[f.a],data:function(){var n,t=d.a.required("此项必填");return{rules:(n={name:[t],priority:[t,d.a.number("只能输入数字")]},l()(n,"name",[t]),l()(n,"controlChannelIds",[t]),l()(n,"channelIds",[t]),n),departments:[],flag:!0,guessbookTypes:[],selectDepartments:[],selectCtgs:[],reload:!0}},methods:{getControlChannels:function(n){this.dataInfo.controlChannelIds=[];var t=!0,e=!1,a=void 0;try{for(var s,o=r()(n);!(t=(s=o.next()).done);t=!0){var l=s.value;l.type||this.dataInfo.controlChannelIds.push(l.id)}}catch(n){e=!0,a=n}finally{try{!t&&o.return&&o.return()}finally{if(e)throw a}}},getChannels:function(n){this.dataInfo.channelIds=[];var t=!0,e=!1,a=void 0;try{for(var s,o=r()(n);!(t=(s=o.next()).done);t=!0){var l=s.value;l.type||this.dataInfo.channelIds.push(l.id)}}catch(n){e=!0,a=n}finally{try{!t&&o.return&&o.return()}finally{if(e)throw a}}},getDataInfo:function(n){var t=this,e=this.$api;c.a.post(e.departmentGet,{id:n}).then(function(n){t.loading=!1,t.dataInfo=n.body,t.selectDepartments=t.dataInfo.parents,t.dataInfo.parents.length>0&&t.selectDepartments.splice(t.selectDepartments.length-1,1),0==t.dataInfo.parents.length&&(t.selectDepartments=[""]);var e=t.dataInfo.ctgs;if(e.length>0){var a=!0,s=!1,o=void 0;try{for(var l,i=r()(e);!(a=(l=i.next()).done);a=!0){var c=l.value;t.selectCtgs.push(c.id)}}catch(n){s=!0,o=n}finally{try{!a&&i.return&&i.return()}finally{if(s)throw o}}}t.dataInfo.channelIds=t.formateChannelIds(t.dataInfo.channels),t.dataInfo.controlChannelIds=t.formateChannelIds(t.dataInfo.controlChannels),t.getDepartment()}).catch(function(n){t.loading=!1})},formateChannelIds:function(n){var t=[],e=!0,a=!1,s=void 0;try{for(var o,l=r()(n);!(e=(o=l.next()).done);e=!0){var i=o.value;t.push(i.channelId)}}catch(n){a=!0,s=n}finally{try{!e&&l.return&&l.return()}finally{if(a)throw s}}return t},formateControllerChannelIds:function(n){var t=[],e=!0,a=!1,s=void 0;try{for(var o,l=r()(n);!(e=(o=l.next()).done);e=!0){var i=o.value;t.push(i.channelId)}}catch(n){a=!0,s=n}finally{try{!e&&l.return&&l.return()}finally{if(a)throw s}}return t},getGuessbookType:function(){var n=this;c.a.post(this.$api.guestbookTypeList).then(function(t){"200"==t.code&&(n.guessbookTypes=t.body)})},getDepartment:function(){var n=this;c.a.post(this.$api.departmentTree).then(function(t){"200"==t.code&&(t.body.unshift({id:"",name:"根目录",pid:"",priority:0,weights:1}),n.departments=t.body,n.filterDepartment(n.departments))})},getparam:function(){var n={};return n.id=this.dataInfo.id,n.name=this.dataInfo.name,n.priority=this.dataInfo.priority,n.channelIds=this.dataInfo.channelIds.join(","),n.controlChannelIds=this.dataInfo.controlChannelIds.join(","),this.selectDepartments.length>0&&(n.pid=this.selectDepartments[this.selectDepartments.length-1]),this.selectCtgs.length>0&&(n.ctgIds=this.selectCtgs.join(",")),n},filterDepartment:function(n){for(var t in n)n[t].id==this.dataInfo.id&&n.splice(t,1)},update:function(){this.updateDataInfo(this.$api.departmentUpdate,this.getparam(),"list")},reset:function(){var n=this;this.getDataInfo(this.id),this.getGuessbookType(),this.flag=!1,setTimeout(function(){n.flag=!0},10)}},created:function(){this.getDataInfo(this.id),this.getGuessbookType()},watch:{$route:function(n,t){var e=this;this.reload=!1,this.flag=!1,setTimeout(function(){e.getDataInfo(e.$route.query.id),e.getGuessbookType(),e.reload=!0,e.flag=!0},5)}}},h=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.reload?e("section",[e("cms-back"),n._v(" "),e("div",{staticClass:"cms-list-header"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){n.routerLink("/department/add","save",0,{pid:n.selectDepartments})}}},[n._v("添加")])],1),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"上级部门",prop:"selectDepartments"}},[e("el-cascader",{staticClass:"cms-width",attrs:{props:{value:"id",label:"name",children:"child"},options:n.departments,"change-on-select":"",filterable:""},model:{value:n.selectDepartments,callback:function(t){n.selectDepartments=t},expression:"selectDepartments"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"部门名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(t){n.$set(n.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"排序",prop:"priority"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.priority,callback:function(t){n.$set(n.dataInfo,"priority",t)},expression:"dataInfo.priority"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"留言审核权限",prop:"ctgs"}},[n.guessbookTypes.length>0?e("el-checkbox-group",{model:{value:n.selectCtgs,callback:function(t){n.selectCtgs=t},expression:"selectCtgs"}},n._l(n.guessbookTypes,function(t,a){return e("el-checkbox",{key:n.guessbookTypes[a].id,attrs:{label:n.guessbookTypes[a].id}},[n._v(n._s(n.guessbookTypes[a].name))])})):n._e()],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目权限",prop:"channelIds"}},[e("div",{staticStyle:{"min-height":"400px"}},[n.flag?e("cms-site-dialog",{ref:"channelTree",attrs:{expandAll:!0,checkIds:n.dataInfo.channelIds,showCheck:"channel",isFilterCurrentSite:!1,isAnsy:!1},on:{change:n.getChannels}}):n._e()],1)]),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目权限控制",prop:"controlChannelIds"}},[e("div",{staticStyle:{"min-height":"400px"}},[n.flag?e("cms-site-dialog",{attrs:{expandAll:!0,checkIds:n.dataInfo.controlChannelIds,showCheck:"channel",isFilterCurrentSite:!1,isAnsy:!1},on:{change:n.getControlChannels}}):n._e()],1)]),n._v(" "),e("div",{staticClass:"form-footer"},[n.isType("update")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/department/update",expression:"'/department/update'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")]),n._v(" "),n.isType("save")?e("span",{staticClass:"gray"},[n._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):n._e()],1)],1)],1):n._e()},u=[],m={render:h,staticRenderFns:u},v=m,y=e("Z0/y"),g=a,I=y(p,v,!1,g,null,null);t.default=I.exports}});