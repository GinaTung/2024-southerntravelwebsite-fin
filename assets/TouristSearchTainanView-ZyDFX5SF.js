import{_ as b,c as i,F as u,h as _,a,n as f,A as p,o as r,t as c,j as k,b as y,w as D,d as m,r as w}from"./index-QHwjHYun.js";const g="https://two024-south-json-server-vercel.onrender.com",C={data(){return{pageTotal:0,currentPage:1,limitPage:5,parsedLinks:"",products:[],user:"",newProductsDes:"",enabledProducts:[],serchTainan:[],carts:[],quantity:3,newQty:"",newCarts:[],cartId:null,userId:"",token:"",currentDate:"",status:{loadingItem:""}}},methods:{checkDate(){var s=new Date,t={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate()},o=(t.month<10?"0":"")+t.month,d=(t.date<10?"0":"")+t.date,n=t.year+"-"+o+"-"+d;this.currentDate=n},thousand(s){return s!==void 0&&(s=s.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${s}`},truncateContent(s,t){return s&&s.length>t?s.substring(0,t)+"...":s},getNewText(){const s={};this.products.forEach(t=>{t.description&&t.description.split(";").forEach(d=>{const n=d.trim();s[t.id]||(s[t.id]=[]),s[t.id].push(n)})}),this.newProductsDes=Object.entries(s).map(([t,o])=>({id:t,descriptions:o}))},searchProducts(s=1){this.axios.get(`${g}/products?category=台南&_limit=${this.limitPage}&_page=${s}`).then(t=>{var o=parseInt(t.headers["x-total-count"]);this.pageTotal=Math.ceil(o/this.limitPage),this.currentPage=s,this.products=t.data,this.serchTainan=[],this.products.forEach(d=>{d.is_enabled===1&&this.serchTainan.push(d)}),this.getNewText()}).catch(t=>{console.log(t)})},addToCart(s,t=1,o){if(this.status.loadingItem=s,!this.token)alert("請登入會員後，才能預約套裝行程");else{let d=!1,n=1;this.newCarts.forEach(l=>{l.productId===s&&l.id&&(d=!0,this.cartId=l.id)}),d?this.axios.put(`${g}/carts/${this.cartId}`,{productId:s,qty:t,price:o,total:t*o,userId:this.userId,final_total:t*o*n}).then(l=>{this.status.loadingItem="",alert("已更新預約人數"),this.getCart()}).catch(l=>{alert("更新預約人數失敗")}):this.axios.post(`${g}/carts`,{productId:s,qty:t,price:o,total:t*o,userId:this.userId,final_total:t*o*n}).then(l=>{this.status.loadingItem="",alert("已預約成功"),this.getCart(),this.$emitter.emit("updateCart")}).catch(l=>{alert("預約失敗，再重新登入預約")})}},getCart(){this.axios.get(`${g}/carts`).then(s=>{this.carts=s.data,this.carts.forEach(t=>{t.userId===this.userId&&this.newCarts.push(t)})}).catch(s=>{alert("取得購物車資料失敗")})},getCookie(s){const t=document.cookie.split(";");for(let o of t){const[d,n]=o.trim().split("=");if(d===s)return n}return null}},mounted(){this.searchProducts();const s=this.getCookie("userId"),t=this.getCookie("hexTokenU");this.userId=s*1,this.token=t}},T={class:"row g-0"},P={class:"col-md-4"},E={class:"tag text-white"},S={class:"card-att-img h-100"},N=["src","alt"],j={class:"col-md-8"},V={class:"card h-100 border-0 bg-transparent"},B={class:"card-body px-3 px-md-4"},M=a("div",{class:"heart3"},[a("i",{class:"bi bi-heart heart-click","data-heartStatus":"false"})],-1),F={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-8"},U={class:"d-flex mb-4"},z={class:"badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"},A={class:"row"},L={class:"col-8 col-md-8 my-2"},O={key:0},Q={class:"col-12 col-md-4"},Y={class:"d-flex flex-column"},G={class:"fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end"},H={class:"d-flex flex-md-column align-items-end justify-content-end justify-content-sm-between justify-content-md-end"},J=a("p",{class:"text-danger fw-bold d-none d-md-block"},"促銷價",-1),K={class:"d-sm-flex flex-sm-column d-none d-md-none"},R={key:0,class:"fs-7 fs-sm-6 text-dark2"},W={key:1,class:"fs-7 fs-sm-6 text-danger"},X={key:2,class:"fs-7 fs-sm-6 text-dark2"},Z={key:3,class:"fs-6 text-danger"},q={class:"fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger"},$={class:"col-12 d-none d-md-flex flex-md-column"},I={key:0,class:"fs-6 text-dark2"},tt={key:1,class:"fs-6 text-danger"},et={key:2,class:"fs-6 text-dark2"},st={key:3,class:"fs-6 text-danger"},at={class:"card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4"},nt={class:"d-flex align-items-end"},it=["onClick","disabled"],rt={key:0,class:"spinner-border spinner-grow-sm",role:"status"},ot={key:1,class:"btn btn-danger w-100 ms-2 px-2 px-md-3 py-2 disabled btn-danger-rounded",type:"button"},lt={"aria-label":"Page navigation example ",class:"my-10"},ct={class:"pagination justify-content-center"},dt=["value","onClick"],ht={class:"page-item"};function ut(s,t,o,d,n,l){const v=w("router-link");return r(),i(u,null,[(r(!0),i(u,null,_(n.serchTainan,e=>(r(),i("div",{class:"card mb-4 card-att",key:e.id},[a("div",T,[a("div",P,[a("span",E,c(e.category),1),a("div",S,[a("img",{src:e.imageUrl,class:"card-img-top img-fluid",alt:e.title},null,8,N)])]),a("div",j,[a("div",V,[a("div",B,[M,a("h4",F,c(e.title),1),a("div",U,[a("span",z,c(e.tag_2),1)]),a("div",A,[a("div",L,[(r(!0),i(u,null,_(n.newProductsDes,h=>(r(),i("div",{key:h.id},[h.id===e.id?(r(),i("div",O,[(r(!0),i(u,null,_(h.descriptions,x=>(r(),i("p",{key:x},c(l.truncateContent(x,85)),1))),128))])):k("",!0)]))),128))]),a("div",Q,[a("div",Y,[a("p",G," NT"+c(l.thousand(e.origin_price)),1),a("div",H,[J,a("div",K,[n.currentDate<=e.endDate?(r(),i("p",R," 預約："+c(e.startDate)+" ~ "+c(e.endDate),1)):(r(),i("p",W,"預約時間已截止")),n.currentDate<=e.endDate?(r(),i("p",X," 出遊："+c(e.goStartDate)+" ~ "+c(e.goEndDate),1)):(r(),i("p",Z,"已出遊完成"))]),a("p",q," NT"+c(l.thousand(e.price)),1)])])])]),a("div",$,[n.currentDate<=e.endDate?(r(),i("p",I," 預約時間："+c(e.startDate)+" ~ "+c(e.endDate),1)):(r(),i("p",tt,"預約時間已截止")),n.currentDate<=e.endDate?(r(),i("p",et," 出遊時間："+c(e.goStartDate)+" ~ "+c(e.goEndDate),1)):(r(),i("p",st,"已出遊完成"))])]),a("div",at,[a("div",nt,[y(v,{to:{name:"TouristSinglePackage",params:{category:e.category,title:e.title}},class:"btn-outline-square w-100 me-2 px-2 px-md-3",type:"button"},{default:D(()=>[m("行程介紹")]),_:2},1032,["to"]),n.currentDate<=e.endDate?(r(),i("a",{key:0,class:"btn-square w-100 ms-2 px-2 px-md-3",onClick:h=>l.addToCart(e.id,n.quantity,e.price),disabled:n.status.loadingItem===e.id,type:"button"},[n.status.loadingItem===e.id?(r(),i("span",rt)):k("",!0),m(" 預約套裝行程")],8,it)):(r(),i("a",ot,"預約時間截止"))])])])])])]))),128)),a("nav",lt,[a("ul",ct,[a("li",{class:f(["page-item",{disabled:!n.currentPage||n.currentPage===1}])},[a("a",{class:"page-link page-link-radius-2",href:"",onClick:t[0]||(t[0]=p(e=>l.searchProducts(n.currentPage-1),["prevent"]))},"上一頁")],2),(r(!0),i(u,null,_(n.pageTotal,e=>(r(),i("li",{class:"page-item",key:e+123},[a("a",{class:f(["page-link page-link-0 rounded-0",{active:e===n.currentPage}]),href:"",value:e,onClick:p(h=>l.searchProducts(e),["prevent"])},c(e),11,dt)]))),128)),a("li",ht,[a("a",{class:f(["page-link page-link-radius",{disabled:!n.currentPage||n.currentPage===n.pageTotal}]),href:"",onClick:t[1]||(t[1]=p(e=>l.searchProducts(n.currentPage+1),["prevent"]))},"下一頁",2)])])])],64)}const gt=b(C,[["render",ut]]);export{gt as default};
