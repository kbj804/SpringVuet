(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16271300"],{"033a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ct"}},[a("section",{staticClass:"card"},[a("KAKNM0101Form",{on:{srchList:t.srchList}}),a("KAKNM01ListForm",{ref:"list"})],1)])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"ct-header"},[a("form",{staticClass:"form",attrs:{id:"KAKNM0101From"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._m(1),a("div",{staticClass:"collapse collapse-filter",attrs:{id:"collapse-filter"}},[a("div",{staticClass:"filter no-gutters"},[a("div",{staticClass:"col",staticStyle:{"min-width":"75%"}},[a("label",{staticClass:"form-control-label",attrs:{"data-toggle":"modal","data-target":"#modalWSDL"}},[a("b",{staticClass:"control-label"},[t._v("질문제목")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"제목은 필수입력사항입니다."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label label-select"},[a("b",{staticClass:"control-label",attrs:{label:"",for:"status"}},[t._v("처리상태")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"form-control",attrs:{title:"선택하세요"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.status=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:""}},[t._v("전체")]),a("option",{attrs:{value:"SS"}},[t._v("완료")]),a("option",{attrs:{value:"NN"}},[t._v("미완료")]),a("option",{attrs:{value:"RQ"}},[t._v("재질문")]),a("option",{attrs:{value:""}},[t._v("보류")])])])]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"10px"},attrs:{type:"submit"},on:{onClick:t.onSubmit}},[a("i",{staticClass:"icon-srch"}),t._v("조회 ")])])]),a("div",{staticClass:"filter no-gutters"},[a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label label-select"},[a("b",{staticClass:"control-label",attrs:{label:"",for:"sortType"}},[t._v("정렬기준")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.sortType,expression:"sortType"}],staticClass:"form-control",attrs:{id:"sortType",select:"",name:"sortType"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sortType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:""}},[t._v("선택")]),a("option",{attrs:{value:"1"}},[t._v("경과일")]),a("option",{attrs:{value:"2"}},[t._v("질문자")]),a("option",{attrs:{value:"3"}},[t._v("답변자")]),a("option",{attrs:{value:"4"}},[t._v("상태")])])])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label",attrs:{"data-toggle":"modal","data-target":"#modalWSDL"}},[a("b",{staticClass:"control-label"},[t._v("태그")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tag_tag,expression:"tag_tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"tag"},domProps:{value:t.tag_tag},on:{input:function(e){e.target.composing||(t.tag_tag=e.target.value)}}})])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label",attrs:{"data-toggle":"modal","data-target":"#modalWSDL"}},[a("b",{staticClass:"control-label"},[t._v("애러코드")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tag_erc,expression:"tag_erc"}],staticClass:"form-control",attrs:{type:"text",placeholder:"입력하세요"},domProps:{value:t.tag_erc},on:{input:function(e){e.target.composing||(t.tag_erc=e.target.value)}}})])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-control-label",attrs:{"data-toggle":"modal","data-target":"#modalWSDL"}},[a("b",{staticClass:"control-label"},[t._v("예외")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tag_ert,expression:"tag_ert"}],staticClass:"form-control",attrs:{type:"text",placeholder:"예외종류를 입력하세요."},domProps:{value:t.tag_ert},on:{input:function(e){e.target.composing||(t.tag_ert=e.target.value)}}})])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header",staticStyle:{padding:"1.6rem 1rem"}},[a("h2",{staticClass:"card-title"},[a("span",{staticClass:"i-rounded bg-danger"},[a("i",{staticClass:"icon-result"})]),t._v("지식 관리 ")]),a("div",{staticClass:"btn-container"},[a("a",{staticClass:"btn btn-m",attrs:{href:"/knm/quWrite"}},[a("span",{staticClass:"hide"},[t._v("기술문의")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-filter collapsed d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-filter"}},[t._v(" 검색 필터"),a("i",{staticClass:"icon-down"})])}],o=(a("96cf"),a("1da1")),l=a("ad56"),c={props:["srchData"],data:function(){return{title:"",status:"",sortType:"",tag_tag:"",tag_erc:"",tag_ert:"",solution_name:"",lists:""}},mounted:function(){console.log("mounted!!")},methods:{onSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("onSubmit"),a={title:t.title,status:t.status,sortType:t.sortType,tag_tag:t.tag_tag,tag_erc:t.tag_erc,tag_ert:t.tag_ert},console.log("srchData",a),e.next=5,Object(l["g"])(a);case 5:s=e.sent,r=s.data,console.log("data : ",r),t.$emit("srchList",r);case 9:case"end":return e.stop()}}),e)})))()}}},u=c,d=a("2877"),m=Object(d["a"])(u,i,n,!1,null,null,null),g=m.exports,f=a("7544"),p=a("4d03"),h={components:{KAKNM0101Form:g,KAKNM01ListForm:f["a"]},data:function(){return{srchData:""}},created:function(){var t=this.$store.state.exp;Object(p["a"])(t),this.$store.commit("SET_DEPTH1","지식관리"),this.$store.commit("SET_DEPTH2","지식관리")},methods:{srchList:function(t){console.log("view srchList : ",t),this.srchData=t,console.log("view srchData  : ",this.srchData),this.$refs.list.allListChange(this.srchData)}}},v=h,_=Object(d["a"])(v,s,r,!1,null,null,null);e["default"]=_.exports},1891:function(t,e,a){},"21e7":function(t,e,a){"use strict";var s=a("1891"),r=a.n(s);r.a},7544:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ct-content"},[a("div",{staticStyle:{width:"100%",height:"100%"}},[a("ag-grid-vue",{staticClass:"flex-grow-1 flex-shrink-1 ag-theme-alpine",staticStyle:{width:"100%",height:"550px"},attrs:{"column-defs":t.columnDefs,"row-data":t.rowData,"grid-options":t.gridOptions},on:{gridReady:t.gridSizeFit,gridSizeChanged:t.gridSizeFit,"cell-clicked":t.onCellClicked}})],1)])},r=[],i=(a("4160"),a("159b"),a("96cf"),a("1da1")),n=(a("b360"),a("cdcb"),a("401b")),o=a("0d1d"),l=a("ad56"),c={name:"KAKNM01ListForm",components:{AgGridVue:n["AgGridVue"]},props:["srchList","sendData"],data:function(){return{userid:this.$store.state.userid,flag:"",columnDefs:null,lists:[],rowData:[],gridOptions:null,gridApi:null,columnApi:null,defaultColDef:null,rowModelType:null,paginationPageSize:null,cacheBlockSize:null,modules:[o["a"]]}},beforeMount:function(){this.gridOptions={enableColResize:!0,enableSorting:!0,enableFilter:!0,animateRows:!1,pagination:!0,paginationPageSize:10},this.columnDefs=[{headerName:"글번호",colId:0,valueGetter:function(t){return t.node.rowIndex+1}},{headerName:"솔루션",field:"solution_name",sortable:!0,filter:!0},{headerName:"질문제목",field:"title",sortable:!0,filter:!0},{headerName:"질문자",field:"reg_userName_tq",sortable:!0,filter:!0},{headerName:"질문일시",field:"reg_date_tq",sortable:!0,filter:!0},{headerName:"답변자",field:"reg_userName_ta",sortable:!0,filter:!0},{headerName:"답변일시",field:"reg_date_ta",sortable:!0,filter:!0},{headerName:"경과시간",field:"term",sortable:!0,filter:!0},{headerName:"처리상태",field:"status",sortable:!0,filter:!0},{headerName:"qusetion_id",field:"question_id",sortable:!0,filter:!0,hide:!0},{headerName:"질문자 id",field:"reg_userid",sortable:!0,filter:!0,hide:!0},{headerName:"답변 id",field:"answer_id",sortable:!0,filter:!0,hide:!0}]},created:function(){console.log("created");var t=this.sendData;"mL"===t?this.myList():this.getAllList()},methods:{getAllList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("makeData"),e.next=3,Object(l["e"])();case 3:a=e.sent,t.lists=a.data,console.log("this.lists",t.lists),t.makeData();case 7:case"end":return e.stop()}}),e)})))()},allListChange:function(t){this.rowData=[],this.lists=t,this.makeData()},myList:function(){var t=this,e={userid:this.userid};console.log("formData =>>>",e),Object(l["c"])(e).then((function(e){200===e.status?(console.log("res => ",e),t.lists=e.data,t.makeData()):alert("다시 시도해주세요.")})).catch(console.error())},srchMyList:function(t){this.rowData=[],this.lists=t,this.makeData()},makeData:function(){var t=this;console.log("makeData"),console.log("makeData.this.lists",this.lists),console.log("makeData.this.rowData",this.rowData),this.lists.forEach((function(e){var a={solution_name:e.solution_name,title:e.title,reg_userName_tq:e.reg_userName_tq,reg_date_tq:e.reg_date_tq,reg_userName_ta:e.reg_userName_ta,reg_date_ta:e.reg_date_ta,term:e.term,status:e.status,question_id:e.question_id,reg_userid:e.reg_userid};t.rowData.push(a)}))},gridSizeFit:function(t){if(console.log("gridSizeFit"),window.innerWidth>800)console.log("innerWidth"),t.api.sizeColumnsToFit();else{var e=[];this.gridOptions.columnApi.getAllColumns().forEach((function(t){e.push(t.colId)})),this.gridOptions.columnApi.autoSizeColumns(e)}},onCellClicked:function(t){var e={reg_userid:t.data.reg_userid,question_id:t.data.question_id,answer_id:t.data.answer_id};this.$router.push({name:"KAKNM0104Detail",params:e})}}},u=c,d=(a("21e7"),a("2877")),m=Object(d["a"])(u,s,r,!1,null,null,null);e["a"]=m.exports},ad56:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"g",(function(){return o})),a.d(e,"j",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"a",(function(){return d})),a.d(e,"d",(function(){return m})),a.d(e,"i",(function(){return g})),a.d(e,"c",(function(){return f})),a.d(e,"h",(function(){return p}));var s=a("bc3a"),r=a.n(s),i=r.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function n(){return i.get("/knm/mainList")}function o(t){return i.post("/knm/srchList",t)}function l(t){return console.log(t),i.get("/knm/srchQuId",{params:t})}function c(t){return console.log(t),i.get("/knm/getDetail",{params:t})}function u(t){return i.post("/knm/modify",t)}function d(t){return i.post("/knm/estimateAn",t)}function m(){return i.get("/knm/getPjList")}function g(t){return i.get("/knm/srchPjList",{params:t})}function f(t){return i.get("/knm/getMyList",{params:t})}function p(t){return i.get("/knm/srchMyList",{params:t})}}}]);
//# sourceMappingURL=chunk-16271300.388cf84b.js.map