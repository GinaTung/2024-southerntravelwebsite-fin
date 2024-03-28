import{A as d}from"./AdminSidebar-Z80U3ei5.js";import{_ as l,c as r,a as t,b as h,t as c,d as e,n as i,e as _,o as p,r as u}from"./index-QFxCqv35.js";const g="https://ec-course-api.hexschool.io/v2",a="https://two024-south-json-server-vercel.onrender.com",m={components:{AdminSidebar:d},data(){return{token:"",attractions:[],attraction:[],attractionsLength:0,products:[],productsLength:0,product:[],orders:[]}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?this.axios.post(`${g}/api/user/check`).then(s=>{this.userIsLoggedIn=!0}).catch(s=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})}):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getAttractions(){this.axios.get(`${a}/attractions`).then(s=>{this.attractions=s.data,this.attractionsLength=this.attractions.length,this.getAttraction()}).catch(s=>{console.log(s)})},getAttraction(){this.attraction=this.attractions[this.attractionsLength-1]},getProducts(){this.axios.get(`${a}/products`).then(s=>{this.products=s.data,this.productsLength=this.products.length,this.getProduct()}).catch(s=>{console.log(s)})},getProduct(){this.product=this.products[this.productsLength-1]},getOrders(){this.axios.get(`${a}/orders`).then(s=>{this.orders=s.data}).catch(s=>{console.log(s)})}},mounted(){setTimeout(()=>{this.checkAdmin()},500),this.getAttractions(),this.getProducts()}},b={class:"container"},v=t("h1",{class:"my-4 fs-4 fs-md-1"},"後台首頁",-1),f={class:"row flex-column flex-md-row"},x={class:"col-12 col-md-3"},A={class:"col-12 col-md-9"},k={class:"accordion mt-4",id:"accordionExample"},w={class:"accordion-item"},y=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," 最新景點建立資訊 ")],-1),T={id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},L={class:"accordion-body"},E={class:"row"},S={class:"col-12 col-md-5"},V=["src"],I={class:"col-12 col-md-7"},N={class:"fs-5"},O=t("br",null,null,-1),P={class:"fs-6"},B=t("br",null,null,-1),z={class:"d-flex"},C=t("strong",{class:"fs-6"},"上架：",-1),U={class:"accordion-item"},j=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," 最新產品建立資訊 ")],-1),D={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},H={class:"accordion-body"},$={class:"row"},q={class:"col-12 col-md-5"},F=["src"],G={class:"col-12 col-md-7"},J={class:"fs-5"},K=t("br",null,null,-1),M={class:"fs-6"},Q=t("br",null,null,-1),R={class:"d-flex"},W=t("strong",{class:"fs-6"},"上架：",-1),X=_('<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 留言 </button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"> 目前無資料 </div></div></div>',1);function Y(s,Z,tt,st,o,ot){const n=u("AdminSidebar");return p(),r("div",b,[v,t("div",f,[t("div",x,[h(n)]),t("div",A,[t("div",k,[t("div",w,[y,t("div",T,[t("div",L,[t("div",E,[t("div",S,[t("img",{src:o.attraction.imageUrl,alt:"",class:"img-fluid"},null,8,V)]),t("div",I,[t("strong",N,"景點名稱："+c(o.attraction.title),1),e(),O,t("strong",P,"分類："+c(o.attraction.category),1),e(),B,t("div",z,[C,t("strong",{class:i(["fs-6",{"text-success":o.attraction.is_enabled===1,"text-danger":o.attraction.is_enabled===0}])},c(o.attraction.is_enabled?"啟用":"未啟用"),3)])])])])])]),t("div",U,[j,t("div",D,[t("div",H,[t("div",$,[t("div",q,[t("img",{src:o.product.imageUrl,alt:"",class:"img-fluid"},null,8,F)]),t("div",G,[t("strong",J,"景點名稱："+c(o.product.title),1),e(),K,t("strong",M,"分類："+c(o.product.category),1),e(),Q,t("div",R,[W,t("strong",{class:i(["fs-6",{"text-success":o.product.is_enabled===1,"text-danger":o.product.is_enabled===0}])},c(o.product.is_enabled?"啟用":"未啟用"),3)])])])])])]),X])])])])}const at=l(m,[["render",Y]]);export{at as default};