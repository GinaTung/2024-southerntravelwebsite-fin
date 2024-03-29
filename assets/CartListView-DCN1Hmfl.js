import{C as v}from"./CartNavbar-twcb1HKo.js";import{M as k}from"./bootstrap.esm-1zZ__qA4.js";import{_ as x,o as i,c,a as t,t as u,d as _,b,j as f,F as C,h as w,w as y,g as M,r as m,f as $,i as L}from"./index-xBcrsHzS.js";const T={props:{userCarts:Array,deleteCart:Function,saveCartsDelModal:Object},data(){return{delModal:null}},methods:{openModal(){this.delModal.show()},closeModal(){this.delModal.hide()}},mounted(){this.delModal=new k(this.$refs.delCartModal)}},E={class:"modal fade",id:"delCartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"delCartModal"},N={class:"modal-dialog",role:"document"},P={class:"modal-content border-0"},V={class:"modal-header bg-danger text-white"},S={class:"modal-title"},B=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),F={class:"modal-body"},j={class:"text-danger me-2"},Q=t("br",null,null,-1),U={class:"text-primary"},A={class:"modal-footer"},q=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function G(a,e,l,o,s,d){return i(),c("div",E,[t("div",N,[t("div",P,[t("div",V,[t("h5",S,[t("span",null,"刪除購物車編號: "+u(l.saveCartsDelModal.cartId),1)]),B]),t("div",F,[_(" 是否刪除 "),t("strong",j,"預約行程名稱："+u(l.saveCartsDelModal.productTitle),1),Q,t("span",U,"預約數量："+u(l.saveCartsDelModal.qty)+"位",1),_("(刪除後將無法恢復)。 ")]),t("div",A,[q,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=r=>l.deleteCart(l.saveCartsDelModal.cartId,l.saveCartsDelModal.productTitle))},"確認刪除")])])])],512)}const z=x(T,[["render",G]]),h="https://two024-south-json-server-vercel.onrender.com",O={components:{CartNavbar:v,DelCartModal:z},data(){return{userId:"",products:[],enabledProducts:[],carts:[],userCarts:[],newCarts:[],saveCartsDelModal:{},cartsData:[],isCartProductsFetched:!1,isGetProductsTriggered:!1,isGetCartsTriggered:!1,quantity:"",cartIdData:[],resData:[],isLoading:!1,status:{loadingItem:!1,loadingItem2:"",loadingItem3:"",loadingItem4:""},cartsLength:0}},methods:{getCarts(){this.axios.get(`${h}/carts`).then(a=>{this.carts=a.data,this.carts.forEach(e=>{e.userId===this.userId&&(this.userCarts.push(e),console.log("4"))}),this.getProducts()}).catch(a=>{alert(`${a.message}`)})},getCart(){this.axios.get(`${h}/carts`).then(a=>{this.newCarts=a.data.filter(e=>e.userId===this.userId),this.newCarts.length===0?this.$emitter.emit("updateCartNum",0):this.$emitter.emit("updateCartNum",this.newCarts.length)}).catch(a=>{console.log(a),alert("取得購物車資料失敗")})},deleteCart(a,e){this.status.loadingItem3=a,this.status.loadingItem=!0,this.$refs.delModal.closeModal(),this.axios.delete(`${h}/carts/${a}`).then(l=>{this.status.loadingItem3="",this.cartsData=this.cartsData.filter(d=>d.id!==a);let o=0;this.cartsData.forEach(d=>{o+=d.final_total}),this.cartsData.total=o;let s=1;this.cartsData.final_total=o*s,this.status.loadingItem=!1,this.getCart()}).catch(l=>{console.log(l),this.status.loadingItem3="",alert("刪除購物車資料失敗"),this.status.loadingItem=!1})},openDelCartModal(a,e,l,o){Array.isArray(this.userCarts)||(this.userCarts=[]),this.saveCartsDelModal={cartId:l,productId:a,productTitle:e,qty:o},console.log("5"),this.$refs.delModal.openModal()},thousand(a){return a!==void 0&&(a=a.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${a}`},getProducts(){this.axios.get(`${h}/products`).then(a=>{this.products=a.data,this.products.forEach(o=>{o.is_enabled===1&&this.enabledProducts.push(o)});let e=0;this.userCarts.forEach(o=>{const s=o.productId,d=this.enabledProducts.find(r=>r.id===s);d&&(o.product=d,e+=o.final_total,this.cartsData.push(o))}),this.isLoading=!1,this.cartsData.total=e;let l=1;this.cartsData.final_total=e*l}).catch(a=>{this.isLoading=!1,alert(`${a.message}`)})},incrementQuantity(a,e,l){if(this.status.loadingItem2=a,e<10){e+=1;let o=1;this.axios.patch(`${h}/carts/${a}`,{qty:e,price:l,total:e*l,final_total:e*l*o}).then(s=>{this.status.loadingItem2="";const d=this.cartsData.findIndex(r=>r.id===a);if(d!==-1){this.cartsData[d].qty=e,this.cartsData[d].final_total=e*l*o;let r=0;this.cartsData.forEach(p=>{r+=p.final_total}),this.cartsData.total=r,this.cartsData.final_total=r*o}}).catch(s=>{console.log(s),alert("取得購物車資料失敗")})}else this.status.loadingItem2="",alert("預約人數上限為10人")},decrementQuantity(a,e,l){if(this.status.loadingItem4=a,e>1){e-=1;let o=1;this.axios.patch(`${h}/carts/${a}`,{qty:e,price:l,total:e*l,final_total:e*l*o}).then(s=>{this.status.loadingItem4="";const d=this.cartsData.findIndex(r=>r.id===a);if(d!==-1){this.cartsData[d].qty=e,this.cartsData[d].final_total=e*l*o;let r=0;this.cartsData.forEach(p=>{r+=p.final_total}),this.cartsData.total=r,this.cartsData.final_total=r*o}}).catch(s=>{this.status.loadingItem4="",alert("更新購物車資料失敗")})}},back(){this.$router.back()},getCookie(a){const e=document.cookie.split(";");for(let l of e){const[o,s]=l.trim().split("=");if(o===a)return s}return null},getCartSData(){this.axios.get(`${h}/cartsData`).then(a=>{this.cartIdData=a.data})},saveCartData(a,e){const l=this.cartIdData.some(s=>s.userId===this.userId&&s.status===!1);console.log(l);let o=0;this.cartIdData.forEach(s=>{s.userId===this.userId&&s.status===!1&&(o=s.id)}),l&&o!==0?this.axios.put(`${h}/cartsData/${o}`,{data:this.cartsData,total:e,final_total:a,status:!1,userId:this.userId,orderStatus:!1}).then(s=>{document.cookie=`cartDataId=${o}`,this.getCartSData()}).catch(s=>{alert("更新購物車資料失敗")}):this.axios.post(`${h}/cartsData`,{data:this.cartsData,total:e,final_total:a,status:!1,userId:this.userId,orderStatus:!1}).then(s=>{document.cookie=`cartDataId=${s.data.id}`,this.getCartSData()}).catch(s=>{alert("儲存購物車資料失敗")})}},mounted(){const a=this.getCookie("userId");this.userId=a*1,this.isLoading=!0,this.getCarts(),this.getCartSData(),window.scrollTo(0,0),console.log("length",this.userCarts.length)}},H={class:"container py-10 py-lg-30"},J={class:"row"},K={class:"col-md-6 mx-auto pb-5 pb-lg-15"},R={class:"table-responsive"},W={class:"table align-middle table-rwd"},X=t("tr",{class:"tr-only-hide"},[t("th",{style:{width:"100px"}}),t("th",{style:{width:"170px"}},"圖片"),t("th",{style:{width:"170px"}},"行程名稱"),t("th",{style:{width:"170px"}},"數量/單位"),t("th",{style:{width:"100px"},class:"text-end"},"單價"),t("th",{class:"text-end",style:{width:"100px"}},"小計")],-1),Y={key:0,class:"d-md-none"},Z=t("th",{style:{width:"80px"}},null,-1),tt=t("th",{style:{width:"170px"}},"圖片",-1),st=t("th",{style:{width:"170px"}},"行程名稱",-1),at=t("th",{style:{width:"170px"}},"數量/單位",-1),et=t("th",{style:{width:"100px"},class:"text-end"},"單價",-1),ot=t("th",{class:"text-end",style:{width:"100px"}},"小計",-1),lt=[Z,tt,st,at,et,ot],nt={key:0},dt=t("tr",null,[t("td",{colspan:"6",class:"text-center",style:{height:"150px"}},[t("div",{class:"spinner-border",role:"status",style:{width:"3rem",height:"3rem",color:"#43b8bd"}},[t("span",{class:"visually-hidden"},"Loading...")])])],-1),rt=[dt],it={key:0},ct=t("td",{colspan:"6",class:"text-center"},"購物車是空的",-1),ht=[ct],ut={"data-th":""},_t=["onClick"],pt=t("i",{class:"bi bi-x"},null,-1),gt={"data-th":"圖片",class:""},bt=["src","alt"],ft={"data-th":"行程名稱",class:"fs-6 pb-0 pb-md-2"},mt={class:"td-p-left"},Ct={class:"py-0 py-md-2"},Dt={class:"td-number-direction"},yt=t("span",{class:"fw-bold d-md-none fs-6"},"數量/單位",-1),xt={class:"input-group my-3 w-length"},It=["onClick"],vt={key:0,class:"spinner-border spinner-grow-sm",role:"status"},kt=t("i",{class:"bi bi-dash-lg"},null,-1),wt=["onClick"],Mt={key:0,class:"spinner-border spinner-grow-sm",role:"status"},$t=t("i",{class:"bi bi-trash"},null,-1),Lt=["disabled","onUpdate:modelValue"],Tt=["onClick"],Et={key:0,class:"spinner-border spinner-grow-sm",role:"status"},Nt=t("i",{class:"bi bi-plus-lg"},null,-1),Pt={"data-th":"單價",class:"text-end"},Vt={class:"td-p-left"},St={class:"text-end","data-th":"小計"},Bt={class:"td-p-left"},Ft={class:"tr-border-bottom-0"},jt={colspan:"6",class:"text-end text-success"},Qt=t("span",{class:"td-p-right"},"預約",-1),Ut={class:"tr-border-bottom-0"},At={colspan:"6",class:"text-end fs-5"},qt=t("span",{class:"td-p-right"},"總計 ",-1),Gt={class:"d-flex justify-content-between"},zt={key:0,class:"btn btn-danger mt-4 fs-5 w-50 w-md-25 disabled btn-danger-rounded",type:"button"};function Ot(a,e,l,o,s,d){const r=m("VueLoading"),p=m("CartNavbar"),D=m("router-link"),I=m("del-cart-modal");return i(),c(C,null,[b(r,{active:s.isLoading,class:"text-center","z-index":1060},null,8,["active"]),t("div",H,[t("div",J,[t("div",K,[b(p)])]),t("div",R,[t("table",W,[t("thead",null,[X,s.cartsData.length===0?(i(),c("tr",Y,lt)):f("",!0)]),s.status.loadingItem?(i(),c("tbody",nt,rt)):(i(),c(C,{key:1},[t("tbody",null,[s.cartsData.length===0?(i(),c("tr",it,ht)):(i(!0),c(C,{key:1},w(s.cartsData,n=>(i(),c("tr",{key:n.id},[t("td",ut,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:g=>d.openDelCartModal(n.productId,n.product.title,n.id,n.qty)},[pt,_("刪除 ")],8,_t)]),t("td",gt,[t("img",{src:n.product.imageUrl,alt:n.product.title,class:"img-fluid"},null,8,bt)]),t("td",ft,[t("span",mt,u(n.product.title),1)]),t("td",Ct,[t("div",Dt,[yt,t("div",xt,[n.qty>1?(i(),c("button",{key:0,class:"btn btn-outline-dark rounded-0 btn-sm",type:"button",onClick:g=>d.decrementQuantity(n.id,n.qty,n.price)},[s.status.loadingItem4===n.id?(i(),c("span",vt)):f("",!0),kt],8,It)):(i(),c("button",{key:1,type:"button",class:"btn btn-outline-danger rounded-0 btn-sm",onClick:g=>d.openDelCartModal(n.productId,n.product.title,n.id,n.qty)},[s.status.loadingItem3===n.id?(i(),c("span",Mt)):f("",!0),$t],8,wt)),$(t("input",{min:"1",max:"10",type:"number",disabled:n.qty>10,class:"form-control rounded-0 border border-dark d-flex","onUpdate:modelValue":g=>n.qty=g,readonly:"",style:{"text-align":"center"}},null,8,Lt),[[L,n.qty]]),t("button",{class:"btn btn-outline-dark rounded-0 btn-sm",type:"button",onClick:g=>d.incrementQuantity(n.id,n.qty,n.price)},[s.status.loadingItem2===n.id?(i(),c("span",Et)):f("",!0),Nt],8,Tt)])])]),t("td",Pt,[t("span",Vt,u(d.thousand(n.price)),1)]),t("td",St,[t("span",Bt,u(d.thousand(n.final_total)),1)])]))),128))]),t("tfoot",null,[t("tr",Ft,[t("td",jt,[Qt,_(" "+u(s.cartsData?s.cartsData.length:0)+" 項行程 ",1)])]),t("tr",Ut,[t("td",At,[qt,_(" "+u(s.cartsData&&s.cartsData.final_total!==void 0?d.thousand(s.cartsData.final_total):0)+" 元 ",1)])])])],64))])]),t("div",Gt,[b(D,{class:"btn-outline-square w-50 w-md-25 fs-5 mt-4 me-1",to:"/TouristPackage"},{default:y(()=>[_("繼續預約")]),_:1}),s.userCarts.length===0?(i(),c("button",zt," 請預約套裝行程 ")):(i(),M(D,{key:1,class:"btn-square mt-4 fs-5 w-50 w-md-25",to:"/cart/CartForm",onClick:e[0]||(e[0]=n=>d.saveCartData(s.cartsData.final_total,s.cartsData.total))},{default:y(()=>[_("下一步")]),_:1}))])]),b(I,{ref:"delModal","user-carts":s.userCarts,"delete-cart":d.deleteCart,"save-carts-del-modal":s.saveCartsDelModal},null,8,["user-carts","delete-cart","save-carts-del-modal"])],64)}const Rt=x(O,[["render",Ot]]);export{Rt as default};
