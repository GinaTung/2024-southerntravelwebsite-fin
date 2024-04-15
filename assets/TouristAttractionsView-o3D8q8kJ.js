import{B as P}from"./BannerBlock-7Jd9BQSf.js";import{s as n}from"./sweetAlert-bltbIvrU.js";import{_ as A,c as l,b as f,a as s,w as _,g as L,m as v,t as g,j as F,F as p,h as k,n as b,r as w,o,d as C,p as B,f as N,e as S}from"./index-1wUJz-zt.js";const u="https://two024-south-json-server-vercel.onrender.com",j={components:{BannerBlock:P},data(){return{allAttractions:[],enabledAttractions:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[],fullPath:"",currentURL:"",selectedCategory:"全部",currentPage:1,limitPage:6,pageTotal:0,attractionsCategory:[],status:{loadingItem:!1},category:"全部",heartData:[],isFavorite:{},userId:"",token:"",isLoading:!1}},computed:{filterCategory(){const t=this.attractionsCategory.map(i=>i.category),e=[...new Set(t)];return e.unshift("全部"),e},filterCateNum(){const t={};return this.attractionsCategory.forEach(e=>{t[e.category]?t[e.category]+=1:t[e.category]=1}),t.全部=this.attractionsCategory.length,t},filteredProducts(){return this.selectedCategory==="全部"||!this.selectedCategory?this.enabledAttractions:this.enabledAttractions.filter(t=>t.category===this.selectedCategory)}},watch:{$route(t,e){this.currentURL=t.fullPath,this.$root.navigatedFromHeader&&t.fullPath!=="/TouristAttractions"&&(this.selectedCategory="全部",this.status.loadingItem=!0,this.getAttractions(),this.$root.navigatedFromHeader=!1)}},created(){this.category=this.$route.query.category,this.selectedCategory=this.category,this.getAttractions()},methods:{getHeartData(){this.axios.get(`${u}/hearts`).then(t=>{t.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(t=>{n.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(t,e,i,h){this.token?this.axios.get(`${u}/hearts`).then(r=>{const c=r.data.find(d=>d.product===t&&d.userId===this.userId&&d.tag==="旅遊景點");c?this.axios.delete(`${u}/hearts/${c.id}`).then(d=>{this.isFavorite[t]=!1,n.threeLayerCheckType("success",`取消收藏 ${i} 成功`),this.getHeartData()}).catch(d=>{n.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${u}/hearts`,{product:t,category:e,title:i,userId:this.userId,tag:"旅遊景點",imageUrl:h}).then(d=>{this.isFavorite[t]=!0,n.threeLayerCheckType("success",`已加入收藏 ${i} 成功`),this.getHeartData()}).catch(d=>{n.threeLayerCheckType("error","收藏資料失敗")})}).catch(r=>{n.threeLayerCheckType("error","取得愛心收藏資料失敗")}):n.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getAttractions(t=1){this.axios.get(`${u}/attractions`).then(e=>{this.attractionsCategory=e.data.filter(i=>i.is_enabled===1)}).catch(e=>{n.threeLayerCheckType("error","取得景點資料失敗")}),this.selectedCategory==="全部"||!this.selectedCategory?this.axios.get(`${u}/attractions?_limit=${this.limitPage}&_page=${t}`).then(e=>{var i=parseInt(e.headers["x-total-count"]);this.pageTotal=Math.ceil(i/this.limitPage),this.currentPage=t,this.allAttractions=e.data,this.enabledAttractions=this.allAttractions.filter(h=>h.is_enabled===1),this.isLoading=!1,this.status.loadingItem=!1,this.$router.push({path:"/TouristAttractions",query:{category:this.selectedCategory,page:this.currentPage}}),window.scrollTo(0,0)}).catch(e=>{n.threeLayerCheckType("error","取得全部景點資料失敗")}):this.axios.get(`${u}/attractions?category=${this.selectedCategory}&_limit=${this.limitPage}&_page=${t}`).then(e=>{var i=parseInt(e.headers["x-total-count"]);this.pageTotal=Math.ceil(i/this.limitPage),this.currentPage=t,this.allAttractions=e.data,this.enabledAttractions=this.allAttractions.filter(h=>h.is_enabled===1),this.isLoading=!1,this.status.loadingItem=!1,this.$router.push({path:"/TouristAttractions",query:{category:this.selectedCategory,page:this.currentPage}}),window.scrollTo(0,0)}).catch(e=>{n.threeLayerCheckType("error","取得區域景點資料失敗")})},filterProducts(t){this.selectedCategory=t,this.status.loadingItem=!0,this.getAttractions()},truncateContent(t,e){return t&&t.length>e?t.substring(0,e)+"...":t},getCookie(t){const e=document.cookie.split(";");for(let i of e){const[h,r]=i.trim().split("=");if(h===t)return r}return null}},mounted(){const t=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=t*1,this.token=e,this.getAttractions(),this.getHeartData(),window.scrollTo(0,0),this.isLoading=!0,this.fullPath=this.$route.fullPath}},x=t=>(B("data-v-c10f3943"),t=t(),N(),t),D={class:"container py-10 py-lg-30"},H={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-8 pb-lg-15"},I={class:"breadcrumb mb-0 fs-5"},U={class:"breadcrumb-item"},V={class:"breadcrumb-item","aria-current":"page"},q={key:1},E={key:0,class:"breadcrumb-item","aria-current":"page"},M={class:"tourist-list"},z={class:"row"},R={class:"col-12 col-lg-3 mb-5 mb-md-6 mb-lg-0"},$={class:"border-1 border w-100 h-100 rounded-6"},G=x(()=>s("p",{class:"fs-5 fs-lg-4 p-3 p-lg-5 bg-primary-500 text-white rounded-top-end"},"地區篩選",-1)),K={class:"nav flex-row flex-lg-column"},J=["onClick"],O={class:"d-none d-lg-block"},Q={class:"d-none d-sm-block d-lg-none ms-1"},W={class:"col-12 col-lg-9"},X={key:0,class:"row g-3"},Y=S('<div class="card card-att h-100" data-v-c10f3943><span class="tag text-white placeholder-glow" data-v-c10f3943></span><button class="heart border-0" data-v-c10f3943><i class="bi bi-heart" data-v-c10f3943></i></button><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25" alt="Placeholder Image" data-v-c10f3943><div class="card-body" data-v-c10f3943><span class="placeholder w-60" data-v-c10f3943></span><div class="col-12 placeholder-glow" data-v-c10f3943><span class="placeholder w-100" data-v-c10f3943></span><span class="placeholder w-100" data-v-c10f3943></span><span class="placeholder w-100" data-v-c10f3943></span><span class="placeholder w-100" data-v-c10f3943></span></div></div><div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow" data-v-c10f3943><div class="d-flex justify-content-end" data-v-c10f3943><span class="placeholder w-25" data-v-c10f3943></span></div></div></div>',1),Z=[Y],tt={key:0,class:"text-center",style:{margin:"150px"}},et=x(()=>s("div",{class:"spinner-border",role:"status",style:{width:"3rem",height:"3rem",color:"#43b8bd"}},[s("span",{class:"visually-hidden"},"Loading...")],-1)),st=[et],at={key:1},rt={class:"row g-3"},ot={class:"card card-att h-100"},it={class:"tag text-white"},ct={class:"card-att-img"},lt=["src"],nt=["onClick"],dt={class:"card-body"},ht={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title"},gt={class:"card-text card-font-truncate card-body-att"},ut={class:"card-footer text-end border-0"},pt={"aria-label":"Page navigation example",class:"my-10"},yt={class:"pagination justify-content-center"},ft=["onClick"];function _t(t,e,i,h,r,c){const d=w("BannerBlock"),y=w("router-link");return o(),l(p,null,[f(d),s("div",D,[s("nav",H,[s("ol",I,[s("li",U,[f(y,{to:"/",exact:"","active-class":"active-link"},{default:_(()=>[C("首頁")]),_:1})]),s("li",V,[r.selectedCategory!=="全部"?(o(),L(y,{key:0,exact:"","active-class":"active-link",to:{path:"/TouristAttractions",query:{category:"全部",page:"1"}},onClick:e[0]||(e[0]=v(a=>c.filterProducts("全部"),["prevent"]))},{default:_(()=>[C(" 南部旅遊景點 ")]),_:1})):(o(),l("span",q," 南部旅遊景點 "))]),r.selectedCategory!=="全部"?(o(),l("li",E,[s("span",null,g(r.selectedCategory),1)])):F("",!0)])]),s("div",M,[s("div",z,[s("div",R,[s("div",$,[G,s("ul",K,[(o(!0),l(p,null,k(c.filterCategory,(a,m)=>(o(),l("li",{class:"nav-item w-25 w-lg-100 tourist-broder-radius",key:m},[s("a",{class:b(["nav-link p-5 fs-5 link-color d-flex justify-content-center justify-content-lg-between",{"active-category":r.selectedCategory===a}]),href:"#","aria-current":"page",onClick:v(T=>c.filterProducts(a),["prevent"])},[C(g(a)+" ",1),s("span",O,g(c.filterCateNum[a]),1),s("span",Q,"("+g(c.filterCateNum[a])+")",1)],10,J)]))),128))])])]),s("div",W,[r.isLoading?(o(),l("div",X,[(o(),l(p,null,k(3,a=>s("div",{key:a,class:"col-12 col-md-6 col-lg-4"},Z)),64))])):(o(),l(p,{key:1},[r.status.loadingItem?(o(),l("div",tt,st)):(o(),l("div",at,[s("div",rt,[(o(!0),l(p,null,k(c.filteredProducts,(a,m)=>(o(),l("div",{class:"col-12 col-md-6 col-lg-4",key:m+123},[s("div",ot,[s("span",it,g(a.category),1),s("div",ct,[f(y,{to:{name:"TouristSingleAttraction",params:{category:a.category,title:a.title}}},{default:_(()=>[s("img",{src:a.imageUrl,class:"img-fluid stretched-link",alt:"attractionItem.title"},null,8,lt)]),_:2},1032,["to"])]),s("button",{class:"heart border-0",onClick:T=>c.toggleFavorite(a.id,a.category,a.title,a.imageUrl),type:"button"},[s("i",{class:b(["bi",{"bi-heart-fill":r.isFavorite[a.id],"bi-heart":!r.isFavorite[a.id]}]),style:{"font-size":"24px"}},null,2)],8,nt),s("div",null,[s("div",dt,[f(y,{to:{name:"TouristSingleAttraction",params:{category:a.category,title:a.title}}},{default:_(()=>[s("h4",ht,g(a.title),1)]),_:2},1032,["to"]),s("p",gt,g(c.truncateContent(a.description,65)),1)]),s("div",ut,[f(y,{to:{name:"TouristSingleAttraction",params:{category:a.category,title:a.title}},class:"fs-5 card-footer-title"},{default:_(()=>[C("more")]),_:2},1032,["to"])])])])]))),128)),s("nav",pt,[s("ul",yt,[s("li",{class:b(["page-item",{disabled:!r.currentPage||r.currentPage===1}])},[s("button",{class:"page-link page-link-radius-2",onClick:e[1]||(e[1]=v(a=>r.currentPage>1&&c.getAttractions(r.currentPage-1),["prevent"]))}," 上一頁 ")],2),(o(!0),l(p,null,k(r.pageTotal,a=>(o(),l("li",{class:"page-item",key:`page-${a}`},[s("button",{class:b(["page-link page-link-0 rounded-0",{active:a===r.currentPage}]),onClick:v(m=>c.getAttractions(a),["prevent"])},g(a),11,ft)]))),128)),s("li",{class:b(["page-item",{disabled:!r.currentPage||r.currentPage===r.pageTotal}])},[s("button",{class:"page-link page-link-radius",onClick:e[2]||(e[2]=v(a=>r.currentPage<r.pageTotal&&c.getAttractions(r.currentPage+1),["prevent"]))}," 下一頁 ")],2)])])])]))],64))])])])])],64)}const kt=A(j,[["render",_t],["__scopeId","data-v-c10f3943"]]);export{kt as default};
