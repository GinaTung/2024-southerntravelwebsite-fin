import{_ as a,o as t,c as s,j as i,t as o,d as c,a as k}from"./index-jP5mHpEK.js";const m={data(){return{linkPath:"",linkCategory:"",linkTitle:"",linkName:""}},mounted(){const{path:n,params:r,name:l}=this.$route;this.linkPath=n,this.linkName=l,this.linkCategory=r.category,this.linkTitle=r.title}},f={class:"ad d-flex justify-content-center align-items-center"},h={key:0,class:"fs-3 fs-md-2 text-center fw-bold"},u={key:1,class:"fs-3 fs-md-2 text-center fw-bold"},_={key:2,class:"fs-3 fs-md-2 text-center fw-bold"},p={key:3,class:"fs-3 fs-md-2 text-center fw-bold"},d=k("br",null,null,-1);function g(n,r,l,y,e,T){return t(),s("div",f,[this.linkPath==="/TouristAttractions"?(t(),s("p",h,"南部旅遊景點")):i("",!0),this.linkPath==="/TouristPackage"?(t(),s("p",u,"南部旅遊方案")):i("",!0),e.linkName==="TouristSingleAttraction"&&e.linkCategory===n.$route.params.category&&e.linkTitle?(t(),s("p",_,o(e.linkCategory)+" - "+o(e.linkTitle),1)):i("",!0),e.linkName==="TouristSinglePackage"&&e.linkCategory===n.$route.params.category&&e.linkTitle?(t(),s("p",p,[c(o(e.linkCategory),1),d,c(o(e.linkTitle),1)])):i("",!0)])}const C=a(m,[["render",g]]);export{C as B};
