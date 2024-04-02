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
              class="card-img-top-2 img-fluid h-100"
              :alt="item.title"
            />
            <div class="card-body">
              <router-link :to="{
                    name: 'TouristSinglePackage',
                    params: { category: item.category, title: item.title }
                  }">
                <h3 class="fs-5 fs-lg-4 card-title pb-4 fw-bold text-primary-700 stretched-link mb-0">
                  {{ item.title }}
                </h3>
              </router-link>
              <div class="col-12">
                <p class="fs-6 text-dark2" v-if="currentDate <= item.endDate">
                  預約時間：{{ item.startDate }} ~ {{ item.endDate }}
                </p>
                <p class="fs-6 text-danger" v-else>預約時間已截止</p>
                <p class="fs-6 text-dark2" v-if="currentDate <= item.endDate">
                  出遊時間：{{ item.goStartDate }} ~ {{ item.goEndDate }}
                </p>
                <p class="fs-6 text-danger" v-else>已出遊完成</p>
              </div>
            </div>
            <div class="card-footer text-end border-0 pt-0 pb-3">
              <div class="d-flex justify-content-between align-items-end">
                <div class="d-flex align-items-center">
                  <span class="fs-6 fs-lg-5"><i class="bi bi-calendar-week me-2"></i>{{ item.tag_1 }}</span>
                </div>
                <p class="fs-5 fs-lg-4 text-primary-500">{{ thousand(item.price) }}</p>
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
import sweetAlert from '@/js/sweetAlert.js'

export default {
  data() {
    return {
      products: [],
      newProductsContent: '',
      enabledProducts: [],
      currentDate: ''
    }
  },
  methods: {
    checkDate() {
      //先創建一個Date實體
      var time = new Date()

      var timeDetails = {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        date: time.getDate()
      }
      // 將月份和日期補零，如果小於 10
      var monthString = (timeDetails.month < 10 ? '0' : '') + timeDetails.month
      var dateString = (timeDetails.date < 10 ? '0' : '') + timeDetails.date

      var formattedDate = timeDetails.year + '-' + monthString + '-' + dateString
      this.currentDate = formattedDate
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`)
        .then((res) => {
          this.products = res.data
          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledProducts.push(item)
            }
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
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
  }
}
</script>
