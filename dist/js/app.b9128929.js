(function(){"use strict";var e={7319:function(e,t,n){var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.isLoading?t("pre-loading"):t("router-view")],1)},i=[],a=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"lds-roller"},[t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div"),t("div")])}],u={name:"PreLoader"},c=u,d=n(1001),l=(0,d.Z)(c,a,s,!1,null,null,null),p=l.exports,f=n(9077),m={components:{PreLoading:p},data(){return{isLoading:!0}},methods:{loadData(){return new Promise((e=>{console.log("hello"),setTimeout((()=>{e()}))}))},checkRefreshTime(){f.Z.getToken()&&(this.$store.state.refreshTokenIntervalId=setInterval((()=>{console.log("refreshToken"),console.log(+new Date/1e3+f.Z.getExpiretime()-60),+new Date/1e3>f.Z.getExpiretime()-60&&this.RefreshToken()}),1e3))}},mounted(){this.loadData().then((()=>{this.isLoading=!1}))},created(){}},h=m,g=(0,d.Z)(h,r,i,!1,null,"71bd94ae",null),b=g.exports,v=n(1120),y=n(3822);const w={windowWidth:null,refreshTokenIntervalId:null},k={windowWidth:e=>e.windowWidth},x={setWindowWidth(e,t){e.windowWidth=t}},S={};var T={state:w,getters:k,actions:S,mutations:x},O=n(9307);const L={user:{},loading:!1,accessToken:null,isLoggedOn:!1,currentRouteName:null},j={user:e=>e.user,loading:e=>e.loading,accessToken:e=>e.accessToken,isLoggedOn:e=>e.isLoggedOn},E={setUser:(e,t)=>e.user=t,setLoading:(e,t)=>e.loading=t,setAccessToken:(e,t)=>e.accessToken=t,setIsLoggedOn:(e,t)=>e.isLoggedOn=t,setCurrentRouteName(e,t){e.currentRouteName=t}},_={async getUser({commit:e}){try{e("setLoading",!0),await this._vm.$http.get(O.v2+"get/student/"+localStorage.getItem("studentId")+"/").then((t=>{console.log(t),localStorage.setItem("group",t.group.id),e("setUser",t)})).catch((t=>{e("setLoading",!1),console.log("Error on getting user by token: "+t)})).finally((()=>{e("setLoading",!1)}))}catch(t){console.log(t)}}};var C={state:L,getters:j,actions:_,mutations:E};o["default"].use(y.ZP);var N=new y.ZP.Store({modules:{generalOptions:T,student:C}}),P=function(e,t){return e(t.props.tag,t._g(t._b({tag:"component",staticClass:"text",class:[{"text--max-lines":t.props.maxLines||t.props.lines,"text--lines":t.props.lines},t.data.staticClass,t.data.class,t.$options.classes(t.props)],style:t.$options.style(t.props)},"component",t.data.attrs,!1),t.listeners),[t._t("default")],2)},A=[],I={name:"AppText",props:{size:{type:[String,Number],default:16},weight:{type:[String,Number],default:400},lineHeight:{type:[String,Number]},letterSpacing:{type:[String]},tag:{type:String,default:"p"},maxLines:{type:[String,Number]},lines:{type:[String,Number]},maxWidth:{type:[String,Number]}},classes(e){return{["text--weight-"+e.weight]:!0}},style(e){let t={"--font":e.size,"--line-height":e.lineHeight||e.size};return e.maxLines&&(t["--max-lines"]=e.maxLines),e.lines&&(t["--max-lines"]=e.lines),e.maxWidth&&(t["--max-width"]=e.maxWidth+"px"),e.letterSpacing&&(t["--letter-spacing"]=e.letterSpacing+"em"),t}},Z=I,W=(0,d.Z)(Z,P,A,!0,null,"0532ac54",null),$=W.exports,M=n(8499),R=n.n(M),D=n(2904),z=n(4021),F=n.n(z);function q(e,t){return e&&e<=t}o["default"].mixin({computed:{...(0,y.Se)(["windowWidth"]),isDesktop(){return this.windowWidth&&this.windowWidth>800},isDesktopMedium(){return q(this.windowWidth,1240)},isDesktopSmall(){return q(this.windowWidth,1040)},isMobile(){return q(this.windowWidth,768)},isMobileMedium(){return q(this.windowWidth,650)},isMobileSmall(){return q(this.windowWidth,500)}}}),o["default"].mixin({data(){return{}},computed:{...(0,y.Se)(["isLoggedOn"]),userIsLoggedOn(){return this.isLoggedOn}},methods:{successNotification(e){this.$toast.success(e,{closeOnClick:!0,duration:1e3})},errorNotification(e){this.$toast.error(e,{closeOnClick:!0,duration:1e3})},notificationMessage(e,t){this.$toast.open({message:e,type:t,position:"top-right"})}}}),o["default"].directive("on-click-outside",{bind:function(e,t,n){e.clickOutsideEvent=function(o){const r=t.arg,i=Array.from(o.target.classList).filter((e=>r.includes(e)));e!=o.target&&!e.contains(o.target)&&i.length<=0&&n.context[t.expression](o)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}});var B=n(378),U=n(6215),H=n.n(U),J=n(1886),K=n.n(J);o["default"].config.productionTip=!1,o["default"].use(K()),o["default"].component("AppText",$),o["default"].use(D.ZP),o["default"].use(B.Z),o["default"].use(R()),o["default"].use(F()),o["default"].use(H()),o["default"].prototype.$http=O.ZP,new o["default"]({router:v.Z,store:N,render:e=>e(b)}).$mount("#app"),o["default"].mixin({data(){return{}},methods:{notificationMessage(e,t){this.$toast.open({message:e,type:t,position:"top-right"})}}})},9307:function(e,t,n){n.d(t,{nT:function(){return u},v2:function(){return s}});n(7658);var o=n(6265),r=n.n(o),i=n(9077),a=n(1120);const s="https://api.fastlms.uz/api/",u="https://student.tfi.uz/rest/v1/",c=r().create({baseURL:s});function d(e){e.interceptors.request.use((e=>{let t=i.Z.getToken();return t&&(e.headers["Authorization"]=`Bearer ${t}`),e.headers["Accept"]="application/json",e.headers["Content-Type"]="application/json",e}),(e=>Promise.reject(e))),e.interceptors.response.use((e=>e.data),(e=>(e.response&&401===e.response.status?a.Z.push({name:"home"}).then((()=>{})).catch((()=>{e.response.status})):e.response&&403===e.response.status&&a.Z.push({path:"/403"}).then(),Promise.reject(e))))}d(c),t.ZP=c},1120:function(e,t,n){var o=n(6369),r=n(2631);o["default"].use(r.ZP);const i=[{path:"/landing-page",name:"landing-page",component:()=>n.e(302).then(n.bind(n,1302)),meta:{guestOnly:!0}},{path:"/login",name:"login",component:()=>Promise.all([n.e(518),n.e(624)]).then(n.bind(n,2077)),meta:{guestOnly:!0}},{path:"/404",name:"error-404",component:()=>n.e(186).then(n.bind(n,3252)),meta:{requiresAuth:!0}},{path:"*",redirect:"/404"},{path:"/",component:()=>n.e(239).then(n.bind(n,1239)),meta:{requiresAuth:!0},children:[{path:"/",name:"home",component:()=>n.e(5).then(n.bind(n,3005))},{path:"education/curriculum",name:"education-curriculum",component:()=>n.e(945).then(n.bind(n,4945))},{path:"education/exam-table",name:"education-exam-table",component:()=>n.e(540).then(n.bind(n,6540))},{path:"education/subjects",name:"education-subjects",component:()=>n.e(97).then(n.bind(n,1097))},{path:"education/subject/resource/:id",name:"education-subject-id",component:()=>n.e(977).then(n.bind(n,3977)),props:!0},{path:"education/subject/tasks/:id",name:"education-subject-tasks",component:()=>n.e(549).then(n.bind(n,1549)),props:!0},{path:"education/subject/tasks/add/:id",name:"education-tasks-id",component:()=>n.e(227).then(n.bind(n,4227)),props:!0},{path:"education/subject/resource/files/:id",name:"education-subject-id-files",component:()=>n.e(338).then(n.bind(n,6338)),props:!0},{path:"education/performance",name:"education-performance",component:()=>n.e(984).then(n.bind(n,5984))},{path:"test/exams",name:"test-exams",component:()=>n.e(221).then(n.bind(n,1221))},{path:"test/exams/result",name:"test-exams-result",component:()=>n.e(17).then(n.bind(n,17))},{path:"test/:exam_id",name:"test",component:()=>Promise.all([n.e(518),n.e(973)]).then(n.bind(n,4600))},{path:"test/result/one/:student_id/:exam_id",component:()=>n.e(61).then(n.bind(n,7061)),name:"test-result-one"},{path:"student/decree",name:"student-decree",component:()=>n.e(516).then(n.bind(n,2516))},{path:"student/personal-data",name:"student-personal-data",component:()=>n.e(300).then(n.bind(n,7300))},{path:"dashboard/profile",name:"dashboard-profile",component:()=>n.e(732).then(n.bind(n,8732))}]}],a=new r.ZP({mode:"history",linkExactActiveClass:"active",routes:i});a.beforeEach(((e,t,n)=>{window.scrollTo(0,0),n()})),a.beforeEach(((e,t,n)=>{const o=JSON.parse(localStorage.getItem("isLogin"));!e.matched.some((e=>e.meta.requiresAuth))||o?e.matched.some((e=>e.meta.guestOnly))&&o?n("/"):n():n("/landing-page")})),t.Z=a},9077:function(e,t){const n="AuthorizationFront",o="RefreshFront",r="TokenExpireFront",i={getToken(){return localStorage.getItem(n)},saveToken(e){localStorage.setItem(n,e)},saveRefreshToken(e){localStorage.setItem(o,e)},saveExpireTime(){localStorage.setItem(r,7)},removeToken(){localStorage.removeItem(n),localStorage.clear()},removeRefreshToken(){localStorage.removeItem(o)},getRefreshToken(){return localStorage.getItem(o)},getExpireTime(){return localStorage.getItem(r)}};t.Z=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{5:"514eff79",17:"e98279d8",61:"9b86fa51",97:"5e528c36",186:"47881a48",221:"8b958ca7",227:"d689c3d1",239:"d36e80df",300:"b17bf289",302:"c524a76f",338:"3070fc7b",516:"620102ec",518:"17eefbd4",540:"fd0fd342",549:"f8eaa860",624:"01cac0a7",732:"70803b49",945:"2dff8651",973:"f8337f4e",977:"3f8659db",984:"18928f1a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{5:"d91e8a8b",61:"a84d1903",97:"a700e88c",227:"09e2fc45",239:"ee0ae0da",300:"bea45520",302:"541d97e3",338:"0cd10326",540:"5cd391ae",549:"7b269d9f",624:"ce3f36bb",732:"75543645",945:"ebd60b52",973:"7d0cc97f",977:"72d8e3cf"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="moodle-student:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={5:1,61:1,97:1,227:1,239:1,300:1,302:1,338:1,540:1,549:1,624:1,732:1,945:1,973:1,977:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var d=u(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkmoodle_student"]=self["webpackChunkmoodle_student"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7319)}));o=n.O(o)})();
//# sourceMappingURL=app.b9128929.js.map