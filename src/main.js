import $ from 'jquery';
window.$ = $;
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



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.config.globalProperties.$emitter = emitter
app.component('VueLoading', Loading);
app.mount('#app')
