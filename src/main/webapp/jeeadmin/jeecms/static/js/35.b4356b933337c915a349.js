webpackJsonp([35],{UDlp:function(t,n,a){var e=a("tcJ2");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("FIqI")("2fdc7de8",e,!0,{})},W6iz:function(t,n,a){"use strict";function e(t){a("UDlp")}Object.defineProperty(n,"__esModule",{value:!0});var i=a("2sCs"),s=a.n(i),o={data:function(){return{dataInfo:{},id:this.$route.query.id,loading:!1}},methods:{getInfo:function(){var t=this;this.loading=!0,s.a.post(this.$api.contentView,{id:this.id}).then(function(n){t.loading=!1,"200"==n.code&&(t.dataInfo=n.body)}).catch(function(n){t.loading=!1})},open:function(){window.open(this.dataInfo.urlDynamic)}},created:function(){this.getInfo()}},c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),t._v(" "),a("div",{staticClass:"cms-list-header"},[a("el-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("\n          预览\n      ")])],1),t._v(" "),a("article",{staticClass:"article"},[a("header",{staticClass:"article-header"},[a("h2",{staticClass:"article-title"},[t._v(t._s(t.dataInfo.title))]),t._v(" "),a("p",{staticClass:"gray"},[t._v("\n          作者："+t._s(t.dataInfo.username)+"  \n          浏览次数："+t._s(t.dataInfo.views)+"  \n          发布时间："+t._s(t.dataInfo.releaseDate)+"\n        ")])]),t._v(" "),a("section",{staticClass:"article-body",domProps:{innerHTML:t._s(t.dataInfo.txt)}})])],1)},l=[],r={render:c,staticRenderFns:l},d=r,f=a("Z0/y"),u=e,p=f(o,d,!1,u,null,null);n.default=p.exports},tcJ2:function(t,n,a){n=t.exports=a("UTlt")(!1),n.push([t.i,"\n.article-body{\n   line-height: 25px;\n}\n",""])}});