import{_ as l,o as d,c as g,a as e,b as a,w as n,d as r,t as o,e as p,r as u}from"./index-fED2h5b-.js";const c="https://two024-south-json-server-vercel.onrender.com",h={data(){return{attractions:[],attraction:[],attractionsLength:0,products:[],productsLength:0,orders:[]}},methods:{getAttractions(){this.axios.get(`${c}/attractions`).then(t=>{this.attractions=t.data,this.attractionsLength=this.attractions.length,this.getAttraction()}).catch(t=>{alert(`${err}`)})},getAttraction(){this.attraction=this.attractions[this.attractionsLength-1]},getProducts(){this.axios.get(`${c}/products`).then(t=>{this.products=t.data}).catch(t=>{alert(`${err.data.message}`)})},getOrders(){this.axios.get(`${c}/orders`).then(t=>{this.orders=t.data}).catch(t=>{console.log(t)})}},mounted(){this.getAttractions(),this.getProducts(),this.getOrders()}},m={class:"list-group rounded-1"},_={class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center","aria-current":"true"},x={class:"badge text-bg-primary-400 text-white rounded-pill"},b={class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},f={class:"badge text-bg-primary-400 text-white rounded-pill"},w={class:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},y={class:"badge text-bg-primary-400 text-white rounded-pill"},j=p('<li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 預約數量管理 <span class="badge text-bg-primary-400 text-white rounded-pill">0</span></li><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 留言管理 <span class="badge text-bg-primary-400 text-white rounded-pill">0</span></li><li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 優惠券管理 <span class="badge text-bg-primary-400 text-white rounded-pill">0</span></li>',3);function A(t,$,k,L,s,N){const i=u("router-link");return d(),g("ul",m,[e("li",_,[a(i,{to:"/admin/attractionsManagement"},{default:n(()=>[r("景點管理")]),_:1}),e("span",x,o(s.attractions.length),1)]),e("li",b,[a(i,{to:"/admin/productsManagement"},{default:n(()=>[r("產品管理")]),_:1}),e("span",f,o(s.products.length),1)]),e("li",w,[a(i,{to:"/admin/ordersManagement"},{default:n(()=>[r("訂單管理")]),_:1}),e("span",y,o(s.orders.length),1)]),j])}const v=l(h,[["render",A]]);export{v as A};