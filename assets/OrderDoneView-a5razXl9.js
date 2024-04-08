import{U as y}from"./UserProductModal-Az8zyzrl.js";import{C as x}from"./CartNavbar-cmhgR0W2.js";import{C as g}from"./collapse-vx3Icrve.js";import{s as n}from"./sweetAlert-lpmHvYNK.js";import{_ as k,c,b as u,a as e,d as h,t as o,f as m,v as b,F as f,h as I,n as w,r as p,o as i}from"./index-z8o9rejW.js";const _="https://two024-south-json-server-vercel.onrender.com",D={components:{CartNavbar:x,UserProductModal:y},data(){return{userId:"",total:0,cartsData:[],userCart:[],isOpen:!0,isOrderOpen:!0,headerCollapse:{},products:[],product:{},cartTotal:0,orderData:[],userOrder:"",product_id:"",productId:"",productTitle:"",orderId:0,isLoading:!1}},watch:{$route(){this.headerCollapse.hide(),this.orderCollapse.hide()}},methods:{goHome(){this.$router.push("/")},backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},toggleOpenOrder(){this.isOrderOpen=!this.isOrderOpen},forId(r,s){this.productId=r,this.productTitle=s,this.$refs.userProductModal.openModal()},getOderData(){this.axios.get(`${_}/orders`).then(r=>{this.orderData=r.data,this.orderData.forEach(s=>{s.user.userId===this.userId&&s.status===!1&&(this.userOrder=s.user)})}).catch(r=>{n.threeLayerCheckType("error","取得訂單資料失敗")})},getCartsData(){this.axios.get(`${_}/cartsData`).then(r=>{this.cartsData=r.data,this.cartsData.forEach(s=>{s.orderStatus===!1&&s.orderId===this.orderId&&s.data.forEach(l=>{l.userId===this.userId&&(this.userCart.push(l),this.isLoading=!1)})}),this.userCart.forEach(s=>{this.total+=s.final_total})}).catch(r=>{n.threeLayerCheckType("error","取得填寫資料內容失敗"),this.isLoading=!1})},getCookie(r){const l=`; ${document.cookie}`.split(`; ${r}=`);if(l.length===2)return l.pop().split(";").shift()},getCart(){this.axios.get(`${_}/carts`).then(r=>{this.userCarts=r.data.filter(s=>s.userId===this.userId),this.cartsLength=this.userCarts.length,this.userCarts.length===0?this.$emitter.emit("updateCartNum",0):this.$emitter.emit("updateCartNum",this.userCarts.length)}).catch(r=>{n.threeLayerCheckType("error","取得購物車資料失敗")})},thousand(r){return r!==void 0&&(r=r.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${r}`}},mounted(){this.isLoading=!0,window.scrollTo(0,0);const r=this.getCookie("userId");this.userId=r*1;const s=this.getCookie("orderId");this.orderId=s*1,setTimeout(()=>{document.cookie="orderId=; expires="},3e3),this.getOderData(),this.getCartsData(),this.headerCollapse=new g(this.$refs.headerCollapse,{toggle:!1}),this.orderCollapse=new g(this.$refs.orderCollapse,{toggle:!1}),this.getCart(),setTimeout(()=>{this.orderId||(n.threeLayerCheckType("warning","網頁停留過久，為您轉至首頁"),this.$router.push({path:"/"}))},1e4)}},T={class:"container py-10 py-lg-30"},L={class:"row"},E={class:"col-md-6 mx-auto pb-5 pb-lg-15"},M=e("div",{class:"text-center mb-10"},[e("div",{class:"text-center"},[e("i",{class:"bi bi-check-circle-fill text-success fs-3 text-center"}),e("p",{class:"fs-4 text-center"},"感謝您！您的訂單已建立完成")])],-1),N={class:"row"},P={class:"mb-4"},U={class:"d-grid gap-2"},V=e("br",null,null,-1),B={key:0,class:"bi bi-chevron-down"},S={key:1,class:"bi bi-chevron-up"},j={class:"collapse show",id:"collapseExample",ref:"headerCollapse"},q={class:"card card-body rounded-0"},z={class:"col-12 col-md-5 col-lg-4"},F=["src","alt"],H={class:"col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between"},A={class:"mt-4 mt-md-0 mb-4"},G={class:"mb-4"},J={class:"mb-4"},K={class:"mb-4"},Q=["onClick"],R={class:"mb-4 col-12"},W={class:"d-grid gap-2"},X=e("br",null,null,-1),Y={key:0,class:"bi bi-chevron-down"},Z={key:1,class:"bi bi-chevron-up"},$={class:"collapse show",id:"collapseOrder",ref:"orderCollapse"},ee={class:"card card-body rounded-0"},se={class:"row p-4 p-md-10"},te={class:"col-12 col-md-6 col-lg-6"},re={class:"mb-4"},oe={class:"mb-4"},de={class:"mb-4"},ae={class:"mb-4"},ce={class:"mb-4"},ie={class:"col-12 col-md-6 col-lg-6"},le={class:"mb-4"},ne={class:"mb-4"},he={class:"mb-4"},ue={class:"d-flex justify-content-center"},pe={class:"w-100 w-md-25"};function _e(r,s,l,ge,t,a){const C=p("VueLoading"),O=p("CartNavbar"),v=p("UserProductModal");return i(),c(f,null,[u(C,{active:t.isLoading,class:"text-center","z-index":1060},null,8,["active"]),e("div",T,[e("div",L,[e("div",E,[u(O)])]),M,e("div",N,[e("div",P,[e("p",U,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:s[0]||(s[0]=(...d)=>a.toggleOpen&&a.toggleOpen(...d))},[h(" 總計："+o(a.thousand(t.total))+"元",1),V,h("購買清單 "),t.isOpen===!1?(i(),c("i",B)):(i(),c("i",S))])]),m(e("div",j,[e("div",q,[(i(!0),c(f,null,I(t.userCart,d=>(i(),c("div",{class:"row p-4 p-md-10",key:d.id},[e("div",z,[e("img",{src:d.product.imageUrl,alt:d.product.title,class:"img-fluid h-100"},null,8,F)]),e("div",H,[e("div",null,[e("h4",A,"套裝行程名稱："+o(d.product.title),1),e("h5",G,"單價："+o(a.thousand(d.product.price)),1),e("h5",J,"預約數量："+o(d.qty)+" 位",1),e("h5",K,"總計："+o(a.thousand(d.final_total)),1)]),e("div",null,[e("button",{type:"button",class:"btn-turquoise border-0 rounded-1",onClick:me=>a.forId(d.product.id,d.product.title)}," 查看更多 ",8,Q)])])]))),128))])],512),[[b,t.isOpen]])]),e("div",R,[e("p",W,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOrder","aria-expanded":"true","aria-controls":"collapseOrder",onClick:s[1]||(s[1]=(...d)=>a.toggleOpenOrder&&a.toggleOpenOrder(...d))},[h(" 訂單資料及收件方式"),X,t.isOrderOpen===!1?(i(),c("i",Y)):(i(),c("i",Z))])]),m(e("div",$,[e("div",ee,[e("div",se,[e("div",te,[e("h5",re," 主要聯繫人名字："+o(t.userOrder.name)+" "+o(t.userOrder.appellation==="female"?"女士":"男士"),1),e("h5",oe,"主要聯繫人電話："+o(t.userOrder.tel),1),e("h5",de,"主要聯繫人身分證字號："+o(t.userOrder.memberId),1),e("h5",ae,"主要聯繫人護照號碼："+o(t.userOrder.passport),1),e("h5",ce,"主要聯繫人地址："+o(t.userOrder.address),1)]),e("div",ie,[e("h5",le,"收取方式："+o(t.userOrder.shippingMethod),1),e("h5",ne,"付款方式："+o(t.userOrder.payMethod),1),e("h5",he,[h(" 付款狀態： "),e("span",{class:w({"text-danger":t.userOrder.status===!1,"text-success":t.userOrder.status===!0})},o(t.userOrder.status?"已付款":"未付款"),3)]),e("h5",null,"備註："+o(t.userOrder.comment),1)])])])],512),[[b,t.isOrderOpen]])])]),e("div",ue,[e("div",pe,[e("button",{class:"btn-square mt-4 fs-5 w-100",type:"button",onClick:s[2]||(s[2]=d=>a.goHome())},"回首頁")])])]),u(v,{ref:"userProductModal",userCart:t.userCart,productId:t.productId,productTitle:t.productTitle},null,8,["userCart","productId","productTitle"])],64)}const ye=k(D,[["render",_e]]);export{ye as default};
