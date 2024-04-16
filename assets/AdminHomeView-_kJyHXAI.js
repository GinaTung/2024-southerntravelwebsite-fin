import{A as _}from"./AdminSidebar-F_ve6Plw.js";import{s as r}from"./sweetAlert-MsE6Jbuo.js";import{_ as d,o as n,c as i,a as e,b as a,r as h,F as m}from"./index-EHctanNP.js";const b="https://two024-south-json-server-vercel.onrender.com",v={components:{"order-card":{props:{count:{type:Number,required:!0},label:{type:String,required:!0},cardClass:{type:String,required:!0}},template:`
        <div :class="cardClass" class="card border shadow-sm bg-body-tertiary">
          <div class="card-body">
            <h5 class="card-title">{{ count }}</h5>
            <p class="card-text">{{ label }}</p>
          </div>
        </div>
      `}},data(){return{orders:[]}},computed:{payStatus(){return this.orders.filter(t=>!t.user.status)},checkoutStatue(){return this.orders.filter(t=>t.user.status&&!t.checkDataStatus)},billStatus(){return this.orders.filter(t=>t.user.status&&t.checkDataStatus&&t.billStatus&&!t.status)},orderStatus(){return this.orders.filter(t=>t.user.status&&t.checkDataStatus&&t.billStatus&&t.status)}},methods:{getOrders(){this.axios.get(`${b}/orders`).then(t=>{this.orders=t.data}).catch(t=>{r.threeLayerCheckType("error","取得訂單資料失敗")})}},mounted(){this.getOrders()}},k={class:"row g-0"},$={class:"col-6"},y={class:"col-6"},S={class:"col-6"},f={class:"col-6"};function C(t,u,l,p,g,o){const s=h("order-card");return n(),i("div",k,[e("div",$,[a(s,{count:o.payStatus.length,label:"尚未付款訂單",cardClass:"rounded-border-top border"},null,8,["count"])]),e("div",y,[a(s,{count:o.checkoutStatue.length,label:"預約出遊安排訂單",cardClass:"rounded-border-end border"},null,8,["count"])]),e("div",S,[a(s,{count:o.billStatus.length,label:"即將出遊訂單",cardClass:"rounded-border-bottom border"},null,8,["count"])]),e("div",f,[a(s,{count:o.orderStatus.length,label:"出遊結束訂單",cardClass:"rounded-border-start border"},null,8,["count"])])])}const L=d(v,[["render",C],["__scopeId","data-v-125dbb8a"]]),x="https://ec-course-api.hexschool.io/v2",c="https://two024-south-json-server-vercel.onrender.com",A={components:{AdminSidebar:_,DashboardStatueColumn:L},data(){return{token:"",attractions:[],attraction:[],attractionsLength:0,products:[],productsLength:0,product:[],orders:[]}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?this.axios.post(`${x}/api/user/check`).then(t=>{this.userIsLoggedIn=!0}).catch(t=>{this.userIsLoggedIn=!1,r.threeLayerCheckType("error","管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})}):(r.threeLayerCheckType("warning","目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getAttractions(){this.axios.get(`${c}/attractions`).then(t=>{this.attractions=t.data,this.attractionsLength=this.attractions.length,this.getAttraction()}).catch(t=>{r.threeLayerCheckType("error","取得景點資料失敗")})},getAttraction(){this.attraction=this.attractions[this.attractionsLength-1]},getProducts(){this.axios.get(`${c}/products`).then(t=>{this.products=t.data,this.productsLength=this.products.length,this.getProduct()}).catch(t=>{r.threeLayerCheckType("error","取得產品資料失敗")})},getProduct(){this.product=this.products[this.productsLength-1]},getOrders(){this.axios.get(`${c}/orders`).then(t=>{this.orders=t.data}).catch(t=>{r.threeLayerCheckType("error","取得訂單資料失敗")})}},mounted(){setTimeout(()=>{this.checkAdmin()},500),this.getAttractions(),this.getProducts()}},w=e("h2",{class:"my-5"},"總覽",-1),T={class:"row g-3"},D={class:"col-12 col-lg-5"},I=e("div",{class:"col-12 col-lg-7"},null,-1),P=e("div",{class:"mt-6"},[e("div",{class:"row g-3"},[e("div",{class:"col-12 col-lg-5"}," 已上架 "),e("div",{class:"col-12 col-lg-7"})])],-1);function q(t,u,l,p,g,o){const s=h("DashboardStatueColumn");return n(),i(m,null,[w,e("div",T,[e("div",D,[a(s)]),I]),P],64)}const V=d(A,[["render",q]]);export{V as default};
