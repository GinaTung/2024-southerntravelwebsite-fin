import{_ as i,c as l,a as s,b as e,w as o,r as c,o as r,d as n}from"./index-KSkujBd3.js";const d="https://ec-course-api.hexschool.io/v2",_={data(){return{user:{username:"",password:""}}},methods:{checkAdmin(){this.axios.post(`${d}/api/user/check`).then(a=>{}).catch(a=>{alert("目前未登入狀態，請重新登入"),this.$router.push({path:"/admin/adminlogin"})})}},mounted(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=a}},h={class:"container"},m={class:"navbar navbar-expand-lg bg-body-tertiary border-bottom border-3 mb-8"},v={class:"container px-0"},u=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),p={class:"collapse navbar-collapse",id:"navbarNav"},b={class:"navbar-nav ms-auto"},g={class:"nav-item"},f={class:"nav-item"},k=s("h2",{class:"mb-5"},"後台首頁",-1),x={class:"row flex-column"},$=s("div",{class:"col-6"},[s("div",{class:"list-group",id:"list-tab",role:"tablist"},[s("a",{class:"list-group-item list-group-item-action list-group-item-success rounded-0",id:"list-home-list","data-bs-toggle":"list",href:"#list-home",role:"tab","aria-controls":"list-home"},"網站情況")])],-1),w={class:"col-6"},N={class:"tab-content",id:"nav-tabContent"},y={class:"tab-pane fade show active",id:"list-home",role:"tabpanel","aria-labelledby":"list-home-list"},V={class:"nav flex-column"},A=s("a",{class:"nav-link",href:"#"},"文章 1 篇",-1),B=s("a",{class:"nav-link",href:"#"},"留言 1 條",-1),C=s("a",{class:"nav-link disabled","aria-disabled":"true"},"優惠券",-1);function M(a,T,z,E,H,j){const t=c("router-link");return r(),l("div",h,[s("nav",m,[s("div",v,[u,s("div",p,[s("ul",b,[s("li",g,[e(t,{to:"/admin/touristManagement",class:"nav-link"},{default:o(()=>[n("景點管理")]),_:1})]),s("li",f,[e(t,{to:"/admin/productsManagement",class:"nav-link"},{default:o(()=>[n("產品管理")]),_:1})])])])])]),k,s("div",x,[$,s("div",w,[s("div",N,[s("div",y,[s("nav",V,[e(t,{to:"/admin/productsManagement",class:"nav-link"},{default:o(()=>[n("產品 1 個")]),_:1}),A,B,C])])])])])])}const D=i(_,[["render",M]]);export{D as default};