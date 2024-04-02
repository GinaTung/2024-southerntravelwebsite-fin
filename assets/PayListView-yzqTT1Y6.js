import{U as N}from"./UserProductModal-0PtOSI8i.js";import{C as M}from"./CartNavbar-rOsi2WrX.js";import{C as L}from"./collapse-xtJNMuol.js";import{s as h}from"./sweetAlert-2P-e1xo-.js";import{_ as T,c,b as o,a as e,d as v,t as n,f as D,v as C,F as y,h as O,w as U,r as _,o as u,B as E,n as g,j as S}from"./index-36QR2t1j.js";const b="https://two024-south-json-server-vercel.onrender.com",P={components:{CartNavbar:M,UserProductModal:N},data(){return{activities:["帳號匯款","信用卡付款"],cartsData:[],isOpen:!1,isOrderOpen:!1,headerCollapse:{},products:[],product:{},cartTotal:0,orderData:[],userOrderData:[],userOrderData_user:"",user:{payMethod:"",cardDate:"",cardNum:"",firstNum:"",secondNum:"",thirdNum:"",fourthNum:""},product_id:"",userId:"",cartDataId:"",userCart:[],total:0,productId:"",productTitle:"",orderId:0,isLoading:!1,userCarts:[],cartsLength:0,isStatus:!1}},watch:{$route(){this.headerCollapse.hide(),this.orderCollapse.hide()}},methods:{backPage(){this.$router.go(-1),this.getCartsData()},toggleOpen(){this.isOpen=!this.isOpen},toggleOpenOrder(){this.isOrderOpen=!this.isOrderOpen},isOver(s){if(s.length===0)return"信用卡有效月年為必填";const t=parseInt(s.split("-")[0],10),d=parseInt(s.split("-")[1],10)-1,p=new Date(t,d),r=new Date;return r.setDate(1),r.setHours(0,0,0,0),p>=r?!0:"信用卡有效月年要有效狀態"},forId(s,t){this.productId=s,this.productTitle=t,this.$refs.userProductModal.openModal()},getCartsData(){this.axios.get(`${b}/cartsData`).then(s=>{this.cartsData=s.data,this.cartsData.forEach(t=>{t.status===!1&&t.data.forEach(d=>{d.userId===this.userId&&(this.userCart.push(d),this.isLoading=!1)})}),this.userCart.forEach(t=>{this.total+=t.final_total})}).catch(s=>{this.isLoading=!1,h.threeLayerCheckType("error","取得購買資料失敗")})},getCookie(s){const t=document.cookie.split(";");for(let d of t){const[p,r]=d.trim().split("=");if(p===s)return r}return null},deleteCartsUSerData(){this.axios.get(`${b}/carts?userId=${this.userId}`).then(s=>{s.data.map(d=>d.id).forEach(d=>{this.axios.delete(`${b}/carts/${d}`).then(p=>{}).catch(p=>{h.threeLayerCheckType("error","刪除已購買資料失敗")})})}).catch(s=>{h.threeLayerCheckType("error","刪除已購買資料失敗")})},changeCartsDataStatus(){this.axios.patch(`${b}/cartsData/${this.cartDataId}`,{status:!0,orderId:this.orderId}).then(()=>{}).catch(s=>{h.threeLayerCheckType("error","更新已購買資料失敗")})},getOrderData(){this.axios.get(`${b}/orders`).then(s=>{this.orderData=s.data,this.orderData.forEach(t=>{t.user.userId===this.userId&&t.user.status===!1&&(this.userOrderData=t,this.orderId=t.id)}),this.userOrderData_user=this.userOrderData.user,this.isStatus===!0&&(this.changeCartsDataStatus(),this.status=!1)}).catch(s=>{h.threeLayerCheckType("error","更新訂單資料失敗")})},updateOderData(){if(!this.user.payMethod){h.threeLayerCheckType("warning","請填寫所有必填欄位");return}if(this.user.payMethod==="信用卡付款"){if(!this.user.cardDate&&!this.user.cardNum){h.threeLayerCheckType("warning","請填寫所有必填欄位");return}if(!this.user.firstNum&&!this.user.secondNum&&!this.user.thirdNum&&!this.user.fourthNum){h.threeLayerCheckType("warning","請填寫所有必填欄位");return}}this.status=!0,this.getOrderData(),this.deleteCartsUSerData(),this.changeCartsDataStatus(),this.orderData.forEach(s=>{if(s.user.userId===this.userId&&s.user.cartDataId===this.cartDataId){const t={create_at:new Date,name:s.user.name,email:s.user.email,tel:s.user.tel,address:s.user.address,birthday:s.user.birthday,comment:s.user.comment,shippingMethod:s.user.shippingMethod,userId:s.user.userId,cartDataId:s.user.cartDataId,passport:s.user.passport,memberId:s.user.memberId,appellation:s.user.appellation,status:!1,payMethod:this.user.payMethod};this.axios.patch(`${b}/orders/${s.id}`,{user:t,status:!1,billStatus:!1,checkDataStatus:!1}).then(d=>{this.$router.push({path:"/cart/orderDone"}),document.cookie="cartDataId=; expires="}).catch(d=>{h.threeLayerCheckType("error","更新訂單資料失敗")})}})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`}},mounted(){window.scrollTo(0,0);const s=this.getCookie("userId"),t=this.getCookie("cartDataId");this.userId=s*1,this.cartDataId=t*1,this.isLoading=!0,this.getCartsData(),this.getOrderData(),this.headerCollapse=new L(this.$refs.headerCollapse,{toggle:!1})}},F={class:"container py-10 py-lg-30"},B={class:"row"},j={class:"col-md-6 mx-auto pb-5 pb-lg-15"},q={class:"mb-4"},z={class:"d-grid gap-2"},A=e("br",null,null,-1),H={key:0,class:"bi bi-chevron-down"},R={key:1,class:"bi bi-chevron-up"},G={class:"collapse",id:"collapseExample",ref:"headerCollapse"},J={class:"card card-body rounded-0"},K={class:"col-12 col-md-5 col-lg-4"},Q=["src","alt"],W={class:"col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between"},X={class:"mt-4 mt-md-0 mb-4"},Y={class:"mb-4"},Z={class:"mb-4"},$={class:"mb-4"},ee=["onClick"],se={class:"mb-4"},te={class:"d-grid gap-2"},re={key:0,class:"bi bi-chevron-down"},ae={key:1,class:"bi bi-chevron-up"},oe={class:"collapse",id:"collapseOrder",ref:"orderCollapse"},le={class:"card card-body rounded-0"},de={class:"row p-4 p-md-5"},ie={class:"col-12 col-md-6 col-lg-6"},ne={class:"col-12 col-md-6 col-lg-6"},ce={class:"row"},ue={class:"col-12 col-md-6 mb-4"},he=e("h3",{class:"mb-4"},"付款方式",-1),pe={class:"form-check mb-4 ps-0"},me=["value"],fe={class:"radio-label pe-5 fs-5"},_e={key:0},ge=e("label",{for:"floatingAddress",class:"fs-5 mb-4"},"信用卡卡號",-1),be={class:"row g-3 d-flex mb-4"},ve={class:"col-3 d-flex flex-column"},De={class:"col-3 d-flex flex-column"},ye={class:"col-3 d-flex flex-column"},Ce={class:"col-3 d-flex flex-column"},Oe={class:"mb-4"},ke=e("label",{for:"floatingDate",class:"fs-5 mb-4"},"信用卡有效月年",-1),Ie={class:"mb-4"},xe=e("label",{for:"floatingDate",class:"fs-5 mb-4"},"信用卡背後末三碼",-1),we={class:"d-flex justify-content-between"};function Ve(s,t,d,p,r,i){const k=_("VueLoading"),I=_("CartNavbar"),m=_("VeeField"),f=_("ErrorMessage"),x=_("VeeForm"),w=_("UserProductModal");return u(),c(y,null,[o(k,{active:r.isLoading,class:"text-center","z-index":1060},null,8,["active"]),e("div",F,[e("div",B,[e("div",j,[o(I)])]),e("div",q,[e("p",z,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[0]||(t[0]=(...a)=>i.toggleOpen&&i.toggleOpen(...a))},[v(" 總計："+n(i.thousand(r.total))+"元",1),A,v("購買清單 "),r.isOpen===!1?(u(),c("i",H)):(u(),c("i",R))])]),D(e("div",G,[e("div",J,[(u(!0),c(y,null,O(r.userCart,a=>(u(),c("div",{class:"row p-4 p-md-6",key:a.id},[e("div",K,[e("img",{src:a.product.imageUrl,alt:a.product.title,class:"img-fluid h-100"},null,8,Q)]),e("div",W,[e("div",null,[e("h4",X,"套裝行程名稱："+n(a.product.title),1),e("h5",Y,"單價："+n(i.thousand(a.product.price)),1),e("h5",Z,"預約數量："+n(a.qty)+" 位",1),e("h5",$,"總計："+n(i.thousand(a.final_total)),1)]),e("div",null,[e("button",{type:"button",class:"btn-turquoise border-0 rounded-1",onClick:l=>i.forId(a.product.id,a.product.title)}," 查看更多 ",8,ee)])])]))),128))])],512),[[C,r.isOpen]])]),e("div",se,[e("p",te,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOrder","aria-expanded":"false","aria-controls":"collapseOrder",onClick:t[1]||(t[1]=(...a)=>i.toggleOpenOrder&&i.toggleOpenOrder(...a))},[v(" 訂單資料及收件方式 "),r.isOrderOpen===!1?(u(),c("i",re)):(u(),c("i",ae))])]),D(e("div",oe,[e("div",le,[e("div",de,[e("div",ie,[e("h5",null,"主要聯繫人名字："+n(r.userOrderData_user.name),1),e("h5",null,"主要聯繫人電話："+n(r.userOrderData_user.tel),1),e("h5",null,"主要聯繫人身分證字號："+n(r.userOrderData_user.memberId),1),e("h5",null,"主要聯繫人護照號碼："+n(r.userOrderData_user.passport),1)]),e("div",ne,[e("h5",null,"主要聯繫人地址："+n(r.userOrderData_user.address),1),e("h5",null,"收取方式："+n(r.userOrderData_user.shippingMethod),1),e("h5",null,"備註："+n(r.userOrderData_user.comment),1)])])])],512),[[C,r.isOrderOpen]])]),o(x,{id:"form",ref:"form"},{default:U(({errors:a})=>[e("div",ce,[e("div",ue,[he,e("div",pe,[(u(!0),c(y,null,O(r.activities,l=>(u(),c("label",{class:"radio is-inline",key:l},[D(e("input",{type:"radio",value:l,class:"radio-input me-1",rules:"required",name:"activity","onUpdate:modelValue":t[2]||(t[2]=V=>r.user.payMethod=V)},null,8,me),[[E,r.user.payMethod]]),e("span",fe,n(l),1)]))),128))]),r.user.payMethod==="信用卡付款"?(u(),c("div",_e,[ge,e("div",be,[e("div",ve,[o(m,{name:"first",type:"text",class:g(["form-control rounded-1",{"is-invalid":a.first}]),placeholder:"4622",id:"first",modelValue:r.user.firstNum,"onUpdate:modelValue":t[3]||(t[3]=l=>r.user.firstNum=l),"aria-label":"First",rules:"numeric:true|length:4"},null,8,["class","modelValue"]),o(f,{name:"first",class:"invalid-feedback mt-4"})]),e("div",De,[o(m,{name:"second",type:"text",class:g(["form-control rounded-1",{"is-invalid":a.second}]),placeholder:"2223","aria-label":"second",modelValue:r.user.secondNum,"onUpdate:modelValue":t[4]||(t[4]=l=>r.user.secondNum=l),id:"second",rules:"numeric:true|length:4"},null,8,["class","modelValue"]),o(f,{name:"second",class:"invalid-feedback mt-4"})]),e("div",ye,[o(m,{name:"third",type:"text",class:g(["form-control rounded-1",{"is-invalid":a.third}]),placeholder:"2223",modelValue:r.user.thirdNum,"onUpdate:modelValue":t[5]||(t[5]=l=>r.user.thirdNum=l),"aria-label":"third",id:"third",rules:"numeric:true|length:4"},null,8,["class","modelValue"]),o(f,{name:"third",class:"invalid-feedback mt-4"})]),e("div",Ce,[o(m,{name:"fourth",type:"text",class:g(["form-control rounded-1",{"is-invalid":a.fourth}]),placeholder:"2223",modelValue:r.user.fourthNum,"onUpdate:modelValue":t[6]||(t[6]=l=>r.user.fourthNum=l),"aria-label":"fourth",id:"fourth",rules:"numeric:true|length:4"},null,8,["class","modelValue"]),o(f,{name:"fourth",class:"invalid-feedback mt-4"})])]),e("div",Oe,[ke,o(m,{type:"month",name:"floatingDate",class:g(["form-control rounded-1",{"is-invalid":a.floatingDate}]),id:"floatingDate",placeholder:"03/2024",modelValue:r.user.cardDate,"onUpdate:modelValue":t[7]||(t[7]=l=>r.user.cardDate=l),rules:i.isOver},null,8,["class","modelValue","rules"]),o(f,{name:"floatingDate",class:"invalid-feedback"})]),e("div",Ie,[xe,o(m,{type:"number",name:"信用卡背後末三碼",class:g(["form-control rounded-1",{"is-invalid":a.信用卡背後末三碼}]),id:"floatingNum",placeholder:"123",rules:"numeric:true|length:3"},null,8,["class"]),o(f,{name:"信用卡背後末三碼",class:"invalid-feedback"})])])):S("",!0)])])]),_:1},512),e("div",we,[e("button",{class:"btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1",onClick:t[8]||(t[8]=(...a)=>i.backPage&&i.backPage(...a)),type:"button"}," 上一步 "),e("button",{class:"btn-square mt-4 fs-5 w-50 w-md-25",type:"button",onClick:t[9]||(t[9]=(...a)=>i.updateOderData&&i.updateOderData(...a))}," 下一步 ")])]),o(w,{ref:"userProductModal",userCart:r.userCart,productId:r.productId,productTitle:r.productTitle},null,8,["userCart","productId","productTitle"])],64)}const Ee=T(P,[["render",Ve]]);export{Ee as default};
