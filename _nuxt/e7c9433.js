(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{302:function(e,r,t){"use strict";t.r(r);var o=t(6),n=(t(29),t(43),{data:function(){return{userForm:this.$vform({name:"",email:"",password:""})}},methods:{updateProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.userForm.post("/auth/profile");case 3:return t=r.sent,t.data,e.userForm.password="",r.next=8,e.$auth.fetchUser();case 8:e.$toast.success({title:"Success!",message:"Profile updated successfully"}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},getUser:function(){var e=this.$store.state.auth.user;this.userForm.name=e.name,this.userForm.email=e.email}},mounted:function(){this.getUser()}}),m=t(37),component=Object(m.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[e._v("\n        My Profile\n    ")]),e._v(" "),t("div",{staticClass:"card-body"},[t("form",{attrs:{action:""},on:{submit:function(r){return r.preventDefault(),e.updateProfile.apply(null,arguments)},keydown:function(r){return e.userForm.onKeydown(r)}}},[t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("Your name ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.name,expression:"userForm.name"}],staticClass:"form-control",class:{"is-invalid":e.userForm.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter name"},domProps:{value:e.userForm.name},on:{input:function(r){r.target.composing||e.$set(e.userForm,"name",r.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.userForm,field:"name"}})],1),e._v(" "),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("Your email ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.email,expression:"userForm.email"}],staticClass:"form-control",class:{"is-invalid":e.userForm.errors.has("email")},attrs:{type:"text",name:"email",placeholder:"Enter email"},domProps:{value:e.userForm.email},on:{input:function(r){r.target.composing||e.$set(e.userForm,"email",r.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.userForm,field:"email"}})],1),e._v(" "),t("div",{staticClass:"form-group mb-3"},[t("label",{attrs:{for:""}},[e._v("Your Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.password,expression:"userForm.password"}],staticClass:"form-control",class:{"is-invalid":e.userForm.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"Enter password"},domProps:{value:e.userForm.password},on:{input:function(r){r.target.composing||e.$set(e.userForm,"password",r.target.value)}}}),e._v(" "),t("has-error",{attrs:{form:e.userForm,field:"password"}})],1),e._v(" "),t("button",{staticClass:"btn btn-success",attrs:{type:"submit",disabled:e.userForm.busy}},[e._v("\n                Update profile\n            ")])])])])}),[],!1,null,null,null);r.default=component.exports}}]);