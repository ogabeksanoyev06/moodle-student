(function(){"use strict";var e={4083:function(e,t,n){var o=n(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.isLoading?t("pre-loading"):t("router-view")],1)},r=[],i=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"preloader"}},[t("div",{staticClass:"spinner"})])}],c={name:"PreLoader"},u=c,d=n(1001),l=(0,d.Z)(u,i,s,!1,null,null,null),p=l.exports,m=n(9077),h={components:{PreLoading:p},data(){return{isLoading:!0}},methods:{loadData(){return new Promise((e=>{console.log("hello"),setTimeout((()=>{e()}))}))},checkRefreshTime(){m.Z.getToken()&&(this.$store.state.refreshTokenIntervalId=setInterval((()=>{console.log("refreshToken"),console.log(+new Date/1e3+m.Z.getExpiretime()-60),+new Date/1e3>m.Z.getExpiretime()-60&&this.RefreshToken()}),1e3))}},mounted(){this.loadData().then((()=>{this.isLoading=!1}))},created(){}},f=h,g=(0,d.Z)(f,a,r,!1,null,"71bd94ae",null),b=g.exports,v=n(1120),y=n(3822);const w={windowWidth:null,refreshTokenIntervalId:null},k={windowWidth:e=>e.windowWidth},x={setWindowWidth(e,t){e.windowWidth=t}},T={};var P={state:w,getters:k,actions:T,mutations:x},S=n(9307);const O={user:{},loading:!1,accessToken:null,isLoggedOn:!1},Z={user:e=>e.user,loading:e=>e.loading,accessToken:e=>e.accessToken,isLoggedOn:e=>e.isLoggedOn},L={setUser:(e,t)=>e.user=t,setLoading:(e,t)=>e.loading=t,setAccessToken:(e,t)=>e.accessToken=t,setIsLoggedOn:(e,t)=>e.isLoggedOn=t},E={getUser({commit:e}){try{e("setLoading",!0),this._vm.$http.get(S.nT+"account/me").then((t=>{t.success&&e("setUser",t.data)})).catch((t=>{e("setLoading",!1),console.log("Error on getting user by token: "+t)})).finally((()=>{e("setLoading",!1)}))}catch(t){console.log(t)}}};var C={state:O,getters:Z,actions:E,mutations:L};o.ZP.use(y.ZP);var j=new y.ZP.Store({modules:{generalOptions:P,student:C}}),A=function(e,t){return e(t.props.tag,t._g(t._b({tag:"component",staticClass:"text",class:[{"text--max-lines":t.props.maxLines||t.props.lines,"text--lines":t.props.lines},t.data.staticClass,t.data.class,t.$options.classes(t.props)],style:t.$options.style(t.props)},"component",t.data.attrs,!1),t.listeners),[t._t("default")],2)},_=[],N={name:"AppText",props:{size:{type:[String,Number],default:16},weight:{type:[String,Number],default:400},lineHeight:{type:[String,Number]},letterSpacing:{type:[String]},tag:{type:String,default:"p"},maxLines:{type:[String,Number]},lines:{type:[String,Number]},maxWidth:{type:[String,Number]}},classes(e){return{["text--weight-"+e.weight]:!0}},style(e){let t={"--font":e.size,"--line-height":e.lineHeight||e.size};return e.maxLines&&(t["--max-lines"]=e.maxLines),e.lines&&(t["--max-lines"]=e.lines),e.maxWidth&&(t["--max-width"]=e.maxWidth+"px"),e.letterSpacing&&(t["--letter-spacing"]=e.letterSpacing+"em"),t}},W=N,I=(0,d.Z)(W,A,_,!0,null,"0532ac54",null),D=I.exports,F=n(2904),$=n(9501);function q(e,t){return e&&e<=t}o.ZP.mixin({computed:{...(0,y.Se)(["windowWidth"]),isDesktop(){return this.windowWidth&&this.windowWidth>800},isDesktopMedium(){return q(this.windowWidth,1240)},isDesktopSmall(){return q(this.windowWidth,1040)},isMobile(){return q(this.windowWidth,800)},isMobileMedium(){return q(this.windowWidth,650)},isMobileSmall(){return q(this.windowWidth,500)}}}),o.ZP.mixin({data(){return{}},computed:{...(0,y.Se)([])},methods:{successNotification(e){this.$toast.success(e,{closeOnClick:!0,duration:1e3})},errorNotification(e){this.$toast.error(e,{closeOnClick:!0,duration:1e3})}}}),o.ZP.directive("on-click-outside",{bind:function(e,t,n){e.clickOutsideEvent=function(o){const a=t.arg,r=Array.from(o.target.classList).filter((e=>a.includes(e)));e!=o.target&&!e.contains(o.target)&&r.length<=0&&n.context[t.expression](o)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}),o.ZP.config.productionTip=!1,o.ZP.component("AppText",D),o.ZP.use(F.ZP),o.ZP.use($.ZP,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!1,closeButton:"button",icon:!0,rtl:!1}),o.ZP.prototype.$http=S.ZP,new o.ZP({router:v.Z,store:j,render:e=>e(b)}).$mount("#app")},9307:function(e,t,n){n.d(t,{nT:function(){return c}});n(7658);var o=n(6265),a=n.n(o),r=n(9077),i=n(1120);const s="http://api.fastlms.uz/api/",c="https://student.tfi.uz/rest/v1/",u=a().create({baseURL:s});function d(e){e.interceptors.request.use((e=>{let t=r.Z.getToken();return t&&(e.headers["Authorization"]=`Bearer ${t}`),e.headers["Accept"]="application/json",e.headers["Content-Type"]="application/json",e}),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e.data),(e=>(e.response&&401===e.response.status?(localStorage.clear(),i.Z.push({name:"login"}).then((()=>{})).catch((()=>{e.response.status}))):e.response&&403===e.response.status&&i.Z.push({path:"/403"}).then(),Promise.reject(e))))}d(u),t.ZP=u},1120:function(e,t,n){var o=n(6369),a=n(2631),r=n(9077);o.ZP.use(a.ZP);const i=[{path:"/landing-page",name:"landing-page",component:()=>n.e(954).then(n.bind(n,9954)),meta:{guestOnly:!0}},{path:"/login",name:"login",component:()=>Promise.all([n.e(876),n.e(286)]).then(n.bind(n,1755)),meta:{guestOnly:!0}},{path:"/404",name:"error-404",component:()=>n.e(186).then(n.bind(n,3252)),meta:{requiresAuth:!0}},{path:"*",redirect:"/404"},{path:"/",component:()=>n.e(617).then(n.bind(n,4617)),meta:{requiresAuth:!0},children:[{path:"",name:"FaceControl",component:()=>n.e(358).then(n.bind(n,8358))},{path:"/",name:"home",component:()=>n.e(35).then(n.bind(n,2035))},{path:"education/curriculum",name:"education-curriculum",component:()=>n.e(261).then(n.bind(n,4261))},{path:"education/time-table",name:"education-time-table",component:()=>n.e(316).then(n.bind(n,3316))},{path:"education/exam-table",name:"education-exam-table",component:()=>n.e(966).then(n.bind(n,2966))},{path:"education/subjects",name:"education-subjects",component:()=>n.e(343).then(n.bind(n,2343))},{path:"education/attendance",name:"education-attendance",component:()=>Promise.all([n.e(876),n.e(670)]).then(n.bind(n,8670))},{path:"education/performance",name:"education-performance",component:()=>n.e(984).then(n.bind(n,5984))},{path:"education/academic-data",name:"education-academic-data",component:()=>n.e(432).then(n.bind(n,4432))},{path:"education/subject-choose",name:"education-subject-choose",component:()=>n.e(571).then(n.bind(n,571))},{path:"test/exams",name:"test-exams",component:()=>n.e(101).then(n.bind(n,9101))},{path:"retraining/application",name:"retraining-application",component:()=>n.e(539).then(n.bind(n,5539))},{path:"retraining/exam-table",name:"retraining-exam-table",component:()=>n.e(409).then(n.bind(n,4409))},{path:"retraining/performance",name:"retraining-performance",component:()=>n.e(113).then(n.bind(n,9113))},{path:"retraining/time-table",name:"retraining-time-table",component:()=>n.e(867).then(n.bind(n,3867))},{path:"student/decree",name:"student-decree",component:()=>n.e(516).then(n.bind(n,2516))},{path:"student/contract",name:"student-contract",component:()=>n.e(983).then(n.bind(n,4983))},{path:"student/reference",name:"student-reference",component:()=>n.e(25).then(n.bind(n,4025))},{path:"student/document",name:"student-document",component:()=>n.e(294).then(n.bind(n,9294))},{path:"student/circulation-sheet",name:"student-circulation-sheet",component:()=>n.e(780).then(n.bind(n,7780))},{path:"student/personal-data",name:"student-personal-data",component:()=>n.e(199).then(n.bind(n,1199))},{path:"student/graduate-qualifying",name:"student-graduate-qualifying",component:()=>n.e(223).then(n.bind(n,8223))},{path:"message/my-messages",name:"message-my-messages",component:()=>n.e(706).then(n.bind(n,2706))},{path:"message/compose",name:"message-compose",component:()=>n.e(502).then(n.bind(n,9502))},{path:"dashboard/profile",name:"dashboard-profile",component:()=>Promise.all([n.e(876),n.e(130)]).then(n.bind(n,2723))}]}],s=new a.ZP({mode:"history",linkExactActiveClass:"active",routes:i});s.beforeEach(((e,t,n)=>{window.scrollTo(0,0),n()})),s.beforeEach(((e,t,n)=>{const o=!!r.Z.getToken();!e.matched.some((e=>e.meta.requiresAuth))||o?e.matched.some((e=>e.meta.guestOnly))&&o?n("/"):n():n("/landing-page")})),t.Z=s},9077:function(e,t){const n="AuthorizationFront",o="RefreshFront",a="TokenExpireFront",r={getToken(){return localStorage.getItem(n)},saveToken(e){localStorage.setItem(n,e)},saveRefreshToken(e){localStorage.setItem(o,e)},saveExpireTime(){localStorage.setItem(a,7)},removeToken(){localStorage.removeItem(n),localStorage.clear()},removeRefreshToken(){localStorage.removeItem(o)},getRefreshToken(){return localStorage.getItem(o)},getExpireTime(){return localStorage.getItem(a)}};t.Z=r}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{25:"868481ed",35:"d75b85e3",101:"1a80634c",113:"4aee4080",130:"135f5812",186:"47881a48",199:"02f541d3",223:"c5a17a13",261:"82da1f2a",286:"535e691a",294:"dfc4b6ca",316:"be2fff6c",343:"791741f0",358:"a0cc02c5",409:"631b3d80",432:"771c7943",502:"3aefe65a",516:"620102ec",539:"4b6d9ae5",571:"e825dff6",617:"b5dfdbc5",670:"58c84542",706:"fd1c28e8",780:"1c33ea87",867:"ac2f51be",876:"fc816d6c",954:"fda47f21",966:"e4434c17",983:"2c747558",984:"18928f1a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{35:"562581a1",130:"a107440c",199:"20761a92",261:"bc669579",286:"153b8d59",316:"a376790b",358:"4e0fb364",617:"a6e4aaa2",670:"29feea6d",954:"2a8a94be",966:"79f633e4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="moodle-student:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+r){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode&&r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={35:1,130:1,199:1,261:1,286:1,316:1,358:1,617:1,670:1,954:1,966:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var d=c(n)}for(t&&t(o);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkmoodle_student"]=self["webpackChunkmoodle_student"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4083)}));o=n.O(o)})();
//# sourceMappingURL=app.42cfbcb1.js.map