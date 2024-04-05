import{s as f}from"./sweetAlert-UthXI6JZ.js";import{_,c as w,a as e,b as o,w as g,r as u,o as b,n as i}from"./index-mrMvHell.js";const v={data(){return{user:{name:"",email:"",password:"",age:"",phone:"",address:"",role:"user",birthday:""}}},methods:{isOver18(m){if(m.length===0)return"生日 為必填";const s=new Date(m),d=new Date,c=d.getFullYear()-s.getFullYear();return d.getMonth()<s.getMonth()||d.getMonth()===s.getMonth()&&d.getDate()<s.getDate()?c-1<18?"加入會員需滿18歲":!0:c<18?"加入會員需滿18歲":!0},signup(){event.preventDefault(),this.axios.post("https://two024-south-json-server-vercel.onrender.com/signup",{email:this.user.email,password:this.user.password,name:this.user.name,tel:this.user.tel,role:"user"}).then(()=>{this.$router.push("/login"),f.threeLayerCheckType("success","會員註冊完成")}).catch(()=>{f.threeLayerCheckType("error","會員註冊失敗，請再次填寫註冊資料")})}},mounted(){window.scrollTo(0,0)}},V={class:"container py-10 py-lg-30"},y={class:"row justify-content-center align-items-cneter"},k={class:"col-md-6"},D=e("h1",{class:"h3 mb-4 text-center"},"會員註冊",-1),x={class:"form-floating mb-4"},F=e("label",{for:"username",class:"form-label"},"請輸入姓名",-1),M={class:"form-floating mb-4"},U=e("label",{for:"email"},"請輸入 Email",-1),q={class:"form-floating mb-4"},C=e("label",{for:"userpassword"},"請輸入Password",-1),E={class:"form-floating mb-4"},P=e("label",{for:"userpassword_confirmation"},"再次確認輸入Password",-1),B={class:"form-floating mb-4"},S=e("label",{for:"phone"},"請輸入手機號碼",-1),T={class:"form-floating mb-4"},j=e("label",{for:"floatingDate"},"生日(加入會員需滿18歲)",-1),L=e("button",{class:"btn-turquoise w-100 mt-3",type:"submit",id:"signup"},"註冊",-1);function N(m,s,d,c,a,p){const t=u("VeeField"),r=u("ErrorMessage"),h=u("VeeForm");return b(),w("div",V,[e("div",y,[e("div",k,[D,o(h,{ref:"form",onSubmit:p.signup},{default:g(({errors:n})=>[e("div",x,[o(t,{type:"text",class:i(["form-control",{"is-invalid":n.姓名}]),modelValue:a.user.name,"onUpdate:modelValue":s[0]||(s[0]=l=>a.user.name=l),id:"username",name:"姓名",placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),F,o(r,{name:"姓名",class:"invalid-feedback"})]),e("div",M,[o(t,{type:"email",name:"email",class:i(["form-control",{"is-invalid":n.email}]),modelValue:a.user.email,"onUpdate:modelValue":s[1]||(s[1]=l=>a.user.email=l),id:"email",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),U,o(r,{name:"email",class:"invalid-feedback"})]),e("div",q,[o(t,{type:"password",class:i(["form-control",{"is-invalid":n.password}]),name:"password",id:"userpassword",placeholder:"請輸入Password",rules:"min:8|alpha_dash|required",autocomplete:"current-password",modelValue:a.user.password,"onUpdate:modelValue":s[2]||(s[2]=l=>a.user.password=l)},null,8,["class","modelValue"]),C,o(r,{name:"password",class:"invalid-feedback"})]),e("div",E,[o(t,{type:"password",class:i(["form-control",{"is-invalid":n.password_confirmation}]),name:"password_confirmation",id:"userpassword_confirmation",placeholder:"請再次輸入Password",rules:"confirmed:@password",autocomplete:"current-password"},null,8,["class"]),P,o(r,{name:"password_confirmation",class:"invalid-feedback"})]),e("div",B,[o(t,{id:"phone",name:"手機號碼",type:"text",class:i(["form-control",{"is-invalid":n.手機號碼}]),placeholder:"請輸入手機號碼",rules:{required:!0,regex:/^(0\d{7,9})$/},modelValue:a.user.phone,"onUpdate:modelValue":s[3]||(s[3]=l=>a.user.phone=l)},null,8,["class","modelValue"]),S,o(r,{name:"手機號碼",class:"invalid-feedback"})]),e("div",T,[o(t,{type:"date",name:"生日",class:i(["form-control",{"is-invalid":n.生日}]),id:"floatingDate",placeholder:"2024/03/08",modelValue:a.user.birthday,"onUpdate:modelValue":s[4]||(s[4]=l=>a.user.birthday=l),rules:p.isOver18},null,8,["class","modelValue","rules"]),j,o(r,{name:"生日",class:"invalid-feedback"})]),L]),_:1},8,["onSubmit"])])])])}const z=_(v,[["render",N]]);export{z as default};