<template>
  <nav class="navbar navbar-expand-lg bg-white py-0 sticky-top bg-opacity-90">
    <div class="container">
      <router-link to="/" class="navbar-brand py-lg-6 py-2">
        <img
          src="../assets/img/logo.png"
          alt="南部輕旅遊網站"
          style="aspect-ratio: 322 / 96; height: 48px"
          srcset="
            ../assets/img/logo.png    1920w,
            ../assets/img/logo-lg.png  960w,
            ../assets/img/logo-md.png  480w,
            ../assets/img/logo-sm.png  375w
          "
          sizes="(max-width: 375px) 100vw, 
         (max-width: 1920px) 50vw, 
         960px"
        />
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <i class="bi bi-list" style="font-size: 3rem; color: #0ea0a6"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="headerCollapse">
        <ul class="navbar-nav m-auto mb-lg-0 align-items-center pt-10 pt-lg-0">
          <li class="nav-item mb-10 mb-lg-0">
            <button
              class="nav-link px-5 px-xl-10 fs-5 text-dark"
              @click="redirectTo('TouristAttractions', '全部')"
              :class="{ active: isActive('/TouristAttractions') }"
            >
              南部旅遊景點
            </button>
          </li>
          <li class="nav-item mb-10 mb-lg-0">
            <button
              class="nav-link px-5 px-xl-10 fs-5 text-dark"
              @click="redirectTo('TouristPackage', '全部')"
              :class="{ active: isActive('/TouristPackage') }"
            >
              南部旅遊方案
            </button>
          </li>
        </ul>
        <ul
          v-if="userIsLoggedIn2 === false"
          class="navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center py-10 pb-10 pb-lg-0"
        >
          <li class="nav-item">
            <router-link to="/login" class="btn-outline-turquoise">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="btn-turquoise ms-3"> 註冊 </router-link>
          </li>
        </ul>
        <ul
          v-else
          class="navbar-nav d-flex pt-5 pt-lg-0 flex-row justify-content-center align-items-center pb-10 pb-lg-0"
        >
          <li class="nav-item py-0">
            <button class="btn-outline-turquoise position-relative px-6" type="button" @click.prevent="getCartSign(cartsLength)">
              <i class="bi bi-cart-fill"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartsLength }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </li>
          <li class="nav-item py-0">
            <router-link to="/profile" class="btn-outline-turquoise ms-3 px-6"
              ><i class="bi bi-person-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click="logout()" class="ms-3 btn-outline-turquoise px-5">登出</a>
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
import sweetAlert from '@/js/sweetAlert'
import Collapse from 'bootstrap/js/dist/collapse'
import FrontLayoutFooter from '@/components/FrontLayoutFooter.vue'

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
      transCartNumberStatus: false,
      userIsLogOut: false,
      isloading: false,
      path: ''
    }
  }, // 在頁首區塊中監聽事件並更新購物車數量的值
  created() {
    this.updateCart()
    this.getCarts()
    if (this.token) {
      this.getHeartData()
    }
  },
  // 路由改變時隱藏選單
  watch: {
    $route() {
      this.headerCollapse.hide()
    }
  },
  methods: {
    updateCart() {
      this.$emitter.on('adminUpdateCart', (msg) => {
        this.cartsLength = msg
      })
      this.$emitter.on('updateCart', (msg) => {
        this.cartsLength = msg
      })
      this.$emitter.on('updateCartNum', (msg) => {
        this.cartsLength = msg
      })
    },
    redirectTo(page, category) {
      this.$root.navigatedFromHeader = true
      let path = page === 'TouristPackage' ? '/TouristPackage' : '/TouristAttractions'
      this.$router.push({ path: path, query: { category: category } })
    },
    isActive(routePath) {
      return this.path === routePath
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
      // this.isNavbarOpen = !this.isNavbarOpen
      if (this.$refs.headerCollapse.classList.contains('show')) {
        this.headerCollapse.hide()
      } else {
        this.headerCollapse.show()
      }
    },
    logout() {
      this.deleteAllCookies()
      this.userIsLoggedIn2 = false
      sweetAlert.threeLayerCheckType('success', '會員登出成功')
      this.isloading = true
      if (this.path === '/') {
        this.isloading = false
        this.$router.go(0)
      } else {
        this.isloading = false
        this.$router.push('/')
      }
    },
    getHeartData() {
      this.axios
        .get(`${api_url2}/hearts`)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.userId === this.userId && item.tag === '旅遊景點') {
              // 設置收藏狀態
              this.isFavorite[item.product] = true
            }
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
        })
    },
    getCarts() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.carts = res.data
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
          this.cartsLength = this.userCarts.length
        })
        .catch(() => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
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
    getCartSign() {
      if (this.cartsLength === 0) {
        // 顯示提示訊息
        sweetAlert.fourLayerCheckType(
          'warning',
          '目前無購物車資料',
          '將在',
          '秒後自動跳轉至旅遊景點方案頁面',
          '預約購買旅遊方案'
        )
        setTimeout(() => {
          // 將使用者導向到旅遊景點方案頁面
          this.$router.push({ path: '/TouristPackage', query: { category: '全部' } })
        }, 11000)
      }else {
        this.$router.push({ path: '/cart'})
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
    this.path = this.$route.path
  }
}
</script>
<style lang="scss" scoped>
.nav-item .bi::before {
  font-size: 24px;
}
.active {
  color: #0ea0a6;
}
.btn-turquoise.active {
  color: white;
}
</style>
