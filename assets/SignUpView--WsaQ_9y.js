import{_ as a,c as u,a as e,C as d,f as r,B as l,o as m}from"./index-MGhUN9vS.js";const p={data(){return{user:{name:"",email:"",password:"",age:"",tel:"",address:"",role:"user"}}},methods:{signup(){this.axios.post("http://localhost:3000/signup",{email:this.user.email,password:this.user.password,name:this.user.name,tel:this.user.tel,role:"user"}).then(s=>{alert("會員註冊完成"),this.$router.push("/login")}).catch(s=>{alert("會員註冊失敗，請再次填寫註冊資料")})}}},c={class:"container d-flex justify-content-center flex-column vh-85"},f={class:"row justify-content-center align-items-cneter"},_={class:"col-6"},h=e("h1",{class:"h3 mb-3"},"會員註冊",-1),w={class:"form-floating mb-3"},b=e("label",{for:"username"},"姓名",-1),g={class:"form-floating mb-3"},v=e("label",{for:"useremail"},"Email address",-1),x={class:"form-floating mb-3"},X=e("label",{for:"userpassword"},"Password",-1),y={class:"form-floating mb-3"},V=e("label",{for:"usertel"},"電話",-1),q=e("button",{class:"btn-turquoise w-100 mt-3 border-0",type:"submit",id:"signup"},"註冊",-1);function U(n,s,B,j,t,i){return m(),u("div",c,[e("div",f,[e("div",_,[h,e("form",{id:"form",class:"form-signin",onSubmit:s[4]||(s[4]=d((...o)=>i.signup&&i.signup(...o),["prevent"]))},[e("div",w,[r(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>t.user.name=o),id:"username",placeholder:"王曉明",required:""},null,512),[[l,t.user.name]]),b]),e("div",g,[r(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>t.user.email=o),id:"useremail",placeholder:"name@example.com",required:"",autocomplete:"useremail"},null,512),[[l,t.user.email]]),v]),e("div",x,[r(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=o=>t.user.password=o),id:"userpassword",placeholder:"Password",required:"",autocomplete:"current-password"},null,512),[[l,t.user.password]]),X]),e("div",y,[r(e("input",{type:"tel",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=o=>t.user.tel=o),id:"usertel",placeholder:"09-XXXX-XXXX",required:""},null,512),[[l,t.user.tel]]),V]),q],32)])])])}const E=a(p,[["render",U]]);export{E as default};
