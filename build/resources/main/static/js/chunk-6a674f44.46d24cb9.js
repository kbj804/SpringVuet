(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a674f44"],{"0baf":function(t,e,n){"use strict";(function(t){n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("96cf");var a=n("1da1"),s=n("a7fe"),o=n("0e91"),l=n("4d03"),i=n("392b"),r=n("703f"),c=n("0050");t.jQuery=n("1157");var d=t.jQuery;window.$=d,e["a"]={components:{alert:r["a"],deleteAlert:c["a"]},data:function(){return{files:[],notice_id:"",solution_code:"",solution:"",items:[],title:"",content:"",hit:"",reg_userid:"",reg_date:"",lists:"",selected:"",isDialog:!1,alertContent:"",selectedFiles:[],currentFile:"",completeAlert:!1,deleteAlert:!1}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$store.state.exp,Object(l["a"])(n),e.next=4,Object(l["b"])();case 4:a=e.sent,s=a.data,t.items=s,console.log("this.items?",t.items);case 8:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.param=t.$route.params,console.log("created=>",t.param),n={notice_id:t.param.notice_id},e.next=5,Object(o["b"])(n);case 5:a=e.sent,r=a.data,console.log(r),c={params:{postId:t.param.notice_id}},console.log(c,"데이터가나?"),Object(i["c"])(c).then((function(e){var n=e.data;console.log("데이터",n);for(var a=0,s=n.length;a<s;a++)console.dir(n[a]),t.files.push(n[a]);console.log(t.selectedFiles)})),t.notice_id=r.notice_id,t.solution_code=Object(l["f"])(r.solution_code),t.title=r.title,t.content=r.content,t.hit=r.hit,t.reg_userid=r.reg_userid,t.reg_date=r.reg_date,console.log("송",t.solution_code),t.selected=r.solution_code,console.log(t.selected),s["a"].panelOpen("detail"),d((function(){d("#summernote").summernote({height:300,disableResizeEditor:!0,lang:"ko-KR",callbacks:{onFocus:function(){d(this).parents(".form-group-editor").addClass("focused")},onBlur:function(){d(this).parents(".form-group-editor").removeClass("focused")}},placeholder:"내용을 입력해 주세요."})}));case 23:case"end":return e.stop()}}),e)})))()},methods:{delFile:function(t,e,n){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("file delete ",t),o={params:{fileId:t,fileName:e}},console.log("da",o),a.next=5,Object(i["a"])(o);case 5:console.log("this.fileDel(fileIndex) : ",n),s.alertContent="파일이 삭제되었습니다.",s.isDialog=!0,s.fileDel(n);case 9:case"end":return a.stop()}}),a)})))()},selectFile:function(){console.log("select File 함수"),console.log("selectFile << file >> : ",event.target.files);for(var t=event.target.files,e=0,n=t.length;e<n;e++)console.dir(t[e]),this.selectedFiles.push(t[e])},download:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t,e),console.log("file download",t),n.next=4,Object(i["b"])(t).then((function(t){var n=window.URL.createObjectURL(new Blob([t.data],{type:t.headers["content-type"]})),a=document.createElement("a");a.href=n,a.setAttribute("download",e),document.body.appendChild(a),a.click()}));case 4:case"end":return n.stop()}}),n)})))()},fileDel:function(t){this.files.splice(t,1)},close:function(){var t={notice_id:this.notice_id};console.log("파람?",t),this.$router.push({name:"noticeDetail",params:t})},upload:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,s,l,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=d('textarea[name="content"]').val(d("#summernote").summernote("code")),console.log("벵류",n),console.log("벵류",n[0].value),t.content=n[0].value,t.currentFile=t.selectedFiles,console.log("this.currentFile????",t.currentFile),console.log("this.selectedFiles?????",t.selectedFiles),a=new FormData,0!==t.selectedFiles.length)for(s=0;l=t.selectedFiles[s];s++)a.append("attachFile",l);return a.append("post_type","N"),a.append("content",t.content),a.append("update_userid",t.$store.state.userid),a.append("solution_code",t.selected),a.append("title",t.title),a.append("notice_id",t.notice_id),console.log("폼데이터는?",a),e.next=18,Object(o["f"])(a);case 18:i=e.sent,200===i.status&&(t.completeAlert=!0,t.alertContent="수정이 완료되었습니다."),console.log(i);case 21:case"end":return e.stop()}}),e)})))()},deleteBtn:function(){this.deleteAlert=!0},postDelete:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new FormData,n.append("notice_id",t.notice_id),e.next=4,Object(o["a"])(n);case 4:a=e.sent,console.log("status",a.status),200===a.status&&t.$router.push("/noticeList");case 7:case"end":return e.stop()}}),e)})))()}}}}).call(this,n("24aa"))},"0e91":function(t,e,n){"use strict";n.d(e,"g",(function(){return l})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return p}));var a=n("bc3a"),s=n.n(a),o=s.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function l(t){return console.log("writeNotice 함수 실행"),o.post("/notice/write",t)}function i(){return console.log("listNotice 함수 실행"),o.get("/notice/list")}function r(t){return o.get("/notice/searchList",{params:t})}function c(t){return console.log("detailNotice함수 실행"),o.get("/notice/detail",{params:t})}function d(t){return console.log("plusCnt 실행"),o.get("/notice/plusCnt",{params:t})}function u(t){return console.log("updateNotic실행"),o.post("/notice/modify",t)}function p(t){return console.log("deleteNotic실행"),o.post("/notice/delete",t)}},"509e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ct"}},[n("section",{staticClass:"card"},[n("header",{staticClass:"card-header"},[t._m(0),n("div",{staticClass:"btn-container"},[n("a",{staticClass:"btn btn-primary",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.upload(e)}}},[t._v("확인")]),t._m(1)])]),n("div",{staticClass:"ct-header"},[t._m(2),n("div",{staticClass:"collapse collapse-filter ",attrs:{id:"collapse-filter"}},[n("div",{staticClass:"filter no-gutters no-btn"},[n("div",{staticClass:"col",staticStyle:{"min-width":"70%"}},[n("label",{staticClass:"form-control-label"},[n("b",{staticClass:"control-label"},[t._v("공지")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"공지제목을 입력하세요."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),n("div",{staticClass:"col",staticStyle:{"min-width":"30%"}},[n("label",{staticClass:"form-control-label"},[n("b",{staticClass:"control-label"},[t._v("제품명")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control",attrs:{title:"선택하세요"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?n:n[0]}}},t._l(t.items,(function(e,a){return n("option",{key:a,domProps:{value:e.codeId}},[t._v(" "+t._s(e.codeContent)+" ")])})),0)])])])])]),n("div",{staticClass:"ct-content"},[n("div",{staticClass:"form-group form-group-editor"},[n("textarea",{staticStyle:{display:"none"},attrs:{name:"content"}}),t._v(" "),n("div",{staticClass:"well",attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.content)}})]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"sub-bar"},[n("i",{staticClass:"icon-right text-danger"}),n("p",{staticClass:"font-weight-bold"},[t._v(" 첨부파일 ")]),n("div",{staticClass:"ml-auto form-inline m-full"},[n("label",[n("input",{staticClass:"sr-only",attrs:{type:"file",multiple:"multiple"},on:{change:function(e){return t.selectFile()}}}),n("span",{staticClass:"btn"},[t._v("파일 선택")])])])]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[t._m(3),t._m(4),n("tbody",[""==t.files?n("tr",[t._m(5),n("td"),n("td",[t._v("0kbytes")]),n("td",{staticClass:"text-nowrap"})]):t._e(),t._l(t.files,(function(e,a){return n("tr",{key:a},[n("td",[n("span",[t._v(t._s(e.org_file_name))])]),n("td",[t._v(t._s(e.file_ext_name))]),n("td",[t._v(t._s(e.file_size/1e3)+" KBytes")]),n("td",{staticClass:"text-nowrap"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(n){return t.delFile(e.file_id,e.save_file_name,a)}}},[t._v(" 삭제 ")])])])})),t._l(t.selectedFiles,(function(e,a){return n("tr",{key:a},[n("td",[n("span",[t._v(t._s(e.name))])]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.size/1e3)+" KBytes")]),n("td",{staticClass:"text-nowrap"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.fileDel(a)}}},[n("i",{staticClass:"icon-delete"}),t._v("삭제 ")])])])})),n("alert",{attrs:{dialog:t.isDialog,"send-data":t.alertContent},on:{close:function(e){t.isDialog=!1}}}),n("alert",{attrs:{dialog:t.completeAlert,"send-data":t.alertContent},on:{close:function(e){return t.close()}}}),n("deleteAlert",{attrs:{dialog:t.deleteAlert,"send-data":t.alertContent},on:{close:function(e){t.deleteAlert=!1},postDelete:function(e){return t.postDelete()}}})],2)])])]),t._m(6)])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"card-title"},[n("span",{staticClass:"i-rounded bg-danger"},[n("i",{staticClass:"icon-alarm"})]),t._v("공지사항 수정 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-m",attrs:{href:"/noticeList"}},[n("span",{staticClass:"hide"},[t._v("닫기")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-filter collapsed d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-filter"}},[t._v(" 검색 필터"),n("i",{staticClass:"icon-down"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("colgroup",[n("col",{staticStyle:{width:"25%"}}),n("col",{staticStyle:{width:"40%"}}),n("col"),n("col",{staticStyle:{width:"1%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v(" 이름 ")]),n("th",{attrs:{scope:"col"}},[t._v(" 타입 ")]),n("th",{attrs:{scope:"col"}},[t._v(" 크기 ")]),n("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("span",{staticClass:"placeholder"},[t._v("첨부할 파일을 선택해 주세요.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"panel-footer sub-bar"},[n("div",{staticClass:"ml-auto"})])}],o=n("0baf"),l=o["a"],i=n("2877"),r=Object(i["a"])(l,a,s,!1,null,null,null);e["default"]=r.exports},"703f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ct"}},[n("section",{staticClass:"card"},[n("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("div",{staticClass:"modal fade show",staticStyle:{display:"block"},attrs:{id:"modal1",tabindex:"-1",role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-alert"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("i",{staticClass:"iconb-compt"}),n("p",{staticClass:"alert-text"},[t._v(" "+t._s(this.sendData)+" ")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.onClose(e)}}},[t._v(" 확인 ")])])])])])])],1)])},s=[],o={name:"CompletePOP",props:["dialog","sendData"],data:function(){return{}},created:function(){},methods:{onClose:function(){this.$emit("close")}}},l=o,i=n("2877"),r=n("6544"),c=n.n(r),d=n("169a"),u=Object(i["a"])(l,a,s,!1,null,null,null);e["a"]=u.exports;c()(u,{VDialog:d["a"]})}}]);
//# sourceMappingURL=chunk-6a674f44.46d24cb9.js.map