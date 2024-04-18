import{B as P}from"./BannerBlock-Rn5I6nXJ.js";import{s as n}from"./sweetAlert-v5bt2MnZ.js";import{_ as A,c as l,b as v,a as s,w as f,g as L,q as m,t as g,k as F,F as y,h as k,n as b,r as w,o as i,d as C,p as B,f as I,e as N}from"./index--UaHxLc5.js";const u="https://two024-south-json-server-vercel.onrender.com",S={components:{BannerBlock:P},data(){return{allAttractions:[],enabledAttractions:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[],fullPath:"",currentURL:"",selectedCategory:"全部",currentPage:1,limitPage:6,pageTotal:0,attractionsCategory:[],status:{loadingItem:!1},category:"全部",heartData:[],isFavorite:{},userId:"",token:"",isLoading:!1}},computed:{filterCategory(){const t=this.attractionsCategory.map(c=>c.category),e=[...new Set(t)];return e.unshift("全部"),e},filterCateNum(){const t={};return this.attractionsCategory.forEach(e=>{t[e.category]?t[e.category]+=1:t[e.category]=1}),t.全部=this.attractionsCategory.length,t},filteredProducts(){return this.selectedCategory==="全部"||!this.selectedCategory?this.enabledAttractions:this.enabledAttractions.filter(t=>t.category===this.selectedCategory)}},watch:{$route(t,e){this.currentURL=t.fullPath,this.$root.navigatedFromHeader&&t.fullPath!=="/TouristAttractions"&&(this.selectedCategory="全部",this.status.loadingItem=!0,this.getAttractions(),this.$root.navigatedFromHeader=!1)}},created(){this.category=this.$route.query.category,this.selectedCategory=this.category,this.getAttractions()},methods:{isFirstItem(t){return t===0},isLastItem(t){return t===this.filterCategory.length-1},getHeartData(){this.axios.get(`${u}/hearts`).then(t=>{t.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(t=>{n.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(t,e,c,h){this.token?this.axios.get(`${u}/hearts`).then(r=>{const o=r.data.find(d=>d.product===t&&d.userId===this.userId&&d.tag==="旅遊景點");o?this.axios.delete(`${u}/hearts/${o.id}`).then(d=>{this.isFavorite[t]=!1,n.threeLayerCheckType("success",`取消收藏 ${c} 成功`),this.getHeartData()}).catch(d=>{n.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${u}/hearts`,{product:t,category:e,title:c,userId:this.userId,tag:"旅遊景點",imageUrl:h}).then(d=>{this.isFavorite[t]=!0,n.threeLayerCheckType("success",`已加入收藏 ${c} 成功`),this.getHeartData()}).catch(d=>{n.threeLayerCheckType("error","收藏資料失敗")})}).catch(r=>{n.threeLayerCheckType("error","取得愛心收藏資料失敗")}):n.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getAttractions(t=1){this.axios.get(`${u}/attractions`).then(e=>{this.attractionsCategory=e.data.filter(c=>c.is_enabled===1)}).catch(e=>{n.threeLayerCheckType("error","取得景點資料失敗")}),this.selectedCategory==="全部"||!this.selectedCategory?this.axios.get(`${u}/attractions?_limit=${this.limitPage}&_page=${t}`).then(e=>{var c=parseInt(e.headers["x-total-count"]);this.pageTotal=Math.ceil(c/this.limitPage),this.currentPage=t,this.allAttractions=e.data,this.enabledAttractions=this.allAttractions.filter(h=>h.is_enabled===1),this.isLoading=!1,this.status.loadingItem=!1,this.$router.push({path:"/TouristAttractions",query:{category:this.selectedCategory,page:this.currentPage}}),window.scrollTo(0,0)}).catch(e=>{n.threeLayerCheckType("error","取得全部景點資料失敗")}):this.axios.get(`${u}/attractions?category=${this.selectedCategory}&_limit=${this.limitPage}&_page=${t}`).then(e=>{var c=parseInt(e.headers["x-total-count"]);this.pageTotal=Math.ceil(c/this.limitPage),this.currentPage=t,this.allAttractions=e.data,this.enabledAttractions=this.allAttractions.filter(h=>h.is_enabled===1),this.isLoading=!1,this.status.loadingItem=!1,this.$router.push({path:"/TouristAttractions",query:{category:this.selectedCategory,page:this.currentPage}}),window.scrollTo(0,0)}).catch(e=>{n.threeLayerCheckType("error","取得區域景點資料失敗")})},filterProducts(t){this.selectedCategory=t,this.status.loadingItem=!0,this.getAttractions()},truncateContent(t,e){return t&&t.length>e?t.substring(0,e)+"...":t},getCookie(t){const e=document.cookie.split(";");for(let c of e){const[h,r]=c.trim().split("=");if(h===t)return r}return null}},mounted(){const t=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=t*1,this.token=e,this.getAttractions(),this.getHeartData(),window.scrollTo(0,0),this.isLoading=!0,this.fullPath=this.$route.fullPath}},T=t=>(B("data-v-4db567ba"),t=t(),I(),t),D={class:"container py-10 py-lg-30"},j={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-8 pb-lg-15"},q={class:"breadcrumb mb-0 fs-5"},H={class:"breadcrumb-item"},U={class:"breadcrumb-item","aria-current":"page"},V={key:1},E={key:0,class:"breadcrumb-item","aria-current":"page"},M={class:"tourist-list"},z={class:"row"},R={class:"col-12 col-lg-3 mb-5 mb-md-6 mb-lg-0"},G={class:"border-1 border w-100 h-100 rounded-6"},K=T(()=>s("p",{class:"fs-5 fs-lg-4 p-3 p-lg-5 bg-primary-500 text-white rounded-top-end"}," 地區篩選 ",-1)),J={class:"nav flex-row flex-lg-column"},O=["onClick"],Q={class:"d-none d-lg-block"},W={class:"d-none d-sm-block d-lg-none ms-1"},X={class:"col-12 col-lg-9"},Y={key:0,class:"row g-3"},Z=N('<div class="card card-att h-100" data-v-4db567ba><span class="tag text-white placeholder-glow" data-v-4db567ba></span><button class="heart border-0" aria-label="heart" data-v-4db567ba><i class="bi bi-heart" data-v-4db567ba></i></button><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25" alt="Placeholder Image" data-v-4db567ba><div class="card-body" data-v-4db567ba><span class="placeholder w-60" data-v-4db567ba></span><div class="col-12 placeholder-glow" data-v-4db567ba><span class="placeholder w-100" data-v-4db567ba></span><span class="placeholder w-100" data-v-4db567ba></span><span class="placeholder w-100" data-v-4db567ba></span><span class="placeholder w-100" data-v-4db567ba></span></div></div><div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow" data-v-4db567ba><div class="d-flex justify-content-end" data-v-4db567ba><span class="placeholder w-25" data-v-4db567ba></span></div></div></div>',1),$=[Z],tt={key:0,class:"text-center",style:{margin:"150px"}},et=T(()=>s("div",{class:"spinner-border",role:"status",style:{width:"3rem",height:"3rem",color:"#43b8bd"}},[s("span",{class:"visually-hidden"},"Loading...")],-1)),st=[et],at={key:1},rt={class:"row g-3"},ot={class:"card card-att h-100"},it={class:"tag text-white"},ct={class:"card-att-img"},lt=["src"],nt=["onClick"],dt={class:"card-body"},ht={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title"},gt={class:"card-text card-font-truncate card-body-att"},ut={class:"card-footer text-end border-0"},pt={"aria-label":"Page navigation example",class:"my-10"},yt={class:"pagination justify-content-center"},bt=["onClick"];function _t(t,e,c,h,r,o){const d=w("BannerBlock"),_=w("router-link");return i(),l(y,null,[v(d),s("div",D,[s("nav",j,[s("ol",q,[s("li",H,[v(_,{to:"/",exact:"","active-class":"active-link"},{default:f(()=>[C("首頁")]),_:1})]),s("li",U,[r.selectedCategory!=="全部"?(i(),L(_,{key:0,exact:"","active-class":"active-link",to:{path:"/TouristAttractions",query:{category:"全部",page:"1"}},onClick:e[0]||(e[0]=m(a=>o.filterProducts("全部"),["prevent"]))},{default:f(()=>[C(" 南部旅遊景點 ")]),_:1})):(i(),l("span",V," 南部旅遊景點 "))]),r.selectedCategory!=="全部"?(i(),l("li",E,[s("span",null,g(r.selectedCategory),1)])):F("",!0)])]),s("div",M,[s("div",z,[s("div",R,[s("div",G,[K,s("ul",J,[(i(!0),l(y,null,k(o.filterCategory,(a,p)=>(i(),l("li",{class:b(["nav-item w-25 w-lg-100 tourist-broder-radius",{"first-active-category":o.isFirstItem(p),"last-active-category":o.isLastItem(p),"active-category":r.selectedCategory===a}]),key:p},[s("a",{class:b(["nav-link p-5 fs-5 link-color d-flex justify-content-center justify-content-lg-between",{"active-color":r.selectedCategory===a}]),href:"#","aria-current":"page",onClick:m(x=>o.filterProducts(a),["prevent"])},[C(g(a)+" ",1),s("span",Q,g(o.filterCateNum[a]),1),s("span",W,"("+g(o.filterCateNum[a])+")",1)],10,O)],2))),128))])])]),s("div",X,[r.isLoading?(i(),l("div",Y,[(i(),l(y,null,k(3,a=>s("div",{key:a,class:"col-12 col-md-6 col-lg-4"},$)),64))])):(i(),l(y,{key:1},[r.status.loadingItem?(i(),l("div",tt,st)):(i(),l("div",at,[s("div",rt,[(i(!0),l(y,null,k(o.filteredProducts,(a,p)=>(i(),l("div",{class:"col-12 col-md-6 col-lg-4",key:p+123},[s("div",ot,[s("span",it,g(a.category),1),s("div",ct,[v(_,{to:{name:"TouristSingleAttraction",params:{category:a.category,title:a.title}}},{default:f(()=>[s("img",{src:a.imageUrl,class:"img-fluid stretched-link",alt:"attractionItem.title",style:{"aspect-ratio":"1 / 1"}},null,8,lt)]),_:2},1032,["to"])]),s("button",{class:"heart border-0",onClick:x=>o.toggleFavorite(a.id,a.category,a.title,a.imageUrl),type:"button","aria-label":"heart"},[s("i",{class:b(["bi",{"bi-heart-fill":r.isFavorite[a.id],"bi-heart":!r.isFavorite[a.id]}]),style:{"font-size":"24px"}},null,2)],8,nt),s("div",null,[s("div",dt,[v(_,{to:{name:"TouristSingleAttraction",params:{category:a.category,title:a.title}}},{default:f(()=>[s("h4",ht,g(a.title),1)]),_:2},1032,["to"]),s("p",gt,g(o.truncateContent(a.description,65)),1)]),s("div",ut,[v(_,{to:{name:"TouristSingleAttraction",params:{category:a.category,title:a.title}},class:"fs-5 card-footer-title"},{default:f(()=>[C("more")]),_:2},1032,["to"])])])])]))),128)),s("nav",pt,[s("ul",yt,[s("li",{class:b(["page-item",{disabled:!r.currentPage||r.currentPage===1}])},[s("button",{class:"page-link page-link-radius-2",onClick:e[1]||(e[1]=m(a=>r.currentPage>1&&o.getAttractions(r.currentPage-1),["prevent"]))}," 上一頁 ")],2),(i(!0),l(y,null,k(r.pageTotal,a=>(i(),l("li",{class:"page-item",key:`page-${a}`},[s("button",{class:b(["page-link page-link-0 rounded-0",{active:a===r.currentPage}]),onClick:m(p=>o.getAttractions(a),["prevent"])},g(a),11,bt)]))),128)),s("li",{class:b(["page-item",{disabled:!r.currentPage||r.currentPage===r.pageTotal}])},[s("button",{class:"page-link page-link-radius",onClick:e[2]||(e[2]=m(a=>r.currentPage<r.pageTotal&&o.getAttractions(r.currentPage+1),["prevent"]))}," 下一頁 ")],2)])])])]))],64))])])])])],64)}const kt=A(S,[["render",_t],["__scopeId","data-v-4db567ba"]]);export{kt as default};
