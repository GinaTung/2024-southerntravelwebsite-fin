import{_ as v,c as l,F as u,h as g,a as s,n as f,A as x,o as c,t as h,j as b,b as C,w as P,d as w,r as T}from"./index-8CZ7-rvQ.js";const _="https://two024-south-json-server-vercel.onrender.com",y={data(){return{pageTotal:0,currentPage:1,limitPage:5,parsedLinks:"",products:[],user:"",newProductsDes:"",enabledProducts:[],carts:[],quantity:1,newQty:"",userId:"",token:"",newCarts:[],cartId:null,userCarts:[]}},methods:{getProducts(e=1){this.axios.get(`${_}/products?_limit=${this.limitPage}&_page=${e}`).then(t=>{var o=parseInt(t.headers["x-total-count"]);this.pageTotal=Math.ceil(o/this.limitPage),this.parsedLinks=this.parseLinkHeader(t.headers.link),this.currentPage=e,this.products=t.data,this.enabledProducts=[],this.products.forEach(n=>{n.is_enabled===1&&this.enabledProducts.push(n)}),this.getNewText()}).catch(t=>{alert(`${t.message}`)})},parseLinkHeader(e){const t=e.split(", "),o={};return t.forEach(n=>{const[a,i]=n.split("; "),d=/<(.*)>/.exec(a)[1],m=/rel="(.*)"/.exec(i)[1];o[m]=d}),o},thousand(e){return e!==void 0&&(e=e.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${e}`},truncateContent(e,t){return e&&e.length>t?e.substring(0,t)+"...":e},getNewText(){const e={};this.products.forEach(t=>{t.description&&t.description.split(";").forEach(n=>{const a=n.trim();e[t.id]||(e[t.id]=[]),e[t.id].push(a)})}),this.newProductsDes=Object.entries(e).map(([t,o])=>({id:t,descriptions:o}))},addToCart(e,t=1,o){if(console.log(e,t,o),!this.token)alert("請登入會員後，才能預約套裝行程");else{console.log(this.newCarts);let n=!1,a=1;this.newCarts.forEach(i=>{i.productId===e&&i.id&&(n=!0,this.cartId=i.id)}),n?this.axios.put(`${_}/carts/${this.cartId}`,{productId:e,qty:t,price:o,total:t*o,userId:this.userId,final_total:t*o*a}).then(i=>{alert("已更新預約人數"),this.getCart(),this.$router.go(0)}).catch(i=>{alert("更新預約人數失敗")}):this.axios.post(`${_}/carts`,{productId:e,qty:t,price:o,total:t*o,userId:this.userId,final_total:t*o*a}).then(i=>{alert("已預約成功"),this.getCart(),this.$router.go(0)}).catch(i=>{alert("預約失敗，再重新登入預約")})}},getCart(){this.axios.get(`${_}/carts`).then(e=>{this.carts=e.data,this.carts.forEach(t=>{t.userId===this.userId&&this.newCarts.push(t)})}).catch(e=>{alert("取得購物車資料失敗")})},getCookie(e){const t=document.cookie.split(";");for(let o of t){const[n,a]=o.trim().split("=");if(n===e)return a}return null}},mounted(){this.getProducts();const e=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=e*1,this.token=t,this.getCart()}},E={class:"row g-0"},N={class:"col-md-4"},M={class:"tag text-white"},j={class:"card-att-img h-100"},D=["src","alt"],L={class:"col-md-8"},R={class:"card h-100 border-0 bg-transparent"},S={class:"card-body px-3 px-md-4"},V=s("div",{class:"heart3"},[s("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),B={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-8"},U={class:"d-flex mb-4"},A={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},F={class:"row"},H={class:"col-12 col-sm-8 my-2"},z={key:0},O={class:"col-12 col-sm-4"},Q={class:"d-flex flex-column"},$={class:"fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end"},G={class:"d-flex flex-sm-column align-items-end justify-content-end"},I=s("p",{class:"text-danger fw-bold d-none d-sm-block"},"促銷價",-1),J={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},K=s("div",{class:"col-12"},null,-1),W={class:"card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4"},X={class:"d-flex align-items-end"},Y=["onClick"],Z={"aria-label":"Page navigation example",class:"my-10"},q={class:"pagination justify-content-center"},tt=["value","onClick"],et={class:"page-item"};function st(e,t,o,n,a,i){const k=T("router-link");return c(),l(u,null,[(c(!0),l(u,null,g(a.enabledProducts,r=>(c(),l("div",{class:"card mb-4 card-att",key:r.id},[s("div",E,[s("div",N,[s("span",M,h(r.category),1),s("div",j,[s("img",{src:r.imageUrl,class:"card-img-top img-fluid",alt:r.title},null,8,D)])]),s("div",L,[s("div",R,[s("div",S,[V,s("h4",B,h(r.title),1),s("div",U,[s("span",A,h(r.tag_2),1)]),s("div",F,[s("div",H,[(c(!0),l(u,null,g(a.newProductsDes,d=>(c(),l("div",{key:d.id},[d.id===r.id?(c(),l("div",z,[(c(!0),l(u,null,g(d.descriptions,p=>(c(),l("p",{key:p},h(i.truncateContent(p,85)),1))),128))])):b("",!0)]))),128))]),s("div",O,[s("div",Q,[s("p",$," NT"+h(i.thousand(r.origin_price)),1),s("div",G,[I,s("p",J," NT"+h(i.thousand(r.price)),1)])])])]),K]),s("div",W,[s("div",X,[C(k,{to:{name:"TouristSinglePackage",params:{category:r.category,title:r.title}},class:"btn-outline-square w-100 me-2 px-2 px-md-3",type:"button"},{default:P(()=>[w("行程介紹")]),_:2},1032,["to"]),s("a",{class:"btn-square w-100 ms-2 px-2 px-md-3",onClick:d=>i.addToCart(r.id,a.quantity,r.price),type:"button"},"預約套裝行程",8,Y)])])])])])]))),128)),s("nav",Z,[s("ul",q,[s("li",{class:f(["page-item",{disabled:!a.currentPage||a.currentPage===1}])},[s("a",{class:"page-link page-link-radius-2",href:"",onClick:t[0]||(t[0]=x(r=>i.getProducts(a.currentPage-1),["prevent"]))},"上一頁")],2),(c(!0),l(u,null,g(a.pageTotal,r=>(c(),l("li",{class:"page-item",key:r+123},[s("a",{class:f(["page-link page-link-0 rounded-0",{active:r===a.currentPage}]),href:"",value:r,onClick:x(d=>i.getProducts(r),["prevent"])},h(r),11,tt)]))),128)),s("li",et,[s("a",{class:f(["page-link page-link-radius",{disabled:!a.currentPage||a.currentPage===a.pageTotal}]),href:"",onClick:t[1]||(t[1]=x(r=>i.getProducts(a.currentPage+1),["prevent"]))},"下一頁",2)])])])],64)}const ot=v(y,[["render",st]]);export{ot as default};
