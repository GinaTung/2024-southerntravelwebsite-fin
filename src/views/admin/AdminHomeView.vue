<template>
  <div class="container">
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3">
        <AdminSidebar />
      </div>
      <div class="col-12 col-md-9">
        <h2 class="my-5">總覽</h2>
        <div class="row g-3">
          <div class="col-12 col-lg-5">
            <DashboardStatueColumn />
          </div>
          <div class="col-12 col-lg-7"></div>
        </div>
        <div class="mt-6">
          <div class="row g-3">
            <div class="col-12 col-lg-5">已上架</div>
            <div class="col-12 col-lg-7"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminSidebar from '@/components/AdminSidebar.vue'
import DashboardStatueColumn from '@/components/DashboardStatueColumn.vue'
const api_url = import.meta.env.VITE_API_URL
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  components: {
    AdminSidebar,
    DashboardStatueColumn
  },
  data() {
    return {
      token: '',
      attractions: [],
      attraction: [],
      attractionsLength: 0,
      products: [],
      productsLength: 0,
      product: [],
      orders: []
    }
  },
  methods: {
    checkAdmin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = this.token
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '目前未登入管理者身分，請重新登入')
        this.$router.push({ path: '/admin/adminlogin' })
      } else {
        this.axios
          .post(`${api_url}/api/user/check`)
          .then((res) => {
            this.userIsLoggedIn = true
          })
          .catch((err) => {
            this.userIsLoggedIn = false
            sweetAlert.threeLayerCheckType('error', `管理者身分驗證失敗，自動跳轉至登入頁面`)
            this.$router.push({ path: '/admin/adminlogin' })
          })
      }
    },
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.attractionsLength = this.attractions.length
          this.getAttraction()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
    },
    getAttraction() {
      this.attraction = this.attractions[this.attractionsLength - 1]
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          this.products = res.data
          this.productsLength = this.products.length
          this.getProduct()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
    },
    getProduct() {
      this.product = this.products[this.productsLength - 1]
    },
    getOrders() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          this.orders = res.data
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得訂單資料失敗`)
        })
    }
  },
  mounted() {
    setTimeout(() => {
      this.checkAdmin()
    }, 500)
    this.getAttractions()
    this.getProducts()
  }
}
</script>
