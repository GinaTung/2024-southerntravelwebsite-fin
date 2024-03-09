<template>
  <div class="southern-travel-plan">
    <div class="container py-10 py-lg-30">
      <p class="fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center">南部旅遊方案</p>
      <p class="fs-6 fs-lg-5 text-center mb-5 mb-lg-20">Southern tourist attractions</p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="item in enabledProducts" :key="item.id">
          <div class="card card-att h-100">
            <span class="tag text-white">{{ item.category }}</span>
            <!-- 愛心點選 -->
            <div class="heart3">
              <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
            </div>
            <img
              :src="item.imageUrl"
              class="card-img-top-2 img-fluid pb-6 pb-6 h-100"
              :alt="item.title"
            />
            <!-- ?q=台南&title=臺南七股北門雙日遊 -->
            <div class="card-body">
              <a :href="item.link">
                <h3 class="fs-5 fs-lg-3 card-title pb-4 fw-bold text-primary-700 stretched-link">
                  {{ item.title }}
                </h3>
              </a>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <img
                    src="../assets/img/calendar_today.png"
                    alt="calendar_today"
                    class="img-fluid me-2"
                  />
                  <span class="fs-6 fs-lg-5">{{ item.tag_1 }}</span>
                </div>
                <p class="fs-4 fs-lg-3 text-primary-500">{{ thousand(item.price) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card-img-top-2 {
  border-top-right-radius: calc(1.25rem - 1px) !important;
  border-top-left-radius: calc(1.25rem - 1px) !important;
}
</style>
<script>
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  data() {
    return {
      products: [],
      newProductsContent: '',
      enabledProducts: []
    }
  },
  methods: {
    getProducts() {
      // console.log(this.packageTitle)
      this.axios
        .get(`${api_url2}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`)
        .then((res) => {
          // console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.enabledProducts.push(item)
            }
          })
          // console.log(this.enabledProducts)
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    }
  },
  mounted() {
    this.getProducts()
    console.log(this.$route);
  }
}
</script>
