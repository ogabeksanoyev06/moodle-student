"use strict";(self["webpackChunkmoodle_student"]=self["webpackChunkmoodle_student"]||[]).push([[624],{2077:function(t,e,i){i.r(e),i.d(e,{default:function(){return It}});var n=function(){var t=this,e=t._self._c;return e("kinesis-container",[e("div",{staticClass:"auth"},[e("div",{staticClass:"auth__content"},[e("div",{staticClass:"auth__wrap"},[e("router-link",{attrs:{to:{name:"landing-page"}}},[e("div",{staticClass:"auth__logo"},[e("img",{staticClass:"mb-5",attrs:{src:"/svg/smallLogo.svg",alt:""}})])]),e("AppText",{staticClass:"color-text-grey mb-20",attrs:{weight:"600",size:"14"}},[t._v(" Toshkent Moliya Instituti ")]),e("AppText",{staticClass:"color-text-grey mb-20",attrs:{weight:"600",size:"12"}},[t._v(" Moodle OTM axborot tizimi ")]),t.faceForm?t._e():e("el-form",{ref:"login",staticClass:"demo-ruleForm",staticStyle:{width:"100%"},attrs:{"label-position":"top",model:t.request,rules:t.rules,"label-width":"100%"}},[e("el-form-item",{attrs:{prop:"login"}},[e("el-input",{attrs:{"suffix-icon":"el-icon-user"},model:{value:t.request.login,callback:function(e){t.$set(t.request,"login",e)},expression:"request.login"}})],1),e("el-form-item",{attrs:{prop:"password"}},[e("el-input",{attrs:{"show-password":"","suffix-icon":"el-icon-eye"},model:{value:t.request.password,callback:function(e){t.$set(t.request,"password",e)},expression:"request.password"}})],1),e("AppButton",{staticClass:"login mb-20 w-100",attrs:{theme:"main",type:"submit","font-size":14,sides:20,weight:500,height:40,disabled:t.loading},on:{click:function(e){return t.loginToSystem(e,"login")}}},[t._v(" Tizimga kirish ")])],1),t.faceForm?e("el-form",{ref:"login",staticClass:"demo-ruleForm",staticStyle:{width:"100%"},attrs:{"label-position":"top",model:t.request,rules:t.rules,"label-width":"100%"}},[e("el-form-item",{attrs:{prop:"login"}},[e("el-input",{attrs:{"suffix-icon":"el-icon-user"},model:{value:t.request.login,callback:function(e){t.$set(t.request,"login",e)},expression:"request.login"}})],1),e("AppButton",{staticClass:"login mb-20 w-100",attrs:{theme:"main",type:"submit","font-size":14,sides:20,weight:500,height:40,disabled:t.loading},on:{click:function(e){return t.getUserImage(e,"login")}}},[t._v(" Tizimga kirish ")])],1):t._e(),e("AppModal",{class:{visible:t.showModal},attrs:{width:700},on:{close:t.closeModal},scopedSlots:t._u([{key:"modalHeader",fn:function(){return[t._v(" Face Id ")]},proxy:!0},{key:"modalBody",fn:function(){return[e("FaceId",{attrs:{"is-open-camera":t.showModal,image:t.image},on:{"face-match-result":t.handleFaceMatchResult}})]},proxy:!0}])}),e("button",{staticClass:"face__btn",on:{click:function(e){t.faceForm=!t.faceForm}}},[t.faceForm?e("span",[t._v("Parol orqali tizimga kirish")]):e("span",{staticClass:"d-flex align-center"},[t._v(" FACE orqali tizimga kirish "),e("img",{staticStyle:{"max-width":"20px"},attrs:{src:"/icons/camera.svg",alt:""}})])])],1)]),t.isDesktopSmall?t._e():e("div",{staticClass:"auth__photo"},[e("kinesis-element",{staticClass:"layer",attrs:{strength:15}},[e("img",{attrs:{src:"/svg/largeLogo.svg",alt:""}}),e("div",{staticClass:"blur"})])],1)])])},s=[],a=(i(7658),i(5530));i(1439),i(7585),i(5315);function o(t){const e=t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth);return e}function r(t,e,i){let n,s;return function(){const a=this;let o;o="scroll"===i||a.duration>1e3?e:a.duration/10;const r=+new Date,l=arguments;n&&r<n+o?(clearTimeout(s),s=setTimeout((()=>{requestAnimationFrame((()=>{n=r,t.apply(a,l)}))}),o)):requestAnimationFrame((()=>{n=r,t.apply(a,l)}))}}var l={props:{active:{type:Boolean,default:!0},duration:{type:Number,default:1e3},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},tag:{type:String,default:"div"}}},d={props:{perspective:{type:Number,default:1e3}},computed:{style(){return{perspective:`${this.perspective}px`}}}},c={props:{audio:{type:String,required:!1},playAudio:{type:Boolean,default:!1}},data(){return{analyser:null,audioArray:null,audioData:null,audioRef:null,wasPlayed:!1,isPlaying:!1}},watch:{audio(){this.wasPlayed=!1,this.isPlaying=!1},playAudio(t){t?this.play():this.stop()}},methods:{play(){this.active&&(this.wasPlayed||(this.handleAudio(),this.wasPlayed=!0),this.isPlaying=!0,this.audioRef.play(),this.getSongData())},stop(){this.isPlaying=!1,this.audioRef.pause()},handleAudio(){const{audio:t}=this.$refs;this.audioRef=t;const e=new AudioContext,i=e.createMediaElementSource(t),n=e.createAnalyser();i.connect(n),n.connect(e.destination),n.fftSize=256;const s=n.frequencyBinCount,a=new Uint8Array(s);this.audioArray=a,this.analyser=n},getSongData(){this.isPlaying&&(this.analyser.getByteFrequencyData(this.audioArray),this.audioData=new Array(this.audioArray),requestAnimationFrame(this.getSongData))}}};function h(){try{return/Mobi|Android/i.test(navigator.userAgent)}catch(t){return!0}}var u={props:{event:{type:String,default:"move"}},data(){return{eventMap:{orientation:"deviceorientation",scroll:"scroll",move:h()?"deviceorientation":null}}},methods:{addEvents(){this.eventMap[this.event]&&window.addEventListener(this.eventMap[this.event],this.handleMovement,!0)},removeEvents(){this.eventMap[this.event]&&window.removeEventListener(this.eventMap[this.event],this.handleMovement,!0)}},watch:{event(t,e){this.eventMap[t]&&window.addEventListener(this.eventMap[t],this.handleMovement,!0),this.eventMap[e]&&window.addEventListener(this.eventMap[e],this.handleMovement,!0)}}};function m(t,e){return{x:t,y:e}}function p(t){return m(t?t.width/2:0,t?t.height/2:0)}function g(t){const{target:e,event:i}=t,n=i.clientX,s=i.clientY,a=n-e.left,o=s-e.top,r=p(e),l=a/r.x,d=o/r.y;return{...m(l,d),target:e}}function f(t){const{event:e,target:i}=t,n=e.gamma/45,s=e.beta/90;return{...m(n,s),target:i}}function v(t){const e=(t.left-window.innerWidth)/(t.width+window.innerWidth),i=(t.top-window.innerHeight)/(t.height+window.innerHeight);return{...m(e,i),target:t}}var y={name:"KinesisContainer",mixins:[l,d,c,u],provide(){const t={},e=["audioData","duration","easing","event","eventData","isMoving","movement","shape"];return e.forEach((e=>Object.defineProperty(t,e,{enumerable:!0,get:()=>this[e]}))),{context:t}},data(){return{movement:{x:0,y:0},leftOnce:!1,isMoving:!1,shape:null,eventData:{x:0,y:0}}},mounted(){this.addEvents()},beforeDestroy(){this.removeEvents()},methods:{handleMovement:r((function(t){this.isMoving||this.leftOnce||(this.isMoving=!0),this.shape=this.$el.getBoundingClientRect();const e=o(this.shape);"move"===this.event&&this.isMoving&&!h()?(this.movement=g({target:this.shape,event:t}),this.eventData=m(t.clientX,t.clientY)):("orientation"===this.event||"move"===this.event&&h())&&e?this.movement=f({target:this.shape,event:t}):"scroll"===this.event&&e&&this.shape.height&&(this.movement=v(this.shape))}),100),handleMovementStart(){this.isMoving=!0},handleMovementStop(){this.leftOnce=!0,this.isMoving=!1}}};function w(t,e,i,n,s,a,o,r,l,d){"boolean"!==typeof o&&(l=r,r=o,o=!1);const c="function"===typeof i?i.options:i;let h;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),n&&(c._scopeId=n),a?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=h):e&&(h=o?function(t){e.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),h)if(c.functional){const t=c.render;c.render=function(e,i){return h.call(i),t(e,i)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,h):[h]}return i}const x=y;var b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",style:t.style,on:{mousemove:t.handleMovement,mouseenter:t.handleMovementStart,mouseleave:t.handleMovementStop}},[t._t("default"),t._v(" "),t.audio?i("audio",{ref:"audio",attrs:{type:"audio/mpeg"},on:{ended:t.stop}},[i("source",{attrs:{src:t.audio}})]):t._e()],2)},M=[];const _=void 0,S=void 0,$=void 0,k=!1,C=w({render:b,staticRenderFns:M},_,x,S,k,$,!1,void 0,void 0,void 0);var F={props:{type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},audioIndex:{type:Number,default:50},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},cycle:{type:Number,default:0}},methods:{strengthManager(){return"depth"===this.type||"depth_inv"===this.type?Math.abs(this.strength):this.strength}}},N={methods:{transformSwitch(t,e,i,n){let s;switch(t){case"translate":s=this.translateMovement(e,i);break;case"rotate":s=this.rotateMovement(e,i);break;case"depth":s=this.depthMovement(e,i,n);break;case"depth_inv":s=this.depthMovement(-e,-i,n);break;case"scale":s=this.scaleMovement(e,i);break}return s},translateMovement(t,e){return`translate3d(${-t}px, ${-e}px, 0)`},rotateMovement(t,e){let i;return this.axis?"x"===this.axis?i=2*t:"y"===this.axis&&(i=2*e):i=t+e,`rotate3d(0,0,1,${i}deg)`},depthMovement(t,e,i){return`rotateX(${-e}deg) rotateY(${t}deg) translate3d(0,0,${2*i}px)`},scaleMovement(t,e){const{type:i}=this,n=Math.sign(this.strength)*(Math.abs(t)+Math.abs(e))/10+1;return`scale3d(${"scaleX"===i||"scale"===i?n:1},\n            ${"scaleY"===i||"scale"===i?n:1},\n            1)`}}};function q(t){const{y:e,x:i,target:n,originX:s=50,strength:a=10,event:o=null}=t;let{originY:r=50}=t;"scroll"===o&&(r=-r/2);const l=(i-s/50)*a,d=(e-r/50)*a;return{...m(l,d),target:n}}function D(t,e,i){return i&&t>i?i:e&&t<e?e:t}function E(t){const{referencePosition:e,elementPosition:i,spanningRange:n,cycles:s}=t,a=(e-i)*(2*Math.PI)/n,o=n*Math.sin(a*s);return o/(n/2)}var P={name:"KinesisElement",mixins:[F,N],inject:["context"],props:{tag:{type:String,default:"div"}},computed:{transform(){return this.transformMovement()},getContext(){return this.context},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{duration:t}=this.context;return`${t}ms`},transitionTimingFunction(){return this.context.easing},isTouch(){return h()}},methods:{transformMovement(){const{context:t}=this;if(!t.isMoving&&"move"===t.event)return{};let e,i;const n=t.event,s=this.strengthManager();if(this.cycle<=0){const{x:a,y:o}=q({...t.movement,originX:this.originX,originY:this.originY,strength:s}),r="scroll"===n;if(r||(e="y"===this.axis?0:D(a,this.minX,this.maxX),i="x"===this.axis?0:D(o,this.minY,this.maxY)),r){const n=q({x:t.movement.x,y:t.movement.y,originX:this.originX,originY:this.originY,strength:s,event:t.event}).y;e="x"===this.axis?n:0,i="y"!==this.axis&&this.axis?0:n}}else if(this.cycle>0){const{shape:a,eventData:o}=t;if(a){const t="x"===this.axis?E({referencePosition:"scroll"===n?0:o.x,elementPosition:a.left,spanningRange:"scroll"===n?window.innerWidth:a.width,cycles:this.cycle}):0,r="y"!==this.axis&&this.axis?0:E({referencePosition:"scroll"===n?0:o.y,elementPosition:a.top,spanningRange:"scroll"===n?window.innerHeight:a.height,cycles:this.cycle});e=t*s,i=r*s}}let a=this.type;a="scaleX"===a||"scaleY"===a?"scale":a;const o=this.transformSwitch(a,e,i,this.strength);return{transform:o}}}};const A=P;var I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},Y=[];const z=void 0,O=void 0,B=void 0,R=!1,X=w({render:I,staticRenderFns:Y},z,A,O,R,B,!1,void 0,void 0,void 0);var T={name:"KinesisAudio",inject:["context"],mixins:[F],props:{tag:{type:String,default:"div"},audioIndex:{type:Number,default:50}},computed:{transform(){return this.transformAudio()},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{duration:t}=this.context;return`${t}ms`},transitionTimingFunction(){return this.context.easing}},methods:{transformAudio(){const{audioData:t}=this.context;if(!this.context.audioData)return;const e=this.type,{strength:i}=this;let n,s;switch(e){case"translate":n=t?t[0][this.audioIndex]:0,s=`translate3d(${n*i}px, 0, 0)`;break;case"rotate":n=t?t[0][this.audioIndex]:0,s=`rotate3d(0,0,1,${n*i/10}deg)`;break;case"scale":n=t?t[0][this.audioIndex]/i<1?1:t[0][this.audioIndex]/(2*i):1,s=`scale(${n})`;break}return{transform:s}}}};const L=T;var W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},K=[];const j=void 0,U=void 0,H=void 0,Z=!1,V=w({render:W,staticRenderFns:K},j,L,U,Z,H,!1,void 0,void 0,void 0);var Q={name:"KinesisScroll",mixins:[l,d,F,N],data(){return{transform:{}}},mounted(){window.addEventListener("scroll",this.handleScroll,{passive:!0})},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll,{passive:!0})},computed:{transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.easing}},transitionDuration(){return`${this.duration}ms`}},methods:{getCycleMovement(t,e,i,n,s){const a=(t-s.left)*(2*Math.PI)/i,o=(e-s.top)*(2*Math.PI)/n;this.cycleMovement={x:a,y:o,width:i,height:n}},handleScroll:r((function(){if(!this.active)return;const t=this.$el.getBoundingClientRect(),e=o(t);e&&t.height&&this.transformBehavior(t)}),19,"scroll"),transformBehavior(t){let e,i;const n=(t.top-window.innerHeight)/(t.height+window.innerHeight);if(this.cycle<=0){const t=n*this.strength;e="x"===this.axis?t:0,i="y"!==this.axis&&this.axis?0:t,this.maxX&&(e=Math.min(e,this.maxX)),this.minX&&(e=Math.max(e,this.minX)),this.maxY&&(i=Math.min(i,this.maxY)),this.minY&&(i=Math.max(i,this.minY))}else if(this.cycle>0){const{x:n,y:s,width:a,height:o}=this.getCycleMovement(0,0,window.innerWidth,window.innerHeight,t),r=a*Math.sin(n*this.cycle),l=o*Math.sin(s*this.cycle);e="x"===this.axis?r/(a/2)*this.strength:0,i="y"!==this.axis&&this.axis?0:l/(o/2)*this.strength}let s=this.type;s="scaleX"===s||"scaleY"===s?"scale":s;const a=this.transformSwitch(s,e,i,this.strength);this.transform={transform:a}}}};const G=Q;var J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},tt=[];const et=void 0,it=void 0,nt=void 0,st=!1,at=w({render:J,staticRenderFns:tt},et,G,it,st,nt,!1,void 0,void 0,void 0);var ot={name:"KinesisDistance",props:{tag:{type:String,default:"div"},type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},distance:{type:Number,default:100},cycle:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:1001},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},perspective:{type:Number,default:1e3}},data(){return{pointer:{x:0,y:0},transform:{},component:"kidistance",throttle:500}},mounted(){window.addEventListener("scroll",this.handleMovement)},beforeDestroy(){window.removeEventListener("scroll",this.handleMovement)},computed:{style(){return{perspective:`${this.perspective}px`}},transformParameters(){return{position:"relative",transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.easing}},transitionDuration(){return`${this.duration}ms`}},methods:{getCoordinates(t,e){const i=this.$el.getBoundingClientRect();return{x:t+i.left,y:e+i.top}},getDistance(t,e,i,n){return Math.floor(Math.hypot(e-t,n-i))},handleMovement:r((function(t){window.addEventListener("mousemove",this.handleMovement);const{pointer:e}=this;e.x=t.clientX,e.y=t.clientY,this.transformBehavior()}),50),transformBehavior(){const t=this.$el.getBoundingClientRect(),e=this.getCoordinates(t.width/2,t.height/2),i=this.getDistance(this.pointer.x,e.x,this.pointer.y,e.y);if(i>this.distance)return this.transform={},void(this.throttle=500);this.throttle=50;const n=`scale(${i/this.distance})`;this.transform={transform:n}},scaleMovement(t,e){const{type:i}=this,n=Math.sign(this.strength)*(Math.abs(t)+Math.abs(e))/10+1;return`scale3d(${"scaleX"===i||"scale"===i?n:1},\n      ${"scaleY"===i||"scale"===i?n:1},\n      1)`}}};const rt=ot;var lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},dt=[];const ct=void 0,ht=void 0,ut=void 0,mt=!1,pt=w({render:lt,staticRenderFns:dt},ct,rt,ht,mt,ut,!1,void 0,void 0,void 0),gt={install(t){t.component(V.name,V),t.component(C.name,C),t.component(pt.name,pt),t.component(X.name,X),t.component(at.name,at)}};let ft=null;"undefined"!==typeof window?ft=window.vue:"undefined"!==typeof i.g&&(ft=i.g.vue),ft&&ft.use(gt);var vt=Object.freeze({__proto__:null,default:gt,KinesisAudio:V,KinesisContainer:C,KinesisDistance:pt,KinesisElement:X,KinesisScroll:at});const yt=function(t){if(!yt.installed){yt.installed=!0;for(const e in vt)t.use(vt[e]);t.component("kinesis-container",C),t.component("kinesis-element",X),t.component("kinesis-audio",V),t.component("kinesis-scroll",at),t.component("kinesis-distance",pt)}},wt={install:yt};let xt=null;"undefined"!==typeof window?xt=window.vue:"undefined"!==typeof i.g&&(xt=i.g.vue),xt&&xt.use(wt);var bt=i(3822),Mt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"counter"},[0!==t.countdown?e("div",[t._v(" "+t._s(this.countdown)+" ")]):e("div",{staticClass:"true"},[e("i",{staticClass:"bx bx-check"})])]),e("video",{ref:"video",attrs:{width:"100%",height:"100%",autoplay:"",playsinline:""}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"inputImage",attrs:{crossorigin:"anonymous",src:t.image,alt:"img"}})])},_t=[],St=i(166),$t={name:"App",props:{isOpenCamera:{type:Boolean,required:!0},image:{type:String,required:!0}},data(){return{modelsLoaded:!1,countdown:4}},async mounted(){await this.loadModels()},watch:{async isOpenCamera(t){t?(this.modelsLoaded||await this.loadModels(),this.setupWebcam()):this.stopWebcam()}},methods:{stopWebcam(){const t=this.$refs.video;if(t&&t.srcObject){const e=t.srcObject,i=e.getTracks();i.forEach((function(t){t.stop()})),t.srcObject=null}},async loadModels(){await Promise.all([St.qB.tinyFaceDetector.loadFromUri("/models"),St.qB.faceLandmark68Net.loadFromUri("/models"),St.qB.faceRecognitionNet.loadFromUri("/models")]),this.modelsLoaded=!0},async setupWebcam(){const t=this.$refs.video,e=await navigator.mediaDevices.getUserMedia({video:{}});t.srcObject=e,t.onplaying=()=>{this.countdown=2;let t=setInterval((()=>{0===this.countdown?(clearInterval(t),this.checkFace()):this.countdown--}),1e3)}},async checkFace(){if(!this.modelsLoaded)return;const t=this.$refs.video,e=this.$refs.inputImage,i=await St.Qr(t,new St.aK).withFaceLandmarks();if(!i)return console.log("Kamerada yuz aniqlanmadi "),void this.$emit("face-match-result",!1);if(1!==i.length)return console.log("Kamerada birdan ortiq yuz aniqlandi"),void this.$emit("face-match-result",!1);const n=i[0].detection.box,s=await St.sE(t,[n]);if(0===s.length)return console.log("Kamerada yuz aniqlanmadi"),void this.$emit("face-match-result",!1);const a=await St.Uo(s[0]),o=await St.bd(e,new St.aK({inputSize:128,scoreThreshold:.5})).withFaceLandmarks();if(!o)return console.log("Rasm yuzi aniqlanmadi"),void this.$emit("face-match-result",!1);const r=o.detection.box,l=await St.sE(e,[r]);if(0===l.length)return console.log("Rasm yuzi aniqlanmadi"),void this.$emit("face-match-result",!1);const d=await St.Uo(l[0]),c=St.WI(a,d);c<.5?(console.log("Yuzlar mos keladi"),this.$emit("face-match-result",!0)):(console.log("Yuzlar mos kelmaydi"),this.$emit("face-match-result",!1))}}},kt=$t,Ct=i(1001),Ft=(0,Ct.Z)(kt,Mt,_t,!1,null,"3781ecd5",null),Nt=Ft.exports,qt=i(7592),Dt=i(9307),Et={name:"AppLogin",components:{AppModal:qt.Z,"kinesis-container":C,"kinesis-element":X,AppButton:a.Z,FaceId:Nt},data(){return{request:{login:"",password:""},rules:{login:[{required:!0,message:"Iltimos to'ldiring",trigger:"blur"}],password:[{required:!0,message:"Iltimos to'ldiring",trigger:"blur"}]},faceForm:!1,passwordField:!0,authError:"",errorStatus:!1,loading:!1,showModal:!1,image:"",facesMatched:null}},methods:{...(0,bt.OI)(["setWindowWidth"]),...(0,bt.nv)([]),handleFaceMatchResult(t){this.facesMatched=t,!1===t&&(console.log(t),this.closeModal(),this.errorNotification("Yuzlar mos kelmaydi!")),!0===t&&(this.closeModal(),this.successNotification("Yuzlar mos keladi!"),localStorage.setItem("isLogin",!0),this.$router.push({name:"home"}))},setWidth(){this.setWindowWidth(document.documentElement.clientWidth)},confirmationSee(){this.passwordField=!this.passwordField,document.getElementById("password").type=this.passwordField?"password":"text"},async loginToSystem(t,e){t.preventDefault(),this.loading=!0,this.$refs[e].validate((t=>{if(!t)return this.loading=!1,!1;this.$http.post("auth/login",this.request).then((t=>{t.success&&(16===Number(t.data.educationForm.code)?(console.log(t.data),localStorage.setItem("isLogin",!0),localStorage.setItem("studentId",t.data.student_id_number),this.$router.push({name:"home"}),window.location.reload()):this.errorNotification("Siz tizimdan foydalana olmaysiz!"))})).catch((t=>{this.request.login="",this.request.password="",this.loading=!1,this.errorNotification(t.response.data.error)})).finally((()=>{this.loading=!1}))}))},async getUserImage(t,e){t.preventDefault(),this.loading=!0,this.$refs[e].validate((t=>{if(!t)return this.loading=!1,!1;this.$http.get(Dt.v2+"get/student/"+this.request.login+"/").then((t=>{console.log(t),localStorage.setItem("studentId",this.request.login),this.image=t.image.replace("http://","https://"),this.showModalClick()})).catch((t=>{this.errorNotification(t.response.data.message),this.request.login="",this.request.password="",this.loading=!1})).finally((()=>{this.loading=!1}))}))},closeModal(){this.showModal=!1,document.body.style.overflowY="scroll"},showModalClick(){this.showModal=!0,document.body.style.overflowY="hidden"}},computed:{...(0,bt.Se)([])},mounted(){!1===this.facesMatched&&this.showModal,this.setWidth(),window.addEventListener("resize",this.setWidth)}},Pt=Et,At=(0,Ct.Z)(Pt,n,s,!1,null,"3783a639",null),It=At.exports},5530:function(t,e,i){i.d(e,{Z:function(){return d}});var n=function(){var t=this,e=t._self._c;return e(t.tag,t._g(t._b({tag:"component",staticClass:"a-btn",class:t.className,style:t.style,attrs:{type:t.type,disabled:t.disabled}},"component",t.$attrs,!1),t.listeners),[t._t("default")],2)},s=[],a=(i(7658),{name:"AppButton",props:{tag:{type:String,default:"button"},sides:{type:[Number,String],default:10},height:{type:[Number,String],default:50},width:{type:[Number,String]},radius:{type:[Number,String],default:15},fontSize:{type:[Number,String],default:16},weight:{type:[Number,String],default:500},theme:{type:String,default:"default"},disabled:{type:Boolean},textColor:{type:String},outline:{type:Boolean},noFocus:{type:Boolean},type:{type:String,default:"button"},shadow:{type:String},flex:{type:Boolean}},computed:{className(){const t="a-btn--",e=[t+"sd-"+this.sides,t+"rd-"+this.radius,t+"fn-"+this.fontSize,t+"wg-"+this.weight,t+"hg-"+this.height,t+"th-"+this.theme];return this.flex&&e.push(t+"fl"),this.width&&e.push(t+"wd"),this.outline&&e.push(t+"line"),this.textColor&&e.push(t+"cl-"+this.textColor),this.noFocus&&e.push(t+"nf"),this.shadow&&e.push(t+"shadow-"+this.shadow),e},style(){const t={};return this.width&&(t["--wd"]=this.width+"px"),t},listeners(){return this.disabled?{}:{click:t=>this.$emit("click",t)}}}}),o=a,r=i(1001),l=(0,r.Z)(o,n,s,!1,null,null,null),d=l.exports}}]);
//# sourceMappingURL=624.1a1991da.js.map