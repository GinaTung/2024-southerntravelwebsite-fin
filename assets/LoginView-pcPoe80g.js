import{_ as d,c as u,a as e,C as m,f as a,i as c,o as p}from"./index-poWyBIhc.js";const h="https://two024-south-json-server-vercel.onrender.com",_={data(){return{user:{email:"",password:""}}},methods:{login(){this.axios.post(`${h}/login`,this.user).then(o=>{console.log(o),console.log(o),alert("會員登入成功");const{accessToken:s,expired:n,userId:i}=o.data;document.cookie=`hexToken=${s}; expires=${new Date(n).toUTCString()}; user=${i}`,this.userIsLoggedIn2=!0,this.userId=i,this.$router.push("/"),this.$emitter.emit("loginCheck2",!0)}).catch(o=>{console.log(o),alert("會員登入失敗，請再次填寫會員登入資料")})}}},f={class:"container py-10 py-lg-30"},g={class:"row justify-content-center align-items-cneter"},w={class:"col-6"},v=e("h1",{class:"h3 mb-4"},"會員登入",-1),b={class:"form-floating mb-4"},x=e("label",{for:"username"},"Email address",-1),k={class:"form-floating"},y=e("label",{for:"password"},"Password",-1),I=e("button",{class:"btn-turquoise w-100 mt-4 border-0",type:"submit",id:"login"},"登入",-1);function T(o,s,n,i,r,l){return p(),u("div",f,[e("div",g,[e("div",w,[v,e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=m((...t)=>l.login&&l.login(...t),["prevent"]))},[e("div",b,[a(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>r.user.email=t),id:"username",placeholder:"name@example.com",required:"",autofocus:"",autocomplete:"useremail"},null,512),[[c,r.user.email]]),x]),e("div",k,[a(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>r.user.password=t),id:"password",placeholder:"Password",required:"",autocomplete:"current-password"},null,512),[[c,r.user.password]]),y]),I],32)])])])}const $=d(_,[["render",T]]);export{$ as default};