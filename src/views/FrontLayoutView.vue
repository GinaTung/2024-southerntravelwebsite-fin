<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
    <div class="container">
      <router-link to="/" class="navbar-brand py-6">
        <img src="../assets/img/logo.png" alt="南部輕旅遊網站" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="headerCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse py-10 py-lg-0"
        id="navbarSupportedContent"
        ref="headerCollapse"
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
          class="navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center"
        >
          <li class="nav-item">
            <router-link to="/login" class="btn-outline-turquoise">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="btn-turquoise ms-3">註冊</router-link>
          </li>
        </ul>

        <!-- <div
          class="dropdown ms-3 d-flex justify-content-center justify-content-lg-start align-items-center"
        >
          <a
            class="btn btn-outline-turquoise dropdown-toggle px-2"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-display="static"
          >
            <i class="bi bi-person-circle fs-5 px-2" style="color: #43b8bd"></i>
          </a>
          <a href="#" class="btn-turquoise ms-3" type="button" @click="logout()">登出</a>
          <ul
            class="dropdown-menu rounded-1 py-1"
            aria-labelledby="dropdownMenuLink"
            style="border: 1px solid #43b8bd"
          >
            <li><a class="dropdown-item" href="#">收藏列表</a></li>
          </ul>
        </div> -->
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
      userId: '',
      headerCollapse: {},
      token: '',
      memberIsLoggedIn: 'false',
      user: {
        email: '',
        password: ''
      }
    }
  }, // 路由改變時隱藏選單
  watch: {
    $route() {
      this.headerCollapse.hide()
    }
  },
  // methods: {
  //   checkAdmin() {
  //     this.$emitter.on('loginCheck2', (msg) => {
  //       this.memberIsLoggedIn = msg
  //     })
  //   },
  //   logout() {
      
  //     // 將過期日期設為過去的時間 (1秒前)
  //     const pastDate = new Date(Date.now() - 1000)
      
  //     // 將cookie過期
  //     document.cookie = `hexToken=; expires=${pastDate.toUTCString()}; user=; path=/`
  //     this.memberIsLoggedIn = false // 用户登出
  //         alert(`登出成功`)
  //         this.$router.push({ path: '/' })
  //   }
  // },
  mounted() {
    //取得cookie資料
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    // console.log(token)
    // console.log(this.memberIsLoggedIn);
    // this.checkAdmin()
  }
}
</script>
