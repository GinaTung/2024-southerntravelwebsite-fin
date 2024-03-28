import{s as k}from"./sweetAlert-4xeF-e5b.js";import{C as x}from"./collapse-8UoZqmtN.js";import{_,o as h,c as p,a as t,b as n,w as r,d as l,e as f,r as g,f as w,v as C,t as y,F as $}from"./index-QFxCqv35.js";const b="/2024-southerntravelwebsite-fin/assets/logo-WY09ya8o.png",I={},T={class:"bg-light"},L={class:"container py-10 justify-content-between"},N={class:"navbar mb-10 flex-column flex-lg-row py-0"},A=t("img",{src:b,alt:"南部輕旅遊網站"},null,-1),S={class:"navbar-nav flex-column flex-lg-row"},q={class:"nav-item"},F={class:"nav-item"},B=f('<ul class="navbar-nav flex-row fs-add-2"><li class="nav-item"><a class="nav-link py-0 ps-1" href="#"><i class="bi bi-youtube img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-instagram img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-facebook img-lg"></i></a></li></ul>',1),O=f('<div class="d-flex text-center flex-column align-items-center"><p class="fw-bold text-dark mb-1">南部輕旅行 「完美套裝」</p><p class="fw-bold text-dark mb-1">輕鬆省心，玩得盡興！</p><p class="text-dark mb-10">景點探索 + 美食巡禮 + 便捷交通 + 舒適住宿</p><p class="text-dark2 text-center fs-7 fs-lg-6"> 本網站僅供個人作品使用，不提供商業用途<br> 資料來源<br><a href="https://www.taiwan.net.tw/" class="fw-bold fs-7" target="_blank">臺灣觀光資訊網</a><br><a href="https://www.swcoast-nsa.gov.tw/zh-tw" class="fw-bold fs-7" target="_blank">雲嘉南濱海國家風景區管理處網站</a><br><a href="https://khh.travel/" target="_blank" class="fw-bold fs-7">高雄旅遊網</a>、<a href="https://travel.chiayi.gov.tw/" target="_blank" class="fw-bold fs-7">嘉義市觀光旅遊網</a></p></div>',1),U={class:"navbar-nav text-end"},V={class:"nav-item"};function j(s,e){const a=g("router-link");return h(),p("div",T,[t("div",L,[t("nav",N,[n(a,{to:"/",class:"navbar-brand mb-10 mb-lg-0 py-0 mx-0"},{default:r(()=>[A]),_:1}),t("ul",S,[t("li",q,[n(a,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0"},{default:r(()=>[l("南部旅遊景點")]),_:1})]),t("li",F,[n(a,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0"},{default:r(()=>[l("南部旅遊方案")]),_:1})])]),B]),O,t("ul",U,[t("li",V,[n(a,{to:"/admin/adminlogin",class:"nav-link"},{default:r(()=>[l("後台管理")]),_:1})])])])])}const z=_(I,[["render",j]]),E="https://two024-south-json-server-vercel.onrender.com",D={components:{FrontLayoutFooter:z},data(){return{headerCollapse:{},isNavbarOpen:!1,userIsLoggedIn2:!1,token:"",carts:[],userCarts:[],cartsLength:0,userCartsNum:[],transCartNumberStatus:!1}},created(){this.$emitter.on("updateCart",()=>{this.getCarts()})},watch:{$route(){this.headerCollapse.hide()}},methods:{redirectToA(s){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristPackage",query:{category:s}})},redirectToB(s){this.$root.navigatedFromHeader=!0,this.$router.push({path:"/TouristAttractions",query:{category:s}})},checkLoggedInUser(){this.$emitter.on("loginCheck2",s=>{this.userIsLoggedIn2=s}),this.token?this.userIsLoggedIn2=!0:this.userIsLoggedIn2=!1},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},logout(){this.deleteAllCookies(),this.userIsLoggedIn2=!1,k.threeLayerCheckType("success","會員登出成功"),this.$router.push("/")},getCarts(){this.axios.get(`${E}/carts`).then(s=>{this.carts=s.data,this.carts.forEach(o=>{o.userId===this.userId&&this.userCarts.push(o)});const e=[],a=new Set;this.userCarts.forEach(o=>{a.has(o.productId)||(a.add(o.productId),e.push(o))}),this.userCarts=e,this.cartsLength=this.userCarts.length}).catch(s=>{alert(`${s.message}`)})},deleteAllCookies(){for(var s=document.cookie.split(";"),e=0;e<s.length;e++){var a=s[e],o=a.indexOf("="),i=o>-1?a.substr(0,o):a;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}},getCookie(s){const e=document.cookie.split(";");for(let a of e){const[o,i]=a.trim().split("=");if(o===s)return i}return null}},mounted(){this.headerCollapse=new x(this.$refs.headerCollapse,{toggle:!1}),this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenU\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.checkLoggedInUser();const s=this.getCookie("userId");this.userId=s*1,this.getCarts(),this.$emitter.on("updateCart",()=>{this.getCarts()})}},H={class:"navbar navbar-expand-lg navbar-light bg-light py-0 sticky-top"},P={class:"container"},G=t("img",{src:b,alt:"南部輕旅遊網站"},null,-1),J=t("i",{class:"bi bi-list",style:{"font-size":"3rem",color:"#0ea0a6"}},null,-1),M=[J],W={class:"collapse navbar-collapse py-10 py-lg-0",id:"navbarSupportedContent",ref:"headerCollapse"},Y={class:"navbar-nav m-auto mb-lg-0 align-items-center"},K={class:"nav-item mb-10 mb-lg-0"},Q={class:"nav-item mb-10 mb-lg-0"},R={key:0,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center"},X={class:"nav-item"},Z={class:"nav-item"},tt={key:1,class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center align-items-center"},st={class:"nav-item"},et={type:"button",class:"btn-outline-turquoise position-relative",href:"#/cart",style:{"padding-top":"5px","padding-bottom":"5px"}},at=t("i",{class:"bi bi-cart-fill fs-5"},null,-1),ot={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},nt=t("span",{class:"visually-hidden"},"unread messages",-1),rt=t("li",{class:"nav-item btn-outline-turquoise ms-3",style:{"padding-top":"5px","padding-bottom":"5px"}},[t("i",{class:"bi bi-person-fill fs-5"})],-1),lt={class:"nav-item ms-3"};function it(s,e,a,o,i,c){const d=g("router-link"),v=g("router-view"),m=g("front-layout-footer");return h(),p($,null,[t("nav",H,[t("div",P,[n(d,{to:"/",class:"navbar-brand py-6"},{default:r(()=>[G]),_:1}),t("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=(...u)=>c.toggleNavbar&&c.toggleNavbar(...u))},M),w(t("div",W,[t("ul",Y,[t("li",K,[n(d,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:e[1]||(e[1]=u=>c.redirectToB("全部"))},{default:r(()=>[l("南部旅遊景點")]),_:1})]),t("li",Q,[n(d,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-5 text-dark",onClick:e[2]||(e[2]=u=>c.redirectToA("全部"))},{default:r(()=>[l("南部旅遊方案")]),_:1})])]),i.userIsLoggedIn2===!1?(h(),p("ul",R,[t("li",X,[n(d,{to:"/login",class:"btn-outline-turquoise"},{default:r(()=>[l("登入")]),_:1})]),t("li",Z,[n(d,{to:"/signup",class:"btn-turquoise ms-3"},{default:r(()=>[l("註冊")]),_:1})])])):(h(),p("ul",tt,[t("li",st,[t("a",et,[at,t("span",ot,[l(y(i.cartsLength)+" ",1),nt])])]),rt,t("li",lt,[t("a",{href:"#",onClick:e[3]||(e[3]=u=>c.logout()),class:"btn-outline-turquoise"},"登出")])]))],512),[[C,i.isNavbarOpen]])])]),n(v),n(m)],64)}const ht=_(D,[["render",it]]);export{ht as default};