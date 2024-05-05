import{s as h}from"./sweetAlert-6dSAurRP.js";import{_ as g,c as b,a as s,b as t,w as v,r as f,o as w,n as i,p as y,f as V}from"./index-oxl5H5eR.js";const k={data(){return{user:{name:"",email:"",password:"",age:"",phone:"",address:"",role:"user",birthday:""},isActive:!0}},methods:{toggleEye(){this.isActive=!this.isActive},isOver18(a){if(a.length===0)return"生日 為必填";const e=new Date(a),n=new Date,p=n.getFullYear()-e.getFullYear();return n.getMonth()<e.getMonth()||n.getMonth()===e.getMonth()&&n.getDate()<e.getDate()?p-1<18?"加入會員需滿18歲":!0:p<18?"加入會員需滿18歲":!0},signup(){event.preventDefault(),this.axios.post("https://two024-south-json-server-vercel.onrender.com/signup",{email:this.user.email,password:this.user.password,name:this.user.name,tel:this.user.tel,role:"user"}).then(()=>{this.$router.push("/login"),h.threeLayerCheckType("success","會員註冊完成")}).catch(()=>{h.threeLayerCheckType("error","會員註冊失敗，請再次填寫註冊資料")})}},mounted(){window.scrollTo(0,0)}},r=a=>(y("data-v-56ed2de0"),a=a(),V(),a),x={class:"container py-10 py-lg-30"},D={class:"row justify-content-center align-items-cneter"},E={class:"col-md-6"},C=r(()=>s("h3",{class:"mb-4 text-center"},"會員註冊",-1)),A={class:"form-floating mb-4"},F=r(()=>s("label",{for:"username",class:"form-label"},"請輸入姓名",-1)),M={class:"form-floating mb-4"},S=r(()=>s("label",{for:"email"},"請輸入 Email",-1)),U={class:"form-floating mb-4"},q=r(()=>s("label",{for:"userpassword"},"請輸入Password",-1)),I={class:"form-floating mb-4"},B=r(()=>s("label",{for:"phone"},"請輸入手機號碼",-1)),T={class:"form-floating mb-4"},j=r(()=>s("label",{for:"floatingDate"},"生日(加入會員需滿18歲)",-1)),L=r(()=>s("button",{class:"btn-turquoise w-100 mt-3",type:"submit",id:"signup"},"註冊",-1));function N(a,e,n,p,o,m){const d=f("VeeField"),u=f("ErrorMessage"),_=f("VeeForm");return w(),b("div",x,[s("div",D,[s("div",E,[C,t(_,{ref:"form",onSubmit:m.signup},{default:v(({errors:c})=>[s("div",A,[t(d,{type:"text",class:i(["form-control",{"is-invalid":c.姓名}]),modelValue:o.user.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.user.name=l),id:"username",name:"姓名",placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),F,t(u,{name:"姓名",class:"invalid-feedback"})]),s("div",M,[t(d,{type:"email",name:"email",class:i(["form-control",{"is-invalid":c.email}]),modelValue:o.user.email,"onUpdate:modelValue":e[1]||(e[1]=l=>o.user.email=l),id:"email",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),S,t(u,{name:"email",class:"invalid-feedback"})]),s("div",U,[t(d,{type:o.isActive?"password":"text",class:i(["form-control",{"is-invalid":c.password}]),name:"password",id:"userpassword",placeholder:"請輸入Password",rules:"min:8|alpha_dash|required",autocomplete:"current-password",modelValue:o.user.password,"onUpdate:modelValue":e[2]||(e[2]=l=>o.user.password=l)},null,8,["type","class","modelValue"]),q,s("button",{class:"fs-3 fs-lg-2 bg-transparent border-0 form-eye",type:"button",onClick:e[3]||(e[3]=(...l)=>m.toggleEye&&m.toggleEye(...l)),"aria-label":"eyesClick"},[s("i",{class:i([o.isActive?"bi-eye-fill":"bi-eye-slash-fill","bi"])},null,2)]),t(u,{name:"password",class:"invalid-feedback"})]),s("div",I,[t(d,{id:"phone",name:"手機號碼",type:"text",class:i(["form-control",{"is-invalid":c.手機號碼}]),placeholder:"請輸入手機號碼",rules:{required:!0,regex:/^(0\d{7,9})$/},modelValue:o.user.phone,"onUpdate:modelValue":e[4]||(e[4]=l=>o.user.phone=l)},null,8,["class","modelValue"]),B,t(u,{name:"手機號碼",class:"invalid-feedback"})]),s("div",T,[t(d,{type:"date",name:"生日",class:i(["form-control",{"is-invalid":c.生日}]),id:"floatingDate",placeholder:"2024/03/08",modelValue:o.user.birthday,"onUpdate:modelValue":e[5]||(e[5]=l=>o.user.birthday=l),rules:m.isOver18},null,8,["class","modelValue","rules"]),j,t(u,{name:"生日",class:"invalid-feedback"})]),L]),_:1},8,["onSubmit"])])])])}const Y=g(k,[["render",N],["__scopeId","data-v-56ed2de0"]]);export{Y as default};
