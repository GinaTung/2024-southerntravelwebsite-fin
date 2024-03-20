<template>
  <ul class="list-group rounded-1">
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"  aria-current="true">
      <router-link to="/admin/attractionsManagement">景點管理</router-link>
      <span class="badge text-bg-primary-400 text-white rounded-pill">{{ attractions.length }}</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 
      <router-link to="/admin/productsManagement">產品管理</router-link>
      <span class="badge text-bg-primary-400 text-white rounded-pill">{{ products.length }}</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 
      <router-link to="/admin/ordersManagement">訂單管理</router-link>
      <span class="badge text-bg-primary-400 text-white rounded-pill">{{ orders.length }}</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"> 
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
    </li>
  </ul>
</template>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
  export default {
  data() {
    return {
      attractions: [],
      attraction:[],
      attractionsLength:0,
      products:[],
      productsLength:0,
      orders:[]
    }
  },
  methods:{
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          // console.log(res.data)
          this.attractions = res.data;
          this.attractionsLength =this.attractions.length;
          // console.log(this.attractionsLength);
          this.getAttraction()
        })
        .catch((arr) => {
          alert(`${err}`)
        })
    },
    getAttraction() {
      // console.log(this.attractionsLength);
      this.attraction = this.attractions[this.attractionsLength-1]
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data
        })
        .catch((arr) => {
          alert(`${err.data.message}`)
        })
    },
    getOrders() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          // console.log(res)
          this.orders = res.data

        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    this.getAttractions()
    this.getProducts()
    this.getOrders()

  }
}
</script>  