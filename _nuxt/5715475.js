(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{311:function(e,r,t){"use strict";t.r(r);var o=t(6),n=(t(43),{auth:"guest",data:function(){return{registerForm:this.$vform({name:"",email:"",password:""})}},methods:{registerUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.registerForm.post("/auth/register");case 3:return data=r.sent,r.next=6,e.$auth.setUserToken(data.access_token);case 6:e.$toast.success({title:"Success!",message:"Registration Successful"}),e.registerForm.reset(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}}),m=t(37),component=Object(m.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"row justify-content-center mt-5"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[e._v("\n                Create an account\n            ")]),e._v(" "),t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(r){return r.preventDefault(),e.registerUser.apply(null,arguments)}}},[t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("Your name ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.name,expression:"registerForm.name"}],staticClass:"form-control",class:{"is-invalid":e.registerForm.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter email"},domProps:{value:e.registerForm.name},on:{input:function(r){r.target.composing||e.$set(e.registerForm,"name",r.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.registerForm,field:"name"}})],1),e._v(" "),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("Your email ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.email,expression:"registerForm.email"}],staticClass:"form-control",class:{"is-invalid":e.registerForm.errors.has("email")},attrs:{type:"text",name:"email",placeholder:"Enter email"},domProps:{value:e.registerForm.email},on:{input:function(r){r.target.composing||e.$set(e.registerForm,"email",r.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.registerForm,field:"email"}})],1),e._v(" "),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("Your Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.password,expression:"registerForm.password"}],staticClass:"form-control",class:{"is-invalid":e.registerForm.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"Enter password"},domProps:{value:e.registerForm.password},on:{input:function(r){r.target.composing||e.$set(e.registerForm,"password",r.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.registerForm,field:"password"}})],1),e._v(" "),t("div",{staticClass:"form-group d-flex justify-content-between align-items-center"},[t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Create an account")]),e._v(" "),t("nuxt-link",{attrs:{to:{name:"login"}}},[e._v("Account Login")])],1)])])])])])}),[],!1,null,null,null);r.default=component.exports}}]);