import{_ as f,a as i,F as c,u as d,f as m,o as r,b as t,v as h,x,d as k,w as v,e as b,r as y}from"./index-SfGDdVHK.js";const g="https://two024-south-json-server-vercel.onrender.com",$={data(){return{text:"南部旅遊方案",products:[],user:"",newProductsDes:"",enabledProducts:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[]}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?(console.log(token,user),this.axios.post(`${g}/api/users/${user}`).then(e=>{this.userIsLoggedIn=!0}).catch(e=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})})):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getProducts(){this.axios.get(`${g}/products`).then(e=>{this.products=e.data,this.products.forEach(s=>{s.is_enabled===1&&this.enabledProducts.push(s)}),this.getNewText()}).catch(e=>{alert(`${e.message}`)})},truncateContent(e,s){return e&&e.length>s?e.substring(0,s)+"...":e},getNewText(){const e={};this.products.forEach(s=>{s.description&&s.description.split(";").forEach(u=>{const o=u.trim();e[s.id]||(e[s.id]=[]),e[s.id].push(o)})}),this.newProductsDes=Object.entries(e).map(([s,n])=>({id:s,descriptions:n}))}},mounted(){this.getProducts()}},w={class:"row g-0"},P={class:"col-md-4"},T={class:"tag text-white"},N={class:"card-att-img card-att-img-2 h-100"},V=["src","alt"],C=t("div",{class:"heart3"},[t("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),D={class:"col-md-8"},A={class:"card-body px-5"},E={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},S={key:0},j={class:"card-text card-text-position"},B=m('<nav aria-label="Page navigation example " class="my-10"><ul class="pagination justify-content-center"><li class="page-item disabled rounded-0"><a class="page-link rounded-0">Previous</a></li><li class="page-item"><a class="page-link rounded-0" href="#">1</a></li><li class="page-item"><a class="page-link rounded-0" href="#">2</a></li><li class="page-item"><a class="page-link rounded-0" href="#">3</a></li><li class="page-item"><a class="page-link rounded-0" href="#">Next</a></li></ul></nav>',1);function F(e,s,n,u,o,L){const _=y("router-link");return r(),i(c,null,[(r(!0),i(c,null,d(o.enabledProducts,a=>(r(),i("div",{class:"card mb-3 card-att",key:a.id},[t("div",w,[t("div",P,[t("span",T,h(a.category),1),t("div",N,[t("img",{src:a.imageUrl,class:"card-img-top img-fluid",alt:a.title},null,8,V)]),C]),t("div",D,[t("div",A,[t("h4",E,h(a.title),1),(r(!0),i(c,null,d(o.newProductsDes,l=>(r(),i("div",{key:l.id},[l.id===a.id?(r(),i("div",S,[(r(!0),i(c,null,d(l.descriptions,p=>(r(),i("p",{key:p},h(p),1))),128))])):x("",!0)]))),128)),t("p",j,[k(_,{to:`/TouristPackage?category=${a.category}&${a.title}`,class:"fs-5"},{default:v(()=>[b("more")]),_:2},1032,["to"])])])])])]))),128)),B],64)}const K=f($,[["render",F]]);export{K as default};
