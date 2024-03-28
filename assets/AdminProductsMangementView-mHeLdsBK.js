import{_ as k,G as P,c as a,a as t,b as V,F as h,h as b,n as v,A as g,t as y,f as l,i,j as m,H as w,d as x,o as d,r as D}from"./index-QFxCqv35.js";import{A as M}from"./AdminSidebar-Z80U3ei5.js";const f="https://two024-south-json-server-vercel.onrender.com",C={components:{AdminSidebar:M},data(){return{products:[],tempProduct:{},pages:{},modalProduct:null,modelDel:null,isNew:!1,newProduct:{itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}]},newAllItineraryData:[],minDate:"2024-01-01",maxDate:"2024-12-31",formData:{productName:"",productDescription:""},pageTotal:0,currentPage:1,limitPage:10,parsedLinks:""}},methods:{getProducts(n=1){this.axios.get(`${f}/products?_limit=${this.limitPage}&_page=${n}`).then(o=>{var _=parseInt(o.headers["x-total-count"]);this.pageTotal=Math.ceil(_/this.limitPage),this.currentPage=n,this.products=o.data}).catch(o=>{alert(`${o.data.message}`)})},openModal(n,o){n==="new"?(this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}],imagesUrl:[]},this.isNew=!0,this.modalProduct.show()):n==="edit"?(this.tempProduct={...o},this.tempProduct.itinerary_data.length===0?this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}]}:this.tempProduct.itinerary_data.length===1?this.tempProduct.itinerary_data.push({second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}):this.tempProduct.itinerary_data.length===2&&this.tempProduct.itinerary_data.push({third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}),Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.modalProduct.show()):n==="delete"&&(this.tempProduct={...o},this.modalDel.show())},updateProduct(){const n=this.filterProduct(this.tempProduct);this.tempProduct=n,this.isNew?this.axios.post(`${f}/products`,this.tempProduct).then(o=>{alert("已建立產品"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{alert(`${o.data.message}`)}):this.isNew||this.axios.put(`${f}/products/${this.tempProduct.id}`,this.tempProduct).then(o=>{alert("已更新產品"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{alert(`${o.data.message}`)})},filterProduct(n){const o={};for(const _ in n)_==="itinerary_data"?(o[_]=this.filterItineraryData(n[_]),o[_]=o[_].filter(u=>Object.values(u).some(s=>s!==""))):n[_]!==""&&(o[_]=n[_]);return o},filterItineraryData(n){return n.map(o=>{const _={};for(const u in o)o[u]!==""&&(_[u]=o[u]);return _})},deleteProduct(){this.axios.delete(`${f}/products/${this.tempProduct.id}`,this.tempProduct).then(n=>{console.log(n),this.getProducts(),this.tempProduct={},this.modalDel.hide()}).catch(n=>{alert(`${n.data.message}`)})},upload(){const n=this.$refs.fileInput,o=n.files[0],_=new FormData;_.append("file-to-upload",o),this.axios.post(`${f}/products`,_).then(u=>{console.log(u.data),alert(`
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `);const p=URL.createObjectURL(n.files[0]);this.tempProduct.imagesUrl.push(p),n.value=null}).catch(u=>{alert(`${u.data.message}`)})},getNewItineraryData(){this.tempProduct.forEach((n,o)=>{console.log(n.itinerary_data)}),console.log(this.newAllItineraryData)}},mounted(){this.getProducts(),this.modalProduct=new P.Modal(this.$refs.productModal),this.modalDel=new P.Modal(this.$refs.delProductModal)}},T={class:"container"},A={class:"row flex-column flex-md-row"},N={class:"col-12 col-md-3"},S=t("h1",{class:"my-4 fs-4 fs-md-1"},"產品管理",-1),F={class:"col-12 col-md-9"},L={class:"text-end mt-4"},j={class:"table mt-4"},B=t("thead",null,[t("tr",null,[t("th",{width:"80"},"上架"),t("th",{width:"80"},"分類"),t("th",{width:"200"},"產品名稱"),t("th",{width:"120"},"標籤"),t("th",{width:"80",class:"text-end"},"原價"),t("th",{width:"80",class:"text-end"},"售價"),t("th",{width:"120"})])],-1),E={key:0,class:"text-success"},I={key:1},O={class:"text-end"},R={class:"text-end"},q={class:"btn-group"},z=["onClick"],G=["onClick"],H={"aria-label":"Page navigation example ",class:"my-10"},J={class:"pagination justify-content-center"},K=["value","onClick"],Q={class:"page-item"},W={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},X={class:"modal-dialog modal-xl"},Y={class:"modal-content border-0"},Z={class:"modal-header bg-dark text-white"},$={id:"productModalLabel",class:"modal-title"},tt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),et={class:"modal-body"},ot={class:"row"},st={class:"col-sm-4"},lt={class:"mb-2"},it={class:"mb-3"},at=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),dt=["src"],rt={key:0},nt=["src"],ct=["onUpdate:modelValue"],_t={class:"pt-3"},mt={class:"col-sm-8"},pt={class:"mb-3"},ut=t("label",{for:"title",class:"form-label"},"標題",-1),yt={class:"row"},ht={class:"mb-3 col-md-6"},bt=t("label",{for:"day_num",class:"form-label"},"旅遊天數",-1),ft={class:"mb-3 col-md-6"},vt=t("label",{for:"creation_date",class:"form-label"},"建立日期",-1),gt={class:"row"},Pt={class:"mb-3 col-md-6"},xt=t("label",{for:"category",class:"form-label"},"分類",-1),Ut={class:"mb-3 col-md-6"},kt=t("label",{for:"price",class:"form-label"},"單位",-1),Vt={class:"row"},wt={class:"mb-3 col-md-6"},Dt=t("label",{for:"tag_1",class:"form-label"},"標籤1",-1),Mt={class:"mb-3 col-md-6"},Ct=t("label",{for:"tag_2",class:"form-label"},"標籤2",-1),Tt={class:"row"},At={class:"mb-3 col-md-6"},Nt=t("label",{for:"link",class:"form-label"},"連結",-1),St={class:"mb-3 col-md-6"},Ft=t("label",{for:"max_travelers",class:"form-label"},"出遊上限人數",-1),Lt={class:"row"},jt={class:"mb-3 col-md-6"},Bt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Et={class:"mb-3 col-md-6"},It=t("label",{for:"price",class:"form-label"},"售價",-1),Ot={class:"row"},Rt={class:"col"},qt={class:"accordion mb-3",id:"accordionFirstdDay"},zt={class:"accordion-item"},Gt=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFirstDay","aria-expanded":"true","aria-controls":"collapseFirstDay"}," 行程資料-第一天 ")],-1),Ht={id:"collapseFirstDay",class:"accordion-collapse collapse","data-bs-parent":"#accordionFirstdDay"},Jt={class:"accordion-body"},Kt={class:"row"},Qt={key:0,class:"mb-3 col-md-6"},Wt=t("label",{for:"first_day_title",class:"form-label"},"行程天數",-1),Xt=["onUpdate:modelValue"],Yt={key:1,class:"mb-3 col-md-6"},Zt=t("label",{for:"itinerary_first_day_am_title",class:"form-label"},"景點名稱-早上",-1),$t=["onUpdate:modelValue"],te={key:2,class:"mb-3"},ee=t("label",{for:"itinerary_first_day_am_content",class:"form-label"},"景點介紹-早上",-1),oe=["onUpdate:modelValue"],se={key:3,class:"col-md-6 mb-3"},le=t("label",{for:"itinerary_first_day_pm_title",class:"form-label"},"景點名稱-下午",-1),ie=["onUpdate:modelValue"],ae={key:4,class:"mb-3"},de=t("label",{for:"itinerary_first_day_pm_content",class:"form-label"},"景點介紹-下午",-1),re=["onUpdate:modelValue"],ne={class:"row"},ce={class:"col"},_e={class:"accordion mb-3",id:"accordionSecondDay"},me={class:"accordion-item"},pe=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," 行程資料-第二天 ")],-1),ue={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionSecondDay"},ye={class:"accordion-body"},he={class:"row"},be={key:0,class:"mb-3 col-md-6"},fe=t("label",{for:"second_day_title",class:"form-label"},"行程天數",-1),ve=["onUpdate:modelValue"],ge={key:1,class:"mb-3 col-md-6"},Pe=t("label",{for:"itinerary_second_day_am_title",class:"form-label"},"景點名稱-早上",-1),xe=["onUpdate:modelValue"],Ue={key:2,class:"mb-3"},ke=t("label",{for:"itinerary_second_day_am_content",class:"form-label"},"景點介紹-早上",-1),Ve=["onUpdate:modelValue"],we={key:3,class:"col-md-6 mb-3"},De=t("label",{for:"itinerary_second_day_pm_title",class:"form-label"},"景點名稱-下午",-1),Me=["onUpdate:modelValue"],Ce={key:4,class:"mb-3"},Te=t("label",{for:"itinerary_second_day_pm_content",class:"form-label"},"景點介紹-下午",-1),Ae=["onUpdate:modelValue"],Ne={class:"row"},Se={class:"col"},Fe={class:"accordion mb-3",id:"accordionThirdDay"},Le={class:"accordion-item"},je=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," 行程資料-第三天 ")],-1),Be={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionThirdDay"},Ee={class:"accordion-body"},Ie={class:"row"},Oe={key:0,class:"mb-3 col-md-6"},Re=t("label",{for:"third_day_title",class:"form-label"},"行程天數",-1),qe=["onUpdate:modelValue"],ze={key:1,class:"mb-3 col-md-6"},Ge=t("label",{for:"itinerary_third_day_am_title",class:"form-label"},"景點名稱-早上",-1),He=["onUpdate:modelValue"],Je={key:2,class:"mb-3"},Ke=t("label",{for:"itinerary_third_day_am_content",class:"form-label"},"景點介紹-早上",-1),Qe=["onUpdate:modelValue"],We={key:3,class:"col-md-6 mb-3"},Xe=t("label",{for:"itinerary_third_day_pm_title",class:"form-label"},"景點名稱-下午",-1),Ye=["onUpdate:modelValue"],Ze={key:4,class:"mb-3"},$e=t("label",{for:"itinerary_third_day_pm_content",class:"form-label"},"景點介紹-下午",-1),to=["onUpdate:modelValue"],eo=t("hr",null,null,-1),oo={class:"mb-3"},so=t("label",{for:"description",class:"form-label"},"產品描述",-1),lo={class:"mb-3"},io=t("label",{for:"content",class:"form-label"},"說明內容",-1),ao={class:"mb-3"},ro=t("label",{for:"content",class:"form-label"},"服務內容",-1),no={class:"mb-3"},co=t("label",{for:"content",class:"form-label"},"體驗說明",-1),_o={class:"mb-3"},mo=t("label",{for:"content",class:"form-label"},"其他資訊",-1),po={class:"mb-3"},uo=t("label",{for:"content",class:"form-label"},"常見問題",-1),yo={class:"row"},ho={class:"mb-3 col-md-6"},bo=t("label",{for:"start_date",class:"form-label"},"預約起始日",-1),fo=["min","max"],vo={class:"mb-3 col-md-6"},go=t("label",{for:"end_date",class:"form-label"},"預約結束日",-1),Po=["min","max"],xo={class:"row"},Uo={class:"mb-3 col-md-6"},ko=t("label",{for:"go_start_date",class:"form-label"},"出發起始日",-1),Vo=["min","max"],wo={class:"mb-3 col-md-6"},Do=t("label",{for:"go_end_date",class:"form-label"},"出發結束日",-1),Mo=["min","max"],Co={class:"mb-3"},To={class:"form-check"},Ao=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),No={class:"modal-footer"},So=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Fo={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Lo={class:"modal-dialog"},jo={class:"modal-content border-0"},Bo=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Eo={class:"modal-body"},Io={class:"text-danger"},Oo={class:"modal-footer"},Ro=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function qo(n,o,_,u,s,p){const U=D("AdminSidebar");return d(),a(h,null,[t("div",T,[t("div",A,[t("div",N,[S,V(U)]),t("div",F,[t("div",L,[t("button",{type:"button",class:"btn-turquoise border-0",id:"addModalBtn",onClick:o[0]||(o[0]=e=>p.openModal("new",n.product))}," 建立新的產品 ")]),t("table",j,[B,t("tbody",null,[(d(!0),a(h,null,b(s.products,e=>(d(),a("tr",{key:e.id},[t("td",null,[e.is_enabled?(d(),a("span",E,"啟用")):(d(),a("span",I,"未啟用"))]),t("td",null,y(e.category),1),t("td",null,y(e.title),1),t("td",null,y(e.tag_1),1),t("td",O,y(e.origin_price),1),t("td",R,y(e.price),1),t("td",null,[t("div",q,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:c=>p.openModal("edit",e)}," 編輯 ",8,z),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>p.openModal("delete",e)}," 刪除 ",8,G)])])]))),128))])]),t("nav",H,[t("ul",J,[t("li",{class:v(["page-item",{disabled:!s.currentPage||s.currentPage===1}])},[t("a",{class:"page-link page-link-radius-2",href:"",onClick:o[1]||(o[1]=g(e=>p.getProducts(s.currentPage-1),["prevent"]))},"上一頁")],2),(d(!0),a(h,null,b(s.pageTotal,e=>(d(),a("li",{class:"page-item",key:e+123},[t("a",{class:v(["page-link page-link-0 rounded-0",{active:e===s.currentPage}]),href:"",value:e,onClick:g(c=>p.getProducts(e),["prevent"])},y(e),11,K)]))),128)),t("li",Q,[t("a",{class:v(["page-link page-link-radius",{disabled:!s.currentPage||s.currentPage===s.pageTotal}]),href:"",onClick:o[2]||(o[2]=g(e=>p.getProducts(s.currentPage+1),["prevent"]))},"下一頁",2)])])])])])]),t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("h5",$,[t("span",null,y(s.isNew?"新增產品":"編輯產品"),1)]),tt]),t("div",et,[t("div",ot,[t("div",st,[t("div",lt,[t("div",it,[at,l(t("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>s.tempProduct.imageUrl=e),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[i,s.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,dt)]),Array.isArray(s.tempProduct.imagesUrl)?(d(),a("div",rt,[(d(!0),a(h,null,b(s.tempProduct.imagesUrl,(e,c)=>(d(),a("div",{key:c+1213},[t("img",{src:e,alt:"",class:"img-fluid my-2"},null,8,nt),l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":r=>s.tempProduct.imagesUrl[c]=r},null,8,ct),[[i,s.tempProduct.imagesUrl[c]]])]))),128)),s.tempProduct.imagesUrl.length===0||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(d(),a("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[4]||(o[4]=e=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(d(),a("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[5]||(o[5]=e=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):m("",!0),t("div",_t,[t("input",{type:"file",class:"form-control",ref:"fileInput",id:"file",placeholder:"請輸入圖片連結",onChange:o[6]||(o[6]=(...e)=>p.upload&&p.upload(...e))},null,544)])]),t("div",mt,[t("div",pt,[ut,l(t("input",{id:"title",type:"text","onUpdate:modelValue":o[7]||(o[7]=e=>s.tempProduct.title=e),class:"form-control",placeholder:"請輸入標題"},null,512),[[i,s.tempProduct.title]])]),t("div",yt,[t("div",ht,[bt,l(t("input",{id:"day_num",type:"number","onUpdate:modelValue":o[8]||(o[8]=e=>s.tempProduct.day_num=e),class:"form-control",placeholder:"請輸入旅遊天數"},null,512),[[i,s.tempProduct.day_num]])]),t("div",ft,[vt,l(t("input",{id:"creation_date",type:"date","onUpdate:modelValue":o[9]||(o[9]=e=>s.tempProduct.creationDate=e),class:"form-control"},null,512),[[i,s.tempProduct.creationDate]])])]),t("div",gt,[t("div",Pt,[xt,l(t("input",{id:"category",type:"text","onUpdate:modelValue":o[10]||(o[10]=e=>s.tempProduct.category=e),class:"form-control",placeholder:"請輸入分類"},null,512),[[i,s.tempProduct.category]])]),t("div",Ut,[kt,l(t("input",{id:"unit",type:"text","onUpdate:modelValue":o[11]||(o[11]=e=>s.tempProduct.unit=e),class:"form-control",placeholder:"請輸入單位"},null,512),[[i,s.tempProduct.unit]])])]),t("div",Vt,[t("div",wt,[Dt,l(t("input",{id:"tag_1",type:"text","onUpdate:modelValue":o[12]||(o[12]=e=>s.tempProduct.tag_1=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,s.tempProduct.tag_1]])]),t("div",Mt,[Ct,l(t("input",{id:"tag_2",type:"text","onUpdate:modelValue":o[13]||(o[13]=e=>s.tempProduct.tag_2=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,s.tempProduct.tag_2]])])]),t("div",Tt,[t("div",At,[Nt,l(t("input",{id:"link",type:"text","onUpdate:modelValue":o[14]||(o[14]=e=>s.tempProduct.link=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,s.tempProduct.link]])]),t("div",St,[Ft,l(t("input",{id:"max_travelers",type:"number","onUpdate:modelValue":o[15]||(o[15]=e=>s.tempProduct.max_travelers=e),min:"3",max:"30",class:"form-control",placeholder:"請輸入出遊上限人數"},null,512),[[i,s.tempProduct.max_travelers]])])]),t("div",Lt,[t("div",jt,[Bt,l(t("input",{id:"origin_price",type:"number","onUpdate:modelValue":o[16]||(o[16]=e=>s.tempProduct.origin_price=e),min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[i,s.tempProduct.origin_price]])]),t("div",Et,[It,l(t("input",{id:"price",type:"number","onUpdate:modelValue":o[17]||(o[17]=e=>s.tempProduct.price=e),min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[i,s.tempProduct.price]])])]),t("div",Ot,[t("div",Rt,[t("div",qt,[t("div",zt,[Gt,t("div",Ht,[t("div",Jt,[t("div",Kt,[(d(!0),a(h,null,b(s.tempProduct.itinerary_data,(e,c)=>(d(),a("div",{key:c+1213},[c===0?(d(),a("div",Qt,[Wt,l(t("input",{id:"first_day_title",type:"text","onUpdate:modelValue":r=>e.first_day_title=r,class:"form-control",placeholder:"請輸入行程天數為第一天"},null,8,Xt),[[i,e.first_day_title]])])):m("",!0),c===0?(d(),a("div",Yt,[Zt,l(t("input",{id:"itinerary_first_day_am_title",type:"text","onUpdate:modelValue":r=>e.itinerary_first_day_am_title=r,class:"form-control",placeholder:"請輸入景點名稱"},null,8,$t),[[i,e.itinerary_first_day_am_title]])])):m("",!0),c===0?(d(),a("div",te,[ee,l(t("textarea",{id:"itinerary_first_day_am_content",type:"text","onUpdate:modelValue":r=>e.itinerary_first_day_am_content=r,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,oe),[[i,e.itinerary_first_day_am_content]])])):m("",!0),c===0?(d(),a("div",se,[le,l(t("input",{id:"itinerary_first_day_pm_title",type:"text","onUpdate:modelValue":r=>e.itinerary_first_day_pm_title=r,class:"form-control",placeholder:"請輸入景點名稱"},null,8,ie),[[i,e.itinerary_first_day_pm_title]])])):m("",!0),c===0?(d(),a("div",ae,[de,l(t("textarea",{id:"itinerary_first_day_pm_content",type:"text","onUpdate:modelValue":r=>e.itinerary_first_day_pm_content=r,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,re),[[i,e.itinerary_first_day_pm_content]])])):m("",!0)]))),128))])])])])])])]),t("div",ne,[t("div",ce,[t("div",_e,[t("div",me,[pe,t("div",ue,[t("div",ye,[t("div",he,[(d(!0),a(h,null,b(s.tempProduct.itinerary_data,(e,c)=>(d(),a("div",{key:c+1213},[c===1?(d(),a("div",be,[fe,l(t("input",{id:"second_day_title",type:"text","onUpdate:modelValue":r=>e.second_day_title=r,class:"form-control",placeholder:"請輸入行程天數為第二天"},null,8,ve),[[i,e.second_day_title]])])):m("",!0),c===1?(d(),a("div",ge,[Pe,l(t("input",{id:"itinerary_second_day_am_title",type:"text","onUpdate:modelValue":r=>e.itinerary_second_day_am_title=r,class:"form-control",placeholder:"請輸入景點名稱"},null,8,xe),[[i,e.itinerary_second_day_am_title]])])):m("",!0),c===1?(d(),a("div",Ue,[ke,l(t("textarea",{id:"itinerary_second_day_am_content","onUpdate:modelValue":r=>e.itinerary_second_day_am_content=r,class:"form-control",placeholder:"請輸入景點內容"},null,8,Ve),[[i,e.itinerary_second_day_am_content]])])):m("",!0),c===1?(d(),a("div",we,[De,l(t("input",{id:"itinerary_second_day_pm_title","onUpdate:modelValue":r=>e.itinerary_second_day_pm_title=r,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Me),[[i,e.itinerary_second_day_pm_title]])])):m("",!0),c===1?(d(),a("div",Ce,[Te,l(t("textarea",{"onUpdate:modelValue":r=>e.itinerary_second_day_pm_content=r,id:"itinerary_second_day_pm_content",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Ae),[[i,e.itinerary_second_day_pm_content]])])):m("",!0)]))),128))])])])])])])]),t("div",Ne,[t("div",Se,[t("div",Fe,[t("div",Le,[je,t("div",Be,[t("div",Ee,[t("div",Ie,[(d(!0),a(h,null,b(s.tempProduct.itinerary_data,(e,c)=>(d(),a("div",{key:c+1213},[c===2?(d(),a("div",Oe,[Re,l(t("input",{id:"third_day_title",type:"text","onUpdate:modelValue":r=>e.third_day_title=r,class:"form-control",placeholder:"請輸入行程天數為第三天"},null,8,qe),[[i,e.third_day_title]])])):m("",!0),c===2?(d(),a("div",ze,[Ge,l(t("input",{id:"itinerary_third_day_am_title",type:"text","onUpdate:modelValue":r=>e.itinerary_third_day_am_title=r,class:"form-control",placeholder:"請輸入景點名稱"},null,8,He),[[i,e.itinerary_third_day_am_title]])])):m("",!0),c===2?(d(),a("div",Je,[Ke,l(t("textarea",{id:"itinerary_third_day_am_content",type:"text","onUpdate:modelValue":r=>e.itinerary_third_day_am_content=r,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Qe),[[i,e.itinerary_third_day_am_content]])])):m("",!0),c===2?(d(),a("div",We,[Xe,l(t("input",{id:"itinerary_third_day_pm_title",type:"text","onUpdate:modelValue":r=>e.itinerary_third_day_pm_title=r,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ye),[[i,e.itinerary_third_day_pm_title]])])):m("",!0),c===2?(d(),a("div",Ze,[$e,l(t("textarea",{id:"itinerary_third_day_pm_content",type:"text","onUpdate:modelValue":r=>e.itinerary_third_day_pm_content=r,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,to),[[i,e.itinerary_third_day_pm_content]])])):m("",!0)]))),128))])])])])])])]),eo,t("div",oo,[so,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[18]||(o[18]=e=>s.tempProduct.description=e),class:"form-control",placeholder:"請輸入產品描述"},`\r
                `,512),[[i,s.tempProduct.description]])]),t("div",lo,[io,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[19]||(o[19]=e=>s.tempProduct.content=e),class:"form-control",placeholder:"請輸入說明內容"},`\r
                `,512),[[i,s.tempProduct.content]])]),t("div",ao,[ro,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[20]||(o[20]=e=>s.tempProduct.provideServices=e),class:"form-control",placeholder:"請輸入服務內容"},`\r
                `,512),[[i,s.tempProduct.provideServices]])]),t("div",no,[co,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[21]||(o[21]=e=>s.tempProduct.experienceDescription=e),class:"form-control",placeholder:"請輸入體驗說明"},`\r
                `,512),[[i,s.tempProduct.experienceDescription]])]),t("div",_o,[mo,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[22]||(o[22]=e=>s.tempProduct.otherInformation=e),class:"form-control",placeholder:"請輸入其他資訊"},`\r
                `,512),[[i,s.tempProduct.otherInformation]])]),t("div",po,[uo,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[23]||(o[23]=e=>s.tempProduct.commonProblem=e),class:"form-control",placeholder:"請輸入常見問題"},`\r
                `,512),[[i,s.tempProduct.commonProblem]])]),t("div",yo,[t("div",ho,[bo,l(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[24]||(o[24]=e=>s.tempProduct.startDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,fo),[[i,s.tempProduct.startDate]])]),t("div",vo,[go,l(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[25]||(o[25]=e=>s.tempProduct.endDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,Po),[[i,s.tempProduct.endDate]])])]),t("div",xo,[t("div",Uo,[ko,l(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[26]||(o[26]=e=>s.tempProduct.goStartDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,Vo),[[i,s.tempProduct.goStartDate]])]),t("div",wo,[Do,l(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[27]||(o[27]=e=>s.tempProduct.goEndDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,Mo),[[i,s.tempProduct.goEndDate]])])]),t("div",Co,[t("div",To,[l(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":o[28]||(o[28]=e=>s.tempProduct.is_enabled=e),type:"checkbox","true-value":1,"false-value":0},null,512),[[w,s.tempProduct.is_enabled]]),Ao])])])])]),t("div",No,[So,t("button",{type:"button",class:"btn btn-primary",onClick:o[29]||(o[29]=(...e)=>p.updateProduct&&p.updateProduct(...e))},"確認")])])])],512),t("div",Fo,[t("div",Lo,[t("div",jo,[Bo,t("div",Eo,[x(" 是否刪除 "),t("strong",Io,y(s.tempProduct.title),1),x(" 商品(刪除後將無法恢復)。 ")]),t("div",Oo,[Ro,t("button",{type:"button",class:"btn btn-danger",onClick:o[30]||(o[30]=(...e)=>p.deleteProduct&&p.deleteProduct(...e))},"確認刪除")])])])],512)],64)}const Ho=k(C,[["render",qo]]);export{Ho as default};