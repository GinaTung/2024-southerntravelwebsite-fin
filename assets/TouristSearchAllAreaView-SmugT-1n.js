import{_ as x,c as l,F as u,h as g,e as k,o as n,a as e,t as d,j as m,b,w as v,d as w,r as C}from"./index-CXBFrQdm.js";const _="https://two024-south-json-server-vercel.onrender.com",y={data(){return{text:"南部旅遊方案",products:[],user:"",newProductsDes:"",enabledProducts:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[],enabledProducts:[],carts:[],quantity:1,newQty:"",userId:"",token:"",newCarts:[],cartId:null,userCarts:[]}},methods:{getProducts(){this.axios.get(`${_}/products`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&this.enabledProducts.push(t)}),this.getNewText()}).catch(s=>{alert(`${s.message}`)})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`},truncateContent(s,t){return s&&s.length>t?s.substring(0,t)+"...":s},getNewText(){const s={};this.products.forEach(t=>{t.description&&t.description.split(";").forEach(c=>{const r=c.trim();s[t.id]||(s[t.id]=[]),s[t.id].push(r)})}),this.newProductsDes=Object.entries(s).map(([t,a])=>({id:t,descriptions:a}))},addToCart(s,t=1,a){if(console.log(s,t,a),!this.token)alert("請登入會員後，才能預約套裝行程");else{console.log(this.newCarts);let c=!1,r=1;this.newCarts.forEach(o=>{o.productId===s&&o.id&&(c=!0,this.cartId=o.id)}),c?this.axios.put(`${_}/carts/${this.cartId}`,{productId:s,qty:t,price:a,total:t*a,userId:this.userId,final_total:t*a*r}).then(o=>{alert("已更新預約人數"),this.getCart(),this.$router.go(0)}).catch(o=>{alert("更新預約人數失敗")}):this.axios.post(`${_}/carts`,{productId:s,qty:t,price:a,total:t*a,userId:this.userId,final_total:t*a*r}).then(o=>{alert("已預約成功"),this.getCart(),this.$router.go(0)}).catch(o=>{alert("預約失敗，再重新登入預約")})}},getCart(){this.axios.get(`${_}/carts`).then(s=>{this.carts=s.data,this.carts.forEach(t=>{t.userId===this.userId&&this.newCarts.push(t)})}).catch(s=>{alert("取得購物車資料失敗")})},getCookie(s){const t=document.cookie.split(";");for(let a of t){const[c,r]=a.trim().split("=");if(c===s)return r}return null}},mounted(){this.getProducts();const s=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=s*1,this.token=t,this.getCart()}},T={class:"row g-0"},P={class:"col-md-4"},N={class:"tag text-white"},$={class:"card-att-img h-100"},E=["src","alt"],S={class:"col-md-8"},V={class:"card h-100 border-0 bg-transparent"},j={class:"card-body px-3 px-md-4"},D=e("div",{class:"heart3"},[e("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),B={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-8"},U={class:"d-flex mb-4"},A={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},F={class:"row"},K={class:"col-12 col-sm-8 my-2"},M={key:0},O={class:"col-12 col-sm-4"},Q={class:"d-flex flex-column"},z={class:"fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end"},G={class:"d-flex flex-sm-column align-items-end justify-content-end"},H=e("p",{class:"text-danger fw-bold d-none d-sm-block"},"促銷價",-1),J={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},L=e("div",{class:"col-12"},null,-1),R={class:"card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4"},W={class:"d-flex align-items-end"},X=["onClick"],Y=k('<nav aria-label="Page navigation example " class="my-10"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link page-link-radius-2">Previous</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">1</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">2</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">3</a></li><li class="page-item"><a class="page-link page-link-radius" href="#">Next</a></li></ul></nav>',1);function Z(s,t,a,c,r,o){const f=C("router-link");return n(),l(u,null,[(n(!0),l(u,null,g(r.enabledProducts,i=>(n(),l("div",{class:"card mb-4 card-att",key:i.id},[e("div",T,[e("div",P,[e("span",N,d(i.category),1),e("div",$,[e("img",{src:i.imageUrl,class:"card-img-top img-fluid",alt:i.title},null,8,E)])]),e("div",S,[e("div",V,[e("div",j,[D,e("h4",B,d(i.title),1),e("div",U,[e("span",A,d(i.tag_2),1)]),e("div",F,[e("div",K,[(n(!0),l(u,null,g(r.newProductsDes,h=>(n(),l("div",{key:h.id},[h.id===i.id?(n(),l("div",M,[(n(!0),l(u,null,g(h.descriptions,p=>(n(),l("p",{key:p},d(o.truncateContent(p,85)),1))),128))])):m("",!0)]))),128))]),e("div",O,[e("div",Q,[e("p",z,"NT"+d(o.thousand(i.origin_price)),1),e("div",G,[H,e("p",J,"NT"+d(o.thousand(i.price)),1)])])])]),L]),e("div",R,[e("div",W,[b(f,{to:{name:"TouristSinglePackage",params:{category:i.category,title:i.title}},class:"btn-outline-square w-100 me-2 px-2 px-md-3",type:"button"},{default:v(()=>[w("行程介紹")]),_:2},1032,["to"]),e("a",{class:"btn-square w-100 ms-2 px-2 px-md-3",onClick:h=>o.addToCart(i.id,r.quantity,i.price),type:"button"},"預約套裝行程",8,X)])])])])])]))),128)),Y],64)}const q=x(y,[["render",Z]]);export{q as default};
