import{g as U,S as lt,a as ct,N as dt}from"./navigation-UYSY6nWc.js";import{_ as F,o as i,g as tt,w as L,b as x,a as e,d as m,r as w,c as l,F as E,h as C,n as k,t as g,e as v,p as et,i as st,f as Q,j as X,k as Z}from"./index-YauCT9D4.js";import{s as f}from"./sweetAlert-VBzzWPiK.js";function pt(s){let{swiper:t,extendParams:n,on:c,emit:a,params:r}=s;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,o,h=r&&r.autoplay?r.autoplay.delay:3e3,D=r&&r.autoplay?r.autoplay.delay:3e3,b,u=new Date().getTime,H,j,A,V,R,T;function K(d){!t||t.destroyed||!t.wrapperEl||d.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",K),$())}const O=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?H=!0:H&&(D=b,H=!1);const d=t.autoplay.paused?b:u+D-new Date().getTime();t.autoplay.timeLeft=d,a("autoplayTimeLeft",d,d/h),o=requestAnimationFrame(()=>{O()})},at=()=>{let d;return t.virtual&&t.params.virtual.enabled?d=t.slides.filter(_=>_.classList.contains("swiper-slide-active"))[0]:d=t.slides[t.activeIndex],d?parseInt(d.getAttribute("data-swiper-autoplay"),10):void 0},z=d=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),O();let y=typeof d>"u"?t.params.autoplay.delay:d;h=t.params.autoplay.delay,D=t.params.autoplay.delay;const _=at();!Number.isNaN(_)&&_>0&&typeof d>"u"&&(y=_,h=_,D=_),b=y;const I=t.params.speed,q=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(I,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,I,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(I,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,I,!0,!0),a("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return y>0?(clearTimeout(p),p=setTimeout(()=>{q()},y)):requestAnimationFrame(()=>{q()}),y},G=()=>{t.autoplay.running=!0,z(),a("autoplayStart")},N=()=>{t.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(o),a("autoplayStop")},B=(d,y)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(p),d||(T=!0);const _=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",K):$()};if(t.autoplay.paused=!0,y){R&&(b=t.params.autoplay.delay),R=!1,_();return}b=(b||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&b<0&&!t.params.loop)&&(b<0&&(b=0),_())},$=()=>{t.isEnd&&b<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),T?(T=!1,z(b)):z(),t.autoplay.paused=!1,a("autoplayResume"))},J=()=>{if(t.destroyed||!t.autoplay.running)return;const d=U();d.visibilityState==="hidden"&&(T=!0,B(!0)),d.visibilityState==="visible"&&$()},Y=d=>{d.pointerType==="mouse"&&(T=!0,B(!0))},W=d=>{d.pointerType==="mouse"&&t.autoplay.paused&&$()},ot=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",Y),t.el.addEventListener("pointerleave",W))},rt=()=>{t.el.removeEventListener("pointerenter",Y),t.el.removeEventListener("pointerleave",W)},it=()=>{U().addEventListener("visibilitychange",J)},nt=()=>{U().removeEventListener("visibilitychange",J)};c("init",()=>{t.params.autoplay.enabled&&(ot(),it(),u=new Date().getTime(),G())}),c("destroy",()=>{rt(),nt(),t.autoplay.running&&N()}),c("beforeTransitionStart",(d,y,_)=>{t.destroyed||!t.autoplay.running||(_||!t.params.autoplay.disableOnInteraction?B(!0,!0):N())}),c("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){N();return}j=!0,A=!1,T=!1,V=setTimeout(()=>{T=!0,A=!0,B(!0)},200)}}),c("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!j)){if(clearTimeout(V),clearTimeout(p),t.params.autoplay.disableOnInteraction){A=!1,j=!1;return}A&&t.params.cssMode&&$(),A=!1,j=!1}}),c("slideChange",()=>{t.destroyed||!t.autoplay.running||(R=!0)}),Object.assign(t.autoplay,{start:G,stop:N,pause:B,resume:$})}const ut={components:{Swiper:lt,SwiperSlide:ct},setup(){return{modules:[dt,pt]}}},ht=e("div",{class:"banner-bg banner-img3"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),m(" 高雄景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"高雄港旅運中心"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 高雄港是台灣港務與海運核心，近年來亞太地區郵輪旅遊產業日益興盛 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," ，作為台灣第一大港的高雄，在港市合作、水岸開發的方針下 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[m(" 同時停泊2艘排水量達22.5萬噸豪華郵輪"),e("br"),m("是南台灣最重要的海上門戶 ")]),e("p",{class:"fs-7 text-center"},[m(" 輕軌串連駁二藝術中心、高雄流行音樂中心等建設"),e("br"),m("共築高雄水岸的新天際線。 ")])])],-1),ft=e("div",{class:"banner-bg banner-img2"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),m(" 高雄景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"旗津黃金海韻－海珍珠"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 由兩位藝術家耗時6年完成，外純白、內金黃的海貝造型 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 能讓遊客聆聽海聲，更是亞洲最大的貝殼裝置藝術 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[m("由兩位藝術家耗時6年完成"),e("br"),m("外純白、內金黃的海貝造型")]),e("p",{class:"fs-7 text-center"},[m("能讓遊客聆聽海聲"),e("br"),m("更是亞洲最大的貝殼裝置藝術")])])],-1),mt=e("div",{class:"banner-bg banner-img1"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),m(" 嘉義景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"國立故宮博物院南部院區"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 博物館建築以中國水墨畫濃墨、非白與渲染三種技法 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 形成時量體展示空間及文物庫房、虛量體公共接待空間與穿透連接空間 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[m("博物館建築以中國水墨畫濃墨、"),e("br"),m("非白與渲染三種技法")]),e("p",{class:"fs-7 text-center"},[m(" 形成時量體展示空間及文物庫房、"),e("br"),m("虛量體公共接待空間與穿透連接空間 ")])])],-1);function gt(s,t,n,c,a,r){const p=w("swiper-slide"),o=w("swiper");return i(),tt(o,{navigation:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:c.modules,class:"mySwiper"},{default:L(()=>[x(p,null,{default:L(()=>[ht]),_:1}),x(p,null,{default:L(()=>[ft]),_:1}),x(p,null,{default:L(()=>[mt]),_:1})]),_:1},8,["modules"])}const bt=F(ut,[["render",gt]]),_t="https://two024-south-json-server-vercel.onrender.com",vt={data(){return{products:[],enabledProducts:[],newsLatestProductData:[],attractions:[],currentDate:"",isLoading:!1}},methods:{checkDate(){var s=new Date,t={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},n=(t.month<10?"0":"")+t.month,c=(t.date<10?"0":"")+t.date,a=t.year+"-"+n+"-"+c;this.currentDate=a},getProducts(){this.axios.get(`${_t}/products?id=-c35c4Q9gWLGb7p4aWAM4&id=KvBuohr&id=xoGgJIk&id=fsfguEU`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&(this.enabledProducts.push(t),this.isLoading=!1)}),this.getNewsProductsData()}).catch(s=>{f.threeLayerCheckType("error","取得產品資料失敗")})},getNewsProductsData(){this.enabledProducts.forEach(s=>{this.newsLatestProductData.push({type:"旅遊方案",id:s.id,category:s.category,startDate:s.startDate,endDate:s.endDate,title:s.title,imageUrl:s.imageUrl})})}},mounted(){this.isLoading=!0,this.getProducts(),this.checkDate()}},yt={class:"latestNews"},xt={class:"container py-10 py-lg-30"},wt=e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-1 mb-lg-2 text-center"},"最新消息",-1),kt=e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Latest News",-1),Tt={key:0,class:"row"},Et=v('<div class="col-12 col-lg-7"><div class="tab-content mb-8 mb-lg-0 flex-grow-1" id="nav-tabContent"><div class="image-tab-pane"><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-10 first-img z-index-1 rounded-5" alt="Placeholder Image"><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid second-img opacity-25 z-index-2 rounded-5" alt="Placeholder Image"></div></div></div>',1),Dt={class:"col-12 col-lg-5"},$t={class:"list-group",id:"list-tab",role:"tablist"},Lt=v('<div class="d-flex align-items-center placeholder-glow"><span class="placeholder w-15 mb-3"></span><span class="placeholder w-15 mb-3 ms-2"></span></div><div class="d-flex justify-content-between align-items-center mb-3 placeholder-glow"><span class="list-tab-title placeholder w-40"></span><span class="placeholder w-5"></span></div><div class="d-flex flex-column placeholder-glow"><span class="placeholder w-75 mb-3"></span><span class="placeholder w-75"></span></div>',3),Ct=[Lt],Ft={key:1,class:"row"},At={class:"col-12 col-lg-7"},Bt={class:"tab-content mb-8 mb-lg-0 flex-grow-1",id:"nav-tabContent"},It=["id","aria-labelledby"],St={class:"image-tab-pane"},Pt=["src","alt"],jt=["src","alt"],zt={key:1,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",href:"#"},Nt={class:"col-12 col-lg-5"},Ht={class:"list-group",id:"list-tab",role:"tablist"},Rt=["id","data-bs-target","aria-controls"],Ut={class:"d-flex justify-content-between align-items-center"},Mt={class:"list-tab-title"},Vt={class:"d-flex mb-3"},Kt={class:"badge rounded-pill bg-light2 text-dark2 py-1 px-4 fs-6"},Ot={class:"nav-section-title"},Gt={class:"fs-6 fs-lg-5 mb-2 fw-bold text-primary-700"},Jt={key:0,class:"fs-6 fs-lg-5 text-dark2"},Yt={key:1,class:"fs-6 fs-lg-5 text-danger"},Wt=e("span",{class:"material-symbols-outlined"}," chevron_right ",-1);function qt(s,t,n,c,a,r){const p=w("RouterLink");return i(),l("div",yt,[e("div",xt,[wt,kt,a.isLoading?(i(),l("div",Tt,[Et,e("div",Dt,[e("div",$t,[(i(),l(E,null,C(4,o=>e("a",{key:o,class:"list-group-item list-group-item-action px-6 py-4 p-lg-6 mb-3 active placeholder"},Ct)),64))])])])):(i(),l("div",Ft,[e("div",At,[e("div",Bt,[(i(!0),l(E,null,C(a.newsLatestProductData,(o,h)=>(i(),l("div",{key:h,class:k(["tab-pane fade",{"show active":h===0}]),id:"list-"+h,role:"tabpanel","aria-labelledby":"list-"+h+"-list"},[e("div",St,[e("img",{src:o.imageUrl,class:"img-fluid opacity-25 first-img z-index-1",alt:o.title},null,8,Pt),e("img",{src:o.imageUrl,class:"img-fluid second-img z-index-2",alt:o.title},null,8,jt),o.category&&o.title?(i(),tt(p,{key:0,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:L(()=>[m(" 查看更多 ")]),_:2},1032,["to"])):(i(),l("a",zt," 查看更多 "))])],10,It))),128))])]),e("div",Nt,[e("div",Ht,[(i(!0),l(E,null,C(a.newsLatestProductData,(o,h)=>(i(),l("a",{key:h,class:k({"list-group-item":!0,"list-group-item-action":!0,"px-6":!0,"py-4":!0,"p-lg-6":!0,"mb-2":!0,active:h===0}),id:"list-"+h+"-list","data-bs-toggle":"list","data-bs-target":"#list-"+h,role:"tab","aria-controls":"list-"+h,style:{cursor:"pointer"}},[e("div",Ut,[e("div",Mt,[e("div",Vt,[e("span",{class:k(["badge rounded-pill",{"bg-primary-200 text-primary-500 fw-bold me-1 py-1 px-4 fs-6":o.type==="旅遊方案","bg-secondary-200 text-secondary-600 fw-bold me-1 py-1 px-4 fs-6":o.type==="旅遊景點"}])},g(o.type),3),e("span",Kt,g(o.category),1)]),e("div",Ot,[e("h4",Gt,g(o.title),1),a.currentDate<=o.endDate?(i(),l("p",Jt," 預約時間："+g(o.startDate)+" ~ "+g(o.endDate),1)):(i(),l("p",Yt,"預約時間已截止"))])]),Wt])],10,Rt))),128))])])]))])])}const Qt=F(vt,[["render",qt]]),Xt="/2024-southerntravelwebsite-fin/assets/pic-church2-klX2i7UD.jpg",Zt="/2024-southerntravelwebsite-fin/assets/attraction2-bA-GZDA9.png",te="/2024-southerntravelwebsite-fin/assets/attraction5-pLPDTKIE.png",ee="/2024-southerntravelwebsite-fin/assets/attraction1-1-Wr58ekxN.jpg",se="/2024-southerntravelwebsite-fin/assets/attraction3-PtL9DrR1.png",S="https://two024-south-json-server-vercel.onrender.com",ae={data(){return{attractions:[],enabledAttractions:[],isLoading:!1,heartData:[],isFavorite:{},userId:"",token:""}},methods:{getHeartData(){this.axios.get(`${S}/hearts`).then(s=>{s.data.forEach(t=>{t.userId===this.userId&&t.tag==="旅遊景點"&&(this.isFavorite[t.product]=!0)})}).catch(s=>{console.log(s),f.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,t,n){this.token?this.axios.get(`${S}/hearts`).then(c=>{const a=c.data.find(r=>r.product===s&&r.userId===this.userId&&r.tag==="旅遊景點");a?this.axios.delete(`${S}/hearts/${a.id}`).then(r=>{this.isFavorite[s]=!1,f.threeLayerCheckType("success",`取消收藏 ${n} 成功`),this.getHeartData()}).catch(r=>{f.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${S}/hearts`,{product:s,category:t,title:n,userId:this.userId,tag:"旅遊景點"}).then(r=>{this.isFavorite[s]=!0,f.threeLayerCheckType("success",`已加入收藏 ${n} 成功`),this.getHeartData()}).catch(r=>{console.log(r),f.threeLayerCheckType("error","收藏資料失敗")})}).catch(c=>{f.threeLayerCheckType("error","取得愛心收藏資料失敗")}):f.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getAttractions(){this.axios.get(`${S}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(t=>{t.is_enabled===1&&this.enabledAttractions.push(t)})}).catch(s=>{f.threeLayerCheckType("error","取得景點資料失敗")})},getCookie(s){const t=document.cookie.split(";");for(let n of t){const[c,a]=n.trim().split("=");if(c===s)return a}return null}},mounted(){this.isLoading=!0;const s=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=s*1,this.token=t,setTimeout(()=>{this.isLoading=!1,this.getAttractions(),this.token&&this.getHeartData()},3e3)}},oe={class:"southern-tourist-attractions bg-light"},re={class:"container py-10 py-lg-30"},ie=e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊景點",-1),ne=e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1),le={key:0,class:"col-12 mb-5 mb-lg-0"},ce=v('<div class="card-attractions"><div class="heart3"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 card-attractions-img" alt="Placeholder Image"><a href="#" class="stretched-link"><div class="mask d-none d-sm-flex flex-column placeholder"><p class="mb-4 placeholder w-25"></p><p class="placeholder w-40 mb-2"></p><p class="placeholder w-50 mb-2"></p><p class="placeholder w-60 mb-2"></p><p class="placeholder w-75 mb-2"></p><p class="placeholder w-85 mb-2"></p></div><div class="mask d-flex d-sm-none flex-column placeholder-glow"><p class="mb-4 placeholder w-50"></p><p class="placeholder"></p></div></a></div>',1),de=[ce],pe={key:1,class:"row"},ue={class:"col-12 col-lg-6 mb-5 mb-lg-0"},he={class:"card-attractions"},fe=v('<img src="'+Xt+'" class="img-fluid card-attractions-img" alt="高跟鞋教堂"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%95%99%E5%A0%82" class="stretched-link"><div class="mask d-none d-sm-flex"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6 fs-xl-5"> 高跟鞋教堂高度約17m，寬度約11m，主結構由1,269根鋼架組成，外表共約320餘片玻璃，造型相當亮麗美觀，其設計與裝設不僅是全臺第一，更是全世界唯一。 </p></div><div class="mask d-flex d-sm-none flex-column"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6">打卡熱點</p></div></a>',2),me={class:"col-12 col-lg-6"},ge={class:"row h-100"},be={class:"col-12 col-sm-6 d-flex flex-column justify-content-between"},_e={class:"image-mask mb-5 mb-lg-6"},ve=v('<img src="'+Zt+'" alt="Image 2" class="img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%97%97%E6%B4%A5%E9%BB%83%E9%87%91%E6%B5%B7%E9%9F%BB-%E6%B5%B7%E7%8F%8D%E7%8F%A0" class="stretched-link"><div class="mask mask-33 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">黃金海韻海珍珠</p><p class="fs-6">情侶必遊之地</p></div></a>',2),ye={class:"image-mask mb-5 mb-lg-0"},xe=v('<img src="'+te+'" alt="Image 2" class="img-size-attractions-2 image-mask-img"><a href="#/TouristAttractions/%E5%8F%B0%E5%8D%97/%E5%AE%89%E5%B9%B3%E5%8F%A4%E5%A0%A1" class="stretched-link"><div class="mask mask-62 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">安平古堡</p><p class="fs-6">荷蘭時期遺蹟</p></div></a>',2),we={class:"col-12 col-sm-6 d-flex flex-column justify-content-between"},ke={class:"image-mask mb-5 mb-lg-6 h-100"},Te=v('<img src="'+ee+'" alt="嘉義公園-射日塔" class="img-fluid img-size-attractions-2 image-mask-img h-100"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E5%98%89%E7%BE%A9%E5%85%AC%E5%9C%92-%E5%B0%84%E6%97%A5%E5%A1%94" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">嘉義公園-射日塔</p><p class="fs-6">親子共遊</p></div></a>',2),Ee={class:"image-mask mb-5 mb-lg-0"},De=v('<img src="'+se+'" alt="Image 4" class="img-fluid img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%84%9B%E6%B2%B3%E6%B2%B3%E7%95%94%E7%BE%8E%E6%99%AF" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">愛河河畔美景</p><p class="fs-6">愛之船情侶遊覽</p></div></a>',2);function $e(s,t,n,c,a,r){return i(),l("div",oe,[e("div",re,[ie,ne,a.isLoading?(i(),l("div",le,de)):(i(),l("div",pe,[e("div",ue,[e("div",he,[e("button",{class:"heart border-0",onClick:t[0]||(t[0]=p=>r.toggleFavorite("-L9tH8jxVb2Ka_DYPwng","嘉義","高跟鞋教堂")),type:"button"},[e("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite["-L9tH8jxVb2Ka_DYPwng"],"bi-heart":!a.isFavorite["-L9tH8jxVb2Ka_DYPwng"]}]),style:{"font-size":"24px"}},null,2)]),fe])]),e("div",me,[e("div",ge,[e("div",be,[e("div",_e,[e("button",{class:"heart border-0",onClick:t[1]||(t[1]=p=>r.toggleFavorite("WJHUaKt","高雄","旗津黃金海韻-海珍珠")),type:"button"},[e("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.WJHUaKt,"bi-heart":!a.isFavorite.WJHUaKt}]),style:{"font-size":"24px"}},null,2)]),ve]),e("div",ye,[e("button",{class:"heart border-0",onClick:t[2]||(t[2]=p=>r.toggleFavorite("UR6kDTk","台南","安平古堡")),type:"button"},[e("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.UR6kDTk,"bi-heart":!a.isFavorite.UR6kDTk}]),style:{"font-size":"24px"}},null,2)]),xe])]),e("div",we,[e("div",ke,[e("button",{class:"heart border-0",onClick:t[3]||(t[3]=p=>r.toggleFavorite("KTpJNvf","嘉義","嘉義公園-射日塔")),type:"button"},[e("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.KTpJNvf,"bi-heart":!a.isFavorite.KTpJNvf}]),style:{"font-size":"24px"}},null,2)]),Te]),e("div",Ee,[e("button",{class:"heart border-0",onClick:t[4]||(t[4]=p=>r.toggleFavorite("sj3zTH_","高雄","愛河河畔美景")),type:"button"},[e("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite.sj3zTH_,"bi-heart":!a.isFavorite.sj3zTH_}]),style:{"font-size":"24px"}},null,2)]),De])])])])]))])])}const Le=F(ae,[["render",$e]]),Ce={},Fe={class:"ad"},Ae=v('<div class="container py-10 py-lg-30 d-flex flex-lg-row flex-column justify-content-lg-between text-center text-lg-start" data-v-d7d95ef5><div class="ad-l-side mb-5 mb-lg-0" data-v-d7d95ef5><p class="fs-4 text-center text-lg-start fs-lg-1 fw-bold mb-5 mb-lg-6" data-v-d7d95ef5>計算荷包 盡情遊覽</p><p class="fs-4 text-center text-lg-start fs-lg-1 mb-8 fw-bold" data-v-d7d95ef5>我們的旅程 為您量身定制！</p><p class="fs-6 text-center text-lg-start fs-lg-4 mb-2" data-v-d7d95ef5>Budget Smart, Travel Big</p><p class="fs-6 text-center text-lg-start fs-lg-4" data-v-d7d95ef5>Your Custom Journey Awaits.</p></div><div class="ad-r-side d-flex flex-column align-items-lg-end justify-content-lg-center align-items-center" data-v-d7d95ef5></div></div>',1),Be=[Ae];function Ie(s,t){return i(),l("div",Fe,Be)}const Se=F(Ce,[["render",Ie],["__scopeId","data-v-d7d95ef5"]]),P="https://two024-south-json-server-vercel.onrender.com",Pe={data(){return{products:[],newProductsContent:"",enabledProducts:[],currentDate:"",isLoading:!1,heartData:[],isFavorite:{},userId:"",token:""}},methods:{checkDate(){var s=new Date,t={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},n=(t.month<10?"0":"")+t.month,c=(t.date<10?"0":"")+t.date,a=t.year+"-"+n+"-"+c;this.currentDate=a},getHeartData(){this.axios.get(`${P}/hearts`).then(s=>{s.data.forEach(t=>{t.userId===this.userId&&t.tag==="旅遊方案"&&(this.isFavorite[t.product]=!0)})}).catch(s=>{f.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(s,t,n){this.token?this.axios.get(`${P}/hearts`).then(c=>{const a=c.data.find(r=>r.product===s&&r.userId===this.userId&&r.tag==="旅遊方案");a?this.axios.delete(`${P}/hearts/${a.id}`).then(r=>{this.isFavorite[s]=!1,f.threeLayerCheckType("success",`取消收藏 ${n} 成功`),this.getHeartData()}).catch(r=>{f.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${P}/hearts`,{product:s,category:t,title:n,userId:this.userId,tag:"旅遊方案"}).then(r=>{this.isFavorite[s]=!0,f.threeLayerCheckType("success",`已加入收藏 ${n} 成功`),this.getHeartData()}).catch(r=>{f.threeLayerCheckType("error","收藏資料失敗")})}).catch(c=>{f.threeLayerCheckType("error","取得愛心收藏資料失敗")}):f.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getProducts(){this.axios.get(`${P}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&(this.enabledProducts.push(t),this.isLoading=!1)})}).catch(s=>{f.threeLayerCheckType("error","取得產品資料失敗")})},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`},getCookie(s){const t=document.cookie.split(";");for(let n of t){const[c,a]=n.trim().split("=");if(c===s)return a}return null}},mounted(){this.getProducts(),this.isLoading=!0;const s=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=s*1,this.token=t,this.token&&this.getHeartData()}},M=s=>(et("data-v-a46167fb"),s=s(),st(),s),je={class:"southern-travel-plan"},ze={class:"container py-10 py-lg-30"},Ne=M(()=>e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊方案",-1)),He=M(()=>e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1)),Re={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},Ue=v('<div class="card card-att h-100" data-v-a46167fb><span class="tag text-white placeholder-glow" data-v-a46167fb></span><div class="heart3" data-v-a46167fb><i class="bi bi-heart heart-click" data-heartStatus="false" data-v-a46167fb></i></div><img src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg" class="img-fluid opacity-25 first-img z-index-1" alt="Placeholder Image" data-v-a46167fb><div class="card-body" data-v-a46167fb><span class="placeholder w-25" data-v-a46167fb></span><div class="col-12 placeholder-glow" data-v-a46167fb><span class="placeholder w-50" data-v-a46167fb></span><span class="placeholder w-60" data-v-a46167fb></span></div></div><div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow" data-v-a46167fb><div class="d-flex justify-content-between" data-v-a46167fb><span class="placeholder w-25" data-v-a46167fb></span><span class="placeholder w-25" data-v-a46167fb></span></div></div></div>',1),Me=[Ue],Ve={class:"card card-att h-100"},Ke={class:"tag text-white"},Oe={class:"card-att-img"},Ge=["src","alt"],Je=["onClick"],Ye={style:{transform:"rotate(0)"}},We={class:"card-body"},qe={class:"fs-5 fs-lg-4 card-title pb-4 fw-bold text-primary-700 stretched-link mb-0"},Qe={class:"col-12"},Xe={key:0,class:"fs-6 text-dark2"},Ze={key:1,class:"fs-6 text-danger"},ts={key:2,class:"fs-6 text-dark2"},es={key:3,class:"fs-6 text-danger"},ss={class:"card-footer text-end border-0 pt-0 pb-3"},as={class:"d-flex justify-content-between align-items-end"},os={class:"d-flex align-items-center"},rs={class:"fs-6 fs-lg-5"},is=M(()=>e("i",{class:"bi bi-calendar-week me-2"},null,-1)),ns={class:"fs-5 fs-lg-4 text-primary-500"};function ls(s,t,n,c,a,r){const p=w("router-link");return i(),l("div",je,[e("div",ze,[Ne,He,e("div",Re,[a.isLoading?(i(),l(E,{key:0},C(3,o=>e("div",{key:o,class:"col"},Me)),64)):(i(!0),l(E,{key:1},C(a.enabledProducts,o=>(i(),l("div",{class:"col",key:o.id},[e("div",Ve,[e("span",Ke,g(o.category),1),e("div",Oe,[e("img",{src:o.imageUrl,class:"card-img-top-2 img-fluid h-100",alt:o.title},null,8,Ge)]),e("button",{class:"heart border-0",onClick:h=>r.toggleFavorite(o.id,o.category,o.title),type:"button"},[e("i",{class:k(["bi",{"bi-heart-fill":a.isFavorite[o.id],"bi-heart":!a.isFavorite[o.id]}]),style:{"font-size":"24px"}},null,2)],8,Je),e("div",Ye,[e("div",We,[x(p,{to:{name:"TouristSinglePackage",params:{category:o.category,title:o.title}}},{default:L(()=>[e("h3",qe,g(o.title),1)]),_:2},1032,["to"]),e("div",Qe,[a.currentDate<=o.endDate?(i(),l("p",Xe," 預約時間："+g(o.startDate)+" ~ "+g(o.endDate),1)):(i(),l("p",Ze,"預約時間已截止")),a.currentDate<=o.endDate?(i(),l("p",ts," 出遊時間："+g(o.goStartDate)+" ~ "+g(o.goEndDate),1)):(i(),l("p",es,"已出遊完成"))])]),e("div",ss,[e("div",as,[e("div",os,[e("span",rs,[is,m(g(o.tag_1),1)])]),e("p",ns,g(r.thousand(o.price)),1)])])])])]))),128))])])])}const cs=F(Pe,[["render",ls],["__scopeId","data-v-a46167fb"]]),ds="https://two024-south-json-server-vercel.onrender.com",ps={components:{BannerSwiper:bt,LatestNews:Qt,TouristAttractions:Le,AdBlock:Se,TouristPackage:cs},data(){return{searchText:"",searchResults:[],showResults:!1,searchData:[]}},methods:{search(){if(this.axios.get(`${ds}/search`).then(n=>{this.searchData=n.data}).catch(n=>{alert(`${n.message}`)}),this.searchText===""){this.showResults=!1;return}const s=new RegExp(this.searchText,"i"),t=this.searchData.filter(n=>s.test(n.title));this.searchResults=t.slice(0,3),this.showResults=!0}}},us=s=>(et("data-v-4b182187"),s=s(),st(),s),hs={class:"search-bar bg-primary-400 border-left-bottom"},fs={class:"container text-center pt-10 pb-10 py-md-20"},ms=us(()=>e("p",{class:"fs-3 text-white mb-10 fw-bold text-center"},"開始你的南部輕旅遊！",-1)),gs={class:"mx-auto",style:{"max-width":"856px"}},bs={class:"input-group position-relative flex-column"},_s={class:"input-wrapper"},vs={class:"list-unstyled bg-white rounded-5"},ys=["href"],xs={key:1};function ws(s,t,n,c,a,r){const p=w("banner-swiper"),o=w("LatestNews"),h=w("TouristAttractions"),D=w("AdBlock"),b=w("TouristPackage");return i(),l(E,null,[x(p),e("div",hs,[e("div",fs,[ms,e("div",gs,[e("div",bs,[e("div",_s,[Q(e("input",{type:"search",onInput:t[0]||(t[0]=(...u)=>r.search&&r.search(...u)),"onUpdate:modelValue":t[1]||(t[1]=u=>a.searchText=u),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-none d-md-block",placeholder:"輸入遊玩景點，推薦：漫遊蓮潭風光"},null,544),[[X,a.searchText,void 0,{trim:!0}]]),Q(e("input",{type:"search","onUpdate:modelValue":t[2]||(t[2]=u=>a.searchText=u),onInput:t[3]||(t[3]=(...u)=>r.search&&r.search(...u)),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-md-none",placeholder:"輸入遊玩南部縣市"},null,544),[[X,a.searchText,void 0,{trim:!0}]]),e("button",{class:"btn-cerulean-blue position-absolute search-btn-cerulean-blue-position h-70 border-0",type:"button",onClick:t[4]||(t[4]=(...u)=>r.search&&r.search(...u))},"搜尋")])]),e("ul",vs,[a.showResults&&a.searchResults.length>0?(i(!0),l(E,{key:0},C(a.searchResults,u=>(i(),l("li",{key:u+123},[e("a",{href:u.link},g(u.title),9,ys)]))),128)):Z("",!0),a.showResults&&a.searchResults.length===0?(i(),l("li",xs,"無資料，關鍵字：嘉義、台南、高雄")):Z("",!0)])])])]),x(o),x(h),x(D),x(b)],64)}const Ds=F(ps,[["render",ws],["__scopeId","data-v-4b182187"]]);export{Ds as default};
