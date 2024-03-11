import{_ as b,c,a as t,F as u,h,t as o,b as m,w as y,e as f,r as x,o as l,f as g,i as w,j as C,d as D}from"./index-poWyBIhc.js";const p="https://two024-south-json-server-vercel.onrender.com",v={data(){return{id:"",title:"",category:"",status:{addCartLoading:"",carteQtyLoading:""},cart:[],cartId:null,products:[],enabledProducts:[],newCart:[],product_id:""}},methods:{thousand(e){return e!==void 0&&(e=e.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${e}`},getCart(){this.axios.get(`${p}/carts`).then(e=>{this.cart=e.data,this.cart.forEach(s=>{s.id===this.cartId&&(this.cart=s)}),this.combineCart(),this.product_id=this.cart.data.product_id}).catch(e=>{console.log(e)})},getCookie(e){const r=`; ${document.cookie}`.split(`; ${e}=`);if(r.length===2)return r.pop().split(";").shift()},getProducts(){this.axios.get(`${p}/products`).then(e=>{this.products=e.data,this.combineCart()}).catch(e=>{console.log(e)})},combineCart(){this.products.forEach(e=>{if(e.id===this.cart.data.product_id){const s={...this.cart.data,product:e};this.newCart.push({cartData:s})}})},incrementQuantity(){this.newCart.cartData.qty<10&&(this.newCart.cartData.qty+=1)},decrementQuantity(){this.newCart.cartData.qty>3&&(this.newCart.cartData.qty-=1)},checkMaxValue(){this.newCart.cartData.qty>10&&(this.newCart.cartData.qty=10),this.newCart.cartData.qty<3&&(this.newCart.cartData.qty=3)}},mounted(){this.getCart(),this.getProducts(),this.cartId=this.getCookie("cartId")*1}},k={class:"container py-10 py-lg-30"},q=f('<div class="row"><div class="col-md-6 mx-auto pb-5 pb-lg-15"><ol class="pay-list mt-5 d-flex justify-content-between list-unstyled pe-0 position-relative"><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center number-active mb-0"> 1 </p><p class="fw-bold mb-0">確認行程</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0">2</p><p class="fw-bold mb-0">訂單資料</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0">3</p><p class="fw-bold mb-0">付款資料</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0">4</p><p class="fw-bold mb-0">訂單完成</p></li></ol></div></div>',1),V={class:"table align-middle"},j=t("thead",null,[t("tr",null,[t("th",{style:{width:"100px"}}),t("th",{style:{width:"150px"}},"圖片"),t("th",null,"行程名稱"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{style:{width:"100px"}},"單價"),t("th",{class:"text-end",style:{width:"100px"}},"小計")])],-1),Q=t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm"}," x ")],-1),I=["src"],N={class:"input-group input-group-sm"},B={class:"input-group my-3"},L=["disabled"],M=t("i",{class:"bi bi-dash-lg"},null,-1),P=[M],E={key:1,type:"button",class:"btn btn-outline-danger",style:{"padding-left":"10px","padding-right":"10px"}},F=t("i",{class:"bi bi-trash"},null,-1),S=[F],T=["onUpdate:modelValue"],U=t("i",{class:"bi bi-plus-lg"},null,-1),$=[U],z={class:"text-end"},A=t("td",{colspan:"5",class:"text-end text-success"},"預約",-1),G={class:"text-end text-success"},H=t("td",{colspan:"5",class:"text-end"},"總計",-1),J={key:0,class:"text-end"},K={class:"d-flex"},O=t("div",{class:"w-50"},null,-1),R={class:"w-50 d-flex"},W=t("a",{class:"btn-outline-square w-100 fs-5 mt-4 me-1",href:"/TouristPackage",type:"button"},"繼續預約",-1);function X(e,s,r,Y,d,i){const _=x("router-link");return l(),c("div",k,[q,t("table",V,[j,t("tbody",null,[(l(!0),c(u,null,h(d.newCart,a=>(l(),c("tr",{key:a.id},[Q,t("td",null,[t("img",{src:a.cartData.product.imageUrl,alt:"",class:"img-fluid"},null,8,I)]),t("td",null,o(a.cartData.product.title),1),t("td",null,[t("div",N,[t("div",B,[a.cartData.qty>3?(l(),c("button",{key:0,class:"btn btn-outline-primary",type:"button",disabled:a.cartData.qty===3,onClick:s[0]||(s[0]=(...n)=>i.decrementQuantity&&i.decrementQuantity(...n))},P,8,L)):(l(),c("button",E,S)),g(t("input",{min:"3",max:"10",type:"number",class:"form-control text-end","onUpdate:modelValue":n=>a.cartData.qty=n,onInput:s[1]||(s[1]=(...n)=>i.checkMaxValue&&i.checkMaxValue(...n))},null,40,T),[[w,a.cartData.qty]]),t("button",{class:"btn btn-outline-primary",type:"button",onClick:s[2]||(s[2]=(...n)=>i.incrementQuantity&&i.incrementQuantity(...n))},$)])])]),t("td",null,"$ "+o(a.cartData.price),1),t("td",z," $ "+o(a.cartData.total),1)]))),128))]),t("tfoot",null,[t("tr",null,[A,t("td",G,o(d.newCart.length)+" 項行程",1)]),(l(!0),c(u,null,h(d.newCart,(a,n)=>(l(),c("tr",{key:a.id},[H,n===0?(l(),c("td",J,o(i.thousand(a.cartData.total)),1)):C("",!0)]))),128))])]),t("div",K,[O,t("div",R,[W,m(_,{class:"btn-square mt-4 fs-5 w-100",type:"button",to:"/cart/CartForm"},{default:y(()=>[D("下一步")]),_:1})])])])}const tt=b(v,[["render",X]]);export{tt as default};