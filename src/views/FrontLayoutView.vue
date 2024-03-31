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
            <router-link
              to="/TouristAttractions"
              class="nav-link px-5 px-xl-10 fs-5 text-dark"
              @click="redirectToB('全部')"
              >南部旅遊景點</router-link
            >
          </li>
          <li class="nav-item mb-10 mb-lg-0">
            <router-link
              to="/TouristPackage"
              class="nav-link px-5 px-xl-10 fs-5 text-dark"
              @click="redirectToA('全部')"
              >南部旅遊方案</router-link
            >
          </li>
          <!-- <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristBudget" class="nav-link px-5 px-xl-10 fs-5 text-dark"
              >南部旅遊預算</router-link
            >
          </li> -->
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
          <li class="nav-item">
            <a
              type="button"
              class="btn-outline-turquoise position-relative"
              href="#/cart"
              style="padding-top: 5px; padding-bottom: 5px"
            >
              <i class="bi bi-cart-fill fs-5"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartsLength }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
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
import sweetAlert from '../js/sweetAlert'
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
      token: '',
      carts: [],
      userCarts: [],
      cartsLength: 0,
      userCartsNum: [],
      transCartNumberStatus: false
    }
  }, // 在頁首區塊中監聽事件並更新購物車數量的值
  created() {
    this.updateCart()
    this.getCarts()
  },
  // 路由改變時隱藏選單
  watch: {
    $route() {
      this.headerCollapse.hide()
      // this.$emitter.on('updateCart', () => {
      //   this.getCarts()
      // })
    }
  },
  methods: {
    updateCart() {
      this.$emitter.on('adminUpdateCart',this.getCarts)
      this.$emitter.on('updateCart', (msg) => {
        this.cartsLength = msg
        // console.log(this.cartsLength,'updateCart')
      })
      this.$emitter.on('updateCartNum', (msg) => {
        this.cartsLength = msg
        // console.log(this.cartsLength,'updateCartNum')
      })
    },
    // 此設置按鈕再次點選時觸發一樣'全部'
    redirectToA(category) {
      this.$root.navigatedFromHeader = true // 假设你通过根实例来设置状态
      this.$router.push({ path: '/TouristPackage', query: { category: category } })
    },
    // 此設置按鈕再次點選時觸發一樣'全部'
    redirectToB(category) {
      this.$root.navigatedFromHeader = true // 假设你通过根实例来设置状态
      this.$router.push({ path: '/TouristAttractions', query: { category: category } })
    },
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
      sweetAlert.threeLayerCheckType('success', '會員登出成功')
      // 导向至登录页面或首页
      this.$router.push('/') // 或者你想导向的其他路径
    },
    getCarts() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          // console.log(res)
          this.carts = res.data
          // console.log(this.carts)
          this.carts.forEach((item) => {
            if (item.userId === this.userId) {
              this.userCarts.push(item)
            }
          })
          // 移除重複的產品
          const uniqueUserCarts = []
          const productIdSet = new Set()
          this.userCarts.forEach((item) => {
            if (!productIdSet.has(item.productId)) {
              productIdSet.add(item.productId)
              uniqueUserCarts.push(item)
            }
          })
          this.userCarts = uniqueUserCarts
          // 更新購物車數量
          // console.log(this.userCarts, 'usercart')
          this.cartsLength = this.userCarts.length
          // console.log(this.cartsLength, 'cartsLength')
        })
        .catch((err) => {
          console.log(err)
          alert(`${err.message}`)
        })
    },
    deleteAllCookies() {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    },
    getCookie(cookieName) {
      const cookies = document.cookie.split(';')
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === cookieName) {
          return value
        }
      }
      return null
    }
  },
  mounted() {
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexTokenU\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = this.token
    this.checkLoggedInUser()
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    // this.getCarts()
  }
}
</script>
