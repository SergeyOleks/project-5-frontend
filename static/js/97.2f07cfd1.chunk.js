"use strict";(self.webpackChunkproject_5_frontend=self.webpackChunkproject_5_frontend||[]).push([[97],{9348:function(e,s,a){a(2791);s.Z=a.p+"static/media/error.07979e0ad4a4bfabe779c92185218e6f.svg"},3728:function(e,s,a){a(2791);s.Z=a.p+"static/media/right.8838aed33abf8d6bd5adbd62df0816f2.svg"},5206:function(e,s,a){a(2791);s.Z=a.p+"static/media/success.3d05382fa1f2cc9cbd1ac7bb31359c2f.svg"},8757:function(e,s,a){a.d(s,{Z:function(){return t}});var r="AuthNavigate_authlink__mXBCP",o=a(1087),i=a(184),t=function(e){var s=e.authLink,a=e.linkText;return(0,i.jsx)(o.rU,{className:r,to:s,children:a})}},8062:function(e,s,a){a.r(s),a.d(s,{default:function(){return h}});var r=a(9434),o=a(5705),i=a(8007),t={error:"RegisterForm_error__yDHjz",success:"RegisterForm_success__4UeKG",form_input:"RegisterForm_form_input__XEQpa",successIcon_ss:"RegisterForm_successIcon_ss__sOy4w",errorIcon_er:"RegisterForm_errorIcon_er__zufws",successIcon:"RegisterForm_successIcon__J33Wc",errorIcon:"RegisterForm_errorIcon__HFULE",successIconn:"RegisterForm_successIconn__rRZPL",errorIconn:"RegisterForm_errorIconn__KUGN1",div_container:"RegisterForm_div_container__6vSOT",div_container_form:"RegisterForm_div_container_form__9qAq1",div_container_formik:"RegisterForm_div_container_formik__p7WO9",logo_goose:"RegisterForm_logo_goose__GrKJ0",title:"RegisterForm_title__EvDyW",form:"RegisterForm_form__Tv43W",form_div:"RegisterForm_form_div__1EFRs",form_label:"RegisterForm_form_label__5rfdM",form_label_tw:"RegisterForm_form_label_tw__Phhkr",form_input_div:"RegisterForm_form_input_div__2B6QZ",button:"RegisterForm_button__B3hFq",google:"RegisterForm_google__oyo92",register:"RegisterForm_register__qF0Cb"},n=a(6476),c=a(4396),l=a(1421),m=a(3728),_=a(9348),d=a(5206),u=a(184),f=function(){var e=(0,r.I0)(),s=(0,r.v9)(c.xU),a=i.Ry().shape({name:i.Z_().min(3).max(16).required("Name is required"),email:i.Z_().email("Email is not valid").required("Email is required"),password:i.Z_().min(6,"Your password can not be so short").max(16,"Your password can not be so long").required("Password is required")});function f(e){var s;return e?/^[a-z].+([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z]+[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e)||(s="Email is not valid"):s="Email is required",s}return(0,u.jsx)(u.Fragment,{children:s?(0,u.jsx)(l.Z,{}):(0,u.jsx)(o.J9,{initialValues:{name:"",email:"",password:""},onSubmit:function(s,a){var r=s.name,o=s.email,i=s.password,t=a.resetForm;e((0,n.z2)({name:r,email:o,password:i})),t()},validationSchema:a,children:function(e){var s=e.errors,a=e.touched;return(0,u.jsx)(o.l0,{className:t.form,action:"#",autoComplete:"off",children:(0,u.jsxs)("div",{className:t.form_div,children:[(0,u.jsxs)("label",{htmlFor:"email",className:t.form_label,children:[(0,u.jsx)("span",{style:{alignItems:"flex-start"},className:"".concat(t.form_input_email," ").concat(a.name&&s.name?t.error:""," ").concat(a.name&&!s.name?t.success:""),"aria-invalid":a.name&&s.name?"true":"false","data-valid":a.name&&!s.name?"true":"false",children:"Name"}),(0,u.jsxs)("div",{className:t.form_input_div,children:[(0,u.jsx)(o.gN,{className:"".concat(t.form_input," \n                    ").concat(a.name&&s.name?t.error:""," ").concat(a.name&&!s.name?t.success:"","\n                    "),name:"name",type:"name",placeholder:"Enter your name",autoComplete:"name","aria-invalid":a.name&&s.name?"true":"false","data-valid":a.name&&!s.name?"true":"false"}),a.name&&s.name&&(0,u.jsx)("img",{className:t.errorIcon_er,style:{width:"24px"},src:_.Z,alt:"goose"}),a.name&&!s.name&&(0,u.jsx)("img",{className:t.successIcon_ss,style:{width:"24px"},src:d.Z,alt:"goose"})]}),a.name&&!s.name&&(0,u.jsx)("p",{className:t.success,children:"Name is valid"}),(0,u.jsx)(o.Bc,{name:"name",render:function(e){return(0,u.jsx)("p",{className:t.error,children:e})}})]}),(0,u.jsxs)("label",{htmlFor:"email",className:t.form_label,children:[(0,u.jsx)("span",{className:"".concat(t.form_input_email," ").concat(a.email&&s.email?t.error:""," ").concat(a.email&&!s.email?t.success:""),"aria-invalid":a.email&&s.email?"true":"false","data-valid":a.email&&!s.email?"true":"false",children:"Email"}),(0,u.jsxs)("div",{className:t.form_input_div,children:[(0,u.jsx)(o.gN,{className:"".concat(t.form_input," ").concat(a.email&&s.email?t.error:""," ").concat(a.email&&!s.email?t.success:""),name:"email",type:"email",placeholder:"Enter email",autoComplete:"email","aria-invalid":a.email&&s.email?"true":"false","data-valid":a.email&&!s.email?"true":"false",validate:f}),a.email&&s.email&&(0,u.jsx)("img",{className:t.errorIcon,style:{width:"24px"},src:_.Z,alt:"goose"}),a.email&&!s.email&&(0,u.jsx)("img",{className:t.successIcon,style:{width:"24px"},src:d.Z,alt:"goose"})]}),a.email&&!s.email&&(0,u.jsx)("p",{className:t.success,children:"Email is valid"}),(0,u.jsx)(o.Bc,{name:"email",render:function(e){return(0,u.jsx)("p",{className:t.error,children:e})}})]}),(0,u.jsxs)("label",{htmlFor:"password",className:t.form_label_tw,children:[(0,u.jsx)("span",{className:"".concat(t.form_input_email," ").concat(a.password&&s.password?t.error:""," ").concat(a.password&&!s.password?t.success:""),"aria-invalid":a.password&&s.password?"true":"false","data-valid":a.password&&!s.password?"true":"false",children:"Password"}),(0,u.jsxs)("div",{className:t.form_input_div,children:[(0,u.jsx)(o.gN,{className:"".concat(t.form_input," ").concat(a.password&&s.password?t.error:""," ").concat(a.password&&!s.password?t.success:""),name:"password",type:"password",placeholder:"Enter password",autoComplete:"password","aria-invalid":a.password&&s.password?"true":"false","data-valid":a.password&&!s.password?"true":"false"}),a.password&&s.password&&(0,u.jsx)("img",{className:t.errorIconn,style:{width:"24px"},src:_.Z,alt:"goose"}),a.password&&!s.password&&(0,u.jsx)("img",{className:t.successIconn,style:{width:"24px"},src:d.Z,alt:"goose"})]}),a.password&&!s.password&&(0,u.jsx)("p",{className:t.success,children:"Password is valid"}),(0,u.jsx)(o.Bc,{name:"password",render:function(e){return(0,u.jsx)("p",{className:t.error,children:e})}})]}),(0,u.jsxs)("button",{className:t.button,type:"submit",children:["Sign Up",(0,u.jsx)("img",{style:{width:"20px"},src:m.Z,alt:"goose"})]})]})})}})})},g=a(8757),p=a.p+"static/media/elements_desk@1x.02f1aeb546ef16bdd9f3.png",v=a.p+"static/media/elements_desk@2x.350cea8c3f022c3e57fd.png",x={form_section:"Register_form_section__DcRZM",div_container:"Register_div_container__q8qGD",div_container_formik:"Register_div_container_formik__4G3Hj",logo_goose:"Register_logo_goose__wdYqm",title:"Register_title__2xy0+",form:"Register_form__hgNbU",form_div:"Register_form_div__OIA+m",form_label:"Register_form_label__u1AEw",form_label_tw:"Register_form_label_tw__UbGpp",form_input_div:"Register_form_input_div__s-a16",form_input:"Register_form_input__InwUx",button:"Register_button__EnJy4",google:"Register_google__z2FMH",register:"Register_register__adsNa"},h=function(){return(0,u.jsx)("section",{className:x.form_section,children:(0,u.jsxs)("div",{className:x.div_container,children:[(0,u.jsxs)("picture",{className:x.logo_goose,children:[(0,u.jsx)("source",{className:x.source,srcSet:"".concat(p," 1x, ").concat(v," 2x")}),(0,u.jsx)("img",{srcSet:p,alt:"goose"})]}),(0,u.jsxs)("div",{className:x.div_container_formik,children:[(0,u.jsx)("h2",{className:x.title,children:"Sign Up"}),(0,u.jsx)(f,{}),(0,u.jsx)("a",{className:x.google,href:"https://goose-track-backend-54zr.onrender.com/auth/google",children:"Click me to authorize with Google!"})]}),(0,u.jsx)("div",{className:x.register,children:(0,u.jsx)(g.Z,{authLink:"/login",linkText:"Log in"})})]})})}}}]);
//# sourceMappingURL=97.2f07cfd1.chunk.js.map