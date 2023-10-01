"use strict";(self.webpackChunkproject_5_frontend=self.webpackChunkproject_5_frontend||[]).push([[82],{9348:function(e,a,s){s(2791);a.Z=s.p+"static/media/error.07979e0ad4a4bfabe779c92185218e6f.svg"},3728:function(e,a,s){s(2791);a.Z=s.p+"static/media/right.8838aed33abf8d6bd5adbd62df0816f2.svg"},5206:function(e,a,s){s(2791);a.Z=s.p+"static/media/success.3d05382fa1f2cc9cbd1ac7bb31359c2f.svg"},1005:function(e,a,s){var r=s(1087),i=s(184);a.Z=function(e){var a=e.authLink,s=e.linkText;return console.log(a,s),(0,i.jsx)(r.rU,{to:a,children:s})}},7799:function(e,a,s){s.r(a),s.d(a,{default:function(){return v}});var r=s(9434),i=s(5705),o=s(6727),n={error:"RegisterForm_error__yDHjz",success:"RegisterForm_success__4UeKG",form_input:"RegisterForm_form_input__XEQpa",successIcon:"RegisterForm_successIcon__J33Wc",errorIcon:"RegisterForm_errorIcon__HFULE",successIconn:"RegisterForm_successIconn__rRZPL",errorIconn:"RegisterForm_errorIconn__KUGN1",div_container:"RegisterForm_div_container__6vSOT",div_container_flex:"RegisterForm_div_container_flex__V7gk6",div_container_form:"RegisterForm_div_container_form__9qAq1",div_container_formik:"RegisterForm_div_container_formik__p7WO9",logo_goose:"RegisterForm_logo_goose__GrKJ0",title:"RegisterForm_title__EvDyW",form:"RegisterForm_form__Tv43W",form_div:"RegisterForm_form_div__1EFRs",form_label:"RegisterForm_form_label__5rfdM",form_label_tw:"RegisterForm_form_label_tw__Phhkr",form_input_div:"RegisterForm_form_input_div__2B6QZ",button:"RegisterForm_button__B3hFq",google:"RegisterForm_google__oyo92",register:"RegisterForm_register__qF0Cb"},c=s(6476),t=s(4396),l=s.p+"static/media/elements_desk@1x.02f1aeb546ef16bdd9f3.png",m=s.p+"static/media/elements_desk@2x.350cea8c3f022c3e57fd.png",d=s(3728),_=s(9348),u=s(5206),f=s(1005),p=s(184),g=function(){var e=(0,r.I0)(),a=(0,r.v9)(t.JS),s=o.Ry().shape({name:o.Z_().max(16).required(),email:o.Z_().email().required(),password:o.Z_().min(6).max(16).required()});function g(e){var a;return e?/^[a-z].+([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z]+[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e)||(a="Email is not valid"):a="Email is required",a}return(0,p.jsx)("div",{className:n.div_container,children:(0,p.jsxs)("div",{className:n.div_container_flex,children:[(0,p.jsxs)("picture",{className:n.logo_goose,children:[(0,p.jsx)("source",{className:n.source,srcSet:"".concat(l," 1x, ").concat(m," 2x")}),(0,p.jsx)("img",{srcSet:l,alt:"goose"})]}),(0,p.jsxs)("div",{className:n.div_container_form,children:[(0,p.jsxs)("div",{className:n.div_container_formik,children:[(0,p.jsx)("h2",{className:n.title,children:"Sign Up"}),(0,p.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},onSubmit:function(a,s){var r=a.name,i=a.email,o=a.password,n=s.resetForm;e((0,c.z2)({name:r,email:i,password:o})),n()},validationSchema:s,children:function(e){var s=e.errors,r=e.touched;return(0,p.jsx)(i.l0,{className:n.form,action:"#",autoComplete:"off",children:(0,p.jsxs)("div",{className:n.form_div,children:[(0,p.jsxs)("label",{htmlFor:"email",className:n.form_label,children:[(0,p.jsx)("span",{className:"".concat(n.form_input_email," ").concat(r.name&&s.name?n.error:""," ").concat(r.name&&!s.name?n.success:""),"aria-invalid":r.name&&s.name?"true":"false","data-valid":r.name&&!s.name?"true":"false",children:"Name"}),(0,p.jsxs)("div",{className:n.form_input_div,children:[(0,p.jsx)(i.gN,{className:"".concat(n.form_input," ").concat(r.name&&s.name?n.error:""," ").concat(r.name&&!s.name?n.success:""),name:"name",type:"name",placeholder:"Enter your name",autoComplete:"name","aria-invalid":r.name&&s.name?"true":"false","data-valid":r.name&&!s.name?"true":"false",validate:g}),r.name&&s.name&&(0,p.jsx)("img",{className:n.errorIcon,style:{width:"24px"},src:_.Z,alt:"goose"}),r.name&&!s.name&&(0,p.jsx)("img",{className:n.successIcon,style:{width:"24px"},src:u.Z,alt:"goose"})]}),r.name&&!s.name&&(0,p.jsx)("div",{className:n.success,children:"Name is valid"}),(0,p.jsx)(i.Bc,{name:"name",render:function(e){return(0,p.jsx)("div",{className:n.error,children:e})}})]}),(0,p.jsxs)("label",{htmlFor:"email",className:n.form_label,children:[(0,p.jsx)("span",{className:"".concat(n.form_input_email," ").concat(r.email&&s.email?n.error:""," ").concat(r.email&&!s.email?n.success:""),"aria-invalid":r.email&&s.email?"true":"false","data-valid":r.email&&!s.email?"true":"false",children:"Email"}),(0,p.jsxs)("div",{className:n.form_input_div,children:[(0,p.jsx)(i.gN,{className:"".concat(n.form_input," ").concat(r.email&&s.email?n.error:""," ").concat(r.email&&!s.email?n.success:""),name:"email",type:"email",placeholder:"Enter email",autoComplete:"email","aria-invalid":r.email&&s.email?"true":"false","data-valid":r.email&&!s.email?"true":"false",validate:g}),r.email&&s.email&&(0,p.jsx)("img",{className:n.errorIcon,style:{width:"24px"},src:_.Z,alt:"goose"}),r.email&&!s.email&&(0,p.jsx)("img",{className:n.successIcon,style:{width:"24px"},src:u.Z,alt:"goose"})]}),r.email&&!s.email&&(0,p.jsx)("div",{className:n.success,children:"Email is valid"}),(0,p.jsx)(i.Bc,{name:"email",render:function(e){return(0,p.jsx)("div",{className:n.error,children:e})}})]}),(0,p.jsxs)("label",{htmlFor:"password",className:n.form_label_tw,children:[(0,p.jsx)("span",{className:"".concat(n.form_input_email," ").concat(r.password&&s.password?n.error:""," ").concat(r.password&&!s.password?n.success:""),"aria-invalid":r.password&&s.password?"true":"false","data-valid":r.password&&!s.password?"true":"false",children:"Password"}),(0,p.jsxs)("div",{className:n.form_input_div,children:[(0,p.jsx)(i.gN,{className:"".concat(n.form_input," ").concat(r.password&&s.password?n.error:""," ").concat(r.password&&!s.password?n.success:""),name:"password",type:"password",placeholder:"Enter password",autoComplete:"password","aria-invalid":r.password&&s.password?"true":"false","data-valid":r.password&&!s.password?"true":"false"}),r.password&&s.password&&(0,p.jsx)("img",{className:n.errorIconn,style:{width:"24px"},src:_.Z,alt:"goose"}),r.password&&!s.password&&(0,p.jsx)("img",{className:n.successIconn,style:{width:"24px"},src:u.Z,alt:"goose"})]}),r.password&&!s.password&&(0,p.jsx)("div",{className:n.success,children:"Password is valid"}),(0,p.jsx)(i.Bc,{name:"password",render:function(e){return(0,p.jsx)("div",{className:n.error,children:e})}})]}),a&&(0,p.jsx)("p",{children:a}),(0,p.jsxs)("button",{className:n.button,type:"submit",children:["Sign Up",(0,p.jsx)("img",{style:{width:"20px"},src:d.Z,alt:"goose"})]})]})})}}),(0,p.jsx)("a",{className:n.google,href:"https://goose-track-backend-54zr.onrender.com/auth/google",children:"Click me to authorize with Google!"})]}),(0,p.jsx)("div",{className:n.register,children:(0,p.jsx)(f.Z,{authLink:"/login",linkText:"Log In"})})]})]})})},v=function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{}),(0,p.jsx)(f.Z,{authLink:"/register",linkText:"Sign up"})]})}},4396:function(e,a,s){s.d(a,{JS:function(){return r}});var r=function(e){return e.auth.error}}}]);
//# sourceMappingURL=82.2ecd68fe.chunk.js.map