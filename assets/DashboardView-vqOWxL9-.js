import{C as b}from"./bootstrap.esm-0LChJ0ku.js";import{A as k}from"./AdminSidebar-M-BCx-vg.js";import{s as c}from"./sweetAlert-6dSAurRP.js";import{_ as m,a as f,b as x,c as w}from"./logo-sm-8HbWJp6J.js";import{_ as C,c as d,a as e,b as r,w as i,h as I,F as N,r as h,o as l,d as p,p as L,f as y}from"./index-oxl5H5eR.js";const g="https://ec-course-api.hexschool.io/v2",A={components:{AdminSidebar:k},data(){return{user:{username:"",password:""},userIsLoggedIn:!1,token:"",navCollapse:null}},methods:{toggleNavbar(){this.$refs.navbar.classList.contains("show")?this.navCollapse.hide():this.navCollapse.show()},checkAdmin(){this.$emitter.on("loginCheck",a=>{this.userIsLoggedIn=a}),this.token&&this.axios.post(`${g}/api/user/check`).then(a=>{this.userIsLoggedIn=!0}).catch(()=>{this.userIsLoggedIn=!1,c.threeLayerCheckType("error","管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/AdminHome"})})},logout(){this.axios.post(`${g}/logout`).then(()=>{document.cookie="hexToken=; expires=",this.$router.push({path:"/"}),this.userIsLoggedIn=!1}).catch(()=>{c.threeLayerCheckType("error","管理者身分登出失敗，請稍後再點選登出按鈕")})}},mounted(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.checkAdmin(),this.navCollapse=new b(this.$refs.navbar,{toggle:!1})}},u=a=>(L("data-v-80b0545d"),a=a(),y(),a),$=m+" 1920w, "+f+" 960w, "+x+" 480w, "+w+" 375w",S={class:"navbar navbar-expand-lg navbar-light bg-light"},T={class:"container"},V=u(()=>e("img",{src:m,alt:"南部輕旅遊網站",style:{"aspect-ratio":"322 / 96",height:"48px"},srcset:$,sizes:`(max-width: 375px) 100vw, \r
         (max-width: 1920px) 50vw, \r
         960px`},null,-1)),B=u(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),z=[B],F={class:"collapse navbar-collapse",id:"navbarSupportedContent",ref:"navbar"},H={class:"navbar-nav ms-auto mb-2 mb-lg-0"};function R(a,s,D,E,v,t){const n=h("router-link"),_=h("RouterView");return l(),d(N,null,[e("nav",S,[e("div",T,[r(n,{to:"/admin/adminHome",class:"navbar-brand"},{default:i(()=>[V]),_:1}),e("button",{class:"navbar-toggler",type:"button","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:s[0]||(s[0]=(...o)=>t.toggleNavbar&&t.toggleNavbar(...o))},z),e("div",F,[e("ul",H,[e("li",{class:"nav-item",onClick:s[1]||(s[1]=(...o)=>t.toggleNavbar&&t.toggleNavbar(...o))},[r(n,{to:"/",class:"nav-link"},{default:i(()=>[p("回前台")]),_:1})]),e("li",{class:"nav-item",onClick:s[3]||(s[3]=(...o)=>t.toggleNavbar&&t.toggleNavbar(...o))},[v.userIsLoggedIn===!1?(l(),I(n,{key:0,to:"/admin/adminlogin",class:"nav-link"},{default:i(()=>[p("管理者登入")]),_:1})):(l(),d("a",{key:1,class:"nav-link",onClick:s[2]||(s[2]=o=>t.logout())},"登出"))])])],512)])]),r(_)],64)}const M=C(A,[["render",R],["__scopeId","data-v-80b0545d"]]);export{M as default};
