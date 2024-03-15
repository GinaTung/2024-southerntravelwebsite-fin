<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-0 sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand py-6">
        <img src="../assets/img/logo.png" alt="南部輕旅遊網站" />
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <i class="bi bi-list" style="font-size: 3rem; color: #0ea0a6"></i>
      </button>
      <div
        class="collapse navbar-collapse py-10 py-lg-0"
        id="navbarSupportedContent"
        ref="headerCollapse"
        v-show="isNavbarOpen"
      >
        <ul class="navbar-nav m-auto mb-lg-0 align-items-center">
          <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristAttractions" class="nav-link px-5 px-xl-10 fs-5 text-dark"
              >南部旅遊景點</router-link
            >
          </li>
          <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristPackage" class="nav-link px-5 px-xl-10 fs-5 text-dark"
              >南部旅遊方案</router-link
            >
          </li>
          <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristBudget" class="nav-link px-5 px-xl-10 fs-5 text-dark"
              >南部旅遊預算</router-link
            >
          </li>
        </ul>
        <ul
          v-if="userIsLoggedIn2 === false"
          class="navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center"
        >
          <li class="nav-item">
            <router-link to="/login" class="btn-outline-turquoise">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="btn-turquoise ms-3">註冊</router-link>
          </li>
        </ul>
        <ul
          v-else
          class="navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center align-items-center"
        >
          <li class="nav-item" style="padding-top: 5px; padding-bottom: 5px">
            <a href="#/cart" class="btn-outline-turquoise"> <i class="bi bi-cart-fill fs-5"></i></a>
          </li>
          <li
            class="nav-item btn-outline-turquoise ms-3"
            style="padding-top: 5px; padding-bottom: 5px"
          >
            <!-- <a href="#" class="btn-outline-turquoise ms-3">會員資料</a> -->
            <i class="bi bi-person-fill fs-5"></i>
          </li>
          <li class="nav-item ms-3">
            <a href="#" @click="logout()" class="btn-outline-turquoise">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <front-layout-footer />
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import Collapse from 'bootstrap/js/dist/collapse'
import FrontLayoutFooter from '../components/FrontLayoutFooter.vue'
export default {
  components: {
    FrontLayoutFooter
  },
  data() {
    return {
      headerCollapse: {},
      isNavbarOpen: false,
      userIsLoggedIn2: false,
      token: ''
    }
  }, // 路由改變時隱藏選單
  watch: {
    $route() {
      this.headerCollapse.hide()
    }
  },
  methods: {
    checkLoggedInUser() {
      this.$emitter.on('loginCheck2', (msg) => {
        this.userIsLoggedIn2 = msg
      })
      if (this.token) {
        // 已登入
        this.userIsLoggedIn2 = true
      } else {
        // 未登入
        this.userIsLoggedIn2 = false
      }
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen
    },
    logout() {
      this.deleteAllCookies()
      this.userIsLoggedIn2 = false

      // 导向至登录页面或首页
      this.$router.push('/') // 或者你想导向的其他路径
    },
    deleteAllCookies() {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    }
  },
  mounted() {
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenU\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = this.token
    // console.log(this.token)
    this.checkLoggedInUser()
  }
}
</script>
