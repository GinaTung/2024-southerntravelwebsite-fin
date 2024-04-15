import{g as R,S as le,a as ce,N as de}from"./navigation-oRMeJC8L.js";import{_ as F,o as n,g as ee,w as E,b as v,a as t,d as f,r as w,c,F as D,h as C,n as k,t as g,e as y,p as te,f as se,i as Q,v as X,j as Z}from"./index-aMdBQJT3.js";import{s as m}from"./sweetAlert-n_TCILie.js";function pe(s){let{swiper:e,extendParams:l,on:p,emit:a,params:i}=s;e.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,h=i&&i.autoplay?i.autoplay.delay:3e3,$=i&&i.autoplay?i.autoplay.delay:3e3,b,u=new Date().getTime,U,j,A,V,H,T;function K(d){!e||e.destroyed||!e.wrapperEl||d.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",K),L())}const O=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?U=!0:U&&($=b,U=!1);const d=e.autoplay.paused?b:u+$-new Date().getTime();e.autoplay.timeLeft=d,a("autoplayTimeLeft",d,d/h),o=requestAnimationFrame(()=>{O()})},ae=()=>{let d;return e.virtual&&e.params.virtual.enabled?d=e.slides.filter(_=>_.classList.contains("swiper-slide-active"))[0]:d=e.slides[e.activeIndex],d?parseInt(d.getAttribute("data-swiper-autoplay"),10):void 0},z=d=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),O();let x=typeof d>"u"?e.params.autoplay.delay:d;h=e.params.autoplay.delay,$=e.params.autoplay.delay;const _=ae();!Number.isNaN(_)&&_>0&&typeof d>"u"&&(x=_,h=_,$=_),b=x;const S=e.params.speed,q=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(S,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,S,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(S,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,S,!0,!0),a("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return x>0?(clearTimeout(r),r=setTimeout(()=>{q()},x)):requestAnimationFrame(()=>{q()}),x},G=()=>{e.autoplay.running=!0,z(),a("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),a("autoplayStop")},B=(d,x)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),d||(T=!0);const _=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",K):L()};if(e.autoplay.paused=!0,x){H&&(b=e.params.autoplay.delay),H=!1,_();return}b=(b||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&b<0&&!e.params.loop)&&(b<0&&(b=0),_())},L=()=>{e.isEnd&&b<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),T?(T=!1,z(b)):z(),e.autoplay.paused=!1,a("autoplayResume"))},J=()=>{if(e.destroyed||!e.autoplay.running)return;const d=R();d.visibilityState==="hidden"&&(T=!0,B(!0)),d.visibilityState==="visible"&&L()},Y=d=>{d.pointerType==="mouse"&&(T=!0,B(!0))},W=d=>{d.pointerType==="mouse"&&e.autoplay.paused&&L()},oe=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",Y),e.el.addEventListener("pointerleave",W))},re=()=>{e.el.removeEventListener("pointerenter",Y),e.el.removeEventListener("pointerleave",W)},ie=()=>{R().addEventListener("visibilitychange",J)},ne=()=>{R().removeEventListener("visibilitychange",J)};p("init",()=>{e.params.autoplay.enabled&&(oe(),ie(),u=new Date().getTime(),G())}),p("destroy",()=>{re(),ne(),e.autoplay.running&&N()}),p("beforeTransitionStart",(d,x,_)=>{e.destroyed||!e.autoplay.running||(_||!e.params.autoplay.disableOnInteraction?B(!0,!0):N())}),p("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}j=!0,A=!1,T=!1,V=setTimeout(()=>{T=!0,A=!0,B(!0)},200)}}),p("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!j)){if(clearTimeout(V),clearTimeout(r),e.params.autoplay.disableOnInteraction){A=!1,j=!1;return}A&&e.params.cssMode&&L(),A=!1,j=!1}}),p("slideChange",()=>{e.destroyed||!e.autoplay.running||(H=!0)}),Object.assign(e.autoplay,{start:G,stop:N,pause:B,resume:L})}const ue={components:{Swiper:le,SwiperSlide:ce},setup(){return{modules:[de,pe]}}},he=t("div",{class:"banner-bg banner-img3"},[t("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[t("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[t("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),f(" 高雄景點推薦 "),t("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),t("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"高雄港旅運中心"),t("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 高雄港是台灣港務與海運核心，近年來亞太地區郵輪旅遊產業日益興盛 "),t("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 作為台灣第一大港的高雄，在港市合作、水岸開發的方針下 ")]),t("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[t("p",{class:"fs-7 mb-2 text-center"},[f(" 同時停泊2艘排水量達22.5萬噸豪華郵輪"),t("br"),f("是南台灣最重要的海上門戶 ")]),t("p",{class:"fs-7 text-center"},[f(" 輕軌串連駁二藝術中心、高雄流行音樂中心等建設"),t("br"),f("共築高雄水岸的新天際線。 ")])])],-1),me=t("div",{class:"banner-bg banner-img2"},[t("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[t("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center"},[t("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),f(" 高雄景點推薦 "),t("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),t("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"旗津黃金海韻－海珍珠"),t("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 由兩位藝術家耗時6年完成，外純白、內金黃的海貝造型 "),t("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 能讓遊客聆聽海聲，更是亞洲最大的貝殼裝置藝術 ")]),t("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[t("p",{class:"fs-7 mb-2 text-center"},[f("由兩位藝術家耗時6年完成"),t("br"),f("外純白、內金黃的海貝造型")]),t("p",{class:"fs-7 text-center"},[f("能讓遊客聆聽海聲"),t("br"),f("更是亞洲最大的貝殼裝置藝術")])])],-1),fe=t("div",{class:"banner-bg banner-img1"},[t("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[t("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[t("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),f(" 嘉義景點推薦 "),t("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),t("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"國立故宮博物院南部院區"),t("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 博物館建築以中國水墨畫濃墨、非白與渲染三種技法 "),t("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 形成時量體展示空間及文物庫房、虛量體公共接待空間與穿透連接空間 ")]),t("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[t("p",{class:"fs-7 mb-2 text-center"},[f("博物館建築以中國水墨畫濃墨、"),t("br"),f("非白與渲染三種技法")]),t("p",{class:"fs-7 text-center"},[f(" 形成時量體展示空間及文物庫房、"),t("br"),f("虛量體公共接待空間與穿透連接空間 ")])])],-1);function ge(s,e,l,p,a,i){const r=w("swiper-slide"),o=w("swiper");return n(),ee(o,{navigation:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:p.modules,class:"mySwiper"},{default:E(()=>[v(r,null,{default:E(()=>[he]),_:1}),v(r,null,{default:E(()=>[me]),_:1}),v(r,null,{default:E(()=>[fe]),_:1})]),_:1},8,["modules"])}const be=F(ue,[["render",ge]]),_e="https://two024-south-json-server-vercel.onrender.com",ve={data(){return{products:[],enabledProducts:[],newsLatestProductData:[],attractions:[],currentDate:"",isLoading:!1}},methods:{checkDate(){var s=new Date,e={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},l=(e.month<10?"0":"")+e.month,p=(e.date<10?"0":"")+e.date,a=e.year+"-"+l+"-"+p;this.currentDate=a},getProducts(){this.axios.get(`${_e}/products?id=-c35c4Q9gWLGb7p4aWAM4&id=KvBuohr&id=xoGgJIk&id=fsfguEU`).then(s=>{this.products=s.data,this.products.forEach(e=>{e.is_enabled===1&&(this.enabledProducts.push(e),this.isLoading=!1)}),this.getNewsProductsData()}).catch(s=>{m.threeLayerCheckType("error","取得產品資料失敗")})},getNewsProductsData(){this.enabledProducts.forEach(s=>{this.newsLatestProductData.push({type:"旅遊方案",id:s.id,category:s.category,startDate:s.startDate,endDate:s.endDate,title:s.title,imageUrl:s.imageUrl})})}},mounted(){this.isLoading=!0,this.getProducts(),this.checkDate()}},ye={class:"latestNews"},xe={class:"container py-10 py-lg-30"},we=t("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-1 mb-lg-2 text-center"},"最新消息",-1),ke=t("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Latest News",-1),Te={key:0,class:"row"},Ee=y('<div class="col-12 col-lg-7"><div class="tab-content mb-8 mb-lg-0 flex-grow-1" id="nav-tabContent"><div class="image-tab-pane"><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-10 first-img z-index-1 rounded-5" alt="Placeholder Image"><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid second-img opacity-25 z-index-2 rounded-5" alt="Placeholder Image"></div></div></div>',1),De={class:"col-12 col-lg-5"},$e={class:"list-group",id:"list-tab",role:"tablist"},Le=y('<div class="d-flex align-items-center placeholder-glow"><span class="placeholder w-15 mb-3"></span><span class="placeholder w-15 mb-3 ms-2"></span></div><div class="d-flex justify-content-between align-items-center mb-3 placeholder-glow"><span class="list-tab-title placeholder w-40"></span><span class="placeholder w-5"></span></div><div class="d-flex flex-column placeholder-glow"><span class="placeholder w-75 mb-3"></span><span class="placeholder w-75"></span></div>',3),Ce=[Le],Fe={key:1,class:"row"},Ae={class:"col-12 col-lg-7"},Be={class:"tab-content mb-8 mb-lg-0 flex-grow-1",id:"nav-tabContent"},Se=["id","aria-labelledby"],Ie={class:"image-tab-pane"},Pe=["src","alt"],je=["src","alt"],ze={key:1,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",href:"#"},Ne={class:"col-12 col-lg-5"},Ue={class:"list-group",id:"list-tab",role:"tablist"},He=["id","data-bs-target","aria-controls"],Re={class:"d-flex justify-content-between align-items-center"},Me={class:"list-tab-title"},Ve={class:"d-flex mb-3"},Ke={class:"badge rounded-pill bg-light2 text-dark2 py-1 px-4 fs-6"},Oe={class:"nav-section-title"},Ge={class:"fs-6 fs-lg-5 mb-2 fw-bold text-primary-700"},Je={key:0,class:"fs-6 fs-lg-5 text-dark2"},Ye={key:1,class:"fs-6 fs-lg-5 text-danger"},We=t("span",{class:"material-symbols-outlined"}," chevron_right ",-1);function qe(s,e,l,p,a,i){const r=w("RouterLink");return n(),c("div",ye,[t("div",xe,[we,ke,a.isLoading?(n(),c("div",Te,[Ee,t("div",De,[t("div",$e,[(n(),c(D,null,C(4,o=>t("a",{key:o,class:"list-group-item list-group-item-action px-6 py-4 p-lg-6 mb-3 active placeholder"},Ce)),64))])])])):(n(),c("div",Fe,[t("div",Ae,[t("div",Be,[(n(!0),c(D,null,C(a.newsLatestProductData,(o,h)=>(n(),c("div",{key:h,class:k(["tab-pane fade",{"show active":h===0}]),id:"list-"+h,role:"tabpanel","aria-labelledby":"list-"+h+"-list"},[t("div",Ie,[t("img",{src:o.imageUrl,class:"img-fluid opacity-25 first-img z-index-1",alt:o.title},null,8,Pe),t("img",{src:o.imageUrl,class:"img-fluid second-img z-index-2",alt:o.title},null,8,je),o.category&&o.title?(n(),ee(r,{key:0,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:E(()=>[f(" 查看更多 ")]),_:2},1032,["to"])):(n(),c("a",ze," 查看更多 "))])],10,Se))),128))])]),t("div",Ne,[t("div",Ue,[(n(!0),c(D,null,C(a.newsLatestProductData,(o,h)=>(n(),c("a",{key:h,class:k({"list-group-item":!0,"list-group-item-action":!0,"px-6":!0,"py-4":!0,"p-lg-6":!0,"mb-2":!0,active:h===0}),id:"list-"+h+"-list","data-bs-toggle":"list","data-bs-target":"#list-"+h,role:"tab","aria-controls":"list-"+h,style:{cursor:"pointer"}},[t("div",Re,[t("div",Me,[t("div",Ve,[t("span",{class:k(["badge rounded-pill",{"bg-primary-200 text-primary-500 fw-bold me-1 py-1 px-4 fs-6":o.type==="旅遊方案","bg-secondary-200 text-secondary-600 fw-bold me-1 py-1 px-4 fs-6":o.type==="旅遊景點"}])},g(o.type),3),t("span",Ke,g(o.category),1)]),t("div",Oe,[t("h4",Ge,g(o.title),1),a.currentDate<=o.endDate?(n(),c("p",Je," 預約時間："+g(o.startDate)+" ~ "+g(o.endDate),1)):(n(),c("p",Ye,"預約時間已截止"))])]),We])],10,He))),128))])])]))])])}const Qe=F(ve,[["render",qe]]),Xe="/2024-southerntravelwebsite-fin/assets/pic-church2-klX2i7UD.jpg",Ze="/2024-southerntravelwebsite-fin/assets/attraction2-bA-GZDA9.png",et="/2024-southerntravelwebsite-fin/assets/attraction5-pLPDTKIE.png",tt="/2024-southerntravelwebsite-fin/assets/attraction1-1-Wr58ekxN.jpg",st="/2024-southerntravelwebsite-fin/assets/attraction3-PtL9DrR1.png",I="https://two024-south-json-server-vercel.onrender.com",at={data(){return{attractions:[],enabledAttractions:[],isLoading:!1,heartData:[],isFavorite:{},userId:"",token:""}},methods:{getHeartData(){this.axios.get(`${I}/hearts`).then(s=>{s.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(s=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,e,l,p){this.token?this.axios.get(`${I}/hearts`).then(a=>{const i=a.data.find(r=>r.product===s&&r.userId===this.userId&&r.tag==="旅遊景點");i?this.axios.delete(`${I}/hearts/${i.id}`).then(r=>{this.isFavorite[s]=!1,m.threeLayerCheckType("success",`取消收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${I}/hearts`,{product:s,category:e,title:l,userId:this.userId,tag:"旅遊景點",imageUrl:p}).then(r=>{this.isFavorite[s]=!0,m.threeLayerCheckType("success",`已加入收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","收藏資料失敗")})}).catch(a=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")}):m.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getAttractions(){this.axios.get(`${I}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(e=>{e.is_enabled===1&&this.enabledAttractions.push(e)})}).catch(s=>{m.threeLayerCheckType("error","取得景點資料失敗")})},getCookie(s){const e=document.cookie.split(";");for(let l of e){const[p,a]=l.trim().split("=");if(p===s)return a}return null}},mounted(){this.isLoading=!0;const s=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=s*1,this.token=e,setTimeout(()=>{this.isLoading=!1,this.getAttractions(),this.token&&this.getHeartData()},3e3)}},ot={class:"southern-tourist-attractions bg-light"},rt={class:"container py-10 py-lg-30"},it=t("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊景點",-1),nt=t("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1),lt={key:0,class:"col-12 mb-5 mb-lg-0"},ct=y('<div class="card-attractions"><div class="heart"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 card-attractions-img" alt="Placeholder Image"><a href="#" class="stretched-link"><div class="mask d-none d-sm-flex flex-column placeholder"><p class="mb-4 placeholder w-25"></p><p class="placeholder w-40 mb-2"></p><p class="placeholder w-50 mb-2"></p><p class="placeholder w-60 mb-2"></p><p class="placeholder w-75 mb-2"></p><p class="placeholder w-85 mb-2"></p></div><div class="mask d-flex d-sm-none flex-column placeholder-glow"><p class="mb-4 placeholder w-50"></p><p class="placeholder"></p></div></a></div>',1),dt=[ct],pt={key:1,class:"row"},ut={class:"col-12 col-lg-6 mb-5 mb-lg-0"},ht={class:"card-attractions"},mt=y('<img src="'+Xe+'" class="img-fluid card-attractions-img" alt="高跟鞋教堂"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%95%99%E5%A0%82" class="stretched-link"><div class="mask d-none d-sm-flex"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6 fs-xl-5"> 高跟鞋教堂高度約17m，寬度約11m，主結構由1,269根鋼架組成，外表共約320餘片玻璃，造型相當亮麗美觀，其設計與裝設不僅是全臺第一，更是全世界唯一。 </p></div><div class="mask d-flex d-sm-none flex-column"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6">打卡熱點</p></div></a>',2),ft={class:"col-12 col-lg-6"},gt={class:"row h-100"},bt={class:"col-12 col-sm-6 d-flex flex-column justify-content-between"},_t={class:"image-mask mb-5 mb-lg-6"},vt=y('<img src="'+Ze+'" alt="Image 2" class="img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%97%97%E6%B4%A5%E9%BB%83%E9%87%91%E6%B5%B7%E9%9F%BB-%E6%B5%B7%E7%8F%8D%E7%8F%A0" class="stretched-link"><div class="mask mask-33 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">黃金海韻海珍珠</p><p class="fs-6">情侶必遊之地</p></div></a>',2),yt={class:"image-mask mb-5 mb-lg-0"},xt=y('<img src="'+et+'" alt="Image 2" class="img-size-attractions-2 image-mask-img"><a href="#/TouristAttractions/%E5%8F%B0%E5%8D%97/%E5%AE%89%E5%B9%B3%E5%8F%A4%E5%A0%A1" class="stretched-link"><div class="mask mask-62 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">安平古堡</p><p class="fs-6">荷蘭時期遺蹟</p></div></a>',2),wt={class:"col-12 col-sm-6 d-flex flex-column justify-content-between"},kt={class:"image-mask mb-5 mb-lg-6 h-100"},Tt=y('<img src="'+tt+'" alt="嘉義公園-射日塔" class="img-fluid img-size-attractions-2 image-mask-img h-100"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E5%98%89%E7%BE%A9%E5%85%AC%E5%9C%92-%E5%B0%84%E6%97%A5%E5%A1%94" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">嘉義公園-射日塔</p><p class="fs-6">親子共遊</p></div></a>',2),Et={class:"image-mask mb-5 mb-lg-0"},Dt=y('<img src="'+st+'" alt="Image 4" class="img-fluid img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%84%9B%E6%B2%B3%E6%B2%B3%E7%95%94%E7%BE%8E%E6%99%AF" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">愛河河畔美景</p><p class="fs-6">愛之船情侶遊覽</p></div></a>',2);function $t(s,e,l,p,a,i){return n(),c("div",ot,[t("div",rt,[it,nt,a.isLoading?(n(),c("div",lt,dt)):(n(),c("div",pt,[t("div",ut,[t("div",ht,[t("button",{class:"heart border-0",onClick:e[0]||(e[0]=r=>i.toggleFavorite("-L9tH8jxVb2Ka_DYPwng","嘉義","高跟鞋教堂","./img/pic-church2.jpg")),type:"button"},[t("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite["-L9tH8jxVb2Ka_DYPwng"],"bi-heart":!a.isFavorite["-L9tH8jxVb2Ka_DYPwng"]}]),style:{"font-size":"24px"}},null,2)]),mt])]),t("div",ft,[t("div",gt,[t("div",bt,[t("div",_t,[t("button",{class:"heart border-0",onClick:e[1]||(e[1]=r=>i.toggleFavorite("WJHUaKt","高雄","旗津黃金海韻-海珍珠","./attractions/pic-4.jpg")),type:"button"},[t("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.WJHUaKt,"bi-heart":!a.isFavorite.WJHUaKt}]),style:{"font-size":"24px"}},null,2)]),vt]),t("div",yt,[t("button",{class:"heart border-0",onClick:e[2]||(e[2]=r=>i.toggleFavorite("UR6kDTk","台南","安平古堡","./img/attraction5.png")),type:"button"},[t("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.UR6kDTk,"bi-heart":!a.isFavorite.UR6kDTk}]),style:{"font-size":"24px"}},null,2)]),xt])]),t("div",wt,[t("div",kt,[t("button",{class:"heart border-0",onClick:e[3]||(e[3]=r=>i.toggleFavorite("KTpJNvf","嘉義","嘉義公園-射日塔","./img/attraction1-1.jpg")),type:"button"},[t("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.KTpJNvf,"bi-heart":!a.isFavorite.KTpJNvf}]),style:{"font-size":"24px"}},null,2)]),Tt]),t("div",Et,[t("button",{class:"heart border-0",onClick:e[4]||(e[4]=r=>i.toggleFavorite("sj3zTH_","高雄","愛河河畔美景","./attractions/loveriver3.jpg")),type:"button"},[t("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.sj3zTH_,"bi-heart":!a.isFavorite.sj3zTH_}]),style:{"font-size":"24px"}},null,2)]),Dt])])])])]))])])}const Lt=F(at,[["render",$t]]),Ct={},Ft={class:"ad"},At=y('<div class="container py-10 py-lg-30 d-flex flex-lg-row flex-column justify-content-lg-between text-center text-lg-start" data-v-d7d95ef5><div class="ad-l-side mb-5 mb-lg-0" data-v-d7d95ef5><p class="fs-4 text-center text-lg-start fs-lg-1 fw-bold mb-5 mb-lg-6" data-v-d7d95ef5>計算荷包 盡情遊覽</p><p class="fs-4 text-center text-lg-start fs-lg-1 mb-8 fw-bold" data-v-d7d95ef5>我們的旅程 為您量身定制！</p><p class="fs-6 text-center text-lg-start fs-lg-4 mb-2" data-v-d7d95ef5>Budget Smart, Travel Big</p><p class="fs-6 text-center text-lg-start fs-lg-4" data-v-d7d95ef5>Your Custom Journey Awaits.</p></div><div class="ad-r-side d-flex flex-column align-items-lg-end justify-content-lg-center align-items-center" data-v-d7d95ef5></div></div>',1),Bt=[At];function St(s,e){return n(),c("div",Ft,Bt)}const It=F(Ct,[["render",St],["__scopeId","data-v-d7d95ef5"]]),P="https://two024-south-json-server-vercel.onrender.com",Pt={data(){return{products:[],newProductsContent:"",enabledProducts:[],currentDate:"",isLoading:!1,heartData:[],isFavorite:{},userId:"",token:""}},methods:{checkDate(){var s=new Date,e={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},l=(e.month<10?"0":"")+e.month,p=(e.date<10?"0":"")+e.date,a=e.year+"-"+l+"-"+p;this.currentDate=a},getHeartData(){this.axios.get(`${P}/hearts`).then(s=>{s.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊方案"&&(this.isFavorite[e.product]=!0)})}).catch(s=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,e,l,p){this.token?this.axios.get(`${P}/hearts`).then(a=>{const i=a.data.find(r=>r.product===s&&r.userId===this.userId&&r.tag==="旅遊方案");i?this.axios.delete(`${P}/hearts/${i.id}`).then(r=>{this.isFavorite[s]=!1,m.threeLayerCheckType("success",`取消收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${P}/hearts`,{product:s,category:e,title:l,userId:this.userId,tag:"旅遊方案",imageUrl:p}).then(r=>{this.isFavorite[s]=!0,m.threeLayerCheckType("success",`已加入收藏 ${l} 成功`),this.getHeartData()}).catch(r=>{m.threeLayerCheckType("error","收藏資料失敗")})}).catch(a=>{m.threeLayerCheckType("error","取得愛心收藏資料失敗")}):m.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getProducts(){this.axios.get(`${P}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`).then(s=>{this.products=s.data,this.products.forEach(e=>{e.is_enabled===1&&(this.enabledProducts.push(e),this.isLoading=!1)})}).catch(s=>{m.threeLayerCheckType("error","取得產品資料失敗")})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`},getCookie(s){const e=document.cookie.split(";");for(let l of e){const[p,a]=l.trim().split("=");if(p===s)return a}return null}},mounted(){this.getProducts(),this.isLoading=!0;const s=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=s*1,this.token=e,this.token&&this.getHeartData()}},M=s=>(te("data-v-49042e58"),s=s(),se(),s),jt={class:"southern-travel-plan"},zt={class:"container py-10 py-lg-30"},Nt=M(()=>t("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊方案",-1)),Ut=M(()=>t("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1)),Ht={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},Rt=y('<div class="card card-att h-100" data-v-49042e58><span class="tag text-white placeholder-glow" data-v-49042e58></span><div class="heart" data-v-49042e58><i class="bi bi-heart heart-click" data-heartStatus="false" data-v-49042e58></i></div><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 first-img z-index-1" alt="Placeholder Image" data-v-49042e58><div class="card-body" data-v-49042e58><span class="placeholder w-25" data-v-49042e58></span><div class="col-12 placeholder-glow" data-v-49042e58><span class="placeholder w-50" data-v-49042e58></span><span class="placeholder w-60" data-v-49042e58></span></div></div><div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow" data-v-49042e58><div class="d-flex justify-content-between" data-v-49042e58><span class="placeholder w-25" data-v-49042e58></span><span class="placeholder w-25" data-v-49042e58></span></div></div></div>',1),Mt=[Rt],Vt={class:"card card-att h-100"},Kt={class:"tag text-white"},Ot={class:"card-att-img"},Gt=["src","alt"],Jt=["onClick"],Yt={style:{transform:"rotate(0)"}},Wt={class:"card-body"},qt={class:"fs-5 fs-lg-4 card-title pb-4 fw-bold text-primary-700 stretched-link mb-0"},Qt={class:"col-12"},Xt={key:0,class:"fs-6 text-dark2"},Zt={key:1,class:"fs-6 text-danger"},es={key:2,class:"fs-6 text-dark2"},ts={key:3,class:"fs-6 text-danger"},ss={class:"card-footer text-end border-0 pt-0 pb-3"},as={class:"d-flex justify-content-between align-items-end"},os={class:"d-flex align-items-center"},rs={class:"fs-6 fs-lg-5"},is=M(()=>t("i",{class:"bi bi-calendar-week me-2"},null,-1)),ns={class:"fs-5 fs-lg-4 text-primary-500"};function ls(s,e,l,p,a,i){const r=w("router-link");return n(),c("div",jt,[t("div",zt,[Nt,Ut,t("div",Ht,[a.isLoading?(n(),c(D,{key:0},C(3,o=>t("div",{key:o,class:"col"},Mt)),64)):(n(!0),c(D,{key:1},C(a.enabledProducts,o=>(n(),c("div",{class:"col",key:o.id},[t("div",Vt,[t("span",Kt,g(o.category),1),t("div",Ot,[v(r,{to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:E(()=>[t("img",{src:o.imageUrl,class:"card-radius img-fluid h-100",alt:o.title},null,8,Gt)]),_:2},1032,["to"])]),t("button",{class:"heart border-0",onClick:h=>i.toggleFavorite(o.id,o.category,o.title,o.imageUrl),type:"button"},[t("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite[o.id],"bi-heart":!a.isFavorite[o.id]}]),style:{"font-size":"24px"}},null,2)],8,Jt),t("div",Yt,[t("div",Wt,[v(r,{to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:E(()=>[t("h3",qt,g(o.title),1)]),_:2},1032,["to"]),t("div",Qt,[a.currentDate<=o.endDate?(n(),c("p",Xt," 預約時間："+g(o.startDate)+" ~ "+g(o.endDate),1)):(n(),c("p",Zt,"預約時間已截止")),a.currentDate<=o.endDate?(n(),c("p",es," 出遊時間："+g(o.goStartDate)+" ~ "+g(o.goEndDate),1)):(n(),c("p",ts,"已出遊完成"))])]),t("div",ss,[t("div",as,[t("div",os,[t("span",rs,[is,f(g(o.tag_1),1)])]),t("p",ns,g(i.thousand(o.price)),1)])])])])]))),128))])])])}const cs=F(Pt,[["render",ls],["__scopeId","data-v-49042e58"]]),ds="https://two024-south-json-server-vercel.onrender.com",ps={components:{BannerSwiper:be,LatestNews:Qe,TouristAttractions:Lt,AdBlock:It,TouristPackage:cs},data(){return{searchText:"",searchResults:[],showResults:!1,searchData:[]}},methods:{search(){if(this.axios.get(`${ds}/search`).then(l=>{this.searchData=l.data}).catch(l=>{alert(`${l.message}`)}),this.searchText===""){this.showResults=!1;return}const s=new RegExp(this.searchText,"i"),e=this.searchData.filter(l=>s.test(l.title));this.searchResults=e.slice(0,3),this.showResults=!0}}},us=s=>(te("data-v-d9e0c7a0"),s=s(),se(),s),hs={class:"search-bar bg-primary-400 border-left-bottom"},ms={class:"container text-center pt-10 pb-10 py-md-20"},fs=us(()=>t("p",{class:"fs-3 text-white mb-10 fw-bold text-center"},"開始你的南部輕旅遊！",-1)),gs={class:"mx-auto",style:{"max-width":"856px"}},bs={class:"input-group position-relative flex-column"},_s={class:"input-wrapper"},vs={class:"list-unstyled bg-white rounded-5"},ys=["href"],xs={key:1};function ws(s,e,l,p,a,i){const r=w("banner-swiper"),o=w("LatestNews"),h=w("TouristAttractions"),$=w("AdBlock"),b=w("TouristPackage");return n(),c(D,null,[v(r),t("div",hs,[t("div",ms,[fs,t("div",gs,[t("div",bs,[t("div",_s,[Q(t("input",{type:"search",onInput:e[0]||(e[0]=(...u)=>i.search&&i.search(...u)),"onUpdate:modelValue":e[1]||(e[1]=u=>a.searchText=u),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-none d-md-block",placeholder:"輸入遊玩景點，推薦：漫遊蓮潭風光"},null,544),[[X,a.searchText,void 0,{trim:!0}]]),Q(t("input",{type:"search","onUpdate:modelValue":e[2]||(e[2]=u=>a.searchText=u),onInput:e[3]||(e[3]=(...u)=>i.search&&i.search(...u)),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-md-none",placeholder:"輸入遊玩南部縣市"},null,544),[[X,a.searchText,void 0,{trim:!0}]]),t("button",{class:"btn-cerulean-blue position-absolute search-btn-cerulean-blue-position h-70 border-0",type:"button",onClick:e[4]||(e[4]=(...u)=>i.search&&i.search(...u))},"搜尋")])]),t("ul",vs,[a.showResults&&a.searchResults.length>0?(n(!0),c(D,{key:0},C(a.searchResults,u=>(n(),c("li",{key:u+123},[t("a",{href:u.link},g(u.title),9,ys)]))),128)):Z("",!0),a.showResults&&a.searchResults.length===0?(n(),c("li",xs,"無資料，關鍵字：嘉義、台南、高雄")):Z("",!0)])])])]),v(o),v(h),v($),v(b)],64)}const Ds=F(ps,[["render",ws],["__scopeId","data-v-d9e0c7a0"]]);export{Ds as default};
