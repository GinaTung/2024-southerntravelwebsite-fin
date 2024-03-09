import{C as u}from"./collapse-QBxVAZ5R.js";import{_ as f,c as i,a as e,d as r,x as l,f as g,v as _,b as m,w as b,e as v,r as x,o as n}from"./index-sZdYG2qq.js";const p="http://localhost:3000",O={data(){return{text:123,cartId:0,cart:[],isOpen:!1,isOrderOpen:!1,headerCollapse:{},products:[],product:{},cartTotal:0,shoppingData:[],user:{payMethod:"creditCard"}}},watch:{$route(){this.headerCollapse.hide(),this.orderCollapse.hide()}},methods:{backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},toggleOpenOrder(){this.isOrderOpen=!this.isOrderOpen},getProducts(){this.axios.get(`${p}/products`).then(t=>{this.products=t.data,this.products.forEach(o=>{o.id===this.cart.data.product_id&&(this.product=o)})}).catch(t=>{console.log(t)})},getCart(){this.axios.get(`${p}/carts`).then(t=>{this.cart=t.data,this.cart.forEach(o=>{o.id===this.cartId&&(this.cart=o)}),this.cartTotal=this.cart.data.total}).catch(t=>{console.log(t)})},getCookie(t){const d=`; ${document.cookie}`.split(`; ${t}=`);if(d.length===2)return d.pop().split(";").shift()},getOrderData(){this.axios.get(`${p}/order?user.cartId=${this.cartId}`).then(t=>{this.shoppingData=t.data[0].user}).catch(t=>{console.log(t)})},thousand(t){return t!==void 0&&(t=t.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${t}`}},mounted(){this.cartId=this.getCookie("cartId")*1,document.cookie?this.getCart():alert("目前購物車無資料，請加入預約行程"),this.getProducts(),this.getOrderData(),this.headerCollapse=new u(this.$refs.headerCollapse,{toggle:!1}),this.orderCollapse=new u(this.$refs.orderCollapse,{toggle:!1})}},y={class:"container py-10 py-lg-30"},w=v('<div class="row"><div class="col-md-6 mx-auto pb-5 pb-lg-15"><ol class="pay-list mt-5 d-flex justify-content-between list-unstyled pe-0 position-relative"><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center number-active mb-0"> 1 </p><p class="fw-bold mb-0">確認行程</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0 number-active"> 2 </p><p class="fw-bold mb-0">訂單資料</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0 number-active"> 3 </p><p class="fw-bold mb-0">付款資料</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0 number-active"> 4 </p><p class="fw-bold mb-0">訂單完成</p></li></ol></div></div>',1),C={class:"mb-4"},k={class:"d-grid gap-2"},D=e("br",null,null,-1),j={key:0,class:"bi bi-chevron-down"},E={key:1,class:"bi bi-chevron-up"},I={class:"collapse",id:"collapseExample",ref:"headerCollapse"},P={class:"card card-body rounded-0"},T={class:"row p-10"},V={class:"col-12 col-md-4"},B=["src","alt"],N={class:"col-12 col-md-8"},S={class:"mb-4"},q={class:"mb-4"},M={class:"mb-4"},U={class:"mb-4"},z={class:"d-grid gap-2"},A={key:0,class:"bi bi-chevron-down"},F={key:1,class:"bi bi-chevron-up"},G={class:"collapse",id:"collapseOrder",ref:"orderCollapse"},H={class:"card card-body rounded-0"},J={class:"row p-10"},K={class:"col-12 col-md-5"},L={class:"col-12 col-md-7"},Q={class:"d-flex justify-content-between"},R={class:"w-25"},W={class:"w-25"};function X(t,o,d,Y,s,c){const h=x("router-link");return n(),i("div",y,[w,e("div",C,[e("p",k,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:o[0]||(o[0]=(...a)=>c.toggleOpen&&c.toggleOpen(...a))},[r(" 總計："+l(s.cartTotal)+"元",1),D,r("購買清單 "),s.isOpen===!1?(n(),i("i",j)):(n(),i("i",E))])]),g(e("div",I,[e("div",P,[e("div",T,[e("div",V,[e("img",{src:s.product.imageUrl,alt:s.product.title,class:"img-fluid h-100"},null,8,B)]),e("div",N,[e("h3",S,"套裝行程名稱："+l(s.product.title),1),e("h3",q,"單價："+l(c.thousand(s.product.price)),1),e("h3",M,"總計："+l(c.thousand(s.cartTotal)),1),m(h,{to:{path:"/TouristPackage/"+s.product.category+"/"+s.product.title},class:"btn-square px-2 px-md-3 w-50",type:"button"},{default:b(()=>[r("查看更多")]),_:1},8,["to"])])])])],512),[[_,s.isOpen]])]),e("div",U,[e("p",z,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOrder","aria-expanded":"false","aria-controls":"collapseOrder",onClick:o[1]||(o[1]=(...a)=>c.toggleOpenOrder&&c.toggleOpenOrder(...a))},[r(" 訂單及運送資料 "),s.isOrderOpen===!1?(n(),i("i",A)):(n(),i("i",F))])]),g(e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("h5",null,"收件人名字："+l(s.shoppingData.name),1),e("h5",null,"收件人電話："+l(s.shoppingData.tel),1),e("h5",null,"備註："+l(s.shoppingData.comment),1)]),e("div",L,[e("h5",null,"收件人地址："+l(s.shoppingData.address),1),e("h5",null,"運送方式："+l(s.shoppingData.shippingMethod),1)])])])],512),[[_,s.isOrderOpen]])]),e("div",Q,[e("div",R,[e("a",{class:"btn-cerulean w-100 fs-5 mt-4 me-1",onClick:o[2]||(o[2]=(...a)=>c.backPage&&c.backPage(...a)),type:"button"},"上一步")]),e("div",W,[m(h,{class:"btn-square mt-4 fs-5 w-100",type:"button",to:"/"},{default:b(()=>[r("回首頁")]),_:1})])])])}const ee=f(O,[["render",X]]);export{ee as default};
