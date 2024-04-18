import{s as d}from"./sweetAlert-ewec_sWc.js";import{_ as w,c as y,a as o,b as n,w as b,r as u,o as v,n as m,p as C,f as k}from"./index-m3KkdF-s.js";const _="https://two024-south-json-server-vercel.onrender.com",V={data(){return{user:{email:"",password:""},userCarts:[],cartsLength:0,isActive:!0}},methods:{async login(){event.preventDefault();try{const s=await this.axios.post(`${_}/login`,this.user),{accessToken:t,expired:a}=s.data,r=s.data.user.id;document.cookie=`hexTokenU=${t}; expires=${new Date(a).toUTCString()}`,document.cookie=`userId=${r}`,this.userIsLoggedIn2=!0,d.threeLayerCheckType("success","會員登入成功"),this.$emitter.emit("loginCheck2",!0),this.$router.push("/"),r&&(await this.getCarts(r),this.$emitter.emit("adminUpdateCart",this.cartsLength))}catch(s){console.error(s),d.threeLayerCheckType("error","會員登入失敗，請再次填寫會員登入資料")}},getCarts(s){return this.axios.get(`${_}/carts`).then(t=>{this.userCarts=t.data.filter(e=>e.userId===s);const a=[],r=new Set;this.userCarts.forEach(e=>{r.has(e.productId)||(r.add(e.productId),a.push(e))}),this.userCarts=a,this.cartsLength=this.userCarts.length}).catch(t=>{d.threeLayerCheckType("error","取得購物車資料失敗")})},toggleEye(){this.isActive=!this.isActive}},mounted(){window.scrollTo(0,0)}},l=s=>(C("data-v-58ea5032"),s=s(),k(),s),I={class:"container py-10 py-lg-30"},x={class:"row justify-content-center align-items-cneter"},E={class:"col-md-6"},L=l(()=>o("h1",{class:"h3 mb-4 text-center"},"會員登入",-1)),S={class:"form-floating mb-4"},T=l(()=>o("label",{for:"email"},"請輸入 Email",-1)),A={class:"form-floating mb-4"},U=l(()=>o("label",{for:"userpassword"},"請輸入Password",-1)),q=l(()=>o("button",{class:"btn-turquoise w-100 mt-4 btn-rounded",type:"submit",id:"login"}," 登入 ",-1));function F(s,t,a,r,e,c){const p=u("VeeField"),h=u("ErrorMessage"),g=u("VeeForm");return v(),y("div",I,[o("div",x,[o("div",E,[L,n(g,{id:"form",ref:"form",onSubmit:c.login},{default:b(({errors:f})=>[o("div",S,[n(p,{type:"email",name:"email",class:m(["form-control",{"is-invalid":f.email}]),modelValue:e.user.email,"onUpdate:modelValue":t[0]||(t[0]=i=>e.user.email=i),id:"email",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),T,n(h,{name:"email",class:"invalid-feedback"})]),o("div",A,[n(p,{type:e.isActive?"password":"text",class:m(["form-control",{"is-invalid":f.password}]),name:"password",id:"userpassword",placeholder:"請輸入Password",rules:"min:8|alpha_dash|required",autocomplete:"current-password",modelValue:e.user.password,"onUpdate:modelValue":t[1]||(t[1]=i=>e.user.password=i)},null,8,["type","class","modelValue"]),U,o("button",{class:"fs-3 fs-lg-2 bg-transparent border-0 form-eye",type:"button",onClick:t[2]||(t[2]=(...i)=>c.toggleEye&&c.toggleEye(...i))},[o("i",{class:m([e.isActive?"bi-eye-slash-fill":"bi-eye-fill","bi"])},null,2)]),n(h,{name:"password",class:"invalid-feedback"})]),q]),_:1},8,["onSubmit"])])])])}const j=w(V,[["render",F],["__scopeId","data-v-58ea5032"]]);export{j as default};
