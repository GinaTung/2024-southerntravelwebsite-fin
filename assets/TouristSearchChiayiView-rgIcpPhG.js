import{_ as g,c as i,s as h,F as n,o as r,a as e,t as l,u as f}from"./index-HaXGubSD.js";const u="https://two024-south-json-server-vercel.onrender.com",m={data(){return{text:"南部旅遊方案",products:[],user:"",newProductsDes:"",enabledProducts:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[]}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?(console.log(token,user),this.axios.post(`${u}/api/users/${user}`).then(s=>{this.userIsLoggedIn=!0}).catch(s=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})})):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getProducts(){this.axios.get(`${u}/products`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&this.enabledProducts.push(t)}),this.getNewText()}).catch(s=>{console.log(s)})},truncateContent(s,t){return s&&s.length>t?s.substring(0,t)+"...":s},getNewText(){const s={};this.products.forEach(t=>{t.description&&t.description.split(";").forEach(p=>{const o=p.trim();s[t.id]||(s[t.id]=[]),s[t.id].push(o)})}),this.newProductsDes=Object.entries(s).map(([t,c])=>({id:t,descriptions:c}))},searchProducts(){this.axios.get(`${u}/products?category=嘉義`).then(s=>{this.products=s.data,this.products.forEach(t=>{t.is_enabled===1&&this.searchChiayi.push(t)}),console.log(this.searchChiayi)}).catch(s=>{alert(`${s.message}`)})}},mounted(){this.searchProducts(),this.getProducts()}},x={class:"row g-0"},k={class:"col-md-4"},y={class:"tag text-white"},b={class:"card-att-img card-att-img-2 h-100"},$=["src","alt"],v=e("div",{class:"heart3"},[e("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),w={class:"col-md-8"},P={class:"card-body px-5"},T={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4"},C={key:0},D=e("p",{class:"card-text card-text-position"},[e("a",{href:"#",class:"fs-5"},"more")],-1);function E(s,t,c,p,o,N){return r(!0),i(n,null,h(o.searchChiayi,a=>(r(),i("div",{class:"card mb-3 card-att",key:a.id},[e("div",x,[e("div",k,[e("span",y,l(a.category),1),e("div",b,[e("img",{src:a.imageUrl,class:"card-img-top img-fluid",alt:a.title},null,8,$)]),v]),e("div",w,[e("div",P,[e("h4",T,l(a.title),1),(r(!0),i(n,null,h(o.newProductsDes,d=>(r(),i("div",{key:d.id},[d.id===a.id?(r(),i("div",C,[(r(!0),i(n,null,h(d.descriptions,_=>(r(),i("p",{key:_},l(_),1))),128))])):f("",!0)]))),128)),D])])])]))),128)}const S=g(m,[["render",E]]);export{S as default};
