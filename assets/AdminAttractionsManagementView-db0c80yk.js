import{_ as k,G as P,c as n,a as t,b as w,F as _,h as b,n as g,A as f,t as c,f as d,i as r,j as U,H as M,d as v,o as a,r as A}from"./index-QFxCqv35.js";import{A as C}from"./AdminSidebar-Z80U3ei5.js";const p="https://two024-south-json-server-vercel.onrender.com",V={components:{AdminSidebar:C},data(){return{attractions:[],tempProduct:{},pages:{},modalProduct:null,modelDel:null,isNew:!1,pageTotal:0,currentPage:1,limitPage:10,parsedLinks:""}},methods:{getAttractions(l=1){this.axios.get(`${p}/attractions?_limit=${this.limitPage}&_page=${l}`).then(e=>{var u=parseInt(e.headers["x-total-count"]);this.pageTotal=Math.ceil(u/this.limitPage),this.currentPage=l,this.attractions=e.data}).catch(e=>{console.log(e),alert(`${e}`)})},openModal(l,e){l==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.modalProduct.show()):l==="edit"?(this.tempProduct={...e},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.modalProduct.show()):l==="delete"&&(this.tempProduct={...e},this.modalDel.show())},updateAttractions(){this.isNew?this.axios.post(`${p}/attractions`,this.tempProduct).then(l=>{alert("已建立產品"),this.getAttractions(),this.tempProduct={},this.modalProduct.hide()}).catch(l=>{console.log(l),alert(`${l}`)}):this.isNew||this.axios.put(`${p}/attractions/${this.tempProduct.id}`,this.tempProduct).then(l=>{alert("已更新產品"),this.getAttractions(),this.tempProduct={},this.modalProduct.hide()}).catch(l=>{alert(`${l}`)})},deleteAttraction(){this.axios.delete(`${p}/attractions/${this.tempProduct.id}`,this.tempProduct).then(l=>{console.log(l),alert("已刪除成功"),this.getAttractions(),this.tempProduct={},this.modalDel.hide()}).catch(l=>{alert(`${l}`)})},upload(){const l=this.$refs.fileInput,e=l.files[0],u=new FormData;u.append("file-to-upload",e),this.axios.post(`${p}/products`,u).then(h=>{console.log(h.data),alert(`
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `);const i=URL.createObjectURL(l.files[0]);this.tempProduct.imagesUrl.push(i),l.value=null}).catch(h=>{alert(`${h.data.message}`)})}},mounted(){this.getAttractions(),this.modalProduct=new P.Modal(this.$refs.productModal),this.modalDel=new P.Modal(this.$refs.delProductModal)}},L={class:"container"},N={class:"row flex-column flex-md-row"},D={class:"col-12 col-md-3"},T=t("h1",{class:"my-4 fs-4 fs-md-1"},"景點管理",-1),O={class:"col-12 col-md-9"},j={class:"text-end mt-4"},B={class:"table mt-4"},S=t("thead",null,[t("tr",null,[t("th",{width:"80"},"上架"),t("th",{width:"80"},"分類"),t("th",{width:"200"},"景點名稱"),t("th",{width:"120"},"標籤1"),t("th",{width:"120"},"標籤2"),t("th",{width:"120"})])],-1),F={key:0,class:"text-success"},R={key:1},q={class:"text-end"},z={class:"btn-group"},E=["onClick"],G=["onClick"],H={"aria-label":"Page navigation example ",class:"my-10"},J={class:"pagination justify-content-center"},K=["value","onClick"],Q={class:"page-item"},W={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},X={class:"modal-dialog modal-xl"},Y={class:"modal-content border-0"},Z={class:"modal-header bg-dark text-white"},I={id:"productModalLabel",class:"modal-title"},$=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),tt={class:"modal-body"},et={class:"row"},ot={class:"col-sm-4"},st={class:"mb-2"},lt={class:"mb-3"},it=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),dt=["src"],nt={key:0},rt=["src"],at=["onUpdate:modelValue"],ct={class:"pt-3"},mt={class:"col-sm-8"},ut={class:"mb-3"},pt=t("label",{for:"title",class:"form-label"},"標題",-1),ht={class:"row"},_t={class:"mb-3 col-md-6"},bt=t("label",{for:"category",class:"form-label"},"分類",-1),gt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"單位",-1),Pt={class:"row"},vt={class:"mb-3 col-md-6"},yt=t("label",{for:"tag_1",class:"form-label"},"標籤1",-1),xt={class:"mb-3 col-md-6"},kt=t("label",{for:"tag_2",class:"form-label"},"標籤2",-1),wt={class:"row"},Ut={class:"mb-3 col-md-6"},Mt=t("label",{for:"origin_price",class:"form-label"},"套裝方案連結",-1),At=t("hr",null,null,-1),Ct={class:"row"},Vt={class:"mb-3"},Lt=t("label",{for:"imgMap",class:"form-label"},"位置",-1),Nt=["src"],Dt={class:"mb-3 col"},Tt=t("label",{for:"timeOpen",class:"form-label"},"開放時間",-1),Ot={class:"mb-3"},jt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Bt={class:"mb-3"},St=t("label",{for:"content",class:"form-label"},"交通資訊",-1),Ft={class:"mb-3"},Rt={class:"form-check"},qt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),zt={class:"modal-footer"},Et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Gt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ht={class:"modal-dialog"},Jt={class:"modal-content border-0"},Kt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Qt={class:"modal-body"},Wt={class:"text-danger"},Xt={class:"modal-footer"},Yt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Zt(l,e,u,h,s,i){const y=A("AdminSidebar");return a(),n(_,null,[t("div",L,[t("div",N,[t("div",D,[T,w(y)]),t("div",O,[t("div",j,[t("button",{type:"button",class:"btn-turquoise border-0",id:"addModalBtn",onClick:e[0]||(e[0]=o=>i.openModal("new",l.product))}," 建立新的景點 ")]),t("table",B,[S,t("tbody",null,[(a(!0),n(_,null,b(s.attractions,o=>(a(),n("tr",{key:o.id},[t("td",null,[o.is_enabled?(a(),n("span",F,"啟用")):(a(),n("span",R,"未啟用"))]),t("td",null,c(o.category),1),t("td",null,c(o.title),1),t("td",null,c(o.tag_1),1),t("td",q,c(o.tag_2),1),t("td",null,[t("div",z,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:m=>i.openModal("edit",o)}," 編輯 ",8,E),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:m=>i.openModal("delete",o)}," 刪除 ",8,G)])])]))),128))])]),t("nav",H,[t("ul",J,[t("li",{class:g(["page-item",{disabled:!s.currentPage||s.currentPage===1}])},[t("a",{class:"page-link page-link-radius-2",href:"",onClick:e[1]||(e[1]=f(o=>i.getAttractions(s.currentPage-1),["prevent"]))},"上一頁")],2),(a(!0),n(_,null,b(s.pageTotal,o=>(a(),n("li",{class:"page-item",key:o+123},[t("a",{class:g(["page-link page-link-0 rounded-0",{active:o===s.currentPage}]),href:"",value:o,onClick:f(m=>i.getAttractions(o),["prevent"])},c(o),11,K)]))),128)),t("li",Q,[t("a",{class:g(["page-link page-link-radius",{disabled:!s.currentPage||s.currentPage===s.pageTotal}]),href:"",onClick:e[2]||(e[2]=f(o=>i.getAttractions(s.currentPage+1),["prevent"]))},"下一頁",2)])])])])])]),t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("h5",I,[t("span",null,c(s.isNew?"新增產品":"編輯產品"),1)]),$]),t("div",tt,[t("div",et,[t("div",ot,[t("div",st,[t("div",lt,[it,d(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.tempProduct.imageUrl=o),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[r,s.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,dt)]),Array.isArray(s.tempProduct.imagesUrl)?(a(),n("div",nt,[(a(!0),n(_,null,b(s.tempProduct.imagesUrl,(o,m)=>(a(),n("div",{key:m+1213},[t("img",{src:o,alt:"",class:"img-fluid my-2"},null,8,rt),d(t("input",{type:"text",class:"form-control","onUpdate:modelValue":x=>s.tempProduct.imagesUrl[m]=x},null,8,at),[[r,s.tempProduct.imagesUrl[m]]])]))),128)),s.tempProduct.imagesUrl.length===0||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(a(),n("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(a(),n("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[5]||(e[5]=o=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):U("",!0),t("div",ct,[t("input",{type:"file",class:"form-control",ref:"fileInput",id:"file",placeholder:"請輸入圖片連結",onChange:e[6]||(e[6]=(...o)=>i.upload&&i.upload(...o))},null,544)])]),t("div",mt,[t("div",ut,[pt,d(t("input",{id:"title",type:"text","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.title=o),class:"form-control",placeholder:"請輸入標題"},null,512),[[r,s.tempProduct.title]])]),t("div",ht,[t("div",_t,[bt,d(t("input",{id:"category",type:"text","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.category=o),class:"form-control",placeholder:"請輸入分類"},null,512),[[r,s.tempProduct.category]])]),t("div",gt,[ft,d(t("input",{id:"unit",type:"text","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.unit=o),class:"form-control",placeholder:"請輸入單位"},null,512),[[r,s.tempProduct.unit]])])]),t("div",Pt,[t("div",vt,[yt,d(t("input",{id:"tag_1",type:"text","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.tag_1=o),class:"form-control",placeholder:"請輸入標籤"},null,512),[[r,s.tempProduct.tag_1]])]),t("div",xt,[kt,d(t("input",{id:"tag_2",type:"text","onUpdate:modelValue":e[11]||(e[11]=o=>s.tempProduct.tag_2=o),class:"form-control",placeholder:"請輸入標籤"},null,512),[[r,s.tempProduct.tag_2]])])]),t("div",wt,[t("div",Ut,[Mt,d(t("input",{id:"origin_price",type:"text","onUpdate:modelValue":e[12]||(e[12]=o=>s.tempProduct.aboutAroductLink=o),min:"0",class:"form-control",placeholder:"請輸入套裝方案連結"},null,512),[[r,s.tempProduct.aboutAroductLink]])])]),At,t("div",Ct,[t("div",Vt,[Lt,d(t("input",{id:"imgMap",type:"text","onUpdate:modelValue":e[13]||(e[13]=o=>s.tempProduct.imgMap=o),class:"form-control",placeholder:"請輸入位置"},null,512),[[r,s.tempProduct.imgMap]]),t("img",{src:s.tempProduct.imgMap,alt:"",class:"img-fluid my-2"},null,8,Nt)])]),t("div",Dt,[Tt,d(t("textarea",{id:"timeOpen",type:"text","onUpdate:modelValue":e[14]||(e[14]=o=>s.tempProduct.timeOpen=o),class:"form-control",placeholder:"請輸入開放時間"},null,512),[[r,s.tempProduct.timeOpen]])]),t("div",Ot,[jt,d(t("textarea",{id:"description",type:"text","onUpdate:modelValue":e[15]||(e[15]=o=>s.tempProduct.description=o),class:"form-control",placeholder:"請輸入產品描述"},`\r
                `,512),[[r,s.tempProduct.description]])]),t("div",Bt,[St,d(t("textarea",{id:"description",type:"text","onUpdate:modelValue":e[16]||(e[16]=o=>s.tempProduct.content=o),class:"form-control",placeholder:"請輸入交通資訊"},`\r
                `,512),[[r,s.tempProduct.content]])]),t("div",Ft,[t("div",Rt,[d(t("input",{id:"is_enabled",class:"form-check-input","onUpdate:modelValue":e[17]||(e[17]=o=>s.tempProduct.is_enabled=o),type:"checkbox","true-value":1,"false-value":0},null,512),[[M,s.tempProduct.is_enabled]]),qt])])])])]),t("div",zt,[Et,t("button",{type:"button",class:"btn btn-primary",onClick:e[18]||(e[18]=(...o)=>i.updateAttractions&&i.updateAttractions(...o))},"確認")])])])],512),t("div",Gt,[t("div",Ht,[t("div",Jt,[Kt,t("div",Qt,[v(" 是否刪除 "),t("strong",Wt,c(s.tempProduct.title),1),v(" 商品(刪除後將無法恢復)。 ")]),t("div",Xt,[Yt,t("button",{type:"button",class:"btn btn-danger",onClick:e[19]||(e[19]=(...o)=>i.deleteAttraction&&i.deleteAttraction(...o))},"確認刪除")])])])],512)],64)}const te=k(V,[["render",Zt]]);export{te as default};