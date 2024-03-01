import{_ as m,a as i,F as n,u,f as x,o,b as e,v as r,x as b,d as k,w as v,e as y,r as w}from"./index-wHM0HHtU.js";const p="https://two024-south-json-server-vercel.onrender.com",P={data(){return{text:"南部旅遊方案",products:[],user:"",newProductsDes:"",enabledProducts:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[]}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?(console.log(token,user),this.axios.post(`${p}/api/users/${user}`).then(s=>{this.userIsLoggedIn=!0}).catch(s=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})})):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getProducts(){this.axios.get(`${p}/products`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&this.enabledProducts.push(t)}),this.getNewText()}).catch(s=>{alert(`${s.message}`)})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`},truncateContent(s,t){return s&&s.length>t?s.substring(0,t)+"...":s},getNewText(){const s={};this.products.forEach(t=>{t.description&&t.description.split(";").forEach(_=>{const c=_.trim();s[t.id]||(s[t.id]=[]),s[t.id].push(c)})}),this.newProductsDes=Object.entries(s).map(([t,l])=>({id:t,descriptions:l}))},searchProducts(){this.axios.get(`${p}/products?category=嘉義`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&this.searchChiayi.push(t)})}).catch(s=>{alert(`${s.message}`)})}},mounted(){this.searchProducts(),this.getProducts()}},$={class:"row g-0"},T={class:"col-md-4"},C={class:"tag text-white"},N={class:"card-att-img card-att-img-2 h-100"},S=["src","alt"],V={class:"col-md-8"},D={class:"card h-100 border-0 bg-transparent"},E={class:"card-body px-5"},B=e("div",{class:"heart3"},[e("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),j={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},q={class:"d-flex mb-4"},A={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},F={class:"row"},L={class:"col-8 col-xl-9 my-2"},z={key:0},K={class:"col-4 col-xl-3"},M={class:"fs-4 text-end text-decoration-line-through"},O=e("p",{class:"text-end text-danger fw-bold"},"促銷價",-1),U={class:"fs-2 fs-lg-3 fs-xl-2 text-end"},G=e("div",{class:"col-12"},null,-1),H={class:"card-footer bg-transparent border-0 pt-0 pb-4"},J={class:"d-flex align-items-end"},Q=e("a",{class:"btn-square w-100 ms-2",href:"#",type:"button"},"預約套裝行程",-1),R=x('<nav aria-label="Page navigation example " class="my-10"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link page-link-radius-2">Previous</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">1</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">2</a></li><li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">3</a></li><li class="page-item"><a class="page-link page-link-radius" href="#">Next</a></li></ul></nav>',1);function W(s,t,l,_,c,d){const f=w("router-link");return o(),i(n,null,[(o(!0),i(n,null,u(c.searchChiayi,a=>(o(),i("div",{class:"card mb-4 card-att",key:a.id},[e("div",$,[e("div",T,[e("span",C,r(a.category),1),e("div",N,[e("img",{src:a.imageUrl,class:"card-img-top img-fluid",alt:a.title},null,8,S)])]),e("div",V,[e("div",D,[e("div",E,[B,e("h4",j,r(a.title),1),e("div",q,[e("span",A,r(a.tag_2),1)]),e("div",F,[e("div",L,[(o(!0),i(n,null,u(c.newProductsDes,h=>(o(),i("div",{key:h.id},[h.id===a.id?(o(),i("div",z,[(o(!0),i(n,null,u(h.descriptions,g=>(o(),i("p",{key:g},r(d.truncateContent(g,85)),1))),128))])):b("",!0)]))),128))]),e("div",K,[e("p",M,r(d.thousand(a.origin_price)),1),O,e("p",U,r(d.thousand(a.price)),1)])]),G]),e("div",H,[e("div",J,[k(f,{to:{name:"TouristSinglePackage",params:{category:a.category,title:a.title}},class:"btn-outline-square w-100 me-2",type:"button"},{default:v(()=>[y("行程介紹")]),_:2},1032,["to"]),Q])])])])])]))),128)),R],64)}const Y=m(P,[["render",W]]);export{Y as default};
