<template>
  <div class="southern-travel-plan">
    <div class="container py-10 py-lg-30">
      <h2 class="fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center">南部旅遊方案</h2>
      <p class="fs-6 fs-lg-5 text-center mb-5 mb-lg-20">Southern tourist attractions</p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <template v-if="isLoading">
          <div v-for="index in 3" :key="index" class="col">
            <div class="card card-att h-100">
              <span class="tag text-white  placeholder-glow"></span>
              <div class="heart">
                <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
              </div>
              <img
                src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
                class="img-fluid opacity-25 first-img z-index-1"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <span class="placeholder w-25"></span>
                <div class="col-12 placeholder-glow">
                  <span class="placeholder w-50"></span>
                  <span class="placeholder w-60"></span>
                </div>
              </div>
              <div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow">
                <div class="d-flex justify-content-between">
                  <span class="placeholder w-25"></span>
                  <span class="placeholder w-25"></span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="col" v-for="item in enabledProducts" :key="item.id">
            <div class="card card-att h-100">
              <span class="tag text-white">{{ item.category }}</span>
              <div class="card-att-img">
                <router-link
                    :to="{
                      name: 'TouristSinglePackage',
                      params: { category: item.category, title: item.title }
                    }"
                  >
                  <img
                    :src="item.imageUrl"
                    class="card-radius img-fluid h-100"
                    :alt="item.title"
                  />
                </router-link>
              </div>
              <!-- 愛心點選 -->
              <button
                class="heart border-0"
                @click="toggleFavorite(item.id, item.category, item.title,item.imageUrl)"
                type="button"
                aria-label="heart"
              >
                <i
                  :class="[
                    'bi',
                    {
                      'bi-heart-fill': isFavorite[item.id],
                      'bi-heart': !isFavorite[item.id]
                    }
                  ]"
                  style="font-size: 24px"
                ></i>
              </button>
              <div style="transform: rotate(0)">
                <div class="card-body">
                  <router-link
                    :to="{
                      name: 'TouristSinglePackage',
                      params: { category: item.category, title: item.title }
                    }"
                  >
                    <h3
                      class="fs-5 fs-lg-4 card-title pb-4 fw-bold text-primary-700 stretched-link mb-0"
                    >
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
                      <span class="fs-6 fs-lg-5"
                        ><i class="bi bi-calendar-week me-2"></i>{{ item.tag_1 }}</span
                      >
                    </div>
                    <p class="fs-5 fs-lg-4 text-primary-500">{{ thousand(item.price) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert.js'

export default {
  data() {
    return {
      products: [],
      newProductsContent: '',
      enabledProducts: [],
      currentDate: '',
      isLoading: false,
      heartData: [],
      isFavorite: {},
      userId: '',
      token: ''
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
    getHeartData() {
      this.axios
        .get(`${api_url2}/hearts`)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.userId === this.userId && item.tag === '旅遊方案') {
              // 設置收藏狀態
              this.isFavorite[item.product] = true
            }
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
        })
    },
    toggleFavorite(productId, category, title, imageUrl) {
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能加入收藏')
      } else {
        // 取得收藏資料
        this.axios
          .get(`${api_url2}/hearts`)
          .then((res) => {
            // 檢查是否已存在收藏資料
            const existingData = res.data.find(
              (item) =>
                item.product === productId && item.userId === this.userId && item.tag === '旅遊方案'
            )
            if (existingData) {
              // 如果已存在收藏資料，則執行刪除操作
              this.axios
                .delete(`${api_url2}/hearts/${existingData.id}`)
                .then((res) => {
                  // 更新收藏狀態
                  this.isFavorite[productId] = false
                  sweetAlert.threeLayerCheckType('success', `取消收藏 ${title} 成功`)
                  this.getHeartData()
                })
                .catch((err) => {
                  sweetAlert.threeLayerCheckType('error', `取消收藏資料失敗`)
                })
            } else {
              // 如果不存在收藏資料，則新增收藏資料
              this.axios
                .post(`${api_url2}/hearts`, {
                  product: productId,
                  category,
                  title,
                  userId: this.userId,
                  tag: '旅遊方案',
                  imageUrl
                })
                .then((res) => {
                  // 更新收藏狀態
                  this.isFavorite[productId] = true
                  sweetAlert.threeLayerCheckType('success', `已加入收藏 ${title} 成功`)
                  this.getHeartData()
                })
                .catch((err) => {
                  sweetAlert.threeLayerCheckType('error', `收藏資料失敗`)
                })
            }
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      }
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products?id=GDwTM-i&id=ymbfYtq&id=vjHdmEx`)
        .then((res) => {
          this.products = res.data
          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledProducts.push(item)
              this.isLoading = false
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
    this.getProducts()
    this.isLoading = true
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    if(this.token){
        this.getHeartData()
      }
  }
}
</script>
<style lang="scss" scoped>
.card-radius {
  border-top-right-radius: calc(1.25rem - 1px) !important;
  border-top-left-radius: calc(1.25rem - 1px) !important;
}
.card-title:hover{
  color: #0ea0a6 !important;
}
</style>