<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link">首頁</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link
            v-if="fullPath !== '/TouristAttractions'"
            :to="{ path: '/TouristAttractions' }"
            exact
            active-class="active-link"
          >
            南部旅遊景點
          </router-link>
          <span v-else> 南部旅遊景點 </span>
        </li>
        <li class="breadcrumb-item" aria-current="page" v-if="selectedCategory !== '全部'">
          <span> {{ selectedCategory }} </span>
        </li>
      </ol>
    </nav>
    <div class="tourist-list">
      <div class="row">
        <div class="col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex">
          <div class="border-1 border w-100 rounded-1 h-100">
            <p class="fs-4 p-5 bg-primary-500 text-white">地區篩選</p>
            <ul class="nav flex-column">
              <li class="nav-item" v-for="(item, index) in filterCategory" :key="index">
                <a
                  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  href="#"
                  aria-current="page"
                  :class="{ 'active-category': selectedCategory === item }"
                  @click.prevent="filterProducts(item)"
                >
                  {{ item }}
                  <span>{{ filterCateNum[item] }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <div v-if="status.loadingItem" class="text-center" style="margin: 150px">
            <div
              class="spinner-border"
              role="status"
              style="width: 3rem; height: 3rem; color: #43b8bd"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-else>
            <div class="row g-3">
              <div
                class="col-12 col-md-6 col-lg-4"
                v-for="(attractionItem, index) in filteredProducts"
                :key="index + 123"
              >
                <div class="card card-att h-100">
                  <span class="tag text-white">{{ attractionItem.category }}</span>
                  <div class="card-att-img">
                    <img :src="attractionItem.imageUrl" class="img-fluid" alt="" />
                  </div>
                  <button
                    class="heart"
                    @click="
                      toggleFavorite(
                        attractionItem.id,
                        attractionItem.category,
                        attractionItem.title
                      )
                    "
                  >
                    <i
                      :class="[
                        'bi',
                        {
                          'bi-heart-fill': isFavorite[attractionItem.id],
                          'bi-heart': !isFavorite[attractionItem.id]
                        }
                      ]"
                      style="font-size: 24px"
                    ></i>
                  </button>
                  <div style="transform: rotate(0)">
                    <div class="card-body card-body-att">
                      <div
                        class="card-title d-flex justify-content-between align-items-center card-title-att"
                      >
                        <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att">
                          {{ attractionItem.title }}
                        </h4>
                      </div>
                      <p class="card-text card-font-truncate">
                        {{ truncateContent(attractionItem.description, 65) }}
                      </p>
                    </div>
                    <div class="card-footer text-end border-0">
                      <router-link
                        :to="{
                          name: 'TouristSingleAttraction',
                          params: { category: attractionItem.category, title: attractionItem.title }
                        }"
                        class="fs-5 stretched-link"
                        >more</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example" class="my-10">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: !currentPage || currentPage === 1 }">
                  <button
                    class="page-link page-link-radius-2"
                    @click.prevent="currentPage > 1 && getAttractions(currentPage - 1)"
                  >
                    上一頁
                  </button>
                </li>
                <li class="page-item" v-for="i in pageTotal" :key="`page-${i}`">
                  <button
                    class="page-link page-link-0 rounded-0"
                    :class="{ active: i === currentPage }"
                    @click.prevent="getAttractions(i)"
                  >
                    {{ i }}
                  </button>
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: !currentPage || currentPage === pageTotal }"
                >
                  <button
                    class="page-link page-link-radius"
                    @click.prevent="currentPage < pageTotal && getAttractions(currentPage + 1)"
                  >
                    下一頁
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  data() {
    return {
      allAttractions: [],
      enabledAttractions: [],
      searchChiayi: [],
      serchTainan: [],
      searchKaohsiung: [],
      fullPath: '',
      currentURL: '',
      selectedCategory: '全部',
      currentPage: 1,
      limitPage: 6,
      pageTotal: 0,
      attractionsCategory: [],
      isLoading: false,
      status: {
        loadingItem: false
      },
      category: '全部',
      heartData: [],
      isFavorite: {},
      userId: '',
      token: ''
    }
  },
  computed: {
    filterCategory() {
      const array = this.attractionsCategory.map((item) => item.category)
      const uniqueCategories = [...new Set(array)]
      uniqueCategories.unshift('全部')
      return uniqueCategories
    },
    filterCateNum() {
      const cateNum = {}
      this.attractionsCategory.forEach((item) => {
        if (!cateNum[item.category]) {
          cateNum[item.category] = 1
        } else {
          cateNum[item.category] += 1
        }
      })
      cateNum['全部'] = this.attractionsCategory.length
      return cateNum
    },
    filteredProducts() {
      if (this.selectedCategory === '全部' || !this.selectedCategory) return this.enabledAttractions
      return this.enabledAttractions.filter((product) => product.category === this.selectedCategory)
    }
  },
  watch: {
    $route(to, from) {
      this.currentURL = to.fullPath
      if (this.$root.navigatedFromHeader && to.fullPath !== '/TouristAttractions') {
        this.selectedCategory = '全部'
        this.status.loadingItem = true
        this.getAttractions()
        this.$root.navigatedFromHeader = false
      }
    }
  },
  created() {
    this.category = this.$route.query.category
    this.selectedCategory = this.category
    this.getAttractions()
  },
  methods: {
    getHeartData() {
      this.axios
        .get(`${api_url2}/hearts`)
        .then((res) => {
          console.log(res);
          res.data.forEach((item) => {
            if (item.userId === this.userId) {
              console.log(item);
              // 設置收藏狀態
              this.isFavorite[item.productId] = true
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
              (item) => item.productId === productId && item.userId === this.userId
            )
            if (existingData) {
              console.log(existingData);
              // 如果已存在收藏資料，則執行刪除操作
              this.axios
                .delete(`${api_url2}/hearts/${existingData.id}`)
                .then((res) => {
                  // 更新收藏狀態
                  console.log(res);
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
                  productId,
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
    getAttractions(currentPage = 1) {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractionsCategory = res.data.filter((item) => item.is_enabled === 1)
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
      if (this.selectedCategory === '全部' || !this.selectedCategory) {
        this.axios
          .get(`${api_url2}/attractions?_limit=${this.limitPage}&_page=${currentPage}`)
          .then((res) => {
            var totalCount = parseInt(res.headers['x-total-count'])
            this.pageTotal = Math.ceil(totalCount / this.limitPage)
            this.currentPage = currentPage
            this.allAttractions = res.data
            this.enabledAttractions = this.allAttractions.filter((item) => item.is_enabled === 1)
            this.status.loadingItem = false
            this.$router.push({
              path: '/TouristAttractions',
              query: { category: this.selectedCategory, page: this.currentPage }
            })
            window.scrollTo(0, 0)
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得全部景點資料失敗`)
          })
      } else {
        this.axios
          .get(
            `${api_url2}/attractions?category=${this.selectedCategory}&_limit=${this.limitPage}&_page=${currentPage}`
          )
          .then((res) => {
            var totalCount = parseInt(res.headers['x-total-count'])
            this.pageTotal = Math.ceil(totalCount / this.limitPage)
            this.currentPage = currentPage
            this.allAttractions = res.data
            this.enabledAttractions = this.allAttractions.filter((item) => item.is_enabled === 1)
            this.status.loadingItem = false
            this.$router.push({
              path: '/TouristAttractions',
              query: { category: this.selectedCategory, page: this.currentPage }
            })
            window.scrollTo(0, 0)
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得區域景點資料失敗`)
          })
      }
    },
    filterProducts(category) {
      this.selectedCategory = category
      this.status.loadingItem = true
      this.getAttractions()
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
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
    this.isLoading = true
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.getAttractions()
    this.getHeartData()
    window.scrollTo(0, 0)
    this.fullPath = this.$route.fullPath
  }
}
</script>

<style lang="scss">
.active-category {
  color: #0a58ca !important;
  background-color: #d5f3f4;
}
.card-att .card-att-img img {
  border-radius: calc(1.25rem - 1px) calc(1.25rem - 1px) 0 0;
}
.page-link-radius {
  border-radius: 0 4px 4px 0 !important;
}

.page-link-radius-2 {
  border-radius: 4px 0 0 4px !important;
}
.page-link:focus {
  box-shadow: 0px;
}
.page-link.active {
  background: #43b8bd;
  border-color: #0ea0a6;
  color: #fff !important;
}
</style>
