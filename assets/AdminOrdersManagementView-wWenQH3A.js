import{M as P}from"./bootstrap.esm-72OjFfRm.js";import{s as p}from"./sweetAlert-2P-e1xo-.js";import{_ as w,o as s,c as r,b as y,a as e,t as n,j as g,F as h,h as m,d as f,f as x,G as M,r as k,n as C,A as L}from"./index-36QR2t1j.js";import{A as V}from"./AdminSidebar-mi8Fwxli.js";const A="https://two024-south-json-server-vercel.onrender.com",j={props:{order:{type:Object},ordersDate:{type:Array},updatePaid:{type:Function},getOrders:{type:Function}},data(){return{orderModal:null,tempOrder:{},isLoading:!1}},methods:{isCheckout(){p.twoLayerCheckType("已收到款項時，請更新付款狀態")},openModal(){this.isCheckout(),this.orderModal.show()},closeModal(){this.orderModal.hide()},thousand(l){return l!==void 0&&(l=l.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${l}`},updateOrderStatue(l){this.isLoading=!0;const c={status:l.user.status,...l.user};this.axios.patch(`${A}/orders/${l.id}`,{user:c,billStatus:l.billStatus,checkDataStatus:l.checkDataStatus,status:l.status}).then(a=>{this.getOrders(),this.isLoading=!1,this.orderModal.hide(),p.threeLayerCheckType("success","更新訂單狀態")}).catch(a=>{p.threeLayerCheckType("error",`${a.message}`)})}},watch:{order(){this.tempOrder=this.order}},mounted(){this.orderModal=new P(this.$refs.orderModal)}},E={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true",ref:"orderModal"},I={class:"modal-dialog modal-xl"},U={class:"modal-content border-0"},$={class:"modal-header bg-dark text-white"},N={class:"modal-title",id:"exampleModalLabel"},B=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),F={class:"modal-body"},q={class:"row"},z={class:"col-md-4"},G=e("h3",null,"用戶資料",-1),H={class:"table"},J={key:0},K=e("th",{style:{width:"100px"}},"主要聯繫人",-1),Q=e("th",null,"身分證字號",-1),R=e("th",null,"護照號碼",-1),W=e("th",null,"Email",-1),X=e("th",null,"電話",-1),Y=e("th",null,"地址",-1),Z={class:"col-md-8"},ee=e("h3",null,"訂單細節",-1),te={class:"table"},se=e("th",{style:{width:"100px"}},"訂單編號",-1),re=e("th",null,"下單時間",-1),oe={key:0},le=e("th",null,"付款時間",-1),de={key:0},ne={key:1},ae=e("th",null,"付款狀態",-1),ie={key:0,class:"text-success"},ce={key:1,class:"text-muted"},ue=e("th",null,"總金額",-1),he=e("h3",{class:"mb-3"},"選購商品",-1),_e={class:"table"},pe=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"行程名稱"),e("th",{scope:"col"},"預約數量"),e("th",{scope:"col"},"金額")])],-1),me={class:"d-flex justify-content-start"},be={key:0,class:"me-10"},ye={key:0,class:"text-primary-emphasis"},ke={key:1,class:"text-primary"},ge={key:2,class:"text-warning"},fe={key:3,class:"text-danger"},Oe={key:4,class:"text-success"},ve={key:1},xe={class:"form-check me-4"},Me={class:"form-check-label",for:"flexCheckDefault2"},Se={key:0},Ce={key:1},Le={class:"form-check me-4"},we={class:"form-check-label",for:"flexCheckDefault3"},De={key:0},Pe={key:1},Te={class:"form-check me-4"},Ve={class:"form-check-label",for:"flexCheckDefault4"},Ae={key:0},je={key:1},Ee={key:2},Ie=e("span",{class:"text-danger"},"已收到款項時，請更新付款狀態",-1),Ue=[Ie],$e={class:"modal-footer"},Ne=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Be(l,d,c,a,t,i){var O;const b=k("VueLoading");return s(),r(h,null,[y(b,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",E,[e("div",I,[e("div",U,[e("div",$,[e("h5",N,[e("span",null,"訂單細節(目前查看訂單編號："+n(t.tempOrder.id)+")",1)]),B]),e("div",F,[e("div",q,[e("div",z,[G,e("table",H,[t.tempOrder.user?(s(),r("tbody",J,[e("tr",null,[K,e("td",null,n(t.tempOrder.user.name)+" "+n(t.tempOrder.user.appellation),1)]),e("tr",null,[Q,e("td",null,n(t.tempOrder.user.memberId),1)]),e("tr",null,[R,e("td",null,n(t.tempOrder.user.passport),1)]),e("tr",null,[W,e("td",null,n(t.tempOrder.user.email),1)]),e("tr",null,[X,e("td",null,n(t.tempOrder.user.tel),1)]),e("tr",null,[Y,e("td",null,n(t.tempOrder.user.address),1)])])):g("",!0)])]),e("div",Z,[ee,e("table",te,[e("tbody",null,[e("tr",null,[se,e("td",null,n(t.tempOrder.id),1)]),e("tr",null,[re,t.tempOrder.user?(s(),r("td",oe,n(t.tempOrder.user.create_at),1)):g("",!0)]),e("tr",null,[le,e("td",null,[t.tempOrder.paid_date?(s(),r("span",de,n(t.tempOrder.paid_date),1)):(s(),r("span",ne,"時間不正確"))])]),e("tr",null,[ae,e("td",null,[(O=t.tempOrder.user)!=null&&O.status?(s(),r("strong",ie,"已付款")):(s(),r("span",ce,"尚未付款"))])]),e("tr",null,[ue,e("td",null,[(s(!0),r(h,null,m(t.tempOrder.product,u=>(s(),r(h,{key:u.id},[f(n(i.thousand(u.final_total)),1)],64))),128))])])])]),he,e("table",_e,[pe,e("tbody",null,[(s(!0),r(h,null,m(t.tempOrder.product,(u,S)=>(s(),r(h,{key:S+123},[(s(!0),r(h,null,m(u.products,o=>(s(),r("tr",{key:o.id},[e("th",null,n(o.title),1),e("td",null,"預約 "+n(o.qty)+" / 位",1),e("td",null,n(i.thousand(o.final_total)),1)]))),128))],64))),128))])]),e("div",me,[t.tempOrder.user?(s(),r("div",be,[f(" 目前訂單狀態 : "),!t.tempOrder.status&&!t.tempOrder.billStatus&&!t.tempOrder.checkDataStatus&&!t.tempOrder.user.status?(s(),r("span",ye," 訂單處理中 ")):!t.tempOrder.status&&!t.tempOrder.billStatus&&!t.tempOrder.checkDataStatus&&t.tempOrder.user.status?(s(),r("span",ke," 確認出遊資料中 ")):!t.tempOrder.status&&!t.tempOrder.billStatus&&t.tempOrder.checkDataStatus&&t.tempOrder.user.status?(s(),r("span",ge," 發票開立中 ")):!t.tempOrder.status&&t.tempOrder.billStatus&&t.tempOrder.checkDataStatus&&t.tempOrder.user.status?(s(),r("span",fe," 訂單即將完成，準備出遊 ")):(s(),r("span",Oe,"已出遊結束"))])):g("",!0),t.tempOrder.user&&t.tempOrder.user.status===!0?(s(),r("div",ve,[e("div",xe,[x(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault2","onUpdate:modelValue":d[0]||(d[0]=u=>t.tempOrder.checkDataStatus=u)},null,512),[[M,t.tempOrder.checkDataStatus]]),e("label",Me,[t.tempOrder.checkDataStatus?(s(),r("span",Se,"已確認出遊資料完成")):(s(),r("span",Ce,"未確認出遊資料"))])]),e("div",Le,[x(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault3","onUpdate:modelValue":d[1]||(d[1]=u=>t.tempOrder.billStatus=u)},null,512),[[M,t.tempOrder.billStatus]]),e("label",we,[t.tempOrder.billStatus?(s(),r("span",De,"已開立發票")):(s(),r("span",Pe,"未開立發票"))])]),e("div",Te,[x(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault4","onUpdate:modelValue":d[2]||(d[2]=u=>t.tempOrder.status=u)},null,512),[[M,t.tempOrder.status]]),e("label",Ve,[t.tempOrder.status?(s(),r("span",Ae,"出遊結束")):(s(),r("span",je,"最後確認訂單資料"))])])])):(s(),r("div",Ee,Ue))])])])]),e("div",$e,[Ne,e("button",{type:"button",class:"btn btn-primary",onClick:d[3]||(d[3]=u=>i.updateOrderStatue(t.tempOrder))}," 修改付款狀態 ")])])])],512)],64)}const Fe=w(j,[["render",Be]]),qe={props:{item:Object,delOrder:Function},data(){return{delModal:null,tempOrder:{}}},methods:{openModal(){this.delModal.show()},closeModal(){this.delModal.hide()}},mounted(){this.delModal=new P(this.$refs.delorderModal)}},ze={class:"modal fade",id:"delorderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"delorderModal"},Ge={class:"modal-dialog",role:"document"},He={class:"modal-content border-0"},Je={class:"modal-header bg-danger text-white"},Ke={class:"modal-title"},Qe=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Re={key:0,class:"modal-body"},We={class:"text-danger me-2"},Xe={class:"text-primary"},Ye={class:"modal-footer"},Ze=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function et(l,d,c,a,t,i){return s(),r("div",ze,[e("div",Ge,[e("div",He,[e("div",Je,[e("h5",Ke,[e("span",null,"刪除訂單編號: "+n(c.item.id),1)]),Qe]),c.item.user?(s(),r("div",Re,[f(" 是否刪除 "),e("strong",We,"訂單編號："+n(c.item.id),1),e("span",Xe,"客戶："+n(c.item.user.name),1),f("(刪除後將無法恢復)。 ")])):g("",!0),e("div",Ye,[Ze,e("button",{type:"button",class:"btn btn-danger",onClick:d[0]||(d[0]=(...b)=>c.delOrder&&c.delOrder(...b))},"確認刪除")])])])],512)}const tt=w(qe,[["render",et]]),v="https://two024-south-json-server-vercel.onrender.com",st={components:{AdminSidebar:V,OrderModal:Fe,DelOrderModal:tt},data(){return{orders:[],isNew:!1,pageTotal:0,currentPage:1,limitPage:10,isLoading:!1,tempOrder:{},orderModal:null,delModal:null}},methods:{thousand(l){return l!==void 0&&(l=l.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${l}`},getOrders(l=1){this.isLoading=!0,this.axios.get(`${v}/orders?_limit=${this.limitPage}&_page=${l}`).then(d=>{var c=parseInt(d.headers["x-total-count"]);this.pageTotal=Math.ceil(c/this.limitPage),this.currentPage=l,this.orders=d.data,this.orders.forEach(a=>{var t=new Date(a.user.create_at),i=t.toISOString(),b=i.slice(0,10);a.user.create_at=b}),this.getOrderProducts(),this.isLoading=!1}).catch(d=>{this.isLoading=!1,p.threeLayerCheckType("error","取得訂單資料失敗")})},getOrderProducts(){this.axios.get(`${v}/cartsData`).then(l=>{const d={};l.data.forEach(a=>{d[a.id]||(d[a.id]={final_total:a.final_total,userId:a.userId,cartDataId:a.id,total:a.total,products:[]}),a.data.forEach(t=>{d[a.id].products.push({id:t.productId,title:t.product.title,qty:t.qty,price:t.price,total:t.total,final_total:t.final_total})})});const c=Object.values(d);this.orders.forEach(a=>{c.forEach(t=>{a.user.cartDataId===t.cartDataId&&(a.product=[],a.product.push(t))})})}).catch(l=>{p.threeLayerCheckType("error","取得訂單的產品資料失敗")})},openModal(l){this.tempOrder={...l},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(l){this.tempOrder={...l},this.$refs.delModal.openModal()},updatePaid(l){this.isLoading=!0;const d=l.user.status,c={...l.user,status:d};this.axios.patch(`${v}/orders/${l.id}`,{user:c}).then(a=>{this.getOrders(),this.isLoading=!1,this.$refs.orderModal.closeModal(),p.threeLayerCheckType("success","更新付款狀態")}).catch(a=>{this.isLoading=!1,p.threeLayerCheckType("error","更新付款狀態失敗")})},delOrder(){this.isLoading=!0,this.axios.delete(`${v}/orders/${this.tempOrder.id}`,this.tempOrder).then(l=>{this.getOrders(),this.isLoading=!1,this.$refs.delModal.closeModal(),p.threeLayerCheckType("success","已刪除訂單成功")}).catch(l=>{this.isLoading=!1,p.threeLayerCheckType("error",`${l.message}`)})}},mounted(){this.getOrders()}},rt={class:"container"},ot={class:"row flex-column flex-md-row"},lt={class:"col-12 col-md-3"},dt=e("h1",{class:"my-4 fs-4 fs-md-1"},"訂單管理",-1),nt={class:"col-12 col-md-9"},at=e("div",{class:"text-end mt-18"},null,-1),it={class:"table-responsive"},ct={class:"table mt-4"},ut=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"聯繫人"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"處理狀態"),e("th",null,"編輯")])],-1),ht={style:{width:"100px"}},_t=["textContent"],pt={class:"list-unstyled"},mt=e("br",null,null,-1),bt={style:{width:"80px"}},yt={class:"form-check form-switch",style:{width:"100px"}},kt=["onUpdate:modelValue","onChange"],gt={class:"form-check-label"},ft={key:0},Ot={key:1,class:"text-danger"},vt={style:{width:"80px"}},xt={key:0,class:"text-primary-emphasis"},Mt={key:1,class:"text-primary"},St={key:2,class:"text-warning"},Ct={key:3,class:"text-danger"},Lt={key:4,class:"text-success"},wt={class:"btn-group"},Dt=["onClick"],Pt=["onClick"],Tt={"aria-label":"Page navigation example",class:"my-10"},Vt={class:"pagination justify-content-center"},At=["onClick"];function jt(l,d,c,a,t,i){const b=k("VueLoading"),O=k("AdminSidebar"),u=k("order-modal"),S=k("del-order-modal");return s(),r(h,null,[y(b,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",rt,[e("div",ot,[e("div",lt,[dt,y(O)]),e("div",nt,[at,e("div",it,[e("table",ct,[ut,e("tbody",null,[(s(!0),r(h,null,m(t.orders,o=>(s(),r("tr",{key:o.id},[e("td",null,[e("div",ht,n(o.user.create_at),1)]),e("td",null,[o.user?(s(),r("span",{key:0,textContent:n(o.user.email),style:{width:"80px"}},null,8,_t)):g("",!0)]),e("td",null,[e("ul",pt,[(s(!0),r(h,null,m(o.product,_=>(s(),r(h,{key:_.id},[(s(!0),r(h,null,m(_.products,(D,T)=>(s(),r("li",{key:T+123,style:{width:"200px"}},[f(n(D.title)+" 預約："+n(D.qty)+"位 ",1),mt]))),128))],64))),128))])]),(s(!0),r(h,null,m(o.product,_=>(s(),r("td",{class:"text-right",key:_.id},[e("div",bt,n(i.thousand(_.final_total)),1)]))),128)),e("td",null,[e("div",yt,[x(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":_=>o.user.status=_,onChange:_=>i.updatePaid(o)},null,40,kt),[[M,o.user.status]]),e("label",gt,[o.user.status?(s(),r("span",ft,"已付款")):(s(),r("span",Ot,"未付款"))])])]),e("td",null,[e("div",vt,[!o.status&&!o.billStatus&&!o.checkDataStatus&&!o.user.status?(s(),r("p",xt," 訂單處理中 ")):!o.status&&!o.billStatus&&!o.checkDataStatus&&o.user.status?(s(),r("p",Mt," 預約安排出遊 ")):!o.status&&!o.billStatus&&o.checkDataStatus&&o.user.status?(s(),r("p",St," 發票開立中 ")):!o.status&&o.billStatus&&o.checkDataStatus&&o.user.status?(s(),r("p",Ct," 訂單即將完成，準備出遊 ")):(s(),r("p",Lt,"已出遊結束"))])]),e("td",null,[e("div",wt,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:_=>i.openModal(o)}," 檢視 ",8,Dt),e("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:_=>i.openDelOrderModal(o)}," 刪除 ",8,Pt)])])]))),128))])])]),e("nav",Tt,[e("ul",Vt,[e("li",{class:C(["page-item",{disabled:!t.currentPage||t.currentPage===1}])},[e("button",{class:"page-link page-link-radius-2",onClick:d[0]||(d[0]=L(o=>t.currentPage>1&&i.getOrders(t.currentPage-1),["prevent"]))}," 上一頁 ")],2),(s(!0),r(h,null,m(t.pageTotal,o=>(s(),r("li",{class:"page-item",key:`page-${o}`},[e("button",{class:C(["page-link page-link-0 rounded-0",{active:o===t.currentPage}]),onClick:L(_=>i.getOrders(o),["prevent"])},n(o),11,At)]))),128)),e("li",{class:C(["page-item",{disabled:!t.currentPage||t.currentPage===t.pageTotal}])},[e("button",{class:"page-link page-link-radius",onClick:d[1]||(d[1]=L(o=>t.currentPage<t.pageTotal&&i.getOrders(t.currentPage+1),["prevent"]))}," 下一頁 ")],2)])])])])]),y(u,{ref:"orderModal",order:t.tempOrder,"update-paid":i.updatePaid,"get-orders":i.getOrders},null,8,["order","update-paid","get-orders"]),y(S,{ref:"delModal",item:t.tempOrder,"del-order":i.delOrder},null,8,["item","del-order"])],64)}const Nt=w(st,[["render",jt]]);export{Nt as default};
