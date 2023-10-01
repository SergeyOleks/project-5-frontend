"use strict";(self.webpackChunkproject_5_frontend=self.webpackChunkproject_5_frontend||[]).push([[268],{1005:function(s,e,a){var r=a(1087),o=a(184);e.Z=function(s){var e=s.authLink,a=s.linkText;return console.log(e,a),(0,o.jsx)(r.rU,{to:e,children:a})}},3094:function(s,e,a){a.r(e),a.d(e,{default:function(){return v}});var r=a(9434),o=a(5705),i=a(6727),n={error:"LoginForm_error__012y+",success:"LoginForm_success__46ZCk",form_input:"LoginForm_form_input__KK81z",successIcon:"LoginForm_successIcon__VsHRv",errorIcon:"LoginForm_errorIcon__moTdC",successIconn:"LoginForm_successIconn__tKWMT",errorIconn:"LoginForm_errorIconn__yc47F",div_container:"LoginForm_div_container__72wHe",div_container_flex:"LoginForm_div_container_flex__bpoom",div_container_form:"LoginForm_div_container_form__TLaZj",div_container_formik:"LoginForm_div_container_formik__cxqk4",logo_goose:"LoginForm_logo_goose__jE5xU",title:"LoginForm_title__5FilZ",form:"LoginForm_form__gPEx5",form_div:"LoginForm_form_div__6a-nT",form_label:"LoginForm_form_label__h6qTf",form_label_tw:"LoginForm_form_label_tw__B+d-R",form_input_div:"LoginForm_form_input_div__9zFon",button:"LoginForm_button__LodJg",google:"LoginForm_google__T6HJL",register:"LoginForm_register__s6PuX",signup:"LoginForm_signup__M7IpJ"},c=a(8405),l=function(s){return s.auth.error},t=a.p+"static/media/loginGoose_desk@1x.e7e929f2404e1cb175d0.png",d=a.p+"static/media/loginGoose_desk@2x.e9f89bedef83ad871256.png";a(2791);var m=a.p+"static/media/right.8838aed33abf8d6bd5adbd62df0816f2.svg";var _=a.p+"static/media/error.07979e0ad4a4bfabe779c92185218e6f.svg";var u=a.p+"static/media/success.3d05382fa1f2cc9cbd1ac7bb31359c2f.svg",p=a(184),g=function(){var s=(0,r.I0)(),e=(0,r.v9)(l),a=i.Ry().shape({password:i.Z_().min(6,"Your password can not be so short").max(16,"Your password can not be so long").required("Password is required")});function g(s){var e;return s?/^[a-z].+([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z]+[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(s)||(e="Email is not valid"):e="Email is required",e}return(0,p.jsx)("div",{className:n.div_container,children:(0,p.jsxs)("div",{className:n.div_container_flex,children:[(0,p.jsxs)("picture",{className:n.logo_goose,children:[(0,p.jsx)("source",{className:n.source,srcSet:"".concat(t," 1x, ").concat(d," 2x")}),(0,p.jsx)("img",{srcSet:t,alt:"rocket"})]}),(0,p.jsxs)("div",{className:n.div_container_form,children:[(0,p.jsxs)("div",{className:n.div_container_formik,children:[(0,p.jsx)("h2",{className:n.title,children:"Log In"}),(0,p.jsx)(o.J9,{initialValues:{email:"",password:""},onSubmit:function(e,a){var r=e.email,o=e.password;a.resetForm;s((0,c.Ib)({email:r,password:o}))},validationSchema:a,children:function(s){var a=s.errors,r=s.touched;return(0,p.jsx)(o.l0,{className:n.form,action:"#",autoComplete:"off",children:(0,p.jsxs)("div",{className:n.form_div,children:[(0,p.jsxs)("label",{htmlFor:"email",className:n.form_label,children:[(0,p.jsx)("span",{className:"".concat(n.form_input_email," ").concat(r.email&&a.email?n.error:""," ").concat(r.email&&!a.email?n.success:""),"aria-invalid":r.email&&a.email?"true":"false","data-valid":r.email&&!a.email?"true":"false",children:"Email"}),(0,p.jsxs)("div",{className:n.form_input_div,children:[(0,p.jsx)(o.gN,{className:"".concat(n.form_input," ").concat(r.email&&a.email?n.error:""," ").concat(r.email&&!a.email?n.success:""),name:"email",type:"email",placeholder:"nadiia@gmail.com",autoComplete:"email","aria-invalid":r.email&&a.email?"true":"false","data-valid":r.email&&!a.email?"true":"false",validate:g}),r.email&&a.email&&(0,p.jsx)("img",{className:n.errorIcon,style:{width:"24px"},src:_,alt:"goose"}),r.email&&!a.email&&(0,p.jsx)("img",{className:n.successIcon,style:{width:"24px"},src:u,alt:"goose"})]}),r.email&&!a.email&&(0,p.jsx)("div",{className:n.success,children:"Email is valid"}),(0,p.jsx)(o.Bc,{name:"email",render:function(s){return(0,p.jsx)("div",{className:n.error,children:s})}})]}),(0,p.jsxs)("label",{htmlFor:"password",className:n.form_label_tw,children:[(0,p.jsx)("span",{className:"".concat(n.form_input_email," ").concat(r.password&&a.password?n.error:""," ").concat(r.password&&!a.password?n.success:""),"aria-invalid":r.password&&a.password?"true":"false","data-valid":r.password&&!a.password?"true":"false",children:"Password"}),(0,p.jsxs)("div",{className:n.form_input_div,children:[(0,p.jsx)(o.gN,{className:"".concat(n.form_input," ").concat(r.password&&a.password?n.error:""," ").concat(r.password&&!a.password?n.success:""),name:"password",type:"password",placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf",autoComplete:"password","aria-invalid":r.password&&a.password?"true":"false","data-valid":r.password&&!a.password?"true":"false"}),r.password&&a.password&&(0,p.jsx)("img",{className:n.errorIconn,style:{width:"24px"},src:_,alt:"goose"}),r.password&&!a.password&&(0,p.jsx)("img",{className:n.successIconn,style:{width:"24px"},src:u,alt:"goose"})]}),r.password&&!a.password&&(0,p.jsx)("div",{className:n.success,children:"Password is valid"}),(0,p.jsx)(o.Bc,{name:"password",render:function(s){return(0,p.jsx)("div",{className:n.error,children:s})}})]}),e&&(0,p.jsx)("p",{children:e}),(0,p.jsxs)("button",{className:n.button,type:"submit",children:["Log In",(0,p.jsx)("img",{style:{width:"20px"},src:m,alt:"goose"})]})]})})}}),(0,p.jsx)("a",{className:n.google,href:"https://goose-track-backend-54zr.onrender.com/auth/google",children:"Click me to authorize with Google!"})]}),(0,p.jsx)("div",{className:n.register,children:(0,p.jsx)("a",{className:n.signup,href:"http://localhost:3000/project-5-frontend/register",children:"Sign up"})})]})]})})},f=a(1005),v=function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{}),(0,p.jsx)(f.Z,{authLink:"/register",linkText:"Sign up"})]})}}}]);
//# sourceMappingURL=268.b6bece9a.chunk.js.map