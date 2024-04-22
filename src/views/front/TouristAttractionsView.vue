<template>
  <BannerBlock />
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-8 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link">首頁</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link
            v-if="selectedCategory !== '全部'"
            exact
            active-class="active-link"
            :to="{ path: '/TouristAttractions', query: { category: '全部', page: '1' } }"
            @click.prevent="filterProducts('全部')"
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
        <div class="col-12 col-lg-3 mb-5 mb-md-6 mb-lg-0">
          <div class="border-1 border w-100 h-100 rounded-6">
            <p class="fs-5 fs-lg-4 p-3 p-lg-5 bg-primary-500 text-white rounded-top-end">
              地區篩選
            </p>
            <ul class="nav flex-row flex-lg-column">
              <li
                class="nav-item w-25 w-lg-100 tourist-broder-radius"
                v-for="(item, index) in filterCategory"
                :key="index"
                :class="{
                    'first-active-category': isFirstItem(index),
                    'last-active-category': isLastItem(index),
                    'active-category': selectedCategory === item
                  }"
              >
                <a
                  class="nav-link p-5 fs-5 link-color d-flex justify-content-center justify-content-lg-between"
                  href="#"
                  aria-current="page"
                  :class="{ 'active-color': selectedCategory === item }"
                  @click.prevent="filterProducts(item)"
                >
                  {{ item }}
                  <span class="d-none d-lg-block">{{ filterCateNum[item] }}</span>
                  <span class="d-none d-sm-block d-lg-none ms-1">({{ filterCateNum[item] }})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-lg-9">
          <template v-if="isLoading">
            <div class="row g-3">
              <div v-for="index in 3" :key="index" class="col-12 col-md-6 col-lg-4">
                <div class="card card-att h-100">
                  <span class="tag text-white placeholder-glow"></span>
                  <button class="heart border-0" aria-label="heart">
                    <i class="bi bi-heart"></i>
                  </button>
                  <img
                    src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
                    class="img-fluid opacity-25"
                    alt="Placeholder Image"
                  />
                  <div class="card-body">
                    <span class="placeholder w-60"></span>
                    <div class="col-12 placeholder-glow">
                      <span class="placeholder w-100"></span>
                      <span class="placeholder w-100"></span>
                      <span class="placeholder w-100"></span>
                      <span class="placeholder w-100"></span>
                    </div>
                  </div>
                  <div class="card-footer text-end border-0 pt-0 pb-3 placeholder-glow">
                    <div class="d-flex justify-content-end">
                      <span class="placeholder w-25"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
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
                      <router-link
                        :to="{
                          name: 'TouristSingleAttraction',
                          params: {
                            category: attractionItem.category,
                            title: attractionItem.title
                          }
                        }"
                      >
                        <img
                          :src="attractionItem.imageUrl"
                          class="img-fluid stretched-link"
                          alt="attractionItem.title"
                        />
                      </router-link>
                    </div>
                    <button
                      class="heart border-0"
                      @click="
                        toggleFavorite(
                          attractionItem.id,
                          attractionItem.category,
                          attractionItem.title,
                          attractionItem.imageUrl
                        )
                      "
                      type="button"
                      aria-label="heart"
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
                    <div>
                      <div class="card-body">
                        <router-link
                          :to="{
                            name: 'TouristSingleAttraction',
                            params: {
                              category: attractionItem.category,
                              title: attractionItem.title
                            }
                          }"
                        >
                          <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title">
                            {{ attractionItem.title }}
                          </h4>
                        </router-link>
                        <p class="card-text card-font-truncate card-body-att">
                          {{ truncateContent(attractionItem.description, 65) }}
                        </p>
                      </div>
                      <div class="card-footer text-end border-0">
                        <router-link
                          :to="{
                            name: 'TouristSingleAttraction',
                            params: {
                              category: attractionItem.category,
                              title: attractionItem.title
                            }
                          }"
                          class="fs-5 card-footer-title"
                          >more</router-link
                        >
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
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import BannerBlock from '@/components/BannerBlock.vue'
import sweetAlert from '@/js/sweetAlert'

export default {
  components: {
    BannerBlock
  },
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
      status: {
        loadingItem: false
      },
      category: '全部',
      heartData: [],
      isFavorite: {},
      userId: '',
      token: '',
      isLoading: false
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
    isFirstItem(index) {
      return index === 0
    },
    isLastItem(index) {
      return index === this.filterCategory.length - 1
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
                  tag: '旅遊景點',
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
    getAttractions(currentPage = 1) {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractionsCategory = res.data.filter((item) => item.is_enabled === 1)
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
            this.isLoading = false
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
            this.isLoading = false
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
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.getAttractions()
    this.getHeartData()
    window.scrollTo(0, 0)
    this.isLoading = true
    this.fullPath = this.$route.fullPath
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/all.scss';
.card-title:hover,
.card-footer-title:hover {
  color: #0ea0a6 !important;
}
.link-color:active {
  background-color: transparent;
}
.nav-item:nth-child(1) .link-color:hover {
  @include pc-lg {
    border-radius: 0 0 0 16px !important;
  }
}
.nav-item:nth-child(4) .link-color:hover {
  @include pc-lg {
    border-radius: 0 0 16px 0 !important;
  }
}
.active-color{
   color: #0ea0a6 !important;
}
.active-category {
  color: #0ea0a6 !important;
  background-color: #d5f3f4;
}
/* 新增 */
.active-category:first-child {
  @include pc-lg {
    border-radius: 0 0 0 16px !important;
  }
}

.active-category:last-child {
  @include pc-lg {
    border-radius: 0 0 16px 0 !important;
  }
}
.page-link-radius {
  border-radius: 0 8px 8px 0 !important;
}
.page-link-radius-2 {
  border-radius: 8px 0 0 8px !important;
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
