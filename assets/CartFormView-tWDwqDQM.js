import{U as I}from"./UserProductModal-ZVK7O5ik.js";import{C as D}from"./CartNavbar-DDgxUZiB.js";import{C as y}from"./collapse-v9CPlyH7.js";import{_ as C,c,a as t,b as m,d as f,t as u,f as i,v as x,F as _,h as k,i as n,B as w,r as g,o as h}from"./index-3MCp_Jag.js";const p="https://two024-south-json-server-vercel.onrender.com",M={components:{CartNavbar:D,UserProductModal:I},data(){return{cartsData:[],userCart:[],userId:"",isOpen:!1,headerCollapse:{},order:{},user:{name:"",email:"",tel:"",address:"",birthday:"",comment:"",shippingMethod:""},shippingMethod:["超商取貨","宅配"],total:0,productId:"",productTitle:"",cartDataId:"",ordersData:[]}},watch:{$route(){this.headerCollapse.hide()}},methods:{backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},forId(a,s){this.productId=a,this.productTitle=s,this.$refs.userProductModal.openModal()},getCart(){this.axios.get(`${p}/cartsData`).then(a=>{this.cartsData=a.data,this.cartsData.forEach(s=>{this.cartDataId=s.id,s.status===!1&&s.data.forEach(l=>{l.userId===this.userId&&this.userCart.push(l)})}),this.userCart.forEach(s=>{this.total+=s.final_total}),console.log(this.cartDataId)}).catch(a=>{console.log(a)})},getCookie(a){const s=document.cookie.split(";");for(let l of s){const[r,o]=l.trim().split("=");if(r===a)return o}return null},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},getOderData(){this.axios.get(`${p}/order`).then(a=>{this.ordersData=a.data}).catch(a=>{console.log(a)})},orderData(){console.log(`Successfully deleted cart with ID: ${this.cartDataId}`);const a=this.ordersData.some(l=>l.user.cartDataId===this.cartDataId&&l.user.status===!1);console.log(this.cartDataId);let s=0;if(this.ordersData.forEach(l=>{l.user.cartDataId===this.cartDataId&&l.user.status===!1&&(s=l.id)}),a){const l={name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.address,birthday:this.user.birthday,comment:this.user.comment,shippingMethod:this.user.shippingMethod,userId:this.userId,cartDataId:this.cartDataId,status:!1};this.axios.put(`${p}/order/${s}`,{user:l}).then(r=>{this.order=r.data}).catch(r=>{console.log(r)})}else{const l={name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.address,birthday:this.user.birthday,comment:this.user.comment,shippingMethod:this.user.shippingMethod,userId:this.userId,cartDataId:this.cartDataId,status:!1};this.axios.post(`${p}/order`,{user:l}).then(r=>{this.order=r.data}).catch(r=>{console.log(r)})}}},mounted(){const a=this.getCookie("userId");this.getCookie("cartDataId"),this.userId=a*1,this.getCart(),this.getOderData(),this.headerCollapse=new y(this.$refs.headerCollapse,{toggle:!1})}},U={class:"container py-10 py-lg-30"},E={class:"row"},T={class:"col-md-6 mx-auto pb-5 pb-lg-15"},V={class:"mb-4"},O={class:"d-grid gap-2"},P=t("br",null,null,-1),S={key:0,class:"bi bi-chevron-down"},N={key:1,class:"bi bi-chevron-up"},B={class:"collapse",id:"collapseExample",ref:"headerCollapse"},F={class:"card card-body rounded-0"},j={class:"col-12 col-md-5 col-lg-4"},q=["src","alt"],L={class:"col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between"},A={class:"mt-4 mt-md-0 mb-4"},z={class:"mb-4"},G={class:"mb-4"},H={class:"mb-4"},J=["onClick"],K={class:"row"},Q={class:"col-12 col-md-6 mb-4"},R=t("h3",{class:"mb-4"},"訂單資料",-1),W={class:"form-floating mb-4"},X=t("label",{for:"floatingInput"},"姓名",-1),Y={class:"form-floating mb-4"},Z=t("label",{for:"floatingTel"},"電話",-1),$={class:"form-floating mb-4"},tt=t("label",{for:"floatingEmail"},"電子郵件",-1),st={class:"form-floating mb-4"},et=t("label",{for:"floatingDate"},"生日",-1),ot={class:"form-floating"},at=t("label",{for:"floatingTextarea2"},"備註",-1),lt={class:"col-12 col-md-6 mb-4"},rt=t("h3",{class:"mb-4"},"運送資料",-1),dt={class:"form-floating mb-4"},it=t("option",{selected:"",value:"",disabled:""},"選擇運送方式",-1),nt=t("option",{value:"超商取貨"},"超商取貨",-1),ct=t("option",{value:"宅配"},"宅配",-1),ut=[it,nt,ct],ht=t("label",{for:"floatingSelect"},"運送方式",-1),pt={class:"form-floating mb-4"},mt=t("label",{for:"floatingAddress"},"住址",-1),ft={class:"d-flex justify-content-between"},_t={class:"w-100 w-md-50 d-flex"};function gt(a,s,l,r,o,d){const b=g("CartNavbar"),v=g("UserProductModal");return h(),c(_,null,[t("div",U,[t("div",E,[t("div",T,[m(b)])]),t("div",V,[t("p",O,[t("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:s[0]||(s[0]=(...e)=>d.toggleOpen&&d.toggleOpen(...e))},[f(" 總計："+u(d.thousand(o.total))+"元",1),P,f("購買清單 "),o.isOpen===!1?(h(),c("i",S)):(h(),c("i",N))])]),i(t("div",B,[t("div",F,[(h(!0),c(_,null,k(o.userCart,e=>(h(),c("div",{class:"row p-4 p-md-10",key:e.id},[t("div",j,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-fluid h-100"},null,8,q)]),t("div",L,[t("div",null,[t("h4",A,"套裝行程名稱："+u(e.product.title),1),t("h5",z,"單價："+u(d.thousand(e.product.price)),1),t("h5",G,"預約數量："+u(e.qty)+" 位",1),t("h5",H,"總計："+u(d.thousand(e.final_total)),1)]),t("div",null,[t("button",{type:"button",class:"btn-turquoise border-0 rounded-1",onClick:bt=>d.forId(e.product.id,e.product.title)}," 查看更多 ",8,J)])])]))),128))])],512),[[x,o.isOpen]])]),t("div",K,[t("div",Q,[R,t("div",W,[i(t("input",{type:"text",class:"form-control rounded-1",id:"floatingInput",placeholder:"王小明","onUpdate:modelValue":s[1]||(s[1]=e=>o.user.name=e)},null,512),[[n,o.user.name]]),X]),t("div",Y,[i(t("input",{type:"tel",class:"form-control rounded-1",id:"floatingTel",placeholder:"tel","onUpdate:modelValue":s[2]||(s[2]=e=>o.user.tel=e)},null,512),[[n,o.user.tel]]),Z]),t("div",$,[i(t("input",{type:"email",class:"form-control rounded-1",id:"floatingEmail",placeholder:"name@example.com","onUpdate:modelValue":s[3]||(s[3]=e=>o.user.email=e)},null,512),[[n,o.user.email]]),tt]),t("div",st,[i(t("input",{type:"date",class:"form-control rounded-1",id:"floatingDate",placeholder:"2024/03/08","onUpdate:modelValue":s[4]||(s[4]=e=>o.user.birthday=e)},null,512),[[n,o.user.birthday]]),et]),t("div",ot,[i(t("textarea",{class:"form-control rounded-1",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"},"onUpdate:modelValue":s[5]||(s[5]=e=>o.user.comment=e)},null,512),[[n,o.user.comment]]),at])]),t("div",lt,[rt,t("div",dt,[i(t("select",{"onUpdate:modelValue":s[6]||(s[6]=e=>o.user.shippingMethod=e),class:"form-select rounded-1",id:"floatingSelect","aria-label":"Floating label select example"},ut,512),[[w,o.user.shippingMethod]]),ht]),t("div",pt,[i(t("input",{type:"text",class:"form-control rounded-1",id:"floatingAddress",placeholder:"縣市鄉鎮市區","onUpdate:modelValue":s[7]||(s[7]=e=>o.user.address=e)},null,512),[[n,o.user.address]]),mt])])]),t("div",ft,[t("div",_t,[t("a",{class:"btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1",onClick:s[8]||(s[8]=(...e)=>d.backPage&&d.backPage(...e)),type:"button"},"上一步"),t("a",{class:"btn-square mt-4 fs-5 w-50 w-md-25",type:"button",href:"#/cart/payList",onClick:s[9]||(s[9]=(...e)=>d.orderData&&d.orderData(...e))},"下一步")])])]),m(v,{ref:"userProductModal",userCart:o.userCart,productId:o.productId,productTitle:o.productTitle},null,8,["userCart","productId","productTitle"])],64)}const Ct=C(M,[["render",gt]]);export{Ct as default};
