import{s as _}from"./sweetAlert-po1Dmf7l.js";import{C as y}from"./collapse-fB3ilisO.js";import{_ as v,o as h,c as p,a as t,b as o,w as n,d,e as m,r as g,f as C,v as w,t as $,F as I}from"./index-_LL0aPGL.js";import"./selector-engine-N0qI5Ial.js";const k="/2024-southerntravelwebsite-fin/assets/logo-WY09ya8o.png",T={methods:{redirectToA(e){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristPackage",query:{category:e}})},redirectToB(e){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristAttractions",query:{category:e}})}}},L={class:"bg-light"},N={class:"container py-10 justify-content-between"},A={class:"navbar mb-10 flex-column flex-lg-row py-0"},F=t("img",{src:k,alt:"南部輕旅遊網站"},null,-1),q={class:"navbar-nav flex-column flex-lg-row"},S={class:"nav-item mb-10 mb-lg-0"},B={class:"nav-item mb-10 mb-lg-0"},H=m('<ul class="navbar-nav flex-row fs-add-2"><li class="nav-item"><a class="nav-link py-0 ps-1" href="#"><i class="bi bi-youtube img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-instagram img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-facebook img-lg"></i></a></li></ul>',1),O=m('<div class="d-flex text-center flex-column align-items-center"><p class="fw-bold text-dark mb-1">南部輕旅行 「完美套裝」</p><p class="fw-bold text-dark mb-1">輕鬆省心，玩得盡興！</p><p class="text-dark mb-10">景點探索 + 美食巡禮 + 便捷交通 + 舒適住宿</p><p class="text-dark2 text-center fs-7 fs-lg-6"> 本網站僅供個人作品使用，不提供商業用途<br> 資料來源<br><a href="https://www.taiwan.net.tw/" class="fw-bold fs-7" target="_blank">臺灣觀光資訊網</a><br><a href="https://www.swcoast-nsa.gov.tw/zh-tw" class="fw-bold fs-7" target="_blank">雲嘉南濱海國家風景區管理處網站</a><br><a href="https://khh.travel/" target="_blank" class="fw-bold fs-7">高雄旅遊網</a>、<a href="https://travel.chiayi.gov.tw/" target="_blank" class="fw-bold fs-7">嘉義市觀光旅遊網</a></p></div>',1),U={class:"navbar-nav text-end"},V={class:"nav-item"};function j(e,s,r,a,l,c){const i=g("router-link");return h(),p("div",L,[t("div",N,[t("nav",A,[o(i,{to:"/",class:"navbar-brand mb-10 mb-lg-0 py-0 mx-0"},{default:n(()=>[F]),_:1}),t("ul",q,[t("li",S,[o(i,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:s[0]||(s[0]=f=>c.redirectToB("全部"))},{default:n(()=>[d("南部旅遊景點")]),_:1})]),t("li",B,[o(i,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:s[1]||(s[1]=f=>c.redirectToA("全部"))},{default:n(()=>[d("南部旅遊方案")]),_:1})])]),H]),O,t("ul",U,[t("li",V,[o(i,{to:"/admin/adminlogin",class:"nav-link"},{default:n(()=>[d("後台管理")]),_:1})])])])])}const D=v(T,[["render",j]]),b="https://two024-south-json-server-vercel.onrender.com",E={components:{FrontLayoutFooter:D},data(){return{headerCollapse:{},isNavbarOpen:!1,userIsLoggedIn2:!1,token:"",carts:[],userCarts:[],cartsLength:0,userCartsNum:[],transCartNumberStatus:!1,userIsLogOut:!1,isloading:!1}},created(){this.updateCart(),this.getCarts(),this.token&&this.getHeartData()},watch:{$route(){this.headerCollapse.hide()}},methods:{updateCart(){this.$emitter.on("adminUpdateCart",this.getCarts),this.$emitter.on("updateCart",e=>{this.cartsLength=e}),this.$emitter.on("updateCartNum",e=>{this.cartsLength=e})},redirectToA(e){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristPackage",query:{category:e}})},redirectToB(e){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristAttractions",query:{category:e}})},checkLoggedInUser(){this.$emitter.on("loginCheck2",e=>{this.userIsLoggedIn2=e}),this.token?this.userIsLoggedIn2=!0:this.userIsLoggedIn2=!1},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},logout(){this.deleteAllCookies(),this.userIsLoggedIn2=!1,_.threeLayerCheckType("success","會員登出成功"),this.isloading=!0,this.$route.path==="/"?(this.isloading=!1,this.$router.go(0)):(this.isloading=!1,this.$router.push("/"))},getHeartData(){this.axios.get(`${b}/hearts`).then(e=>{e.data.forEach(s=>{s.userId===this.userId&&s.tag==="旅遊景點"&&(this.isFavorite[s.product]=!0)})}).catch(e=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")})},getCarts(){this.axios.get(`${b}/carts`).then(e=>{this.carts=e.data,this.carts.forEach(a=>{a.userId===this.userId&&this.userCarts.push(a)});const s=[],r=new Set;this.userCarts.forEach(a=>{r.has(a.productId)||(r.add(a.productId),s.push(a))}),this.userCarts=s,this.cartsLength=this.userCarts.length}).catch(()=>{_.threeLayerCheckType("error","取得購物車資料失敗")})},deleteAllCookies(){for(var e=document.cookie.split(";"),s=0;s<e.length;s++){var r=e[s],a=r.indexOf("="),l=a>-1?r.substr(0,a):r;document.cookie=l+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},getCookie(e){const s=document.cookie.split(";");for(let r of s){const[a,l]=r.trim().split("=");if(a===e)return l}return null}},mounted(){this.headerCollapse=new y(this.$refs.headerCollapse,{toggle:!1}),this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenU\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.checkLoggedInUser();const e=this.getCookie("userId");this.userId=e*1}},z={class:"navbar navbar-expand-lg bg-white py-0 sticky-top bg-opacity-90"},P={class:"container"},G=t("img",{src:k,alt:"南部輕旅遊網站"},null,-1),J=t("i",{class:"bi bi-list",style:{"font-size":"3rem",color:"#0ea0a6"}},null,-1),M=[J],W={class:"collapse navbar-collapse py-10 py-lg-0",id:"navbarSupportedContent",ref:"headerCollapse"},Y={class:"navbar-nav m-auto mb-lg-0 align-items-center"},K={class:"nav-item mb-10 mb-lg-0"},Q={class:"nav-item mb-10 mb-lg-0"},R={key:0,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center"},X={class:"nav-item"},Z={class:"nav-item"},tt={key:1,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center align-items-center"},et={class:"nav-item"},st={class:"btn-outline-turquoise position-relative",href:"#/cart",style:{"padding-top":"5px","padding-bottom":"5px"}},at=t("i",{class:"bi bi-cart-fill fs-5"},null,-1),ot={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},rt=t("span",{class:"visually-hidden"},"unread messages",-1),it=t("li",{class:"nav-item",style:{"padding-top":"5px","padding-bottom":"5px"}},[t("a",{class:"btn-outline-turquoise ms-3",href:"#/profile"},[t("i",{class:"bi bi-person-fill fs-5"})])],-1),nt={class:"nav-item ms-3"};function lt(e,s,r,a,l,c){const i=g("router-link"),f=g("router-view"),x=g("front-layout-footer");return h(),p(I,null,[t("nav",z,[t("div",P,[o(i,{to:"/",class:"navbar-brand py-6"},{default:n(()=>[G]),_:1}),t("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:s[0]||(s[0]=(...u)=>c.toggleNavbar&&c.toggleNavbar(...u))},M),C(t("div",W,[t("ul",Y,[t("li",K,[o(i,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:s[1]||(s[1]=u=>c.redirectToB("全部"))},{default:n(()=>[d("南部旅遊景點")]),_:1})]),t("li",Q,[o(i,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:s[2]||(s[2]=u=>c.redirectToA("全部"))},{default:n(()=>[d("南部旅遊方案")]),_:1})])]),l.userIsLoggedIn2===!1?(h(),p("ul",R,[t("li",X,[o(i,{to:"/login",class:"btn-outline-turquoise"},{default:n(()=>[d("登入")]),_:1})]),t("li",Z,[o(i,{to:"/signup",class:"btn-turquoise ms-3"},{default:n(()=>[d("註冊")]),_:1})])])):(h(),p("ul",tt,[t("li",et,[t("a",st,[at,t("span",ot,[d($(l.cartsLength)+" ",1),rt])])]),it,t("li",nt,[t("a",{href:"#",onClick:s[3]||(s[3]=u=>c.logout()),class:"btn-outline-turquoise"},"登出")])]))],512),[[w,l.isNavbarOpen]])])]),o(f),o(x)],64)}const pt=v(E,[["render",lt]]);export{pt as default};
