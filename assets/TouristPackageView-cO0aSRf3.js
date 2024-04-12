import{B as L}from"./BannerBlock-HrGWs6MI.js";import{s as h}from"./sweetAlert-luc2_RVj.js";import{_ as S,c,b as x,a as s,w as C,h as F,m as y,t as d,k as w,F as p,i as v,n as f,r as D,o as i,d as b,p as N,f as B,e as E}from"./index-5d4CZgDN.js";const g="https://two024-south-json-server-vercel.onrender.com",j={components:{BannerBlock:L},data(){return{products:[],user:"",userId:"",token:"",carts:[],newCarts:[],newProductsDes:"",enabledProducts:[],fullPath:"",currentURL:"",productsCategory:[],selectedCategory:"全部",currentDate:"",currentPage:1,limitPage:5,pageTotal:0,isLoading:!1,status:{loadingItem:"",loadingItem2:""},category:"全部",cartsLength:0,heartData:[],isFavorite:{}}},watch:{$route(e,t){this.currentURL=e.fullPath,this.$root.navigatedFromHeader&&e.fullPath!=="/TouristPackage"&&(this.selectedCategory="全部",this.status.loadingItem=!0,this.getProducts(),this.$root.navigatedFromHeader=!1)}},computed:{filterCategory(){const e=this.productsCategory.map(o=>o.category),t=[...new Set(e)];return t.unshift("全部"),t},filterCateNum(){const e={};return this.productsCategory.forEach(t=>{e[t.category]?e[t.category]+=1:e[t.category]=1}),e.全部=this.productsCategory.length,e},filteredProducts(){return this.selectedCategory==="全部"||!this.selectedCategory?this.enabledProducts:this.enabledProducts.filter(e=>e.category===this.selectedCategory)}},created(){this.category=this.$route.query.category,this.selectedCategory=this.category,this.getProducts()},methods:{getProducts(e=1){this.axios.get(`${g}/products`).then(t=>{this.productsCategory=t.data.filter(o=>o.is_enabled===1),setTimeout(()=>{this.isLoading=!1},1e3)}).catch(t=>{h.threeLayerCheckType("error","取得產品資料失敗")}),this.selectedCategory==="全部"||!this.selectedCategory?this.axios.get(`${g}/products?_limit=${this.limitPage}&_page=${e}`).then(t=>{var o=parseInt(t.headers["x-total-count"]);this.pageTotal=Math.ceil(o/this.limitPage),this.currentPage=e,this.products=t.data,this.getNewText(),this.enabledProducts=this.products.filter(l=>l.is_enabled===1),this.status.loadingItem=!1,this.$router.push({path:"/TouristPackage",query:{category:this.selectedCategory,page:this.currentPage}}),window.scrollTo(0,0)}).catch(t=>{h.threeLayerCheckType("error","取得全部產品資料失敗")}):this.axios.get(`${g}/products?category=${this.selectedCategory}&_limit=${this.limitPage}&_page=${e}`).then(t=>{var o=parseInt(t.headers["x-total-count"]);this.pageTotal=Math.ceil(o/this.limitPage),this.currentPage=e,this.products=t.data,this.getNewText(),this.enabledProducts=this.products.filter(l=>l.is_enabled===1),this.status.loadingItem=!1,this.$router.push({path:"/TouristPackage",query:{category:this.selectedCategory,page:this.currentPage}}),window.scrollTo(0,0)}).catch(t=>{h.threeLayerCheckType("error","取得區域產品資料失敗")})},filterProducts(e){this.selectedCategory=e,this.status.loadingItem=!0,this.getProducts()},checkDate(){var e=new Date,t={year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate()},o=(t.month<10?"0":"")+t.month,l=(t.date<10?"0":"")+t.date,r=t.year+"-"+o+"-"+l;this.currentDate=r},getHeartData(){this.axios.get(`${g}/hearts`).then(e=>{e.data.forEach(t=>{t.userId===this.userId&&t.tag==="旅遊方案"&&(this.isFavorite[t.product]=!0)})}).catch(e=>{h.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(e,t,o,l){this.token?this.axios.get(`${g}/hearts`).then(r=>{const n=r.data.find(u=>u.product===e&&u.userId===this.userId&&u.tag==="旅遊方案");n?this.axios.delete(`${g}/hearts/${n.id}`).then(u=>{this.isFavorite[e]=!1,h.threeLayerCheckType("success",`取消收藏 ${o} 成功`),this.getHeartData()}).catch(u=>{h.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${g}/hearts`,{product:e,category:t,title:o,userId:this.userId,tag:"旅遊方案",imageUrl:l}).then(u=>{this.isFavorite[e]=!0,h.threeLayerCheckType("success",`已加入收藏 ${o} 成功`),this.getHeartData()}).catch(u=>{h.threeLayerCheckType("error","收藏資料失敗")})}).catch(r=>{h.threeLayerCheckType("error","取得愛心收藏資料失敗")}):h.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},thousand(e){return e!==void 0&&(e=e.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${e}`},truncateContent(e,t){return e&&e.length>t?e.substring(0,t)+"...":e},getNewText(){const e={};this.products.forEach(t=>{t.description&&t.description.split(";").forEach(l=>{const r=l.trim();e[t.id]||(e[t.id]=[]),e[t.id].push(r)})}),this.newProductsDes=Object.entries(e).map(([t,o])=>({id:t,descriptions:o}))},getCart(){this.axios.get(`${g}/carts`).then(e=>{this.carts=e.data,this.carts.forEach(l=>{l.userId===this.userId&&this.newCarts.push(l)});const t=[],o=new Set;this.newCarts.forEach(l=>{o.has(l.productId)||(o.add(l.productId),t.push(l))}),this.newCarts=t,this.cartsLength=this.newCarts.length,this.$emitter.emit("updateCart",this.cartsLength)}).catch(e=>{h.threeLayerCheckType("error","取得購物車資料失敗")})},addToCart(e,t=1,o){if(this.status.loadingItem2=e,!this.token)h.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程"),this.status.loadingItem2="";else{let l=!1,r=1;this.newCarts.forEach(n=>{n.productId===e&&n.id&&(l=!0,this.cartId=n.id)}),l?this.axios.put(`${g}/carts/${this.cartId}`,{productId:e,qty:t,price:o,total:t*o,userId:this.userId,final_total:t*o*r}).then(n=>{this.status.loadingItem2="",h.threeLayerCheckType("success","已更新預約人數"),this.getCart()}).catch(n=>{this.status.loadingItem2="",h.threeLayerCheckType("error","更新預約人數失敗")}):this.axios.post(`${g}/carts`,{productId:e,qty:t,price:o,total:t*o,userId:this.userId,final_total:t*o*r}).then(n=>{this.status.loadingItem2="",h.threeLayerCheckType("success","已預約成功"),this.getCart()}).catch(n=>{this.status.loadingItem2="",h.threeLayerCheckType("error","預約失敗，再重新登入預約")})}},getCookie(e){const t=document.cookie.split(";");for(let o of t){const[l,r]=o.trim().split("=");if(l===e)return r}return null}},mounted(){this.isLoading=!0,this.getProducts(),window.scrollTo(0,0);const e=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=e*1,this.token=t,this.getCart(),this.checkDate(),this.getHeartData(),this.fullPath=this.$route.fullPath}},P=e=>(N("data-v-e7b20211"),e=e(),B(),e),U={class:"container py-10 py-lg-30"},H={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},I={class:"breadcrumb mb-0 fs-5"},V={class:"breadcrumb-item"},M={class:"breadcrumb-item","aria-current":"page"},q={key:1},z={key:0,class:"breadcrumb-item","aria-current":"page"},R={class:"tourist-list"},A={class:"row"},G={class:"col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex"},O={class:"border-1 border w-100 rounded-1 h-100"},Y=P(()=>s("p",{class:"fs-4 p-5 bg-primary-500 text-white"},"地區篩選",-1)),$={class:"nav flex-column"},J=["onClick"],K={class:"col-12 col-lg-9"},Q=E('<div class="row g-0" data-v-e7b20211><div class="col-md-4" data-v-e7b20211><span class="tag text-white placeholder-glow" data-v-e7b20211></span><div class="card-att-img h-100" data-v-e7b20211><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25" alt="Placeholder Image" data-v-e7b20211></div></div><div class="col-md-8" data-v-e7b20211><div class="card h-100 border-0 bg-transparent" data-v-e7b20211><div class="card-body px-3 px-md-4" data-v-e7b20211><button class="heart border-0" data-v-e7b20211><i class="bi bi-heart" data-v-e7b20211></i></button><h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-10 placeholder w-60" data-v-e7b20211></h4><div class="d-flex flex-column" data-v-e7b20211><span class="placeholder w-25" data-v-e7b20211></span></div><div class="row" data-v-e7b20211><div class="col-12 col-md-8 my-2 placeholder-glow" data-v-e7b20211><span class="placeholder w-100" data-v-e7b20211></span><span class="placeholder w-100" data-v-e7b20211></span><span class="placeholder w-100" data-v-e7b20211></span><span class="placeholder w-75 mt-3" data-v-e7b20211></span><span class="placeholder w-75 mt-3" data-v-e7b20211></span></div><div class="col-12 col-md-4 my-2 text-end placeholder-glow" data-v-e7b20211><span class="placeholder w-100" data-v-e7b20211></span><span class="placeholder w-75" data-v-e7b20211></span><span class="placeholder w-100" data-v-e7b20211></span></div></div></div><div class="card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4 placeholder-glow" data-v-e7b20211><div class="d-flex" data-v-e7b20211><span class="placeholder w-50 me-2" data-v-e7b20211></span><span class="placeholder w-50 ms-2" data-v-e7b20211></span></div></div></div></div></div>',1),W=[Q],X={key:0,class:"text-center",style:{margin:"150px"}},Z=P(()=>s("div",{class:"spinner-border",role:"status",style:{width:"3rem",height:"3rem",color:"#43b8bd"}},[s("span",{class:"visually-hidden"},"Loading...")],-1)),ee=[Z],te={key:1},se={class:"row g-0"},ae={class:"col-md-4"},re={class:"tag text-white"},ie={class:"card-att-img h-100"},oe=["src","alt"],ce={class:"col-md-8"},ne={class:"card h-100 border-0 bg-transparent"},le={class:"card-body px-3 px-md-4"},de=["onClick"],he={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-10"},ge={class:"d-flex mb-4"},ue={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},pe={class:"row"},_e={class:"col-12 col-md-8 my-2"},ve={key:0},ye={class:"col-12 col-md-4"},fe={class:"d-flex flex-column"},be={class:"fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end"},me={class:"d-flex flex-md-column align-items-end justify-content-end justify-content-sm-between justify-content-md-end"},ke=P(()=>s("p",{class:"text-danger fw-bold d-none d-md-block"},"促銷價",-1)),xe={class:"d-sm-flex flex-sm-column d-none d-md-none"},Ce={key:0,class:"fs-7 fs-sm-6 text-dark2"},we={key:1,class:"fs-7 fs-sm-6 text-danger"},Pe={key:2,class:"fs-7 fs-sm-6 text-dark2"},Te={key:3,class:"fs-6 text-danger"},De={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},Le={class:"col-12 d-none d-md-flex flex-md-column"},Se={key:0,class:"fs-6 text-dark2"},Fe={key:1,class:"fs-6 text-danger"},Ne={key:2,class:"fs-6 text-dark2"},Be={key:3,class:"fs-6 text-danger"},Ee={class:"card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4"},je={class:"d-flex align-items-end"},Ue=["onClick"],He={key:0,class:"spinner-border spinner-grow-sm",role:"status"},Ie={key:1,class:"btn btn-danger w-100 ms-2 px-2 px-md-3 py-2 disabled btn-danger-rounded",type:"button"},Ve={"aria-label":"Page navigation example",class:"my-10"},Me={class:"pagination justify-content-center"},qe=["onClick"];function ze(e,t,o,l,r,n){const u=D("BannerBlock"),k=D("router-link");return i(),c(p,null,[x(u),s("div",U,[s("nav",H,[s("ol",I,[s("li",V,[x(k,{to:"/",exact:"","active-class":"active-link"},{default:C(()=>[b(" 首頁 ")]),_:1})]),s("li",M,[r.selectedCategory!=="全部"?(i(),F(k,{key:0,exact:"","active-class":"active-link",to:{path:"/TouristPackage",query:{category:"全部",page:"1"}},onClick:t[0]||(t[0]=y(a=>n.filterProducts("全部"),["prevent"]))},{default:C(()=>[b(" 南部旅遊方案 ")]),_:1})):(i(),c("span",q," 南部旅遊方案 "))]),r.selectedCategory!=="全部"?(i(),c("li",z,[s("span",null,d(r.selectedCategory),1)])):w("",!0)])]),s("div",R,[s("div",A,[s("div",G,[s("div",O,[Y,s("ul",$,[(i(!0),c(p,null,v(n.filterCategory,(a,m)=>(i(),c("li",{class:"nav-item",key:m},[s("a",{class:f(["nav-link p-5 fs-5 link-color d-flex justify-content-between",{"active-category":r.selectedCategory===a}]),href:"#","aria-current":"page",onClick:y(_=>n.filterProducts(a),["prevent"])},[b(d(a)+" ",1),s("span",null,d(n.filterCateNum[a]),1)],10,J)]))),128))])])]),s("div",K,[r.isLoading?(i(),c(p,{key:0},v(3,a=>s("div",{class:"card mb-4 card-att",key:a},W)),64)):(i(),c(p,{key:1},[r.status.loadingItem?(i(),c("div",X,ee)):(i(),c("div",te,[(i(!0),c(p,null,v(n.filteredProducts,(a,m)=>(i(),c("div",{class:"card mb-4 card-att",key:m+123},[s("div",se,[s("div",ae,[s("span",re,d(a.category),1),s("div",ie,[s("img",{src:a.imageUrl,class:"card-img-top img-fluid",alt:a.title,style:{"border-radius":"calc(1.25rem - 1px)"}},null,8,oe)])]),s("div",ce,[s("div",ne,[s("div",le,[s("button",{class:"heart border-0",onClick:_=>n.toggleFavorite(a.id,a.category,a.title,a.imageUrl),type:"button"},[s("i",{class:f(["bi",{"bi-heart-fill":r.isFavorite[a.id],"bi-heart":!r.isFavorite[a.id]}]),style:{"font-size":"24px"}},null,2)],8,de),s("h4",he,d(a.title),1),s("div",ge,[s("span",ue,d(a.tag_2),1)]),s("div",pe,[s("div",_e,[(i(!0),c(p,null,v(r.newProductsDes,_=>(i(),c("div",{key:_.id},[_.id===a.id?(i(),c("div",ve,[(i(!0),c(p,null,v(_.descriptions,T=>(i(),c("p",{key:T},d(n.truncateContent(T,85)),1))),128))])):w("",!0)]))),128))]),s("div",ye,[s("div",fe,[s("p",be," NT"+d(n.thousand(a.origin_price)),1),s("div",me,[ke,s("div",xe,[r.currentDate<=a.endDate?(i(),c("p",Ce," 預約："+d(a.startDate)+" ~ "+d(a.endDate),1)):(i(),c("p",we,"預約時間已截止")),r.currentDate<=a.endDate?(i(),c("p",Pe," 出遊："+d(a.goStartDate)+" ~ "+d(a.goEndDate),1)):(i(),c("p",Te,"已出遊完成"))]),s("p",De," NT"+d(n.thousand(a.price)),1)])])])]),s("div",Le,[r.currentDate<=a.endDate?(i(),c("p",Se," 預約時間："+d(a.startDate)+" ~ "+d(a.endDate),1)):(i(),c("p",Fe,"預約時間已截止")),r.currentDate<=a.endDate?(i(),c("p",Ne," 出遊時間："+d(a.goStartDate)+" ~ "+d(a.goEndDate),1)):(i(),c("p",Be,"已出遊完成"))])]),s("div",Ee,[s("div",je,[x(k,{to:{name:"TouristSinglePackage",params:{category:a.category,title:a.title}},class:"btn-outline-square w-100 me-2 px-2 px-md-3"},{default:C(()=>[b("行程介紹")]),_:2},1032,["to"]),r.currentDate<=a.endDate?(i(),c("button",{key:0,class:"btn-square w-100 ms-2 px-2 px-md-3",onClick:_=>n.addToCart(a.id,e.quantity,a.price),type:"button"},[r.status.loadingItem2===a.id?(i(),c("span",He)):w("",!0),b(" 立即預約旅遊方案 ")],8,Ue)):(i(),c("button",Ie," 預約時間截止 "))])])])])])]))),128)),s("nav",Ve,[s("ul",Me,[s("li",{class:f(["page-item",{disabled:!r.currentPage||r.currentPage===1}])},[s("button",{class:"page-link page-link-radius-2",onClick:t[1]||(t[1]=y(a=>r.currentPage>1&&n.getProducts(r.currentPage-1),["prevent"]))}," 上一頁 ")],2),(i(!0),c(p,null,v(r.pageTotal,a=>(i(),c("li",{class:"page-item",key:`page-${a}`},[s("button",{class:f(["page-link page-link-0 rounded-0",{active:a===r.currentPage}]),onClick:y(m=>n.getProducts(a),["prevent"])},d(a),11,qe)]))),128)),s("li",{class:f(["page-item",{disabled:!r.currentPage||r.currentPage===r.pageTotal}])},[s("button",{class:"page-link page-link-radius",onClick:t[2]||(t[2]=y(a=>r.currentPage<r.pageTotal&&n.getProducts(r.currentPage+1),["prevent"]))}," 下一頁 ")],2)])])]))],64))])])])])],64)}const Oe=S(j,[["render",ze],["__scopeId","data-v-e7b20211"]]);export{Oe as default};
