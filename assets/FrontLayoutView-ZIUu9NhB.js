import{c as I,g as dt,_ as G,o as X,a as Z,b as E,d as C,w as D,e as O,r as K,f as at,F as pt}from"./index-M6svoqu4.js";var lt={exports:{}},B={exports:{}},U={exports:{}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tt;function gt(){return tt||(tt=1,function(y,S){(function(s,u){y.exports=u()})(I,function(){const s=new Map;return{set(h,n,e){s.has(h)||s.set(h,new Map);const i=s.get(h);if(!i.has(n)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(n,e)},get(h,n){return s.has(h)&&s.get(h).get(n)||null},remove(h,n){if(!s.has(h))return;const e=s.get(h);e.delete(n),e.size===0&&s.delete(h)}}})}(U)),U.exports}var j={exports:{}},z={exports:{}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function Y(){return et||(et=1,function(y,S){(function(s,u){u(S)})(I,function(s){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(o,r)=>`#${CSS.escape(r)}`)),t),i=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),m=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},d=t=>{if(!t)return 0;let{transitionDuration:o,transitionDelay:r}=window.getComputedStyle(t);const l=Number.parseFloat(o),p=Number.parseFloat(r);return!l&&!p?0:(o=o.split(",")[0],r=r.split(",")[0],(Number.parseFloat(o)+Number.parseFloat(r))*1e3)},v=t=>{t.dispatchEvent(new Event(n))},w=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),V=t=>w(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,H=t=>{if(!w(t)||t.getClientRects().length===0)return!1;const o=getComputedStyle(t).getPropertyValue("visibility")==="visible",r=t.closest("details:not([open])");if(!r)return o;if(r!==t){const l=t.closest("summary");if(l&&l.parentNode!==r||l===null)return!1}return o},P=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",$=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const o=t.getRootNode();return o instanceof ShadowRoot?o:null}return t instanceof ShadowRoot?t:t.parentNode?$(t.parentNode):null},T=()=>{},N=t=>{t.offsetHeight},q=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,k=[],M=t=>{document.readyState==="loading"?(k.length||document.addEventListener("DOMContentLoaded",()=>{for(const o of k)o()}),k.push(t)):t()},R=()=>document.documentElement.dir==="rtl",c=t=>{M(()=>{const o=q();if(o){const r=t.NAME,l=o.fn[r];o.fn[r]=t.jQueryInterface,o.fn[r].Constructor=t,o.fn[r].noConflict=()=>(o.fn[r]=l,t.jQueryInterface)}})},a=(t,o=[],r=t)=>typeof t=="function"?t(...o):r,f=(t,o,r=!0)=>{if(!r){a(t);return}const p=d(o)+5;let g=!1;const b=({target:A})=>{A===o&&(g=!0,o.removeEventListener(n,b),a(t))};o.addEventListener(n,b),setTimeout(()=>{g||v(o)},p)},_=(t,o,r,l)=>{const p=t.length;let g=t.indexOf(o);return g===-1?!r&&l?t[p-1]:t[0]:(g+=r?1:-1,l&&(g=(g+p)%p),t[Math.max(0,Math.min(g,p-1))])};s.defineJQueryPlugin=c,s.execute=a,s.executeAfterTransition=f,s.findShadowRoot=$,s.getElement=V,s.getNextActiveElement=_,s.getTransitionDurationFromElement=d,s.getUID=m,s.getjQuery=q,s.isDisabled=P,s.isElement=w,s.isRTL=R,s.isVisible=H,s.noop=T,s.onDOMContentLoaded=M,s.parseSelector=e,s.reflow=N,s.toType=i,s.triggerTransitionEnd=v,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(z,z.exports)),z.exports}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nt;function ct(){return nt||(nt=1,function(y,S){(function(s,u){y.exports=u(Y())})(I,function(s){const u=/[^.]*(?=\..*)\.|.*/,h=/\..*/,n=/::\d+$/,e={};let i=1;const m={mouseenter:"mouseover",mouseleave:"mouseout"},d=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function v(c,a){return a&&`${a}::${i++}`||c.uidEvent||i++}function w(c){const a=v(c);return c.uidEvent=a,e[a]=e[a]||{},e[a]}function V(c,a){return function f(_){return R(_,{delegateTarget:c}),f.oneOff&&M.off(c,_.type,a),a.apply(c,[_])}}function H(c,a,f){return function _(t){const o=c.querySelectorAll(a);for(let{target:r}=t;r&&r!==this;r=r.parentNode)for(const l of o)if(l===r)return R(t,{delegateTarget:r}),_.oneOff&&M.off(c,t.type,a,f),f.apply(r,[t])}}function P(c,a,f=null){return Object.values(c).find(_=>_.callable===a&&_.delegationSelector===f)}function $(c,a,f){const _=typeof a=="string",t=_?f:a||f;let o=k(c);return d.has(o)||(o=c),[_,t,o]}function T(c,a,f,_,t){if(typeof a!="string"||!c)return;let[o,r,l]=$(a,f,_);a in m&&(r=(ft=>function(F){if(!F.relatedTarget||F.relatedTarget!==F.delegateTarget&&!F.delegateTarget.contains(F.relatedTarget))return ft.call(this,F)})(r));const p=w(c),g=p[l]||(p[l]={}),b=P(g,r,o?f:null);if(b){b.oneOff=b.oneOff&&t;return}const A=v(r,a.replace(u,"")),x=o?H(c,f,r):V(c,r);x.delegationSelector=o?f:null,x.callable=r,x.oneOff=t,x.uidEvent=A,g[A]=x,c.addEventListener(l,x,o)}function N(c,a,f,_,t){const o=P(a[f],_,t);o&&(c.removeEventListener(f,o,!!t),delete a[f][o.uidEvent])}function q(c,a,f,_){const t=a[f]||{};for(const[o,r]of Object.entries(t))o.includes(_)&&N(c,a,f,r.callable,r.delegationSelector)}function k(c){return c=c.replace(h,""),m[c]||c}const M={on(c,a,f,_){T(c,a,f,_,!1)},one(c,a,f,_){T(c,a,f,_,!0)},off(c,a,f,_){if(typeof a!="string"||!c)return;const[t,o,r]=$(a,f,_),l=r!==a,p=w(c),g=p[r]||{},b=a.startsWith(".");if(typeof o<"u"){if(!Object.keys(g).length)return;N(c,p,r,o,t?f:null);return}if(b)for(const A of Object.keys(p))q(c,p,A,a.slice(1));for(const[A,x]of Object.entries(g)){const L=A.replace(n,"");(!l||a.includes(L))&&N(c,p,r,x.callable,x.delegationSelector)}},trigger(c,a,f){if(typeof a!="string"||!c)return null;const _=s.getjQuery(),t=k(a),o=a!==t;let r=null,l=!0,p=!0,g=!1;o&&_&&(r=_.Event(a,f),_(c).trigger(r),l=!r.isPropagationStopped(),p=!r.isImmediatePropagationStopped(),g=r.isDefaultPrevented());const b=R(new Event(a,{bubbles:l,cancelable:!0}),f);return g&&b.preventDefault(),p&&c.dispatchEvent(b),b.defaultPrevented&&r&&r.preventDefault(),b}};function R(c,a={}){for(const[f,_]of Object.entries(a))try{c[f]=_}catch{Object.defineProperty(c,f,{configurable:!0,get(){return _}})}return c}return M})}(j)),j.exports}var Q={exports:{}},W={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function ht(){return st||(st=1,function(y,S){(function(s,u){y.exports=u()})(I,function(){function s(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function u(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,i){n.setAttribute(`data-bs-${u(e)}`,i)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${u(e)}`)},getDataAttributes(n){if(!n)return{};const e={},i=Object.keys(n.dataset).filter(m=>m.startsWith("bs")&&!m.startsWith("bsConfig"));for(const m of i){let d=m.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),e[d]=s(n.dataset[m])}return e},getDataAttribute(n,e){return s(n.getAttribute(`data-bs-${u(e)}`))}}})}(W)),W.exports}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function _t(){return rt||(rt=1,function(y,S){(function(s,u){y.exports=u(ht(),Y())})(I,function(s,u){class h{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,i){const m=u.isElement(i)?s.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof m=="object"?m:{},...u.isElement(i)?s.getDataAttributes(i):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,i=this.constructor.DefaultType){for(const[m,d]of Object.entries(i)){const v=e[m],w=u.isElement(v)?"element":u.toType(v);if(!new RegExp(d).test(w))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${m}" provided type "${w}" but expected type "${d}".`)}}}return h})}(Q)),Q.exports}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function mt(){return ot||(ot=1,function(y,S){(function(s,u){y.exports=u(gt(),ct(),_t(),Y())})(I,function(s,u,h,n){const e="5.3.2";class i extends h{constructor(d,v){super(),d=n.getElement(d),d&&(this._element=d,this._config=this._getConfig(v),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),u.off(this._element,this.constructor.EVENT_KEY);for(const d of Object.getOwnPropertyNames(this))this[d]=null}_queueCallback(d,v,w=!0){n.executeAfterTransition(d,v,w)}_getConfig(d){return d=this._mergeConfigObj(d,this._element),d=this._configAfterMerge(d),this._typeCheckConfig(d),d}static getInstance(d){return s.get(n.getElement(d),this.DATA_KEY)}static getOrCreateInstance(d,v={}){return this.getInstance(d)||new this(d,typeof v=="object"?v:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(d){return`${d}${this.EVENT_KEY}`}}return i})}(B)),B.exports}var J={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var it;function bt(){return it||(it=1,function(y,S){(function(s,u){y.exports=u(Y())})(I,function(s){const u=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let i=n.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&i!=="#"?s.parseSelector(i.trim()):null}return e},h={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(i=>i.matches(e))},parents(n,e){const i=[];let m=n.parentNode.closest(e);for(;m;)i.push(m),m=m.parentNode.closest(e);return i},prev(n,e){let i=n.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(n,e){let i=n.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(i=>!s.isDisabled(i)&&s.isVisible(i))},getSelectorFromElement(n){const e=u(n);return e&&h.findOne(e)?e:null},getElementFromSelector(n){const e=u(n);return e?h.findOne(e):null},getMultipleElementsFromSelector(n){const e=u(n);return e?h.find(e):[]}};return h})}(J)),J.exports}/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(y,S){(function(s,u){y.exports=u(mt(),ct(),bt(),Y())})(I,function(s,u,h,n){const e="collapse",m=".bs.collapse",d=".data-api",v=`show${m}`,w=`shown${m}`,V=`hide${m}`,H=`hidden${m}`,P=`click${m}${d}`,$="show",T="collapse",N="collapsing",q="collapsed",k=`:scope .${T} .${T}`,M="collapse-horizontal",R="width",c="height",a=".collapse.show, .collapse.collapsing",f='[data-bs-toggle="collapse"]',_={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class o extends s{constructor(l,p){super(l,p),this._isTransitioning=!1,this._triggerArray=[];const g=h.find(f);for(const b of g){const A=h.getSelectorFromElement(b),x=h.find(A).filter(L=>L===this._element);A!==null&&x.length&&this._triggerArray.push(b)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _}static get DefaultType(){return t}static get NAME(){return e}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(a).filter(L=>L!==this._element).map(L=>o.getOrCreateInstance(L,{toggle:!1}))),l.length&&l[0]._isTransitioning||u.trigger(this._element,v).defaultPrevented)return;for(const L of l)L.hide();const g=this._getDimension();this._element.classList.remove(T),this._element.classList.add(N),this._element.style[g]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const b=()=>{this._isTransitioning=!1,this._element.classList.remove(N),this._element.classList.add(T,$),this._element.style[g]="",u.trigger(this._element,w)},x=`scroll${g[0].toUpperCase()+g.slice(1)}`;this._queueCallback(b,this._element,!0),this._element.style[g]=`${this._element[x]}px`}hide(){if(this._isTransitioning||!this._isShown()||u.trigger(this._element,V).defaultPrevented)return;const p=this._getDimension();this._element.style[p]=`${this._element.getBoundingClientRect()[p]}px`,n.reflow(this._element),this._element.classList.add(N),this._element.classList.remove(T,$);for(const b of this._triggerArray){const A=h.getElementFromSelector(b);A&&!this._isShown(A)&&this._addAriaAndCollapsedClass([b],!1)}this._isTransitioning=!0;const g=()=>{this._isTransitioning=!1,this._element.classList.remove(N),this._element.classList.add(T),u.trigger(this._element,H)};this._element.style[p]="",this._queueCallback(g,this._element,!0)}_isShown(l=this._element){return l.classList.contains($)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=n.getElement(l.parent),l}_getDimension(){return this._element.classList.contains(M)?R:c}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(f);for(const p of l){const g=h.getElementFromSelector(p);g&&this._addAriaAndCollapsedClass([p],this._isShown(g))}}_getFirstLevelChildren(l){const p=h.find(k,this._config.parent);return h.find(l,this._config.parent).filter(g=>!p.includes(g))}_addAriaAndCollapsedClass(l,p){if(l.length)for(const g of l)g.classList.toggle(q,!p),g.setAttribute("aria-expanded",p)}static jQueryInterface(l){const p={};return typeof l=="string"&&/show|hide/.test(l)&&(p.toggle=!1),this.each(function(){const g=o.getOrCreateInstance(this,p);if(typeof l=="string"){if(typeof g[l]>"u")throw new TypeError(`No method named "${l}"`);g[l]()}})}}return u.on(document,P,f,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const l of h.getMultipleElementsFromSelector(this))o.getOrCreateInstance(l,{toggle:!1}).toggle()}),n.defineJQueryPlugin(o),o})})(lt);var Et=lt.exports;const yt=dt(Et),ut="/2024-southerntravelwebsite-fin/assets/logo-WY09ya8o.png",vt={data(){return{headerCollapse:{}}},watch:{$route(){this.headerCollapse.hide()}},mounted(){this.headerCollapse=new yt(this.$refs.headerCollapse,{toggle:!1})}},At={class:"navbar navbar-expand-lg navbar-light bg-light py-0"},Ct={class:"container"},wt=E("img",{src:ut,alt:"南部輕旅遊網站"},null,-1),xt=E("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[E("span",{class:"navbar-toggler-icon"})],-1),St={class:"collapse navbar-collapse py-10 py-lg-0",id:"navbarSupportedContent",ref:"headerCollapse"},Tt={class:"navbar-nav m-auto mb-lg-0 align-items-center"},Dt={class:"nav-item mb-10 mb-lg-0"},Nt={class:"nav-item mb-10 mb-lg-0"},Lt={class:"nav-item mb-10 mb-lg-0"},$t={class:"navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center"},Ot={class:"nav-item"},kt={class:"nav-item"};function Mt(y,S,s,u,h,n){const e=K("router-link");return X(),Z("nav",At,[E("div",Ct,[C(e,{to:"/",class:"navbar-brand py-6"},{default:D(()=>[wt]),_:1}),xt,E("div",St,[E("ul",Tt,[E("li",Dt,[C(e,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-5 text-dark"},{default:D(()=>[O("南部旅遊景點")]),_:1})]),E("li",Nt,[C(e,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-5 text-dark"},{default:D(()=>[O("南部旅遊方案")]),_:1})]),E("li",Lt,[C(e,{to:"/TouristBudget",class:"nav-link px-5 px-xl-10 fs-5 text-dark"},{default:D(()=>[O("南部旅遊預算")]),_:1})])]),E("ul",$t,[E("li",Ot,[C(e,{to:"/login",class:"btn-outline-turquoise"},{default:D(()=>[O("登入")]),_:1})]),E("li",kt,[C(e,{to:"/signup",class:"btn-turquoise ms-3"},{default:D(()=>[O("註冊")]),_:1})])])],512)])])}const It=G(vt,[["render",Mt]]),Rt={},Pt={class:"bg-light"},qt={class:"container py-10 justify-content-between"},Ft={class:"navbar mb-10 flex-column flex-lg-row py-0"},Vt=E("img",{src:ut,alt:"南部輕旅遊網站"},null,-1),Ht={class:"navbar-nav flex-column flex-lg-row"},Kt={class:"nav-item"},Yt={class:"nav-item"},zt={class:"nav-item"},Bt=at('<ul class="navbar-nav flex-row fs-add-2"><li class="nav-item"><a class="nav-link py-0 ps-1" href="#"><i class="bi bi-youtube img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-instagram img-lg"></i></a></li><li class="nav-item"><a class="nav-link py-0 ps-6" href="#"><i class="bi bi-facebook img-lg"></i></a></li></ul>',1),Ut=at('<div class="d-flex text-center flex-column align-items-center"><p class="fw-bold text-dark mb-1"> 南部輕旅行 「完美套裝」 </p><p class="fw-bold text-dark mb-1"> 輕鬆省心，玩得盡興！ </p><p class="text-dark mb-10"> 景點探索 + 美食巡禮 + 便捷交通 + 舒適住宿 </p><p class="text-dark2 fs-7 fs-lg-6"> 本網站僅供個人作品使用，不提供商業用途<br> 資料來源<br><a href="https://www.taiwan.net.tw/" class="fw-bold fs-7" target="_blank">臺灣觀光資訊網</a><br><a href="https://www.swcoast-nsa.gov.tw/zh-tw/gwoia" class="fw-bold fs-7" target="_blank">雲嘉南濱海國家風景區管理處網站</a><br><a href="https://khh.travel/" target="_blank" class="fw-bold fs-7">高雄旅遊網</a>、<a href="https://travel.chiayi.gov.tw/" target="_blank" class="fw-bold fs-7">嘉義市觀光旅遊網</a></p></div>',1),jt={class:"navbar-nav text-end"},Qt={class:"nav-item"};function Wt(y,S){const s=K("router-link");return X(),Z("div",Pt,[E("div",qt,[E("nav",Ft,[C(s,{to:"/",class:"navbar-brand mb-10 mb-lg-0 py-0 mx-0"},{default:D(()=>[Vt]),_:1}),E("ul",Ht,[E("li",Kt,[C(s,{to:"/TouristAttractions",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0"},{default:D(()=>[O("南部旅遊景點")]),_:1})]),E("li",Yt,[C(s,{to:"/TouristPackage",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0"},{default:D(()=>[O("南部旅遊方案")]),_:1})]),E("li",zt,[C(s,{to:"/TouristBudget",class:"nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0"},{default:D(()=>[O("南部旅遊預算")]),_:1})])]),Bt]),Ut,E("ul",jt,[E("li",Qt,[C(s,{to:"/admin/adminlogin",class:"nav-link"},{default:D(()=>[O("後台管理")]),_:1})])])])])}const Jt=G(Rt,[["render",Wt]]),Gt={components:{FrontLayoutHeader:It,FrontLayoutFooter:Jt}};function Xt(y,S,s,u,h,n){const e=K("front-layout-header"),i=K("router-view"),m=K("front-layout-footer");return X(),Z(pt,null,[C(e),C(i),C(m)],64)}const te=G(Gt,[["render",Xt]]);export{te as default};