import{s as _}from"./sweetAlert-v3iFKf4t.js";import{_ as q,c as d,b as v,a as t,w as C,f as y,v as x,t as l,F as m,h as w,r as T,o as c,d as h,j as g,n as u,i as U}from"./index-FGzcModE.js";const p="https://two024-south-json-server-vercel.onrender.com",F={data(){return{category:"",packageTitle:"",products:[],newProductsContent:"",enabledProducts:[],carts:[],quantity:1,newQty:0,newCarts:[],cartId:null,bsOffcanvas:null,userId:"",token:"",currentDate:"",endDate:"",isDisabled:!1,cartsLength:0,isLoading:!1,status:{loadingItem:!1,loadingItem2:"",loadingItem3:"",loadingItem4:"",loadingItem5:""},heartData:[],isFavorite:{}}},created(){this.category=this.$route.params.category,this.packageTitle=this.$route.params.title},methods:{redirectToA(a){this.$router.push({path:"/TouristPackage",query:{category:a}})},checkDate(){var a=new Date,e={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate()},n=(e.month<10?"0":"")+e.month,o=(e.date<10?"0":"")+e.date,i=e.year+"-"+n+"-"+o;this.currentDate=i},getHeartData(){this.axios.get(`${p}/hearts`).then(a=>{a.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(a=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(a,e,n){this.token?this.axios.get(`${p}/hearts`).then(o=>{const i=o.data.find(r=>r.product===a&&r.userId===this.userId&&r.tag==="旅遊景點");i?this.axios.delete(`${p}/hearts/${i.id}`).then(r=>{this.isFavorite[a]=!1,_.threeLayerCheckType("success",`取消收藏 ${n} 成功`),this.getHeartData()}).catch(r=>{_.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${p}/hearts`,{product:a,category:e,title:n,userId:this.userId,tag:"旅遊景點"}).then(r=>{this.isFavorite[a]=!0,_.threeLayerCheckType("success",`已加入收藏 ${n} 成功`),this.getHeartData()}).catch(r=>{_.threeLayerCheckType("error","收藏資料失敗")})}).catch(o=>{_.threeLayerCheckType("error","取得愛心收藏資料失敗")}):_.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getProducts(){this.axios.get(`${p}/products`).then(a=>{this.products=a.data,this.products.forEach(e=>{e.is_enabled===1&&e.title===this.packageTitle&&(this.enabledProducts.push(e),this.isLoading=!1)}),this.endDate=this.enabledProducts[0].endDate,this.getNewText()}).catch(()=>{this.isLoading=!1,_.threeLayerCheckType("error","取得產品資料失敗")})},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},getNewText(){const a={};this.enabledProducts.forEach((e,n)=>{e.content&&e.content.split(";").forEach(i=>{const r=i.trim();r!==""&&(a[e.id]||(a[e.id]=[]),a[e.id].push(r))})});for(const e in a)a[e].length===0&&delete a[e];this.newProductsContent=Object.entries(a).map(([e,n])=>({id:e,content:n}))},addToCart(a,e=1,n,o=1){if(this.status.loadingItem3=a,!this.token)_.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程"),this.status.loadingItem3="";else{let i=!1;this.newCarts.forEach(r=>{r.productId===a&&r.id&&(i=!0,this.cartId=r.id)}),i?this.axios.put(`${p}/carts/${this.cartId}`,{productId:a,qty:e,price:n,total:e*n,userId:this.userId,final_total:e*n*o}).then(()=>{this.status.loadingItem3="",_.threeLayerCheckType("success","已更新預約人數"),this.getCart()}).catch(()=>{this.status.loadingItem3="",_.threeLayerCheckType("error","已更新預約人數失敗")}):this.axios.post(`${p}/carts`,{productId:a,qty:e,price:n,total:e*n,userId:this.userId,final_total:e*n*o}).then(()=>{this.status.loadingItem3="",_.threeLayerCheckType("success",`已預約${this.packageTitle}成功`),this.getCart()}).catch(()=>{this.status.loadingItem3="",_.threeLayerCheckType("error","預約失敗，再重新登入預約")})}},incrementQuantity(a,e){this.status.loadingItem2=a,this.quantity<e?(this.status.loadingItem2="",this.quantity+=1):(this.status.loadingItem2="",_.threeLayerCheckType("warning",`預約人數上限為${e}人`))},decrementQuantity(a){this.status.loadingItem4=a,this.quantity>1&&(this.status.loadingItem4="",this.quantity-=1)},checkMaxValue(a){this.quantity>a&&(this.quantity=a)},handlePlus(a){this.quantity=a++},saveCardId(){this.token?this.$router.push("/cart"):_.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程")},getCart(){this.axios.get(`${p}/carts`).then(a=>{this.carts=a.data,this.carts.forEach(o=>{this.userId===o.userId&&this.newCarts.push(o)});const e=[],n=new Set;this.newCarts.forEach(o=>{n.has(o.productId)||(n.add(o.productId),e.push(o))}),this.newCarts=e,this.cartsLength=this.newCarts.length,this.$emitter.emit("updateCart",this.cartsLength)}).catch(()=>{_.threeLayerCheckType("error","取得購物車資料失敗")})},getCookie(a){const e=document.cookie.split(";");for(let n of e){const[o,i]=n.trim().split("=");if(o===a)return i}return null}},mounted(){this.isLoading=!0,this.getProducts(),this.getCart();const a=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=a*1,this.token=e,this.checkDate(),this.getHeartData(),window.scrollTo(0,0)}},E={class:"container py-10 py-lg-30"},S={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},V={class:"breadcrumb mb-0 fs-5"},N={class:"breadcrumb-item"},j={class:"breadcrumb-item"},A={class:"breadcrumb-item"},Q={class:"breadcrumb-item"},B={class:"col-12 col-md-7 col-lg-9 my-8 my-md-0"},H={class:"d-flex"},M=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),z={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},O=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),h("第一天 ")],-1),Y=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午1 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab2","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile2","aria-selected":"false"}," 下午2 ")])],-1),G={class:"tab-content card-att",id:"pills-tabContent"},J={class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},K={class:"row"},R={class:"w-100 w-lg-60 mb-4"},W={class:"card-att-img card-att-img-2"},X=["src","alt"],Z={class:"w-100 w-lg-40"},$={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},I={class:"text-dark mb-4"},tt={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},st={class:"row"},et={class:"w-100 w-lg-60 mb-4"},at={class:"card-att-img card-att-img-2"},it=["src","alt"],lt={class:"w-100 w-lg-40"},rt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},nt={class:"text-dark"},ot={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab2",tabindex:"0"},dt={class:"row"},ct={class:"w-100 w-lg-60 mb-4"},_t={class:"card-att-img card-att-img-2"},ht=["src","alt"],bt={class:"w-100 w-lg-40"},pt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},gt={class:"text-dark"},ft={key:0},yt={class:"d-flex my-12"},mt=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),ut={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},vt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),h("第二天 ")],-1),xt=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab2","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home2","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab3","data-bs-toggle":"pill","data-bs-target":"#pills-profile3",type:"button",role:"tab","aria-controls":"pills-profile3","aria-selected":"false"}," 下午1 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab4","data-bs-toggle":"pill","data-bs-target":"#pills-profile4",type:"button",role:"tab","aria-controls":"pills-profile4","aria-selected":"false"}," 下午2 ")])],-1),wt={class:"tab-content card-att",id:"pills-tabContent"},kt={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab2",tabindex:"0"},Ct={class:"row"},Tt={class:"w-100 w-lg-60 mb-4"},Dt={class:"card-att-img card-att-img-2"},Lt=["src","alt"],Pt={class:"w-100 w-lg-40"},qt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Ut={class:"text-dark mb-4"},Ft={class:"tab-pane fade",id:"pills-profile3",role:"tabpanel","aria-labelledby":"pills-profile-tab3",tabindex:"0"},Et={class:"row"},St={class:"w-100 w-lg-60 mb-4"},Vt={class:"card-att-img card-att-img-2"},Nt=["src","alt"],jt={class:"w-lg-40"},At={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Qt={class:"text-dark"},Bt={class:"tab-pane fade",id:"pills-profile4",role:"tabpanel","aria-labelledby":"pills-profile-tab4",tabindex:"0"},Ht={class:"row"},Mt={class:"w-100 w-lg-60 mb-4"},zt={class:"card-att-img card-att-img-2"},Ot=["src","alt"],Yt={class:"w-lg-40"},Gt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Jt={class:"text-dark"},Kt={key:1},Rt={class:"d-flex my-12"},Wt=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),Xt={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},Zt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),h("第三天 ")],-1),$t=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-75",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab3","data-bs-toggle":"pill","data-bs-target":"#pills-home3",type:"button",role:"tab","aria-controls":"pills-home3","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab5","data-bs-toggle":"pill","data-bs-target":"#pills-profile5",type:"button",role:"tab","aria-controls":"pills-profile5","aria-selected":"false"}," 下午1 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab6","data-bs-toggle":"pill","data-bs-target":"#pills-profile6",type:"button",role:"tab","aria-controls":"pills-profile6","aria-selected":"false"}," 下午2 ")])],-1),It={class:"tab-content card-att",id:"pills-tabContent"},ts={class:"tab-pane fade show active",id:"pills-home3",role:"tabpanel","aria-labelledby":"pills-home-tab3",tabindex:"0"},ss={class:"row"},es={class:"w-100 w-lg-60 mb-4"},as={class:"card-att-img card-att-img-2"},is=["src","alt"],ls={class:"w-100 w-lg-40"},rs={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},ns={class:"text-dark mb-4"},os={class:"tab-pane fade",id:"pills-profile5",role:"tabpanel","aria-labelledby":"pills-profile-tab5",tabindex:"0"},ds={class:"row"},cs={class:"w-100 w-lg-60 mb-4"},_s={class:"card-att-img card-att-img-2"},hs=["src","alt"],bs={class:"w-lg-40"},ps={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},gs={class:"text-dark"},fs={class:"tab-pane fade",id:"pills-profile6",role:"tabpanel","aria-labelledby":"pills-profile-tab6",tabindex:"0"},ys={class:"row"},ms={class:"w-100 w-lg-60 mb-4"},us={class:"card-att-img card-att-img-2"},vs=["src","alt"],xs={class:"w-lg-40"},ws={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},ks={class:"text-dark"},Cs={class:"col-12 col-md-5 col-lg-3"},Ts={class:"d-flex mb-4"},Ds={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},Ls={class:"fs-3 fs-sm-4 fs-xl-3 mb-6 text-primary-700 fw-bold"},Ps=t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-person-walking me-2"}),h("景點行程 ")],-1),qs={class:"mt-2 mb-6"},Us={class:"d-flex mb-4 flex-column mb-6"},Fs=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-calendar-plus me-2"}),h("預約期間 ")])],-1),Es={key:0,class:"mt-2"},Ss={key:1,class:"mt-2 text-danger"},Vs={class:"d-flex mb-6 flex-column"},Ns=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-car-front-fill me-2"}),h("出發時間 ")])],-1),js={class:"mt-2"},As={class:"d-flex mb-4 flex-column"},Qs=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-card-list me-2"}),h("旅遊方案概覽 ")])],-1),Bs=t("h6",{class:"mt-2"},"出遊年齡：6-80歲",-1),Hs={class:"mt-2"},Ms=t("h6",{class:"mt-2"},"集合時間： 早上8點",-1),zs=t("h6",{class:"mt-2"},"所需時間： 10-12 小時",-1),Os={class:"d-flex justify-content-between mb-4 align-items-end"},Ys={class:"fs-4 fs-lg-5 text-decoration-line-through text-end"},Gs={class:"d-flex flex-sm-column align-items-end justify-content-end"},Js=t("p",{class:"fs-6 text-danger fw-bold d-none d-sm-block"},"促銷價",-1),Ks={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},Rs={class:"d-flex mb-2"},Ws=["disabled","onClick"],Xs={key:0,class:"spinner-border spinner-grow-sm",role:"status"},Zs=t("i",{class:"bi bi-dash-lg"},null,-1),$s=["disabled"],Is=["onClick"],te={key:0,class:"spinner-border spinner-grow-sm",role:"status"},se=t("i",{class:"bi bi-plus-lg"},null,-1),ee=["onClick"],ae={class:"mb-2"},ie={class:"text-danger"},le={key:0,class:"mb-5"},re=t("span",{class:"text-danger"},"0",-1),ne={class:"text-danger"},oe=["onClick"],de={key:0,class:"spinner-border spinner-grow-sm",role:"status"},ce={key:2,class:"btn btn-danger w-100 fs-5 mb-4 disabled btn-danger-rounded",type:"button"};function _e(a,e,n,o,i,r){const D=T("VueLoading"),k=T("router-link");return c(),d(m,null,[v(D,{active:i.isLoading,class:"text-center","z-index":1060},null,8,["active"]),t("div",E,[t("nav",S,[t("ol",V,[t("li",N,[v(k,{to:"/",exact:"","active-class":"active-link"},{default:C(()=>[h(" 首頁 ")]),_:1})]),t("li",j,[v(k,{exact:"","active-class":"active-link",to:{path:"/TouristPackage",query:{category:"全部",page:"1"}}},{default:C(()=>[h(" 南部旅遊方案 ")]),_:1})]),t("li",A,[y(t("a",{onClick:e[0]||(e[0]=s=>r.redirectToA("台南")),class:"navbar-brand"},"台南",512),[[x,i.category==="台南"]]),y(t("a",{onClick:e[1]||(e[1]=s=>r.redirectToA("嘉義")),class:"navbar-brand"},"嘉義",512),[[x,i.category==="嘉義"]]),y(t("a",{onClick:e[2]||(e[2]=s=>r.redirectToA("高雄")),class:"navbar-brand"},"高雄",512),[[x,i.category==="高雄"]])]),t("li",Q,l(i.packageTitle),1)])]),(c(!0),d(m,null,w(i.enabledProducts,s=>(c(),d("div",{class:"row h-100 flex-wrap-reverse flex-md-nowrap",key:s.id},[t("div",B,[t("div",H,[M,t("div",z,[O,Y,t("div",G,[t("div",J,[t("div",K,[t("div",R,[t("div",W,[t("img",{src:s.imagesUrl[0],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[0].itinerary_first_day_am_title},null,8,X)])]),t("div",Z,[t("h4",$,l(s.itinerary_data[0].itinerary_first_day_am_title),1),t("p",I,l(s.itinerary_data[0].itinerary_first_day_am_content),1)])])]),t("div",tt,[t("div",st,[t("div",et,[t("div",at,[t("img",{src:s.imagesUrl[1],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[0].itinerary_first_day_pm_title},null,8,it)])]),t("div",lt,[t("h4",rt,l(s.itinerary_data[0].itinerary_first_day_pm_title),1),t("p",nt,l(s.itinerary_data[0].itinerary_first_day_pm_content),1)])])]),t("div",ot,[t("div",dt,[t("div",ct,[t("div",_t,[t("img",{src:s.imagesUrl[2],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[0].itinerary_first_day_pm_title2},null,8,ht)])]),t("div",bt,[t("h4",pt,l(s.itinerary_data[0].itinerary_first_day_pm_title2),1),t("p",gt,l(s.itinerary_data[0].itinerary_first_day_pm_content2),1)])])])])])]),s.itinerary_data.length>1?(c(),d("div",ft,[t("div",yt,[mt,t("div",ut,[vt,xt,t("div",wt,[t("div",kt,[t("div",Ct,[t("div",Tt,[t("div",Dt,[t("img",{src:s.imagesUrl[3],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[1].itinerary_second_day_am_title},null,8,Lt)])]),t("div",Pt,[t("h4",qt,l(s.itinerary_data[1].itinerary_second_day_am_title),1),t("p",Ut,l(s.itinerary_data[1].itinerary_second_day_am_content),1)])])]),t("div",Ft,[t("div",Et,[t("div",St,[t("div",Vt,[t("img",{src:s.imagesUrl[4],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[1].itinerary_second_day_pm_title},null,8,Nt)])]),t("div",jt,[t("h4",At,l(s.itinerary_data[1].itinerary_second_day_pm_title),1),t("p",Qt,l(s.itinerary_data[1].itinerary_second_day_pm_content),1)])])]),t("div",Bt,[t("div",Ht,[t("div",Mt,[t("div",zt,[t("img",{src:s.imagesUrl[5],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[1].itinerary_second_day_pm_title2},null,8,Ot)])]),t("div",Yt,[t("h4",Gt,l(s.itinerary_data[1].itinerary_second_day_pm_title2),1),t("p",Jt,l(s.itinerary_data[1].itinerary_second_day_pm_content2),1)])])])])])])])):g("",!0),s.itinerary_data.length>2?(c(),d("div",Kt,[t("div",Rt,[Wt,t("div",Xt,[Zt,$t,t("div",It,[t("div",ts,[t("div",ss,[t("div",es,[t("div",as,[t("img",{src:s.imagesUrl[6],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[2].itinerary_third_day_am_title},null,8,is)])]),t("div",ls,[t("h4",rs,l(s.itinerary_data[2].itinerary_third_day_am_title),1),t("p",ns,l(s.itinerary_data[2].itinerary_third_day_am_content),1)])])]),t("div",os,[t("div",ds,[t("div",cs,[t("div",_s,[t("img",{src:s.imagesUrl[7],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[2].itinerary_third_day_pm_title},null,8,hs)])]),t("div",bs,[t("h4",ps,l(s.itinerary_data[2].itinerary_third_day_pm_title),1),t("p",gs,l(s.itinerary_data[2].itinerary_third_day_pm_content),1)])])]),t("div",fs,[t("div",ys,[t("div",ms,[t("div",us,[t("img",{src:s.imagesUrl[8],class:"img-fluid pb-4 pb-lg-0",alt:s.itinerary_data[2].itinerary_third_day_pm_title2},null,8,vs)])]),t("div",xs,[t("h4",ws,l(s.itinerary_data[2].itinerary_third_day_pm_title2),1),t("p",ks,l(s.itinerary_data[2].itinerary_third_day_pm_content2),1)])])])])])])])):g("",!0)]),t("div",Cs,[t("div",Ts,[t("span",Ds,l(i.category),1)]),t("h2",Ls,l(i.packageTitle),1),Ps,t("div",qs,[(c(!0),d(m,null,w(i.newProductsContent,(b,L)=>(c(),d("div",{key:L+123},[(c(!0),d(m,null,w(b.content,(P,f)=>(c(),d("p",{key:f,class:u({"mb-3":f===2,"ps-10":f!==0&&f!==3})},l(P),3))),128))]))),128))]),t("div",Us,[Fs,i.currentDate<=s.endDate?(c(),d("h6",Es,l(s.startDate)+" 至 "+l(s.endDate),1)):(c(),d("h5",Ss,"預約時間已截止"))]),t("div",Vs,[Ns,t("h6",js,l(s.goStartDate)+" 至 "+l(s.goEndDate),1)]),t("div",As,[Qs,Bs,t("h6",Hs,"集合地點為 "+l(s.category)+" 火車站",1),Ms,zs]),t("div",Os,[t("p",Ys," NT"+l(r.thousand(s.origin_price)),1),t("div",Gs,[Js,t("p",Ks," NT"+l(r.thousand(s.price)),1)])]),t("div",Rs,[t("button",{class:"btn btn-outline-dark rounded-0",type:"button",disabled:i.quantity===1,onClick:b=>r.decrementQuantity(s.id)},[i.status.loadingItem4===s.id?(c(),d("span",Xs)):g("",!0),Zs],8,Ws),y(t("input",{min:"1",max:"10",type:"number",disabled:i.quantity>s.max_travelers,class:"form-control text-center rounded-0 border border-dark","onUpdate:modelValue":e[3]||(e[3]=b=>i.quantity=b),readonly:""},null,8,$s),[[U,i.quantity]]),t("button",{class:"btn btn-outline-dark rounded-0",type:"button",onClick:b=>r.incrementQuantity(s.id,s.max_travelers)},[i.status.loadingItem2===s.id?(c(),d("span",te)):g("",!0),se],8,Is),t("button",{type:"button",class:"btn-outline-cerulean rounded-0 ms-2 p-2",onClick:b=>r.toggleFavorite(s.id,i.category,i.packageTitle)},[t("i",{class:u(["bi",{"bi-heart-fill":i.isFavorite[s.id],"bi-heart":!i.isFavorite[s.id]}])},null,2)],8,ee)]),t("h6",ae,[h(" 注意： "),t("span",ie," 至少3位成團，最多"+l(s.max_travelers)+"位出遊 ",1)]),i.currentDate<=s.endDate?(c(),d("h6",le,[h(" 目前已有 "),re,h(" 位預約，剩 "),t("span",ne,l(s.max_travelers),1),h(" 位可預約 ")])):g("",!0),i.currentDate<=i.endDate?(c(),d("button",{key:1,class:u(["btn-square w-100 fs-5 mb-4",{"disabled-btn":i.currentDate>i.endDate}]),type:"button",onClick:b=>r.addToCart(s.id,i.quantity,s.price)},[i.status.loadingItem3===s.id?(c(),d("span",de)):g("",!0),h(" 預約旅遊方案 ")],10,oe)):(c(),d("button",ce," 預約時間截止 ")),t("button",{class:u(["btn-square fs-5 w-100",{"disabled-btn":i.currentDate>i.endDate||i.newCarts.length===0}]),type:"button",onClick:e[4]||(e[4]=(...b)=>r.saveCardId&&r.saveCardId(...b))}," 直接結帳 ",2)])]))),128))])],64)}const pe=q(F,[["render",_e]]);export{pe as default};
