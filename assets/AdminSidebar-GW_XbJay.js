import{_ as l,o as d,c as g,a as t,b as o,w as i,d as s,x as r,r as p}from"./index-BzeQhHl-.js";const c="https://two024-south-json-server-vercel.onrender.com",u={data(){return{attractions:[],attraction:[],attractionsLength:0,products:[],productsLength:0}},methods:{getAttractions(){this.axios.get(`${c}/attractions`).then(e=>{this.attractions=e.data,this.attractionsLength=this.attractions.length,this.getAttraction()}).catch(e=>{alert(`${err}`)})},getAttraction(){this.attraction=this.attractions[this.attractionsLength-1]},getProducts(){this.axios.get(`${c}/products`).then(e=>{this.products=e.data}).catch(e=>{alert(`${err.data.message}`)})}},mounted(){this.getAttractions(),this.getProducts()}},h={class:"list-group rounded-1"},m={class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center","aria-current":"true"},_={class:"badge text-bg-primary rounded-pill"},x={class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},f={class:"badge text-bg-primary rounded-pill"},b=t("li",{class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},[s(" 留言 "),t("span",{class:"badge text-bg-primary rounded-pill"},"0")],-1),y=t("li",{class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},[s(" 優惠券 "),t("span",{class:"badge text-bg-primary rounded-pill"},"0")],-1);function w(e,A,$,j,a,k){const n=p("router-link");return d(),g("ul",h,[t("li",m,[o(n,{to:"/admin/attractionsManagement"},{default:i(()=>[s("景點管理")]),_:1}),t("span",_,r(a.attractions.length),1)]),t("li",x,[o(n,{to:"/admin/productsManagement"},{default:i(()=>[s("產品管理")]),_:1}),t("span",f,r(a.products.length),1)]),b,y])}const v=l(u,[["render",w]]);export{v as A};
