(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b2a342b"],{"0f43":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KAKND0103Form")},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ct"}},[n("section",{staticClass:"card"},[n("header",{staticClass:"card-header",staticStyle:{padding:"1.6rem 1rem"}},[t._m(0),n("div",{staticClass:"btn-container"},[t._m(1),n("a",{staticClass:"btn btn-primary",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.upload(e)}}},[n("span",{staticClass:"hide"},[t._v("저장")])])])]),n("div",{staticClass:"ct-header"},[t._m(2),n("div",{staticClass:"collapse collapse-filter ",attrs:{id:"collapse-filter"}},[n("div",{staticClass:"filter no-gutters"},[n("div",{staticClass:"col"},[n("label",{staticClass:"form-control-label"},[n("b",{staticClass:"control-label"},[t._v("제목")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"제목을 입력하세요."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),n("div",{staticClass:"col"},[n("label",{staticClass:"form-control-label"},[n("b",{staticClass:"control-label"},[t._v("솔루션")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.solution,expression:"solution"}],staticClass:"form-control",attrs:{title:"선택하세요",readonly:""},domProps:{value:t.solution},on:{input:function(e){e.target.composing||(t.solution=e.target.value)}}})])]),n("div",{staticClass:"col"},[n("label",{staticClass:"form-control-label"},[n("b",{staticClass:"control-label"},[t._v("버전")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.version,expression:"version"}],staticClass:"form-control",attrs:{type:"text",placeholder:"버전"},domProps:{value:t.version},on:{input:function(e){e.target.composing||(t.version=e.target.value)}}})])])])])]),n("div",{staticClass:"ct-content"},[n("div",{staticClass:"form-group form-group-editor"},[n("textarea",{staticStyle:{display:"none"},attrs:{name:"content"}}),n("div",{staticClass:"well",attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.content)}})]),n("div",{staticClass:"form-group"},[n("div",{staticClass:"sub-bar"},[n("i",{staticClass:"icon-right text-danger"}),n("p",{staticClass:"font-weight-bold"},[t._v("첨부파일")]),n("div",{staticClass:"ml-auto form-inline m-full"},[n("label",[n("input",{ref:"fileTag",staticClass:"sr-only",attrs:{type:"file",multiple:"multiple"},on:{change:function(e){return t.selectFile()}}}),n("span",{staticClass:"btn"},[t._v("파일 선택")])])])]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[t._m(3),t._m(4),n("tbody",[""==t.selectedFiles&&""==t.files?n("tr",[t._m(5),n("td"),n("td",[t._v("0kbytes")]),n("td",{staticClass:"text-nowrap"})]):t._e(),t._l(t.files,(function(e,i){return n("tr",{key:i},[n("td",[n("span",[t._v(t._s(e.org_file_name))])]),n("td",[t._v(t._s(e.file_ext_name))]),n("td",[t._v(t._s(e.file_size/1e3)+" KBytes")]),n("td",{staticClass:"text-nowrap"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(n){return t.delFile(e.file_id,e.save_file_name,i)}}},[t._v("삭제")])])])})),t._l(t.selectedFiles,(function(e,i){return n("tr",{key:i},[n("td",[n("span",[t._v(t._s(e.name))])]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.size/1e3)+" KBytes")]),n("td",{staticClass:"text-nowrap"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.fileDel(i,"selectedFiles")}}},[n("i",{staticClass:"icon-delete"}),t._v("삭제")])])])}))],2)])]),n("alert",{attrs:{dialog:t.isDialog,sendData:t.alertContent},on:{close:t.close}}),n("failAlert",{attrs:{dialog:t.failDialog,sendData:t.alertContent},on:{close:function(e){t.failDialog=!1}}})],1)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"card-title"},[n("span",{staticClass:"i-rounded bg-danger"},[n("i",{staticClass:"icon-file-text"})]),t._v("지식자료실 수정")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-primary",attrs:{href:"../manual"}},[n("span",{staticClass:"hide"},[t._v("목록")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn-filter collapsed d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapse-filter"}},[t._v("검색 필터"),n("i",{staticClass:"icon-down"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("colgroup",[n("col",{staticStyle:{width:"25%"}}),n("col",{staticStyle:{width:"40%"}}),n("col"),n("col",{staticStyle:{width:"1%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("이름")]),n("th",{attrs:{scope:"col"}},[t._v("타입")]),n("th",{attrs:{scope:"col"}},[t._v("크기")]),n("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("span",{staticClass:"placeholder"},[t._v("첨부할 파일을 선택해 주세요.")])])}],r=n("aaf8"),l=r["a"],c=(n("5864"),n("2877")),u=Object(c["a"])(l,s,o,!1,null,null,null),d=u.exports,h=n("4d03"),f={components:{KAKND0103Form:d},data:function(){return{}},created:function(){var t=this.$store.state.exp;Object(h["a"])(t),this.$store.commit("SET_DEPTH1","지식자료실"),this.$store.commit("SET_DEPTH2","자료수정")}},v=f,m=Object(c["a"])(v,i,a,!1,null,null,null);e["default"]=m.exports},"169a":function(t,e,n){"use strict";n("7db0"),n("caad"),n("45fc"),n("a9e3"),n("2532"),n("498a");var i=n("5530"),a=n("2909"),s=n("ade3"),o=(n("368e"),n("480e")),r=n("4ad4"),l=n("b848"),c=n("75eb"),u=(n("3c93"),n("a9ad")),d=n("7560"),h=n("f2e7"),f=n("58df"),v=Object(f["a"])(u["a"],d["a"],h["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),m=v,p=n("80d2"),g=n("2b0e"),b=g["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new m({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(p["r"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(p["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[p["u"].up,p["u"].pageup],n=[p["u"].down,p["u"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),n=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,a=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(a,i))||this.shouldScroll(i,n)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,n)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(p["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),y=n("e4d3"),C=n("21be"),_=n("a293"),w=n("d9bd"),O=Object(f["a"])(r["a"],l["a"],c["a"],b,y["a"],C["a"],h["a"]);e["a"]=O.extend({name:"v-dialog",directives:{ClickOutside:_["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):b.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(a["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},3019:function(t,e,n){},"368e":function(t,e,n){},"392b":function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));var i=n("bc3a"),a=n.n(i),s=a.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function o(t){return console.log("postFile called...!!"),s.post("/file/upload",t)}function r(t){return s.get("/file/list",t)}function l(t){return a.a.post("/file/download",t,{responseType:"blob"})}function c(t){return s.get("/file/del",t)}},"3c93":function(t,e,n){},"4d03":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return h}));var i=n("bc3a"),a=n.n(i),s=a.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function o(){return s.get("/api/test/getSolution")}function r(t){return console.log("로그인"),s.post("/api/test/login",t)}function l(t){var e=new Date(0);e.setUTCSeconds(t),console.log(e);var n=new Date;console.log(n),n<=e?(console.log(n<=e),console.log(n)):(this.$router.push({name:"Login"}),localStorage.removeItem("token"))}function c(t){switch(t){case"Q":return console.log("질문자입니다."),"질문자";case"A":return console.log("답변자입니다."),"답변자";case"O":return console.log("운영자입니다."),"운영자"}}function u(t){switch(t){case"SL010000":return console.log("iGate"),"iGate";case"SL020000":return console.log("eCross."),"eCross";case"SL030000":return console.log("Xtorm."),"Xtorm";case"SL040000":return console.log("eXperDB."),"eXperDB";case"SL050000":return console.log("Libeka."),"Libeka";case"SL060000":return console.log("iWorks."),"iWorks";case"SL070000":return console.log("iXeb."),"iXeb";case"SL080000":return console.log("APIM."),"APIM";case"SL090000":return console.log("MyGuard."),"MyGuard";case"SL100000":return console.log("문서중앙화."),"문서중앙화"}}function d(t){return s.get("/api/test/idCheck",{params:t})}function h(t){return s.get("/api/test/searchPassword",{params:t})}},5864:function(t,e,n){"use strict";var i=n("3019"),a=n.n(i);a.a},"66cd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ct"}},[n("section",{staticClass:"card"},[n("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("div",{staticClass:"modal fade show",staticStyle:{display:"block"},attrs:{id:"modal1",tabindex:"-1",role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-alert"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("i",{staticClass:"iconb-danger"}),n("p",{staticClass:"alert-text"},[t._v(" "+t._s(this.sendData)+" ")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.onClose(e)}}},[t._v(" 확인 ")])])])])])])],1)])},a=[],s={name:"FailPOP",props:["dialog","sendData"],data:function(){return{}},created:function(){},methods:{onClose:function(){this.$emit("close")}}},o=s,r=n("2877"),l=n("6544"),c=n.n(l),u=n("169a"),d=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=d.exports;c()(d,{VDialog:u["a"]})},"703f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ct"}},[n("section",{staticClass:"card"},[n("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("div",{staticClass:"modal fade show",staticStyle:{display:"block"},attrs:{id:"modal1",tabindex:"-1",role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-alert"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body"},[n("i",{staticClass:"iconb-compt"}),n("p",{staticClass:"alert-text"},[t._v(" "+t._s(this.sendData)+" ")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.onClose(e)}}},[t._v(" 확인 ")])])])])])])],1)])},a=[],s={name:"CompletePOP",props:["dialog","sendData"],data:function(){return{}},created:function(){},methods:{onClose:function(){this.$emit("close")}}},o=s,r=n("2877"),l=n("6544"),c=n.n(l),u=n("169a"),d=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=d.exports;c()(d,{VDialog:u["a"]})},"845f":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return c}));var i=n("bc3a"),a=n.n(i),s=a.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function o(t){return s.get("/KAKND01/getList",t)}function r(t){return s.post("/KAKND01/postManual",t)}function l(t){return s.get("/KAKND01/getDetail",t)}function c(t){return s.post("/KAKND01/delete",t)}},aaf8:function(t,e,n){"use strict";(function(t){n("a434"),n("96cf");var i=n("1da1"),a=n("a7fe"),s=n("4d03"),o=n("845f"),r=n("703f"),l=n("66cd"),c=n("392b");t.jQuery=n("1157");var u=t.jQuery;window.$=u,e["a"]={name:"KAKND0102Form",components:{alert:r["a"],failAlert:l["a"]},data:function(){return{items:[],manual_id:"",title:"",solution:"",content:"",version:"",files:[],selectedFiles:[],temp:[],currentFile:"",isDialog:!1,alertContent:"",failDialog:!1,alertType:""}},created:function(){this.$store.commit("SET_FULLPATH",this.$route.fullPath),this.getSolution()},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.param=t.$route.params,n={params:{type:"",manual_id:t.param.manual_id}},e.next=4,Object(o["b"])(n);case 4:i=e.sent,s=i.data,t.manual_id=s.manual_id,t.title=s.title,t.content=s.content,t.solution=s.solution,t.version=s.version,t.getFileList(),a["a"].panelOpen("detail"),u((function(){u("#summernote").summernote({disableResizeEditor:!0,callbacks:{onFocus:function(){u(this).parents(".form-group-editor").addClass("focused")},onBlur:function(){u(this).parents(".form-group-editor").removeClass("focused")}},placeholder:"내용을 입력해 주세요."})}));case 14:case"end":return e.stop()}}),e)})))()},methods:{upload:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=u('textarea[name="content"]').val(u("#summernote").summernote("code")),e.content=n[0].value,e.currentFile=e.selectedFiles,i=new FormData,0!==e.selectedFiles.length)for(a=0;s=e.selectedFiles[a];a++)i.append("attachFile",s);return i.append("manual_id",e.manual_id),i.append("do_type","M"),i.append("content",e.content),i.append("update_userid",e.$store.state.userid),i.append("version",e.version),i.append("solution",e.solution),i.append("title",e.title),t.next=14,Object(o["d"])(i);case 14:e.isDialog=!0,e.alertType="submit",e.alertContent="매뉴얼 수정이 완료되었습니다.";case 17:case"end":return t.stop()}}),t)})))()},close:function(){this.isDialog=!1,"submit"===this.alertType&&this.$router.push({name:"KAKND01List"})},getSolution:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["b"])();case 2:n=e.sent,i=n.data,t.items=i;case 5:case"end":return e.stop()}}),e)})))()},selectFile:function(){for(var t=event.target.files,e=0,n=t.length;e<n;e++)this.selectedFiles.push(t[e]),t[e].size>15728640&&(this.alertContent="파일 한 개당 용량은 15MB를 초과할 수 없습니다.",this.failDialog=!0,this.fileDel(e))},fileDel:function(t,e){"files"===e?this.files.splice(t,1):this.selectedFiles.splice(t,1)},delFile:function(t,e,n){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function i(){var s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s={params:{fileId:t,fileName:e}},i.next=3,Object(c["a"])(s);case 3:a.fileDel(n,"files"),a.alertContent="파일이 삭제되었습니다.",a.alertType="file",a.isDialog=!0;case 7:case"end":return i.stop()}}),i)})))()},getFileList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i,a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={params:{postId:t.manual_id}},e.next=3,Object(c["c"])(n);case 3:for(i=e.sent,a=i.data,s=0,o=a.length;s<o;s++)console.dir(a[s]),t.files.push(a[s]);case 6:case"end":return e.stop()}}),e)})))()}}}}).call(this,n("24aa"))}}]);
//# sourceMappingURL=chunk-1b2a342b.8f429832.js.map