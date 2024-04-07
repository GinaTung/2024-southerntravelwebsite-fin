import{_ as w,E as V,c as a,a as t,b as C,F as b,h as g,n as P,A as U,t as f,f as r,i,j as m,v as x,G as T,d as _,o as d,r as q}from"./index-FGzcModE.js";import{A as O}from"./AdminSidebar-5dbKlFOf.js";import{s as u}from"./sweetAlert-v3iFKf4t.js";import{C as k}from"./collapse-TMqAIITF.js";const v="https://two024-south-json-server-vercel.onrender.com",S={components:{AdminSidebar:O},data(){return{products:[],tempProduct:{},pages:{},modalProduct:null,modelDel:null,isNew:!1,newProduct:{itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:"",itinerary_first_day_pm_title2:"",itinerary_first_day_pm_content2:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}]},newAllItineraryData:[],minDate:"2024-01-01",maxDate:"2024-12-31",formData:{productName:"",productDescription:""},pageTotal:0,currentPage:1,limitPage:10,parsedLinks:"",isCollapseFirstOpen:!1,isCollapseSecondOpen:!1,isCollapseThirdOpen:!1}},watch:{$route(){this.collapseFirstDay.hide(),this.accordionSecondDay.hide(),this.accordionThirdDay.hide()}},methods:{toggleOpenProduct(){this.isCollapseFirstOpen=!this.isCollapseFirstOpen},toggleOpenSecond(){this.isCollapseSecondOpen=!this.isCollapseSecondOpen},toggleOpenThird(){this.isCollapseThirdOpen=!this.isCollapseThirdOpen},getProducts(c=1){this.axios.get(`${v}/products?_limit=${this.limitPage}&_page=${c}`).then(s=>{var y=parseInt(s.headers["x-total-count"]);this.pageTotal=Math.ceil(y/this.limitPage),this.currentPage=c,this.products=s.data}).catch(()=>{u.threeLayerCheckType("error","取得產品資料錯誤")})},openModal(c,s){c==="new"?(this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}],imagesUrl:[]},this.isNew=!0,this.modalProduct.show()):c==="edit"?(this.tempProduct={...s},this.tempProduct.itinerary_data.length===0?this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:"",itinerary_first_day_pm_title2:"",itinerary_first_day_pm_content2:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}]}:this.tempProduct.itinerary_data.length===1?this.tempProduct.itinerary_data.push({second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:"",itinerary_second_day_pm_title2:"",itinerary_second_day_pm_content2:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}):this.tempProduct.itinerary_data.length===2&&this.tempProduct.itinerary_data.push({third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:"",itinerary_third_day_pm_title2:"",itinerary_third_day_pm_content2:""}),Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.modalProduct.show()):c==="delete"&&(this.tempProduct={...s},this.modalDel.show())},updateProduct(){if(!this.tempProduct.title||!this.tempProduct.day_num||!this.tempProduct.creationDate||!this.tempProduct.category||!this.tempProduct.unit||!this.tempProduct.tag_1||!this.tempProduct.max_travelers||!this.tempProduct.origin_price||!this.tempProduct.price||!this.tempProduct.description||!this.tempProduct.content||!this.tempProduct.startDate||!this.tempProduct.endDate||!this.tempProduct.goStartDate||!this.tempProduct.goEndDate){u.threeLayerCheckType("warning","請填寫所有必填欄位");return}const c=this.filterProduct(this.tempProduct);this.tempProduct=c,this.isNew?this.axios.post(`${v}/products`,this.tempProduct).then(()=>{u.threeLayerCheckType("success","已建立產品成功"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(s=>{u.threeLayerCheckType("error","建立產品失敗")}):this.isNew||this.axios.put(`${v}/products/${this.tempProduct.id}`,this.tempProduct).then(s=>{u.threeLayerCheckType("success","已更新產品成功"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(s=>{u.threeLayerCheckType("error","更新產品失敗")})},filterProduct(c){const s={};for(const y in c)y==="itinerary_data"?(s[y]=this.filterItineraryData(c[y]),s[y]=s[y].filter(h=>Object.values(h).some(o=>o!==""))):c[y]!==""&&(s[y]=c[y]);return s},filterItineraryData(c){return c.map(s=>{const y={};for(const h in s)s[h]!==""&&(y[h]=s[h]);return y})},deleteProduct(){this.axios.delete(`${v}/products/${this.tempProduct.id}`,this.tempProduct).then(c=>{this.getProducts(),this.tempProduct={},this.modalDel.hide()}).catch(c=>{u.threeLayerCheckType("error","刪除產品資料失敗")})},upload(){const c=this.$refs.fileInput,s=c.files[0],y=new FormData;y.append("file-to-upload",s),this.axios.post(`${v}/products`,y).then(h=>{u.threeLayerCheckType("warning",`
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `);const p=URL.createObjectURL(c.files[0]);this.tempProduct.imagesUrl.push(p),c.value=null}).catch(h=>{u.threeLayerCheckType("error","上傳產品圖片失敗")})}},mounted(){this.getProducts(),this.modalProduct=new V.Modal(this.$refs.productModal),this.modalDel=new V.Modal(this.$refs.delProductModal),this.collapseFirstDay=new k(this.$refs.collapseFirstDay,{toggle:!1}),this.accordionSecondDay=new k(this.$refs.accordionSecondDay,{toggle:!1}),this.accordionThirdDay=new k(this.$refs.accordionSecondDay,{toggle:!1})}},M={class:"container"},F={class:"row flex-column flex-md-row"},L={class:"col-12 col-md-3"},A=t("h1",{class:"my-4 fs-4 fs-md-1"},"產品管理",-1),N={class:"col-12 col-md-9"},j={class:"text-end mt-4"},E={class:"table mt-4"},B=t("thead",null,[t("tr",null,[t("th",{width:"80"},"上架"),t("th",{width:"80"},"分類"),t("th",{width:"200"},"產品名稱"),t("th",{width:"120"},"標籤"),t("th",{width:"80",class:"text-end"},"原價"),t("th",{width:"80",class:"text-end"},"售價"),t("th",{width:"120"})])],-1),I={key:0,class:"text-success"},R={key:1},z={class:"text-end"},G={class:"text-end"},H={class:"btn-group"},J=["onClick"],K=["onClick"],Q={"aria-label":"Page navigation example",class:"my-10"},W={class:"pagination justify-content-center"},X=["onClick"],Y={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-xl"},$={class:"modal-content border-0"},tt={class:"modal-header bg-dark text-white"},et={id:"productModalLabel",class:"modal-title"},ot=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),st={class:"modal-body"},rt={class:"row"},it={class:"col-sm-4"},lt={class:"mb-2"},at={class:"mb-3"},dt=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),nt=["src"],_t={key:0},ct=["src"],mt=["onUpdate:modelValue"],pt={class:"pt-4"},yt={class:"col-sm-8"},ut={class:"mb-3"},ht=t("label",{for:"title",class:"form-label"},[_("標題"),t("span",{class:"required"},"*")],-1),ft={class:"row"},bt={class:"mb-3 col-md-6"},gt=t("label",{for:"day_num",class:"form-label"},[_("旅遊天數"),t("span",{class:"required"},"*")],-1),Pt={class:"mb-3 col-md-6"},vt=t("label",{for:"creation_date",class:"form-label"},[_("建立日期"),t("span",{class:"required"},"*")],-1),Ut={class:"row"},xt={class:"mb-3 col-md-6"},kt=t("label",{for:"category",class:"form-label"},[_("分類"),t("span",{class:"required"},"*")],-1),Vt={class:"mb-3 col-md-6"},Dt=t("label",{for:"price",class:"form-label"},[_("單位"),t("span",{class:"required"},"*")],-1),wt={class:"row"},Ct={class:"mb-3 col-md-6"},Tt=t("label",{for:"tag_1",class:"form-label"},[_("標籤1"),t("span",{class:"required"},"*")],-1),qt={class:"mb-3 col-md-6"},Ot=t("label",{for:"tag_2",class:"form-label"},"標籤2",-1),St={class:"row"},Mt={class:"mb-3 col-md-6"},Ft=t("label",{for:"link",class:"form-label"},"連結",-1),Lt={class:"mb-3 col-md-6"},At=t("label",{for:"max_travelers",class:"form-label"},[_("出遊上限人數"),t("span",{class:"required"},"*")],-1),Nt={class:"row"},jt={class:"mb-3 col-md-6"},Et=t("label",{for:"origin_price",class:"form-label"},[_("原價"),t("span",{class:"required"},"*")],-1),Bt={class:"mb-3 col-md-6"},It=t("label",{for:"price",class:"form-label"},[_("售價"),t("span",{class:"required"},"*")],-1),Rt={class:"row"},zt={class:"col"},Gt={class:"accordion mb-3",id:"accordionFirstdDay"},Ht={class:"accordion-item"},Jt={class:"accordion-header"},Kt={id:"collapseFirstDay",class:"accordion-collapse collapse","data-bs-parent":"#accordionFirstdDay",ref:"collapseFirstDay"},Qt={class:"accordion-body"},Wt={class:"row"},Xt={key:0,class:"mb-3 col-md-6"},Yt=t("label",{for:"first_day_title",class:"form-label"},[_("行程天數"),t("span",{class:"required"},"*")],-1),Zt=["onUpdate:modelValue"],$t={key:1,class:"mb-3 col-md-6"},te=t("label",{for:"itinerary_first_day_am_title",class:"form-label"},[_("景點名稱-早上"),t("span",{class:"required"},"*")],-1),ee=["onUpdate:modelValue"],oe={key:2,class:"mb-3"},se=t("label",{for:"itinerary_first_day_am_content",class:"form-label"},[_("景點介紹-早上"),t("span",{class:"required"},"*")],-1),re=["onUpdate:modelValue"],ie={key:3,class:"col-md-6 mb-3"},le=t("label",{for:"itinerary_first_day_pm_title",class:"form-label"},[_("景點名稱-下午"),t("span",{class:"required"},"*")],-1),ae=["onUpdate:modelValue"],de={key:4,class:"mb-3"},ne=t("label",{for:"itinerary_first_day_pm_content",class:"form-label"},[_("景點介紹-下午"),t("span",{class:"required"},"*")],-1),_e=["onUpdate:modelValue"],ce={key:5,class:"col-md-6 mb-3"},me=t("label",{for:"itinerary_first_day_pm_title2",class:"form-label"},[_("景點名稱-下午2"),t("span",{class:"required"},"*")],-1),pe=["onUpdate:modelValue"],ye={key:6,class:"mb-3"},ue=t("label",{for:"itinerary_first_day_pm_content2",class:"form-label"},[_("景點介紹-下午2"),t("span",{class:"required"},"*")],-1),he=["onUpdate:modelValue"],fe={class:"row"},be={class:"col"},ge={class:"accordion mb-3",id:"accordionSecondDay"},Pe={class:"accordion-item"},ve={class:"accordion-header"},Ue={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionSecondDay",ref:"accordionSecondDay"},xe={class:"accordion-body"},ke={class:"row"},Ve={key:0,class:"mb-3 col-md-6"},De=t("label",{for:"second_day_title",class:"form-label"},"行程天數",-1),we=["onUpdate:modelValue"],Ce={key:1,class:"mb-3 col-md-6"},Te=t("label",{for:"itinerary_second_day_am_title",class:"form-label"},"景點名稱-早上",-1),qe=["onUpdate:modelValue"],Oe={key:2,class:"mb-3"},Se=t("label",{for:"itinerary_second_day_am_content",class:"form-label"},"景點介紹-早上",-1),Me=["onUpdate:modelValue"],Fe={key:3,class:"col-md-6 mb-3"},Le=t("label",{for:"itinerary_second_day_pm_title",class:"form-label"},"景點名稱-下午",-1),Ae=["onUpdate:modelValue"],Ne={key:4,class:"mb-3"},je=t("label",{for:"itinerary_second_day_pm_content",class:"form-label"},"景點介紹-下午",-1),Ee=["onUpdate:modelValue"],Be={key:5,class:"col-md-6 mb-3"},Ie=t("label",{for:"itinerary_second_day_pm_title2",class:"form-label"},"景點名稱-下午2",-1),Re=["onUpdate:modelValue"],ze={key:6,class:"mb-3"},Ge=t("label",{for:"itinerary_second_day_pm_content2",class:"form-label"},"景點介紹-下午2",-1),He=["onUpdate:modelValue"],Je={class:"row"},Ke={class:"col"},Qe={class:"accordion mb-3",id:"accordionThirdDay"},We={class:"accordion-item"},Xe={class:"accordion-header"},Ye={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionThirdDay",ref:"accordionThirdDay"},Ze={class:"accordion-body"},$e={class:"row"},to={key:0,class:"mb-3 col-md-6"},eo=t("label",{for:"third_day_title",class:"form-label"},"行程天數",-1),oo=["onUpdate:modelValue"],so={key:1,class:"mb-3 col-md-6"},ro=t("label",{for:"itinerary_third_day_am_title",class:"form-label"},"景點名稱-早上",-1),io=["onUpdate:modelValue"],lo={key:2,class:"mb-3"},ao=t("label",{for:"itinerary_third_day_am_content",class:"form-label"},"景點介紹-早上",-1),no=["onUpdate:modelValue"],_o={key:3,class:"col-md-6 mb-3"},co=t("label",{for:"itinerary_third_day_pm_title",class:"form-label"},"景點名稱-下午",-1),mo=["onUpdate:modelValue"],po={key:4,class:"mb-3"},yo=t("label",{for:"itinerary_third_day_pm_content",class:"form-label"},"景點介紹-下午",-1),uo=["onUpdate:modelValue"],ho={key:5,class:"col-md-6 mb-3"},fo=t("label",{for:"itinerary_third_day_pm_title2",class:"form-label"},"景點名稱-下午2",-1),bo=["onUpdate:modelValue"],go={key:6,class:"mb-3"},Po=t("label",{for:"itinerary_third_day_pm_content2",class:"form-label"},"景點介紹-下午2",-1),vo=["onUpdate:modelValue"],Uo=t("hr",null,null,-1),xo={class:"mb-3"},ko=t("label",{for:"description",class:"form-label"},[_("產品描述"),t("span",{class:"required"},"*")],-1),Vo={class:"mb-3"},Do=t("label",{for:"content",class:"form-label"},[_("說明內容"),t("span",{class:"required"},"*")],-1),wo={class:"mb-3"},Co=t("label",{for:"content",class:"form-label"},"服務內容",-1),To={class:"mb-3"},qo=t("label",{for:"content",class:"form-label"},"體驗說明",-1),Oo={class:"mb-3"},So=t("label",{for:"content",class:"form-label"},"其他資訊",-1),Mo={class:"mb-3"},Fo=t("label",{for:"content",class:"form-label"},"常見問題",-1),Lo={class:"row"},Ao={class:"mb-3 col-md-6"},No=t("label",{for:"start_date",class:"form-label"},[_("預約起始日"),t("span",{class:"required"},"*")],-1),jo=["min","max"],Eo={class:"mb-3 col-md-6"},Bo=t("label",{for:"end_date",class:"form-label"},[_("預約結束日"),t("span",{class:"required"},"*")],-1),Io=["min","max"],Ro={class:"row"},zo={class:"mb-3 col-md-6"},Go=t("label",{for:"go_start_date",class:"form-label"},[_("出發起始日"),t("span",{class:"required"},"*")],-1),Ho=["min","max"],Jo={class:"mb-3 col-md-6"},Ko=t("label",{for:"go_end_date",class:"form-label"},[_("出發結束日"),t("span",{class:"required"},"*")],-1),Qo=["min","max"],Wo={class:"mb-3"},Xo={class:"form-check"},Yo=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Zo={class:"modal-footer"},$o=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),ts={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},es={class:"modal-dialog"},os={class:"modal-content border-0"},ss=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),rs={class:"modal-body"},is={class:"text-danger"},ls={class:"modal-footer"},as=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ds(c,s,y,h,o,p){const D=q("AdminSidebar");return d(),a(b,null,[t("div",M,[t("div",F,[t("div",L,[A,C(D)]),t("div",N,[t("div",j,[t("button",{type:"button",class:"btn-turquoise",id:"addModalBtn",onClick:s[0]||(s[0]=e=>p.openModal("new",c.product))}," 建立新的產品 ")]),t("table",E,[B,t("tbody",null,[(d(!0),a(b,null,g(o.products,e=>(d(),a("tr",{key:e.id},[t("td",null,[e.is_enabled?(d(),a("span",I,"啟用")):(d(),a("span",R,"未啟用"))]),t("td",null,f(e.category),1),t("td",null,f(e.title),1),t("td",null,f(e.tag_1),1),t("td",z,f(e.origin_price),1),t("td",G,f(e.price),1),t("td",null,[t("div",H,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:n=>p.openModal("edit",e)}," 編輯 ",8,J),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:n=>p.openModal("delete",e)}," 刪除 ",8,K)])])]))),128))])]),t("nav",Q,[t("ul",W,[t("li",{class:P(["page-item",{disabled:!o.currentPage||o.currentPage===1}])},[t("button",{class:"page-link page-link-radius-2",onClick:s[1]||(s[1]=U(e=>o.currentPage>1&&p.getProducts(o.currentPage-1),["prevent"]))}," 上一頁 ")],2),(d(!0),a(b,null,g(o.pageTotal,e=>(d(),a("li",{class:"page-item",key:`page-${e}`},[t("button",{class:P(["page-link page-link-0 rounded-0",{active:e===o.currentPage}]),onClick:U(n=>p.getProducts(e),["prevent"])},f(e),11,X)]))),128)),t("li",{class:P(["page-item",{disabled:!o.currentPage||o.currentPage===o.pageTotal}])},[t("button",{class:"page-link page-link-radius",onClick:s[2]||(s[2]=U(e=>o.currentPage<o.pageTotal&&p.getProducts(o.currentPage+1),["prevent"]))}," 下一頁 ")],2)])])])])]),t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[t("h5",et,[t("span",null,f(o.isNew?"新增產品":"編輯產品"),1)]),ot]),t("div",st,[t("div",rt,[t("div",it,[t("div",lt,[t("div",at,[dt,r(t("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=e=>o.tempProduct.imageUrl=e),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[i,o.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:""},null,8,nt)]),Array.isArray(o.tempProduct.imagesUrl)?(d(),a("div",_t,[(d(!0),a(b,null,g(o.tempProduct.imagesUrl,(e,n)=>(d(),a("div",{key:n+1213},[t("img",{src:e,alt:"",class:"img-fluid my-2"},null,8,ct),r(t("input",{type:"text",class:"form-control my-2","onUpdate:modelValue":l=>o.tempProduct.imagesUrl[n]=l},null,8,mt),[[i,o.tempProduct.imagesUrl[n]]])]))),128)),o.tempProduct.imagesUrl.length===0||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(d(),a("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:s[4]||(s[4]=e=>o.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(d(),a("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:s[5]||(s[5]=e=>o.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):m("",!0),t("div",pt,[t("input",{type:"file",class:"form-control",ref:"fileInput",id:"file",placeholder:"請輸入圖片連結",onChange:s[6]||(s[6]=(...e)=>p.upload&&p.upload(...e))},null,544)])]),t("div",yt,[t("div",ut,[ht,r(t("input",{id:"title",type:"text","onUpdate:modelValue":s[7]||(s[7]=e=>o.tempProduct.title=e),class:"form-control",placeholder:"請輸入標題"},null,512),[[i,o.tempProduct.title]])]),t("div",ft,[t("div",bt,[gt,r(t("input",{id:"day_num",type:"number","onUpdate:modelValue":s[8]||(s[8]=e=>o.tempProduct.day_num=e),class:"form-control",placeholder:"請輸入旅遊天數"},null,512),[[i,o.tempProduct.day_num]])]),t("div",Pt,[vt,r(t("input",{id:"creation_date",type:"date","onUpdate:modelValue":s[9]||(s[9]=e=>o.tempProduct.creationDate=e),class:"form-control"},null,512),[[i,o.tempProduct.creationDate]])])]),t("div",Ut,[t("div",xt,[kt,r(t("input",{id:"category",type:"text","onUpdate:modelValue":s[10]||(s[10]=e=>o.tempProduct.category=e),class:"form-control",placeholder:"請輸入分類"},null,512),[[i,o.tempProduct.category]])]),t("div",Vt,[Dt,r(t("input",{id:"unit",type:"text","onUpdate:modelValue":s[11]||(s[11]=e=>o.tempProduct.unit=e),class:"form-control",placeholder:"請輸入單位"},null,512),[[i,o.tempProduct.unit]])])]),t("div",wt,[t("div",Ct,[Tt,r(t("input",{id:"tag_1",type:"text","onUpdate:modelValue":s[12]||(s[12]=e=>o.tempProduct.tag_1=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,o.tempProduct.tag_1]])]),t("div",qt,[Ot,r(t("input",{id:"tag_2",type:"text","onUpdate:modelValue":s[13]||(s[13]=e=>o.tempProduct.tag_2=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,o.tempProduct.tag_2]])])]),t("div",St,[t("div",Mt,[Ft,r(t("input",{id:"link",type:"text","onUpdate:modelValue":s[14]||(s[14]=e=>o.tempProduct.link=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,o.tempProduct.link]])]),t("div",Lt,[At,r(t("input",{id:"max_travelers",type:"number","onUpdate:modelValue":s[15]||(s[15]=e=>o.tempProduct.max_travelers=e),min:"3",max:"30",class:"form-control",placeholder:"請輸入出遊上限人數"},null,512),[[i,o.tempProduct.max_travelers]])])]),t("div",Nt,[t("div",jt,[Et,r(t("input",{id:"origin_price",type:"number","onUpdate:modelValue":s[16]||(s[16]=e=>o.tempProduct.origin_price=e),min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[i,o.tempProduct.origin_price]])]),t("div",Bt,[It,r(t("input",{id:"price",type:"number","onUpdate:modelValue":s[17]||(s[17]=e=>o.tempProduct.price=e),min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[i,o.tempProduct.price]])])]),t("div",Rt,[t("div",zt,[t("div",Gt,[t("div",Ht,[t("h2",Jt,[t("button",{class:P(["accordion-button bg-light",{collapsed:!o.isCollapseFirstOpen}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFirstDay","aria-expanded":"true","aria-controls":"collapseFirstDay",onClick:s[18]||(s[18]=(...e)=>p.toggleOpenProduct&&p.toggleOpenProduct(...e))}," 行程資料-第一天 ",2)]),r(t("div",Kt,[t("div",Qt,[t("div",Wt,[(d(!0),a(b,null,g(o.tempProduct.itinerary_data,(e,n)=>(d(),a("div",{key:n+1213},[n===0?(d(),a("div",Xt,[Yt,r(t("input",{id:"first_day_title",type:"text","onUpdate:modelValue":l=>e.first_day_title=l,class:"form-control",placeholder:"請輸入行程天數為第一天"},null,8,Zt),[[i,e.first_day_title]])])):m("",!0),n===0?(d(),a("div",$t,[te,r(t("input",{id:"itinerary_first_day_am_title",type:"text","onUpdate:modelValue":l=>e.itinerary_first_day_am_title=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,ee),[[i,e.itinerary_first_day_am_title]])])):m("",!0),n===0?(d(),a("div",oe,[se,r(t("textarea",{id:"itinerary_first_day_am_content",type:"text","onUpdate:modelValue":l=>e.itinerary_first_day_am_content=l,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,re),[[i,e.itinerary_first_day_am_content]])])):m("",!0),n===0?(d(),a("div",ie,[le,r(t("input",{id:"itinerary_first_day_pm_title",type:"text","onUpdate:modelValue":l=>e.itinerary_first_day_pm_title=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,ae),[[i,e.itinerary_first_day_pm_title]])])):m("",!0),n===0?(d(),a("div",de,[ne,r(t("textarea",{id:"itinerary_first_day_pm_content",type:"text","onUpdate:modelValue":l=>e.itinerary_first_day_pm_content=l,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,_e),[[i,e.itinerary_first_day_pm_content]])])):m("",!0),n===0?(d(),a("div",ce,[me,r(t("input",{id:"itinerary_first_day_pm_title2",type:"text","onUpdate:modelValue":l=>e.itinerary_first_day_pm_title2=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,pe),[[i,e.itinerary_first_day_pm_title2]])])):m("",!0),n===0?(d(),a("div",ye,[ue,r(t("textarea",{id:"itinerary_first_day_pm_content2",type:"text","onUpdate:modelValue":l=>e.itinerary_first_day_pm_content2=l,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,he),[[i,e.itinerary_first_day_pm_content2]])])):m("",!0)]))),128))])])],512),[[x,o.isCollapseFirstOpen]])])])])]),t("div",fe,[t("div",be,[t("div",ge,[t("div",Pe,[t("h2",ve,[t("button",{class:P(["accordion-button collapsed",{collapsed:!o.isCollapseSecondOpen}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",onClick:s[19]||(s[19]=(...e)=>p.toggleOpenSecond&&p.toggleOpenSecond(...e))}," 行程資料-第二天 ",2)]),r(t("div",Ue,[t("div",xe,[t("div",ke,[(d(!0),a(b,null,g(o.tempProduct.itinerary_data,(e,n)=>(d(),a("div",{key:n+1213},[n===1?(d(),a("div",Ve,[De,r(t("input",{id:"second_day_title",type:"text","onUpdate:modelValue":l=>e.second_day_title=l,class:"form-control",placeholder:"請輸入行程天數為第二天"},null,8,we),[[i,e.second_day_title]])])):m("",!0),n===1?(d(),a("div",Ce,[Te,r(t("input",{id:"itinerary_second_day_am_title",type:"text","onUpdate:modelValue":l=>e.itinerary_second_day_am_title=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,qe),[[i,e.itinerary_second_day_am_title]])])):m("",!0),n===1?(d(),a("div",Oe,[Se,r(t("textarea",{id:"itinerary_second_day_am_content","onUpdate:modelValue":l=>e.itinerary_second_day_am_content=l,class:"form-control",placeholder:"請輸入景點內容"},null,8,Me),[[i,e.itinerary_second_day_am_content]])])):m("",!0),n===1?(d(),a("div",Fe,[Le,r(t("input",{id:"itinerary_second_day_pm_title","onUpdate:modelValue":l=>e.itinerary_second_day_pm_title=l,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ae),[[i,e.itinerary_second_day_pm_title]])])):m("",!0),n===1?(d(),a("div",Ne,[je,r(t("textarea",{"onUpdate:modelValue":l=>e.itinerary_second_day_pm_content=l,id:"itinerary_second_day_pm_content",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Ee),[[i,e.itinerary_second_day_pm_content]])])):m("",!0),n===1?(d(),a("div",Be,[Ie,r(t("input",{id:"itinerary_second_day_pm_title2","onUpdate:modelValue":l=>e.itinerary_second_day_pm_title2=l,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Re),[[i,e.itinerary_second_day_pm_title2]])])):m("",!0),n===1?(d(),a("div",ze,[Ge,r(t("textarea",{"onUpdate:modelValue":l=>e.itinerary_second_day_pm_content2=l,id:"itinerary_second_day_pm_content2",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,He),[[i,e.itinerary_second_day_pm_content2]])])):m("",!0)]))),128))])])],512),[[x,o.isCollapseSecondOpen]])])])])]),t("div",Je,[t("div",Ke,[t("div",Qe,[t("div",We,[t("h2",Xe,[t("button",{class:P(["accordion-button collapsed",{collapsed:!o.isCollapseThirdOpen}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",onClick:s[20]||(s[20]=(...e)=>p.toggleOpenThird&&p.toggleOpenThird(...e))}," 行程資料-第三天 ",2)]),r(t("div",Ye,[t("div",Ze,[t("div",$e,[(d(!0),a(b,null,g(o.tempProduct.itinerary_data,(e,n)=>(d(),a("div",{key:n+1213},[n===2?(d(),a("div",to,[eo,r(t("input",{id:"third_day_title",type:"text","onUpdate:modelValue":l=>e.third_day_title=l,class:"form-control",placeholder:"請輸入行程天數為第三天"},null,8,oo),[[i,e.third_day_title]])])):m("",!0),n===2?(d(),a("div",so,[ro,r(t("input",{id:"itinerary_third_day_am_title",type:"text","onUpdate:modelValue":l=>e.itinerary_third_day_am_title=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,io),[[i,e.itinerary_third_day_am_title]])])):m("",!0),n===2?(d(),a("div",lo,[ao,r(t("textarea",{id:"itinerary_third_day_am_content",type:"text","onUpdate:modelValue":l=>e.itinerary_third_day_am_content=l,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,no),[[i,e.itinerary_third_day_am_content]])])):m("",!0),n===2?(d(),a("div",_o,[co,r(t("input",{id:"itinerary_third_day_pm_title",type:"text","onUpdate:modelValue":l=>e.itinerary_third_day_pm_title=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,mo),[[i,e.itinerary_third_day_pm_title]])])):m("",!0),n===2?(d(),a("div",po,[yo,r(t("textarea",{id:"itinerary_third_day_pm_content",type:"text","onUpdate:modelValue":l=>e.itinerary_third_day_pm_content=l,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,uo),[[i,e.itinerary_third_day_pm_content]])])):m("",!0),n===2?(d(),a("div",ho,[fo,r(t("input",{id:"itinerary_third_day_pm_title2",type:"text","onUpdate:modelValue":l=>e.itinerary_third_day_pm_title2=l,class:"form-control",placeholder:"請輸入景點名稱"},null,8,bo),[[i,e.itinerary_third_day_pm_title2]])])):m("",!0),n===2?(d(),a("div",go,[Po,r(t("textarea",{id:"itinerary_third_day_pm_content2",type:"text","onUpdate:modelValue":l=>e.itinerary_third_day_pm_content2=l,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,vo),[[i,e.itinerary_third_day_pm_content2]])])):m("",!0)]))),128))])])],512),[[x,o.isCollapseThirdOpen]])])])])]),Uo,t("div",xo,[ko,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":s[21]||(s[21]=e=>o.tempProduct.description=e),class:"form-control",placeholder:"請輸入產品描述",required:""},`\r
                `,512),[[i,o.tempProduct.description]])]),t("div",Vo,[Do,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":s[22]||(s[22]=e=>o.tempProduct.content=e),class:"form-control",placeholder:"請輸入說明內容",required:""},`\r
                `,512),[[i,o.tempProduct.content]])]),t("div",wo,[Co,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":s[23]||(s[23]=e=>o.tempProduct.provideServices=e),class:"form-control",placeholder:"請輸入服務內容"},`\r
                `,512),[[i,o.tempProduct.provideServices]])]),t("div",To,[qo,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":s[24]||(s[24]=e=>o.tempProduct.experienceDescription=e),class:"form-control",placeholder:"請輸入體驗說明"},`\r
                `,512),[[i,o.tempProduct.experienceDescription]])]),t("div",Oo,[So,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":s[25]||(s[25]=e=>o.tempProduct.otherInformation=e),class:"form-control",placeholder:"請輸入其他資訊"},`\r
                `,512),[[i,o.tempProduct.otherInformation]])]),t("div",Mo,[Fo,r(t("textarea",{id:"description",type:"text","onUpdate:modelValue":s[26]||(s[26]=e=>o.tempProduct.commonProblem=e),class:"form-control",placeholder:"請輸入常見問題"},`\r
                `,512),[[i,o.tempProduct.commonProblem]])]),t("div",Lo,[t("div",Ao,[No,r(t("input",{id:"start_date",type:"date","onUpdate:modelValue":s[27]||(s[27]=e=>o.tempProduct.startDate=e),class:"form-control",min:o.minDate,max:o.maxDate,required:""},null,8,jo),[[i,o.tempProduct.startDate]])]),t("div",Eo,[Bo,r(t("input",{id:"start_date",type:"date","onUpdate:modelValue":s[28]||(s[28]=e=>o.tempProduct.endDate=e),class:"form-control",min:o.minDate,max:o.maxDate,required:""},null,8,Io),[[i,o.tempProduct.endDate]])])]),t("div",Ro,[t("div",zo,[Go,r(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":s[29]||(s[29]=e=>o.tempProduct.goStartDate=e),class:"form-control",min:o.minDate,max:o.maxDate,required:""},null,8,Ho),[[i,o.tempProduct.goStartDate]])]),t("div",Jo,[Ko,r(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":s[30]||(s[30]=e=>o.tempProduct.goEndDate=e),class:"form-control",min:o.minDate,max:o.maxDate,required:""},null,8,Qo),[[i,o.tempProduct.goEndDate]])])]),t("div",Wo,[t("div",Xo,[r(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":s[31]||(s[31]=e=>o.tempProduct.is_enabled=e),type:"checkbox","true-value":1,"false-value":0},null,512),[[T,o.tempProduct.is_enabled]]),Yo])])])])]),t("div",Zo,[$o,t("button",{type:"button",class:"btn btn-primary",onClick:s[32]||(s[32]=(...e)=>p.updateProduct&&p.updateProduct(...e))},"確認")])])])],512),t("div",ts,[t("div",es,[t("div",os,[ss,t("div",rs,[_(" 是否刪除 "),t("strong",is,f(o.tempProduct.title),1),_(" 商品(刪除後將無法恢復)。 ")]),t("div",ls,[as,t("button",{type:"button",class:"btn btn-danger",onClick:s[33]||(s[33]=(...e)=>p.deleteProduct&&p.deleteProduct(...e))},"確認刪除")])])])],512)],64)}const ps=w(S,[["render",ds]]);export{ps as default};
