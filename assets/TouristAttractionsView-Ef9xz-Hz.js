import{_,c as u,a as t,b as e,w as n,r as h,o as b,d as i,x as r}from"./index-BzeQhHl-.js";const l="https://two024-south-json-server-vercel.onrender.com",f={data(){return{attractions:[],enabledAttractions:[],searchChiayi:[],serchTainan:[],searchKaohsiung:[]}},methods:{getAttractions(){this.axios.get(`${l}/attractions`).then(s=>{this.attractions=s.data,this.attractions.forEach(a=>{a.is_enabled===1&&this.enabledAttractions.push(a)})}).catch(s=>{alert(`${s.message}`)})},searchAttractions(){this.axios.get(`${l}/attractions?category=嘉義`).then(s=>{this.attractions=s.data,this.attractions.forEach(a=>{a.is_enabled===1&&this.searchChiayi.push(a)})}).catch(s=>{alert(`${s.message}`)}),this.axios.get(`${l}/attractions?category=台南`).then(s=>{this.attractions=s.data,this.attractions.forEach(a=>{a.is_enabled===1&&this.serchTainan.push(a)})}).catch(s=>{alert(`${s.message}`)}),this.axios.get(`${l}/attractions?category=高雄`).then(s=>{this.attractions=s.data,this.attractions.forEach(a=>{a.is_enabled===1&&this.searchKaohsiung.push(a)})}).catch(s=>{alert(`${s.message}`)})}},mounted(){this.getAttractions(),this.searchAttractions()}},p={class:"container py-10 py-lg-30"},m={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb",class:"pb-5 pb-lg-15"},g={class:"breadcrumb mb-0 fs-5"},v={class:"breadcrumb-item"},x=t("li",{class:"breadcrumb-item","aria-current":"page"},"南部旅遊景點",-1),y={class:"tourist-list"},w={class:"row"},k={class:"col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex"},A={class:"border-info2 border-1 border w-100 rounded-1 h-100"},T=t("p",{class:"fs-4 p-5 bg-primary-500 text-white"},"地區篩選",-1),$={class:"nav flex-column attractions-select"},C={class:"nav-item"},j={class:""},E={class:"nav-item"},K={class:""},V={class:"nav-item"},B={class:""},N={class:"nav-item"},D={class:""},S={class:"col-12 col-lg-9"};function q(s,a,z,F,c,G){const o=h("router-link"),d=h("router-view");return b(),u("div",p,[t("nav",m,[t("ol",g,[t("li",v,[e(o,{to:"/",class:"navbar-brand py-6"},{default:n(()=>[i(" 首頁 ")]),_:1})]),x])]),t("div",y,[t("div",w,[t("div",k,[t("div",A,[T,t("ul",$,[t("li",C,[e(o,{class:"nav-link p-5 fs-5 link-color d-flex justify-content-between","data-name":"全部","aria-current":"page",to:"/TouristAttractions/all"},{default:n(()=>[i("全部區域"),t("span",j,r(c.enabledAttractions.length),1)]),_:1})]),t("li",E,[e(o,{class:"nav-link p-5 fs-5 link-color d-flex justify-content-between",to:"/TouristAttractions/searchChiayi","data-name":"嘉義"},{default:n(()=>[i("嘉義"),t("span",K,r(c.searchChiayi.length),1)]),_:1})]),t("li",V,[e(o,{class:"nav-link p-5 fs-5 link-color d-flex justify-content-between",to:"/TouristAttractions/searchTainan","data-name":"台南"},{default:n(()=>[i("台南"),t("span",B,r(c.serchTainan.length),1)]),_:1})]),t("li",N,[e(o,{class:"nav-link p-5 fs-5 link-color d-flex justify-content-between",to:"/TouristAttractions/searchKaohsiung","data-name":"高雄"},{default:n(()=>[i("高雄"),t("span",D,r(c.searchKaohsiung.length),1)]),_:1})])])])]),t("div",S,[e(d)])])])])}const I=_(f,[["render",q]]);export{I as default};
