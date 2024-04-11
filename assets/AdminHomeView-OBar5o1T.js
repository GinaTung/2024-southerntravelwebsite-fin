import{A as d}from"./AdminSidebar-hXLE-UYr.js";import{s as c}from"./sweetAlert-TFFmnPge.js";import{_ as l,c as h,a as t,b as _,t as e,d as a,n as r,e as p,o as u,r as g}from"./index-LkcBEWKG.js";const m="https://ec-course-api.hexschool.io/v2",i="https://two024-south-json-server-vercel.onrender.com",b={components:{AdminSidebar:d},data(){return{token:"",attractions:[],attraction:[],attractionsLength:0,products:[],productsLength:0,product:[],orders:[]}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?this.axios.post(`${m}/api/user/check`).then(o=>{this.userIsLoggedIn=!0}).catch(o=>{this.userIsLoggedIn=!1,c.threeLayerCheckType("error","管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})}):(c.threeLayerCheckType("warning","目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getAttractions(){this.axios.get(`${i}/attractions`).then(o=>{this.attractions=o.data,this.attractionsLength=this.attractions.length,this.getAttraction()}).catch(o=>{c.threeLayerCheckType("error","取得景點資料失敗")})},getAttraction(){this.attraction=this.attractions[this.attractionsLength-1]},getProducts(){this.axios.get(`${i}/products`).then(o=>{this.products=o.data,this.productsLength=this.products.length,this.getProduct()}).catch(o=>{c.threeLayerCheckType("error","取得產品資料失敗")})},getProduct(){this.product=this.products[this.productsLength-1]},getOrders(){this.axios.get(`${i}/orders`).then(o=>{this.orders=o.data}).catch(o=>{c.threeLayerCheckType("error","取得訂單資料失敗")})}},mounted(){setTimeout(()=>{this.checkAdmin()},500),this.getAttractions(),this.getProducts()}},f={class:"container"},v=t("h1",{class:"my-4 fs-4 fs-md-1"},"後台首頁",-1),x={class:"row flex-column flex-md-row"},y={class:"col-12 col-md-3"},k={class:"col-12 col-md-9"},T={class:"accordion mt-4",id:"accordionExample"},A={class:"accordion-item"},L=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," 最新景點建立資訊 ")],-1),w={id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},C={class:"accordion-body"},E={class:"row"},S={class:"col-12 col-md-5"},V=["src"],I={class:"col-12 col-md-7"},N={class:"fs-5"},O=t("br",null,null,-1),P={class:"fs-6"},B=t("br",null,null,-1),z={class:"d-flex"},U=t("strong",{class:"fs-6"},"上架：",-1),j={class:"accordion-item"},D=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," 最新產品建立資訊 ")],-1),H={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},$={class:"accordion-body"},q={class:"row"},F={class:"col-12 col-md-5"},G=["src"],J={class:"col-12 col-md-7"},K={class:"fs-5"},M=t("br",null,null,-1),Q={class:"fs-6"},R=t("br",null,null,-1),W={class:"d-flex"},X=t("strong",{class:"fs-6"},"上架：",-1),Y=p('<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 最新訂單資訊 </button></h2><div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div class="accordion-body"> 目前無資料 </div></div></div>',1);function Z(o,tt,st,ot,s,et){const n=g("AdminSidebar");return u(),h("div",f,[v,t("div",x,[t("div",y,[_(n)]),t("div",k,[t("div",T,[t("div",A,[L,t("div",w,[t("div",C,[t("div",E,[t("div",S,[t("img",{src:s.attraction.imageUrl,alt:"",class:"img-fluid"},null,8,V)]),t("div",I,[t("strong",N,"景點名稱："+e(s.attraction.title),1),a(),O,t("strong",P,"分類："+e(s.attraction.category),1),a(),B,t("div",z,[U,t("strong",{class:r(["fs-6",{"text-success":s.attraction.is_enabled===1,"text-danger":s.attraction.is_enabled===0}])},e(s.attraction.is_enabled?"啟用":"未啟用"),3)])])])])])]),t("div",j,[D,t("div",H,[t("div",$,[t("div",q,[t("div",F,[t("img",{src:s.product.imageUrl,alt:"",class:"img-fluid"},null,8,G)]),t("div",J,[t("strong",K,"景點名稱："+e(s.product.title),1),a(),M,t("strong",Q,"分類："+e(s.product.category),1),a(),R,t("div",W,[X,t("strong",{class:r(["fs-6",{"text-success":s.product.is_enabled===1,"text-danger":s.product.is_enabled===0}])},e(s.product.is_enabled?"啟用":"未啟用"),3)])])])])])]),Y])])])])}const rt=l(b,[["render",Z]]);export{rt as default};