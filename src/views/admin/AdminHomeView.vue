<template>
  <div class="container">
    <h1 class="my-4">後台首頁</h1>
    <div class="row">
      <div class="col-3">
        <AdminSidebar></AdminSidebar>
      </div>
      <div class="col-9">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               最新景點建立資訊
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="row">
                  <div class="col-12 col-md-5">
                    <img :src="attraction.imageUrl" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-md-7">
                    <strong class="fs-5">景點名稱：{{ attraction.title }}</strong> <br>
                    <strong class="fs-6">分類：{{ attraction.category }}</strong> <br>
                    <div class="d-flex">
                      <strong class="fs-6">上架：</strong>
                      <strong class="fs-6" :class="{ 'text-success': attraction.is_enabled === 1, 'text-danger': attraction.is_enabled === 0 }">{{ attraction.is_enabled ? "啟用" : "未啟用"}}</strong>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                最新產品建立資訊
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="row">
                  <div class="col-12 col-md-5">
                    <!-- {{product}} -->
                    <img :src="product.imageUrl" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-md-7">
                    <strong class="fs-5">景點名稱：{{ product.title }}</strong> <br>
                    <strong class="fs-6">分類：{{ product.category }}</strong> <br>
                    <div class="d-flex">
                      <strong class="fs-6">上架：</strong>
                      <strong class="fs-6" :class="{ 'text-success': product.is_enabled === 1, 'text-danger': product.is_enabled === 0 }">{{ product.is_enabled ? "啟用" : "未啟用"}}</strong>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                留言
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                目前無資料
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminSidebar from '../../components/AdminSidebar.vue'
const api_url = import.meta.env.VITE_API_URL
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  components: {
    AdminSidebar
  },
  data() {
    return {
      token: '',
      attractions: [],
      attraction:[],
      attractionsLength:0,
      products:[],
      productsLength:0,
      product:[],
    }
  },
  methods: {
    checkAdmin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = this.token
      if (!this.token) {
        alert(`目前未登入管理者身分，請重新登入`)
        this.$router.push({ path: '/admin/adminlogin' })
      } else {
        this.axios
          .post(`${api_url}/api/user/check`)
          .then((res) => {
            // 登入成功
            this.userIsLoggedIn = true
          })
          .catch((err) => {
            // 登入失敗或驗證失敗
            this.userIsLoggedIn = false
            alert(`管理者身分驗證失敗，自動跳轉至登入頁面`)
            this.$router.push({ path: '/admin/adminlogin' })
          })
      }
    },
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
          this.productsLength =this.products.length;
          this.getProduct()
        })
        .catch((arr) => {
          alert(`${err.data.message}`)
        })
    },
    getProduct(){
      this.product = this.products[this.productsLength-1]
    }
  },
  mounted() {
    setTimeout(() => {
      this.checkAdmin()
    }, 500) // 3000 毫秒即為 3 秒
    this.getAttractions()
    this.getProducts()
  }
}
</script>
