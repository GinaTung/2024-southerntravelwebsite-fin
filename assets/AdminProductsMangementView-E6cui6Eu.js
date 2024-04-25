import{_ as w,I as V,c as d,a as t,b as C,F as g,i as P,n as v,g as x,t as b,k as r,v as l,l as p,J as T,d as m,o as n,p as q,f as S,r as M}from"./index-EDi3ziPX.js";import{s as h}from"./sweetAlert-TAVH8QNa.js";import{C as k}from"./collapse-jBdkuEZn.js";import{A as O}from"./AdminSidebar-oWgtftoi.js";import"./selector-engine-BJKLAsO_.js";const U="https://two024-south-json-server-vercel.onrender.com",L={components:{AdminSidebar:O},data(){return{products:[],tempProduct:{},pages:{},modalProduct:null,modelDel:null,isNew:!1,newProduct:{itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:"",itinerary_first_day_pm_title2:"",itinerary_first_day_pm_content2:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}]},newAllItineraryData:[],minDate:"2024-01-01",maxDate:"2024-12-31",formData:{productName:"",productDescription:""},pageTotal:0,currentPage:1,limitPage:10,parsedLinks:"",isCollapseFirstOpen:!0,isCollapseSecondOpen:!1,isCollapseThirdOpen:!1}},watch:{$route(){this.collapseFirstDay.hide(),this.accordionSecondDay.hide(),this.accordionThirdDay.hide()}},methods:{toggleOpenProduct(){this.toggleCollapse(this.collapseFirstDay,"isCollapseFirstOpen")},toggleOpenSecond(){this.toggleCollapse(this.accordionSecondDay,"isCollapseSecondOpen")},toggleOpenThird(){this.toggleCollapse(this.accordionThirdDay,"isCollapseThirdOpen")},toggleCollapse(c,o){c._element.classList.contains("show")?c.hide():c.show(),this[o]=!this[o]},getProducts(c=1){this.axios.get(`${U}/products?_limit=${this.limitPage}&_page=${c}`).then(o=>{var u=parseInt(o.headers["x-total-count"]);this.pageTotal=Math.ceil(u/this.limitPage),this.currentPage=c,this.products=o.data}).catch(()=>{h.threeLayerCheckType("error","取得產品資料錯誤")})},openModal(c,o){c==="new"?(this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}],imagesUrl:[]},this.isNew=!0,this.modalProduct.show()):c==="edit"?(this.tempProduct={...o},this.tempProduct.itinerary_data.length===0?this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:"",itinerary_first_day_pm_title2:"",itinerary_first_day_pm_content2:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}]}:this.tempProduct.itinerary_data.length===1?this.tempProduct.itinerary_data.push({second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}):this.tempProduct.itinerary_data.length===2&&this.tempProduct.itinerary_data.push({third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}),Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.modalProduct.show()):c==="delete"&&(this.tempProduct={...o},this.modalDel.show())},updateProduct(){if(!this.tempProduct.title||!this.tempProduct.day_num||!this.tempProduct.creationDate||!this.tempProduct.category||!this.tempProduct.unit||!this.tempProduct.tag_1||!this.tempProduct.max_travelers||!this.tempProduct.origin_price||!this.tempProduct.price||!this.tempProduct.description||!this.tempProduct.content||!this.tempProduct.startDate||!this.tempProduct.endDate||!this.tempProduct.goStartDate||!this.tempProduct.goEndDate){h.threeLayerCheckType("warning","請填寫所有必填欄位");return}const c=this.filterProduct(this.tempProduct);this.tempProduct=c,this.isNew?this.axios.post(`${U}/products`,this.tempProduct).then(()=>{h.threeLayerCheckType("success","已建立產品成功"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{h.threeLayerCheckType("error","建立產品失敗")}):this.isNew||this.axios.put(`${U}/products/${this.tempProduct.id}`,this.tempProduct).then(o=>{h.threeLayerCheckType("success","已更新產品成功"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{h.threeLayerCheckType("error","更新產品失敗")})},filterProduct(c){const o={};for(const u in c)u==="itinerary_data"?(o[u]=this.filterItineraryData(c[u]),o[u]=o[u].filter(f=>Object.values(f).some(s=>s!==""))):c[u]!==""&&(o[u]=c[u]);return o},filterItineraryData(c){return c.map(o=>{const u={};for(const f in o)o[f]!==""&&(u[f]=o[f]);return u})},deleteProduct(){this.axios.delete(`${U}/products/${this.tempProduct.id}`,this.tempProduct).then(c=>{this.getProducts(),this.tempProduct={},this.modalDel.hide()}).catch(c=>{h.threeLayerCheckType("error","刪除產品資料失敗")})},upload(){const c=this.$refs.fileInput,o=c.files[0],u=new FormData;u.append("file-to-upload",o),this.axios.post(`${U}/products`,u).then(f=>{h.threeLayerCheckType("warning",`
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `);const y=URL.createObjectURL(c.files[0]);this.tempProduct.imagesUrl.push(y),c.value=null}).catch(f=>{h.threeLayerCheckType("error","上傳產品圖片失敗")})}},mounted(){this.getProducts(),this.modalProduct=new V.Modal(this.$refs.productModal),this.modalDel=new V.Modal(this.$refs.delProductModal),this.collapseFirstDay=new k(this.$refs.collapseFirstDay,{toggle:!0}),this.accordionSecondDay=new k(this.$refs.accordionSecondDay,{toggle:!1}),this.accordionThirdDay=new k(this.$refs.accordionThirdDay,{toggle:!1})}},i=c=>(q("data-v-415bed2c"),c=c(),S(),c),F={class:"container"},A={class:"row flex-column flex-md-row"},N={class:"col-12 col-md-3"},j={class:"col-12 col-md-9"},B={class:"d-flex justify-content-between mt-4"},E=i(()=>t("h2",null,"產品列表",-1)),I={class:"table mt-4"},R=i(()=>t("thead",null,[t("tr",null,[t("th",{width:"80"},"上架"),t("th",{width:"80"},"分類"),t("th",{width:"200"},"產品名稱"),t("th",{width:"120"},"標籤"),t("th",{width:"80",class:"text-end"},"原價"),t("th",{width:"80",class:"text-end"},"售價"),t("th",{width:"120"})])],-1)),z={key:0,class:"text-success"},J={key:1},G={class:"text-end"},H={class:"text-end"},K={class:"btn-group"},Q=["onClick"],W=["onClick"],X={"aria-label":"Page navigation example",class:"my-10"},Y={class:"pagination justify-content-center"},Z=["onClick"],$={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},tt={class:"modal-dialog modal-xl"},et={class:"modal-content border-0"},ot={class:"modal-header bg-dark text-white"},st={id:"productModalLabel",class:"modal-title"},it=i(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),rt={class:"modal-body"},lt={class:"row"},at={class:"col-sm-4"},dt={class:"mb-2"},nt={class:"mb-3"},_t=i(()=>t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1)),ct=["src"],mt={key:0},pt=["src"],yt=["onUpdate:modelValue"],ut={class:"col-sm-8"},ht={class:"mb-3"},ft=i(()=>t("label",{for:"title",class:"form-label"},[m("標題"),t("span",{class:"required"},"*")],-1)),bt={class:"row"},gt={class:"mb-3 col-md-6"},Pt=i(()=>t("label",{for:"day_num",class:"form-label"},[m("旅遊天數"),t("span",{class:"required"},"*")],-1)),vt={class:"mb-3 col-md-6"},Ut=i(()=>t("label",{for:"creation_date",class:"form-label"},[m("建立日期"),t("span",{class:"required"},"*")],-1)),xt={class:"row"},kt={class:"mb-3 col-md-6"},Vt=i(()=>t("label",{for:"category",class:"form-label"},[m("分類"),t("span",{class:"required"},"*")],-1)),Dt={class:"mb-3 col-md-6"},wt=i(()=>t("label",{for:"price",class:"form-label"},[m("單位"),t("span",{class:"required"},"*")],-1)),Ct={class:"row"},Tt={class:"mb-3 col-md-6"},qt=i(()=>t("label",{for:"tag_1",class:"form-label"},[m("標籤1"),t("span",{class:"required"},"*")],-1)),St={class:"mb-3 col-md-6"},Mt=i(()=>t("label",{for:"tag_2",class:"form-label"},"標籤2",-1)),Ot={class:"row"},Lt={class:"mb-3 col-md-6"},Ft=i(()=>t("label",{for:"link",class:"form-label"},"連結",-1)),At={class:"mb-3 col-md-6"},Nt=i(()=>t("label",{for:"max_travelers",class:"form-label"},[m("出遊上限人數"),t("span",{class:"required"},"*")],-1)),jt={class:"row"},Bt={class:"mb-3 col-md-6"},Et=i(()=>t("label",{for:"origin_price",class:"form-label"},[m("原價"),t("span",{class:"required"},"*")],-1)),It={class:"mb-3 col-md-6"},Rt=i(()=>t("label",{for:"price",class:"form-label"},[m("售價"),t("span",{class:"required"},"*")],-1)),zt={class:"row"},Jt={class:"col"},Gt={class:"accordion mb-3",id:"accordionFirstdDay"},Ht={class:"accordion-item"},Kt={class:"accordion-header"},Qt={id:"collapseFirstDay",class:"accordion-collapse collapse","data-bs-parent":"#accordionFirstdDay",ref:"collapseFirstDay"},Wt={class:"accordion-body"},Xt={class:"row"},Yt={key:0,class:"mb-3 col-md-6"},Zt=i(()=>t("label",{for:"first_day_title",class:"form-label"},[m("行程天數"),t("span",{class:"required"},"*")],-1)),$t=["onUpdate:modelValue"],te={key:1,class:"mb-3 col-md-6"},ee=i(()=>t("label",{for:"itinerary_first_day_am_title",class:"form-label"},[m("景點名稱-早上"),t("span",{class:"required"},"*")],-1)),oe=["onUpdate:modelValue"],se={key:2,class:"mb-3"},ie=i(()=>t("label",{for:"itinerary_first_day_am_content",class:"form-label"},[m("景點介紹-早上"),t("span",{class:"required"},"*")],-1)),re=["onUpdate:modelValue"],le={key:3,class:"col-md-6 mb-3"},ae=i(()=>t("label",{for:"itinerary_first_day_pm_title",class:"form-label"},[m("景點名稱-下午"),t("span",{class:"required"},"*")],-1)),de=["onUpdate:modelValue"],ne={key:4,class:"mb-3"},_e=i(()=>t("label",{for:"itinerary_first_day_pm_content",class:"form-label"},[m("景點介紹-下午"),t("span",{class:"required"},"*")],-1)),ce=["onUpdate:modelValue"],me={key:5,class:"col-md-6 mb-3"},pe=i(()=>t("label",{for:"itinerary_first_day_pm_title2",class:"form-label"},[m("景點名稱-下午2"),t("span",{class:"required"},"*")],-1)),ye=["onUpdate:modelValue"],ue={key:6,class:"mb-3"},he=i(()=>t("label",{for:"itinerary_first_day_pm_content2",class:"form-label"},[m("景點介紹-下午2"),t("span",{class:"required"},"*")],-1)),fe=["onUpdate:modelValue"],be={class:"row"},ge={class:"col"},Pe={class:"accordion mb-3",id:"accordionSecondDay"},ve={class:"accordion-item"},Ue={class:"accordion-header"},xe={class:"accordion-collapse collapse","data-bs-parent":"#accordionSecondDay",ref:"accordionSecondDay"},ke={class:"accordion-body"},Ve={class:"row"},De={key:0,class:"mb-3 col-md-6"},we=i(()=>t("label",{for:"second_day_title",class:"form-label"},"行程天數",-1)),Ce=["onUpdate:modelValue"],Te={key:1,class:"mb-3 col-md-6"},qe=i(()=>t("label",{for:"itinerary_second_day_am_title",class:"form-label"},"景點名稱-早上",-1)),Se=["onUpdate:modelValue"],Me={key:2,class:"mb-3"},Oe=i(()=>t("label",{for:"itinerary_second_day_am_content",class:"form-label"},"景點介紹-早上",-1)),Le=["onUpdate:modelValue"],Fe={key:3,class:"col-md-6 mb-3"},Ae=i(()=>t("label",{for:"itinerary_second_day_pm_title",class:"form-label"},"景點名稱-下午",-1)),Ne=["onUpdate:modelValue"],je={key:4,class:"mb-3"},Be=i(()=>t("label",{for:"itinerary_second_day_pm_content",class:"form-label"},"景點介紹-下午",-1)),Ee=["onUpdate:modelValue"],Ie={key:5,class:"col-md-6 mb-3"},Re=i(()=>t("label",{for:"itinerary_second_day_pm_title2",class:"form-label"},"景點名稱-下午2",-1)),ze=["onUpdate:modelValue"],Je={key:6,class:"mb-3"},Ge=i(()=>t("label",{for:"itinerary_second_day_pm_content2",class:"form-label"},"景點介紹-下午2",-1)),He=["onUpdate:modelValue"],Ke={class:"row"},Qe={class:"col"},We={class:"accordion mb-3",id:"accordionThirdDay"},Xe={class:"accordion-item"},Ye={class:"accordion-header"},Ze={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionThirdDay",ref:"accordionThirdDay"},$e={class:"accordion-body"},to={class:"row"},eo={key:0,class:"mb-3 col-md-6"},oo=i(()=>t("label",{for:"third_day_title",class:"form-label"},"行程天數",-1)),so=["onUpdate:modelValue"],io={key:1,class:"mb-3 col-md-6"},ro=i(()=>t("label",{for:"itinerary_third_day_am_title",class:"form-label"},"景點名稱-早上",-1)),lo=["onUpdate:modelValue"],ao={key:2,class:"mb-3"},no=i(()=>t("label",{for:"itinerary_third_day_am_content",class:"form-label"},"景點介紹-早上",-1)),_o=["onUpdate:modelValue"],co={key:3,class:"col-md-6 mb-3"},mo=i(()=>t("label",{for:"itinerary_third_day_pm_title",class:"form-label"},"景點名稱-下午",-1)),po=["onUpdate:modelValue"],yo={key:4,class:"mb-3"},uo=i(()=>t("label",{for:"itinerary_third_day_pm_content",class:"form-label"},"景點介紹-下午",-1)),ho=["onUpdate:modelValue"],fo={key:5,class:"col-md-6 mb-3"},bo=i(()=>t("label",{for:"itinerary_third_day_pm_title2",class:"form-label"},"景點名稱-下午2",-1)),go=["onUpdate:modelValue"],Po={key:6,class:"mb-3"},vo=i(()=>t("label",{for:"itinerary_third_day_pm_content2",class:"form-label"},"景點介紹-下午2",-1)),Uo=["onUpdate:modelValue"],xo=i(()=>t("hr",null,null,-1)),ko={class:"mb-3"},Vo=i(()=>t("label",{for:"description",class:"form-label"},[m("產品描述"),t("span",{class:"required"},"*")],-1)),Do={class:"mb-3"},wo=i(()=>t("label",{for:"content",class:"form-label"},[m("說明內容"),t("span",{class:"required"},"*")],-1)),Co={class:"mb-3"},To=i(()=>t("label",{for:"content",class:"form-label"},"服務內容",-1)),qo={class:"mb-3"},So=i(()=>t("label",{for:"content",class:"form-label"},"體驗說明",-1)),Mo={class:"mb-3"},Oo=i(()=>t("label",{for:"content",class:"form-label"},"其他資訊",-1)),Lo={class:"mb-3"},Fo=i(()=>t("label",{for:"content",class:"form-label"},"常見問題",-1)),Ao={class:"row"},No={class:"mb-3 col-md-6"},jo=i(()=>t("label",{for:"start_date",class:"form-label"},[m("預約起始日"),t("span",{class:"required"},"*")],-1)),Bo=["min","max"],Eo={class:"mb-3 col-md-6"},Io=i(()=>t("label",{for:"end_date",class:"form-label"},[m("預約結束日"),t("span",{class:"required"},"*")],-1)),Ro=["min","max"],zo={class:"row"},Jo={class:"mb-3 col-md-6"},Go=i(()=>t("label",{for:"go_start_date",class:"form-label"},[m("出發起始日"),t("span",{class:"required"},"*")],-1)),Ho=["min","max"],Ko={class:"mb-3 col-md-6"},Qo=i(()=>t("label",{for:"go_end_date",class:"form-label"},[m("出發結束日"),t("span",{class:"required"},"*")],-1)),Wo=["min","max"],Xo={class:"mb-3"},Yo={class:"form-check"},Zo=i(()=>t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1)),$o={class:"modal-footer"},ts=i(()=>t("button",{type:"button",class:"btn btn-outline-secondary px-6 py-2","data-bs-dismiss":"modal"}," 取消 ",-1)),es={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},os={class:"modal-dialog"},ss={class:"modal-content border-0"},is=i(()=>t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),rs={class:"modal-body"},ls={class:"text-danger"},as={class:"modal-footer"},ds=i(()=>t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1));function ns(c,o,u,f,s,y){const D=M("AdminSidebar");return n(),d(g,null,[t("div",F,[t("div",A,[t("div",N,[C(D)]),t("div",j,[t("div",B,[E,t("button",{type:"button",class:"btn-turquoise",id:"addModalBtn",onClick:o[0]||(o[0]=e=>y.openModal("new",c.product))}," 建立新的產品 ")]),t("table",I,[R,t("tbody",null,[(n(!0),d(g,null,P(s.products,e=>(n(),d("tr",{key:e.id},[t("td",null,[e.is_enabled?(n(),d("span",z,"啟用")):(n(),d("span",J,"未啟用"))]),t("td",null,b(e.category),1),t("td",null,b(e.title),1),t("td",null,b(e.tag_1),1),t("td",G,b(e.origin_price),1),t("td",H,b(e.price),1),t("td",null,[t("div",K,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:_=>y.openModal("edit",e)}," 編輯 ",8,Q),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:_=>y.openModal("delete",e)}," 刪除 ",8,W)])])]))),128))])]),t("nav",X,[t("ul",Y,[t("li",{class:v(["page-item",{disabled:!s.currentPage||s.currentPage===1}])},[t("button",{class:"page-link page-link-radius-2",onClick:o[1]||(o[1]=x(e=>s.currentPage>1&&y.getProducts(s.currentPage-1),["prevent"]))}," 上一頁 ")],2),(n(!0),d(g,null,P(s.pageTotal,e=>(n(),d("li",{class:"page-item",key:`page-${e}`},[t("button",{class:v(["page-link page-link-0 rounded-0",{active:e===s.currentPage}]),onClick:x(_=>y.getProducts(e),["prevent"])},b(e),11,Z)]))),128)),t("li",{class:v(["page-item",{disabled:!s.currentPage||s.currentPage===s.pageTotal}])},[t("button",{class:"page-link page-link-radius",onClick:o[2]||(o[2]=x(e=>s.currentPage<s.pageTotal&&y.getProducts(s.currentPage+1),["prevent"]))}," 下一頁 ")],2)])])])])]),t("div",$,[t("div",tt,[t("div",et,[t("div",ot,[t("h5",st,[t("span",null,b(s.isNew?"新增產品":"編輯產品"),1)]),it]),t("div",rt,[t("div",lt,[t("div",at,[t("div",dt,[t("div",nt,[_t,r(t("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>s.tempProduct.imageUrl=e),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[l,s.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,ct)]),Array.isArray(s.tempProduct.imagesUrl)?(n(),d("div",mt,[(n(!0),d(g,null,P(s.tempProduct.imagesUrl,(e,_)=>(n(),d("div",{key:_+1213},[t("img",{src:e,alt:"",class:"img-fluid my-2"},null,8,pt),r(t("input",{type:"text",class:"form-control my-2","onUpdate:modelValue":a=>s.tempProduct.imagesUrl[_]=a},null,8,yt),[[l,s.tempProduct.imagesUrl[_]]])]))),128)),s.tempProduct.imagesUrl.length===0||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(n(),d("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100 btn-sm-radius",onClick:o[4]||(o[4]=e=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(n(),d("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100 btn-sm-radius",onClick:o[5]||(o[5]=e=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):p("",!0)]),t("div",ut,[t("div",ht,[ft,r(t("input",{id:"title",type:"text","onUpdate:modelValue":o[6]||(o[6]=e=>s.tempProduct.title=e),class:"form-control",placeholder:"請輸入標題"},null,512),[[l,s.tempProduct.title]])]),t("div",bt,[t("div",gt,[Pt,r(t("input",{id:"day_num",type:"number","onUpdate:modelValue":o[7]||(o[7]=e=>s.tempProduct.day_num=e),class:"form-control",placeholder:"請輸入旅遊天數"},null,512),[[l,s.tempProduct.day_num]])]),t("div",vt,[Ut,r(t("input",{id:"creation_date",type:"date","onUpdate:modelValue":o[8]||(o[8]=e=>s.tempProduct.creationDate=e),class:"form-control"},null,512),[[l,s.tempProduct.creationDate]])])]),t("div",xt,[t("div",kt,[Vt,r(t("input",{id:"category",type:"text","onUpdate:modelValue":o[9]||(o[9]=e=>s.tempProduct.category=e),class:"form-control",placeholder:"請輸入分類"},null,512),[[l,s.tempProduct.category]])]),t("div",Dt,[wt,r(t("input",{id:"unit",type:"text","onUpdate:modelValue":o[10]||(o[10]=e=>s.tempProduct.unit=e),class:"form-control",placeholder:"請輸入單位"},null,512),[[l,s.tempProduct.unit]])])]),t("div",Ct,[t("div",Tt,[qt,r(t("input",{id:"tag_1",type:"text","onUpdate:modelValue":o[11]||(o[11]=e=>s.tempProduct.tag_1=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[l,s.tempProduct.tag_1]])]),t("div",St,[Mt,r(t("input",{id:"tag_2",type:"text","onUpdate:modelValue":o[12]||(o[12]=e=>s.tempProduct.tag_2=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[l,s.tempProduct.tag_2]])])]),t("div",Ot,[t("div",Lt,[Ft,r(t("input",{id:"link",type:"text","onUpdate:modelValue":o[13]||(o[13]=e=>s.tempProduct.link=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[l,s.tempProduct.link]])]),t("div",At,[Nt,r(t("input",{id:"max_travelers",type:"number","onUpdate:modelValue":o[14]||(o[14]=e=>s.tempProduct.max_travelers=e),min:"3",max:"30",class:"form-control",placeholder:"請輸入出遊上限人數"},null,512),[[l,s.tempProduct.max_travelers]])])]),t("div",jt,[t("div",Bt,[Et,r(t("input",{id:"origin_price",type:"number","onUpdate:modelValue":o[15]||(o[15]=e=>s.tempProduct.origin_price=e),min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[l,s.tempProduct.origin_price]])]),t("div",It,[Rt,r(t("input",{id:"price",type:"number","onUpdate:modelValue":o[16]||(o[16]=e=>s.tempProduct.price=e),min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[l,s.tempProduct.price]])])]),t("div",zt,[t("div",Jt,[t("div",Gt,[t("div",Ht,[t("h2",Kt,[t("button",{class:v(["accordion-button",{collapsed:!s.isCollapseFirstOpen}]),type:"button","aria-expanded":"false","aria-controls":"collapseFirstDay",onClick:o[17]||(o[17]=(...e)=>y.toggleOpenProduct&&y.toggleOpenProduct(...e))}," 行程資料-第一天 ",2)]),t("div",Qt,[t("div",Wt,[t("div",Xt,[(n(!0),d(g,null,P(s.tempProduct.itinerary_data,(e,_)=>(n(),d("div",{key:_+1213},[_===0?(n(),d("div",Yt,[Zt,r(t("input",{id:"first_day_title",type:"text","onUpdate:modelValue":a=>e.first_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第一天"},null,8,$t),[[l,e.first_day_title]])])):p("",!0),_===0?(n(),d("div",te,[ee,r(t("input",{id:"itinerary_first_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,oe),[[l,e.itinerary_first_day_am_title]])])):p("",!0),_===0?(n(),d("div",se,[ie,r(t("textarea",{id:"itinerary_first_day_am_content",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_am_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,re),[[l,e.itinerary_first_day_am_content]])])):p("",!0),_===0?(n(),d("div",le,[ae,r(t("input",{id:"itinerary_first_day_pm_title",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,de),[[l,e.itinerary_first_day_pm_title]])])):p("",!0),_===0?(n(),d("div",ne,[_e,r(t("textarea",{id:"itinerary_first_day_pm_content",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,ce),[[l,e.itinerary_first_day_pm_content]])])):p("",!0),_===0?(n(),d("div",me,[pe,r(t("input",{id:"itinerary_first_day_pm_title2",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_title2=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,ye),[[l,e.itinerary_first_day_pm_title2]])])):p("",!0),_===0?(n(),d("div",ue,[he,r(t("textarea",{id:"itinerary_first_day_pm_content2",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_content2=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,fe),[[l,e.itinerary_first_day_pm_content2]])])):p("",!0)]))),128))])])],512)])])])]),t("div",be,[t("div",ge,[t("div",Pe,[t("div",ve,[t("h2",Ue,[t("button",{class:v(["accordion-button",{collapsed:!s.isCollapseSecondOpen}]),type:"button","aria-expanded":"false","aria-controls":"collapseTwo",onClick:o[18]||(o[18]=(...e)=>y.toggleOpenSecond&&y.toggleOpenSecond(...e))}," 行程資料-第二天 ",2)]),t("div",xe,[t("div",ke,[t("div",Ve,[(n(!0),d(g,null,P(s.tempProduct.itinerary_data,(e,_)=>(n(),d("div",{key:_+1213},[_===1?(n(),d("div",De,[we,r(t("input",{id:"second_day_title",type:"text","onUpdate:modelValue":a=>e.second_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第二天"},null,8,Ce),[[l,e.second_day_title]])])):p("",!0),_===1?(n(),d("div",Te,[qe,r(t("input",{id:"itinerary_second_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_second_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Se),[[l,e.itinerary_second_day_am_title]])])):p("",!0),_===1?(n(),d("div",Me,[Oe,r(t("textarea",{id:"itinerary_second_day_am_content","onUpdate:modelValue":a=>e.itinerary_second_day_am_content=a,class:"form-control",placeholder:"請輸入景點內容"},null,8,Le),[[l,e.itinerary_second_day_am_content]])])):p("",!0),_===1?(n(),d("div",Fe,[Ae,r(t("input",{id:"itinerary_second_day_pm_title","onUpdate:modelValue":a=>e.itinerary_second_day_pm_title=a,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ne),[[l,e.itinerary_second_day_pm_title]])])):p("",!0),_===1?(n(),d("div",je,[Be,r(t("textarea",{"onUpdate:modelValue":a=>e.itinerary_second_day_pm_content=a,id:"itinerary_second_day_pm_content",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Ee),[[l,e.itinerary_second_day_pm_content]])])):p("",!0),_===1?(n(),d("div",Ie,[Re,r(t("input",{id:"itinerary_second_day_pm_title2","onUpdate:modelValue":a=>e.itinerary_second_day_pm_title2=a,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,ze),[[l,e.itinerary_second_day_pm_title2]])])):p("",!0),_===1?(n(),d("div",Je,[Ge,r(t("textarea",{"onUpdate:modelValue":a=>e.itinerary_second_day_pm_content2=a,id:"itinerary_second_day_pm_content2",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,He),[[l,e.itinerary_second_day_pm_content2]])])):p("",!0)]))),128))])])],512)])])])]),t("div",Ke,[t("div",Qe,[t("div",We,[t("div",Xe,[t("h2",Ye,[t("button",{class:v(["accordion-button",{collapsed:!s.isCollapseThirdOpen}]),type:"button","aria-expanded":"false","aria-controls":"collapseThree",onClick:o[19]||(o[19]=(...e)=>y.toggleOpenThird&&y.toggleOpenThird(...e))}," 行程資料-第三天 ",2)]),t("div",Ze,[t("div",$e,[t("div",to,[(n(!0),d(g,null,P(s.tempProduct.itinerary_data,(e,_)=>(n(),d("div",{key:_+1213},[_===2?(n(),d("div",eo,[oo,r(t("input",{id:"third_day_title",type:"text","onUpdate:modelValue":a=>e.third_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第三天"},null,8,so),[[l,e.third_day_title]])])):p("",!0),_===2?(n(),d("div",io,[ro,r(t("input",{id:"itinerary_third_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,lo),[[l,e.itinerary_third_day_am_title]])])):p("",!0),_===2?(n(),d("div",ao,[no,r(t("textarea",{id:"itinerary_third_day_am_content",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_am_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,_o),[[l,e.itinerary_third_day_am_content]])])):p("",!0),_===2?(n(),d("div",co,[mo,r(t("input",{id:"itinerary_third_day_pm_title",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,po),[[l,e.itinerary_third_day_pm_title]])])):p("",!0),_===2?(n(),d("div",yo,[uo,r(t("textarea",{id:"itinerary_third_day_pm_content",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,ho),[[l,e.itinerary_third_day_pm_content]])])):p("",!0),_===2?(n(),d("div",fo,[bo,r(t("input",{id:"itinerary_third_day_pm_title2",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_title2=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,go),[[l,e.itinerary_third_day_pm_title2]])])):p("",!0),_===2?(n(),d("div",Po,[vo,r(t("textarea",{id:"itinerary_third_day_pm_content2",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_content2=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Uo),[[l,e.itinerary_third_day_pm_content2]])])):p("",!0)]))),128))])])],512)])])])]),xo,t("div",ko,[Vo,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[20]||(o[20]=e=>s.tempProduct.description=e),class:"form-control",placeholder:"請輸入產品描述",required:""},`\r
                `,512),[[l,s.tempProduct.description]])]),t("div",Do,[wo,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[21]||(o[21]=e=>s.tempProduct.content=e),class:"form-control",placeholder:"請輸入說明內容",required:""},`\r
                `,512),[[l,s.tempProduct.content]])]),t("div",Co,[To,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[22]||(o[22]=e=>s.tempProduct.provideServices=e),class:"form-control",placeholder:"請輸入服務內容"},`\r
                `,512),[[l,s.tempProduct.provideServices]])]),t("div",qo,[So,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[23]||(o[23]=e=>s.tempProduct.experienceDescription=e),class:"form-control",placeholder:"請輸入體驗說明"},`\r
                `,512),[[l,s.tempProduct.experienceDescription]])]),t("div",Mo,[Oo,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[24]||(o[24]=e=>s.tempProduct.otherInformation=e),class:"form-control",placeholder:"請輸入其他資訊"},`\r
                `,512),[[l,s.tempProduct.otherInformation]])]),t("div",Lo,[Fo,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[25]||(o[25]=e=>s.tempProduct.commonProblem=e),class:"form-control",placeholder:"請輸入常見問題"},`\r
                `,512),[[l,s.tempProduct.commonProblem]])]),t("div",Ao,[t("div",No,[jo,r(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[26]||(o[26]=e=>s.tempProduct.startDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Bo),[[l,s.tempProduct.startDate]])]),t("div",Eo,[Io,r(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[27]||(o[27]=e=>s.tempProduct.endDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Ro),[[l,s.tempProduct.endDate]])])]),t("div",zo,[t("div",Jo,[Go,r(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[28]||(o[28]=e=>s.tempProduct.goStartDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Ho),[[l,s.tempProduct.goStartDate]])]),t("div",Ko,[Qo,r(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[29]||(o[29]=e=>s.tempProduct.goEndDate=e),class:"form-control",min:s.minDate,max:s.maxDate,required:""},null,8,Wo),[[l,s.tempProduct.goEndDate]])])]),t("div",Xo,[t("div",Yo,[r(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":o[30]||(o[30]=e=>s.tempProduct.is_enabled=e),type:"checkbox","true-value":1,"false-value":0},null,512),[[T,s.tempProduct.is_enabled]]),Zo])])])])]),t("div",$o,[ts,t("button",{type:"button",class:"btn-turquoise",onClick:o[31]||(o[31]=(...e)=>y.updateProduct&&y.updateProduct(...e))},"確認")])])])],512),t("div",es,[t("div",os,[t("div",ss,[is,t("div",rs,[m(" 是否刪除 "),t("strong",ls,b(s.tempProduct.title),1),m(" 商品(刪除後將無法恢復)。 ")]),t("div",as,[ds,t("button",{type:"button",class:"btn btn-danger",onClick:o[32]||(o[32]=(...e)=>y.deleteProduct&&y.deleteProduct(...e))},"確認刪除")])])])],512)],64)}const us=w(L,[["render",ns],["__scopeId","data-v-415bed2c"]]);export{us as default};
