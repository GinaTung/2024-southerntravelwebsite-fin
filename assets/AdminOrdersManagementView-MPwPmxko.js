import{M as P}from"./bootstrap.esm-OMHeBMGo.js";import{s as p}from"./sweetAlert-MsE6Jbuo.js";import{_ as L,o as s,c as r,b as O,a as e,t as n,k as b,F as _,h as m,d as k,j as v,J as x,r as M,n as S,q as C,p as V,f as I}from"./index-EHctanNP.js";const j="https://two024-south-json-server-vercel.onrender.com",E={props:{order:{type:Object},ordersDate:{type:Array},updatePaid:{type:Function},getOrders:{type:Function}},data(){return{orderModal:null,tempOrder:{},isLoading:!1}},methods:{isCheckout(){p.twoLayerCheckType("已收到款項時，請更新付款狀態")},openModal(){this.isCheckout(),this.orderModal.show()},closeModal(){this.orderModal.hide()},thousand(o){return o!==void 0&&(o=o.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${o}`},updateOrderStatue(o){this.isLoading=!0;const i={status:o.user.status,...o.user};this.axios.patch(`${j}/orders/${o.id}`,{user:i,billStatus:o.billStatus,checkDataStatus:o.checkDataStatus,status:o.status}).then(a=>{this.getOrders(),this.isLoading=!1,this.orderModal.hide(),p.threeLayerCheckType("success","更新訂單狀態")}).catch(a=>{p.threeLayerCheckType("error",`${a.message}`)})}},watch:{order(){this.tempOrder=this.order}},mounted(){this.orderModal=new P(this.$refs.orderModal)}},U={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"orderModal"},q={class:"modal-dialog modal-xl"},N={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},F={class:"modal-title",id:"exampleModalLabel"},A=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),z={class:"modal-body"},$={class:"row"},J={class:"col-md-4"},G=e("h3",null,"用戶資料",-1),H={class:"table"},K={key:0},Q=e("th",{style:{width:"100px"}},"主要聯繫人",-1),R=e("th",null,"身分證字號",-1),W=e("th",null,"護照號碼",-1),X=e("th",null,"Email",-1),Y=e("th",null,"電話",-1),Z=e("th",null,"地址",-1),ee={class:"col-md-8"},te=e("h3",null,"訂單細節",-1),se={class:"table"},re=e("th",{style:{width:"100px"}},"訂單編號",-1),oe=e("th",null,"下單時間",-1),le={key:0},de=e("th",null,"付款時間",-1),ne={key:0},ae={key:1},ce=e("th",null,"付款狀態",-1),ie={key:0,class:"text-success"},ue={key:1,class:"text-muted"},he=e("th",null,"總金額",-1),_e=e("h3",{class:"mb-3"},"選購商品",-1),pe={class:"table"},me=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"行程名稱"),e("th",{scope:"col"},"預約數量"),e("th",{scope:"col"},"金額")])],-1),ye={class:"d-flex justify-content-start"},be={key:0,class:"me-10"},ke={key:0,class:"text-primary-emphasis"},ge={key:1,class:"text-primary"},fe={key:2,class:"text-warning"},Oe={key:3,class:"text-danger"},ve={key:4,class:"text-success"},xe={key:1},Me={class:"form-check me-4"},Se={class:"form-check-label",for:"flexCheckDefault2"},Ce={key:0},Le={key:1},De={class:"form-check me-4"},we={class:"form-check-label",for:"flexCheckDefault3"},Pe={key:0},Te={key:1},Ve={class:"form-check me-4"},Ie={class:"form-check-label",for:"flexCheckDefault4"},je={key:0},Ee={key:1},Ue={key:2},qe=e("span",{class:"text-danger"},"已收到款項時，請更新付款狀態",-1),Ne=[qe],Be={class:"modal-footer"},Fe=e("button",{type:"button",class:"btn btn-outline-secondary px-6 py-2","data-bs-dismiss":"modal"}," 取消 ",-1);function Ae(o,d,i,a,t,c){var g;const y=M("VueLoading");return s(),r(_,null,[O(y,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",U,[e("div",q,[e("div",N,[e("div",B,[e("h5",F,[e("span",null,"訂單細節(目前查看訂單編號："+n(t.tempOrder.id)+")",1)]),A]),e("div",z,[e("div",$,[e("div",J,[G,e("table",H,[t.tempOrder.user?(s(),r("tbody",K,[e("tr",null,[Q,e("td",null,n(t.tempOrder.user.name)+" "+n(t.tempOrder.user.appellation),1)]),e("tr",null,[R,e("td",null,n(t.tempOrder.user.memberId),1)]),e("tr",null,[W,e("td",null,n(t.tempOrder.user.passport),1)]),e("tr",null,[X,e("td",null,n(t.tempOrder.user.email),1)]),e("tr",null,[Y,e("td",null,n(t.tempOrder.user.tel),1)]),e("tr",null,[Z,e("td",null,n(t.tempOrder.user.address),1)])])):b("",!0)])]),e("div",ee,[te,e("table",se,[e("tbody",null,[e("tr",null,[re,e("td",null,n(t.tempOrder.id),1)]),e("tr",null,[oe,t.tempOrder.user?(s(),r("td",le,n(t.tempOrder.user.create_at),1)):b("",!0)]),e("tr",null,[de,e("td",null,[t.tempOrder.paid_date?(s(),r("span",ne,n(t.tempOrder.paid_date),1)):(s(),r("span",ae,"時間不正確"))])]),e("tr",null,[ce,e("td",null,[(g=t.tempOrder.user)!=null&&g.status?(s(),r("strong",ie,"已付款")):(s(),r("span",ue,"尚未付款"))])]),e("tr",null,[he,e("td",null,[(s(!0),r(_,null,m(t.tempOrder.product,h=>(s(),r(_,{key:h.id},[k(n(c.thousand(h.final_total)),1)],64))),128))])])])]),_e,e("table",pe,[me,e("tbody",null,[(s(!0),r(_,null,m(t.tempOrder.product,(h,l)=>(s(),r(_,{key:l+123},[(s(!0),r(_,null,m(h.products,u=>(s(),r("tr",{key:u.id},[e("th",null,n(u.title),1),e("td",null,"預約 "+n(u.qty)+" / 位",1),e("td",null,n(c.thousand(u.final_total)),1)]))),128))],64))),128))])]),e("div",ye,[t.tempOrder.user?(s(),r("div",be,[k(" 目前訂單狀態 : "),!t.tempOrder.status&&!t.tempOrder.billStatus&&!t.tempOrder.checkDataStatus&&!t.tempOrder.user.status?(s(),r("span",ke," 訂單處理中 ")):!t.tempOrder.status&&!t.tempOrder.billStatus&&!t.tempOrder.checkDataStatus&&t.tempOrder.user.status?(s(),r("span",ge," 確認出遊資料中 ")):!t.tempOrder.status&&!t.tempOrder.billStatus&&t.tempOrder.checkDataStatus&&t.tempOrder.user.status?(s(),r("span",fe," 發票開立中 ")):!t.tempOrder.status&&t.tempOrder.billStatus&&t.tempOrder.checkDataStatus&&t.tempOrder.user.status?(s(),r("span",Oe," 訂單即將完成，準備出遊 ")):(s(),r("span",ve,"已出遊結束"))])):b("",!0),t.tempOrder.user&&t.tempOrder.user.status===!0?(s(),r("div",xe,[e("div",Me,[v(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2","onUpdate:modelValue":d[0]||(d[0]=h=>t.tempOrder.checkDataStatus=h)},null,512),[[x,t.tempOrder.checkDataStatus]]),e("label",Se,[t.tempOrder.checkDataStatus?(s(),r("span",Ce,"已確認出遊資料完成")):(s(),r("span",Le,"未確認出遊資料"))])]),e("div",De,[v(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault3","onUpdate:modelValue":d[1]||(d[1]=h=>t.tempOrder.billStatus=h)},null,512),[[x,t.tempOrder.billStatus]]),e("label",we,[t.tempOrder.billStatus?(s(),r("span",Pe,"已開立發票")):(s(),r("span",Te,"未開立發票"))])]),e("div",Ve,[v(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault4","onUpdate:modelValue":d[2]||(d[2]=h=>t.tempOrder.status=h)},null,512),[[x,t.tempOrder.status]]),e("label",Ie,[t.tempOrder.status?(s(),r("span",je,"出遊結束")):(s(),r("span",Ee,"最後確認訂單資料"))])])])):(s(),r("div",Ue,Ne))])])])]),e("div",Be,[Fe,e("button",{type:"button",class:"btn-turquoise",onClick:d[3]||(d[3]=h=>c.updateOrderStatue(t.tempOrder))}," 修改付款狀態 ")])])])],512)],64)}const ze=L(E,[["render",Ae]]),$e={props:{item:Object,delOrder:Function},data(){return{delModal:null,tempOrder:{}}},methods:{openModal(){this.delModal.show()},closeModal(){this.delModal.hide()}},mounted(){this.delModal=new P(this.$refs.delorderModal)}},Je={class:"modal fade",id:"delorderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"delorderModal"},Ge={class:"modal-dialog",role:"document"},He={class:"modal-content border-0"},Ke={class:"modal-header bg-danger text-white"},Qe={class:"modal-title"},Re=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),We={key:0,class:"modal-body"},Xe={class:"text-danger me-2"},Ye={class:"text-primary"},Ze={class:"modal-footer"},et=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function tt(o,d,i,a,t,c){return s(),r("div",Je,[e("div",Ge,[e("div",He,[e("div",Ke,[e("h5",Qe,[e("span",null,"刪除訂單編號: "+n(i.item.id),1)]),Re]),i.item.user?(s(),r("div",We,[k(" 是否刪除 "),e("strong",Xe,"訂單編號："+n(i.item.id),1),e("span",Ye,"客戶："+n(i.item.user.name),1),k("(刪除後將無法恢復)。 ")])):b("",!0),e("div",Ze,[et,e("button",{type:"button",class:"btn btn-danger",onClick:d[0]||(d[0]=(...y)=>i.delOrder&&i.delOrder(...y))},"確認刪除")])])])],512)}const st=L($e,[["render",tt]]),f="https://two024-south-json-server-vercel.onrender.com",rt={components:{OrderModal:ze,DelOrderModal:st},data(){return{orders:[],isNew:!1,pageTotal:0,currentPage:1,limitPage:10,isLoading:!1,tempOrder:{},orderModal:null,delModal:null}},methods:{thousand(o){return o!==void 0&&(o=o.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${o}`},getOrders(o=1){this.isLoading=!0,this.axios.get(`${f}/orders?_limit=${this.limitPage}&_page=${o}`).then(d=>{var i=parseInt(d.headers["x-total-count"]);this.pageTotal=Math.ceil(i/this.limitPage),this.currentPage=o,this.orders=d.data,this.orders.forEach(a=>{var t=new Date(a.user.create_at),c=t.toISOString(),y=c.slice(0,10);a.user.create_at=y}),this.getOrderProducts(),this.isLoading=!1}).catch(d=>{this.isLoading=!1,p.threeLayerCheckType("error","取得訂單資料失敗")})},getOrderProducts(){this.axios.get(`${f}/cartsData`).then(o=>{const d={};o.data.forEach(a=>{d[a.id]||(d[a.id]={final_total:a.final_total,userId:a.userId,cartDataId:a.id,total:a.total,products:[]}),a.data.forEach(t=>{d[a.id].products.push({id:t.productId,title:t.product.title,qty:t.qty,price:t.price,total:t.total,final_total:t.final_total})})});const i=Object.values(d);this.orders.forEach(a=>{i.forEach(t=>{a.user.cartDataId===t.cartDataId&&(a.product=[],a.product.push(t))})})}).catch(o=>{p.threeLayerCheckType("error","取得訂單的產品資料失敗")})},openModal(o){this.tempOrder={...o},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(o){this.tempOrder={...o},this.$refs.delModal.openModal()},updatePaid(o){this.isLoading=!0;const d=o.user.status,i={...o.user,status:d};this.axios.patch(`${f}/orders/${o.id}`,{user:i}).then(a=>{this.getOrders(),this.isLoading=!1,this.$refs.orderModal.closeModal(),p.threeLayerCheckType("success","更新付款狀態")}).catch(a=>{this.isLoading=!1,p.threeLayerCheckType("error","更新付款狀態失敗")})},delOrder(){this.isLoading=!0,this.axios.delete(`${f}/orders/${this.tempOrder.id}`,this.tempOrder).then(o=>{this.getOrders(),this.isLoading=!1,this.$refs.delModal.closeModal(),p.threeLayerCheckType("success","已刪除訂單成功")}).catch(o=>{this.isLoading=!1,p.threeLayerCheckType("error",`${o.message}`)})}},mounted(){this.getOrders()}},D=o=>(V("data-v-e70312c9"),o=o(),I(),o),ot=D(()=>e("div",{class:"text-end mt-18"},null,-1)),lt={class:"table-responsive"},dt={class:"table mt-4"},nt=D(()=>e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"聯繫人"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"處理狀態"),e("th",null,"編輯")])],-1)),at={style:{width:"100px"}},ct=["textContent"],it={class:"list-unstyled"},ut=D(()=>e("br",null,null,-1)),ht={style:{width:"80px"}},_t={class:"form-check form-switch",style:{width:"100px"}},pt=["onUpdate:modelValue","onChange"],mt={class:"form-check-label"},yt={key:0},bt={key:1,class:"text-danger"},kt={style:{width:"80px"}},gt={key:0,class:"text-primary-emphasis"},ft={key:1,class:"text-primary"},Ot={key:2,class:"text-warning"},vt={key:3,class:"text-danger"},xt={key:4,class:"text-success"},Mt={class:"btn-group"},St=["onClick"],Ct=["onClick"],Lt={"aria-label":"Page navigation example",class:"my-10"},Dt={class:"pagination justify-content-center"},wt=["onClick"];function Pt(o,d,i,a,t,c){const y=M("VueLoading"),g=M("order-modal"),h=M("del-order-modal");return s(),r(_,null,[O(y,{active:t.isLoading,"z-index":1060},null,8,["active"]),ot,e("div",lt,[e("table",dt,[nt,e("tbody",null,[(s(!0),r(_,null,m(t.orders,l=>(s(),r("tr",{key:l.id},[e("td",null,[e("div",at,n(l.user.create_at),1)]),e("td",null,[l.user?(s(),r("span",{key:0,textContent:n(l.user.email),style:{width:"80px"}},null,8,ct)):b("",!0)]),e("td",null,[e("ul",it,[(s(!0),r(_,null,m(l.product,u=>(s(),r(_,{key:u.id},[(s(!0),r(_,null,m(u.products,(w,T)=>(s(),r("li",{key:T+123,style:{width:"200px"}},[k(n(w.title)+" 預約："+n(w.qty)+"位 ",1),ut]))),128))],64))),128))])]),(s(!0),r(_,null,m(l.product,u=>(s(),r("td",{class:"text-right",key:u.id},[e("div",ht,n(c.thousand(u.final_total)),1)]))),128)),e("td",null,[e("div",_t,[v(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":u=>l.user.status=u,onChange:u=>c.updatePaid(l)},null,40,pt),[[x,l.user.status]]),e("label",mt,[l.user.status?(s(),r("span",yt,"已付款")):(s(),r("span",bt,"未付款"))])])]),e("td",null,[e("div",kt,[!l.status&&!l.billStatus&&!l.checkDataStatus&&!l.user.status?(s(),r("p",gt," 訂單處理中 ")):!l.status&&!l.billStatus&&!l.checkDataStatus&&l.user.status?(s(),r("p",ft," 預約安排出遊 ")):!l.status&&!l.billStatus&&l.checkDataStatus&&l.user.status?(s(),r("p",Ot," 發票開立中 ")):!l.status&&l.billStatus&&l.checkDataStatus&&l.user.status?(s(),r("p",vt," 訂單即將完成，準備出遊 ")):(s(),r("p",xt,"已出遊結束"))])]),e("td",null,[e("div",Mt,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:u=>c.openModal(l)}," 檢視 ",8,St),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:u=>c.openDelOrderModal(l)}," 刪除 ",8,Ct)])])]))),128))])])]),e("nav",Lt,[e("ul",Dt,[e("li",{class:S(["page-item",{disabled:!t.currentPage||t.currentPage===1}])},[e("button",{class:"page-link page-link-radius-2",onClick:d[0]||(d[0]=C(l=>t.currentPage>1&&c.getOrders(t.currentPage-1),["prevent"]))}," 上一頁 ")],2),(s(!0),r(_,null,m(t.pageTotal,l=>(s(),r("li",{class:"page-item",key:`page-${l}`},[e("button",{class:S(["page-link page-link-0 rounded-0",{active:l===t.currentPage}]),onClick:C(u=>c.getOrders(l),["prevent"])},n(l),11,wt)]))),128)),e("li",{class:S(["page-item",{disabled:!t.currentPage||t.currentPage===t.pageTotal}])},[e("button",{class:"page-link page-link-radius",onClick:d[1]||(d[1]=C(l=>t.currentPage<t.pageTotal&&c.getOrders(t.currentPage+1),["prevent"]))}," 下一頁 ")],2)])]),O(g,{ref:"orderModal",order:t.tempOrder,"update-paid":c.updatePaid,"get-orders":c.getOrders},null,8,["order","update-paid","get-orders"]),O(h,{ref:"delModal",item:t.tempOrder,"del-order":c.delOrder},null,8,["item","del-order"])],64)}const jt=L(rt,[["render",Pt],["__scopeId","data-v-e70312c9"]]);export{jt as default};
