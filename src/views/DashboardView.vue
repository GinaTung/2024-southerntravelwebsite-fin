<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/admin/adminHome" class="navbar-brand">
        <img src="../assets/img/logo.png" alt="南部輕旅遊網站" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" @click="toggleNavbar">
            <router-link to="/" class="nav-link">回前台</router-link>
          </li>
          <li class="nav-item" @click="toggleNavbar">
            <router-link v-if="userIsLoggedIn === false" to="/admin/adminlogin" class="nav-link"
              >管理者登入</router-link
            >
            <a v-else class="nav-link" @click="logout()">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3">
        <AdminSidebar />
      </div>
      <div class="col-12 col-md-9">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
const api_url = import.meta.env.VITE_API_URL
import { Collapse } from 'bootstrap'
import AdminSidebar from '@/components/AdminSidebar.vue'
import sweetAlert from '@/js/sweetAlert.js'

export default {
  components: {
    AdminSidebar
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      userIsLoggedIn: false,
      token: '',
      navCollapse: null
    }
  },
  methods: {
    toggleNavbar() {
      if (this.$refs.navbar.classList.contains('show')) {
        this.navCollapse.hide()
      } else {
        this.navCollapse.show()
      }
    },
    checkAdmin() {
      // 訂閱登入事件
      this.$emitter.on('loginCheck', (msg) => {
        this.userIsLoggedIn = msg
      })
      if (this.token) {
        // 檢查登入狀態
        this.axios
          .post(`${api_url}/api/user/check`)
          .then((res) => {
            // 登入成功
            this.userIsLoggedIn = true
          })
          .catch(() => {
            // 登入失敗或驗證失敗
            this.userIsLoggedIn = false
            sweetAlert.threeLayerCheckType('error', `管理者身分驗證失敗，自動跳轉至登入頁面`)
            this.$router.push({ path: '/admin/AdminHome' })
          })
      }
    },
    logout() {
      this.axios
        .post(`${api_url}/logout`)
        .then(() => {
          document.cookie = 'hexToken=; expires='
          this.$router.push({ path: '/' })
          this.userIsLoggedIn = false
        })
        .catch(() => {
          sweetAlert.threeLayerCheckType('error', `管理者身分登出失敗，請稍後再點選登出按鈕`)
        })
    }
  },
  mounted() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = this.token
    this.checkAdmin()
    this.navCollapse = new Collapse(this.$refs.navbar, { toggle: false })
  }
}
</script>
<style lang="scss" scoped>
a.nav-link {
  cursor: pointer;
}
</style>
