(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f6895eb"],{"36a7":function(t,e,s){},"4d03":function(t,e,s){"use strict";s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return c})),s.d(e,"g",(function(){return l})),s.d(e,"f",(function(){return u})),s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return d})),s.d(e,"e",(function(){return h}));var i=s("bc3a"),r=s.n(i),n=r.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function a(){return n.get("/api/test/getSolution")}function o(t){return console.log("로그인"),n.post("/api/test/login",t)}function c(t){var e=new Date(0);e.setUTCSeconds(t),console.log(e);var s=new Date;console.log(s),s<=e?(console.log(s<=e),console.log(s)):(this.$router.push({name:"Login"}),localStorage.removeItem("token"))}function l(t){switch(t){case"Q":return console.log("질문자입니다."),"질문자";case"A":return console.log("답변자입니다."),"답변자";case"O":return console.log("운영자입니다."),"운영자"}}function u(t){switch(t){case"SL010000":return console.log("iGate"),"iGate";case"SL020000":return console.log("eCross."),"eCross";case"SL030000":return console.log("Xtorm."),"Xtorm";case"SL040000":return console.log("eXperDB."),"eXperDB";case"SL050000":return console.log("Libeka."),"Libeka";case"SL060000":return console.log("iWorks."),"iWorks";case"SL070000":return console.log("iXeb."),"iXeb";case"SL080000":return console.log("APIM."),"APIM";case"SL090000":return console.log("MyGuard."),"MyGuard";case"SL100000":return console.log("문서중앙화."),"문서중앙화"}}function d(t){return n.get("/api/test/idCheck",{params:t})}function h(t){return n.get("/api/test/searchPassword",{params:t})}},"85d5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"ct"}},[s("section",{staticClass:"card"},[s("header",{staticClass:"card-header"},[t._m(0),s("h2",{staticClass:"card-title text-tertiary text-pad"},[t._v(" | ")]),t._m(1),s("div",{staticClass:"btn-container"},[s("a",{staticClass:"btn btn-m",on:{click:t.updateProfile}},[s("span",{staticClass:"hide"},[t._v("편집")])])])]),s("div",{staticClass:"card-body card-img"},[t.noImage()?s("div",{staticClass:"profile_management_sample"},[s("i",{staticClass:"icon-pic"}),s("span",{staticClass:"text-secondary"},[t._v("No image loaded")])]):s("v-img",{attrs:{src:t.get_img_src}})],1),s("div",{staticClass:"table-responsive",staticStyle:{width:"30rem"}},[s("table",{staticClass:"table"},[t._m(2),s("tbody",[s("tr",[s("td",{staticClass:"alert-text"},[t._v(" 이름 ")]),s("td",[t._v(t._s(t.user_name))])]),s("tr",[s("td",{staticClass:"alert-text"},[t._v(" 이메일 ")]),s("td",[t._v(t._s(t.user_id))])]),s("tr",[s("td",{staticClass:"alert-text"},[t._v(" 소속회사 ")]),s("td",[t._v(t._s(t.company))])]),s("tr",[s("td",{staticClass:"alert-text"},[t._v(" 부서 ")]),s("td",[t._v(t._s(t.dept))])]),s("tr",[s("td",{staticClass:"alert-text"},[t._v(" 담당솔루션 ")]),s("td",[t._v(t._s(t.solution))])]),s("tr",[s("td",{staticClass:"alert-text"},[t._v(" 권한 ")]),s("td",[t._v(t._s(t.usertype))])])])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"card-title"},[s("span",{staticClass:"i-rounded bg-danger"},[s("i",{staticClass:"icon-user"})]),t._v("프로필관리 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/point"}},[s("h2",{staticClass:"card-title text-tertiary"},[t._v(" 지식포인트 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("colgroup",[s("col",{staticStyle:{width:"30%"}}),s("col",{staticStyle:{width:"70%"}})])}],n=(s("caad"),s("2532"),s("96cf"),s("1da1")),a=s("4d03"),o=s("bef7"),c=s("65fb"),l={data:function(){return{showNoImage:!1,usertype:"",solution:"",imageBytes:"",selectedFile:null,uploadData:"",imgSrc:"",image:null,rules:[function(t){return!t||t.size<2e6||"Avatar size should be less than 2 MB!"+t.type}],alert:!1}},computed:{get_img_src:function(){return"data:image;base64,"+this.imgSrc},user_name:function(){return this.$store.state.username},user_id:function(){return this.$store.state.userid},company:function(){return this.$store.state.company},dept:function(){return this.$store.state.dept}},mounted:function(){},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,i,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.$store.state.exp,Object(a["a"])(s),t.$store.commit("SET_DEPTH1","프로필관리"),t.$store.commit("SET_DEPTH2","프로필관리"),t.userType(),t.userSolution(),i={user_id:t.$store.state.userid},console.log(i),e.next=10,Object(c["b"])(i);case 10:r=e.sent,n=r.data,console.log("data 트루야 펄스야?",""===n),""===n?(t.showNoImage=!0,console.log("data 트루야 펄스야?",""===n)):t.imgSrc=n;case 14:case"end":return e.stop()}}),e)})))()},methods:{onUpload:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,i,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,s=new FormData,i=["image/jpeg","image/jpg","image/png"],i.includes(t.image.type)){e.next=7;break}t.alert=!0,e.next=17;break;case 7:return t.alert=!1,console.log("이미지파일 맞음"),console.log("image/*"===t.image.type),s.append("profile_image",t.image),s.append("user_id",t.user_id),e.next=14,Object(o["a"])(s);case 14:r=e.sent,n=r.data,t.imgSrc=n;case 17:e.next=21;break;case 19:e.prev=19,e.t0=e["catch"](0);case 21:return e.prev=21,e.finish(21);case 23:case"end":return e.stop()}}),e,null,[[0,19,21,23]])})))()},userType:function(){var t=this.$store.state.usertype;this.usertype=Object(a["g"])(t)},userSolution:function(){var t=this.$store.state.solution;console.log("code뭐가 있지?",t),this.solution=Object(a["f"])(t),console.log("solution뭐가 있지?",this.solution)},updateProfile:function(){this.$router.push("/profileUpdate")},pointPage:function(){this.$router.push("/point")},noImage:function(){return this.showNoImage}}},u=l,d=s("2877"),h=s("6544"),g=s.n(h),p=s("adda"),m=Object(d["a"])(u,i,r,!1,null,null,null);e["default"]=m.exports;g()(m,{VImg:p["a"]})},"8efc":function(t,e,s){},"90a2":function(t,e,s){"use strict";s("7db0");var i=s("53ca");function r(t,e){var s=e.modifiers||{},r=e.value,a="object"===Object(i["a"])(r)?r:{handler:r,options:{}},o=a.handler,c=a.options,l=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!s.quiet||t._observe.init)){var r=Boolean(e.find((function(t){return t.isIntersecting})));o(e,i,r)}t._observe.init&&s.once?n(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:l},l.observe(t)}function n(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var a={inserted:r,unbind:n};e["a"]=a},adda:function(t,e,s){"use strict";s("a15b"),s("a9e3");var i=s("53ca"),r=(s("8efc"),s("90a2")),n=(s("36a7"),s("24b2")),a=s("58df"),o=Object(a["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=s("7560"),u=s("d9f7"),d=s("d9bd"),h="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(a["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:r["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(i["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,s){if(!h||s||this.eager){if(this.normalisedSrc.lazySrc){var i=new Image;i.src=this.normalisedSrc.lazySrc,this.pollForSize(i,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var r=t.naturalHeight,n=t.naturalWidth;r||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/r):null!=s&&!e.hasError&&setTimeout(i,s)};i()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),s=Object(u["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},bef7:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return o}));var i=s("bc3a"),r=s.n(i),n=r.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL});function a(t){return n.post("/api/test/signUp",t)}function o(t){return n.post("/api/prm/upload",t)}},d9f7:function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return u}));s("99af"),s("b64b"),s("ac1f"),s("1276"),s("498a");var i=s("5530"),r=s("3835"),n=s("b85c"),a=s("80d2"),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,s={},i=Object(n["a"])(t.split(o.styleList));try{for(i.s();!(e=i.n()).done;){var c=e.value,l=c.split(o.styleProp),u=Object(r["a"])(l,2),d=u[0],h=u[1];d=d.trim(),d&&("string"===typeof h&&(h=h.trim()),s[Object(a["d"])(d)]=h)}}catch(g){i.e(g)}finally{i.f()}return s}function l(){var t,e={},s=arguments.length;while(s--)for(var r=0,n=Object.keys(arguments[s]);r<n.length;r++)switch(t=n[r],t){case"class":case"directives":arguments[s][t]&&(e[t]=d(e[t],arguments[s][t]));break;case"style":arguments[s][t]&&(e[t]=u(e[t],arguments[s][t]));break;case"staticClass":if(!arguments[s][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[s][t].trim();break;case"on":case"nativeOn":arguments[s][t]&&(e[t]=h(e[t],arguments[s][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[s][t])break;e[t]||(e[t]={}),e[t]=Object(i["a"])(Object(i["a"])({},arguments[s][t]),e[t]);break;default:e[t]||(e[t]=arguments[s][t])}return e}function u(t,e){return t?e?(t=Object(a["A"])("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function d(t,e){return e?t&&t?Object(a["A"])(t).concat(e):e:t}function h(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var s=e<0||arguments.length<=e?void 0:arguments[e];for(var i in s)s[i]&&(t[i]?t[i]=[].concat(s[i],t[i]):t[i]=s[i])}return t}}}]);
//# sourceMappingURL=chunk-3f6895eb.c7e196ee.js.map