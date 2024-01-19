"use strict";(self["webpackChunkmoodle_student"]=self["webpackChunkmoodle_student"]||[]).push([[17],{17:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"exam-list"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover mb-0"},[t._m(0),e("transition",{attrs:{name:"fade",duration:2e3}},[e("tbody",{staticClass:"table-bordered"},[t._l(t.examList,(function(s,a){return e("tr",{key:a},[e("td",[t._v(" "+t._s(a+1)+". "+t._s(s.exam.name)+". "+t._s(s.exam.curriculum.name)+" ")]),e("td",[t._v(" "+t._s(s.exam.max_score)+" ")]),e("td",[t._v(" "+t._s(t.$moment(s.exam.begin_time).format("YYYY-MM-DD HH:ss"))+" "),e("br"),t._v(" "+t._s(t.$moment(s.exam.end_time).format("YYYY-MM-DD HH:ss"))+" ")]),e("td",[e("button",{staticClass:"btn btn-success w-100",on:{click:function(e){return t.goResult(s.exam.id,s.id)}}},[t._v(" Natija ")])])])})),""!==t.errorMessage?e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[t._v(" "+t._s(t.errorMessage)+" ")])]):t._e()],2)])],1)])])])])])},i=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Nomi")]),e("th",{attrs:{scope:"col"}},[t._v("Maks ball")]),e("th",{attrs:{scope:"col"}},[t._v("Test davri")]),e("th")])])}],n=(s(7658),s(3822)),r={name:"exam-list",data(){return{examList:[],errorMessage:"",student_id:null,ip_address:""}},methods:{...(0,n.nv)(["getUser"]),getExamList(){this.loading=!0,this.$http.get(`exam-list-finish/${this.student_id}`).then((t=>{this.examList=t,console.log(t)})).catch((t=>{this.errorMessage=t.response.data.message})).finally((()=>{this.loading=!1}))},goToTest(t){this.$http.get(`check-attempts/${this.student_id}/for/${t}`).then((e=>{e.status&&this.$router.push({name:"test",params:{exam_id:t}})})).catch((()=>{}))},goToTestCheck(t){this.$http.post("check-continue/",{exam:t,student:this.student_id,ip_address:this.ip_address}).then((()=>{this.$router.push({name:"test",params:{exam_id:t}})})).catch((t=>{this.notificationMessage(t.response.data.message,"error")}))},async fetchLocalIPAddress(){try{const t=await this.getIPAddressViaWebRTC();if(t)return t;const e=await this.getIPAddressViaService();return e||null}catch(t){return console.error("Error fetching local IP address:",t),null}},async getIPAddressViaWebRTC(){return new Promise((t=>{window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;const e=new RTCPeerConnection;e.createDataChannel(""),e.createOffer().then((t=>{e.setLocalDescription(t)})),e.onicecandidate=s=>{if(s&&s.candidate&&s.candidate.candidate){const e=/\d+\.\d+\.\d+\.\d+/,a=e.exec(s.candidate.candidate);if(a){const e=a[0];t(e)}}e.onicecandidate=null,e.close()}}))},async getIPAddressViaService(){try{const t=await fetch("https://api.ipify.org?format=json"),e=await t.json();return e.ip}catch(t){return console.error("Error fetching IP address via service:",t),null}},goResult(t){this.$router.push({name:"test-result-one",params:{student_id:this.user.id,exam_id:t}})}},computed:{...(0,n.Se)(["user"])},async mounted(){this.fetchLocalIPAddress().then((t=>{this.ip_address=t})),await this.getUser(),this.student_id=this.user.id,localStorage.setItem("student_id",this.student_id),await this.getExamList()},created(){}},o=r,d=s(1001),c=(0,d.Z)(o,a,i,!1,null,"2a046229",null),l=c.exports}}]);
//# sourceMappingURL=17.e98279d8.js.map