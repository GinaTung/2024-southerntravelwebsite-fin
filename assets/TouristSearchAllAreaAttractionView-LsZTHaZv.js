import{_ as l,c as r,F as _,t as h,o,a as t,x as c,b as u,w as f,d as g,r as p}from"./index-sZdYG2qq.js";const b="http://localhost:3000",m={data(){return{attractions:[],enabledAttractions:[]}},methods:{getAttractions(){this.axios.get(`${b}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(a=>{a.is_enabled===1&&this.enabledAttractions.push(a)})}).catch(s=>{alert(`${s.message}`)})},truncateContent(s,a){return s&&s.length>a?s.substring(0,a)+"...":s}},mounted(){this.getAttractions()}},x={class:"row g-3"},y={class:"card card-att h-100"},v={class:"tag text-white"},A={class:"card-att-img"},k=["src"],w=t("div",{class:"heart3"},[t("i",{class:"bi bi-heart heart-click"})],-1),C={style:{transform:"rotate(0)"}},V={class:"card-body card-body-att"},$={class:"card-title d-flex justify-content-between align-items-center card-title-att"},B={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att"},N={class:"card-text card-font-truncate"},S={class:"card-footer text-end border-0"};function T(s,a,E,F,i,n){const d=p("router-link");return o(),r("div",x,[(o(!0),r(_,null,h(i.enabledAttractions,e=>(o(),r("div",{class:"col-12 col-md-6 col-lg-4",key:e.id},[t("div",y,[t("span",v,c(e.category),1),t("div",A,[t("img",{src:e.imageUrl,class:"img-fluid",alt:""},null,8,k)]),w,t("div",C,[t("div",V,[t("div",$,[t("h4",B,c(e.title),1)]),t("p",N,c(n.truncateContent(e.description,53)),1)]),t("div",S,[u(d,{to:{name:"TouristSingleAttraction",params:{category:e.category,title:e.title}},class:"fs-5 stretched-link",type:"button"},{default:f(()=>[g("more")]),_:2},1032,["to"])])])])]))),128))])}const D=l(m,[["render",T]]);export{D as default};
