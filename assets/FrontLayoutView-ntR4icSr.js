import{s as _}from"./sweetAlert-QDkR8cfC.js";import{C as I}from"./collapse-klEPtAeT.js";import{_ as k}from"./logo-D-Af0tqc.js";import{_ as x,o as p,c as f,a,b as i,w as n,d,e as w,r as g,p as C,f as y,n as b,t as T,F as L}from"./index-aZuzJ_mB.js";import"./selector-engine-NqZXcfZW.js";const A={data(){return{path:""}},methods:{redirectToA(t){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristPackage",query:{category:t}})},redirectToB(t){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristAttractions",query:{category:t}})}},mounted(){this.path=this.$route.path}},N=t=>(C("data-v-f4a35658"),t=t(),y(),t),S={class:"bg-light"},F={class:"container py-10 justify-content-between"},q={class:"navbar mb-10 flex-column flex-lg-row py-0"},U=N(()=>a("img",{src:k,alt:"南部輕旅遊網站"},null,-1)),z={class:"navbar-nav flex-column flex-lg-row"},B={class:"nav-item"},H={class:"nav-item"},P=w('<ul class="navbar-nav flex-row" data-v-f4a35658><li class="nav-item" data-v-f4a35658><a class="nav-link py-0 ps-1" href="https://www.youtube.com/" aria-label="youtube" data-v-f4a35658><i class="bi bi-youtube img-lg" data-v-f4a35658></i></a></li><li class="nav-item" data-v-f4a35658><a class="nav-link py-0 ps-6" href="https://www.instagram.com/" aria-label="instagram" data-v-f4a35658><i class="bi bi-instagram img-lg" data-v-f4a35658></i></a></li><li class="nav-item" data-v-f4a35658><a class="nav-link py-0 ps-6" href="https://www.facebook.com/?locale=zh_TW" aria-label="facebook" data-v-f4a35658><i class="bi bi-facebook img-lg" data-v-f4a35658></i></a></li></ul>',1),V=w('<div class="d-flex text-center flex-column align-items-center" data-v-f4a35658><p class="fw-bold text-dark mb-1" data-v-f4a35658>南部輕旅行 「完美套裝」</p><p class="fw-bold text-dark mb-1" data-v-f4a35658>輕鬆省心，玩得盡興！</p><p class="text-dark mb-10" data-v-f4a35658>景點探索 + 美食巡禮 + 便捷交通 + 舒適住宿</p><p class="text-dark2 text-center fs-7 fs-lg-6" data-v-f4a35658> 本網站僅供個人作品使用，不提供商業用途<br data-v-f4a35658> 資料來源<br data-v-f4a35658><a href="https://www.taiwan.net.tw/" class="fw-bold fs-7" target="_blank" data-v-f4a35658>臺灣觀光資訊網</a><br data-v-f4a35658><a href="https://www.swcoast-nsa.gov.tw/zh-tw" class="fw-bold fs-7" target="_blank" data-v-f4a35658>雲嘉南濱海國家風景區管理處網站</a><br data-v-f4a35658><a href="https://khh.travel/" target="_blank" class="fw-bold fs-7" data-v-f4a35658>高雄旅遊網</a>、<a href="https://travel.chiayi.gov.tw/" target="_blank" class="fw-bold fs-7" data-v-f4a35658>嘉義市觀光旅遊網</a></p></div>',1),j={class:"navbar-nav text-end"},E={class:"nav-item"};function D(t,s,o,e,c,r){const l=g("router-link");return p(),f("div",S,[a("div",F,[a("nav",q,[i(l,{to:"/",class:"navbar-brand mb-3 mb-lg-0 py-0 mx-0"},{default:n(()=>[U]),_:1}),a("ul",z,[a("li",B,[i(l,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0",onClick:s[0]||(s[0]=v=>r.redirectToB("全部"))},{default:n(()=>[d("南部旅遊景點")]),_:1})]),a("li",H,[i(l,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0",onClick:s[1]||(s[1]=v=>r.redirectToA("全部"))},{default:n(()=>[d("南部旅遊方案")]),_:1})])]),P]),V,a("ul",j,[a("li",E,[i(l,{to:"/admin/adminlogin",class:"nav-link"},{default:n(()=>[d("後台管理")]),_:1})])])])])}const O=x(A,[["render",D],["__scopeId","data-v-f4a35658"]]),m="https://two024-south-json-server-vercel.onrender.com",G={components:{FrontLayoutFooter:O},data(){return{headerCollapse:{},isNavbarOpen:!1,userIsLoggedIn2:!1,token:"",carts:[],userCarts:[],cartsLength:0,userCartsNum:[],transCartNumberStatus:!1,userIsLogOut:!1,isloading:!1,path:""}},created(){this.updateCart(),this.getCarts(),this.token&&this.getHeartData()},watch:{$route(){this.headerCollapse.hide()}},methods:{updateCart(){this.$emitter.on("adminUpdateCart",t=>{this.cartsLength=t}),this.$emitter.on("updateCart",t=>{this.cartsLength=t}),this.$emitter.on("updateCartNum",t=>{this.cartsLength=t})},redirectTo(t,s){this.$root.navigatedFromHeader=!0;let o=t==="TouristPackage"?"/TouristPackage":"/TouristAttractions";this.$router.push({path:o,query:{category:s}})},isActive(t){return this.path===t},checkLoggedInUser(){this.$emitter.on("loginCheck2",t=>{this.userIsLoggedIn2=t}),this.token?this.userIsLoggedIn2=!0:this.userIsLoggedIn2=!1},toggleNavbar(){this.$refs.headerCollapse.classList.contains("show")?this.headerCollapse.hide():this.headerCollapse.show()},logout(){this.deleteAllCookies(),this.userIsLoggedIn2=!1,_.threeLayerCheckType("success","會員登出成功"),this.isloading=!0,this.path==="/"?(this.isloading=!1,this.$router.go(0)):(this.isloading=!1,this.$router.push("/"))},getHeartData(){this.axios.get(`${m}/hearts`).then(t=>{t.data.forEach(s=>{s.userId===this.userId&&s.tag==="旅遊景點"&&(this.isFavorite[s.product]=!0)})}).catch(t=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")})},getCarts(){this.axios.get(`${m}/carts`).then(t=>{this.carts=t.data,this.carts.forEach(e=>{e.userId===this.userId&&this.userCarts.push(e)});const s=[],o=new Set;this.userCarts.forEach(e=>{o.has(e.productId)||(o.add(e.productId),s.push(e))}),this.userCarts=s,this.cartsLength=this.userCarts.length}).catch(()=>{_.threeLayerCheckType("error","取得購物車資料失敗")})},deleteAllCookies(){for(var t=document.cookie.split(";"),s=0;s<t.length;s++){var o=t[s],e=o.indexOf("="),c=e>-1?o.substr(0,e):o;document.cookie=c+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},getCookie(t){const s=document.cookie.split(";");for(let o of s){const[e,c]=o.trim().split("=");if(e===t)return c}return null}},mounted(){this.headerCollapse=new I(this.$refs.headerCollapse,{toggle:!1}),this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenU\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.checkLoggedInUser();const t=this.getCookie("userId");this.userId=t*1,this.path=this.$route.path}},h=t=>(C("data-v-89063965"),t=t(),y(),t),J={class:"navbar navbar-expand-lg bg-white py-0 sticky-top bg-opacity-90"},M={class:"container"},W=h(()=>a("img",{src:k,alt:"南部輕旅遊網站",style:{"aspect-ratio":"1 / 1"}},null,-1)),K=h(()=>a("i",{class:"bi bi-list",style:{"font-size":"3rem",color:"#0ea0a6"}},null,-1)),Q=[K],R={class:"collapse navbar-collapse",id:"navbarSupportedContent",ref:"headerCollapse"},X={class:"navbar-nav m-auto mb-lg-0 align-items-center pt-10 pt-lg-0"},Y={class:"nav-item mb-10 mb-lg-0"},Z={class:"nav-item mb-10 mb-lg-0"},tt={key:0,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center py-10 pb-10 pb-lg-0"},at={class:"nav-item"},st={class:"nav-item"},et={key:1,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center align-items-center pb-10 pb-lg-0"},ot={class:"nav-item py-0"},rt={class:"btn-outline-turquoise position-relative px-6",href:"#/cart"},it=h(()=>a("i",{class:"bi bi-cart-fill"},null,-1)),lt={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},nt=h(()=>a("span",{class:"visually-hidden"},"unread messages",-1)),ct={class:"nav-item py-0"},dt=h(()=>a("i",{class:"bi bi-person-fill"},null,-1)),ht={class:"nav-item"};function ut(t,s,o,e,c,r){const l=g("router-link"),v=g("router-view"),$=g("front-layout-footer");return p(),f(L,null,[a("nav",J,[a("div",M,[i(l,{to:"/",class:"navbar-brand py-6"},{default:n(()=>[W]),_:1}),a("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:s[0]||(s[0]=(...u)=>r.toggleNavbar&&r.toggleNavbar(...u))},Q),a("div",R,[a("ul",X,[a("li",Y,[a("button",{class:b(["nav-link px-5 px-xl-10 fs-5 text-dark",{active:r.isActive("/TouristAttractions")}]),onClick:s[1]||(s[1]=u=>r.redirectTo("TouristAttractions","全部"))}," 南部旅遊景點 ",2)]),a("li",Z,[a("button",{class:b(["nav-link px-5 px-xl-10 fs-5 text-dark",{active:r.isActive("/TouristPackage")}]),onClick:s[2]||(s[2]=u=>r.redirectTo("TouristPackage","全部"))}," 南部旅遊方案 ",2)])]),c.userIsLoggedIn2===!1?(p(),f("ul",tt,[a("li",at,[i(l,{to:"/login",class:"btn-outline-turquoise"},{default:n(()=>[d("登入")]),_:1})]),a("li",st,[i(l,{to:"/signup",class:"btn-turquoise ms-3"},{default:n(()=>[d(" 註冊 ")]),_:1})])])):(p(),f("ul",et,[a("li",ot,[a("a",rt,[it,a("span",lt,[d(T(c.cartsLength)+" ",1),nt])])]),a("li",ct,[i(l,{to:"/profile",class:"btn-outline-turquoise ms-3 px-6"},{default:n(()=>[dt]),_:1})]),a("li",ht,[a("a",{href:"#",onClick:s[3]||(s[3]=u=>r.logout()),class:"ms-3 btn-outline-turquoise px-5"},"登出")])]))],512)])]),i(v),i($)],64)}const bt=x(G,[["render",ut],["__scopeId","data-v-89063965"]]);export{bt as default};
