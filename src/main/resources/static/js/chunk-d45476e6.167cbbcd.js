(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d45476e6"],{6818:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrap"}},[i("KAKND0101Form")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ct"}},[i("section",{staticClass:"card"},[i("header",{staticClass:"card-header"},[t._m(0),t.chkUserType()?i("div",{staticClass:"btn-container"},[t._m(1)]):t._e()]),i("div",{staticClass:"ct-header"},[t._m(2),i("div",{staticClass:"collapse collapse-filter",attrs:{id:"collapse-filter"}},[i("div",{staticClass:"filter no-gutters"},[i("div",{staticClass:"col",staticStyle:{"min-width":"70%"}},[i("label",{staticClass:"form-control-label"},[i("b",{staticClass:"control-label"},[t._v("제목")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"제목을 입력하세요."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),i("div",{staticClass:"col"},[i("label",{staticClass:"form-control-label label-select"},[i("b",{staticClass:"control-label"},[t._v("솔루션")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.solution,expression:"solution"}],staticClass:"form-control",attrs:{title:"선택하세요"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.solution=e.target.multiple?i:i[0]}}},[t._l(t.items,(function(e,a){return i("option",{key:a,domProps:{value:e.codeId}},[t._v(" "+t._s(e.codeContent)+" ")])})),i("option",{attrs:{value:""}},[t._v("선택안함")])],2)])]),i("div",{staticClass:"col-auto"},[i("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"10px"},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getList()}}},[i("i",{staticClass:"icon-srch"}),t._v("조회 ")])])])])]),i("div",{staticClass:"ct-content"},[i("ag-grid-vue",{staticClass:"flex-grow-1 flex-shrink-1 ag-theme-alpine",staticStyle:{width:"100%",height:"550px"},attrs:{"column-defs":t.columnDefs,"row-data":t.rowData,"grid-options":t.gridOptions,"get-row-style":t.getRowStyle},on:{"cell-clicked":t.onCellClicked,gridReady:t.gridSizeFit,gridSizeChanged:t.gridSizeFit}})],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"card-title"},[i("span",{staticClass:"i-rounded bg-danger"},[i("i",{staticClass:"icon-arrange"})]),t._v("지식자료실 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"btn btn-m",attrs:{href:"write"}},[i("span",{staticClass:"hide"},[t._v("자료작성")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn-filter collapsed d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-filter"}},[t._v(" 검색 필터"),i("i",{staticClass:"icon-down"})])}],o=(i("4160"),i("159b"),i("96cf"),i("1da1")),l=(i("b360"),i("cdcb"),i("401b")),c=i("845f"),u=i("4d03"),d={name:"KAKND0101Form",components:{AgGridVue:l["AgGridVue"]},data:function(){return{title:"",solution:"",lists:"",items:[],columnDefs:null,rowData:[],gridOptions:null}},computed:{user_id:function(){return this.$store.state.userid}},beforeMount:function(){this.gridOptions={enableColResize:!0,enableSorting:!0,enableFilter:!0,animateRows:!1,pagination:!0,paginationPageSize:10},this.columnDefs=[{headerName:"글번호",colId:0,valueGetter:function(t){return t.node.rowIndex+1}},{headerName:"제목",field:"title",sortable:!1,filter:!0},{headerName:"솔루션",field:"solution",sortable:!1,filter:!0},{headerName:"작성자",field:"writer",sortable:!1,filter:!0},{headerName:"첨부파일",field:"file",sortable:!0,filter:!0,cellRenderer:function(t){return console.log("params",t.data.file),'<span><i class="icon-link"></i>('+t.data.file+")</span>"}},{headerName:"작성일",field:"reg_date",sortable:!0,filter:!0},{headerName:"조회수",field:"hit",sortable:!0,filter:!0}]},created:function(){console.log("새로고침!!!"),this.getSolution(),this.getList()},methods:{getList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={params:{title:t.title,solution:t.solution,user:t.$store.state.userid}},e.next=3,Object(c["c"])(i);case 3:a=e.sent,n=a.data,t.lists=n,t.makeData();case 7:case"end":return e.stop()}}),e)})))()},makeData:function(){var t=this;this.rowData=[],this.lists.forEach((function(e){var i={solution:e.solution,title:e.title,writer:e.userName,file:e.file,reg_date:e.reg_date,hit:e.hit,id:e.manual_id};t.rowData.push(i)}))},getSolution:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["b"])().then((function(e){t.items=e.data})).catch(console.error());case 2:case"end":return e.stop()}}),e)})))()},onCellClicked:function(t){var e={manual_id:t.data.id};this.$router.push({name:"KAKND01Detail",params:e})},gridSizeFit:function(t){if(window.innerWidth>800)t.api.sizeColumnsToFit();else{var e=[];this.gridOptions.columnApi.getAllColumns().forEach((function(t){e.push(t.colId)})),this.gridOptions.columnApi.autoSizeColumns(e)}},getRowStyle:function(t){return{"text-align":"center"}},chkUserType:function(){if(this.userType=this.$store.state.usertype,"A"===this.userType||"O"===this.userType)return!0}}},f=d,p=(i("e25c"),i("2877")),m=Object(p["a"])(f,r,s,!1,null,null,null),h=m.exports,g={components:{KAKND0101Form:h},data:function(){return{}},created:function(){var t=this.$store.state.exp;Object(u["a"])(t),this.$store.commit("SET_DEPTH1","지식자료실"),this.$store.commit("SET_DEPTH2"," ")}},v=g,b=Object(p["a"])(v,a,n,!1,null,null,null);e["default"]=b.exports},"717e":function(t,e,i){},"845f":function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return c}));var a=i("bc3a"),n=i.n(a),r=n.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function s(t){return r.get("/KAKND01/getList",t)}function o(t){return r.post("/KAKND01/postManual",t)}function l(t){return r.get("/KAKND01/getDetail",t)}function c(t){return r.post("/KAKND01/delete",t)}},e25c:function(t,e,i){"use strict";var a=i("717e"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-d45476e6.167cbbcd.js.map