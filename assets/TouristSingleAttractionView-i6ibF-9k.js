import{_ as w,c as o,a as t,b as g,w as b,s as y,z as m,x as d,F as _,t as h,r as T,o as e,d as f}from"./index-BzeQhHl-.js";const x="https://two024-south-json-server-vercel.onrender.com",k={data(){return{category:"",attractionTitle:"",attractions:[],enabledAttractions:[],newAttractionsContent:"",newAttractionsTimeOpen:""}},methods:{getAttractions(){this.axios.get(`${x}/attractions`).then(i=>{this.attractions=i.data,this.attractions.forEach(s=>{s.is_enabled===1&&this.attractionTitle===s.title&&this.enabledAttractions.push(s)}),this.getNewText(),this.getnewAttractionsTimeOpen()}).catch(i=>{alert(`${i.message}`)})},getNewText(){const i={};this.attractions.forEach(s=>{s.content&&s.content.split(";").forEach(p=>{const r=p.trim();i[s.id]||(i[s.id]=[]),i[s.id].push(r)})}),this.newProductsContent=Object.entries(i).map(([s,l])=>({id:s,content:l}))},getnewAttractionsTimeOpen(){const i={};this.attractions.forEach(s=>{s.content&&s.timeOpen.split(";").forEach(p=>{const r=p.trim();i[s.id]||(i[s.id]=[]),i[s.id].push(r)})}),this.newAttractionsTimeOpen=Object.entries(i).map(([s,l])=>({id:s,content:l}))}},mounted(){this.category=this.$route.params.category,this.attractionTitle=this.$route.params.title,this.getAttractions()}},A={class:"container py-10 py-lg-30"},j={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},C={class:"breadcrumb mb-0 fs-5"},E={class:"breadcrumb-item"},N={class:"breadcrumb-item"},O={class:"breadcrumb-item"},V={class:"breadcrumb-item"},B={class:"intr-title d-flex align-items-center mb-4 fs-3 border-start border-primary-500 border-3"},z={class:"fs-3 me-2 fw-bold ps-3"},D={class:"fs-3 me-4 fw-bold"},M=t("div",{class:"heart4"},[t("i",{class:"bi bi-heart"})],-1),F={key:0},P={class:"col-12 d-flex justify-content-between"},S={class:"col-12 col-lg-8 pe-2"},U=["src"],K={class:"col-4 d-lg-flex flex-column justify-content-between ps-1 d-none"},L=["src"],q={class:"tourist-intr-content my-lg-10 my-5"},G={class:"mb-8"},H=t("p",{class:"fs-5 fs-md-4 fw-bold mb-4"},"景點介紹",-1),I={class:"fs-6 fs-md-5"},J={class:"mb-8"},Q=t("span",{class:"fs-5 fs-md-4 mb-4 fw-bold"},"開放時間：",-1),R={key:0},W=t("p",{class:"fs-5 fs-md-4 mb-3 fw-bold"},"交通資訊：",-1),X={class:"row"},Y={class:"d-flex col-12 col-lg-7 justify-content-between flex-column"},Z={key:0},$={class:"col-12 col-lg-5"},tt=["src"];function st(i,s,l,p,r,et){const u=T("router-link");return e(),o("div",A,[t("nav",j,[t("ol",C,[t("li",E,[g(u,{to:"/",class:"navbar-brand py-6"},{default:b(()=>[f("首頁")]),_:1})]),t("li",N,[g(u,{to:"/TouristAttractions",class:"navbar-brand py-6"},{default:b(()=>[f(" 南部旅遊景點 ")]),_:1})]),t("li",O,[r.category==="台南"?(e(),y(u,{key:0,to:"/TouristAttractions/searchTainan",class:"navbar-brand py-6"},{default:b(()=>[f("台南")]),_:1})):r.category==="嘉義"?(e(),y(u,{key:1,to:"/TouristAttractions/searchChiayi",class:"navbar-brand py-6"},{default:b(()=>[f("嘉義")]),_:1})):r.category==="高雄"?(e(),y(u,{key:2,to:"/TouristAttractions/searchKaohsiung",class:"navbar-brand py-6"},{default:b(()=>[f("高雄")]),_:1})):m("",!0)]),t("li",V,d(r.attractionTitle),1)])]),t("div",B,[t("span",z,d(r.category),1),t("p",D,d(r.attractionTitle),1),M]),(e(!0),o(_,null,h(r.enabledAttractions,(c,v)=>(e(),o("div",{class:"row g-3",key:c.id},[v===0?(e(),o("div",F,[t("div",P,[t("div",S,[t("img",{src:c.imageUrl,alt:"高跟鞋教堂",class:"img-fluid w-100 img-size-height",style:{"object-fit":"cover"}},null,8,U)]),t("div",K,[(e(!0),o(_,null,h(c.imagesUrl,(n,a)=>(e(),o("div",{class:"border",key:a+1213},[t("img",{src:n,class:"img-fluid w-100",alt:"",style:{"object-fit":"cover",height:"180px"}},null,8,L)]))),128))])]),t("div",q,[t("div",G,[H,t("p",I,d(c.description),1)]),t("div",J,[Q,(e(!0),o(_,null,h(r.newAttractionsTimeOpen,n=>(e(),o("div",{key:n.id},[n.id===c.id?(e(),o("div",R,[(e(!0),o(_,null,h(n.content,a=>(e(),o("p",{key:a+123,class:"fs-6 fs-md-5 my-4"},d(a),1))),128))])):m("",!0)]))),128))]),t("div",null,[W,t("div",X,[t("div",Y,[(e(!0),o(_,null,h(i.newProductsContent,n=>(e(),o("div",{key:n.id},[n.id===c.id?(e(),o("div",Z,[(e(!0),o(_,null,h(n.content,a=>(e(),o("p",{key:a,class:"fs-6 fs-md-5 my-4 mb-4"},d(a),1))),128))])):m("",!0)]))),128))]),t("div",$,[t("iframe",{src:c.imgMap,width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,8,tt)])])])])])):m("",!0)]))),128))])}const it=w(k,[["render",st]]);export{it as default};
