(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-123d0786"],{"299c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KAKNM02Form")},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ct"}},[n("section",{staticClass:"card"},[t._m(0),n("div",{staticClass:"ct-header"},[t._m(1),n("div",{staticClass:"collapse collapse-filter",attrs:{id:"collapse-filter"}},[n("div",{staticClass:"filter no-gutters"},[n("div",{staticClass:"col",staticStyle:{"min-width":"70%"}},[n("label",{staticClass:"form-control-label"},[n("b",{staticClass:"control-label"},[t._v("질문제목")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"제목을 입력하세요"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),n("div",{staticClass:"col"},[n("label",{staticClass:"form-control-label label-select"},[n("b",{staticClass:"control-label"},[t._v("처리상태")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",attrs:{title:"선택하세요"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.status=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("선택안함")]),n("option",{attrs:{value:"SS"}},[t._v("완료")]),n("option",{attrs:{value:"RQ"}},[t._v("재질문")])])])]),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"10px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.onSubmit()}}},[n("i",{staticClass:"icon-srch"}),t._v("조회 ")])])])])]),n("div",{staticClass:"ct-content"},[n("ag-grid-vue",{staticClass:"flex-grow-1 flex-shrink-1 ag-theme-alpine",staticStyle:{width:"100%",height:"550px"},attrs:{"column-defs":t.columnDefs,"row-data":t.rowData,"grid-options":t.gridOptions,"get-row-style":t.getRowStyle},on:{"cell-clicked":t.onCellClicked,gridReady:t.gridSizeFit,gridSizeChanged:t.gridSizeFit}})],1)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"card-header",staticStyle:{padding:"1.6rem 1rem"}},[n("h2",{staticClass:"card-title"},[n("span",{staticClass:"i-rounded bg-danger"},[n("i",{staticClass:"icon-msg-text"})]),t._v("내가 답변한 질문 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-filter collapsed d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-filter"}},[t._v(" 검색 필터"),n("i",{staticClass:"icon-down"})])}],o=(n("4160"),n("c975"),n("159b"),n("96cf"),n("1da1")),u=(n("b360"),n("cdcb"),n("3a6d")),c=n("ad56"),l=n("401b"),d={name:"KAKNM0204Form",components:{AgGridVue:l["AgGridVue"]},data:function(){return{title:"",status:"",user:"",lists:"",columnDefs:null,rowData:[],gridOptions:null}},computed:{user_id:function(){return this.$store.state.userid}},beforeMount:function(){this.gridOptions={enableColResize:!0,enableSorting:!0,enableFilter:!0,animateRows:!1,pagination:!0,paginationPageSize:10},this.columnDefs=[{headerName:"솔루션",field:"solution",sortable:!0,filter:!0},{headerName:"질문제목",field:"title",sortable:!1,filter:!0},{headerName:"질문자",field:"quser",sortable:!1,filter:!0},{headerName:"질문일시",field:"qdate",sortable:!1,filter:!0},{headerName:"답변자",field:"auser",sortable:!0,filter:!0},{headerName:"답변일시",field:"adate",sortable:!0,filter:!0},{headerName:"경과일",field:"term",sortable:!0,filter:!0},{headerName:"처리상태",field:"status",sortable:!0,filter:!0}]},created:function(){this.getList()},methods:{onSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={params:{title:t.title,status:t.status,user:t.$store.state.userid}},e.next=3,Object(u["b"])(n);case 3:r=e.sent,a=r.data,t.lists=a,t.makeData();case 7:case"end":return e.stop()}}),e)})))()},getList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={params:{title:t.title,status:t.status,user:t.$store.state.userid}},e.next=3,Object(u["b"])(n);case 3:r=e.sent,a=r.data,t.lists=a,t.makeData();case 7:case"end":return e.stop()}}),e)})))()},makeData:function(){var t=this;this.rowData=[],this.lists.forEach((function(e){var n={solution:e.solution_code,title:e.title,quser:e.reg_userid_tq,qdate:e.reg_date_tq,auser:e.reg_userid_ta,adate:e.reg_date_ta,term:e.term,status:e.status,reg_userid:e.reg_userid,question_id:e.question_id,answer_id:e.answer_id};t.rowData.push(n)}))},onCellClicked:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={reg_userid:t.data.reg_userid,question_id:t.data.question_id,answer_id:t.data.answer_id},n.next=3,Object(c["b"])(r).then((function(t){if(200===t.status){var n=t.data;e.$router.push({name:"KAKNM0104Detail",params:n})}return t})).catch((function(t){var e=t.message;t.message.indexOf("500")?this.$router.push({name:"500Error"}):e.indexOf("404")?this.$router.push({name:"404Error"}):this.$router.push({name:"Exception"})}));case 3:case"end":return n.stop()}}),n)})))()},gridSizeFit:function(t){if(window.innerWidth>800)t.api.sizeColumnsToFit();else{var e=[];this.gridOptions.columnApi.getAllColumns().forEach((function(t){e.push(t.colId)})),this.gridOptions.columnApi.autoSizeColumns(e)}},getRowStyle:function(t){return{"text-align":"center"}}}},f=d,m=(n("5b64"),n("2877")),p=Object(m["a"])(f,i,s,!1,null,null,null),g=p.exports,h=n("4d03"),b={components:{KAKNM02Form:g},data:function(){return{}},created:function(){var t=this.$store.state.exp;Object(h["a"])(t)}},v=b,_=Object(m["a"])(v,r,a,!1,null,null,null);e["default"]=_.exports},"3a6d":function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return o}));var r=n("bc3a"),a=n.n(r),i=a.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function s(t){return i.post("/KAKNM02/write",t)}function o(t){return console.log("answer.js api 호출!!!!"),console.log(t),i.get("/KAKNM02/getModifyDetail",{params:t})}function u(t){return i.get("/KAKNM02/getList",t)}function c(t){return i.get("/KAKNM02/getAnswer",t)}function l(t){return i.get("/KAKNM02/ansDelete",t)}},"5b64":function(t,e,n){"use strict";var r=n("cca66"),a=n.n(r);a.a},ad56:function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return o})),n.d(e,"j",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"i",(function(){return m})),n.d(e,"c",(function(){return p})),n.d(e,"h",(function(){return g}));var r=n("bc3a"),a=n.n(r),i=a.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function s(){return i.get("/knm/mainList")}function o(t){return i.post("/knm/srchList",t)}function u(t){return console.log(t),i.get("/knm/srchQuId",{params:t})}function c(t){return console.log(t),i.get("/knm/getDetail",{params:t})}function l(t){return i.post("/knm/modify",t)}function d(t){return i.post("/knm/estimateAn",t)}function f(){return i.get("/knm/getPjList")}function m(t){return i.get("/knm/srchPjList",{params:t})}function p(t){return i.get("/knm/getMyList",{params:t})}function g(t){return i.get("/knm/srchMyList",{params:t})}},cca66:function(t,e,n){}}]);
//# sourceMappingURL=chunk-123d0786.38cbe517.js.map