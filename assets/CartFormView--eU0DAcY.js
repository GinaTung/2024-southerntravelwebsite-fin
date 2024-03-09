import{C as g}from"./collapse-1XDKwLVW.js";import{_ as b,c as p,a as e,d as r,x as c,f as i,v,b as f,w as _,y as n,D as x,e as y,r as w,o as u}from"./index-BzeQhHl-.js";const m="https://two024-south-json-server-vercel.onrender.com",k={data(){return{text:123,cartId:0,cart:[],isOpen:!1,headerCollapse:{},products:[],product:{},cartTotal:0,order:{},user:{name:"",email:"",tel:"",address:"",birthday:"",comment:"",shippingMethod:""},shippingMethod:["超商取貨","宅配"]}},watch:{$route(){this.headerCollapse.hide()}},methods:{backPage(){this.$router.go(-1)},toggleOpen(){this.isOpen=!this.isOpen},getProducts(){this.axios.get(`${m}/products`).then(o=>{this.products=o.data,this.products.forEach(t=>{t.id===this.cart.data.product_id&&(this.product=t)})}).catch(o=>{console.log(o)})},getCart(){this.axios.get(`${m}/carts`).then(o=>{this.cart=o.data,this.cart.forEach(t=>{t.id===this.cartId&&(this.cart=t)}),this.cartTotal=this.cart.data.total}).catch(o=>{console.log(o)})},getCookie(o){const d=`; ${document.cookie}`.split(`; ${o}=`);if(d.length===2)return d.pop().split(";").shift()},thousand(o){return o!==void 0&&(o=o.toString().replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),",")),`$ ${o}`},orderData(){const o={name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.address,birthday:this.user.birthday,comment:this.user.comment,shippingMethod:this.user.shippingMethod,cartId:this.cartId};this.axios.post(`${m}/order`,{user:o}).then(t=>{this.order=t.data}).catch(t=>{console.log(t)})}},mounted(){this.cartId=this.getCookie("cartId")*1,document.cookie?this.getCart():alert("目前購物車無資料，請加入預約行程"),this.getProducts(),this.headerCollapse=new g(this.$refs.headerCollapse,{toggle:!1})}},C={class:"container py-10 py-lg-30"},V=y('<div class="row"><div class="col-md-6 mx-auto pb-5 pb-lg-15"><ol class="pay-list mt-5 d-flex justify-content-between list-unstyled pe-0 position-relative"><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center number-active mb-0"> 1 </p><p class="fw-bold mb-0">確認行程</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0 number-active"> 2 </p><p class="fw-bold mb-0">訂單資料</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0">3</p><p class="fw-bold mb-0">付款資料</p></li><li class="d-flex flex-column align-items-center"><p class="number d-flex justify-content-center align-items-center mb-0">4</p><p class="fw-bold mb-0">訂單完成</p></li></ol></div></div>',1),T={class:"mb-4"},E={class:"d-grid gap-2"},I=e("br",null,null,-1),M={key:0,class:"bi bi-chevron-down"},O={key:1,class:"bi bi-chevron-up"},U={class:"collapse",id:"collapseExample",ref:"headerCollapse"},j={class:"card card-body rounded-0"},D={class:"row p-10"},S={class:"col-12 col-md-4"},P=["src","alt"],B={class:"col-12 col-md-8"},N={class:"mb-4"},q={class:"mb-4"},A={class:"mb-4"},F={class:"row"},L={class:"col-12 col-md-6 mb-4"},z=e("h3",{class:"mb-4"},"訂單資料",-1),G={class:"form-floating mb-4"},H=e("label",{for:"floatingInput"},"姓名",-1),J={class:"form-floating mb-4"},K=e("label",{for:"floatingTel"},"電話",-1),Q={class:"form-floating mb-4"},R=e("label",{for:"floatingEmail"},"電子郵件",-1),W={class:"form-floating mb-4"},X=e("label",{for:"floatingDate"},"生日",-1),Y={class:"form-floating"},Z=e("label",{for:"floatingTextarea2"},"備註",-1),$={class:"col-12 col-md-6 mb-4"},ee=e("h3",{class:"mb-4"},"運送資料",-1),te={class:"form-floating mb-4"},se=e("option",{selected:"",value:"",disabled:""},"選擇運送方式",-1),oe=e("option",{value:"超商取貨"},"超商取貨",-1),le=e("option",{value:"宅配"},"宅配",-1),ie=[se,oe,le],ae=e("label",{for:"floatingSelect"},"運送方式",-1),ne={class:"form-floating mb-4"},re=e("label",{for:"floatingAddress"},"住址",-1),ce={class:"d-flex justify-content-between"},de={class:"w-25"},pe={class:"w-25"};function ue(o,t,d,me,s,a){const h=w("router-link");return u(),p("div",C,[V,e("div",T,[e("p",E,[e("button",{class:"btn btn-primary-600 border-top",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[0]||(t[0]=(...l)=>a.toggleOpen&&a.toggleOpen(...l))},[r(" 總計："+c(s.cartTotal)+"元",1),I,r("購買清單 "),s.isOpen===!1?(u(),p("i",M)):(u(),p("i",O))])]),i(e("div",U,[e("div",j,[e("div",D,[e("div",S,[e("img",{src:s.product.imageUrl,alt:s.product.title,class:"img-fluid h-100"},null,8,P)]),e("div",B,[e("h3",N,"套裝行程名稱："+c(s.product.title),1),e("h3",q,"單價："+c(a.thousand(s.product.price)),1),e("h3",A,"總計："+c(a.thousand(s.cartTotal)),1),f(h,{to:{path:"/TouristPackage/"+s.product.category+"/"+s.product.title},class:"btn-square px-2 px-md-3 w-50",type:"button"},{default:_(()=>[r("查看更多")]),_:1},8,["to"])])])])],512),[[v,s.isOpen]])]),e("div",F,[e("div",L,[z,e("div",G,[i(e("input",{type:"text",class:"form-control rounded-1",id:"floatingInput",placeholder:"王小明","onUpdate:modelValue":t[1]||(t[1]=l=>s.user.name=l)},null,512),[[n,s.user.name]]),H]),e("div",J,[i(e("input",{type:"tel",class:"form-control rounded-1",id:"floatingTel",placeholder:"tel","onUpdate:modelValue":t[2]||(t[2]=l=>s.user.tel=l)},null,512),[[n,s.user.tel]]),K]),e("div",Q,[i(e("input",{type:"email",class:"form-control rounded-1",id:"floatingEmail",placeholder:"name@example.com","onUpdate:modelValue":t[3]||(t[3]=l=>s.user.email=l)},null,512),[[n,s.user.email]]),R]),e("div",W,[i(e("input",{type:"date",class:"form-control rounded-1",id:"floatingDate",placeholder:"2024/03/08","onUpdate:modelValue":t[4]||(t[4]=l=>s.user.birthday=l)},null,512),[[n,s.user.birthday]]),X]),e("div",Y,[i(e("textarea",{class:"form-control rounded-1",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"},"onUpdate:modelValue":t[5]||(t[5]=l=>s.user.comment=l)},null,512),[[n,s.user.comment]]),Z])]),e("div",$,[ee,e("div",te,[i(e("select",{"onUpdate:modelValue":t[6]||(t[6]=l=>s.user.shippingMethod=l),class:"form-select rounded-1",id:"floatingSelect","aria-label":"Floating label select example"},ie,512),[[x,s.user.shippingMethod]]),ae]),e("div",ne,[i(e("input",{type:"text",class:"form-control rounded-1",id:"floatingAddress",placeholder:"縣市鄉鎮市區","onUpdate:modelValue":t[7]||(t[7]=l=>s.user.address=l)},null,512),[[n,s.user.address]]),re])])]),e("div",ce,[e("div",de,[e("a",{class:"btn-cerulean w-100 fs-5 mt-4 me-1",onClick:t[8]||(t[8]=(...l)=>a.backPage&&a.backPage(...l)),type:"button"},"上一步")]),e("div",pe,[f(h,{class:"btn-square mt-4 fs-5 w-100",type:"button",to:"/cart/payList",onClick:a.orderData},{default:_(()=>[r("下一步")]),_:1},8,["onClick"])])])])}const _e=b(k,[["render",ue]]);export{_e as default};
