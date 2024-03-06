import{_ as k,a as c,F as g,x as _,f as v,o as n,b as e,z as h,A as y,d as x,w as m,e as b,r as w}from"./index-3YyzOM4j.js";const u="https://two024-south-json-server-vercel.onrender.com",C={data(){return{text:"南部旅遊方案",products:[],user:"",newProductsDes:"",enabledProducts:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[],enabledProducts:[],carts:[],quantity:3,newQty:"",newCarts:[],cartId:null}},computed:{totalPrice(){return this.carts.reduce((t,s)=>t+s.order.price*s.order.qty,0)}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?(console.log(token,user),this.axios.post(`${u}/api/users/${user}`).then(t=>{this.userIsLoggedIn=!0}).catch(t=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})})):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getProducts(){this.axios.get(`${u}/products`).then(t=>{this.products=t.data,this.products.forEach(s=>{s.is_enabled===1&&this.enabledProducts.push(s)}),this.getNewText()}).catch(t=>{alert(`${t.message}`)})},thousand(t){return t!==void 0&&(t=t.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${t}`},truncateContent(t,s){return t&&t.length>s?t.substring(0,s)+"...":t},getNewText(){const t={};this.products.forEach(s=>{s.description&&s.description.split(";").forEach(l=>{const o=l.trim();t[s.id]||(t[s.id]=[]),t[s.id].push(o)})}),this.newProductsDes=Object.entries(t).map(([s,d])=>({id:s,descriptions:d}))},searchProducts(){this.axios.get(`${u}/products?category=台南`).then(t=>{this.products=t.data,this.products.forEach(s=>{s.is_enabled===1&&this.serchTainan.push(s)})}).catch(t=>{console.log(t)})},isProductInCart(t){return this.carts.some(s=>s.product.id===t)},addToCart(t,s,d){this.getCart();const l={product_id:t,qty:s,price:d,total:s*d},o=this.cartId;if(this.isProductInCart(t)){const a=this.carts.find(r=>r.product.id===t);a.order.qty+=s,a.order.total=a.order.qty*d,this.quantity=a.order.qty,this.axios.put(`${u}/carts/${a.id}`,{data:{...a.order,cartId:o}}).then(r=>{this.newCarts=r.data,this.cartId=this.newCarts.id,this.saveCardId(),this.$router.go("/cart")}).catch(r=>{alert(`${r.response}`)})}else this.axios.post(`${u}/carts?_embed=products`,{data:{...l,cartId:o}}).then(a=>{this.products.forEach(r=>{r.id===l.product_id&&this.carts.push({id:a.data.id,order:l,product:r})}),this.newCarts=a.data,this.cartId=this.newCarts.id,this.saveCardId(),this.$router.go("/cart")}).catch(a=>{console.log(a)})},getCart(){this.axios.get(`${u}/carts`).then(t=>{}).catch(t=>{alert(`${t}`)})},saveCardId(){document.cookie=`cartId=${this.newCarts.id}; path=/;`}},mounted(){this.searchProducts(),this.getProducts()}},$={class:"row g-0"},T={class:"col-md-4"},P={class:"tag text-white"},N={class:"card-att-img h-100"},q=["src","alt"],E={class:"col-md-8"},S={class:"card h-100 border-0 bg-transparent"},V={class:"card-body px-3 px-md-4"},D=e("div",{class:"heart3"},[e("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),j={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-8"},B={class:"d-flex mb-4"},A={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},I={class:"row"},z={class:"col-8 col-sm-8 my-2"},F={key:0},L={class:"col-12 col-sm-4"},K={class:"d-flex flex-column"},M={class:"fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end"},O={class:"d-flex flex-sm-column align-items-end justify-content-end"},Q=e("p",{class:"text-danger fw-bold d-none d-sm-block"},"促銷價",-1),U={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},G=e("div",{class:"col-12"},null,-1),H={class:"card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4"},J={class:"d-flex align-items-end"},R=v('<nav aria-label="Page navigation example " class="my-10"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link page-link-radius-2">Previous</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">1</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">2</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">3</a></li><li class="page-item"><a class="page-link page-link-radius" href="#">Next</a></li></ul></nav>',1);function W(t,s,d,l,o,a){const r=w("router-link");return n(),c(g,null,[(n(!0),c(g,null,_(o.serchTainan,i=>(n(),c("div",{class:"card mb-4 card-att",key:i.id},[e("div",$,[e("div",T,[e("span",P,h(i.category),1),e("div",N,[e("img",{src:i.imageUrl,class:"card-img-top img-fluid",alt:i.title},null,8,q)])]),e("div",E,[e("div",S,[e("div",V,[D,e("h4",j,h(i.title),1),e("div",B,[e("span",A,h(i.tag_2),1)]),e("div",I,[e("div",z,[(n(!0),c(g,null,_(o.newProductsDes,p=>(n(),c("div",{key:p.id},[p.id===i.id?(n(),c("div",F,[(n(!0),c(g,null,_(p.descriptions,f=>(n(),c("p",{key:f},h(a.truncateContent(f,85)),1))),128))])):y("",!0)]))),128))]),e("div",L,[e("div",K,[e("p",M,"NT"+h(a.thousand(i.origin_price)),1),e("div",O,[Q,e("p",U,"NT"+h(a.thousand(i.price)),1)])])])]),G]),e("div",H,[e("div",J,[x(r,{to:{name:"TouristSinglePackage",params:{category:i.category,title:i.title}},class:"btn-outline-square w-100 me-2 px-2 px-md-3",type:"button"},{default:m(()=>[b("行程介紹")]),_:2},1032,["to"]),x(r,{class:"btn-square w-100 ms-2 px-2 px-md-3",onClick:p=>a.addToCart(i.id,o.quantity,i.price),to:"/cart",type:"button"},{default:m(()=>[b("預約套裝行程")]),_:2},1032,["onClick"])])])])])])]))),128)),R],64)}const Y=k(C,[["render",W]]);export{Y as default};
