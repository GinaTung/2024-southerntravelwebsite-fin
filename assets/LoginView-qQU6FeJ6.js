import{s as p}from"./sweetAlert-lhoPy8q-.js";import{_ as w,c as g,a as s,b as t,w as v,r as l,o as b,n as _,p as V,f as k}from"./index-bDBLITD2.js";const y="https://two024-south-json-server-vercel.onrender.com",x={data(){return{user:{email:"",password:""}}},methods:{login(){event.preventDefault(),this.axios.post(`${y}/login`,this.user).then(e=>{const{accessToken:o,expired:d}=e.data,i=e.data.user.id;document.cookie=`hexTokenU=${o}; expires=${new Date(d).toUTCString()}`,document.cookie=`userId=${i}`,this.userIsLoggedIn2=!0,this.userId=i,p.threeLayerCheckType("success","會員登入成功"),this.$emitter.emit("loginCheck2",!0),this.$emitter.emit("adminUpdateCart",!0),this.$router.push("/")}).catch(e=>{console.log(e),p.threeLayerCheckType("error","會員登入失敗，請再次填寫會員登入資料")})}},mounted(){window.scrollTo(0,0)}},a=e=>(V("data-v-99e7ef64"),e=e(),k(),e),I={class:"container py-10 py-lg-30"},C={class:"row justify-content-center align-items-cneter"},S={class:"col-md-6"},T=a(()=>s("h1",{class:"h3 mb-4 text-center"},"會員登入",-1)),$={class:"form-floating mb-4"},E=a(()=>s("label",{for:"email"},"請輸入 Email",-1)),U={class:"form-floating mb-4"},F=a(()=>s("label",{for:"userpassword"},"請輸入Password",-1)),L=a(()=>s("button",{class:"btn-turquoise w-100 mt-4 btn-rounded",type:"submit",id:"login"},"登入",-1));function q(e,o,d,i,r,h){const c=l("VeeField"),m=l("ErrorMessage"),f=l("VeeForm");return b(),g("div",I,[s("div",C,[s("div",S,[T,t(f,{id:"form",ref:"form",onSubmit:h.login},{default:v(({errors:u})=>[s("div",$,[t(c,{type:"email",name:"email",class:_(["form-control",{"is-invalid":u.email}]),modelValue:r.user.email,"onUpdate:modelValue":o[0]||(o[0]=n=>r.user.email=n),id:"email",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),E,t(m,{name:"email",class:"invalid-feedback"})]),s("div",U,[t(c,{type:"password",class:_(["form-control",{"is-invalid":u.password}]),name:"password",id:"userpassword",placeholder:"請輸入Password",rules:"min:8|alpha_dash|required",autocomplete:"current-password",modelValue:r.user.password,"onUpdate:modelValue":o[1]||(o[1]=n=>r.user.password=n)},null,8,["class","modelValue"]),F,t(m,{name:"password",class:"invalid-feedback"})]),L]),_:1},8,["onSubmit"])])])])}const D=w(x,[["render",q],["__scopeId","data-v-99e7ef64"]]);export{D as default};
