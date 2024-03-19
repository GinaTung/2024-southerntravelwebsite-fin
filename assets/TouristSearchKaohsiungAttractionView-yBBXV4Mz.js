import{_ as v,c as o,a as e,F as h,h as f,n as u,A as g,o as l,t as d,b as k,w as x,d as y,r as b}from"./index-8CZ7-rvQ.js";const P="https://two024-south-json-server-vercel.onrender.com",C={data(){return{attractions:[],searchKaohsiung:[],pageTotal:0,currentPage:1,limitPage:6,parsedLinks:""}},methods:{truncateContent(r,s){return r&&r.length>s?r.substring(0,s)+"...":r},searchAttractions(r=1){this.axios.get(`${P}/attractions?category=高雄&_limit=${this.limitPage}&_page=${r}`).then(s=>{var n=parseInt(s.headers["x-total-count"]);this.pageTotal=Math.ceil(n/this.limitPage),this.currentPage=r,this.attractions=s.data,this.searchKaohsiung=[],this.attractions.forEach(i=>{i.is_enabled===1&&this.searchKaohsiung.push(i)})}).catch(s=>{alert(`${s.message}`)})},parseLinkHeader(r){const s=r.split(", "),n={};return s.forEach(i=>{const[a,c]=i.split("; "),p=/<(.*)>/.exec(a)[1],m=/rel="(.*)"/.exec(c)[1];n[m]=p}),n}},mounted(){this.searchAttractions()}},w={class:"row g-3"},A={class:"card card-att h-100"},T={class:"tag text-white"},M={class:"card-att-img"},K=["src"],R=e("div",{class:"heart3"},[e("i",{class:"bi bi-heart heart-click"})],-1),V={style:{transform:"rotate(0)"}},j={class:"card-body card-body-att"},B={class:"card-title d-flex justify-content-between align-items-center card-title-att"},E={class:"fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att"},L={class:"card-text card-font-truncate"},N={class:"card-footer text-end border-0"},S={"aria-label":"Page navigation example ",class:"my-10"},F={class:"pagination justify-content-center"},U=["value","onClick"],z={class:"page-item"};function D(r,s,n,i,a,c){const _=b("router-link");return l(),o(h,null,[e("div",w,[(l(!0),o(h,null,f(a.searchKaohsiung,t=>(l(),o("div",{class:"col-12 col-md-6 col-lg-4",key:t.id},[e("div",A,[e("span",T,d(t.category),1),e("div",M,[e("img",{src:t.imageUrl,class:"img-fluid",alt:""},null,8,K)]),R,e("div",V,[e("div",j,[e("div",B,[e("h4",E,d(t.title),1)]),e("p",L,d(c.truncateContent(t.description,53)),1)]),e("div",N,[k(_,{to:{name:"TouristSingleAttraction",params:{category:t.category,title:t.title}},class:"fs-5 stretched-link",type:"button"},{default:x(()=>[y("more")]),_:2},1032,["to"])])])])]))),128))]),e("nav",S,[e("ul",F,[e("li",{class:u(["page-item",{disabled:!a.currentPage||a.currentPage===1}])},[e("a",{class:"page-link page-link-radius-2",href:"",onClick:s[0]||(s[0]=g(t=>c.searchAttractions(a.currentPage-1),["prevent"]))},"上一頁")],2),(l(!0),o(h,null,f(a.pageTotal,t=>(l(),o("li",{class:"page-item",key:t+123},[e("a",{class:u(["page-link page-link-0 rounded-0",{active:t===a.currentPage}]),href:"",value:t,onClick:g(p=>c.searchAttractions(t),["prevent"])},d(t),11,U)]))),128)),e("li",z,[e("a",{class:u(["page-link page-link-radius",{disabled:!a.currentPage||a.currentPage===a.pageTotal}]),href:"",onClick:s[1]||(s[1]=g(t=>c.searchAttractions(a.currentPage+1),["prevent"]))},"下一頁",2)])])])],64)}const J=v(C,[["render",D]]);export{J as default};
