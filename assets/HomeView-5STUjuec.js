import{g as F,S as at,a as rt,N as nt}from"./navigation-srARhDtJ.js";import{_ as T,o,g as K,w as D,b as _,a as e,d,r as y,c as i,F as L,h as j,n as R,t as h,e as Q,f as W,i as H,j as J}from"./index-RR-LHgYl.js";import{s as I}from"./sweetAlert-qsZBwJtF.js";function ot(a){let{swiper:t,extendParams:u,on:p,emit:r,params:l}=a;t.autoplay={running:!1,paused:!1,timeLeft:0},u({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,s,m=l&&l.autoplay?l.autoplay.delay:3e3,k=l&&l.autoplay?l.autoplay.delay:3e3,g,x=new Date().getTime,c,S,$,z,C,w;function M(n){!t||t.destroyed||!t.wrapperEl||n.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",M),E())}const O=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?c=!0:c&&(k=g,c=!1);const n=t.autoplay.paused?g:x+k-new Date().getTime();t.autoplay.timeLeft=n,r("autoplayTimeLeft",n,n/m),s=requestAnimationFrame(()=>{O()})},X=()=>{let n;return t.virtual&&t.params.virtual.enabled?n=t.slides.filter(b=>b.classList.contains("swiper-slide-active"))[0]:n=t.slides[t.activeIndex],n?parseInt(n.getAttribute("data-swiper-autoplay"),10):void 0},P=n=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),O();let v=typeof n>"u"?t.params.autoplay.delay:n;m=t.params.autoplay.delay,k=t.params.autoplay.delay;const b=X();!Number.isNaN(b)&&b>0&&typeof n>"u"&&(v=b,m=b,k=b),g=v;const B=t.params.speed,Y=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(B,!0,!0),r("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,B,!0,!0),r("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(B,!0,!0),r("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,B,!0,!0),r("autoplay")),t.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return v>0?(clearTimeout(f),f=setTimeout(()=>{Y()},v)):requestAnimationFrame(()=>{Y()}),v},V=()=>{t.autoplay.running=!0,P(),r("autoplayStart")},N=()=>{t.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(s),r("autoplayStop")},A=(n,v)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(f),n||(w=!0);const b=()=>{r("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",M):E()};if(t.autoplay.paused=!0,v){C&&(g=t.params.autoplay.delay),C=!1,b();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-x),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),b())},E=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(x=new Date().getTime(),w?(w=!1,P(g)):P(),t.autoplay.paused=!1,r("autoplayResume"))},U=()=>{if(t.destroyed||!t.autoplay.running)return;const n=F();n.visibilityState==="hidden"&&(w=!0,A(!0)),n.visibilityState==="visible"&&E()},q=n=>{n.pointerType==="mouse"&&(w=!0,A(!0))},G=n=>{n.pointerType==="mouse"&&t.autoplay.paused&&E()},Z=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",q),t.el.addEventListener("pointerleave",G))},tt=()=>{t.el.removeEventListener("pointerenter",q),t.el.removeEventListener("pointerleave",G)},et=()=>{F().addEventListener("visibilitychange",U)},st=()=>{F().removeEventListener("visibilitychange",U)};p("init",()=>{t.params.autoplay.enabled&&(Z(),et(),x=new Date().getTime(),V())}),p("destroy",()=>{tt(),st(),t.autoplay.running&&N()}),p("beforeTransitionStart",(n,v,b)=>{t.destroyed||!t.autoplay.running||(b||!t.params.autoplay.disableOnInteraction?A(!0,!0):N())}),p("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){N();return}S=!0,$=!1,w=!1,z=setTimeout(()=>{w=!0,$=!0,A(!0)},200)}}),p("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!S)){if(clearTimeout(z),clearTimeout(f),t.params.autoplay.disableOnInteraction){$=!1,S=!1;return}$&&t.params.cssMode&&E(),$=!1,S=!1}}),p("slideChange",()=>{t.destroyed||!t.autoplay.running||(C=!0)}),Object.assign(t.autoplay,{start:V,stop:N,pause:A,resume:E})}const it={components:{Swiper:at,SwiperSlide:rt},setup(){return{modules:[nt,ot]}}},lt=e("div",{class:"banner-bg banner-img3"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),d(" 高雄景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"高雄港旅運中心"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 高雄港是台灣港務與海運核心，近年來亞太地區郵輪旅遊產業日益興盛 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," ，作為台灣第一大港的高雄，在港市合作、水岸開發的方針下 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[d(" 同時停泊2艘排水量達22.5萬噸豪華郵輪"),e("br"),d("是南台灣最重要的海上門戶 ")]),e("p",{class:"fs-7 text-center"},[d(" 輕軌串連駁二藝術中心、高雄流行音樂中心等建設"),e("br"),d("共築高雄水岸的新天際線。 ")])])],-1),ct=e("div",{class:"banner-bg banner-img2"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),d(" 高雄景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"旗津黃金海韻－海珍珠"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 由兩位藝術家耗時6年完成，外純白、內金黃的海貝造型 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 能讓遊客聆聽海聲，更是亞洲最大的貝殼裝置藝術 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[d("由兩位藝術家耗時6年完成"),e("br"),d("外純白、內金黃的海貝造型")]),e("p",{class:"fs-7 text-center"},[d("能讓遊客聆聽海聲"),e("br"),d("更是亞洲最大的貝殼裝置藝術")])])],-1),dt=e("div",{class:"banner-bg banner-img1"},[e("div",{class:"banner-box px-6 py-10 p-lg-10 mx-auto text-center"},[e("p",{class:"fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"},[e("i",{class:"bi bi-geo-alt-fill me-2 icon-map"}),d(" 嘉義景點推薦 "),e("i",{class:"bi bi-geo-alt-fill ms-2 icon-map"})]),e("h1",{class:"font-hero mb-0 mb-md-10 text-nowrap"},"國立故宮博物院南部院區"),e("p",{class:"fs-6 fs-lg-5 mb-2 d-none d-md-block text-center"}," 博物館建築以中國水墨畫濃墨、非白與渲染三種技法 "),e("p",{class:"fs-6 fs-lg-5 d-none d-md-block text-center"}," 形成時量體展示空間及文物庫房、虛量體公共接待空間與穿透連接空間 ")]),e("div",{class:"d-block d-md-none mt-8 text-center text-white mb-8"},[e("p",{class:"fs-7 mb-2 text-center"},[d("博物館建築以中國水墨畫濃墨、"),e("br"),d("非白與渲染三種技法")]),e("p",{class:"fs-7 text-center"},[d(" 形成時量體展示空間及文物庫房、"),e("br"),d("虛量體公共接待空間與穿透連接空間 ")])])],-1);function ut(a,t,u,p,r,l){const f=y("swiper-slide"),s=y("swiper");return o(),K(s,{navigation:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:p.modules,class:"mySwiper"},{default:D(()=>[_(f,null,{default:D(()=>[lt]),_:1}),_(f,null,{default:D(()=>[ct]),_:1}),_(f,null,{default:D(()=>[dt]),_:1})]),_:1},8,["modules"])}const pt=T(it,[["render",ut]]),mt="https://two024-south-json-server-vercel.onrender.com",ft={data(){return{products:[],enabledProducts:[],newsLatestProductData:[],attractions:[],currentDate:""}},methods:{checkDate(){var a=new Date,t={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate()},u=(t.month<10?"0":"")+t.month,p=(t.date<10?"0":"")+t.date,r=t.year+"-"+u+"-"+p;this.currentDate=r},getProducts(){this.axios.get(`${mt}/products?id=-c35c4Q9gWLGb7p4aWAM4&id=KvBuohr&id=xoGgJIk&id=fsfguEU`).then(a=>{this.products=a.data,this.isLoading=!1,this.products.forEach(t=>{t.is_enabled===1&&this.enabledProducts.push(t),this.isLoading=!0}),this.getNewsProductsData()}).catch(a=>{I.threeLayerCheckType("error","取得產品資料失敗")})},getNewsProductsData(){this.enabledProducts.forEach(a=>{this.newsLatestProductData.push({type:"旅遊方案",id:a.id,category:a.category,startDate:a.startDate,endDate:a.endDate,title:a.title,imageUrl:a.imageUrl})})}},mounted(){this.getProducts(),this.checkDate()}},ht={class:"latestNews"},gt={class:"container py-10 py-lg-30"},bt=e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-1 mb-lg-2 text-center"},"最新消息",-1),_t=e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Latest News",-1),yt={class:"row"},vt={class:"col-12 col-lg-7"},xt={class:"tab-content mb-8 mb-lg-0 flex-grow-1",id:"nav-tabContent"},wt=["id","aria-labelledby"],kt={class:"image-tab-pane"},Et=["src","alt"],Dt=["src","alt"],Tt={key:1,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",href:"#"},$t={class:"col-12 col-lg-5"},At={class:"list-group",id:"list-tab",role:"tablist"},Bt=["id","data-bs-target","aria-controls"],Lt={class:"d-flex justify-content-between align-items-center"},St={class:"list-tab-title"},Pt={class:"d-flex mb-3"},Nt={class:"badge rounded-pill bg-light2 text-dark2 py-1 px-4 fs-6"},jt={class:"nav-section-title"},Ct={class:"fs-6 fs-lg-5 mb-2 fw-bold text-primary-700"},Ft={key:0,class:"fs-6 fs-lg-5 text-dark2"},Rt={key:1,class:"fs-6 fs-lg-5 text-danger"},It=e("span",{class:"material-symbols-outlined"}," chevron_right ",-1);function zt(a,t,u,p,r,l){const f=y("RouterLink");return o(),i("div",ht,[e("div",gt,[bt,_t,e("div",yt,[e("div",vt,[e("div",xt,[(o(!0),i(L,null,j(r.newsLatestProductData,(s,m)=>(o(),i("div",{key:m,class:R(["tab-pane fade",{"show active":m===0}]),id:"list-"+m,role:"tabpanel","aria-labelledby":"list-"+m+"-list"},[e("div",kt,[e("img",{src:s.imageUrl,class:"img-fluid opacity-25 first-img z-index-1",alt:s.title},null,8,Et),e("img",{src:s.imageUrl,class:"img-fluid second-img z-index-2",alt:s.title},null,8,Dt),s.category&&s.title?(o(),K(f,{key:0,class:"btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3",to:{name:"TouristSinglePackage",params:{category:s.category,title:s.title}}},{default:D(()=>[d(" 查看更多 ")]),_:2},1032,["to"])):(o(),i("a",Tt," 查看更多 "))])],10,wt))),128))])]),e("div",$t,[e("div",At,[(o(!0),i(L,null,j(r.newsLatestProductData,(s,m)=>(o(),i("a",{key:m,class:R({"list-group-item":!0,"list-group-item-action":!0,"px-6":!0,"py-4":!0,"p-lg-6":!0,"mb-2":!0,active:m===0}),id:"list-"+m+"-list","data-bs-toggle":"list","data-bs-target":"#list-"+m,role:"tab","aria-controls":"list-"+m},[e("div",Lt,[e("div",St,[e("div",Pt,[e("span",{class:R(["badge rounded-pill",{"bg-primary-200 text-primary-500 fw-bold me-1 py-1 px-4 fs-6":s.type==="旅遊方案","bg-secondary-200 text-secondary-600 fw-bold me-1 py-1 px-4 fs-6":s.type==="旅遊景點"}])},h(s.type),3),e("span",Nt,h(s.category),1)]),e("div",jt,[e("h4",Ct,h(s.title),1),r.currentDate<=s.endDate?(o(),i("p",Ft,"預約時間："+h(s.startDate)+" ~ "+h(s.endDate),1)):(o(),i("p",Rt,"預約時間已截止"))])]),It])],10,Bt))),128))])])])])])}const Mt=T(ft,[["render",zt]]),Ot="/2024-southerntravelwebsite-fin/assets/pic-church2-klX2i7UD.jpg",Vt="/2024-southerntravelwebsite-fin/assets/attraction2-bA-GZDA9.png",Ut="/2024-southerntravelwebsite-fin/assets/attraction5-pLPDTKIE.png",qt="/2024-southerntravelwebsite-fin/assets/attraction1-1-Wr58ekxN.jpg",Gt="/2024-southerntravelwebsite-fin/assets/attraction3-PtL9DrR1.png",Yt="https://two024-south-json-server-vercel.onrender.com",Wt={data(){return{attractions:[],enabledAttractions:[]}},methods:{getAttractions(){this.axios.get(`${Yt}/attractions`).then(a=>{this.attractions=a.data,this.attractions.forEach(t=>{t.is_enabled===1&&this.enabledAttractions.push(t)})}).catch(a=>{I.threeLayerCheckType("error","取得景點資料失敗")})}},mounted(){this.getAttractions()}},Ht={class:"southern-tourist-attractions bg-light"},Jt=Q('<div class="container py-10 py-lg-30"><p class="fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center">南部旅遊景點</p><p class="fs-6 fs-lg-5 text-center mb-5 mb-lg-20">Southern tourist attractions</p><div class="row"><div class="col-12 col-lg-6 mb-5 mb-lg-0"><div class="card-attractions"><div class="heart3"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="'+Ot+'" class="img-fluid card-attractions-img" alt="高跟鞋教堂"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%95%99%E5%A0%82" class="stretched-link"><div class="mask d-none d-sm-flex"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6 fs-xl-5"> 高跟鞋教堂高度約17m，寬度約11m，主結構由1,269根鋼架組成，外表共約320餘片玻璃，造型相當亮麗美觀，其設計與裝設不僅是全臺第一，更是全世界唯一。 </p></div><div class="mask d-flex d-sm-none flex-column"><p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p><p class="fs-6">打卡熱點</p></div></a></div></div><div class="col-12 col-lg-6"><div class="row h-100"><div class="col-12 col-sm-6 d-flex flex-column justify-content-between"><div class="image-mask mb-5 mb-lg-6"><div class="heart3"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="'+Vt+'" alt="Image 2" class="img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%97%97%E6%B4%A5%E9%BB%83%E9%87%91%E6%B5%B7%E9%9F%BB-%E6%B5%B7%E7%8F%8D%E7%8F%A0" class="stretched-link"><div class="mask mask-33 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">黃金海韻海珍珠</p><p class="fs-6">情侶必遊之地</p></div></a></div><div class="image-mask mb-5 mb-lg-0"><div class="heart3"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="'+Ut+'" alt="Image 2" class="img-size-attractions-2 image-mask-img"><a href="#/TouristAttractions/%E5%8F%B0%E5%8D%97/%E5%AE%89%E5%B9%B3%E5%8F%A4%E5%A0%A1" class="stretched-link"><div class="mask mask-62 flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">安平古堡</p><p class="fs-6">荷蘭時期遺蹟</p></div></a></div></div><div class="col-12 col-sm-6 d-flex flex-column justify-content-between"><div class="image-mask mb-5 mb-lg-6 h-100"><div class="heart3"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="'+qt+'" alt="嘉義公園-射日塔" class="img-fluid img-size-attractions-2 image-mask-img h-100"><a href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E5%98%89%E7%BE%A9%E5%85%AC%E5%9C%92-%E5%B0%84%E6%97%A5%E5%A1%94" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">嘉義公園-射日塔</p><p class="fs-6">親子共遊</p></div></a></div><div class="image-mask mb-5 mb-lg-0"><div class="heart3"><i class="bi bi-heart heart-click" data-heartStatus="false"></i></div><img src="'+Gt+'" alt="Image 4" class="img-fluid img-size-attractions-1 image-mask-img"><a href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%84%9B%E6%B2%B3%E6%B2%B3%E7%95%94%E7%BE%8E%E6%99%AF" class="stretched-link"><div class="mask flex-column"><p class="fs-5 fs-xl-4 fw-bold mb-2">愛河河畔美景</p><p class="fs-6">愛之船情侶遊覽</p></div></a></div></div></div></div></div></div>',1),Kt=[Jt];function Qt(a,t,u,p,r,l){return o(),i("div",Ht,Kt)}const Xt=T(Wt,[["render",Qt]]),Zt={},te={class:"ad"},ee=Q('<div class="container py-10 py-lg-30 d-flex flex-lg-row flex-column justify-content-lg-between text-center text-lg-start"><div class="ad-l-side mb-5 mb-lg-0"><p class="fs-4 text-center text-lg-start fs-lg-1 fw-bold mb-5 mb-lg-6">計算荷包 盡情遊覽</p><p class="fs-4 text-center text-lg-start fs-lg-1 mb-8 fw-bold">我們的旅程 為您量身定制！</p><p class="fs-6 text-center text-lg-start fs-lg-4 mb-2">Budget Smart, Travel Big</p><p class="fs-6 text-center text-lg-start fs-lg-4">Your Custom Journey Awaits.</p></div><div class="ad-r-side d-flex flex-column align-items-lg-end justify-content-lg-center align-items-center"></div></div>',1),se=[ee];function ae(a,t){return o(),i("div",te,se)}const re=T(Zt,[["render",ae]]),ne="https://two024-south-json-server-vercel.onrender.com",oe={data(){return{products:[],newProductsContent:"",enabledProducts:[],currentDate:""}},methods:{checkDate(){var a=new Date,t={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate()},u=(t.month<10?"0":"")+t.month,p=(t.date<10?"0":"")+t.date,r=t.year+"-"+u+"-"+p;this.currentDate=r},getProducts(){this.axios.get(`${ne}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`).then(a=>{this.products=a.data,this.products.forEach(t=>{t.is_enabled===1&&this.enabledProducts.push(t)})}).catch(a=>{I.threeLayerCheckType("error","取得產品資料失敗")})},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`}},mounted(){this.getProducts()}},ie={class:"southern-travel-plan"},le={class:"container py-10 py-lg-30"},ce=e("p",{class:"fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center"},"南部旅遊方案",-1),de=e("p",{class:"fs-6 fs-lg-5 text-center mb-5 mb-lg-20"},"Southern tourist attractions",-1),ue={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},pe={class:"card card-att h-100"},me={class:"tag text-white"},fe=e("div",{class:"heart3"},[e("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),he=["src","alt"],ge={class:"card-body"},be={class:"fs-5 fs-lg-4 card-title pb-4 fw-bold text-primary-700 stretched-link mb-0"},_e={class:"col-12"},ye={key:0,class:"fs-6 text-dark2"},ve={key:1,class:"fs-6 text-danger"},xe={key:2,class:"fs-6 text-dark2"},we={key:3,class:"fs-6 text-danger"},ke={class:"card-footer text-end border-0 pt-0 pb-3"},Ee={class:"d-flex justify-content-between align-items-end"},De={class:"d-flex align-items-center"},Te={class:"fs-6 fs-lg-5"},$e=e("i",{class:"bi bi-calendar-week me-2"},null,-1),Ae={class:"fs-5 fs-lg-4 text-primary-500"};function Be(a,t,u,p,r,l){const f=y("router-link");return o(),i("div",ie,[e("div",le,[ce,de,e("div",ue,[(o(!0),i(L,null,j(r.enabledProducts,s=>(o(),i("div",{class:"col",key:s.id},[e("div",pe,[e("span",me,h(s.category),1),fe,e("img",{src:s.imageUrl,class:"card-img-top-2 img-fluid h-100",alt:s.title},null,8,he),e("div",ge,[_(f,{to:{name:"TouristSinglePackage",params:{category:s.category,title:s.title}}},{default:D(()=>[e("h3",be,h(s.title),1)]),_:2},1032,["to"]),e("div",_e,[r.currentDate<=s.endDate?(o(),i("p",ye," 預約時間："+h(s.startDate)+" ~ "+h(s.endDate),1)):(o(),i("p",ve,"預約時間已截止")),r.currentDate<=s.endDate?(o(),i("p",xe," 出遊時間："+h(s.goStartDate)+" ~ "+h(s.goEndDate),1)):(o(),i("p",we,"已出遊完成"))])]),e("div",ke,[e("div",Ee,[e("div",De,[e("span",Te,[$e,d(h(s.tag_1),1)])]),e("p",Ae,h(l.thousand(s.price)),1)])])])]))),128))])])])}const Le=T(oe,[["render",Be]]),Se="https://two024-south-json-server-vercel.onrender.com",Pe={components:{BannerSwiper:pt,LatestNews:Mt,TouristAttractions:Xt,AdBlock:re,TouristPackage:Le},data(){return{isLoading:!1,searchText:"",searchResults:[],showResults:!1,searchData:[]}},methods:{search(){if(this.axios.get(`${Se}/search`).then(u=>{this.searchData=u.data}).catch(u=>{alert(`${u.message}`)}),this.searchText===""){this.showResults=!1;return}const a=new RegExp(this.searchText,"i"),t=this.searchData.filter(u=>a.test(u.title));this.searchResults=t.slice(0,3),this.showResults=!0}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},3e3)}},Ne={class:"search-bar bg-primary-400 border-left-bottom"},je={class:"container text-center pt-10 pb-10 py-md-20"},Ce=e("p",{class:"fs-3 text-white mb-10 fw-bold text-center"},"開始你的南部輕旅遊！",-1),Fe={class:"mx-auto",style:{"max-width":"856px"}},Re={class:"input-group position-relative flex-column"},Ie={class:"input-wrapper"},ze={class:"list-unstyled bg-white rounded-5"},Me=["href"],Oe={key:1};function Ve(a,t,u,p,r,l){const f=y("VueLoading"),s=y("banner-swiper"),m=y("LatestNews"),k=y("TouristAttractions"),g=y("AdBlock"),x=y("TouristPackage");return o(),i(L,null,[_(f,{active:r.isLoading,class:"text-center","z-index":1060},null,8,["active"]),_(s),e("div",Ne,[e("div",je,[Ce,e("div",Fe,[e("div",Re,[e("div",Ie,[W(e("input",{type:"search",onInput:t[0]||(t[0]=(...c)=>l.search&&l.search(...c)),"onUpdate:modelValue":t[1]||(t[1]=c=>r.searchText=c),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-none d-md-block",placeholder:"輸入遊玩景點，推薦：漫遊蓮潭風光"},null,544),[[H,r.searchText,void 0,{trim:!0}]]),W(e("input",{type:"search","onUpdate:modelValue":t[2]||(t[2]=c=>r.searchText=c),onInput:t[3]||(t[3]=(...c)=>l.search&&l.search(...c)),class:"form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100 d-md-none",placeholder:"輸入遊玩南部縣市"},null,544),[[H,r.searchText,void 0,{trim:!0}]]),e("button",{class:"btn-cerulean-blue position-absolute search-btn-cerulean-blue-position h-70 border-0",type:"button",onClick:t[4]||(t[4]=(...c)=>l.search&&l.search(...c))},"搜尋")])]),e("ul",ze,[r.showResults&&r.searchResults.length>0?(o(!0),i(L,{key:0},j(r.searchResults,c=>(o(),i("li",{key:c+123},[e("a",{href:c.link},h(c.title),9,Me)]))),128)):J("",!0),r.showResults&&r.searchResults.length===0?(o(),i("li",Oe,"無資料，關鍵字：嘉義、台南、高雄")):J("",!0)])])])]),_(m),_(k),_(g),_(x)],64)}const Ye=T(Pe,[["render",Ve]]);export{Ye as default};
