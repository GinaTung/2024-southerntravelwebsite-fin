import{_ as k,c as n,a as t,b as y,w as v,j as h,t as l,F as m,h as p,r as C,o as r,d as c,f as D,i as T,n as x}from"./index-QFxCqv35.js";const f="https://two024-south-json-server-vercel.onrender.com",P={data(){return{category:"",packageTitle:"",products:[],newProductsContent:"",enabledProducts:[],carts:[],quantity:1,newQty:0,newCarts:[],cartId:null,bsOffcanvas:null,userId:"",token:"",currentDate:"",endDate:"",isDisabled:!1}},created(){this.category=this.$route.params.category,this.packageTitle=this.$route.params.title},methods:{redirectToA(i){this.$router.push({path:"/TouristPackage",query:{category:i}})},checkDate(){var i=new Date,s={year:i.getFullYear(),month:i.getMonth()+1,date:i.getDate()},d=(s.month<10?"0":"")+s.month,b=(s.date<10?"0":"")+s.date,a=s.year+"-"+d+"-"+b;this.currentDate=a},getProducts(){this.axios.get(`${f}/products`).then(i=>{this.products=i.data,this.products.forEach(s=>{s.is_enabled===1&&s.title===this.packageTitle&&this.enabledProducts.push(s)}),this.endDate=this.enabledProducts[0].endDate,this.getNewText()}).catch(i=>{alert(`${i.message}`)})},thousand(i){return i!==void 0&&(i=i.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${i}`},getNewText(){const i={};this.enabledProducts.forEach(s=>{s.content&&s.content.split(";").forEach(b=>{const a=b.trim();a!==""&&(i[s.id]||(i[s.id]=[]),i[s.id].push(a))})});for(const s in i)i[s].length===0&&delete i[s];this.newProductsContent=Object.entries(i).map(([s,d])=>({id:s,content:d}))},addToCart(i,s=1,d,b=1){if(!this.token)alert("請登入會員後，才能預約套裝行程");else{let a=!1;this.newCarts.forEach(o=>{o.productId===i&&o.id&&(a=!0,this.cartId=o.id)}),a?this.axios.put(`${f}/carts/${this.cartId}`,{productId:i,qty:s,price:d,total:s*d,userId:this.userId,final_total:s*d*b}).then(o=>{this.$router.go(0),alert("已更新預約人數"),this.getCart()}).catch(o=>{alert("更新預約人數失敗")}):this.axios.post(`${f}/carts`,{productId:i,qty:s,price:d,total:s*d,userId:this.userId,final_total:s*d*b}).then(o=>{this.$router.go(0),alert(`已預約${this.packageTitle}成功`),this.getCart()}).catch(o=>{alert("預約失敗，再重新登入預約")})}},incrementQuantity(){this.quantity<10&&(this.quantity+=1)},decrementQuantity(){this.quantity>1&&(this.quantity-=1)},checkMaxValue(){this.quantity>10&&(this.quantity=10)},handlePlus(i){this.quantity=i++},saveCardId(){this.token?this.$router.push("/cart"):alert("請登入會員後，才能預約套裝行程")},getCart(){this.axios.get(`${f}/carts`).then(i=>{this.carts=i.data,this.carts.forEach(s=>{this.userId===s.userId&&this.newCarts.push(s)})}).catch(i=>{alert("取得購物車資料失敗")})},getCookie(i){const s=document.cookie.split(";");for(let d of s){const[b,a]=d.trim().split("=");if(b===i)return a}return null}},mounted(){this.getProducts(),this.getCart();const i=this.getCookie("userId"),s=this.getCookie("hexTokenU");this.userId=i*1,this.token=s,this.checkDate(),window.scrollTo(0,0)}},q={class:"container py-10 py-lg-30"},U={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},E={class:"breadcrumb mb-0 fs-5"},N={class:"breadcrumb-item"},Q={class:"breadcrumb-item"},V={class:"breadcrumb-item"},S={class:"breadcrumb-item"},j={class:"col-12 col-md-7 col-lg-9 my-8 my-md-0"},A={class:"d-flex"},B=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),M={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},F=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),c("第一天 ")],-1),O=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),z={class:"tab-content card-att",id:"pills-tabContent"},L={class:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},Y={class:"row"},G={class:"w-100 w-lg-60 mb-4"},H={class:"card-att-img card-att-img-2"},J=["src","alt"],K={class:"w-100 w-lg-40"},R={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},W={class:"text-dark mb-4"},X={class:"tab-pane fade",id:"pills-profile",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},Z={class:"row"},$={class:"w-100 w-lg-60 mb-4"},I={class:"card-att-img card-att-img-2"},tt=["src","alt"],st={class:"w-100 w-lg-40"},et={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},it={class:"text-dark"},at={key:0},lt={class:"d-flex my-12"},ot=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),nt={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},rt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),c("第二天 ")],-1),dt=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),ct={class:"tab-content card-att",id:"pills-tabContent"},_t={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},bt={class:"row"},ht={class:"w-100 w-lg-60 mb-4"},ft={class:"card-att-img card-att-img-2"},mt=["src","alt"],pt={class:"w-100 w-lg-40"},gt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},ut={class:"text-dark mb-4"},yt={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},vt={class:"row"},xt={class:"w-100 w-lg-60 mb-4"},wt={class:"card-att-img card-att-img-2"},kt=["src","alt"],Ct={class:"w-lg-40"},Dt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Tt={class:"text-dark"},Pt={key:1},qt={class:"d-flex my-12"},Ut=t("div",{class:"w-5 d-none d-xl-flex"},[t("i",{class:"bi bi-geo-alt-fill position-relative fs-5"},[t("div",{class:"line"}),t("i",{class:"bi bi-arrow-down-circle-fill arrow"})])],-1),Et={class:"w-100 w-xl-95 position-relative pe-0 pe-lg-5"},Nt=t("h4",{class:"d-flex"},[t("i",{class:"bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"}),c("第三天 ")],-1),Qt=t("ul",{class:"nav nav-underline nav-fill mb-4 w-100 w-lg-60",id:"pills-tab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home2",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true"}," 早上 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#pills-profile2",type:"button",role:"tab","aria-controls":"pills-profile","aria-selected":"false"}," 下午 ")])],-1),Vt={class:"tab-content card-att",id:"pills-tabContent"},St={class:"tab-pane fade show active",id:"pills-home2",role:"tabpanel","aria-labelledby":"pills-home-tab",tabindex:"0"},jt={class:"row"},At={class:"w-100 w-lg-60 mb-4"},Bt={class:"card-att-img card-att-img-2"},Mt=["src","alt"],Ft={class:"w-100 w-lg-40"},Ot={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},zt={class:"text-dark mb-4"},Lt={class:"tab-pane fade",id:"pills-profile2",role:"tabpanel","aria-labelledby":"pills-profile-tab",tabindex:"0"},Yt={class:"row"},Gt={class:"w-100 w-lg-60 mb-4"},Ht={class:"card-att-img card-att-img-2"},Jt=["src","alt"],Kt={class:"w-lg-40"},Rt={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},Wt={class:"text-dark"},Xt={class:"col-12 col-md-5 col-lg-3"},Zt={class:"d-flex mb-4"},$t={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},It={class:"fs-3 fs-sm-4 fs-xl-3 mb-6 text-primary-700 fw-bold"},ts=t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-person-walking me-2"}),c("景點行程 ")],-1),ss={class:"mt-2 mb-6"},es={class:"d-flex mb-4 flex-column mb-6"},is=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-calendar-plus me-2"}),c("預約期間 ")])],-1),as={key:0,class:"mt-2"},ls={key:1,class:"mt-2 text-danger"},os={class:"d-flex mb-4 flex-column"},ns=t("h5",{class:"mb-2"},[t("span",{class:"fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"},[t("i",{class:"bi bi-car-front-fill me-2"}),c("出發時間 ")])],-1),rs={class:"mt-2"},ds={class:"d-flex justify-content-between mb-4 align-items-end"},cs={class:"fs-4 fs-lg-5 text-decoration-line-through text-end"},_s={class:"d-flex flex-sm-column align-items-end justify-content-end"},bs=t("p",{class:"fs-6 text-danger fw-bold d-none d-sm-block"},"促銷價",-1),hs={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},fs={class:"d-flex mb-2"},ms=["disabled"],ps=t("i",{class:"bi bi-dash-lg"},null,-1),gs=[ps],us=["disabled"],ys=t("i",{class:"bi bi-plus-lg"},null,-1),vs=[ys],xs=t("button",{type:"button",class:"btn btn-outline-dark rounded-0 ms-2"},[t("i",{class:"bi bi-heart"})],-1),ws={class:"mb-2"},ks={class:"text-danger"},Cs={key:0,class:"mb-5"},Ds=t("span",{class:"text-danger"},"0",-1),Ts={class:"text-danger"},Ps=["onClick"],qs={key:2,class:"btn btn-danger w-100 fs-5 mb-4 disabled btn-danger-rounded",type:"button"};function Us(i,s,d,b,a,o){const g=C("router-link");return r(),n("div",q,[t("nav",U,[t("ol",E,[t("li",N,[y(g,{to:"/",exact:"","active-class":"active-link"},{default:v(()=>[c(" 首頁 ")]),_:1})]),t("li",Q,[y(g,{to:"/TouristPackage",exact:"","active-class":"active-link"},{default:v(()=>[c(" 南部旅遊方案 ")]),_:1})]),t("li",V,[a.category==="台南"?(r(),n("a",{key:0,type:"button",onClick:s[0]||(s[0]=e=>o.redirectToA("台南")),class:"navbar-brand"},"台南")):a.category==="嘉義"?(r(),n("a",{key:1,type:"button",onClick:s[1]||(s[1]=e=>o.redirectToA("嘉義")),class:"navbar-brand"},"嘉義")):a.category==="高雄"?(r(),n("a",{key:2,type:"button",onClick:s[2]||(s[2]=e=>o.redirectToA("高雄")),class:"navbar-brand"},"高雄")):h("",!0)]),t("li",S,l(a.packageTitle),1)])]),(r(!0),n(m,null,p(a.enabledProducts,e=>(r(),n("div",{class:"row h-100 flex-wrap-reverse flex-md-nowrap",key:e.id},[t("div",j,[t("div",A,[B,t("div",M,[F,O,t("div",z,[t("div",L,[t("div",Y,[t("div",G,[t("div",H,[t("img",{src:e.imagesUrl[0],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,J)])]),t("div",K,[t("h4",R,l(e.itinerary_data[0].itinerary_first_day_am_title),1),t("p",W,l(e.itinerary_data[0].itinerary_first_day_am_content),1)])])]),t("div",X,[t("div",Z,[t("div",$,[t("div",I,[t("img",{src:e.imagesUrl[1],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,tt)])]),t("div",st,[t("h4",et,l(e.itinerary_data[0].itinerary_first_day_pm_title),1),t("p",it,l(e.itinerary_data[0].itinerary_first_day_pm_content),1)])])])])])]),e.itinerary_data.length>1?(r(),n("div",at,[t("div",lt,[ot,t("div",nt,[rt,dt,t("div",ct,[t("div",_t,[t("div",bt,[t("div",ht,[t("div",ft,[t("img",{src:e.imagesUrl[2],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,mt)])]),t("div",pt,[t("h4",gt,l(e.itinerary_data[1].itinerary_second_day_am_title),1),t("p",ut,l(e.itinerary_data[1].itinerary_second_day_am_content),1)])])]),t("div",yt,[t("div",vt,[t("div",xt,[t("div",wt,[t("img",{src:e.imagesUrl[3],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,kt)])]),t("div",Ct,[t("h4",Dt,l(e.itinerary_data[1].itinerary_second_day_pm_title),1),t("p",Tt,l(e.itinerary_data[1].itinerary_second_day_pm_content),1)])])])])])])])):h("",!0),e.itinerary_data.length>2?(r(),n("div",Pt,[t("div",qt,[Ut,t("div",Et,[Nt,Qt,t("div",Vt,[t("div",St,[t("div",jt,[t("div",At,[t("div",Bt,[t("img",{src:e.imagesUrl[4],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,Mt)])]),t("div",Ft,[t("h4",Ot,l(e.itinerary_data[2].itinerary_third_day_am_title),1),t("p",zt,l(e.itinerary_data[2].itinerary_third_day_am_content),1)])])]),t("div",Lt,[t("div",Yt,[t("div",Gt,[t("div",Ht,[t("img",{src:e.imagesUrl[5],class:"img-fluid pb-4 pb-lg-0",alt:e.title},null,8,Jt)])]),t("div",Kt,[t("h4",Rt,l(e.itinerary_data[2].itinerary_third_day_pm_title),1),t("p",Wt,l(e.itinerary_data[2].itinerary_third_day_pm_content),1)])])])])])])])):h("",!0)]),t("div",Xt,[t("div",Zt,[t("span",$t,l(a.category),1)]),t("h2",It,l(a.packageTitle),1),ts,t("div",ss,[(r(!0),n(m,null,p(a.newProductsContent,(_,w)=>(r(),n("div",{key:w+123},[(r(!0),n(m,null,p(_.content,u=>(r(),n("p",{key:u},l(u),1))),128))]))),128))]),t("div",es,[is,a.currentDate<=e.endDate?(r(),n("h6",as,l(e.startDate)+" 至 "+l(e.endDate),1)):(r(),n("h5",ls,"預約時間已截止"))]),t("div",os,[ns,t("h6",rs,l(e.goStartDate)+" 至 "+l(e.goEndDate),1)]),t("div",ds,[t("p",cs," NT"+l(o.thousand(e.origin_price)),1),t("div",_s,[bs,t("p",hs," NT"+l(o.thousand(e.price)),1)])]),t("div",fs,[t("button",{class:"btn btn-outline-dark rounded-0",type:"button",disabled:a.quantity===1,onClick:s[3]||(s[3]=(..._)=>o.decrementQuantity&&o.decrementQuantity(..._))},gs,8,ms),D(t("input",{min:"1",max:"10",type:"number",disabled:a.quantity>10,class:"form-control text-center rounded-0 border border-dark","onUpdate:modelValue":s[4]||(s[4]=_=>a.quantity=_),readonly:""},null,8,us),[[T,a.quantity]]),t("button",{class:"btn btn-outline-dark rounded-0",type:"button",onClick:s[5]||(s[5]=(..._)=>o.incrementQuantity&&o.incrementQuantity(..._))},vs),xs]),t("h6",ws,[c(" 注意： "),t("span",ks," 至少3位成團，最多"+l(e.max_travelers)+"位出遊 ",1)]),a.currentDate<=e.endDate?(r(),n("h6",Cs,[c(" 目前已有 "),Ds,c(" 位預約，剩 "),t("span",Ts,l(e.max_travelers),1),c(" 位可預約 ")])):h("",!0),a.currentDate<=a.endDate?(r(),n("button",{key:1,class:x(["btn-square w-100 fs-5 mb-4 border-0",{"disabled-btn":a.currentDate>a.endDate}]),type:"button",onClick:_=>o.addToCart(e.id,a.quantity,e.price)}," 預約套裝行程 ",10,Ps)):(r(),n("button",qs,"預約時間截止")),t("button",{class:x(["btn-square fs-5 w-100 border-0",{"disabled-btn":a.currentDate>a.endDate||a.newCarts.length===0}]),type:"button",onClick:s[6]||(s[6]=(..._)=>o.saveCardId&&o.saveCardId(..._))}," 直接結帳 ",2)])]))),128))])}const Ns=k(P,[["render",Us]]);export{Ns as default};