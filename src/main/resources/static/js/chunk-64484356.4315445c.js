(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64484356"],{"845f":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return c}));var s=a("bc3a"),n=a.n(s),r=n.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function i(t){return r.get("/KAKND01/getList",t)}function o(t){return r.post("/KAKND01/postManual",t)}function l(t){return r.get("/KAKND01/getDetail",t)}function c(t){return r.post("/KAKND01/delete",t)}},9002:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrap"}},[a("KAKND0104Form")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ct"}},[a("section",{staticClass:"card"},[a("header",{staticClass:"card-header",staticStyle:{padding:"1.6rem 1rem"}},[t._m(0),a("div",{staticClass:"btn-container"},[t.chkUserType()?a("div",[a("a",{staticClass:"btn btn-m",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.clickModify(e)}}},[a("span",{staticClass:"hide"},[t._v("수정")])]),a("a",{staticClass:"btn btn-m",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.clickDelete(e)}}},[a("span",{staticClass:"hide"},[t._v("삭제")])]),t._m(1)]):a("div",[t._m(2)])])]),a("div",{staticClass:"ct-header"},[t._m(3),a("div",{staticClass:"collapse collapse-filter ",attrs:{id:"collapse-filter"}},[a("div",{staticClass:"filter no-gutters"},[a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label"},[a("b",{staticClass:"control-label"},[t._v("제목")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label"},[a("b",{staticClass:"control-label"},[t._v("솔루션")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.solution,expression:"solution"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.solution},on:{input:function(e){e.target.composing||(t.solution=e.target.value)}}})])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label"},[a("b",{staticClass:"control-label"},[t._v("버전")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.version,expression:"version"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.version},on:{input:function(e){e.target.composing||(t.version=e.target.value)}}})])])])])]),a("div",{staticClass:"ct-content"},[a("div",{staticClass:"form-group form-group-editor"},[a("p",{staticClass:"textarea-basic-md"},[a("span",{domProps:{innerHTML:t._s(t.content)}})])])]),a("div",{staticClass:"form-group"},[t._m(4),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[t._m(5),t._m(6),a("tbody",[""==t.files?a("tr",[t._m(7),a("td"),a("td",[t._v("0kbytes")]),a("td",{staticClass:"text-nowrap"})]):t._e(),t._l(t.files,(function(e,s){return a("tr",{key:s},[a("td",[a("span",[t._v(t._s(e.org_file_name))])]),a("td",[t._v(t._s(e.file_ext_name))]),a("td",[t._v(t._s(e.file_size/1e3)+" KBytes")]),a("td",{staticClass:"text-nowrap"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(a){return t.download(e.save_file_name,e.org_file_name)}}},[t._v("다운로드")])])])}))],2)])]),a("alert",{attrs:{dialog:t.isDialog},on:{postDelete:t.postDelete,close:function(e){t.isDialog=!1}}})],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"card-title"},[a("span",{staticClass:"i-rounded bg-danger"},[a("i",{staticClass:"icon-file-text"})]),t._v("지식자료실")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-primary",attrs:{href:"../manual"}},[a("span",{staticClass:"hide"},[t._v("목록")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-primary",attrs:{href:"../manual"}},[a("span",{staticClass:"hide"},[t._v("목록")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-filter collapsed d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-filter"}},[t._v("검색 필터"),a("i",{staticClass:"icon-down"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sub-bar"},[a("i",{staticClass:"icon-right text-danger"}),a("p",{staticClass:"font-weight-bold"},[t._v("첨부파일")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("colgroup",[a("col",{staticStyle:{width:"25%"}}),a("col",{staticStyle:{width:"40%"}}),a("col"),a("col",{staticStyle:{width:"1%"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("이름")]),a("th",{attrs:{scope:"col"}},[t._v("타입")]),a("th",{attrs:{scope:"col"}},[t._v("크기")]),a("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("span",{staticClass:"placeholder"},[t._v("첨부된 파일이 없습니다.")])])}],o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),l=a("845f"),c=a("392b"),u=a("0050"),d={name:"KAKND0104Form.vue",components:{alert:u["a"]},data:function(){return{files:[],manual_id:"",param:"",title:"",content:"",solution:"",version:"",hit:"",isDialog:!1,fDialog:!1,alertContent:""}},created:function(){this.$store.commit("SET_FULLPATH",this.$route.fullPath)},mounted:function(){var t=this;this.param=this.$route.params;var e={params:{type:"D",manual_id:this.param.manual_id}};Object(l["b"])(e).then((function(e){var a=e.data;t.manual_id=a.manual_id,t.title=a.title,t.content=a.content,t.solution=a.solution,t.version=a.version,t.getList()}))},methods:{download:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["b"])(t).then((function(t){var a=window.URL.createObjectURL(new Blob([t.data],{type:t.headers["content-type"]})),s=document.createElement("a");s.href=a,s.setAttribute("download",e),document.body.appendChild(s),s.click()}));case 2:case"end":return a.stop()}}),a)})))()},getList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={params:{postId:t.manual_id}},e.next=3,Object(c["c"])(a);case 3:for(s=e.sent,n=s.data,r=0,i=n.length;r<i;r++)console.dir(n[r]),t.files.push(n[r]);case 6:case"end":return e.stop()}}),e)})))()},clickModify:function(){var t={manual_id:this.manual_id};this.$store.commit("SET_FULLPATH","knd/Detail"),this.$router.push({name:"KAKND01Modify",params:t})},clickDelete:function(){this.isDialog=!0},postDelete:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={manual_id:t.manual_id},e.next=3,Object(l["a"])(a);case 3:t.isDialog=!1,t.$router.push({name:"KAKND01List"});case 5:case"end":return e.stop()}}),e)})))()},chkUserType:function(){if(this.userType=this.$store.state.usertype,"A"===this.userType||"O"===this.userType)return!0}}},m=d,p=a("2877"),f=Object(p["a"])(m,r,i,!1,null,null,null),v=f.exports,_=a("4d03"),h={components:{KAKND0104Form:v},data:function(){return{}},created:function(){var t=this.$store.state.exp;Object(_["a"])(t),this.$store.commit("SET_DEPTH1","지식자료실"),this.$store.commit("SET_DEPTH2","상세보기")}},b=h,C=Object(p["a"])(b,s,n,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-64484356.4315445c.js.map