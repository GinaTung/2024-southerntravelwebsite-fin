import{s as d}from"./sweetAlert-2P-e1xo-.js";import{_ as l,o as h,c as g,a as e,b as a,w as o,d as i,t as n,r as p}from"./index-36QR2t1j.js";const c="https://two024-south-json-server-vercel.onrender.com",u={data(){return{attractions:[],attraction:[],attractionsLength:0,products:[],productsLength:0,orders:[]}},methods:{getAttractions(){this.axios.get(`${c}/attractions`).then(t=>{this.attractions=t.data,this.attractionsLength=this.attractions.length,this.getAttraction()}).catch(t=>{alert(`${err}`)})},getAttraction(){this.attraction=this.attractions[this.attractionsLength-1]},getProducts(){this.axios.get(`${c}/products`).then(t=>{this.products=t.data}).catch(t=>{d.threeLayerCheckType("error","取得產品資料失敗")})},getOrders(){this.axios.get(`${c}/orders`).then(t=>{this.orders=t.data}).catch(t=>{d.threeLayerCheckType("error","取得訂單資料失敗")})}},mounted(){this.getAttractions(),this.getProducts(),this.getOrders()}},m={class:"list-group rounded-1"},_={class:"list-group-item list-group-item-action","aria-current":"true"},x={class:"badge text-bg-primary-400 text-white rounded-pill"},f={class:"list-group-item list-group-item-action"},b={class:"badge text-bg-primary-400 text-white rounded-pill"},y={class:"list-group-item list-group-item-action"},w={class:"badge text-bg-primary-400 text-white rounded-pill"};function A(t,k,L,$,s,j){const r=p("router-link");return h(),g("ul",m,[e("li",_,[a(r,{to:"/admin/attractionsManagement",class:"d-flex justify-content-between align-items-center"},{default:o(()=>[i("景點管理 "),e("span",x,n(s.attractions.length),1)]),_:1})]),e("li",f,[a(r,{to:"/admin/productsManagement",class:"d-flex justify-content-between align-items-center"},{default:o(()=>[i("產品管理"),e("span",b,n(s.products.length),1)]),_:1})]),e("li",y,[a(r,{to:"/admin/ordersManagement",class:"d-flex justify-content-between align-items-center"},{default:o(()=>[i("訂單管理 "),e("span",w,n(s.orders.length),1)]),_:1})])])}const B=l(u,[["render",A]]);export{B as A};
