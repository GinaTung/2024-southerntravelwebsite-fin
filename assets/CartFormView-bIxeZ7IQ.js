import{U as w}from"./UserProductModal-zOMLkSaH.js";import{C as U}from"./CartNavbar-1KsQlLdI.js";import{C as T}from"./collapse-bfZI7V4K.js";import{s as f}from"./sweetAlert-M_FrQGf7.js";import{_ as E,c as h,b as o,a as e,d as k,t as b,f as I,v as L,F as C,h as O,w as _,r as g,o as p,n as u,i as x}from"./index-CrQ_lYDm.js";const y="http://localhost:3000",P={components:{CartNavbar:U,UserProductModal:w},data(){return{cartsData:[],userCart:[],userId:"",isOpen:!1,headerCollapse:{},user:{name:"",email:"",tel:"",address:"",birthday:"",comment:"",shippingMethod:"",passport:"",memberId:"",appellation:""},shippingMethod:["電子郵件","郵寄"],total:0,productId:"",productTitle:"",cartDataId:"",ordersData:[],isLoading:!1,orderId:0}},watch:{$route(){this.headerCollapse.hide()}},methods:{verifyId(a){if(a=a.trim(),a.length===0)return"身份證字號 為必填";if(a.length!=10)return"身份證字號 長度需為10";let s=a.charCodeAt(0);if(s<65|s>90)return"身份證字號 字首英文代號，縣市不正確";let c=a.charCodeAt(1);if(c!=49&&c!=50)return"身份證字號 性別代碼不正確";let m=a.slice(2);for(let i in m){let d=m.charCodeAt(i);if(d<48|d>57)return"身份證字號 數字區出現非數字字元"}let t="ABCDEFGHJKLMNPQRSTUVXYWZIO",n=[1,9,8,7,6,5,4,3,2,1,1];a=String(t.indexOf(a[0])+10)+a.slice(1);let v=0;for(let i=0;i<a.length;i++){let d=parseInt(a[i]),V=n[i];v+=d*V}let D=v%10==0;return D||"身份證字號 檢核碼錯誤"},isOver18(a){if(a.length===0)return"生日 為必填";const s=new Date(a),c=new Date,m=c.getFullYear()-s.getFullYear();return c.getMonth()<s.getMonth()||c.getMonth()===s.getMonth()&&c.getDate()<s.getDate()?m-1<18?"主要聯繫人需滿18歲":!0:m<18?"主要聯繫人需滿18歲":!0},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"需要正確的電話號碼"},backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},forId(a,s){this.productId=a,this.productTitle=s,this.$refs.userProductModal.openModal()},getCartsData(){this.axios.get(`${y}/cartsData`).then(a=>{this.cartsData=a.data,this.cartsData.forEach(s=>{s.status===!1&&s.userId===this.userId&&s.data.forEach(c=>{this.userCart.push(c),this.isLoading=!1})}),this.userCart.forEach(s=>{this.total+=s.final_total})}).catch(a=>{this.isLoading=!1,f.threeLayerCheckType("error","取得購買資料失敗")})},getCookie(a){const s=document.cookie.split(";");for(let c of s){const[m,t]=c.trim().split("=");if(m===a)return t}return null},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},orderData(){if(this.orderId){if(!this.ordersData.user.name||!this.ordersData.user.email||!this.ordersData.user.tel||!this.ordersData.user.address||!this.ordersData.user.birthday||!this.ordersData.user.shippingMethod){f.threeLayerCheckType("warning","請填寫所有必填欄位");return}}else if(!this.user.name||!this.user.email||!this.user.tel||!this.user.address||!this.user.birthday||!this.user.shippingMethod){f.threeLayerCheckType("warning","請填寫所有必填欄位");return}if(this.orderId){const a={create_at:new Date,name:this.ordersData.user.name,email:this.ordersData.user.email,tel:this.ordersData.user.tel,address:this.ordersData.user.address,birthday:this.ordersData.user.birthday,comment:this.ordersData.user.comment,shippingMethod:this.ordersData.user.shippingMethod,passport:this.ordersData.user.passport,memberId:this.ordersData.user.memberId,appellation:this.ordersData.user.appellation,userId:this.ordersData.userId,cartDataId:this.cartDataId,status:!1};this.axios.put(`${y}/orders/${this.orderId}`,{user:a}).then(s=>{this.ordersData=s.data}).catch(s=>{f.threeLayerCheckType("error","更新填寫資料內容失敗")})}else{const a={create_at:new Date,name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.address,birthday:this.user.birthday,comment:this.user.comment,shippingMethod:this.user.shippingMethod,passport:this.user.passport,memberId:this.user.memberId,appellation:this.user.appellation,userId:this.userId,cartDataId:this.cartDataId,status:!1};this.axios.post(`${y}/orders`,{user:a}).then(s=>{this.ordersData=s.data,document.cookie=`orderId=${s.data.id}`}).catch(s=>{f.threeLayerCheckType("error","新增填寫資料內容失敗")})}this.$router.push("/cart/payList")},getOrder(){this.axios.get(`${y}/orders/${this.orderId}`).then(a=>{this.ordersData=a.data}).catch(a=>{f.threeLayerCheckType("error","取得填寫資料內容失敗")})}},mounted(){window.scrollTo(0,0);const a=this.getCookie("userId");this.userId=a*1,this.isLoading=!0,this.getCartsData(),this.headerCollapse=new T(this.$refs.headerCollapse,{toggle:!1}),setTimeout(()=>{const c=this.getCookie("cartDataId");this.cartDataId=c*1},3e3);const s=this.getCookie("orderId");this.orderId=s*1,this.orderId&&this.getOrder()}},q={class:"container py-10 py-lg-30"},A={class:"row"},F={class:"col-md-6 mx-auto pb-5 pb-lg-15"},S={class:"mb-4"},N={class:"d-grid gap-2"},B=e("br",null,null,-1),Y={key:0,class:"bi bi-chevron-down"},j={key:1,class:"bi bi-chevron-up"},z={class:"collapse",id:"collapseExample",ref:"headerCollapse"},G={class:"card card-body rounded-0"},H={class:"col-12 col-md-5 col-lg-4"},J=["src","alt"],K={class:"col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between"},Q={class:"mt-4 mt-md-0 mb-4"},R={class:"mb-4"},W={class:"mb-4"},X={class:"mb-4"},Z=["onClick"],$={key:0},ee={class:"row"},se={class:"col-12 col-md-6 mb-4"},te=e("h3",{class:"mb-4"},"訂單資料",-1),oe={class:"form-floating mb-4"},le=e("label",{for:"floatingInput",class:"form-label"},"主要聯繫人姓名",-1),ae={class:"form-floating mb-4"},re=e("option",{selected:"",value:"",disabled:""},"請選擇稱謂",-1),ie=e("option",{value:"female"},"女士",-1),de=e("option",{value:"male"},"男士",-1),ne=e("label",{for:"floatingAppellation"},"稱謂",-1),ue={class:"form-floating mb-4"},ce=e("label",{for:"floatingMemberId"},"身分證字號",-1),me={class:"form-floating mb-4"},he=e("label",{for:"floatingPassport"},"護照號碼",-1),pe={class:"form-floating mb-4"},fe=e("label",{for:"floatingDate"},"生日(主要聯繫人需滿18歲)",-1),_e={class:"form-floating mb-4"},ge=e("label",{for:"floatingTel"},"請輸入手機號碼",-1),be={class:"form-floating mb-4"},ve=e("label",{for:"floatingEmail"},"請輸入 Email",-1),De={class:"form-floating mb-4"},Ve=e("label",{for:"floatingAddress"},"住址",-1),ye={class:"col-12 col-md-6 mb-4"},Ie=e("h3",{class:"mb-4"},"取件方式",-1),ke={class:"form-floating mb-4"},Ce=e("option",{selected:"",value:"",disabled:""},"請選擇取件方式",-1),xe=e("option",{value:"電子郵件"},"電子郵件",-1),Me=e("option",{value:"郵寄"},"郵寄",-1),we=e("label",{for:"floatingSelect2"},"選擇取件方式",-1),Ue={class:"form-floating mb-4"},Te=e("label",{for:"floatingTextarea2"},"備註(如:飲食、暈車等注意事項)",-1),Ee={key:1},Le={class:"row"},Oe={class:"col-12 col-md-6 mb-4"},Pe=e("h3",{class:"mb-4"},"訂單資料",-1),qe={class:"form-floating mb-4"},Ae=e("label",{for:"floatingInput",class:"form-label"},"主要聯繫人姓名",-1),Fe={class:"form-floating mb-4"},Se=e("option",{selected:"",value:"",disabled:""},"請選擇稱謂",-1),Ne=e("option",{value:"female"},"女士",-1),Be=e("option",{value:"male"},"男士",-1),Ye=e("label",{for:"floatingAppellation"},"稱謂",-1),je={class:"form-floating mb-4"},ze=e("label",{for:"floatingMemberId"},"身分證字號",-1),Ge={class:"form-floating mb-4"},He=e("label",{for:"floatingPassport"},"護照號碼",-1),Je={class:"form-floating mb-4"},Ke=e("label",{for:"floatingDate"},"生日(主要聯繫人需滿18歲)",-1),Qe={class:"form-floating mb-4"},Re=e("label",{for:"floatingTel"},"請輸入手機號碼",-1),We={class:"form-floating mb-4"},Xe=e("label",{for:"floatingEmail"},"請輸入 Email",-1),Ze={class:"form-floating mb-4"},$e=e("label",{for:"floatingAddress"},"住址",-1),es={class:"col-12 col-md-6 mb-4"},ss=e("h3",{class:"mb-4"},"取件方式",-1),ts={class:"form-floating mb-4"},os=e("option",{selected:"",value:"",disabled:""},"請選擇取件方式",-1),ls=e("option",{value:"電子郵件"},"電子郵件",-1),as=e("option",{value:"郵寄"},"郵寄",-1),rs=e("label",{for:"floatingSelect2"},"選擇取件方式",-1),is={class:"form-floating mb-4"},ds=e("label",{for:"floatingTextarea2"},"備註(如:飲食、暈車等注意事項)",-1),ns={class:"d-flex justify-content-between"};function us(a,s,c,m,t,n){const v=g("VueLoading"),D=g("CartNavbar"),i=g("VeeField"),d=g("ErrorMessage"),V=g("VeeForm"),M=g("UserProductModal");return p(),h(C,null,[o(v,{active:t.isLoading,class:"text-center","z-index":1060},null,8,["active"]),e("div",q,[e("div",A,[e("div",F,[o(D)])]),e("div",S,[e("p",N,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:s[0]||(s[0]=(...r)=>n.toggleOpen&&n.toggleOpen(...r))},[k(" 總計："+b(n.thousand(t.total))+"元",1),B,k("購買清單 "),t.isOpen===!1?(p(),h("i",Y)):(p(),h("i",j))])]),I(e("div",z,[e("div",G,[(p(!0),h(C,null,O(t.userCart,r=>(p(),h("div",{class:"row p-4 p-md-10",key:r.id},[e("div",H,[e("img",{src:r.product.imageUrl,alt:r.product.title,class:"img-fluid h-100"},null,8,J)]),e("div",K,[e("div",null,[e("h4",Q,"套裝行程名稱："+b(r.product.title),1),e("h5",R,"單價："+b(n.thousand(r.product.price)),1),e("h5",W,"預約數量："+b(r.qty)+" 位",1),e("h5",X,"總計："+b(n.thousand(r.final_total)),1)]),e("div",null,[e("button",{type:"button",class:"btn-turquoise border-0 rounded-1",onClick:l=>n.forId(r.product.id,r.product.title)}," 查看更多 ",8,Z)])])]))),128))])],512),[[L,t.isOpen]])]),t.orderId===t.ordersData.id?(p(),h("div",$,[o(V,{id:"form",ref:"form"},{default:_(({errors:r})=>[e("div",ee,[e("div",se,[te,e("div",oe,[o(i,{type:"text",class:u(["form-control rounded-1",{"is-invalid":r.主要聯繫人姓名}]),modelValue:t.ordersData.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>t.ordersData.user.name=l),id:"floatingInput",name:"主要聯繫人姓名",placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),le,o(d,{name:"主要聯繫人姓名",class:"invalid-feedback"})]),e("div",ae,[o(i,{id:"floatingAppellation",name:"稱謂",class:u(["form-control rounded-1",{"is-invalid":r.稱謂}]),placeholder:"請選擇稱謂",rules:"required",modelValue:t.ordersData.user.appellation,"onUpdate:modelValue":s[2]||(s[2]=l=>t.ordersData.user.appellation=l),as:"select"},{default:_(()=>[re,ie,de]),_:2},1032,["class","modelValue"]),ne,o(d,{name:"稱謂",class:"invalid-feedback"})]),e("div",ue,[o(i,{type:"text",name:"身分證字號",class:u(["form-control rounded-1",{"is-invalid":r.身分證字號}]),id:"floatingMemberId",placeholder:"請輸入身分證字號",modelValue:t.ordersData.user.memberId,"onUpdate:modelValue":s[3]||(s[3]=l=>t.ordersData.user.memberId=l),rules:n.verifyId},null,8,["class","modelValue","rules"]),ce,o(d,{name:"身分證字號",class:"invalid-feedback"})]),e("div",me,[o(i,{type:"text",name:"護照號碼",class:u(["form-control rounded-1",{"is-invalid":r.護照號碼}]),id:"floatingPassport",placeholder:"請輸入護照號碼",modelValue:t.ordersData.user.passport,"onUpdate:modelValue":s[4]||(s[4]=l=>t.ordersData.user.passport=l),rules:"numeric:true|length:9|required"},null,8,["class","modelValue"]),he,o(d,{name:"護照號碼",class:"invalid-feedback"})]),e("div",pe,[o(i,{type:"date",name:"生日",class:u(["form-control rounded-1",{"is-invalid":r.生日}]),id:"floatingDate",placeholder:"2024/03/08",modelValue:t.ordersData.user.birthday,"onUpdate:modelValue":s[5]||(s[5]=l=>t.ordersData.user.birthday=l),rules:n.isOver18},null,8,["class","modelValue","rules"]),fe,o(d,{name:"生日",class:"invalid-feedback"})]),e("div",_e,[o(i,{id:"floatingTel",name:"手機號碼",type:"text",class:u(["form-control rounded-1",{"is-invalid":r.手機號碼}]),placeholder:"請輸入手機號碼",rules:n.isPhone,modelValue:t.ordersData.user.tel,"onUpdate:modelValue":s[6]||(s[6]=l=>t.ordersData.user.tel=l)},null,8,["class","rules","modelValue"]),ge,o(d,{name:"手機號碼",class:"invalid-feedback"})]),e("div",be,[o(i,{type:"email",name:"email",class:u(["form-control rounded-1",{"is-invalid":r.email}]),modelValue:t.ordersData.user.email,"onUpdate:modelValue":s[7]||(s[7]=l=>t.ordersData.user.email=l),id:"floatingEmail",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),ve,o(d,{name:"email",class:"invalid-feedback"})]),e("div",De,[o(i,{name:"住址",type:"text",class:u(["form-control rounded-1",{"is-invalid":r.住址}]),id:"floatingAddress",placeholder:"縣市鄉鎮市區",modelValue:t.ordersData.user.address,"onUpdate:modelValue":s[8]||(s[8]=l=>t.ordersData.user.address=l),rules:"min:10|required"},null,8,["class","modelValue"]),Ve,o(d,{name:"住址",class:"invalid-feedback"})])]),e("div",ye,[Ie,e("div",ke,[o(i,{name:"取件方式",modelValue:t.ordersData.user.shippingMethod,"onUpdate:modelValue":s[9]||(s[9]=l=>t.ordersData.user.shippingMethod=l),class:u(["form-select rounded-1",{"is-invalid":r.取件方式}]),id:"floatingSelect2","aria-label":"Floating label select example",rules:"required",as:"select"},{default:_(()=>[Ce,xe,Me]),_:2},1032,["modelValue","class"]),we,o(d,{name:"取件方式",class:"invalid-feedback"})]),e("div",Ue,[I(e("textarea",{class:"form-control rounded-1",placeholder:"備註",id:"floatingTextarea2",style:{height:"280px"},"onUpdate:modelValue":s[10]||(s[10]=l=>t.ordersData.user.comment=l)},null,512),[[x,t.ordersData.user.comment]]),Te])])])]),_:1},512)])):(p(),h("div",Ee,[o(V,{id:"form",ref:"form"},{default:_(({errors:r})=>[e("div",Le,[e("div",Oe,[Pe,e("div",qe,[o(i,{type:"text",class:u(["form-control rounded-1",{"is-invalid":r.主要聯繫人姓名}]),modelValue:t.user.name,"onUpdate:modelValue":s[11]||(s[11]=l=>t.user.name=l),id:"floatingInput",name:"主要聯繫人姓名",placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),Ae,o(d,{name:"主要聯繫人姓名",class:"invalid-feedback"})]),e("div",Fe,[o(i,{id:"floatingAppellation",name:"稱謂",class:u(["form-control rounded-1",{"is-invalid":r.稱謂}]),placeholder:"請選擇稱謂",rules:"required",modelValue:t.user.appellation,"onUpdate:modelValue":s[12]||(s[12]=l=>t.user.appellation=l),as:"select"},{default:_(()=>[Se,Ne,Be]),_:2},1032,["class","modelValue"]),Ye,o(d,{name:"稱謂",class:"invalid-feedback"})]),e("div",je,[o(i,{type:"text",name:"身分證字號",class:u(["form-control rounded-1",{"is-invalid":r.身分證字號}]),id:"floatingMemberId",placeholder:"請輸入身分證字號",modelValue:t.user.memberId,"onUpdate:modelValue":s[13]||(s[13]=l=>t.user.memberId=l),rules:n.verifyId},null,8,["class","modelValue","rules"]),ze,o(d,{name:"身分證字號",class:"invalid-feedback"})]),e("div",Ge,[o(i,{type:"text",name:"護照號碼",class:u(["form-control rounded-1",{"is-invalid":r.護照號碼}]),id:"floatingPassport",placeholder:"請輸入護照號碼",modelValue:t.user.passport,"onUpdate:modelValue":s[14]||(s[14]=l=>t.user.passport=l),rules:"numeric:true|length:9|required"},null,8,["class","modelValue"]),He,o(d,{name:"護照號碼",class:"invalid-feedback"})]),e("div",Je,[o(i,{type:"date",name:"生日",class:u(["form-control rounded-1",{"is-invalid":r.生日}]),id:"floatingDate",placeholder:"2024/03/08",modelValue:t.user.birthday,"onUpdate:modelValue":s[15]||(s[15]=l=>t.user.birthday=l),rules:n.isOver18},null,8,["class","modelValue","rules"]),Ke,o(d,{name:"生日",class:"invalid-feedback"})]),e("div",Qe,[o(i,{id:"floatingTel",name:"手機號碼",type:"tel",class:u(["form-control rounded-1",{"is-invalid":r.手機號碼}]),placeholder:"請輸入手機號碼",rules:n.isPhone,modelValue:t.user.tel,"onUpdate:modelValue":s[16]||(s[16]=l=>t.user.tel=l)},null,8,["class","rules","modelValue"]),Re,o(d,{name:"手機號碼",class:"invalid-feedback"})]),e("div",We,[o(i,{type:"email",name:"email",class:u(["form-control rounded-1",{"is-invalid":r.email}]),modelValue:t.user.email,"onUpdate:modelValue":s[17]||(s[17]=l=>t.user.email=l),id:"floatingEmail",placeholder:"請輸入 Email",rules:"email|required",autocomplete:"useremail"},null,8,["modelValue","class"]),Xe,o(d,{name:"email",class:"invalid-feedback"})]),e("div",Ze,[o(i,{name:"住址",type:"text",class:u(["form-control rounded-1",{"is-invalid":r.住址}]),id:"floatingAddress",placeholder:"縣市鄉鎮市區",modelValue:t.user.address,"onUpdate:modelValue":s[18]||(s[18]=l=>t.user.address=l),rules:"min:10|required"},null,8,["class","modelValue"]),$e,o(d,{name:"住址",class:"invalid-feedback"})])]),e("div",es,[ss,e("div",ts,[o(i,{name:"取件方式",modelValue:t.user.shippingMethod,"onUpdate:modelValue":s[19]||(s[19]=l=>t.user.shippingMethod=l),class:u(["form-select rounded-1",{"is-invalid":r.取件方式}]),id:"floatingSelect2","aria-label":"Floating label select example",rules:"required",as:"select"},{default:_(()=>[os,ls,as]),_:2},1032,["modelValue","class"]),rs,o(d,{name:"取件方式",class:"invalid-feedback"})]),e("div",is,[I(e("textarea",{class:"form-control rounded-1",placeholder:"備註",id:"floatingTextarea2",style:{height:"280px"},"onUpdate:modelValue":s[20]||(s[20]=l=>t.user.comment=l)},null,512),[[x,t.user.comment]]),ds])])])]),_:1},512)])),e("div",ns,[e("button",{class:"btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1",onClick:s[21]||(s[21]=(...r)=>n.backPage&&n.backPage(...r)),type:"button"}," 上一步 "),e("button",{class:"btn-square mt-4 fs-5 w-50 w-md-25",onClick:s[22]||(s[22]=(...r)=>n.orderData&&n.orderData(...r)),type:"button"}," 下一步 ")])]),o(M,{ref:"userProductModal","user-cart":t.userCart,"product-id":t.productId,"product-title":t.productTitle},null,8,["user-cart","product-id","product-title"])],64)}const _s=E(P,[["render",us]]);export{_s as default};
