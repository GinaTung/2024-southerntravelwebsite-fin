import{U as y}from"./UserProductModal-FutebRDi.js";import{C as x}from"./CartNavbar-z6i6m1Fw.js";import{C as m}from"./collapse-1PVe-KBa.js";import{s as n}from"./sweetAlert-TFFmnPge.js";import{_ as k,c,b as u,a as e,d as h,t as o,f as b,v as f,F as C,h as w,n as D,r as p,o as i,p as T,i as L}from"./index-LkcBEWKG.js";import"./modal-CbDtcA5G.js";import"./selector-engine-4YKqj-6M.js";const _="https://two024-south-json-server-vercel.onrender.com",E={components:{CartNavbar:x,UserProductModal:y},data(){return{userId:"",total:0,cartsData:[],userCart:[],isOpen:!0,isOrderOpen:!0,headerCollapse:{},products:[],product:{},cartTotal:0,orderData:[],userOrder:"",product_id:"",productId:"",productTitle:"",orderId:0,isLoading:!1}},watch:{$route(){this.headerCollapse.hide(),this.orderCollapse.hide()}},methods:{goHome(){this.$router.push("/")},backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},toggleOpenOrder(){this.isOrderOpen=!this.isOrderOpen},forId(s,t){this.productId=s,this.productTitle=t,this.$refs.userProductModal.openModal()},getOderData(){this.axios.get(`${_}/orders`).then(s=>{this.orderData=s.data,this.orderData.forEach(t=>{t.user.userId===this.userId&&t.status===!1&&(this.userOrder=t.user)})}).catch(s=>{n.threeLayerCheckType("error","取得訂單資料失敗")})},getCartsData(){this.axios.get(`${_}/cartsData`).then(s=>{this.cartsData=s.data,this.cartsData.forEach(t=>{t.orderStatus===!1&&t.orderId===this.orderId&&t.data.forEach(l=>{l.userId===this.userId&&(this.userCart.push(l),this.isLoading=!1)})}),this.userCart.forEach(t=>{this.total+=t.final_total})}).catch(s=>{n.threeLayerCheckType("error","取得填寫資料內容失敗"),this.isLoading=!1})},getCookie(s){const l=`; ${document.cookie}`.split(`; ${s}=`);if(l.length===2)return l.pop().split(";").shift()},getCart(){this.axios.get(`${_}/carts`).then(s=>{this.userCarts=s.data.filter(t=>t.userId===this.userId),this.cartsLength=this.userCarts.length,this.userCarts.length===0?this.$emitter.emit("updateCartNum",0):this.$emitter.emit("updateCartNum",this.userCarts.length)}).catch(s=>{n.threeLayerCheckType("error","取得購物車資料失敗")})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`}},mounted(){this.isLoading=!0,window.scrollTo(0,0);const s=this.getCookie("userId");this.userId=s*1;const t=this.getCookie("orderId");this.orderId=t*1,setTimeout(()=>{document.cookie="orderId=; expires="},3e3),this.getOderData(),this.getCartsData(),this.headerCollapse=new m(this.$refs.headerCollapse,{toggle:!1}),this.orderCollapse=new m(this.$refs.orderCollapse,{toggle:!1}),this.getCart(),setTimeout(()=>{this.orderId||(n.threeLayerCheckType("warning","網頁停留過久，為您轉至首頁"),this.$router.push({path:"/"}))},1e4)}},g=s=>(T("data-v-2bd012cd"),s=s(),L(),s),M={class:"container py-10 py-lg-30"},N={class:"row"},S={class:"col-md-6 mx-auto pb-5 pb-lg-15"},P=g(()=>e("div",{class:"text-center mb-10"},[e("div",{class:"text-center"},[e("i",{class:"bi bi-check-circle-fill text-success fs-3 text-center"}),e("p",{class:"fs-4 text-center"},"感謝您！您的訂單已建立完成")])],-1)),U={class:"row"},V={class:"mb-4"},B={class:"d-grid gap-2"},j=g(()=>e("br",null,null,-1)),q={key:0,class:"bi bi-chevron-down"},z={key:1,class:"bi bi-chevron-up"},F={class:"collapse show",id:"collapseExample",ref:"headerCollapse"},H={class:"card card-body rounded-0"},A={class:"col-12 col-md-5 col-lg-4"},G=["src","alt"],J={class:"col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between"},K={class:"mt-4 mt-md-0 mb-4"},Q={class:"mb-4"},R={class:"mb-4"},W={class:"mb-4"},X=["onClick"],Y={class:"mb-4 col-12"},Z={class:"d-grid gap-2"},$=g(()=>e("br",null,null,-1)),ee={key:0,class:"bi bi-chevron-down"},se={key:1,class:"bi bi-chevron-up"},te={class:"collapse show",id:"collapseOrder",ref:"orderCollapse"},re={class:"card card-body rounded-0"},oe={class:"row p-4 p-md-10"},de={class:"col-12 col-md-6 col-lg-6"},ae={class:"mb-4"},ce={class:"mb-4"},ie={class:"mb-4"},le={class:"mb-4"},ne={class:"mb-4"},he={class:"col-12 col-md-6 col-lg-6"},ue={class:"mb-4"},pe={class:"mb-4"},_e={class:"mb-4"},ge={class:"d-flex justify-content-center"},me={class:"w-100 w-md-25"};function be(s,t,l,fe,r,a){const O=p("VueLoading"),v=p("CartNavbar"),I=p("UserProductModal");return i(),c(C,null,[u(O,{active:r.isLoading,class:"text-center","z-index":1060},null,8,["active"]),e("div",M,[e("div",N,[e("div",S,[u(v)])]),P,e("div",U,[e("div",V,[e("p",B,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[0]||(t[0]=(...d)=>a.toggleOpen&&a.toggleOpen(...d))},[h(" 總計："+o(a.thousand(r.total))+"元",1),j,h("購買清單 "),r.isOpen===!1?(i(),c("i",q)):(i(),c("i",z))])]),b(e("div",F,[e("div",H,[(i(!0),c(C,null,w(r.userCart,d=>(i(),c("div",{class:"row p-4 p-md-10",key:d.id},[e("div",A,[e("img",{src:d.product.imageUrl,alt:d.product.title,class:"img-fluid h-100"},null,8,G)]),e("div",J,[e("div",null,[e("h4",K,"套裝行程名稱："+o(d.product.title),1),e("h5",Q,"單價："+o(a.thousand(d.product.price)),1),e("h5",R,"預約數量："+o(d.qty)+" 位",1),e("h5",W,"總計："+o(a.thousand(d.final_total)),1)]),e("div",null,[e("button",{type:"button",class:"btn-turquoise border-0 rounded-1",onClick:Ce=>a.forId(d.product.id,d.product.title)}," 查看更多 ",8,X)])])]))),128))])],512),[[f,r.isOpen]])]),e("div",Y,[e("p",Z,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOrder","aria-expanded":"true","aria-controls":"collapseOrder",onClick:t[1]||(t[1]=(...d)=>a.toggleOpenOrder&&a.toggleOpenOrder(...d))},[h(" 訂單資料及收件方式"),$,r.isOrderOpen===!1?(i(),c("i",ee)):(i(),c("i",se))])]),b(e("div",te,[e("div",re,[e("div",oe,[e("div",de,[e("h5",ae," 主要聯繫人名字："+o(r.userOrder.name)+" "+o(r.userOrder.appellation==="female"?"女士":"男士"),1),e("h5",ce,"主要聯繫人電話："+o(r.userOrder.tel),1),e("h5",ie,"主要聯繫人身分證字號："+o(r.userOrder.memberId),1),e("h5",le,"主要聯繫人護照號碼："+o(r.userOrder.passport),1),e("h5",ne,"主要聯繫人地址："+o(r.userOrder.address),1)]),e("div",he,[e("h5",ue,"收取方式："+o(r.userOrder.shippingMethod),1),e("h5",pe,"付款方式："+o(r.userOrder.payMethod),1),e("h5",_e,[h(" 付款狀態： "),e("span",{class:D({"text-danger":r.userOrder.status===!1,"text-success":r.userOrder.status===!0})},o(r.userOrder.status?"已付款":"未付款"),3)]),e("h5",null,"備註："+o(r.userOrder.comment),1)])])])],512),[[f,r.isOrderOpen]])])]),e("div",ge,[e("div",me,[e("button",{class:"btn-square mt-4 fs-5 w-100",type:"button",onClick:t[2]||(t[2]=d=>a.goHome())},"回首頁")])])]),u(I,{ref:"userProductModal",userCart:r.userCart,productId:r.productId,productTitle:r.productTitle},null,8,["userCart","productId","productTitle"])],64)}const De=k(E,[["render",be],["__scopeId","data-v-2bd012cd"]]);export{De as default};