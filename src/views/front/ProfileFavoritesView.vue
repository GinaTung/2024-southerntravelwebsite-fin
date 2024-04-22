<template>
  <!-- 南部旅遊景點 -->
  <div class="d-flex justify-content-center align-items-center w-100">
    <span class="line"></span>
    <h5 class="flex-grow-1 fs-6 fs-lg-5 text-center">南部旅遊景點</h5>
    <span class="line"></span>
  </div>

  <div class="d-flex justify-content-center align-items-center my-5">
    <button
      v-for="category in ['全部', '嘉義', '台南', '高雄']"
      :key="category"
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
      :class="{ active: this.heartCategory === category }"
      @click.prevent="getHeartData(category)"
    >
      {{ category }}
    </button>
  </div>

  <template v-if="isLoading & (pageName === '旅遊景點')">
    <div class="row g-3 py-8">
      <div v-for="index in 3" :key="index" class="col-12 col-md-6 col-lg-4">
        <div class="card card-att h-100">
          <span class="tag text-white"></span>
          <div class="heart">
            <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
          </div>
          <img
            src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
            class="img-fluid opacity-25 first-img z-index-1"
            alt="Placeholder Image"
            style="height: 180px"
          />
          <div class="card-body placeholder-glow">
            <span class="placeholder w-50 text-center"></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="row g-3 py-8">
      <template v-if="heartData.length === 0">
        <div
          class="col-12 w-100 bg-primary-200 d-flex align-items-center justify-content-center rounded-1"
          style="height: 260px"
        >
          <h3 class="text-center">無收藏資料</h3>
        </div>
      </template>
      <template v-else>
        <div v-if="status.loadingItem2" class="text-center py-20">
          <div
            class="spinner-border"
            role="status"
            style="width: 3rem; height: 3rem; color: #43b8bd"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4" v-for="item in heartData" :key="item.id" v-else>
          <div class="card h-100">
            <img
              :src="item.imageUrl"
              class="img-fluid h-100 card-radius"
              alt="item.title"
              style="height: 180px"
            />
            <span class="tag text-white">{{ item.category }}</span>
            <button
              class="heart border-0"
              @click="toggleFavorite(item.product, item.category, item.title, '旅遊景點')"
              type="button"
            >
              <i
                :class="[
                  'bi',
                  {
                    'bi-heart-fill': isFavorite[item.product],
                    'bi-heart': !isFavorite[item.product]
                  }
                ]"
                style="font-size: 24px"
              ></i>
            </button>
            <div class="card-body">
              <router-link
                :to="{
                  name: 'TouristSingleAttraction',
                  params: {
                    category: item.category,
                    title: item.title
                  }
                }"
              >
                <h4
                  class="fs-6 fs-xl-5 fw-bold text-primary-700 card-title stretched-link text-center"
                >
                  {{ item.title }}
                </h4>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </template>

  <!-- 南部旅遊方案 -->
  <div class="d-flex justify-content-center align-items-center w-100">
    <span class="line"></span>
    <h5 class="flex-grow-1 fs-6 fs-lg-5 text-center">南部旅遊方案</h5>
    <span class="line"></span>
  </div>
  <div class="d-flex justify-content-center align-items-center my-5">
    <button
      v-for="category in ['全部', '嘉義', '台南', '高雄']"
      :key="category"
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
      :class="{ active: this.heartCategory2 === category }"
      @click.prevent="getHeartData2(category)"
    >
      {{ category }}
    </button>
  </div>
  <template v-if="isLoading & (pageName === '旅遊方案')">
    <div class="row g-3 py-8">
      <div v-for="index in 3" :key="index" class="col-12 col-md-6 col-lg-4">
        <div class="card card-att h-100">
          <span class="tag text-white"></span>
          <div class="heart">
            <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
          </div>
          <img
            src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
            class="img-fluid opacity-25 first-img z-index-1"
            alt="Placeholder Image"
            style="height: 180px"
          />
          <div class="card-body placeholder-glow">
            <span class="placeholder w-50 text-center"></span>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="row g-3 py-8">
      <template v-if="heartData2.length === 0">
        <div
          class="col-12 w-100 bg-primary-200 d-flex align-items-center justify-content-center rounded-1"
          style="height: 260px"
        >
          <h3 class="text-center">無收藏資料</h3>
        </div>
      </template>
      <template v-else>
        <div v-if="status.loadingItem" class="text-center py-20">
          <div
            class="spinner-border"
            role="status"
            style="width: 3rem; height: 3rem; color: #43b8bd"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4" v-for="item in heartData2" :key="item.id" v-else>
          <div class="card h-100">
            <img
              :src="item.imageUrl"
              class="img-fluid h-100 card-radius"
              alt="item.title"
              style="height: 180px"
            />
            <span class="tag text-white">{{ item.category }}</span>
            <button
              class="heart border-0"
              @click="toggleFavorite(item.product, item.category, item.title, '旅遊方案')"
              type="button"
            >
              <i
                :class="[
                  'bi',
                  {
                    'bi-heart-fill': isFavorite[item.product],
                    'bi-heart': !isFavorite[item.product]
                  }
                ]"
                style="font-size: 24px"
              ></i>
            </button>
            <div class="card-body">
              <router-link
                :to="{
                  name: 'TouristSinglePackage',
                  params: {
                    category: item.category,
                    title: item.title
                  }
                }"
              >
                <h4
                  class="fs-6 fs-xl-5 fw-bold text-primary-700 card-title stretched-link text-center"
                  style=""
                >
                  {{ item.title }}
                </h4>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </template>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  data() {
    return {
      userId: '',
      token: '',
      heartData: [],
      heartData2: [],
      heartCategory: '全部',
      heartCategory2: '全部',
      isFavorite: {},
      isLoading: false,
      pageName: '',
      status: {
        loadingItem: false,
        loadingItem2: false
      }
    }
  },
  methods: {
    getHeartData(heartCategory = '全部') {
      this.status.loadingItem2 = true
      this.pageName = '旅遊景點'
      this.heartCategory = heartCategory
      if (heartCategory === '全部') {
        this.axios
          .get(`${api_url2}/hearts?userId=${this.userId}&tag=旅遊景點`)
          .then((res) => {
            this.heartData = res.data
            this.isLoading = false
            this.status.loadingItem2 = false
            this.heartData.forEach((item) => {
              this.isFavorite[item.product] = true
            })
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      } else {
        this.axios
          .get(`${api_url2}/hearts?category=${heartCategory}&userId=${this.userId}&tag=旅遊景點`)
          .then((res) => {
            this.heartData = res.data
            this.status.loadingItem2 = false
            this.heartData.forEach((item) => {
              this.isFavorite[item.product] = true
            })
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      }
    },
    getHeartData2(heartCategory2 = '全部') {
      this.status.loadingItem = true
      this.heartCategory2 = heartCategory2
      this.pageName = '旅遊方案'
      if (heartCategory2 === '全部') {
        this.axios
          .get(`${api_url2}/hearts?userId=${this.userId}&tag=旅遊方案`)
          .then((res) => {
            this.heartData2 = res.data
            this.isLoading = false
            this.status.loadingItem = false
            this.heartData2.forEach((item) => {
              this.isFavorite[item.product] = true
            })
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      } else {
        this.axios
          .get(`${api_url2}/hearts?category=${heartCategory2}&userId=${this.userId}&tag=旅遊方案`)
          .then((res) => {
            this.heartData2 = res.data
            this.status.loadingItem = false
            this.heartData2.forEach((item) => {
              this.isFavorite[item.product] = true
            })
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      }
    },
    toggleFavorite(productId, category, title, tag) {
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能加入收藏')
      } else {
        this.axios
          .get(`${api_url2}/hearts?category=${category}&userId=${this.userId}&tag=${tag}`)
          .then((res) => {
            const existingData = res.data.find((item) => item.product === productId)
            if (existingData) {
              this.axios
                .delete(`${api_url2}/hearts/${existingData.id}`)
                .then((res) => {
                  // 更新收藏狀態
                  this.isFavorite[productId] = false
                  sweetAlert.threeLayerCheckType('success', `取消收藏 ${title} 成功`)
                  this.getHeartData()
                  this.getHeartData2()
                })
                .catch((err) => {
                  sweetAlert.threeLayerCheckType('error', `取消收藏資料失敗`)
                })
            }
          })
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
    window.scrollTo(0, 0)
    this.isLoading = true
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.getHeartData()
    this.getHeartData2()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/all.scss';
.line {
  width: 100px;
  border: 2px solid $primary-200;
  margin: 20px 0;
  width: calc(100% / 3 + 5%);
  @include pad-sm {
    width: calc(100% / 3);
  }
}
.active {
  background: $primary-400 !important;
  color: white !important;
}
.card-radius {
  border-top-right-radius: calc(1.25rem - 1px) !important;
  border-top-left-radius: calc(1.25rem - 1px) !important;
}
</style>
