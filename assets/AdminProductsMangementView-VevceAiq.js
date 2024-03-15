import{_ as x,G as v,c as d,a as t,b as U,F as h,h as b,t as y,f as l,i,j as c,H as V,d as P,o as r,r as k}from"./index-OzyLONWC.js";import{A as w}from"./AdminSidebar-g3HNWMMx.js";const D="https://ec-course-api.hexschool.io/v2",f="https://two024-south-json-server-vercel.onrender.com",M={components:{AdminSidebar:w},data(){return{products:[],tempProduct:{},pages:{},modalProduct:null,modelDel:null,isNew:!1,newProduct:{itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}]},newAllItineraryData:[],minDate:"2024-01-01",maxDate:"2024-12-31",formData:{productName:"",productDescription:""}}},methods:{checkAdmin(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization=this.token,this.token?this.axios.post(`${D}/api/user/check`).then(n=>{this.userIsLoggedIn=!0}).catch(n=>{this.userIsLoggedIn=!1,alert("管理者身分驗證失敗，自動跳轉至登入頁面"),this.$router.push({path:"/admin/adminlogin"})}):(alert("目前未登入管理者身分，請重新登入"),this.$router.push({path:"/admin/adminlogin"}))},getProducts(){this.axios.get(`${f}/products`).then(n=>{this.products=n.data}).catch(n=>{alert(`${n.data.message}`)})},openModal(n,o){n==="new"?(this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}],imagesUrl:[]},this.isNew=!0,this.modalProduct.show()):n==="edit"?(this.tempProduct={...o},this.tempProduct.itinerary_data.length===0?this.tempProduct={itinerary_data:[{first_day_title:"",itinerary_first_day_am_title:"",itinerary_first_day_am_content:"",itinerary_first_day_pm_title:"",itinerary_first_day_pm_content:""},{second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}]}:this.tempProduct.itinerary_data.length===1?this.tempProduct.itinerary_data.push({second_day_title:"",itinerary_second_day_am_title:"",itinerary_second_day_am_content:"",itinerary_second_day_pm_title:"",itinerary_second_day_pm_content:""},{third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}):this.tempProduct.itinerary_data.length===2&&this.tempProduct.itinerary_data.push({third_day_title:"",itinerary_third_day_am_title:"",itinerary_third_day_am_content:"",itinerary_third_day_pm_title:"",itinerary_third_day_pm_content:""}),Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.modalProduct.show()):n==="delete"&&(this.tempProduct={...o},this.modalDel.show())},updateProduct(){const n=this.filterProduct(this.tempProduct);this.tempProduct=n,this.isNew?this.axios.post(`${f}/products`,this.tempProduct).then(o=>{alert("已建立產品"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{alert(`${o.data.message}`)}):this.isNew||this.axios.put(`${f}/products/${this.tempProduct.id}`,this.tempProduct).then(o=>{alert("已更新產品"),this.getProducts(),this.tempProduct={},this.modalProduct.hide()}).catch(o=>{alert(`${o.data.message}`)})},filterProduct(n){const o={};for(const m in n)m==="itinerary_data"?(o[m]=this.filterItineraryData(n[m]),o[m]=o[m].filter(u=>Object.values(u).some(s=>s!==""))):n[m]!==""&&(o[m]=n[m]);return o},filterItineraryData(n){return n.map(o=>{const m={};for(const u in o)o[u]!==""&&(m[u]=o[u]);return m})},deleteProduct(){this.axios.delete(`${f}/products/${this.tempProduct.id}`,this.tempProduct).then(n=>{console.log(n),this.getProducts(),this.tempProduct={},this.modalDel.hide()}).catch(n=>{alert(`${n.data.message}`)})},upload(){const n=this.$refs.fileInput,o=n.files[0],m=new FormData;m.append("file-to-upload",o),this.axios.post(`${f}/products`,m).then(u=>{console.log(u.data),alert(`
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `);const p=URL.createObjectURL(n.files[0]);this.tempProduct.imagesUrl.push(p),n.value=null}).catch(u=>{alert(`${u.data.message}`)})},getNewItineraryData(){this.tempProduct.forEach((n,o)=>{console.log(n.itinerary_data)}),console.log(this.newAllItineraryData)}},mounted(){this.getProducts(),this.modalProduct=new v.Modal(this.$refs.productModal),this.modalDel=new v.Modal(this.$refs.delProductModal)}},C={class:"container"},A={class:"row"},N={class:"col-3"},T=t("h1",{class:"my-4"},"產品管理",-1),S={class:"col-9"},L={class:"text-end mt-4"},F={class:"table mt-4"},I=t("thead",null,[t("tr",null,[t("th",{width:"100"},"上架"),t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",null,"標籤"),t("th",{width:"120",class:"text-end"},"原價"),t("th",{width:"120",class:"text-end"},"售價"),t("th",{width:"120"})])],-1),j={key:0,class:"text-success"},B={key:1},E={class:"text-end"},O={class:"text-end"},R={class:"btn-group"},z=["onClick"],G=["onClick"],H={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},q={class:"modal-dialog modal-xl"},J={class:"modal-content border-0"},K={class:"modal-header bg-dark text-white"},Q={id:"productModalLabel",class:"modal-title"},W=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},$={class:"mb-2"},tt={class:"mb-3"},et=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),ot=["src"],st={key:0},lt=["src"],it=["onUpdate:modelValue"],at={class:"pt-3"},dt={class:"col-sm-8"},rt={class:"mb-3"},nt=t("label",{for:"title",class:"form-label"},"標題",-1),_t={class:"row"},ct={class:"mb-3 col-md-6"},mt=t("label",{for:"day_num",class:"form-label"},"旅遊天數",-1),pt={class:"mb-3 col-md-6"},ut=t("label",{for:"creation_date",class:"form-label"},"建立日期",-1),yt={class:"row"},ht={class:"mb-3 col-md-6"},bt=t("label",{for:"category",class:"form-label"},"分類",-1),ft={class:"mb-3 col-md-6"},vt=t("label",{for:"price",class:"form-label"},"單位",-1),Pt={class:"row"},gt={class:"mb-3 col-md-6"},xt=t("label",{for:"tag_1",class:"form-label"},"標籤1",-1),Ut={class:"mb-3 col-md-6"},Vt=t("label",{for:"tag_2",class:"form-label"},"標籤2",-1),kt={class:"row"},wt={class:"mb-3 col-md-6"},Dt=t("label",{for:"link",class:"form-label"},"連結",-1),Mt={class:"mb-3 col-md-6"},Ct=t("label",{for:"max_travelers",class:"form-label"},"出遊上限人數",-1),At={class:"row"},Nt={class:"mb-3 col-md-6"},Tt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),St={class:"mb-3 col-md-6"},Lt=t("label",{for:"price",class:"form-label"},"售價",-1),Ft={class:"row"},It={class:"col"},jt={class:"accordion mb-3",id:"accordionFirstdDay"},Bt={class:"accordion-item"},Et=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFirstDay","aria-expanded":"true","aria-controls":"collapseFirstDay"}," 行程資料-第一天 ")],-1),Ot={id:"collapseFirstDay",class:"accordion-collapse collapse","data-bs-parent":"#accordionFirstdDay"},Rt={class:"accordion-body"},zt={class:"row"},Gt={key:0,class:"mb-3 col-md-6"},Ht=t("label",{for:"first_day_title",class:"form-label"},"行程天數",-1),qt=["onUpdate:modelValue"],Jt={key:1,class:"mb-3 col-md-6"},Kt=t("label",{for:"itinerary_first_day_am_title",class:"form-label"},"景點名稱-早上",-1),Qt=["onUpdate:modelValue"],Wt={key:2,class:"mb-3"},Xt=t("label",{for:"itinerary_first_day_am_content",class:"form-label"},"景點介紹-早上",-1),Yt=["onUpdate:modelValue"],Zt={key:3,class:"col-md-6 mb-3"},$t=t("label",{for:"itinerary_first_day_pm_title",class:"form-label"},"景點名稱-下午",-1),te=["onUpdate:modelValue"],ee={key:4,class:"mb-3"},oe=t("label",{for:"itinerary_first_day_pm_content",class:"form-label"},"景點介紹-下午",-1),se=["onUpdate:modelValue"],le={class:"row"},ie={class:"col"},ae={class:"accordion mb-3",id:"accordionSecondDay"},de={class:"accordion-item"},re=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}," 行程資料-第二天 ")],-1),ne={id:"collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionSecondDay"},_e={class:"accordion-body"},ce={class:"row"},me={key:0,class:"mb-3 col-md-6"},pe=t("label",{for:"second_day_title",class:"form-label"},"行程天數",-1),ue=["onUpdate:modelValue"],ye={key:1,class:"mb-3 col-md-6"},he=t("label",{for:"itinerary_second_day_am_title",class:"form-label"},"景點名稱-早上",-1),be=["onUpdate:modelValue"],fe={key:2,class:"mb-3"},ve=t("label",{for:"itinerary_second_day_am_content",class:"form-label"},"景點介紹-早上",-1),Pe=["onUpdate:modelValue"],ge={key:3,class:"col-md-6 mb-3"},xe=t("label",{for:"itinerary_second_day_pm_title",class:"form-label"},"景點名稱-下午",-1),Ue=["onUpdate:modelValue"],Ve={key:4,class:"mb-3"},ke=t("label",{for:"itinerary_second_day_pm_content",class:"form-label"},"景點介紹-下午",-1),we=["onUpdate:modelValue"],De={class:"row"},Me={class:"col"},Ce={class:"accordion mb-3",id:"accordionThirdDay"},Ae={class:"accordion-item"},Ne=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," 行程資料-第三天 ")],-1),Te={id:"collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionThirdDay"},Se={class:"accordion-body"},Le={class:"row"},Fe={key:0,class:"mb-3 col-md-6"},Ie=t("label",{for:"third_day_title",class:"form-label"},"行程天數",-1),je=["onUpdate:modelValue"],Be={key:1,class:"mb-3 col-md-6"},Ee=t("label",{for:"itinerary_third_day_am_title",class:"form-label"},"景點名稱-早上",-1),Oe=["onUpdate:modelValue"],Re={key:2,class:"mb-3"},ze=t("label",{for:"itinerary_third_day_am_content",class:"form-label"},"景點介紹-早上",-1),Ge=["onUpdate:modelValue"],He={key:3,class:"col-md-6 mb-3"},qe=t("label",{for:"itinerary_third_day_pm_title",class:"form-label"},"景點名稱-下午",-1),Je=["onUpdate:modelValue"],Ke={key:4,class:"mb-3"},Qe=t("label",{for:"itinerary_third_day_pm_content",class:"form-label"},"景點介紹-下午",-1),We=["onUpdate:modelValue"],Xe=t("hr",null,null,-1),Ye={class:"mb-3"},Ze=t("label",{for:"description",class:"form-label"},"產品描述",-1),$e={class:"mb-3"},to=t("label",{for:"content",class:"form-label"},"說明內容",-1),eo={class:"mb-3"},oo=t("label",{for:"content",class:"form-label"},"服務內容",-1),so={class:"mb-3"},lo=t("label",{for:"content",class:"form-label"},"體驗說明",-1),io={class:"mb-3"},ao=t("label",{for:"content",class:"form-label"},"其他資訊",-1),ro={class:"mb-3"},no=t("label",{for:"content",class:"form-label"},"常見問題",-1),_o={class:"row"},co={class:"mb-3 col-md-6"},mo=t("label",{for:"start_date",class:"form-label"},"預約起始日",-1),po=["min","max"],uo={class:"mb-3 col-md-6"},yo=t("label",{for:"end_date",class:"form-label"},"預約結束日",-1),ho=["min","max"],bo={class:"row"},fo={class:"mb-3 col-md-6"},vo=t("label",{for:"go_start_date",class:"form-label"},"出發起始日",-1),Po=["min","max"],go={class:"mb-3 col-md-6"},xo=t("label",{for:"go_end_date",class:"form-label"},"出發結束日",-1),Uo=["min","max"],Vo={class:"mb-3"},ko={class:"form-check"},wo=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Do={class:"modal-footer"},Mo=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Co={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ao={class:"modal-dialog"},No={class:"modal-content border-0"},To=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),So={class:"modal-body"},Lo={class:"text-danger"},Fo={class:"modal-footer"},Io=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function jo(n,o,m,u,s,p){const g=k("AdminSidebar");return r(),d(h,null,[t("div",C,[t("div",A,[t("div",N,[T,U(g)]),t("div",S,[t("div",L,[t("button",{class:"btn btn-primary",id:"addModalBtn",onClick:o[0]||(o[0]=e=>p.openModal("new",n.product))}," 建立新的產品 ")]),t("table",F,[I,t("tbody",null,[(r(!0),d(h,null,b(s.products,e=>(r(),d("tr",{key:e.id},[t("td",null,[e.is_enabled?(r(),d("span",j,"啟用")):(r(),d("span",B,"未啟用"))]),t("td",null,y(e.category),1),t("td",null,y(e.title),1),t("td",null,y(e.tag_1),1),t("td",E,y(e.origin_price),1),t("td",O,y(e.price),1),t("td",null,[t("div",R,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:_=>p.openModal("edit",e)}," 編輯 ",8,z),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:_=>p.openModal("delete",e)}," 刪除 ",8,G)])])]))),128))])])])])]),t("div",H,[t("div",q,[t("div",J,[t("div",K,[t("h5",Q,[t("span",null,y(s.isNew?"新增產品":"編輯產品"),1)]),W]),t("div",X,[t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[et,l(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>s.tempProduct.imageUrl=e),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[i,s.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,ot)]),Array.isArray(s.tempProduct.imagesUrl)?(r(),d("div",st,[(r(!0),d(h,null,b(s.tempProduct.imagesUrl,(e,_)=>(r(),d("div",{key:_+1213},[t("img",{src:e,alt:"",class:"img-fluid my-2"},null,8,lt),l(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a=>s.tempProduct.imagesUrl[_]=a},null,8,it),[[i,s.tempProduct.imagesUrl[_]]])]))),128)),s.tempProduct.imagesUrl.length===0||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(r(),d("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[2]||(o[2]=e=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(r(),d("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[3]||(o[3]=e=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):c("",!0),t("div",at,[t("input",{type:"file",class:"form-control",ref:"fileInput",id:"file",placeholder:"請輸入圖片連結",onChange:o[4]||(o[4]=(...e)=>p.upload&&p.upload(...e))},null,544)])]),t("div",dt,[t("div",rt,[nt,l(t("input",{id:"title",type:"text","onUpdate:modelValue":o[5]||(o[5]=e=>s.tempProduct.title=e),class:"form-control",placeholder:"請輸入標題"},null,512),[[i,s.tempProduct.title]])]),t("div",_t,[t("div",ct,[mt,l(t("input",{id:"day_num",type:"number","onUpdate:modelValue":o[6]||(o[6]=e=>s.tempProduct.day_num=e),class:"form-control",placeholder:"請輸入旅遊天數"},null,512),[[i,s.tempProduct.day_num]])]),t("div",pt,[ut,l(t("input",{id:"creation_date",type:"date","onUpdate:modelValue":o[7]||(o[7]=e=>s.tempProduct.creationDate=e),class:"form-control"},null,512),[[i,s.tempProduct.creationDate]])])]),t("div",yt,[t("div",ht,[bt,l(t("input",{id:"category",type:"text","onUpdate:modelValue":o[8]||(o[8]=e=>s.tempProduct.category=e),class:"form-control",placeholder:"請輸入分類"},null,512),[[i,s.tempProduct.category]])]),t("div",ft,[vt,l(t("input",{id:"unit",type:"text","onUpdate:modelValue":o[9]||(o[9]=e=>s.tempProduct.unit=e),class:"form-control",placeholder:"請輸入單位"},null,512),[[i,s.tempProduct.unit]])])]),t("div",Pt,[t("div",gt,[xt,l(t("input",{id:"tag_1",type:"text","onUpdate:modelValue":o[10]||(o[10]=e=>s.tempProduct.tag_1=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,s.tempProduct.tag_1]])]),t("div",Ut,[Vt,l(t("input",{id:"tag_2",type:"text","onUpdate:modelValue":o[11]||(o[11]=e=>s.tempProduct.tag_2=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,s.tempProduct.tag_2]])])]),t("div",kt,[t("div",wt,[Dt,l(t("input",{id:"link",type:"text","onUpdate:modelValue":o[12]||(o[12]=e=>s.tempProduct.link=e),class:"form-control",placeholder:"請輸入標籤"},null,512),[[i,s.tempProduct.link]])]),t("div",Mt,[Ct,l(t("input",{id:"max_travelers",type:"number","onUpdate:modelValue":o[13]||(o[13]=e=>s.tempProduct.max_travelers=e),min:"3",max:"30",class:"form-control",placeholder:"請輸入出遊上限人數"},null,512),[[i,s.tempProduct.max_travelers]])])]),t("div",At,[t("div",Nt,[Tt,l(t("input",{id:"origin_price",type:"number","onUpdate:modelValue":o[14]||(o[14]=e=>s.tempProduct.origin_price=e),min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[i,s.tempProduct.origin_price]])]),t("div",St,[Lt,l(t("input",{id:"price",type:"number","onUpdate:modelValue":o[15]||(o[15]=e=>s.tempProduct.price=e),min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[i,s.tempProduct.price]])])]),t("div",Ft,[t("div",It,[t("div",jt,[t("div",Bt,[Et,t("div",Ot,[t("div",Rt,[t("div",zt,[(r(!0),d(h,null,b(s.tempProduct.itinerary_data,(e,_)=>(r(),d("div",{key:_+1213},[_===0?(r(),d("div",Gt,[Ht,l(t("input",{id:"first_day_title",type:"text","onUpdate:modelValue":a=>e.first_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第一天"},null,8,qt),[[i,e.first_day_title]])])):c("",!0),_===0?(r(),d("div",Jt,[Kt,l(t("input",{id:"itinerary_first_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Qt),[[i,e.itinerary_first_day_am_title]])])):c("",!0),_===0?(r(),d("div",Wt,[Xt,l(t("textarea",{id:"itinerary_first_day_am_content",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_am_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Yt),[[i,e.itinerary_first_day_am_content]])])):c("",!0),_===0?(r(),d("div",Zt,[$t,l(t("input",{id:"itinerary_first_day_pm_title",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,te),[[i,e.itinerary_first_day_pm_title]])])):c("",!0),_===0?(r(),d("div",ee,[oe,l(t("textarea",{id:"itinerary_first_day_pm_content",type:"text","onUpdate:modelValue":a=>e.itinerary_first_day_pm_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,se),[[i,e.itinerary_first_day_pm_content]])])):c("",!0)]))),128))])])])])])])]),t("div",le,[t("div",ie,[t("div",ae,[t("div",de,[re,t("div",ne,[t("div",_e,[t("div",ce,[(r(!0),d(h,null,b(s.tempProduct.itinerary_data,(e,_)=>(r(),d("div",{key:_+1213},[_===1?(r(),d("div",me,[pe,l(t("input",{id:"second_day_title",type:"text","onUpdate:modelValue":a=>e.second_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第二天"},null,8,ue),[[i,e.second_day_title]])])):c("",!0),_===1?(r(),d("div",ye,[he,l(t("input",{id:"itinerary_second_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_second_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,be),[[i,e.itinerary_second_day_am_title]])])):c("",!0),_===1?(r(),d("div",fe,[ve,l(t("textarea",{id:"itinerary_second_day_am_content","onUpdate:modelValue":a=>e.itinerary_second_day_am_content=a,class:"form-control",placeholder:"請輸入景點內容"},null,8,Pe),[[i,e.itinerary_second_day_am_content]])])):c("",!0),_===1?(r(),d("div",ge,[xe,l(t("input",{id:"itinerary_second_day_pm_title","onUpdate:modelValue":a=>e.itinerary_second_day_pm_title=a,type:"text",class:"form-control",placeholder:"請輸入景點名稱"},null,8,Ue),[[i,e.itinerary_second_day_pm_title]])])):c("",!0),_===1?(r(),d("div",Ve,[ke,l(t("textarea",{"onUpdate:modelValue":a=>e.itinerary_second_day_pm_content=a,id:"itinerary_second_day_pm_content",type:"text",class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,we),[[i,e.itinerary_second_day_pm_content]])])):c("",!0)]))),128))])])])])])])]),t("div",De,[t("div",Me,[t("div",Ce,[t("div",Ae,[Ne,t("div",Te,[t("div",Se,[t("div",Le,[(r(!0),d(h,null,b(s.tempProduct.itinerary_data,(e,_)=>(r(),d("div",{key:_+1213},[_===2?(r(),d("div",Fe,[Ie,l(t("input",{id:"third_day_title",type:"text","onUpdate:modelValue":a=>e.third_day_title=a,class:"form-control",placeholder:"請輸入行程天數為第三天"},null,8,je),[[i,e.third_day_title]])])):c("",!0),_===2?(r(),d("div",Be,[Ee,l(t("input",{id:"itinerary_third_day_am_title",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_am_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Oe),[[i,e.itinerary_third_day_am_title]])])):c("",!0),_===2?(r(),d("div",Re,[ze,l(t("textarea",{id:"itinerary_third_day_am_content",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_am_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,Ge),[[i,e.itinerary_third_day_am_content]])])):c("",!0),_===2?(r(),d("div",He,[qe,l(t("input",{id:"itinerary_third_day_pm_title",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_title=a,class:"form-control",placeholder:"請輸入景點名稱"},null,8,Je),[[i,e.itinerary_third_day_pm_title]])])):c("",!0),_===2?(r(),d("div",Ke,[Qe,l(t("textarea",{id:"itinerary_third_day_pm_content",type:"text","onUpdate:modelValue":a=>e.itinerary_third_day_pm_content=a,class:"form-control",placeholder:"請輸入景點介紹"},`\r
                                `,8,We),[[i,e.itinerary_third_day_pm_content]])])):c("",!0)]))),128))])])])])])])]),Xe,t("div",Ye,[Ze,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[16]||(o[16]=e=>s.tempProduct.description=e),class:"form-control",placeholder:"請輸入產品描述"},`\r
                `,512),[[i,s.tempProduct.description]])]),t("div",$e,[to,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[17]||(o[17]=e=>s.tempProduct.content=e),class:"form-control",placeholder:"請輸入說明內容"},`\r
                `,512),[[i,s.tempProduct.content]])]),t("div",eo,[oo,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[18]||(o[18]=e=>s.tempProduct.provideServices=e),class:"form-control",placeholder:"請輸入服務內容"},`\r
                `,512),[[i,s.tempProduct.provideServices]])]),t("div",so,[lo,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[19]||(o[19]=e=>s.tempProduct.experienceDescription=e),class:"form-control",placeholder:"請輸入體驗說明"},`\r
                `,512),[[i,s.tempProduct.experienceDescription]])]),t("div",io,[ao,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[20]||(o[20]=e=>s.tempProduct.otherInformation=e),class:"form-control",placeholder:"請輸入其他資訊"},`\r
                `,512),[[i,s.tempProduct.otherInformation]])]),t("div",ro,[no,l(t("textarea",{id:"description",type:"text","onUpdate:modelValue":o[21]||(o[21]=e=>s.tempProduct.commonProblem=e),class:"form-control",placeholder:"請輸入常見問題"},`\r
                `,512),[[i,s.tempProduct.commonProblem]])]),t("div",_o,[t("div",co,[mo,l(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[22]||(o[22]=e=>s.tempProduct.startDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,po),[[i,s.tempProduct.startDate]])]),t("div",uo,[yo,l(t("input",{id:"start_date",type:"date","onUpdate:modelValue":o[23]||(o[23]=e=>s.tempProduct.endDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,ho),[[i,s.tempProduct.endDate]])])]),t("div",bo,[t("div",fo,[vo,l(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[24]||(o[24]=e=>s.tempProduct.goStartDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,Po),[[i,s.tempProduct.goStartDate]])]),t("div",go,[xo,l(t("input",{id:"go_start_date",type:"date","onUpdate:modelValue":o[25]||(o[25]=e=>s.tempProduct.goEndDate=e),class:"form-control",min:s.minDate,max:s.maxDate},null,8,Uo),[[i,s.tempProduct.goEndDate]])])]),t("div",Vo,[t("div",ko,[l(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":o[26]||(o[26]=e=>s.tempProduct.is_enabled=e),type:"checkbox","true-value":1,"false-value":0},null,512),[[V,s.tempProduct.is_enabled]]),wo])])])])]),t("div",Do,[Mo,t("button",{type:"button",class:"btn btn-primary",onClick:o[27]||(o[27]=(...e)=>p.updateProduct&&p.updateProduct(...e))},"確認")])])])],512),t("div",Co,[t("div",Ao,[t("div",No,[To,t("div",So,[P(" 是否刪除 "),t("strong",Lo,y(s.tempProduct.title),1),P(" 商品(刪除後將無法恢復)。 ")]),t("div",Fo,[Io,t("button",{type:"button",class:"btn btn-danger",onClick:o[28]||(o[28]=(...e)=>p.deleteProduct&&p.deleteProduct(...e))},"確認刪除")])])])],512)],64)}const Oo=x(M,[["render",jo]]);export{Oo as default};
