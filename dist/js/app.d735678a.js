(function(){"use strict";var e={7319:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.isLoading?t("pre-loading"):t("router-view")],1)},i=[],a=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"lds-roller"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])}],c={name:"PreLoader"},u=c,d=n(1001),l=(0,d.Z)(u,a,s,!1,null,null,null),m=l.exports,p=n(9077),h={components:{PreLoading:m},data(){return{isLoading:!0}},methods:{loadData(){return new Promise((e=>{console.log("hello"),setTimeout((()=>{e()}))}))},checkRefreshTime(){p.Z.getToken()&&(this.$store.state.refreshTokenIntervalId=setInterval((()=>{console.log("refreshToken"),console.log(+new Date/1e3+p.Z.getExpiretime()-60),+new Date/1e3>p.Z.getExpiretime()-60&&this.RefreshToken()}),1e3))}},mounted(){this.loadData().then((()=>{this.isLoading=!1}))},created(){}},f=h,g=(0,d.Z)(f,r,i,!1,null,"71bd94ae",null),b=g.exports,v=n(1120),y=n(3822);const w={windowWidth:null,refreshTokenIntervalId:null},k={windowWidth:e=>e.windowWidth},x={setWindowWidth(e,t){e.windowWidth=t}},S={};var O={state:w,getters:k,actions:S,mutations:x},T=n(9307);const P={user:{},loading:!1,accessToken:null,isLoggedOn:!1},L={user:e=>e.user,loading:e=>e.loading,accessToken:e=>e.accessToken,isLoggedOn:e=>e.isLoggedOn},Z={setUser:(e,t)=>e.user=t,setLoading:(e,t)=>e.loading=t,setAccessToken:(e,t)=>e.accessToken=t,setIsLoggedOn:(e,t)=>e.isLoggedOn=t},E={getUser({commit:e}){try{e("setLoading",!0),this._vm.$http.get(T.v2+"get/student/"+localStorage.getItem("studentId")+"/").then((t=>{console.log(t),e("setUser",t)})).catch((t=>{e("setLoading",!1),console.log("Error on getting user by token: "+t)})).finally((()=>{e("setLoading",!1)}))}catch(t){console.log(t)}}};var C={state:P,getters:L,actions:E,mutations:Z};o.ZP.use(y.ZP);var j=new y.ZP.Store({modules:{generalOptions:O,student:C}}),A=function(e,t){return e(t.props.tag,t._g(t._b({tag:"component",staticClass:"text",class:[{"text--max-lines":t.props.maxLines||t.props.lines,"text--lines":t.props.lines},t.data.staticClass,t.data.class,t.$options.classes(t.props)],style:t.$options.style(t.props)},"component",t.data.attrs,!1),t.listeners),[t._t("default")],2)},_=[],I={name:"AppText",props:{size:{type:[String,Number],default:16},weight:{type:[String,Number],default:400},lineHeight:{type:[String,Number]},letterSpacing:{type:[String]},tag:{type:String,default:"p"},maxLines:{type:[String,Number]},lines:{type:[String,Number]},maxWidth:{type:[String,Number]}},classes(e){return{["text--weight-"+e.weight]:!0}},style(e){let t={"--font":e.size,"--line-height":e.lineHeight||e.size};return e.maxLines&&(t["--max-lines"]=e.maxLines),e.lines&&(t["--max-lines"]=e.lines),e.maxWidth&&(t["--max-width"]=e.maxWidth+"px"),e.letterSpacing&&(t["--letter-spacing"]=e.letterSpacing+"em"),t}},N=I,W=(0,d.Z)(N,A,_,!0,null,"0532ac54",null),D=W.exports,$=n(2904),q=n(9501);function B(e,t){return e&&e<=t}o.ZP.mixin({computed:{...(0,y.Se)(["windowWidth"]),isDesktop(){return this.windowWidth&&this.windowWidth>800},isDesktopMedium(){return B(this.windowWidth,1240)},isDesktopSmall(){return B(this.windowWidth,1040)},isMobile(){return B(this.windowWidth,800)},isMobileMedium(){return B(this.windowWidth,650)},isMobileSmall(){return B(this.windowWidth,500)}}}),o.ZP.mixin({data(){return{}},computed:{...(0,y.Se)(["isLoggedOn"]),userIsLoggedOn(){return this.isLoggedOn}},methods:{successNotification(e){this.$toast.success(e,{closeOnClick:!0,duration:1e3})},errorNotification(e){this.$toast.error(e,{closeOnClick:!0,duration:1e3})}}}),o.ZP.directive("on-click-outside",{bind:function(e,t,n){e.clickOutsideEvent=function(o){const r=t.arg,i=Array.from(o.target.classList).filter((e=>r.includes(e)));e!=o.target&&!e.contains(o.target)&&i.length<=0&&n.context[t.expression](o)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}),o.ZP.config.productionTip=!1,o.ZP.component("AppText",D),o.ZP.use($.ZP),o.ZP.use(q.ZP,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1}),o.ZP.prototype.$http=T.ZP,new o.ZP({router:v.Z,store:j,render:e=>e(b)}).$mount("#app")},9307:function(e,t,n){n.d(t,{nT:function(){return c},v2:function(){return s}});n(7658);var o=n(6265),r=n.n(o),i=n(9077),a=n(1120);const s="https://api.fastlms.uz/api/",c="https://student.tfi.uz/rest/v1/",u=r().create({baseURL:s});function d(e){e.interceptors.request.use((e=>{let t=i.Z.getToken();return t&&(e.headers["Authorization"]=`Bearer ${t}`),e.headers["Accept"]="application/json",e.headers["Content-Type"]="application/json",e}),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e.data),(e=>(e.response&&401===e.response.status?a.Z.push({name:"login"}).then((()=>{})).catch((()=>{e.response.status})):e.response&&403===e.response.status&&a.Z.push({path:"/403"}).then(),Promise.reject(e))))}d(u),t.ZP=u},1120:function(e,t,n){var o=n(6369),r=n(2631);o.ZP.use(r.ZP);const i=[{path:"/landing-page",name:"landing-page",component:()=>n.e(302).then(n.bind(n,1302)),meta:{guestOnly:!0}},{path:"/login",name:"login",component:()=>Promise.all([n.e(876),n.e(545)]).then(n.bind(n,3254)),meta:{guestOnly:!0}},{path:"/404",name:"error-404",component:()=>n.e(186).then(n.bind(n,3252)),meta:{requiresAuth:!0}},{path:"*",redirect:"/404"},{path:"/",component:()=>n.e(455).then(n.bind(n,7455)),meta:{requiresAuth:!0},children:[{path:"/",name:"home",component:()=>n.e(35).then(n.bind(n,2035))},{path:"education/curriculum",name:"education-curriculum",component:()=>n.e(910).then(n.bind(n,5910))},{path:"education/time-table",name:"education-time-table",component:()=>n.e(316).then(n.bind(n,3316))},{path:"education/exam-table",name:"education-exam-table",component:()=>n.e(812).then(n.bind(n,5812))},{path:"education/subjects",name:"education-subjects",component:()=>n.e(343).then(n.bind(n,2343))},{path:"education/attendance",name:"education-attendance",component:()=>Promise.all([n.e(876),n.e(847)]).then(n.bind(n,9847))},{path:"education/performance",name:"education-performance",component:()=>n.e(984).then(n.bind(n,5984))},{path:"education/academic-data",name:"education-academic-data",component:()=>n.e(154).then(n.bind(n,154))},{path:"education/subject-choose",name:"education-subject-choose",component:()=>n.e(571).then(n.bind(n,571))},{path:"test/exams",name:"test-exams",component:()=>n.e(101).then(n.bind(n,9101))},{path:"retraining/application",name:"retraining-application",component:()=>n.e(539).then(n.bind(n,5539))},{path:"retraining/exam-table",name:"retraining-exam-table",component:()=>n.e(409).then(n.bind(n,4409))},{path:"retraining/performance",name:"retraining-performance",component:()=>n.e(113).then(n.bind(n,9113))},{path:"retraining/time-table",name:"retraining-time-table",component:()=>n.e(867).then(n.bind(n,3867))},{path:"student/decree",name:"student-decree",component:()=>n.e(516).then(n.bind(n,2516))},{path:"student/contract",name:"student-contract",component:()=>n.e(983).then(n.bind(n,4983))},{path:"student/reference",name:"student-reference",component:()=>n.e(25).then(n.bind(n,4025))},{path:"student/document",name:"student-document",component:()=>n.e(294).then(n.bind(n,9294))},{path:"student/circulation-sheet",name:"student-circulation-sheet",component:()=>n.e(780).then(n.bind(n,7780))},{path:"student/personal-data",name:"student-personal-data",component:()=>n.e(199).then(n.bind(n,1199))},{path:"student/graduate-qualifying",name:"student-graduate-qualifying",component:()=>n.e(223).then(n.bind(n,8223))},{path:"message/my-messages",name:"message-my-messages",component:()=>n.e(706).then(n.bind(n,2706))},{path:"message/compose",name:"message-compose",component:()=>n.e(502).then(n.bind(n,9502))},{path:"dashboard/profile",name:"dashboard-profile",component:()=>Promise.all([n.e(876),n.e(760)]).then(n.bind(n,7748))}]}],a=new r.ZP({mode:"history",linkExactActiveClass:"active",routes:i});a.beforeEach(((e,t,n)=>{window.scrollTo(0,0),n()})),a.beforeEach(((e,t,n)=>{const o=JSON.parse(localStorage.getItem("isLogin"));!e.matched.some((e=>e.meta.requiresAuth))||o?e.matched.some((e=>e.meta.guestOnly))&&o?n("/"):n():n("/landing-page")})),t.Z=a},9077:function(e,t){const n="AuthorizationFront",o="RefreshFront",r="TokenExpireFront",i={getToken(){return localStorage.getItem(n)},saveToken(e){localStorage.setItem(n,e)},saveRefreshToken(e){localStorage.setItem(o,e)},saveExpireTime(){localStorage.setItem(r,7)},removeToken(){localStorage.removeItem(n),localStorage.clear()},removeRefreshToken(){localStorage.removeItem(o)},getRefreshToken(){return localStorage.getItem(o)},getExpireTime(){return localStorage.getItem(r)}};t.Z=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{25:"868481ed",35:"d75b85e3",101:"1a80634c",113:"4aee4080",154:"0ee7a485",186:"47881a48",199:"02f541d3",223:"c5a17a13",294:"dfc4b6ca",302:"0b8c4e77",316:"be2fff6c",343:"791741f0",409:"631b3d80",455:"f6539c3d",502:"3aefe65a",516:"620102ec",539:"4b6d9ae5",545:"4c1e696c",571:"e825dff6",706:"fd1c28e8",760:"98bb6598",780:"1c33ea87",812:"1a270a7d",847:"9193b8df",867:"ac2f51be",876:"fc816d6c",910:"9b8a2ad9",983:"2c747558",984:"18928f1a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{35:"562581a1",154:"1f1a0a1f",199:"20761a92",302:"541d97e3",316:"a376790b",455:"f71a3e09",545:"7406b1d0",760:"54399047",812:"4f0ca7ce",847:"45f94667",910:"757fda07"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="moodle-student:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={35:1,154:1,199:1,302:1,316:1,455:1,545:1,760:1,812:1,847:1,910:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkmoodle_student"]=self["webpackChunkmoodle_student"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7319)}));o=n.O(o)})();
//# sourceMappingURL=app.d735678a.js.map