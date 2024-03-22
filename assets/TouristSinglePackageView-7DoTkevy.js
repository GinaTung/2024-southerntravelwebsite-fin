import{_ as C,c,a as t,b as x,w as f,g as p,j as m,t as l,F as u,h as v,r as D,o as n,d as r,f as T,i as P,n as w}from"./index-CnCUfF1T.js";const g="https://two024-south-json-server-vercel.onrender.com",q={data(){return{category:"",packageTitle:"",products:[],newProductsContent:"",enabledProducts:[],carts:[],quantity:1,newQty:0,newCarts:[],cartId:null,bsOffcanvas:null,userId:"",token:"",currentDate:"",endDate:"",isDisabled:!1}},created(){this.category=this.$route.params.category,this.packageTitle=this.$route.params.title},methods:{checkDate(){var a=new Date,s={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate()},d=(s.month<10?"0":"")+s.month,b=(s.date<10?"0":"")+s.date,i=s.year+"-"+d+"-"+b;this.currentDate=i},getProducts(){this.axios.get(`${g}/products`).then(a=>{this.products=a.data,this.products.forEach(s=>{s.is_enabled===1&&s.title===this.packageTitle&&this.enabledProducts.push(s)}),this.endDate=this.enabledProducts[0].endDate,this.getNewText()}).catch(a=>{alert(`${a.message}`)})},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},getNewText(){const a={};this.enabledProducts.forEach(s=>{s.content&&s.content.split(";").forEach(b=>{const i=b.trim();i!==""&&(a[s.id]||(a[s.id]=[]),a[s.id].push(i))})});for(const s in a)a[s].length===0&&delete a[s];this.newProductsContent=Object.entries(a).map(([s,d])=>({id:s,content:d}))},addToCart(a,s=1,d,b=1){if(!this.token)alert("請登入會員後，才能預約套裝行程");else{let i=!1;this.newCarts.forEach(o=>{o.productId===a&&o.id&&(i=!0,this.cartId=o.id)}),i?this.axios.put(`${g}/carts/${this.cartId}`,{productId:a,qty:s,price:d,total:s*d,userId:this.userId,final_total:s*d*b}).then(o=>{this.$router.go(0),alert("已更新預約人數"),this.getCart()}).catch(o=>{alert("更新預約人數失敗")}):this.axios.post(`${g}/carts`,{productId:a,qty:s,price:d,total:s*d,userId:this.userId,final_total:s*d*b}).then(o=>{this.$router.go(0),alert(`已預約${this.packageTitle}成功`),this.getCart()}).catch(o=>{alert("預約失敗，再重新登入預約")})}},incrementQuantity(){this.quantity<10&&(this.quantity+=1)},decrementQuantity(){this.quantity>1&&(this.quantity-=1)},checkMaxValue(){this.quantity>10&&(this.quantity=10)},handlePlus(a){this.quantity=a++},saveCardId(){this.token?this.$router.push("/cart"):alert("請登入會員後，才能預約套裝行程")},getCart(){this.axios.get(`${g}/carts`).then(a=>{this.carts=a.data,this.carts.forEach(s=>{this.userId===s.userId&&this.newCarts.push(s)})}).catch(a=>{alert("取得購物車資料失敗")})},getCookie(a){const s=document.cookie.split(";");for(let d of s){const[b,i]=d.trim().split("=");if(b===a)return i}return null}},mounted(){this.getProducts(),this.getCart();const a=this.getCookie("userId"),s=this.getCookie("hexTokenU");this.userId=a*1,this.token=s,this.checkDate(),window.scrollTo(0,0)}},U={class:"container py-10 py-lg-30"},E={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},N={class:"breadcrumb mb-0 fs-5"},Q={class:"breadcrumb-item"},V={class:"breadcrumb-item"},S={class:"breadcrumb-item"},j={class:"breadcrumb-item"},B={class:"col-12 col-md-7 col-lg-9 my-8 my-md-0"},M={class:"d-flex"},F=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),O={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},z=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),r("第一天 ")],-1),K=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),L={class:"tab-content card-att",id:"pills-tabContent"},Y={class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},A={class:"row"},G={class:"w-100 w-lg-60 mb-4"},H={class:"card-att-img card-att-img-2"},J=["src","alt"],R={class:"w-100 w-lg-40"},W={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},X={class:"text-dark mb-4"},Z={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},$={class:"row"},I={class:"w-100 w-lg-60 mb-4"},tt={class:"card-att-img card-att-img-2"},st=["src","alt"],et={class:"w-100 w-lg-40"},at={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},it={class:"text-dark"},lt={key:0},ot={class:"d-flex my-12"},nt=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),rt={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},dt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),r("第二天 ")],-1),ct=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),_t={class:"tab-content card-att",id:"pills-tabContent"},bt={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},ht={class:"row"},ft={class:"w-100 w-lg-60 mb-4"},mt={class:"card-att-img card-att-img-2"},gt=["src","alt"],pt={class:"w-100 w-lg-40"},ut={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},vt={class:"text-dark mb-4"},yt={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},xt={class:"row"},wt={class:"w-100 w-lg-60 mb-4"},kt={class:"card-att-img card-att-img-2"},Ct=["src","alt"],Dt={class:"w-lg-40"},Tt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Pt={class:"text-dark"},qt={key:1},Ut={class:"d-flex my-12"},Et=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),Nt={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},Qt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),r("第三天 ")],-1),Vt=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),St={class:"tab-content card-att",id:"pills-tabContent"},jt={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},Bt={class:"row"},Mt={class:"w-100 w-lg-60 mb-4"},Ft={class:"card-att-img card-att-img-2"},Ot=["src","alt"],zt={class:"w-100 w-lg-40"},Kt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Lt={class:"text-dark mb-4"},Yt={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},At={class:"row"},Gt={class:"w-100 w-lg-60 mb-4"},Ht={class:"card-att-img card-att-img-2"},Jt=["src","alt"],Rt={class:"w-lg-40"},Wt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Xt={class:"text-dark"},Zt={class:"col-12 col-md-5 col-lg-3"},$t={class:"d-flex mb-4"},It={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},ts={class:"fs-3 fs-sm-4 fs-xl-3 mb-6 text-primary-700 fw-bold"},ss=t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-person-walking me-2"}),r("景點行程 ")],-1),es={class:"mt-2 mb-6"},as={class:"d-flex mb-4 flex-column mb-6"},is=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-calendar-plus me-2"}),r("預約期間 ")])],-1),ls={key:0,class:"mt-2"},os={key:1,class:"mt-2 text-danger"},ns={class:"d-flex mb-4 flex-column"},rs=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-car-front-fill me-2"}),r("出發時間 ")])],-1),ds={class:"mt-2"},cs={class:"d-flex justify-content-between mb-4 align-items-end"},_s={class:"fs-4 fs-lg-5 text-decoration-line-through text-end"},bs={class:"d-flex flex-sm-column align-items-end justify-content-end"},hs=t("p",{class:"fs-6 text-danger fw-bold d-none d-sm-block"},"促銷價",-1),fs={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},ms={class:"d-flex mb-2"},gs=["disabled"],ps=t("i",{class:"bi bi-dash-lg"},null,-1),us=[ps],vs=["disabled"],ys=t("i",{class:"bi bi-plus-lg"},null,-1),xs=[ys],ws=t("button",{type:"button",class:"btn btn-outline-dark rounded-0 ms-2"},[t("i",{class:"bi bi-heart"})],-1),ks={class:"mb-2"},Cs={class:"text-danger"},Ds={key:0,class:"mb-5"},Ts=t("span",{class:"text-danger"},"0",-1),Ps={class:"text-danger"},qs=["onClick"];function Us(a,s,d,b,i,o){const h=D("router-link");return n(),c("div",U,[t("nav",E,[t("ol",N,[t("li",Q,[x(h,{to:"/",exact:"","active-class":"active-link"},{default:f(()=>[r(" 首頁 ")]),_:1})]),t("li",V,[x(h,{to:"/TouristPackage",exact:"","active-class":"active-link"},{default:f(()=>[r(" 南部旅遊方案 ")]),_:1})]),t("li",S,[i.category==="台南"?(n(),p(h,{key:0,to:"/TouristPackage/searchTainan",exact:"","active-class":"active-link"},{default:f(()=>[r("台南")]),_:1})):i.category==="嘉義"?(n(),p(h,{key:1,to:"/TouristPackage/searchChiayi",exact:"","active-class":"active-link"},{default:f(()=>[r("嘉義")]),_:1})):i.category==="高雄"?(n(),p(h,{key:2,to:"/TouristPackage/searchKaohsiung",exact:"","active-class":"active-link"},{default:f(()=>[r("高雄")]),_:1})):m("",!0)]),t("li",j,l(i.packageTitle),1)])]),(n(!0),c(u,null,v(i.enabledProducts,e=>(n(),c("div",{class:"row h-100 flex-wrap-reverse flex-md-nowrap",key:e.id},[t("div",B,[t("div",M,[F,t("div",O,[z,K,t("div",L,[t("div",Y,[t("div",A,[t("div",G,[t("div",H,[t("img",{src:e.imagesUrl[0],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,J)])]),t("div",R,[t("h4",W,l(e.itinerary_data[0].itinerary_first_day_am_title),1),t("p",X,l(e.itinerary_data[0].itinerary_first_day_am_content),1)])])]),t("div",Z,[t("div",$,[t("div",I,[t("div",tt,[t("img",{src:e.imagesUrl[1],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,st)])]),t("div",et,[t("h4",at,l(e.itinerary_data[0].itinerary_first_day_pm_title),1),t("p",it,l(e.itinerary_data[0].itinerary_first_day_pm_content),1)])])])])])]),e.itinerary_data.length>1?(n(),c("div",lt,[t("div",ot,[nt,t("div",rt,[dt,ct,t("div",_t,[t("div",bt,[t("div",ht,[t("div",ft,[t("div",mt,[t("img",{src:e.imagesUrl[2],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,gt)])]),t("div",pt,[t("h4",ut,l(e.itinerary_data[1].itinerary_second_day_am_title),1),t("p",vt,l(e.itinerary_data[1].itinerary_second_day_am_content),1)])])]),t("div",yt,[t("div",xt,[t("div",wt,[t("div",kt,[t("img",{src:e.imagesUrl[3],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,Ct)])]),t("div",Dt,[t("h4",Tt,l(e.itinerary_data[1].itinerary_second_day_pm_title),1),t("p",Pt,l(e.itinerary_data[1].itinerary_second_day_pm_content),1)])])])])])])])):m("",!0),e.itinerary_data.length>2?(n(),c("div",qt,[t("div",Ut,[Et,t("div",Nt,[Qt,Vt,t("div",St,[t("div",jt,[t("div",Bt,[t("div",Mt,[t("div",Ft,[t("img",{src:e.imagesUrl[4],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,Ot)])]),t("div",zt,[t("h4",Kt,l(e.itinerary_data[2].itinerary_third_day_am_title),1),t("p",Lt,l(e.itinerary_data[2].itinerary_third_day_am_content),1)])])]),t("div",Yt,[t("div",At,[t("div",Gt,[t("div",Ht,[t("img",{src:e.imagesUrl[5],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,Jt)])]),t("div",Rt,[t("h4",Wt,l(e.itinerary_data[2].itinerary_third_day_pm_title),1),t("p",Xt,l(e.itinerary_data[2].itinerary_third_day_pm_content),1)])])])])])])])):m("",!0)]),t("div",Zt,[t("div",$t,[t("span",It,l(i.category),1)]),t("h2",ts,l(i.packageTitle),1),ss,t("div",es,[(n(!0),c(u,null,v(i.newProductsContent,(_,k)=>(n(),c("div",{key:k+123},[(n(!0),c(u,null,v(_.content,y=>(n(),c("p",{key:y},l(y),1))),128))]))),128))]),t("div",as,[is,i.currentDate<=e.endDate?(n(),c("h6",ls,l(e.startDate)+" 至 "+l(e.endDate),1)):(n(),c("h5",os,"預約時間已截止"))]),t("div",ns,[rs,t("h6",ds,l(e.goStartDate)+" 至 "+l(e.goEndDate),1)]),t("div",cs,[t("p",_s," NT"+l(o.thousand(e.origin_price)),1),t("div",bs,[hs,t("p",fs," NT"+l(o.thousand(e.price)),1)])]),t("div",ms,[t("button",{class:"btn btn-outline-dark rounded-0",type:"button",disabled:i.quantity===1,onClick:s[0]||(s[0]=(..._)=>o.decrementQuantity&&o.decrementQuantity(..._))},us,8,gs),T(t("input",{min:"1",max:"10",type:"number",disabled:i.quantity>10,class:"form-control text-center rounded-0 border border-dark","onUpdate:modelValue":s[1]||(s[1]=_=>i.quantity=_),readonly:""},null,8,vs),[[P,i.quantity]]),t("button",{class:"btn btn-outline-dark rounded-0",type:"button",onClick:s[2]||(s[2]=(..._)=>o.incrementQuantity&&o.incrementQuantity(..._))},xs),ws]),t("h6",ks,[r(" 注意： "),t("span",Cs," 至少3位成團，最多"+l(e.max_travelers)+"位出遊 ",1)]),i.currentDate<=e.endDate?(n(),c("h6",Ds,[r(" 目前已有 "),Ts,r(" 位預約，剩 "),t("span",Ps,l(e.max_travelers),1),r(" 位可預約 ")])):m("",!0),t("button",{class:w(["btn-square w-100 fs-5 mb-4 border-0",{"disabled-btn":i.currentDate>i.endDate}]),type:"button",onClick:_=>o.addToCart(e.id,i.quantity,e.price)}," 預約套裝行程 ",10,qs),t("button",{class:w(["btn-square fs-5 w-100 border-0",{"disabled-btn":i.currentDate>i.endDate||i.newCarts.length===0}]),type:"button",onClick:s[3]||(s[3]=(..._)=>o.saveCardId&&o.saveCardId(..._))},"直接結帳",2)])]))),128))])}const Ns=C(q,[["render",Us]]);export{Ns as default};
