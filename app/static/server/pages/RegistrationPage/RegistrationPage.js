(()=>{var e={};e.id=98,e.ids=[98],e.modules={7444:(e,r,t)=>{"use strict";t.r(r),t.d(r,{config:()=>S,default:()=>h,getServerSideProps:()=>v,getStaticPaths:()=>x,getStaticProps:()=>P,reportWebVitals:()=>f,routeModule:()=>N,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>b});var s={};t.r(s),t.d(s,{default:()=>m});var a=t(7093),i=t(5244),n=t(1323),o=t(5172),l=t(5472),u=t(997),d=t(6689),c=t(1163);t(4151);var g=t(1009),p=t(6526);let m=function(){let[e,r]=(0,d.useState)({username:"",email:"",password:"",confirmPassword:""}),t=(0,c.useRouter)(),s=t=>{let{name:s,value:a}=t.target;r({...e,[s]:a})},a=async r=>{r.preventDefault();try{let r=await fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});200===r.status?t.push("/LoginPage/LoginPage"):(console.error("Registration has failed"),document.getElementById("registration-error-message").innerHTML="An error has occurred during the registration process. Please try again.")}catch(e){console.error("Registration has failed",e),document.getElementById("registration-error-message").innerHTML="An error has occurred during the registration process. Please try again."}};return(0,u.jsxs)("div",{className:"registration-container-box",children:[u.jsx(g.default,{}),(0,u.jsxs)("div",{className:"registration-container",children:[(0,u.jsxs)("form",{className:"registration-form",onSubmit:a,children:[u.jsx("h2",{className:"registration-title",children:"Register"}),u.jsx("div",{className:"input-group",children:u.jsx("input",{name:"username",type:"text",placeholder:"Username",value:e.username,onChange:s,required:!0})}),u.jsx("div",{className:"input-group",children:u.jsx("input",{name:"email",type:"email",placeholder:"Email",value:e.email,onChange:s,required:!0})}),u.jsx("div",{className:"input-group",children:u.jsx("input",{name:"password",type:"password",placeholder:"Password",value:e.password,onChange:s,required:!0})}),u.jsx("div",{className:"input-group",children:u.jsx("input",{name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:e.confirmPassword,onChange:s,required:!0})}),u.jsx("button",{className:"register-button",type:"submit",children:"Register"})]}),u.jsx("div",{id:"registration-error-message"})]}),u.jsx(p.default,{})]})},h=(0,n.l)(s,"default"),P=(0,n.l)(s,"getStaticProps"),x=(0,n.l)(s,"getStaticPaths"),v=(0,n.l)(s,"getServerSideProps"),S=(0,n.l)(s,"config"),f=(0,n.l)(s,"reportWebVitals"),b=(0,n.l)(s,"unstable_getStaticProps"),j=(0,n.l)(s,"unstable_getStaticPaths"),y=(0,n.l)(s,"unstable_getStaticParams"),q=(0,n.l)(s,"unstable_getServerProps"),w=(0,n.l)(s,"unstable_getServerSideProps"),N=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/RegistrationPage/RegistrationPage",pathname:"/RegistrationPage/RegistrationPage",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:s})},4151:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[859,559,163,356],()=>t(7444));module.exports=s})();