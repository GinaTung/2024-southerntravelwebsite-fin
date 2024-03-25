// import $ from 'jquery';
// window.$ = $;
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/all.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'
const emitter = mitt()
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {
    Form, Field, ErrorMessage, defineRule, configure,
  } from 'vee-validate';
  import * as AllRules from '@vee-validate/rules';
  import { localize, setLocale } from '@vee-validate/i18n';
  import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });
  
  configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
  });
  
  // 設定預設語系
  setLocale('zh_TW');

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2);
app.config.globalProperties.$emitter = emitter
app.component('VueLoading', Loading);
app.component('VeeForm', Form);
app.component('VeeField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app')
