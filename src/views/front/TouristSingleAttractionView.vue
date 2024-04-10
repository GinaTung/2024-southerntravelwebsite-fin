<template>
    <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
    <BannerBlock />
  <div class="container py-10 py-lg-30 px-lg-20">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link
            exact
            active-class="active-link"
            :to="{ path: '/TouristAttractions', query: { category: '全部', page: '1' } }"
          >
            南部旅遊景點
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <a v-show="category === '台南'" @click="redirectToA('台南')" class="navbar-brand">台南</a>
          <a v-show="category === '嘉義'" @click="redirectToA('嘉義')" class="navbar-brand">嘉義</a>
          <a v-show="category === '高雄'" @click="redirectToA('高雄')" class="navbar-brand">高雄</a>
        </li>
        <li class="breadcrumb-item">
          {{ attractionTitle }}
        </li>
      </ol>
    </nav>

    <div
      class="intr-title d-flex align-items-center mb-4 fs-3 border-start border-primary-500 border-3"
    >
      <span class="fs-3 me-2 fw-bold ps-3">{{ category }}</span>
      <p class="fs-3 me-4 fw-bold">{{ attractionTitle }}</p>
      <button
        class="border-0 heart4 fs-3"
        @click="toggleFavorite(attractionId, category, attractionTitle)"
        type="button"
      >
        <i
          :class="[
            'bi',
            {
              'bi-heart-fill': isFavorite[attractionId],
              'bi-heart': !isFavorite[attractionId]
            }
          ]"
        ></i>
      </button>
    </div>
    <singleAttraction />
    <div class="row g-3" v-for="(item, index) in enabledAttractions" :key="item.id">
      <div v-if="index === 0">
        <div class="tourist-intr-content my-lg-10 my-5">
          <div class="mb-8">
            <p class="fs-5 fs-md-4 fw-bold mb-4">景點介紹</p>
            <p class="fs-6 fs-md-5">
              {{ item.description }}
            </p>
          </div>
          <div class="mb-8">
            <span class="fs-5 fs-md-4 mb-4 fw-bold">開放時間：</span>
            <div v-for="itemOpen in newAttractionsTimeOpen" :key="itemOpen.id">
              <div v-if="itemOpen.id === item.id">
                <p v-for="time in itemOpen.content" :key="time + 123" class="fs-6 fs-md-5 my-4">
                  {{ time }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p class="fs-5 fs-md-4 mb-3 fw-bold">交通資訊：</p>
            <div class="row">
              <div class="d-flex col-12 col-lg-7 justify-content-between flex-column">
                <div v-for="item3 in newProductsContent" :key="item3.id">
                  <div v-if="item3.id === item.id">
                    <p
                      v-for="description in item3.content"
                      :key="description"
                      class="fs-6 fs-md-5 my-4 mb-4"
                    >
                      {{ description }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-5">
                <iframe
                  :src="item.imgMap"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LikeBlock adCategoryTitle="attractions" :token="token" :user-id="userId"/>
    <!-- <LikeBlock adCategoryTitle="taste" /> -->
  </div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import singleAttraction from '@/components/swiper/singleAttraction.vue'
import BannerBlock from '@/components/BannerBlock.vue'
import LikeBlock from '@/components/swiper/LikeBlock.vue'
import sweetAlert from '@/js/sweetAlert'

export default {
  components: {
    singleAttraction,
    BannerBlock,
    LikeBlock
  },
  data() {
    return {
      category: '',
      attractionTitle: '',
      attractions: [],
      enabledAttractions: [],
      newAttractionsContent: '',
      newAttractionsTimeOpen: '',
      attractionId: '',
      heartData: [],
      isFavorite: {},
      userId: '',
      token: '',
      isLoading:false
    }
  },
  methods: {
    redirectToA(category) {
      this.$router.push({ path: '/TouristAttractions', query: { category: category } })
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
    toggleFavorite(productId, category, title) {
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
                item.product === productId && item.userId === this.userId && item.tag === '旅遊景點'
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
                  tag: '旅遊景點'
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
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1 && this.attractionTitle === item.title) {
              this.enabledAttractions.push(item)
              this.attractionId = item.id
              this.isLoading = false
            }
          })
          this.getNewText()
          this.getnewAttractionsTimeOpen()
        })
        .catch(() => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
    },
    getNewText() {
      const idDescriptionsMap = {}
      this.attractions.forEach((item) => {
        // 檢查 item.content 是否存在
        if (item.content) {
          const splitText = item.content.split(';')
          splitText.forEach((text) => {
            const trimmedText = text.trim()
            if (!idDescriptionsMap[item.id]) {
              idDescriptionsMap[item.id] = []
            }
            idDescriptionsMap[item.id].push(trimmedText)
          })
        }
      })
      // 將 id 與描述合併成物件
      this.newProductsContent = Object.entries(idDescriptionsMap).map(([id, content]) => ({
        id,
        content
      }))
    },
    getnewAttractionsTimeOpen() {
      const idDescriptionsMap = {}
      this.attractions.forEach((item) => {
        // 檢查 item.content 是否存在
        if (item.content) {
          const splitText = item.timeOpen.split(';')

          splitText.forEach((text) => {
            const trimmedText = text.trim()

            if (!idDescriptionsMap[item.id]) {
              idDescriptionsMap[item.id] = []
            }
            idDescriptionsMap[item.id].push(trimmedText)
          })
        }
      })
      // 將 id 與描述合併成物件
      this.newAttractionsTimeOpen = Object.entries(idDescriptionsMap).map(([id, content]) => ({
        id,
        content
      }))
      // console.log(this.newAttractionsTimeOpen)
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
    this.category = this.$route.params.category
    this.attractionTitle = this.$route.params.title
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.isLoading = true
    this.getAttractions()
    this.getHeartData()
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
p {
  text-align: justify; /* 將文字左右對齊 */
}
.img-size-height {
  height: 560px;
}
@media (max-width: 768px) {
  .img-size-height {
    height: 240px;
  }
}
.navbar-brand:hover {
  color: #43b8bd;
}
a.navbar-brand {
  cursor: pointer;
}
</style>
