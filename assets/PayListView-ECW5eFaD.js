import{U as O}from"./UserProductModal-LaajBIMH.js";import{C as y}from"./CartNavbar-fDoxZQ70.js";import{C}from"./collapse-pLpYAydK.js";import{_ as I,c,a as e,b as f,d as p,t as l,f as h,v as _,F as b,h as x,C as m,j as k,r as g,o as i,e as w}from"./index-G02QWMa0.js";const n="https://two024-south-json-server-vercel.onrender.com",M={components:{CartNavbar:y,UserProductModal:O},data(){return{cartsData:[],isOpen:!1,isOrderOpen:!1,headerCollapse:{},products:[],product:{},cartTotal:0,orderData:[],userOrderData:[],userOrderData_user:"",user:{payMethod:"信用卡"},product_id:"",userId:"",cartDataId:"",userCart:[],total:0,productId:"",productTitle:"",orderId:0}},watch:{$route(){this.headerCollapse.hide(),this.orderCollapse.hide()}},methods:{backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},toggleOpenOrder(){this.isOrderOpen=!this.isOrderOpen},forId(s,t){this.productId=s,this.productTitle=t,this.$refs.userProductModal.openModal()},getCart(){this.axios.get(`${n}/cartsData`).then(s=>{this.cartsData=s.data,this.cartsData.forEach(t=>{t.status===!1&&t.data.forEach(o=>{o.userId===this.userId&&this.userCart.push(o)})}),this.userCart.forEach(t=>{this.total+=t.final_total})}).catch(s=>{console.log(s)})},getCookie(s){const t=document.cookie.split(";");for(let o of t){const[u,a]=o.trim().split("=");if(u===s)return a}return null},deleteCartsUSerData(){this.axios.get(`${n}/carts?userId=${this.userId}`).then(s=>{s.data.map(o=>o.id).forEach(o=>{this.axios.delete(`${n}/carts/${o}`).then(u=>{}).catch(u=>{console.error(`Failed to delete cart with ID: ${o}`,u)})})}).catch(s=>{console.error("Error fetching cart IDs:",s)})},changeCartsDataStatus(){this.axios.patch(`${n}/cartsData/${this.cartDataId}`,{status:!0,orderId:this.orderId}).then(s=>{}).catch(s=>{console.log(s)})},getOrderData(){this.axios.get(`${n}/order`).then(s=>{this.orderData=s.data,this.orderData.forEach(t=>{t.user.userId===this.userId&&t.user.status===!1&&(this.userOrderData=t,this.orderId=t.id)}),this.userOrderData_user=this.userOrderData.user,this.changeCartsDataStatus()}).catch(s=>{console.log(s)})},updateOderData(){this.getOrderData(),this.deleteCartsUSerData(),this.changeCartsDataStatus(),this.orderData.forEach(s=>{if(s.user.userId===this.userId&&s.user.cartDataId===this.cartDataId){const t={name:s.user.name,email:s.user.email,tel:s.user.tel,address:s.user.address,birthday:s.user.birthday,comment:s.user.comment,shippingMethod:s.user.shippingMethod,userId:s.user.userId,cartDataId:s.user.cartDataId,status:!0,payMethod:this.user.payMethod};this.axios.patch(`${n}/order/${s.id}`,{user:t,status:!1,billStatus:!1,transportStatus:!1}).then(o=>{document.cookie=`orderId=${s.id}`,this.$router.go(0),document.cookie="cartDataId=; expires="}).catch(o=>{console.log(o)})}})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`}},mounted(){const s=this.getCookie("userId"),t=this.getCookie("cartDataId");this.userId=s*1,this.cartDataId=t*1,this.getCart(),this.getOrderData(),this.headerCollapse=new C(this.$refs.headerCollapse,{toggle:!1})}},E={class:"container py-10 py-lg-30"},S={class:"row"},U={class:"col-md-6 mx-auto pb-5 pb-lg-15"},P={class:"mb-4"},N={class:"d-grid gap-2"},V=e("br",null,null,-1),R={key:0,class:"bi bi-chevron-down"},T={key:1,class:"bi bi-chevron-up"},L={class:"collapse",id:"collapseExample",ref:"headerCollapse"},j={class:"card card-body rounded-0"},B={class:"col-12 col-md-5 col-lg-4"},F=["src","alt"],q={class:"col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between"},A={class:"mt-4 mt-md-0 mb-4"},z={class:"mb-4"},G={class:"mb-4"},H={class:"mb-4"},J=["onClick"],K={class:"mb-4"},Q={class:"d-grid gap-2"},W={key:0,class:"bi bi-chevron-down"},X={key:1,class:"bi bi-chevron-up"},Y={class:"collapse",id:"collapseOrder",ref:"orderCollapse"},Z={class:"card card-body rounded-0"},$={class:"row p-4 p-md-5"},ee={class:"col-12 col-md-5 col-lg-4"},se={class:"col-12 col-md-7 col-lg-8"},te={class:"row"},ae={class:"col-12 col-md-6 mb-4"},re=e("h3",{class:"mb-4"},"付款方式",-1),oe={class:"mb-4 d-flex"},de={class:"form-check me-4"},le=e("label",{class:"form-check-label",for:"flexRadioDefault1"}," 貨到付款",-1),ce={class:"form-check"},ie=e("label",{class:"form-check-label",for:"flexRadioDefault2"},"信用卡",-1),ne={key:0},ue=w('<label for="floatingAddress" class="fs-5 mb-4">信用卡卡號</label><div class="row g-3 d-flex mb-4"><div class="col-3 d-flex"><input type="text" class="form-control rounded-1" placeholder="4622" id="floatingAddress" aria-label="First name"></div><div class="col-3 d-flex"><input type="text" class="form-control rounded-1" placeholder="2223" aria-label="Last name"></div><div class="col-3 d-flex"><input type="text" class="form-control rounded-1" placeholder="3323" aria-label="Last name"></div><div class="col-3"><input type="text" class="form-control rounded-1" placeholder="3231" aria-label="Last name"></div></div><div class="mb-4"><label for="floatingDate" class="fs-5 mb-4">信用卡有效月年</label><input type="month" class="form-control rounded-1" id="floatingDate" placeholder="03/2024"></div><div class="mb-4"><label for="floatingDate" class="fs-5 mb-4">信用卡背後末三碼</label><input type="number" class="form-control rounded-1" id="floatingDate" placeholder="123"></div>',4),he=[ue],pe={class:"d-flex justify-content-between"},fe={class:"w-100 w-md-50 d-flex"};function _e(s,t,o,u,a,d){const v=g("CartNavbar"),D=g("UserProductModal");return i(),c(b,null,[e("div",E,[e("div",S,[e("div",U,[f(v)])]),e("div",P,[e("p",N,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[0]||(t[0]=(...r)=>d.toggleOpen&&d.toggleOpen(...r))},[p(" 總計："+l(d.thousand(a.total))+"元",1),V,p("購買清單 "),a.isOpen===!1?(i(),c("i",R)):(i(),c("i",T))])]),h(e("div",L,[e("div",j,[(i(!0),c(b,null,x(a.userCart,r=>(i(),c("div",{class:"row p-4 p-md-6",key:r.id},[e("div",B,[e("img",{src:r.product.imageUrl,alt:r.product.title,class:"img-fluid h-100"},null,8,F)]),e("div",q,[e("div",null,[e("h4",A,"套裝行程名稱："+l(r.product.title),1),e("h5",z,"單價："+l(d.thousand(r.product.price)),1),e("h5",G,"預約數量："+l(r.qty)+" 位",1),e("h5",H,"總計："+l(d.thousand(r.final_total)),1)]),e("div",null,[e("button",{type:"button",class:"btn-turquoise border-0 rounded-1",onClick:be=>d.forId(r.product.id,r.product.title)}," 查看更多 ",8,J)])])]))),128))])],512),[[_,a.isOpen]])]),e("div",K,[e("p",Q,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOrder","aria-expanded":"false","aria-controls":"collapseOrder",onClick:t[1]||(t[1]=(...r)=>d.toggleOpenOrder&&d.toggleOpenOrder(...r))},[p(" 訂單及運送資料 "),a.isOrderOpen===!1?(i(),c("i",W)):(i(),c("i",X))])]),h(e("div",Y,[e("div",Z,[e("div",$,[e("div",ee,[e("h5",null,"收件人名字："+l(a.userOrderData_user.name),1),e("h5",null,"收件人電話："+l(a.userOrderData_user.tel),1),e("h5",null,"備註："+l(a.userOrderData_user.comment),1)]),e("div",se,[e("h5",null,"收件人地址："+l(a.userOrderData_user.address),1),e("h5",null,"運送方式："+l(a.userOrderData_user.shippingMethod),1)])])])],512),[[_,a.isOrderOpen]])]),e("div",te,[e("div",ae,[re,e("div",oe,[e("div",de,[h(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",value:"貨到付款","onUpdate:modelValue":t[2]||(t[2]=r=>a.user.payMethod=r)},null,512),[[m,a.user.payMethod]]),le]),e("div",ce,[h(e("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",value:"信用卡","onUpdate:modelValue":t[3]||(t[3]=r=>a.user.payMethod=r),checked:""},null,512),[[m,a.user.payMethod]]),ie])]),a.user.payMethod==="信用卡"?(i(),c("div",ne,he)):k("",!0)])]),e("div",pe,[e("div",fe,[e("a",{class:"btn-cerulean w-100 fs-5 mt-4 me-1",onClick:t[4]||(t[4]=(...r)=>d.backPage&&d.backPage(...r)),type:"button"},"上一步"),e("a",{class:"btn-square mt-4 fs-5 w-100",type:"button",href:"#/cart/orderDone",onClick:t[5]||(t[5]=(...r)=>d.updateOderData&&d.updateOderData(...r))},"下一步")])])]),f(D,{ref:"userProductModal",userCart:a.userCart,productId:a.productId,productTitle:a.productTitle},null,8,["userCart","productId","productTitle"])],64)}const Oe=I(M,[["render",_e]]);export{Oe as default};
