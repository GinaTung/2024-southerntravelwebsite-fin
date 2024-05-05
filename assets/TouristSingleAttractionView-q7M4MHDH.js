import{g as q,i as H,e as G,S as J,a as K,N as Q}from"./navigation-J1QVTv4C.js";import{f as R,L as W}from"./LikeBlock-RBgDB1_4.js";import{M as X}from"./modal-GNkx81KF.js";import{s as _}from"./sweetAlert-6dSAurRP.js";import{_ as U,m as Y,o,c as l,b as x,w as I,F as g,i as y,h as B,a,r as S,p as V,f as N,k as E,q as O,t as T,n as Z,e as j,d as D,l as F}from"./index-oxl5H5eR.js";import{B as ee}from"./BannerBlock-ON323o56.js";import"./selector-engine-41cWCrC3.js";function te(s){let{swiper:e,extendParams:p,on:c}=s;p({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,b=!1;e.thumbs={swiper:null};function h(){const r=e.thumbs.swiper;if(!r||r.destroyed)return;const t=r.clickedIndex,u=r.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let n;r.params.loop?n=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10):n=t,e.params.loop?e.slideToLoop(n):e.slideTo(n)}function w(){const{thumbs:r}=e.params;if(i)return!1;i=!0;const t=e.constructor;if(r.swiper instanceof t)e.thumbs.swiper=r.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(H(r.swiper)){const u=Object.assign({},r.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(u),b=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",h),!0}function v(r){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const u=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let n=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),t.slides.forEach(f=>f.classList.remove(d)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let f=0;f<n;f+=1)G(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+f}"]`).forEach(m=>{m.classList.add(d)});else for(let f=0;f<n;f+=1)t.slides[e.realIndex+f]&&t.slides[e.realIndex+f].classList.add(d);const k=e.params.thumbs.autoScrollOffset,L=k&&!t.params.loop;if(e.realIndex!==t.realIndex||L){const f=t.activeIndex;let m,M;if(t.params.loop){const z=t.slides.filter($=>$.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];m=t.slides.indexOf(z),M=e.activeIndex>e.previousIndex?"next":"prev"}else m=e.realIndex,M=m>e.previousIndex?"next":"prev";L&&(m+=M==="next"?k:-1*k),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(m)<0&&(t.params.centeredSlides?m>f?m=m-Math.floor(u/2)+1:m=m+Math.floor(u/2)-1:m>f&&t.params.slidesPerGroup,t.slideTo(m,r?0:void 0))}}c("beforeInit",()=>{const{thumbs:r}=e.params;if(!(!r||!r.swiper))if(typeof r.swiper=="string"||r.swiper instanceof HTMLElement){const t=q(),u=()=>{const d=typeof r.swiper=="string"?t.querySelector(r.swiper):r.swiper;if(d&&d.swiper)r.swiper=d.swiper,w(),v(!0);else if(d){const k=L=>{r.swiper=L.detail[0],d.removeEventListener("init",k),w(),v(!0),r.swiper.update(),e.update()};d.addEventListener("init",k)}return d},n=()=>{if(e.destroyed)return;u()||requestAnimationFrame(n)};requestAnimationFrame(n)}else w(),v(!0)}),c("slideChange update resize observerUpdate",()=>{v()}),c("setTransition",(r,t)=>{const u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(t)}),c("beforeDestroy",()=>{const r=e.thumbs.swiper;!r||r.destroyed||b&&r.destroy()}),Object.assign(e.thumbs,{init:w,update:v})}const se="https://two024-south-json-server-vercel.onrender.com",ae={components:{Swiper:J,SwiperSlide:K},data(){return{attractionTitle:"",attractions:[],enabledAttractions:[],imagesUrl:"",showModal:!1,modalImageFilePath:"",modalImageIndex:0,bigModal:null}},methods:{openModal(s,e){this.bigModal.show(),this.modalImageFilePath=s,this.modalImageIndex=e,this.showModal=!0},getAttractions(){this.axios.get(`${se}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(e=>{e.is_enabled===1&&this.attractionTitle===e.title&&this.enabledAttractions.push(e)}),this.imagesUrl=this.enabledAttractions[0].imagesUrl}).catch(s=>{_.threeLayerCheckType("error","取得景點資料失敗")})}},setup(){const s=Y(null);return{thumbsSwiper:s,setThumbsSwiper:p=>{s.value=p},modules:[R,Q,te]}},mounted(){this.bigModal=new X(this.$refs.bigModal,{keyboard:!1,backdrop:"static"}),this.attractionTitle=this.$route.params.title,this.getAttractions()}},P=s=>(V("data-v-11cd01d6"),s=s(),N(),s),ie=["src","alt"],re=["onClick"],oe=P(()=>a("i",{class:"bi bi-zoom-in fs-2"},null,-1)),ne=[oe],le=P(()=>a("button",{class:"swiper-button-next border-0 bg-transparent","aria-label":"arrow-next"},null,-1)),ce=P(()=>a("button",{class:"swiper-button-prev border-0 bg-transparent","aria-label":"arrow-prev"},null,-1)),de=["src","alt"],pe={class:"modal fade",id:"bigModal",tabindex:"-1","aria-labelledby":"bigModalLabel","aria-hidden":"true",ref:"bigModal"},ue={class:"modal-dialog modal-dialog-centered modal-xl"},he={class:"modal-content bg-transparent"},me={class:"modal-body p-0"},be=["src"],fe=P(()=>a("button",{type:"button",class:"border-0 bg-transparent position-absolute top-3 end-3 p-3","data-bs-dismiss":"modal","aria-label":"Close"},[a("i",{class:"bi bi-x-lg text-secondary-400 fs-3"})],-1));function ve(s,e,p,c,i,b){const h=S("swiper-slide"),w=S("swiper");return o(),l(g,null,[x(w,{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:c.thumbsSwiper},modules:c.modules,class:"mySwiper2"},{default:I(()=>[(o(!0),l(g,null,y(i.imagesUrl,(v,r)=>(o(),B(h,{key:r+123},{default:I(()=>[a("img",{src:v,class:"img-fluid",alt:i.attractionTitle},null,8,ie),a("button",{class:"position-absolute text-white end-5 bottom-5 fs-4 bg-transparent border-0",onClick:t=>b.openModal(v,r),"aria-label":"zoom-in"},ne,8,re)]),_:2},1024))),128)),le,ce]),_:1},8,["navigation","thumbs","modules"]),x(w,{onSwiper:c.setThumbsSwiper,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:c.modules,class:"mySwiper3"},{default:I(()=>[(o(!0),l(g,null,y(i.imagesUrl,(v,r)=>(o(),B(h,{key:r+123},{default:I(()=>[a("img",{src:v,class:"img-fluid",alt:i.attractionTitle},null,8,de)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),a("div",pe,[a("div",ue,[a("div",he,[a("div",me,[a("img",{src:i.modalImageFilePath,class:"modal-content position-relative",alt:"attractionTitle"},null,8,be),fe])])])],512)],64)}const ge=U(ae,[["render",ve],["__scopeId","data-v-11cd01d6"]]),C="https://two024-south-json-server-vercel.onrender.com",we={components:{singleAttraction:ge,BannerBlock:ee,LikeBlock:W},data(){return{category:"",attractionTitle:"",attractions:[],enabledAttractions:[],newAttractionsContent:"",newAttractionsTimeOpen:"",attractionId:"",heartData:[],isFavorite:{},userId:"",token:"",isLoading:!1,attractionImageUrl:""}},methods:{redirectToA(s){this.$router.push({path:"/TouristAttractions",query:{category:s}})},getHeartData(){this.axios.get(`${C}/hearts`).then(s=>{s.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(s=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,e,p,c){this.token?this.axios.get(`${C}/hearts`).then(i=>{const b=i.data.find(h=>h.product===s&&h.userId===this.userId&&h.tag==="旅遊景點");b?this.axios.delete(`${C}/hearts/${b.id}`).then(h=>{this.isFavorite[s]=!1,_.threeLayerCheckType("success",`取消收藏 ${p} 成功`),this.getHeartData()}).catch(h=>{_.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${C}/hearts`,{product:s,category:e,title:p,userId:this.userId,tag:"旅遊景點",imageUrl:c}).then(h=>{this.isFavorite[s]=!0,_.threeLayerCheckType("success",`已加入收藏 ${p} 成功`),this.getHeartData()}).catch(h=>{_.threeLayerCheckType("error","收藏資料失敗")})}).catch(i=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")}):_.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getAttractions(){this.axios.get(`${C}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(e=>{e.is_enabled===1&&this.attractionTitle===e.title&&(this.enabledAttractions.push(e),this.attractionId=e.id,this.isLoading=!1,this.attractionImageUrl=e.imageUrl)}),this.getNewText(),this.getnewAttractionsTimeOpen()}).catch(()=>{_.threeLayerCheckType("error","取得景點資料失敗")})},getNewText(){const s={};this.attractions.forEach(e=>{e.content&&e.content.split(";").forEach(c=>{const i=c.trim();s[e.id]||(s[e.id]=[]),s[e.id].push(i)})}),this.newProductsContent=Object.entries(s).map(([e,p])=>({id:e,content:p}))},getnewAttractionsTimeOpen(){const s={};this.attractions.forEach(e=>{e.content&&e.timeOpen.split(";").forEach(c=>{const i=c.trim();s[e.id]||(s[e.id]=[]),s[e.id].push(i)})}),this.newAttractionsTimeOpen=Object.entries(s).map(([e,p])=>({id:e,content:p}))},getCookie(s){const e=document.cookie.split(";");for(let p of e){const[c,i]=p.trim().split("=");if(c===s)return i}return null}},mounted(){this.category=this.$route.params.category,this.attractionTitle=this.$route.params.title;const s=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=s*1,this.token=e,this.isLoading=!0,this.getAttractions(),this.getHeartData(),window.scrollTo(0,0)}},A=s=>(V("data-v-e23f778c"),s=s(),N(),s),_e={class:"container py-10 py-lg-30 px-lg-20"},ye={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},ke={class:"breadcrumb mb-0 fs-5"},Te={class:"breadcrumb-item"},xe={class:"breadcrumb-item"},Ie={class:"breadcrumb-item"},Se={class:"breadcrumb-item"},Ce={key:0,class:"w-100 w-xl-95 position-relative pe-0"},Ae={class:"d-flex align-items-center mb-4 fs-3 border-start border-primary-500 border-5"},Le=A(()=>a("span",{class:"placeholder w-50 fs-4 ms-2"},null,-1)),Pe=A(()=>a("i",{class:"bi bi-heart"},null,-1)),Me=[Pe],Ee=j('<div class="row" data-v-e23f778c><div class="col-12" data-v-e23f778c><div class="mb-4" data-v-e23f778c><div class="card-att-img card-att-img-2" data-v-e23f778c><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid pb-4 pb-lg-0 opacity-25 w-100" alt="Placeholder Image" data-v-e23f778c></div></div></div></div>',1),Oe={class:"d-flex align-items-center mb-4 fs-3 border-start border-primary-500 border-5"},Fe={class:"fs-3 me-2 fw-bold ps-3"},Be={class:"fs-3 me-4 fw-bold"},je={key:2,class:"row g-3"},De=j('<div class="tourist-intr-content my-lg-10 my-8" data-v-e23f778c><div class="mb-8" data-v-e23f778c><p class="fs-5 fs-md-4 fw-bold mb-4" data-v-e23f778c>景點介紹</p><span class="placeholder w-100" data-v-e23f778c></span><span class="placeholder w-100" data-v-e23f778c></span><span class="placeholder w-75" data-v-e23f778c></span><span class="placeholder w-50" data-v-e23f778c></span></div><div class="mb-8" data-v-e23f778c><span class="fs-5 fs-md-4 mb-4 fw-bold" data-v-e23f778c>開放時間：</span><span class="placeholder w-100" data-v-e23f778c></span><span class="placeholder w-100" data-v-e23f778c></span><span class="placeholder w-50" data-v-e23f778c></span></div><div data-v-e23f778c><p class="fs-5 fs-md-4 mb-3 fw-bold" data-v-e23f778c>交通資訊：</p><div class="row" data-v-e23f778c><div class="d-flex col-12 col-lg-7 flex-column" data-v-e23f778c><span class="placeholder w-75 mb-3" data-v-e23f778c></span><span class="placeholder w-50 mb-3" data-v-e23f778c></span><span class="placeholder w-100" data-v-e23f778c></span></div><div class="col-12 col-lg-5" data-v-e23f778c><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid pb-4 pb-lg-0 opacity-25" alt="Placeholder Image" data-v-e23f778c></div></div></div></div>',1),Ue=[De],Ve={key:0},Ne={class:"tourist-intr-content my-lg-10 my-8"},ze={class:"mb-8"},$e=A(()=>a("p",{class:"fs-5 fs-md-4 fw-bold mb-4"},"景點介紹",-1)),qe={class:"fs-6 fs-md-5"},He={class:"mb-8"},Ge=A(()=>a("span",{class:"fs-5 fs-md-4 mb-4 fw-bold"},"開放時間：",-1)),Je={key:0},Ke=A(()=>a("p",{class:"fs-5 fs-md-4 mb-3 fw-bold"},"交通資訊：",-1)),Qe={class:"row"},Re={class:"d-flex col-12 col-lg-7 justify-content-between flex-column"},We={key:0},Xe={class:"col-12 col-lg-5"},Ye=["src","title"],Ze={key:4,class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},et=j('<div class="card card-att h-100" data-v-e23f778c><span class="tag text-white placeholder-glow" data-v-e23f778c></span><button class="heart border-0" aria-label="heart" data-v-e23f778c><i class="bi bi-heart heart-click" data-v-e23f778c></i></button><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 first-img z-index-1" alt="Placeholder Image" data-v-e23f778c><div class="card-body" data-v-e23f778c><span class="placeholder w-25" data-v-e23f778c></span><div class="col-12 placeholder-glow" data-v-e23f778c><span class="placeholder w-50" data-v-e23f778c></span><span class="placeholder w-60" data-v-e23f778c></span></div></div><div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow" data-v-e23f778c><div class="d-flex justify-content-between" data-v-e23f778c><span class="placeholder w-25" data-v-e23f778c></span><span class="placeholder w-25" data-v-e23f778c></span></div></div></div>',1),tt=[et];function st(s,e,p,c,i,b){const h=S("BannerBlock"),w=S("router-link"),v=S("singleAttraction"),r=S("LikeBlock");return o(),l(g,null,[x(h),a("div",_e,[a("nav",ye,[a("ol",ke,[a("li",Te,[x(w,{to:"/",exact:"","active-class":"active-link"},{default:I(()=>[D("首頁")]),_:1})]),a("li",xe,[x(w,{exact:"","active-class":"active-link",to:{path:"/TouristAttractions",query:{category:"全部",page:"1"}}},{default:I(()=>[D(" 南部旅遊景點 ")]),_:1})]),a("li",Ie,[E(a("button",{onClick:e[0]||(e[0]=t=>b.redirectToA("台南")),class:"bg-transparent border-0 btn-hover text-dark",type:"button","aria-label":"台南"}," 台南 ",512),[[O,i.category==="台南"]]),E(a("button",{onClick:e[1]||(e[1]=t=>b.redirectToA("嘉義")),class:"bg-transparent border-0 btn-hover text-dark",type:"button","aria-label":"嘉義"}," 嘉義 ",512),[[O,i.category==="嘉義"]]),E(a("button",{onClick:e[2]||(e[2]=t=>b.redirectToA("高雄")),class:"bg-transparent border-0 btn-hover text-dark",type:"button","aria-label":"高雄"}," 高雄 ",512),[[O,i.category==="高雄"]])]),a("li",Se,T(i.attractionTitle),1)])]),i.isLoading?(o(),l("div",Ce,[a("div",Ae,[Le,a("button",{class:"border-0 heart-position-none fs-3 bg-transparent",onClick:e[3]||(e[3]=t=>b.toggleFavorite(i.attractionId,i.category,i.attractionTitle,i.attractionImageUrl)),type:"button","aria-label":"heart"},Me)]),Ee])):(o(),l(g,{key:1},[a("div",Oe,[a("span",Fe,T(i.category),1),a("h3",Be,T(i.attractionTitle),1),a("button",{class:"border-0 heart-position-none fs-3 bg-transparent",onClick:e[4]||(e[4]=t=>b.toggleFavorite(i.attractionId,i.category,i.attractionTitle,i.attractionImageUrl)),type:"button","aria-label":"heart"},[a("i",{class:Z(["bi",{"bi-heart-fill":i.isFavorite[i.attractionId],"bi-heart":!i.isFavorite[i.attractionId]}])},null,2)])]),x(v)],64)),i.isLoading?(o(),l("div",je,Ue)):(o(!0),l(g,{key:3},y(i.enabledAttractions,(t,u)=>(o(),l("div",{class:"row g-3",key:t.id},[u===0?(o(),l("div",Ve,[a("div",Ne,[a("div",ze,[$e,a("p",qe,T(t.description),1)]),a("div",He,[Ge,(o(!0),l(g,null,y(i.newAttractionsTimeOpen,n=>(o(),l("div",{key:n.id},[n.id===t.id?(o(),l("div",Je,[(o(!0),l(g,null,y(n.content,d=>(o(),l("p",{key:d+123,class:"fs-6 fs-md-5 my-4"},T(d),1))),128))])):F("",!0)]))),128))]),a("div",null,[Ke,a("div",Qe,[a("div",Re,[(o(!0),l(g,null,y(s.newProductsContent,n=>(o(),l("div",{key:n.id},[n.id===t.id?(o(),l("div",We,[(o(!0),l(g,null,y(n.content,d=>(o(),l("p",{key:d,class:"fs-6 fs-md-5 my-4 mb-4"},T(d),1))),128))])):F("",!0)]))),128))]),a("div",Xe,[a("iframe",{src:t.imgMap,width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",title:t.title},null,8,Ye)])])])])])):F("",!0)]))),128)),i.isLoading?(o(),l("div",Ze,[(o(),l(g,null,y(3,t=>a("div",{key:t,class:"col"},tt)),64))])):(o(),B(r,{key:5,adCategoryTitle:"attractions",token:i.token,"user-id":i.userId},null,8,["token","user-id"]))])],64)}const dt=U(we,[["render",st],["__scopeId","data-v-e23f778c"]]);export{dt as default};
