import{_ as k,c,F as g,t as _,e as v,o as d,a as s,x as h,A as y,b as m,w as x,d as b,r as C}from"./index-BvFTTdWZ.js";const u="https://two024-south-json-server-vercel.onrender.com",w={data(){return{text:"南部旅遊方案",products:[],user:"",newProductsDes:"",enabledProducts:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[],newProductsContent:"",enabledProducts:[],carts:[],quantity:3,newQty:"",newCarts:[],cartId:null}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?(console.log(token,user),this.axios.post(`${u}/api/users/${user}`).then(t=>{this.userIsLoggedIn=!0}).catch(t=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})})):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getProducts(){this.axios.get(`${u}/products`).then(t=>{this.products=t.data,this.products.forEach(e=>{e.is_enabled===1&&this.enabledProducts.push(e)}),this.getNewText()}).catch(t=>{alert(`${t.message}`)})},thousand(t){return t!==void 0&&(t=t.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${t}`},truncateContent(t,e){return t&&t.length>e?t.substring(0,e)+"...":t},getNewText(){const t={};this.products.forEach(e=>{e.description&&e.description.split(";").forEach(l=>{const o=l.trim();t[e.id]||(t[e.id]=[]),t[e.id].push(o)})}),this.newProductsDes=Object.entries(t).map(([e,n])=>({id:e,descriptions:n}))},searchProducts(){this.axios.get(`${u}/products?category=嘉義`).then(t=>{this.products=t.data,this.products.forEach(e=>{e.is_enabled===1&&this.searchChiayi.push(e)})}).catch(t=>{alert(`${t.message}`)})},isProductInCart(t){return this.carts.some(e=>e.product.id===t)},addToCart(t,e,n){this.getCart();const l={product_id:t,qty:e,price:n,total:e*n},o=this.cartId;if(this.isProductInCart(t)){const a=this.carts.find(r=>r.product.id===t);a.order.qty+=e,a.order.total=a.order.qty*n,this.quantity=a.order.qty,this.axios.put(`${u}/carts/${a.id}`,{data:{...a.order,cartId:o}}).then(r=>{this.newCarts=r.data,this.cartId=this.newCarts.id,this.saveCardId(),this.$router.go("/cart")}).catch(r=>{alert(`${r.response}`)})}else this.axios.post(`${u}/carts?_embed=products`,{data:{...l,cartId:o}}).then(a=>{this.products.forEach(r=>{r.id===l.product_id&&this.carts.push({id:a.data.id,order:l,product:r})}),this.newCarts=a.data,this.cartId=this.newCarts.id,this.saveCardId(),this.$router.go("/cart")}).catch(a=>{console.log(a)})},saveCardId(){document.cookie=`cartId=${this.newCarts.id}; path=/;`},getCart(){this.axios.get(`${u}/carts`).then(t=>{}).catch(t=>{alert(`${t}`)})}},mounted(){this.searchProducts(),this.getProducts()}},$={class:"row g-0"},P={class:"col-md-4"},T={class:"tag text-white"},N={class:"card-att-img h-100"},q=["src","alt"],E={class:"col-md-8"},S={class:"card h-100 border-0 bg-transparent"},V={class:"card-body px-3 px-md-4"},D=s("div",{class:"heart3"},[s("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),j={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-8"},B={class:"d-flex mb-4"},I={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},A={class:"row"},F={class:"col-12 col-sm-8 my-2"},L={key:0},z={class:"col-12 col-sm-4"},K={class:"d-flex flex-column"},M={class:"fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end"},O={class:"d-flex flex-sm-column align-items-end justify-content-end"},Q=s("p",{class:"text-danger fw-bold d-none d-sm-block"},"促銷價",-1),U={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},G=s("div",{class:"col-12"},null,-1),H={class:"card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4"},J={class:"d-flex align-items-end"},R=v('<nav aria-label="Page navigation example " class="my-10"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link page-link-radius-2">Previous</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">1</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">2</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">3</a></li><li class="page-item"><a class="page-link page-link-radius" href="#">Next</a></li></ul></nav>',1);function W(t,e,n,l,o,a){const r=C("router-link");return d(),c(g,null,[(d(!0),c(g,null,_(o.searchChiayi,i=>(d(),c("div",{class:"card mb-4 card-att",key:i.id},[s("div",$,[s("div",P,[s("span",T,h(i.category),1),s("div",N,[s("img",{src:i.imageUrl,class:"card-img-top img-fluid",alt:i.title},null,8,q)])]),s("div",E,[s("div",S,[s("div",V,[D,s("h4",j,h(i.title),1),s("div",B,[s("span",I,h(i.tag_2),1)]),s("div",A,[s("div",F,[(d(!0),c(g,null,_(o.newProductsDes,p=>(d(),c("div",{key:p.id},[p.id===i.id?(d(),c("div",L,[(d(!0),c(g,null,_(p.descriptions,f=>(d(),c("p",{key:f},h(a.truncateContent(f,85)),1))),128))])):y("",!0)]))),128))]),s("div",z,[s("div",K,[s("p",M,"NT"+h(a.thousand(i.origin_price)),1),s("div",O,[Q,s("p",U,"NT"+h(a.thousand(i.price)),1)])])])]),G]),s("div",H,[s("div",J,[m(r,{to:{name:"TouristSinglePackage",params:{category:i.category,title:i.title}},class:"btn-outline-square w-100 me-2 px-2 px-md-3",type:"button"},{default:x(()=>[b("行程介紹")]),_:2},1032,["to"]),m(r,{class:"btn-square w-100 ms-2 px-2 px-md-3",onClick:p=>a.addToCart(i.id,o.quantity,i.price),to:"/cart",type:"button"},{default:x(()=>[b("預約套裝行程")]),_:2},1032,["onClick"])])])])])])]))),128)),R],64)}const Y=k(w,[["render",W]]);export{Y as default};
