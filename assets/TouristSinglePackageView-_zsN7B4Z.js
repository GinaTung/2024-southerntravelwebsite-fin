import{B as S}from"./BannerBlock-FQ_Z5_hN.js";import{L as F}from"./LikeBlock-uwn1acH4.js";import{s as h}from"./sweetAlert-TFFmnPge.js";import{_ as E,c,b as y,a as t,w as D,f as u,v as k,t as l,F as v,h as C,r as w,o as _,d as b,k as m,n as x,j as V,p as N,i as j}from"./index-LkcBEWKG.js";import"./navigation-9iH9xVCE.js";const p="https://two024-south-json-server-vercel.onrender.com",A={components:{BannerBlock:S,LikeBlock:F},data(){return{category:"",packageTitle:"",products:[],newProductsContent:"",enabledProducts:[],carts:[],quantity:1,newQty:0,newCarts:[],cartId:null,bsOffcanvas:null,userId:"",token:"",currentDate:"",endDate:"",isDisabled:!1,cartsLength:0,isLoading:!1,status:{loadingItem:!1,loadingItem2:"",loadingItem3:"",loadingItem4:"",loadingItem5:""},heartData:[],isFavorite:{}}},created(){this.category=this.$route.params.category,this.packageTitle=this.$route.params.title},methods:{redirectToA(a){this.$router.push({path:"/TouristPackage",query:{category:a}})},checkDate(){var a=new Date,e={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate()},n=(e.month<10?"0":"")+e.month,d=(e.date<10?"0":"")+e.date,i=e.year+"-"+n+"-"+d;this.currentDate=i},getHeartData(){this.axios.get(`${p}/hearts`).then(a=>{a.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(a=>{h.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(a,e,n){this.token?this.axios.get(`${p}/hearts`).then(d=>{const i=d.data.find(o=>o.product===a&&o.userId===this.userId&&o.tag==="旅遊景點");i?this.axios.delete(`${p}/hearts/${i.id}`).then(o=>{this.isFavorite[a]=!1,h.threeLayerCheckType("success",`取消收藏 ${n} 成功`),this.getHeartData()}).catch(o=>{h.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${p}/hearts`,{product:a,category:e,title:n,userId:this.userId,tag:"旅遊景點"}).then(o=>{this.isFavorite[a]=!0,h.threeLayerCheckType("success",`已加入收藏 ${n} 成功`),this.getHeartData()}).catch(o=>{h.threeLayerCheckType("error","收藏資料失敗")})}).catch(d=>{h.threeLayerCheckType("error","取得愛心收藏資料失敗")}):h.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getProducts(){this.axios.get(`${p}/products`).then(a=>{this.products=a.data,this.products.forEach(e=>{e.is_enabled===1&&e.title===this.packageTitle&&(this.enabledProducts.push(e),this.isLoading=!1)}),this.endDate=this.enabledProducts[0].endDate,this.getNewText()}).catch(()=>{this.isLoading=!1,h.threeLayerCheckType("error","取得產品資料失敗")})},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},getNewText(){const a={};this.enabledProducts.forEach((e,n)=>{e.content&&e.content.split(";").forEach(i=>{const o=i.trim();o!==""&&(a[e.id]||(a[e.id]=[]),a[e.id].push(o))})});for(const e in a)a[e].length===0&&delete a[e];this.newProductsContent=Object.entries(a).map(([e,n])=>({id:e,content:n}))},addToCart(a,e=1,n,d=1){if(this.status.loadingItem3=a,!this.token)h.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程"),this.status.loadingItem3="";else{let i=!1;this.newCarts.forEach(o=>{o.productId===a&&o.id&&(i=!0,this.cartId=o.id)}),i?this.axios.put(`${p}/carts/${this.cartId}`,{productId:a,qty:e,price:n,total:e*n,userId:this.userId,final_total:e*n*d}).then(()=>{this.status.loadingItem3="",h.threeLayerCheckType("success","已更新預約人數"),this.getCart()}).catch(()=>{this.status.loadingItem3="",h.threeLayerCheckType("error","已更新預約人數失敗")}):this.axios.post(`${p}/carts`,{productId:a,qty:e,price:n,total:e*n,userId:this.userId,final_total:e*n*d}).then(()=>{this.status.loadingItem3="",h.threeLayerCheckType("success",`已預約${this.packageTitle}成功`),this.getCart()}).catch(()=>{this.status.loadingItem3="",h.threeLayerCheckType("error","預約失敗，再重新登入預約")})}},incrementQuantity(a,e){this.status.loadingItem2=a,this.quantity<e?(this.status.loadingItem2="",this.quantity+=1):(this.status.loadingItem2="",h.threeLayerCheckType("warning",`預約人數上限為${e}人`))},decrementQuantity(a){this.status.loadingItem4=a,this.quantity>1&&(this.status.loadingItem4="",this.quantity-=1)},checkMaxValue(a){this.quantity>a&&(this.quantity=a)},handlePlus(a){this.quantity=a++},saveCardId(){this.token?this.$router.push("/cart"):h.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程")},getCart(){this.axios.get(`${p}/carts`).then(a=>{this.carts=a.data,this.carts.forEach(d=>{this.userId===d.userId&&this.newCarts.push(d)});const e=[],n=new Set;this.newCarts.forEach(d=>{n.has(d.productId)||(n.add(d.productId),e.push(d))}),this.newCarts=e,this.cartsLength=this.newCarts.length,this.$emitter.emit("updateCart",this.cartsLength)}).catch(()=>{h.threeLayerCheckType("error","取得購物車資料失敗")})},getCookie(a){const e=document.cookie.split(";");for(let n of e){const[d,i]=n.trim().split("=");if(d===a)return i}return null}},mounted(){this.isLoading=!0,this.getProducts(),this.getCart();const a=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=a*1,this.token=e,this.checkDate(),this.getHeartData(),window.scrollTo(0,0)}},r=a=>(N("data-v-9ebb12c9"),a=a(),j(),a),Q={class:"container py-10 py-lg-30"},H={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},M={class:"breadcrumb mb-0 fs-5"},z={class:"breadcrumb-item"},O={class:"breadcrumb-item"},Y={class:"breadcrumb-item"},G={class:"breadcrumb-item"},J={class:"col-12 col-md-7 col-lg-8 my-8 my-md-0"},K={class:"d-flex"},R=r(()=>t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1)),W={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},X=r(()=>t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),b("第一天 ")],-1)),Z=r(()=>t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午1 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-contact-tab","data-bs-toggle":"pill","data-bs-target":"#pills-contact",type:"button",role:"tab","aria-controls":"pills-contact","aria-selected":"false"}," 下午2 ")])],-1)),$={class:"tab-content card-att",id:"pills-tabContent"},I={class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},tt={class:"row"},st={class:"w-100 w-lg-60 mb-4"},et={class:"card-att-img card-att-img-2"},at=["src","alt"],it={class:"w-100 w-lg-40"},lt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},ot={class:"text-dark mb-4"},nt={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},rt={class:"row"},dt={class:"w-100 w-lg-60 mb-4"},ct={class:"card-att-img card-att-img-2"},_t=["src","alt"],ht={class:"w-100 w-lg-40"},bt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},gt={class:"text-dark"},pt={class:"tab-pane fade",id:"pills-contact",role:"tabpanel","aria-labelledby":"pills-contact-tab",tabindex:"0"},mt={class:"row"},yt={class:"w-100 w-lg-60 mb-4"},ft={class:"card-att-img card-att-img-2"},ut=["src","alt"],vt={class:"w-100 w-lg-40"},wt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},xt={class:"text-dark"},kt={key:0},Ct={class:"d-flex my-12"},Tt=r(()=>t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1)),Dt={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},Lt=r(()=>t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),b("第二天 ")],-1)),Bt=r(()=>t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"pills-home-tab-two","data-bs-toggle":"pill","data-bs-target":"#pills-home-two",type:"button",role:"tab","aria-controls":"pills-home-two","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab-two","data-bs-toggle":"pill","data-bs-target":"#pills-profile-two",type:"button",role:"tab","aria-controls":"pills-profile-two","aria-selected":"false"}," 下午1 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-contact-tab-two","data-bs-toggle":"pill","data-bs-target":"#pills-contact-two",type:"button",role:"tab","aria-controls":"pills-contact-two","aria-selected":"false"}," 下午2 ")])],-1)),Pt={class:"tab-content card-att",id:"pills-tabContent"},qt={class:"tab-pane fade show active",id:"pills-home-two",role:"tabpanel","aria-labelledby":"pills-home-tab-two",tabindex:"0"},Ut={class:"row"},St={class:"w-100 w-lg-60 mb-4"},Ft={class:"card-att-img card-att-img-2"},Et=["src","alt"],Vt={class:"w-100 w-lg-40"},Nt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},jt={class:"text-dark mb-4"},At={class:"tab-pane fade",id:"pills-profile-two",role:"tabpanel","aria-labelledby":"pills-profile-tab-two",tabindex:"0"},Qt={class:"row"},Ht={class:"w-100 w-lg-60 mb-4"},Mt={class:"card-att-img card-att-img-2"},zt=["src","alt"],Ot={class:"w-lg-40"},Yt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Gt={class:"text-dark"},Jt={class:"tab-pane fade",id:"pills-contact-two",role:"tabpanel","aria-labelledby":"pills-contact-tab-two",tabindex:"0"},Kt={class:"row"},Rt={class:"w-100 w-lg-60 mb-4"},Wt={class:"card-att-img card-att-img-2"},Xt=["src","alt"],Zt={class:"w-lg-40"},$t={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},It={class:"text-dark"},ts={key:1},ss={class:"d-flex my-12"},es=r(()=>t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1)),as={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},is=r(()=>t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),b("第三天 ")],-1)),ls=r(()=>t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-75",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"pills-home-tab-third","data-bs-toggle":"pill","data-bs-target":"#pills-home-third",type:"button",role:"tab","aria-controls":"pills-home-third","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab-third","data-bs-toggle":"pill","data-bs-target":"#pills-profile-third",type:"button",role:"tab","aria-controls":"pills-profile-third","aria-selected":"false"}," 下午1 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-contact-tab-third","data-bs-toggle":"pill","data-bs-target":"#pills-contact-third",type:"button",role:"tab","aria-controls":"pills-contact-third","aria-selected":"false"}," 下午2 ")])],-1)),os={class:"tab-content card-att",id:"pills-tabContent"},ns={class:"tab-pane fade",id:"pills-home-third",role:"tabpanel","aria-labelledby":"pills-home-tab-third",tabindex:"0"},rs={class:"row"},ds={class:"w-100 w-lg-60 mb-4"},cs={class:"card-att-img card-att-img-2"},_s=["src","alt"],hs={class:"w-100 w-lg-40"},bs={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},gs={class:"text-dark mb-4"},ps={class:"tab-pane fade",id:"pills-profile-third",role:"tabpanel","aria-labelledby":"pills-profile-tab-third",tabindex:"0"},ms={class:"row"},ys={class:"w-100 w-lg-60 mb-4"},fs={class:"card-att-img card-att-img-2"},us=["src","alt"],vs={class:"w-lg-40"},ws={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},xs={class:"text-dark"},ks={class:"tab-pane fade",id:"pills-contact-third",role:"tabpanel","aria-labelledby":"pills-contact-tab-third",tabindex:"0"},Cs={class:"row"},Ts={class:"w-100 w-lg-60 mb-4"},Ds={class:"card-att-img card-att-img-2"},Ls=["src","alt"],Bs={class:"w-lg-40"},Ps={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},qs={class:"text-dark"},Us={class:"col-12 col-md-5 col-lg-4"},Ss={class:"d-flex mb-4"},Fs={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},Es={class:"fs-3 fs-sm-4 fs-xl-3 mb-6 text-primary-700 fw-bold"},Vs=r(()=>t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-person-walking me-2"}),b("景點行程 ")],-1)),Ns={class:"mt-2 mb-6"},js={class:"d-flex mb-4 flex-column mb-6"},As=r(()=>t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-calendar-plus me-2"}),b("預約期間 ")])],-1)),Qs={key:0,class:"mt-2"},Hs={key:1,class:"mt-2 text-danger"},Ms={class:"d-flex mb-6 flex-column"},zs=r(()=>t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-car-front-fill me-2"}),b("出發時間 ")])],-1)),Os={class:"mt-2"},Ys={class:"d-flex mb-4 flex-column"},Gs=r(()=>t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-card-list me-2"}),b("旅遊方案概覽 ")])],-1)),Js=r(()=>t("h6",{class:"mt-2"},"適合年齡：6-80歲",-1)),Ks={class:"mt-2"},Rs=r(()=>t("h6",{class:"mt-4"},"所需時間：約10-12小時",-1)),Ws=r(()=>t("h6",{class:"mt-2"},"交通：當地公車/客運，或渡輪/麵包車(依情況調整)",-1)),Xs=r(()=>t("h6",{class:"mt-4"}," 特色：深度體驗當地文化與生活，享受悠閒旅行節奏，包含足夠自由時間用於探索、拍照和休息 ",-1)),Zs={class:"d-flex justify-content-between mb-4 align-items-end"},$s={class:"fs-4 fs-lg-5 text-decoration-line-through text-end"},Is={class:"d-flex flex-sm-column align-items-end justify-content-end"},te=r(()=>t("p",{class:"fs-6 text-danger fw-bold d-none d-sm-block"},"促銷價",-1)),se={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},ee={class:"d-flex mb-2"},ae=["disabled","onClick"],ie={key:0,class:"spinner-border spinner-grow-sm",role:"status"},le=r(()=>t("i",{class:"bi bi-dash-lg"},null,-1)),oe=["disabled"],ne=["onClick"],re={key:0,class:"spinner-border spinner-grow-sm",role:"status"},de=r(()=>t("i",{class:"bi bi-plus-lg"},null,-1)),ce=["onClick"],_e={class:"mb-2"},he={class:"text-danger"},be={key:0,class:"mb-5"},ge=r(()=>t("span",{class:"text-danger"},"0",-1)),pe={class:"text-danger"},me=["onClick"],ye={key:0,class:"spinner-border spinner-grow-sm",role:"status"},fe={key:2,class:"btn btn-danger w-100 fs-5 mb-4 disabled btn-danger-rounded",type:"button"};function ue(a,e,n,d,i,o){const L=w("VueLoading"),B=w("BannerBlock"),T=w("router-link"),P=w("LikeBlock");return _(),c(v,null,[y(L,{active:i.isLoading,class:"text-center","z-index":1060},null,8,["active"]),y(B),t("div",Q,[t("nav",H,[t("ol",M,[t("li",z,[y(T,{to:"/",exact:"","active-class":"active-link"},{default:D(()=>[b(" 首頁 ")]),_:1})]),t("li",O,[y(T,{exact:"","active-class":"active-link",to:{path:"/TouristPackage",query:{category:"全部",page:"1"}}},{default:D(()=>[b(" 南部旅遊方案 ")]),_:1})]),t("li",Y,[u(t("a",{onClick:e[0]||(e[0]=s=>o.redirectToA("台南")),class:"navbar-brand"},"台南",512),[[k,i.category==="台南"]]),u(t("a",{onClick:e[1]||(e[1]=s=>o.redirectToA("嘉義")),class:"navbar-brand"},"嘉義",512),[[k,i.category==="嘉義"]]),u(t("a",{onClick:e[2]||(e[2]=s=>o.redirectToA("高雄")),class:"navbar-brand"},"高雄",512),[[k,i.category==="高雄"]])]),t("li",G,l(i.packageTitle),1)])]),(_(!0),c(v,null,C(i.enabledProducts,s=>(_(),c("div",{class:"row h-100 flex-wrap-reverse flex-md-nowrap",key:s.id},[t("div",J,[t("div",K,[R,t("div",W,[X,Z,t("div",$,[t("div",I,[t("div",tt,[t("div",st,[t("div",et,[t("img",{src:s.imagesUrl[0],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[0].itinerary_first_day_am_title},null,8,at)])]),t("div",it,[t("h4",lt,l(s.itinerary_data[0].itinerary_first_day_am_title),1),t("p",ot,l(s.itinerary_data[0].itinerary_first_day_am_content),1)])])]),t("div",nt,[t("div",rt,[t("div",dt,[t("div",ct,[t("img",{src:s.imagesUrl[1],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[0].itinerary_first_day_pm_title},null,8,_t)])]),t("div",ht,[t("h4",bt,l(s.itinerary_data[0].itinerary_first_day_pm_title),1),t("p",gt,l(s.itinerary_data[0].itinerary_first_day_pm_content),1)])])]),t("div",pt,[t("div",mt,[t("div",yt,[t("div",ft,[t("img",{src:s.imagesUrl[2],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[0].itinerary_first_day_pm_title2},null,8,ut)])]),t("div",vt,[t("h4",wt,l(s.itinerary_data[0].itinerary_first_day_pm_title2),1),t("p",xt,l(s.itinerary_data[0].itinerary_first_day_pm_content2),1)])])])])])]),s.itinerary_data.length>1?(_(),c("div",kt,[t("div",Ct,[Tt,t("div",Dt,[Lt,Bt,t("div",Pt,[t("div",qt,[t("div",Ut,[t("div",St,[t("div",Ft,[t("img",{src:s.imagesUrl[3],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[1].itinerary_second_day_am_title},null,8,Et)])]),t("div",Vt,[t("h4",Nt,l(s.itinerary_data[1].itinerary_second_day_am_title),1),t("p",jt,l(s.itinerary_data[1].itinerary_second_day_am_content),1)])])]),t("div",At,[t("div",Qt,[t("div",Ht,[t("div",Mt,[t("img",{src:s.imagesUrl[4],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[1].itinerary_second_day_pm_title},null,8,zt)])]),t("div",Ot,[t("h4",Yt,l(s.itinerary_data[1].itinerary_second_day_pm_title),1),t("p",Gt,l(s.itinerary_data[1].itinerary_second_day_pm_content),1)])])]),t("div",Jt,[t("div",Kt,[t("div",Rt,[t("div",Wt,[t("img",{src:s.imagesUrl[5],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[1].itinerary_second_day_pm_title2},null,8,Xt)])]),t("div",Zt,[t("h4",$t,l(s.itinerary_data[1].itinerary_second_day_pm_title2),1),t("p",It,l(s.itinerary_data[1].itinerary_second_day_pm_content2),1)])])])])])])])):m("",!0),s.itinerary_data.length>2?(_(),c("div",ts,[t("div",ss,[es,t("div",as,[is,ls,t("div",os,[t("div",ns,[t("div",rs,[t("div",ds,[t("div",cs,[t("img",{src:s.imagesUrl[6],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[2].itinerary_third_day_am_title},null,8,_s)])]),t("div",hs,[t("h4",bs,l(s.itinerary_data[2].itinerary_third_day_am_title),1),t("p",gs,l(s.itinerary_data[2].itinerary_third_day_am_content),1)])])]),t("div",ps,[t("div",ms,[t("div",ys,[t("div",fs,[t("img",{src:s.imagesUrl[7],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[2].itinerary_third_day_pm_title},null,8,us)])]),t("div",vs,[t("h4",ws,l(s.itinerary_data[2].itinerary_third_day_pm_title),1),t("p",xs,l(s.itinerary_data[2].itinerary_third_day_pm_content),1)])])]),t("div",ks,[t("div",Cs,[t("div",Ts,[t("div",Ds,[t("img",{src:s.imagesUrl[8],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[2].itinerary_third_day_pm_title2},null,8,Ls)])]),t("div",Bs,[t("h4",Ps,l(s.itinerary_data[2].itinerary_third_day_pm_title2),1),t("p",qs,l(s.itinerary_data[2].itinerary_third_day_pm_content2),1)])])])])])])])):m("",!0)]),t("div",Us,[t("div",Ss,[t("span",Fs,l(i.category),1)]),t("h2",Es,l(i.packageTitle),1),Vs,t("div",Ns,[(_(!0),c(v,null,C(i.newProductsContent,(g,q)=>(_(),c("div",{key:q+123},[(_(!0),c(v,null,C(g.content,(U,f)=>(_(),c("p",{key:f,class:x({"mb-3":f===2,"ps-10":f!==0&&f!==3})},l(U),3))),128))]))),128))]),t("div",js,[As,i.currentDate<=s.endDate?(_(),c("h6",Qs,l(s.startDate)+" 至 "+l(s.endDate),1)):(_(),c("h5",Hs,"預約時間已截止"))]),t("div",Ms,[zs,t("h6",Os,l(s.goStartDate)+" 至 "+l(s.goEndDate),1)]),t("div",Ys,[Gs,Js,t("h6",Ks,"集合地點與時間："+l(s.category)+"火車站，早上8點",1),Rs,Ws,Xs]),t("div",Zs,[t("p",$s," NT"+l(o.thousand(s.origin_price)),1),t("div",Is,[te,t("p",se," NT"+l(o.thousand(s.price)),1)])]),t("div",ee,[t("button",{class:"btn btn-outline-dark rounded-0",type:"button",disabled:i.quantity===1,onClick:g=>o.decrementQuantity(s.id)},[i.status.loadingItem4===s.id?(_(),c("span",ie)):m("",!0),le],8,ae),u(t("input",{min:"1",max:"10",type:"number",disabled:i.quantity>s.max_travelers,class:"form-control text-center rounded-0 border border-dark","onUpdate:modelValue":e[3]||(e[3]=g=>i.quantity=g),readonly:""},null,8,oe),[[V,i.quantity]]),t("button",{class:"btn btn-outline-dark rounded-0",type:"button",onClick:g=>o.incrementQuantity(s.id,s.max_travelers)},[i.status.loadingItem2===s.id?(_(),c("span",re)):m("",!0),de],8,ne),t("button",{type:"button",class:"btn-outline-cerulean rounded-0 ms-2 p-2",onClick:g=>o.toggleFavorite(s.id,i.category,i.packageTitle)},[t("i",{class:x(["bi",{"bi-heart-fill":i.isFavorite[s.id],"bi-heart":!i.isFavorite[s.id]}])},null,2)],8,ce)]),t("h6",_e,[b(" 注意： "),t("span",he," 至少3位成團，最多"+l(s.max_travelers)+"位出遊 ",1)]),i.currentDate<=s.endDate?(_(),c("h6",be,[b(" 目前已有 "),ge,b(" 位預約，剩 "),t("span",pe,l(s.max_travelers),1),b(" 位可預約 ")])):m("",!0),i.currentDate<=i.endDate?(_(),c("button",{key:1,class:x(["btn-square w-100 fs-5 mb-4",{"disabled-btn":i.currentDate>i.endDate}]),type:"button",onClick:g=>o.addToCart(s.id,i.quantity,s.price)},[i.status.loadingItem3===s.id?(_(),c("span",ye)):m("",!0),b(" 預約旅遊方案 ")],10,me)):(_(),c("button",fe," 預約時間截止 ")),t("button",{class:x(["btn-square fs-5 w-100",{"disabled-btn":i.currentDate>i.endDate||i.newCarts.length===0}]),type:"button",onClick:e[4]||(e[4]=(...g)=>o.saveCardId&&o.saveCardId(...g))}," 直接結帳 ",2)])]))),128)),y(P,{adCategoryTitle:"packages",token:i.token,"user-id":i.userId,"current-date":i.currentDate},null,8,["token","user-id","current-date"])])],64)}const Te=E(A,[["render",ue],["__scopeId","data-v-9ebb12c9"]]);export{Te as default};