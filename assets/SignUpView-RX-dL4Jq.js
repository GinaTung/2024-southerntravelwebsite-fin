import{_ as a,c as u,a as e,C as d,f as t,y as l,o as m}from"./index-sZdYG2qq.js";const p={data(){return{user:{name:"",email:"",password:"",age:"",tel:"",address:"",role:"user"}}},methods:{signup(){this.axios.post("http://localhost:3000/signup",{email:this.user.email,password:this.user.password,name:this.user.name,tel:this.user.tel,role:"user"}).then(s=>{alert("會員註冊完成"),this.$router.push("/login")}).catch(s=>{alert("會員註冊失敗，請再次填寫註冊資料")})}}},c={class:"container py-10 py-lg-30"},f={class:"row justify-content-center align-items-cneter"},_={class:"col-6"},h=e("h1",{class:"h3 mb-4"},"會員註冊",-1),w={class:"form-floating mb-4"},g=e("label",{for:"username"},"姓名",-1),b={class:"form-floating mb-4"},v=e("label",{for:"useremail"},"Email address",-1),y={class:"form-floating mb-4"},X=e("label",{for:"userpassword"},"Password",-1),x={class:"form-floating mb-4"},V=e("label",{for:"usertel"},"電話",-1),q=e("button",{class:"btn-turquoise w-100 mt-3 border-0",type:"submit",id:"signup"},"註冊",-1);function U(n,s,B,k,r,i){return m(),u("div",c,[e("div",f,[e("div",_,[h,e("form",{id:"form",class:"form-signin",onSubmit:s[4]||(s[4]=d((...o)=>i.signup&&i.signup(...o),["prevent"]))},[e("div",w,[t(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.name=o),id:"username",placeholder:"王曉明",required:""},null,512),[[l,r.user.name]]),g]),e("div",b,[t(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.email=o),id:"useremail",placeholder:"name@example.com",required:"",autocomplete:"useremail"},null,512),[[l,r.user.email]]),v]),e("div",y,[t(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=o=>r.user.password=o),id:"userpassword",placeholder:"Password",required:"",autocomplete:"current-password"},null,512),[[l,r.user.password]]),X]),e("div",x,[t(e("input",{type:"tel",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=o=>r.user.tel=o),id:"usertel",placeholder:"09-XXXX-XXXX",required:""},null,512),[[l,r.user.tel]]),V]),q],32)])])])}const M=a(p,[["render",U]]);export{M as default};
