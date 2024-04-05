import{s as i}from"./sweetAlert-UthXI6JZ.js";import{_,c as f,a as s,b as t,w,r as l,o as k,n as p}from"./index-mrMvHell.js";const b="https://ec-course-api.hexschool.io/v2",g={data(){return{user:{username:"",password:""},userIsLoggedIn:!1,token:""}},methods:{goHome(){this.$router.push("/")},checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token&&(i.threeLayerCheckType("warning","目前已為管理者身分登入，無需再次登入"),this.$router.push({path:"/admin/AdminHome"}))},login(){this.axios.post(`${b}/admin/signin`,this.user).then(a=>{i.threeLayerCheckType("success","管理者登入成功");const{expired:e,token:d}=a.data;document.cookie=`hexToken=${d}; expires=${new Date(e)}`,this.$router.push({name:"AdminHome"}),this.$emitter.emit("loginCheck",!0)}).catch(a=>{i.threeLayerCheckType("error","管理者登入失敗")})}},mounted(){window.scrollTo(0,0),setTimeout(()=>{this.checkAdmin()},1e3)}},v={class:"container py-10 py-lg-30"},V={class:"row justify-content-center"},x={class:"col-md-6"},y=s("h1",{class:"h3 mb-4 text-center"},"管理者登入",-1),C={class:"form-floating mb-4"},A=s("label",{for:"email"},"請輸入 Email",-1),T={class:"form-floating mb-4"},$=s("label",{for:"userpassword"},"請輸入Password",-1),E={class:"mt-3"};function L(a,e,d,q,r,n){const m=l("VeeField"),c=l("ErrorMessage"),h=l("VeeForm");return k(),f("div",v,[s("div",V,[s("div",x,[y,t(h,{id:"form",ref:"form",onSubmit:n.login},{default:w(({errors:u})=>[s("div",C,[t(m,{type:"email",name:"email",class:p(["form-control",{"is-invalid":u.email}]),modelValue:r.user.username,"onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o),id:"email",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),A,t(c,{name:"email",class:"invalid-feedback"})]),s("div",T,[t(m,{type:"password",class:p(["form-control",{"is-invalid":u.password}]),name:"password",id:"userpassword",placeholder:"請輸入Password",rules:"min:8|alpha_dash|required",autocomplete:"current-password",modelValue:r.user.password,"onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o)},null,8,["class","modelValue"]),$,t(c,{name:"password",class:"invalid-feedback"})]),s("button",{class:"btn-turquoise w-100 mt-3 btn-rounded",onClick:e[2]||(e[2]=(...o)=>n.login&&n.login(...o))},"登入"),s("div",E,[s("button",{class:"btn-outline-turquoise mt-3 w-100 btn-rounded",type:"button",onClick:e[3]||(e[3]=o=>n.goHome())},"回前台")])]),_:1},8,["onSubmit"])])])])}const B=_(g,[["render",L]]);export{B as default};