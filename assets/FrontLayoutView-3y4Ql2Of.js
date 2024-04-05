import{s as _}from"./sweetAlert-UthXI6JZ.js";import{C}from"./collapse-QCauFbtV.js";import{_ as b,o as h,c as p,a as s,b as o,w as i,d,e as m,r as g,f as y,v as w,t as $,F as I}from"./index-mrMvHell.js";const k="/2024-southerntravelwebsite-fin/assets/logo-WY09ya8o.png",T={methods:{redirectToA(t){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristPackage",query:{category:t}})},redirectToB(t){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristAttractions",query:{category:t}})}}},L={class:"bg-light"},N={class:"container py-10 justify-content-between"},A={class:"navbar mb-10 flex-column flex-lg-row py-0"},F=s("img",{src:k,alt:"南部輕旅遊網站"},null,-1),S={class:"navbar-nav flex-column flex-lg-row"},q={class:"nav-item mb-10 mb-lg-0"},B={class:"nav-item mb-10 mb-lg-0"},H=m('<ul class="navbar-nav flex-row fs-add-2"><li class="nav-item"><a class="nav-link py-0 ps-1" href="#"><i class="bi bi-youtube img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-instagram img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-facebook img-lg"></i></a></li></ul>',1),O=m('<div class="d-flex text-center flex-column align-items-center"><p class="fw-bold text-dark mb-1">南部輕旅行 「完美套裝」</p><p class="fw-bold text-dark mb-1">輕鬆省心，玩得盡興！</p><p class="text-dark mb-10">景點探索 + 美食巡禮 + 便捷交通 + 舒適住宿</p><p class="text-dark2 text-center fs-7 fs-lg-6"> 本網站僅供個人作品使用，不提供商業用途<br> 資料來源<br><a href="https://www.taiwan.net.tw/" class="fw-bold fs-7" target="_blank">臺灣觀光資訊網</a><br><a href="https://www.swcoast-nsa.gov.tw/zh-tw" class="fw-bold fs-7" target="_blank">雲嘉南濱海國家風景區管理處網站</a><br><a href="https://khh.travel/" target="_blank" class="fw-bold fs-7">高雄旅遊網</a>、<a href="https://travel.chiayi.gov.tw/" target="_blank" class="fw-bold fs-7">嘉義市觀光旅遊網</a></p></div>',1),U={class:"navbar-nav text-end"},V={class:"nav-item"};function j(t,e,r,a,l,c){const n=g("router-link");return h(),p("div",L,[s("div",N,[s("nav",A,[o(n,{to:"/",class:"navbar-brand mb-10 mb-lg-0 py-0 mx-0"},{default:i(()=>[F]),_:1}),s("ul",S,[s("li",q,[o(n,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:e[0]||(e[0]=f=>c.redirectToB("全部"))},{default:i(()=>[d("南部旅遊景點")]),_:1})]),s("li",B,[o(n,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:e[1]||(e[1]=f=>c.redirectToA("全部"))},{default:i(()=>[d("南部旅遊方案")]),_:1})])]),H]),O,s("ul",U,[s("li",V,[o(n,{to:"/admin/adminlogin",class:"nav-link"},{default:i(()=>[d("後台管理")]),_:1})])])])])}const D=b(T,[["render",j]]),v="https://two024-south-json-server-vercel.onrender.com",E={components:{FrontLayoutFooter:D},data(){return{headerCollapse:{},isNavbarOpen:!1,userIsLoggedIn2:!1,token:"",carts:[],userCarts:[],cartsLength:0,userCartsNum:[],transCartNumberStatus:!1,userIsLogOut:!1}},created(){this.updateCart(),this.getCarts()},watch:{$route(){this.headerCollapse.hide()}},methods:{updateCart(){this.$emitter.on("adminUpdateCart",this.getCarts),this.$emitter.on("updateCart",t=>{this.cartsLength=t}),this.$emitter.on("updateCartNum",t=>{this.cartsLength=t})},redirectToA(t){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristPackage",query:{category:t}})},redirectToB(t){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristAttractions",query:{category:t}})},checkLoggedInUser(){this.$emitter.on("loginCheck2",t=>{this.userIsLoggedIn2=t}),this.token?this.userIsLoggedIn2=!0:this.userIsLoggedIn2=!1},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},logout(){this.deleteAllCookies(),this.userIsLoggedIn2=!1,_.threeLayerCheckType("success","會員登出成功"),this.$router.push("/")},getHeartData(){this.axios.get(`${v}/hearts`).then(t=>{console.log("p"),t.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(t=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")})},getCarts(){this.axios.get(`${v}/carts`).then(t=>{this.carts=t.data,this.carts.forEach(a=>{a.userId===this.userId&&this.userCarts.push(a)});const e=[],r=new Set;this.userCarts.forEach(a=>{r.has(a.productId)||(r.add(a.productId),e.push(a))}),this.userCarts=e,this.cartsLength=this.userCarts.length}).catch(()=>{_.threeLayerCheckType("error","取得購物車資料失敗")})},deleteAllCookies(){for(var t=document.cookie.split(";"),e=0;e<t.length;e++){var r=t[e],a=r.indexOf("="),l=a>-1?r.substr(0,a):r;document.cookie=l+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},getCookie(t){const e=document.cookie.split(";");for(let r of e){const[a,l]=r.trim().split("=");if(a===t)return l}return null}},mounted(){this.headerCollapse=new C(this.$refs.headerCollapse,{toggle:!1}),this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenU\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.checkLoggedInUser();const t=this.getCookie("userId");this.userId=t*1,this.getHeartData()}},z={class:"navbar navbar-expand-lg navbar-light bg-light py-0 sticky-top"},P={class:"container"},G=s("img",{src:k,alt:"南部輕旅遊網站"},null,-1),J=s("i",{class:"bi bi-list",style:{"font-size":"3rem",color:"#0ea0a6"}},null,-1),M=[J],W={class:"collapse navbar-collapse py-10 py-lg-0",id:"navbarSupportedContent",ref:"headerCollapse"},Y={class:"navbar-nav m-auto mb-lg-0 align-items-center"},K={class:"nav-item mb-10 mb-lg-0"},Q={class:"nav-item mb-10 mb-lg-0"},R={key:0,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center"},X={class:"nav-item"},Z={class:"nav-item"},tt={key:1,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center align-items-center"},et={class:"nav-item"},st={class:"btn-outline-turquoise position-relative",href:"#/cart",style:{"padding-top":"5px","padding-bottom":"5px"}},at=s("i",{class:"bi bi-cart-fill fs-5"},null,-1),ot={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},rt=s("span",{class:"visually-hidden"},"unread messages",-1),nt={class:"nav-item ms-3"};function it(t,e,r,a,l,c){const n=g("router-link"),f=g("router-view"),x=g("front-layout-footer");return h(),p(I,null,[s("nav",z,[s("div",P,[o(n,{to:"/",class:"navbar-brand py-6"},{default:i(()=>[G]),_:1}),s("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=(...u)=>c.toggleNavbar&&c.toggleNavbar(...u))},M),y(s("div",W,[s("ul",Y,[s("li",K,[o(n,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:e[1]||(e[1]=u=>c.redirectToB("全部"))},{default:i(()=>[d("南部旅遊景點")]),_:1})]),s("li",Q,[o(n,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:e[2]||(e[2]=u=>c.redirectToA("全部"))},{default:i(()=>[d("南部旅遊方案")]),_:1})])]),l.userIsLoggedIn2===!1?(h(),p("ul",R,[s("li",X,[o(n,{to:"/login",class:"btn-outline-turquoise"},{default:i(()=>[d("登入")]),_:1})]),s("li",Z,[o(n,{to:"/signup",class:"btn-turquoise ms-3"},{default:i(()=>[d("註冊")]),_:1})])])):(h(),p("ul",tt,[s("li",et,[s("a",st,[at,s("span",ot,[d($(l.cartsLength)+" ",1),rt])])]),s("li",nt,[s("a",{href:"#",onClick:e[3]||(e[3]=u=>c.logout()),class:"btn-outline-turquoise"},"登出")])]))],512),[[w,l.isNavbarOpen]])])]),o(f),o(x)],64)}const ut=b(E,[["render",it]]);export{ut as default};
