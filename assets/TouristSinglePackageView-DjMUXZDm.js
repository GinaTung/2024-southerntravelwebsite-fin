import{s as h}from"./sweetAlert-UthXI6JZ.js";import{_ as P,c as d,b as m,a as t,w as C,f,v as y,t as l,F as u,h as v,r as T,o as c,d as _,j as p,i as q,n as x}from"./index-mrMvHell.js";const g="https://two024-south-json-server-vercel.onrender.com",F={data(){return{category:"",packageTitle:"",products:[],newProductsContent:"",enabledProducts:[],carts:[],quantity:1,newQty:0,newCarts:[],cartId:null,bsOffcanvas:null,userId:"",token:"",currentDate:"",endDate:"",isDisabled:!1,cartsLength:0,isLoading:!1,status:{loadingItem:!1,loadingItem2:"",loadingItem3:"",loadingItem4:"",loadingItem5:""},heartData:[],isFavorite:{}}},created(){this.category=this.$route.params.category,this.packageTitle=this.$route.params.title},methods:{redirectToA(a){this.$router.push({path:"/TouristPackage",query:{category:a}})},checkDate(){var a=new Date,e={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate()},o=(e.month<10?"0":"")+e.month,r=(e.date<10?"0":"")+e.date,i=e.year+"-"+o+"-"+r;this.currentDate=i},getHeartData(){this.axios.get(`${g}/hearts`).then(a=>{a.data.forEach(e=>{e.userId===this.userId&&e.tag==="旅遊景點"&&(this.isFavorite[e.product]=!0)})}).catch(a=>{h.threeLayerCheckType("error","取得愛心收藏資料失敗")})},toggleFavorite(a,e,o){this.token?this.axios.get(`${g}/hearts`).then(r=>{const i=r.data.find(n=>n.product===a&&n.userId===this.userId&&n.tag==="旅遊景點");i?this.axios.delete(`${g}/hearts/${i.id}`).then(n=>{this.isFavorite[a]=!1,h.threeLayerCheckType("success",`取消收藏 ${o} 成功`),this.getHeartData()}).catch(n=>{h.threeLayerCheckType("error","取消收藏資料失敗")}):this.axios.post(`${g}/hearts`,{product:a,category:e,title:o,userId:this.userId,tag:"旅遊景點"}).then(n=>{this.isFavorite[a]=!0,h.threeLayerCheckType("success",`已加入收藏 ${o} 成功`),this.getHeartData()}).catch(n=>{h.threeLayerCheckType("error","收藏資料失敗")})}).catch(r=>{h.threeLayerCheckType("error","取得愛心收藏資料失敗")}):h.threeLayerCheckType("warning","請登入會員後，才能加入收藏")},getProducts(){this.axios.get(`${g}/products`).then(a=>{this.products=a.data,this.products.forEach(e=>{e.is_enabled===1&&e.title===this.packageTitle&&(this.enabledProducts.push(e),this.isLoading=!1)}),this.endDate=this.enabledProducts[0].endDate,this.getNewText()}).catch(()=>{this.isLoading=!1,h.threeLayerCheckType("error","取得產品資料失敗")})},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},getNewText(){const a={};this.enabledProducts.forEach(e=>{e.content&&e.content.split(";").forEach(r=>{const i=r.trim();i!==""&&(a[e.id]||(a[e.id]=[]),a[e.id].push(i))})});for(const e in a)a[e].length===0&&delete a[e];this.newProductsContent=Object.entries(a).map(([e,o])=>({id:e,content:o}))},addToCart(a,e=1,o,r=1){if(this.status.loadingItem3=a,!this.token)h.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程");else{let i=!1;this.newCarts.forEach(n=>{n.productId===a&&n.id&&(i=!0,this.cartId=n.id)}),i?this.axios.put(`${g}/carts/${this.cartId}`,{productId:a,qty:e,price:o,total:e*o,userId:this.userId,final_total:e*o*r}).then(()=>{this.status.loadingItem3="",h.threeLayerCheckType("success","已更新預約人數"),this.getCart()}).catch(()=>{this.status.loadingItem3="",h.threeLayerCheckType("error","已更新預約人數失敗")}):this.axios.post(`${g}/carts`,{productId:a,qty:e,price:o,total:e*o,userId:this.userId,final_total:e*o*r}).then(()=>{this.status.loadingItem3="",h.threeLayerCheckType("success",`已預約${this.packageTitle}成功`),this.getCart()}).catch(()=>{this.status.loadingItem3="",h.threeLayerCheckType("error","預約失敗，再重新登入預約")})}},incrementQuantity(a,e){this.status.loadingItem2=a,this.quantity<e?(this.status.loadingItem2="",this.quantity+=1):(this.status.loadingItem2="",h.threeLayerCheckType("warning",`預約人數上限為${e}人`))},decrementQuantity(a){this.status.loadingItem4=a,this.quantity>1&&(this.status.loadingItem4="",this.quantity-=1)},checkMaxValue(a){this.quantity>a&&(this.quantity=a)},handlePlus(a){this.quantity=a++},saveCardId(){this.token?this.$router.push("/cart"):h.threeLayerCheckType("warning","請登入會員後，才能預約套裝行程")},getCart(){this.axios.get(`${g}/carts`).then(a=>{this.carts=a.data,this.carts.forEach(r=>{this.userId===r.userId&&this.newCarts.push(r)});const e=[],o=new Set;this.newCarts.forEach(r=>{o.has(r.productId)||(o.add(r.productId),e.push(r))}),this.newCarts=e,this.cartsLength=this.newCarts.length,this.$emitter.emit("updateCart",this.cartsLength)}).catch(()=>{h.threeLayerCheckType("error","取得購物車資料失敗")})},getCookie(a){const e=document.cookie.split(";");for(let o of e){const[r,i]=o.trim().split("=");if(r===a)return i}return null}},mounted(){this.isLoading=!0,this.getProducts(),this.getCart();const a=this.getCookie("userId"),e=this.getCookie("hexTokenU");this.userId=a*1,this.token=e,this.checkDate(),this.getHeartData(),window.scrollTo(0,0)}},E={class:"container py-10 py-lg-30"},U={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},S={class:"breadcrumb mb-0 fs-5"},V={class:"breadcrumb-item"},N={class:"breadcrumb-item"},j={class:"breadcrumb-item"},A={class:"breadcrumb-item"},Q={class:"col-12 col-md-7 col-lg-9 my-8 my-md-0"},B={class:"d-flex"},H=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),M={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},z=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),_("第一天 ")],-1),O=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),Y={class:"tab-content card-att",id:"pills-tabContent"},G={class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},J={class:"row"},K={class:"w-100 w-lg-60 mb-4"},R={class:"card-att-img card-att-img-2"},W=["src","alt"],X={class:"w-100 w-lg-40"},Z={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},$={class:"text-dark mb-4"},I={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},tt={class:"row"},et={class:"w-100 w-lg-60 mb-4"},st={class:"card-att-img card-att-img-2"},at=["src","alt"],it={class:"w-100 w-lg-40"},lt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},nt={class:"text-dark"},ot={key:0},rt={class:"d-flex my-12"},dt=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),ct={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},ht=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),_("第二天 ")],-1),_t=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),bt={class:"tab-content card-att",id:"pills-tabContent"},gt={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},pt={class:"row"},ft={class:"w-100 w-lg-60 mb-4"},ut={class:"card-att-img card-att-img-2"},mt=["src","alt"],yt={class:"w-100 w-lg-40"},vt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},xt={class:"text-dark mb-4"},wt={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},kt={class:"row"},Ct={class:"w-100 w-lg-60 mb-4"},Tt={class:"card-att-img card-att-img-2"},Dt=["src","alt"],Lt={class:"w-lg-40"},Pt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},qt={class:"text-dark"},Ft={key:1},Et={class:"d-flex my-12"},Ut=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),St={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},Vt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),_("第三天 ")],-1),Nt=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),jt={class:"tab-content card-att",id:"pills-tabContent"},At={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},Qt={class:"row"},Bt={class:"w-100 w-lg-60 mb-4"},Ht={class:"card-att-img card-att-img-2"},Mt=["src","alt"],zt={class:"w-100 w-lg-40"},Ot={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Yt={class:"text-dark mb-4"},Gt={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},Jt={class:"row"},Kt={class:"w-100 w-lg-60 mb-4"},Rt={class:"card-att-img card-att-img-2"},Wt=["src","alt"],Xt={class:"w-lg-40"},Zt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},$t={class:"text-dark"},It={class:"col-12 col-md-5 col-lg-3"},te={class:"d-flex mb-4"},ee={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},se={class:"fs-3 fs-sm-4 fs-xl-3 mb-6 text-primary-700 fw-bold"},ae=t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-person-walking me-2"}),_("景點行程 ")],-1),ie={class:"mt-2 mb-6"},le={class:"d-flex mb-4 flex-column mb-6"},ne=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-calendar-plus me-2"}),_("預約期間 ")])],-1),oe={key:0,class:"mt-2"},re={key:1,class:"mt-2 text-danger"},de={class:"d-flex mb-4 flex-column"},ce=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-car-front-fill me-2"}),_("出發時間 ")])],-1),he={class:"mt-2"},_e={class:"d-flex justify-content-between mb-4 align-items-end"},be={class:"fs-4 fs-lg-5 text-decoration-line-through text-end"},ge={class:"d-flex flex-sm-column align-items-end justify-content-end"},pe=t("p",{class:"fs-6 text-danger fw-bold d-none d-sm-block"},"促銷價",-1),fe={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},ue={class:"d-flex mb-2"},me=["disabled","onClick"],ye={key:0,class:"spinner-border spinner-grow-sm",role:"status"},ve=t("i",{class:"bi bi-dash-lg"},null,-1),xe=["disabled"],we=["onClick"],ke={key:0,class:"spinner-border spinner-grow-sm",role:"status"},Ce=t("i",{class:"bi bi-plus-lg"},null,-1),Te=["onClick"],De={class:"mb-2"},Le={class:"text-danger"},Pe={key:0,class:"mb-5"},qe=t("span",{class:"text-danger"},"0",-1),Fe={class:"text-danger"},Ee=["onClick"],Ue={key:0,class:"spinner-border spinner-grow-sm",role:"status"},Se={key:2,class:"btn btn-danger w-100 fs-5 mb-4 disabled btn-danger-rounded",type:"button"};function Ve(a,e,o,r,i,n){const D=T("VueLoading"),w=T("router-link");return c(),d(u,null,[m(D,{active:i.isLoading,class:"text-center","z-index":1060},null,8,["active"]),t("div",E,[t("nav",U,[t("ol",S,[t("li",V,[m(w,{to:"/",exact:"","active-class":"active-link"},{default:C(()=>[_(" 首頁 ")]),_:1})]),t("li",N,[m(w,{exact:"","active-class":"active-link",to:{path:"/TouristPackage",query:{category:"全部",page:"1"}}},{default:C(()=>[_(" 南部旅遊方案 ")]),_:1})]),t("li",j,[f(t("a",{onClick:e[0]||(e[0]=s=>n.redirectToA("台南")),class:"navbar-brand"},"台南",512),[[y,i.category==="台南"]]),f(t("a",{onClick:e[1]||(e[1]=s=>n.redirectToA("嘉義")),class:"navbar-brand"},"嘉義",512),[[y,i.category==="嘉義"]]),f(t("a",{onClick:e[2]||(e[2]=s=>n.redirectToA("高雄")),class:"navbar-brand"},"高雄",512),[[y,i.category==="高雄"]])]),t("li",A,l(i.packageTitle),1)])]),(c(!0),d(u,null,v(i.enabledProducts,s=>(c(),d("div",{class:"row h-100 flex-wrap-reverse flex-md-nowrap",key:s.id},[t("div",Q,[t("div",B,[H,t("div",M,[z,O,t("div",Y,[t("div",G,[t("div",J,[t("div",K,[t("div",R,[t("img",{src:s.imagesUrl[0],class:"img-fluid pb-4 pb-lg-0",alt:s.title},null,8,W)])]),t("div",X,[t("h4",Z,l(s.itinerary_data[0].itinerary_first_day_am_title),1),t("p",$,l(s.itinerary_data[0].itinerary_first_day_am_content),1)])])]),t("div",I,[t("div",tt,[t("div",et,[t("div",st,[t("img",{src:s.imagesUrl[1],class:"img-fluid pb-4 pb-lg-0",alt:s.title},null,8,at)])]),t("div",it,[t("h4",lt,l(s.itinerary_data[0].itinerary_first_day_pm_title),1),t("p",nt,l(s.itinerary_data[0].itinerary_first_day_pm_content),1)])])])])])]),s.itinerary_data.length>1?(c(),d("div",ot,[t("div",rt,[dt,t("div",ct,[ht,_t,t("div",bt,[t("div",gt,[t("div",pt,[t("div",ft,[t("div",ut,[t("img",{src:s.imagesUrl[2],class:"img-fluid pb-4 pb-lg-0",alt:s.title},null,8,mt)])]),t("div",yt,[t("h4",vt,l(s.itinerary_data[1].itinerary_second_day_am_title),1),t("p",xt,l(s.itinerary_data[1].itinerary_second_day_am_content),1)])])]),t("div",wt,[t("div",kt,[t("div",Ct,[t("div",Tt,[t("img",{src:s.imagesUrl[3],class:"img-fluid pb-4 pb-lg-0",alt:s.title},null,8,Dt)])]),t("div",Lt,[t("h4",Pt,l(s.itinerary_data[1].itinerary_second_day_pm_title),1),t("p",qt,l(s.itinerary_data[1].itinerary_second_day_pm_content),1)])])])])])])])):p("",!0),s.itinerary_data.length>2?(c(),d("div",Ft,[t("div",Et,[Ut,t("div",St,[Vt,Nt,t("div",jt,[t("div",At,[t("div",Qt,[t("div",Bt,[t("div",Ht,[t("img",{src:s.imagesUrl[4],class:"img-fluid pb-4 pb-lg-0",alt:s.title},null,8,Mt)])]),t("div",zt,[t("h4",Ot,l(s.itinerary_data[2].itinerary_third_day_am_title),1),t("p",Yt,l(s.itinerary_data[2].itinerary_third_day_am_content),1)])])]),t("div",Gt,[t("div",Jt,[t("div",Kt,[t("div",Rt,[t("img",{src:s.imagesUrl[5],class:"img-fluid pb-4 pb-lg-0",alt:s.title},null,8,Wt)])]),t("div",Xt,[t("h4",Zt,l(s.itinerary_data[2].itinerary_third_day_pm_title),1),t("p",$t,l(s.itinerary_data[2].itinerary_third_day_pm_content),1)])])])])])])])):p("",!0)]),t("div",It,[t("div",te,[t("span",ee,l(i.category),1)]),t("h2",se,l(i.packageTitle),1),ae,t("div",ie,[(c(!0),d(u,null,v(i.newProductsContent,(b,L)=>(c(),d("div",{key:L+123},[(c(!0),d(u,null,v(b.content,k=>(c(),d("p",{key:k},l(k),1))),128))]))),128))]),t("div",le,[ne,i.currentDate<=s.endDate?(c(),d("h6",oe,l(s.startDate)+" 至 "+l(s.endDate),1)):(c(),d("h5",re,"預約時間已截止"))]),t("div",de,[ce,t("h6",he,l(s.goStartDate)+" 至 "+l(s.goEndDate),1)]),t("div",_e,[t("p",be," NT"+l(n.thousand(s.origin_price)),1),t("div",ge,[pe,t("p",fe," NT"+l(n.thousand(s.price)),1)])]),t("div",ue,[t("button",{class:"btn btn-outline-dark rounded-0",type:"button",disabled:i.quantity===1,onClick:b=>n.decrementQuantity(s.id)},[i.status.loadingItem4===s.id?(c(),d("span",ye)):p("",!0),ve],8,me),f(t("input",{min:"1",max:"10",type:"number",disabled:i.quantity>s.max_travelers,class:"form-control text-center rounded-0 border border-dark","onUpdate:modelValue":e[3]||(e[3]=b=>i.quantity=b),readonly:""},null,8,xe),[[q,i.quantity]]),t("button",{class:"btn btn-outline-dark rounded-0",type:"button",onClick:b=>n.incrementQuantity(s.id,s.max_travelers)},[i.status.loadingItem2===s.id?(c(),d("span",ke)):p("",!0),Ce],8,we),t("button",{type:"button",class:"btn-outline-cerulean rounded-0 ms-2 p-2",onClick:b=>n.toggleFavorite(s.id,i.category,i.packageTitle)},[t("i",{class:x(["bi",{"bi-heart-fill":i.isFavorite[s.id],"bi-heart":!i.isFavorite[s.id]}])},null,2)],8,Te)]),t("h6",De,[_(" 注意： "),t("span",Le," 至少3位成團，最多"+l(s.max_travelers)+"位出遊 ",1)]),i.currentDate<=s.endDate?(c(),d("h6",Pe,[_(" 目前已有 "),qe,_(" 位預約，剩 "),t("span",Fe,l(s.max_travelers),1),_(" 位可預約 ")])):p("",!0),i.currentDate<=i.endDate?(c(),d("button",{key:1,class:x(["btn-square w-100 fs-5 mb-4",{"disabled-btn":i.currentDate>i.endDate}]),type:"button",onClick:b=>n.addToCart(s.id,i.quantity,s.price)},[i.status.loadingItem3===s.id?(c(),d("span",Ue)):p("",!0),_(" 預約套裝行程 ")],10,Ee)):(c(),d("button",Se," 預約時間截止 ")),t("button",{class:x(["btn-square fs-5 w-100",{"disabled-btn":i.currentDate>i.endDate||i.newCarts.length===0}]),type:"button",onClick:e[4]||(e[4]=(...b)=>n.saveCardId&&n.saveCardId(...b))}," 直接結帳 ",2)])]))),128))])],64)}const Ae=P(F,[["render",Ve]]);export{Ae as default};