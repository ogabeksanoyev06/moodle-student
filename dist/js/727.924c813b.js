"use strict";(self["webpackChunkmoodle_student"]=self["webpackChunkmoodle_student"]||[]).push([[727],{4727:function(t,s,a){a.r(s),a.d(s,{default:function(){return k}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"task-list"},[s("Modal",{attrs:{"modal-size":"fit-content",modal:t.isOpenModal},on:{"modal-closed":t.closeModalS}},[s("div",{staticClass:"main-menu-item"},[s("el-form",{ref:"task",staticClass:"demo-ruleForm",attrs:{"label-position":"top",model:t.task,rules:t.rules,"label-width":"100%"}},[s("el-form-item",{attrs:{prop:"file"}},[s("el-upload",{ref:"video",staticClass:"upload-demo custom-width",attrs:{size:"large",drag:"",action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.handleFileChange,"auto-upload":!1,limit:1}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v(" Drop file here or "),s("em",[t._v("click to upload")])])])],1),s("el-form-item",[s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"Xabar yozish"},model:{value:t.task.comment,callback:function(s){t.$set(t.task,"comment",s)},expression:"task.comment"}})],1)],1),s("button",{staticClass:"w-100 btn btn-primary waves-effect waves-light",on:{click:function(s){return t.createTask("task",s)}}},[t._v(" Saqlash ")])],1)]),s("Modal",{attrs:{modal:t.modal,modalSize:"max-width:900px"},on:{"modal-closed":t.closeModalS}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover mb-0"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),s("th",{attrs:{scope:"col"}},[t._v("Fayl")]),s("th",{attrs:{scope:"col"}},[t._v("Izoh")]),s("th",{staticStyle:{"white-space":"nowrap"},attrs:{scope:"col"}},[t._v(" Fayl yuklangan vaqt ")])])]),s("transition",{attrs:{name:"fade",duration:2e3}},[t.student_task_fayls.length>0?s("tbody",{staticClass:"table-bordered"},t._l(t.student_task_fayls,(function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(e+1))]),s("td",[s("button",{on:{click:function(s){return t.downloadFile(a.student_file)}}},[s("svg",{staticClass:"lesson-download-icon",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#clip0_529_2734)"}},[s("path",{attrs:{d:"M19.5 18V21H4.5V18H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V18H19.5Z",fill:"#000"}}),s("path",{attrs:{d:"M19.5 10.5L18.4425 9.4425L12.75 15.1275V1.5H11.25V15.1275L5.5575 9.4425L4.5 10.5L12 18L19.5 10.5Z",fill:"#000"}})]),s("defs",[s("clipPath",{attrs:{id:"clip0_529_2734"}},[s("rect",{attrs:{width:"24",height:"24",fill:"white"}})])])])])]),s("td",[a.comment?s("span",[t._v(t._s(a.comment))]):s("span",[t._v("Izoh mavjud emas")])]),s("td",[t._v(" "+t._s(t.$moment(a.file_date_sending).format("YYYY-MM-DD HH:ss"))+" ")])])})),0):s("tbody",{staticClass:"table-bordered"},[s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" Yuklangan fayllar mavjud emas! ")])])])])],1)])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover mb-0"},[t._m(0),s("transition",{attrs:{name:"fade",duration:2e3}},[s("tbody",{staticClass:"table-bordered"},t._l(t.tasks,(function(a,e){return s("tr",{key:e},[s("td",[t._v(t._s(e+1))]),s("td",[t._v(t._s(a.tasks_id.name))]),s("td",[t._v(t._s(a.tasks_id.comment))]),s("td",[t._v(" "+t._s(t.$moment(a.tasks_id.start_date).format("YYYY-MM-DD HH:mm:ss"))+" ")]),s("td",[t._v(" "+t._s(t.$moment(a.tasks_id.end_date).format("YYYY-MM-DD HH:mm:ss"))+" ")]),s("td",[s("button",{on:{click:function(s){return t.down(a)}}},[s("svg",{staticClass:"lesson-download-icon",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#clip0_529_2734)"}},[s("path",{attrs:{d:"M19.5 18V21H4.5V18H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V18H19.5Z",fill:"#000"}}),s("path",{attrs:{d:"M19.5 10.5L18.4425 9.4425L12.75 15.1275V1.5H11.25V15.1275L5.5575 9.4425L4.5 10.5L12 18L19.5 10.5Z",fill:"#000"}})]),s("defs",[s("clipPath",{attrs:{id:"clip0_529_2734"}},[s("rect",{attrs:{width:"24",height:"24",fill:"white"}})])])])])]),s("td",[s("button",{directives:[{name:"show",rawName:"v-show",value:!a.file_status,expression:"!item.file_status"}],staticClass:"btn btn-primary waves-effect waves-light",on:{click:function(s){return t.openModal(a)}}},[t._v(" Fayl yuklash ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:a.file_status,expression:"item.file_status"}]},[t._v("Fayl yuklangan")])]),s("td",[s("button",{staticClass:"btn btn-primary waves-effect waves-light",on:{click:function(s){return t.openModalFayl(a.id)}}},[t._v(" Ko'rish ")])]),s("td",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(a.mark)+" ")])])})),0)])],1)])])])])],1)},o=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),s("th",{attrs:{scope:"col"}},[t._v("Sarlavha")]),s("th",{attrs:{scope:"col"}},[t._v("Izoh")]),s("th",{attrs:{scope:"col"}},[t._v("Boshlanish")]),s("th",{attrs:{scope:"col"}},[t._v("Tugash")]),s("th",{attrs:{scope:"col"}},[t._v("Fayllar")]),s("th",{attrs:{scope:"col"}},[t._v("Fayllar yuklash")]),s("th",{attrs:{scope:"col"}},[t._v("Yuklangan fayllar")]),s("th",{attrs:{scope:"col"}},[t._v("Ball")])])])}],l=(a(6229),a(7330),a(2062),a(3822)),i=function(){var t=this,s=t._self._c;return s("div",{class:["modal","fade",{show:t.modal}],staticStyle:{display:"none"},attrs:{id:t.modalId,tabindex:"-1",role:"dialog","aria-labelledby":t.modalId,"aria-modal":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",style:t.modalSize,attrs:{role:"document"}},[s("div",{staticClass:"modal-content p-0",style:t.styleProp},[s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body p-0"},[t._t("default")],2)])])])},d=[],n={name:"ModalApp",props:{modal:Boolean,modalSize:{type:String,default:"modal-lg"},styleProp:{type:String,default:""}},data(){return{modalId:`modal-component-${Math.random().toString(36).substring(7)}`}},watch:{modal(){this.modal&&$(`#${this.modalId}`).modal("show")}},mounted(){$(`#${this.modalId}`).on("hidden.bs.modal",(()=>{this.$emit("modal-closed")}))},methods:{closeModal(){$(`#${this.modalId}`).modal("hide")}}},r=n,c=a(1001),h=(0,c.Z)(r,i,d,!1,null,"335f5d95",null),m=h.exports,p=a(6265),u=a.n(p),_={name:"tasks-list",components:{Modal:m},data(){return{fileList:[],id:"",tasks:[],isOpenModal:!1,modal:!1,student_task_fayls:[],task:{file:null,comment:"",student_id:"",connect_id:"",student_task_fayls:""},rules:{file:[{required:!0,message:"Iltimos to'ldiring!",trigger:"blur"}]}}},methods:{...(0,l.nv)(["getUser"]),submitUpload(){this.$refs.upload.submit()},handleFileChange(t){this.task.file=t.raw},openModal(t){this.task.connect_id=t,this.isOpenModal=!0},openModalFayl(t){this.modal=!0,this.tasks.forEach((s=>{s.id===t&&(this.student_task_fayls=s.student_task_fayls)}))},closeModalS(){this.isOpenModal=!1,this.modal=!1},handleSuccess(t,s,a){console.log(t,s,a)},createTask(t,s){s.preventDefault();const a=new FormData;a.append("student_id",this.task.student_id),a.append("student_file",this.task.file),a.append("tasks_id",this.task.connect_id.tasks_id.id),a.append("student_connect_task_id",this.task.connect_id.id),a.append("comment",this.task.comment),this.$refs[t].validate((s=>{if(!s)return console.log("error submit!!"),!1;this.$http.post("student/task/",a,{headers:{"Content-type":"multipart/form-data"}}).then((s=>{console.log(s),this.$refs[t].resetFields(),this.notificationMessage("Fayl muofaqiyatli qo'shildi!","success"),window.location.reload()})).catch((t=>{console.log(t),this.notificationMessage(t.response.data.message,"error")}))}))},handleRemove(t,s){console.log(t,s)},downloadFile(t){u().get(`https://api.fastlms.uz${t}`,{responseType:"blob"}).then((s=>{const a=new Blob([s.data]),e=document.createElement("a");e.href=window.URL.createObjectURL(a),e.download=t,e.click()})).catch((t=>{console.error(t)}))},down(t){t.tasks_id.task_files?.map((t=>{console.log(t),this.download(t.task_file)}))},download(t){u().get(`https://api.fastlms.uz${t}`,{responseType:"blob"}).then((s=>{this.handleDownloadResponse(s,t)})).catch((t=>{console.error(t)}))},handleDownloadResponse(t,s){const a=new Blob([t.data],{type:t.headers["content-type"]}),e=document.createElement("a");e.href=window.URL.createObjectURL(a);const o=s.split("/").pop();e.download=o,document.body.appendChild(e),e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(e.href)},getTasks(t){console.log("aa"),this.$http.get(`student/topic/tasks/?topic_id=${this.id}&student_id=${t}`).then((t=>{console.log(t),this.tasks=t.results}))},getUser(){this.$http.get("get/student/"+localStorage.getItem("studentId")+"/").then((t=>{this.task.student_id=t.id,this.getTasks(t.id)}))}},created(){this.id=this.$route.params.id},mounted(){this.getUser()}},f=_,v=(0,c.Z)(f,e,o,!1,null,"1441883d",null),k=v.exports}}]);
//# sourceMappingURL=727.924c813b.js.map