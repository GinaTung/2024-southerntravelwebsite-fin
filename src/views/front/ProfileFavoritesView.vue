<template>
  <div class="d-flex justify-content-center align-items-center w-100">
    <span class="line"></span>
    <h5 class="flex-grow-1 fs-6 fs-lg-5 text-center">南部旅遊景點</h5>
    <span class="line"></span>
  </div>
  <div class="d-flex justify-content-center align-items-center my-5">
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
      :class="{ active: this.heartCategory === '全部' }"
      @click.prevent="getHeartData('全部')"
    >
      全部
    </button>
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
      :class="{ active: this.heartCategory === '嘉義' }"
      @click.prevent="getHeartData('嘉義')"
    >
      嘉義
    </button>
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
      :class="{ active: this.heartCategory === '台南' }"
      @click.prevent="getHeartData('台南')"
    >
      台南
    </button>
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
      :class="{ active: this.heartCategory === '高雄' }"
      @click.prevent="getHeartData('高雄')"
    >
      高雄
    </button>
  </div>
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
      <div class="col-12 col-md-6 col-lg-4" v-for="item in heartData" :key="item.id">
        <div class="card h-100">
          <img :src="item.imageUrl" class="img-fluid h-100 card-radius" alt="item.title" />
          <span class="tag text-white">{{ item.category }}</span>
          <button
            class="heart border-0"
            @click="toggleFavorite(item.product, item.category, item.title, item.imageUrl)"
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
                class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title stretched-link text-center"
              >
                {{ item.title }}
              </h4>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
  <div class="d-flex justify-content-center align-items-center w-100">
    <span class="line"></span>
    <h5 class="flex-grow-1 fs-6 fs-lg-5 text-center">南部旅遊方案</h5>
    <span class="line"></span>
  </div>
  <div class="d-flex justify-content-center align-items-center my-5">
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
    >
      全部
    </button>
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
    >
      嘉義
    </button>
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
    >
      台南
    </button>
    <button
      type="button"
      class="btn-outline-turquoise px-lg-10 mx-2 mx-lg-4 rounded-1"
    >
      高雄
    </button>
  </div>
  <div class="row g-3 py-8">
    <div
      class="col-12 w-100 bg-primary-200 d-flex align-items-center justify-content-center rounded-1"
      style="height: 260px"
    >
      <h3 class="text-center">無收藏資料</h3>
    </div>
  </div>
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
      heartCategory: '全部',
      isFavorite: {}
    }
  },
  methods: {
    getHeartData(heartCategory = '全部') {
      this.heartCategory = heartCategory
      if (heartCategory === '全部') {
        this.axios
          .get(`${api_url2}/hearts?userId=${this.userId}&tag=旅遊景點`)
          .then((res) => {
            this.heartData = res.data
            res.data.forEach((item) => {
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
            res.data.forEach((item) => {
              this.isFavorite[item.product] = true
            })
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      }
    },
    toggleFavorite(productId, category, title, imageUrl) {
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能加入收藏')
      } else {
        this.axios
          .get(`${api_url2}/hearts?category=${category}&userId=${this.userId}&tag=旅遊景點`)
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
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.getHeartData()
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
