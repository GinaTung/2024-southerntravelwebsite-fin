import{_ as d,c,a as e,v as u,x as n,y as l,o as m}from"./index-Pkf9mfWJ.js";const p="http://localhost:3000",h={data(){return{user:{email:"",password:""}}},methods:{login(){this.axios.post(`${p}/login`,this.user).then(o=>{this.userId=o.data.user.id,this.token=o.data.accessToken;const{accessToken:s,expired:i}=o.data;document.cookie=`hexToken=${s}; expires=${new Date(i)}; user=${this.userId}`,alert("會員登入成功"),this.$router.push("/")}).catch(o=>{alert("會員登入失敗，請再次填寫會員登入資料")})}}},f={class:"container d-flex justify-content-center flex-column vh-85"},_={class:"row justify-content-center align-items-cneter"},w={class:"col-6"},x=e("h1",{class:"h3 mb-3"},"會員登入",-1),g={class:"form-floating mb-3"},v=e("label",{for:"username"},"Email address",-1),b={class:"form-floating"},k=e("label",{for:"password"},"Password",-1),y=e("button",{class:"btn-turquoise w-100 mt-3 border-0",type:"submit",id:"login"},"登入",-1);function T(o,s,i,V,r,a){return m(),c("div",f,[e("div",_,[e("div",w,[x,e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=u((...t)=>a.login&&a.login(...t),["prevent"]))},[e("div",g,[n(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>r.user.email=t),id:"username",placeholder:"name@example.com",required:"",autofocus:"",autocomplete:"useremail"},null,512),[[l,r.user.email]]),v]),e("div",b,[n(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>r.user.password=t),id:"password",placeholder:"Password",required:"",autocomplete:"current-password"},null,512),[[l,r.user.password]]),k]),y],32)])])])}const B=d(h,[["render",T]]);export{B as default};
