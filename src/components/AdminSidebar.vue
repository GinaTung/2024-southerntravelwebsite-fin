<template>
  <ul class="list-group rounded-1 my-4">
    <li
      class="list-group-item list-group-item-action rounded-1 fs-5 p-0 border-0"
      aria-current="true"
    >
      <router-link to="/admin/AdminHome" class="d-flex justify-content-between align-items-center p-4"
        >後台首頁
      </router-link>
    </li>
    <li class="list-group-item list-group-item-action rounded-1 fs-5 p-0 border-0" aria-current="true">
      <router-link
        to="/admin/attractionsManagement"
        class="d-flex justify-content-between align-items-center p-4"
        >景點管理
        <span class="badge text-bg-primary-400 text-white rounded-pill">{{
          attractions.length
        }}</span>
      </router-link>
    </li>
    <li class="list-group-item list-group-item-action rounded-1 fs-5 p-0 border-0">
      <router-link
        to="/admin/productsManagement"
        class="d-flex justify-content-between align-items-center p-4"
        >產品管理<span class="badge text-bg-primary-400 text-white rounded-pill">{{
          products.length
        }}</span></router-link
      >
    </li>
    <li class="list-group-item list-group-item-action rounded-1 fs-5 p-0 border-0">
      <router-link
        to="/admin/ordersManagement"
        class="d-flex justify-content-between align-items-center p-4"
        >訂單管理
        <span class="badge text-bg-primary-400 text-white rounded-pill">{{ orders.length }}</span>
      </router-link>
    </li>
    <!-- <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 
      預約數量管理
      <span class="badge text-bg-primary-400 text-white rounded-pill">0</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 
      留言管理
      <span class="badge text-bg-primary-400 text-white rounded-pill">0</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 
      優惠券管理
      <span class="badge text-bg-primary-400 text-white rounded-pill">0</span>
    </li> -->
  </ul>
</template>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  data() {
    return {
      attractions: [],
      attraction: [],
      attractionsLength: 0,
      products: [],
      productsLength: 0,
      orders: [],
    }
  },
  methods: {
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.attractionsLength = this.attractions.length
          this.getAttraction()
        })
        .catch((arr) => {
          alert(`${err}`)
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
        })
        .catch((arr) => {
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
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
    this.getAttractions()
    this.getProducts()
    this.getOrders()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/all.scss';
.active {
  background: #d5f3f4 !important;
  color: #0ea0a6 !important;
}
</style>
