import{_ as r,a as e,b as s,d,w as _,F as h,u as m,f as p,r as u,o as c,e as f,v as o}from"./index-M6svoqu4.js";const i="http://localhost:3000",b={data(){return{attractions:[]}},methods:{checkAdmin(){this.axios.post(`${i}/users`).then(t=>{}).catch(t=>{alert(`${t.message}`)})},getAttractions(){this.axios.get(`${i}/attractions`).then(t=>{console.log(t),this.attractions=t.data}).catch(t=>{alert(`${t.message}`)})}},mounted(){this.getAttractions()}},v={class:"container py-10 py-lg-30"},g={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},x={class:"breadcrumb mb-0 fs-5"},k={class:"breadcrumb-item"},y=s("li",{class:"breadcrumb-item","aria-current":"page"},"南部旅遊景點",-1),w={class:"tourist-list"},N={class:"row"},$=p('<div class="col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex"><div class="border-info2 border-1 border w-100 rounded-1 h-100"><p class="fs-4 p-5 bg-primary-500 text-white">地區篩選</p><ul class="nav flex-column attractions-select"><li class="nav-item"><a class="nav-link p-5 fs-5 link-color d-flex justify-content-between" data-name="全部" aria-current="page" href="#">全部區域<span class="attractionsNum"></span></a></li><li class="nav-item"><a class="nav-link p-5 fs-5 link-color d-flex justify-content-between" href="#" data-name="嘉義">嘉義<span class="attractionsNum2"></span></a></li><li class="nav-item"><a class="nav-link p-5 fs-5 link-color d-flex justify-content-between" href="#" data-name="台南">台南<span class="attractionsNum2">0</span></a></li><li class="nav-item"><a class="nav-link p-5 fs-5 link-color d-flex justify-content-between" data-name="高雄">高雄<span class="attractionsNum2">0</span></a></li></ul></div></div>',1),j={class:"col-12 col-lg-9"},V={class:"row g-3"},A={class:"card card-att h-100"},B={class:"tag text-white"},C={class:"card-att-img"},F=["src"],S=s("div",{class:"heart3"},[s("i",{class:"bi bi-heart heart-click"})],-1),T={style:{transform:"rotate(0)"}},D={class:"card-body card-body-att"},E={class:"card-title d-flex justify-content-between align-items-center card-title-att"},L={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att"},q={class:"card-text card-font-truncate"},z=s("div",{class:"card-footer text-end border-0"},[s("a",{href:"#",class:"fs-5 stretched-link"},"more")],-1);function G(t,H,J,K,n,M){const l=u("router-link");return c(),e("div",v,[s("nav",g,[s("ol",x,[s("li",k,[d(l,{to:"/",class:"navbar-brand py-6"},{default:_(()=>[f(" 首頁 ")]),_:1})]),y])]),s("div",w,[s("div",N,[$,s("div",j,[s("div",V,[(c(!0),e(h,null,m(n.attractions,a=>(c(),e("div",{class:"col-4",key:a.id},[s("div",A,[s("span",B,o(a.author),1),s("div",C,[s("img",{src:a.image,class:"card-img-top img-fluid",alt:""},null,8,F)]),S,s("div",T,[s("div",D,[s("div",E,[s("h4",L,o(a.title),1)]),s("p",q,o(a.description),1)]),z])])]))),128))])])])])])}const P=r(b,[["render",G]]);export{P as default};
