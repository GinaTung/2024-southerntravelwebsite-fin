<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link
            v-if="selectedCategory !== '全部'"
            exact
            active-class="active-link"
            :to="{ path: '/TouristPackage', query: { category: '全部', page: '1' } }"
            @click.prevent="filterProducts('全部')"
          >
            南部旅遊方案
          </router-link>
          <span v-else> 南部旅遊方案 </span>
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
            <div
              class="card mb-4 card-att"
              v-for="(productsItem, index) in filteredProducts"
              :key="index + 123"
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <span class="tag text-white">{{ productsItem.category }}</span>
                  <div class="card-att-img h-100">
                    <img
                      :src="productsItem.imageUrl"
                      class="card-img-top img-fluid"
                      :alt="productsItem.title"
                      style="border-radius: calc(1.25rem - 1px)"
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card h-100 border-0 bg-transparent">
                    <div class="card-body px-3 px-md-4">
                      <!-- 愛心點選 -->
                      <button
                        class="heart border-0"
                        @click="toggleFavorite(productsItem.id, productsItem.category, productsItem.title)"
                        type="button"
                      >
                        <i
                          :class="[
                            'bi',
                            {
                              'bi-heart-fill': isFavorite[productsItem.id],
                              'bi-heart': !isFavorite[productsItem.id]
                            }
                          ]"
                          style="font-size: 24px"
                        ></i>
                      </button>
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-10">
                        {{ productsItem.title }}
                      </h4>
                      <div class="d-flex mb-4">
                        <span
                          class="badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"
                          >{{ productsItem.tag_2 }}</span
                        >
                      </div>

                      <div class="row">
                        <div class="col-12 col-md-8 my-2">
                          <div v-for="item in newProductsDes" :key="item.id">
                            <div v-if="item.id === productsItem.id">
                              <p v-for="description in item.descriptions" :key="description">
                                {{ truncateContent(description, 85) }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="d-flex flex-column">
                            <p class="fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end">
                              NT{{ thousand(productsItem.origin_price) }}
                            </p>
                            <div
                              class="d-flex flex-md-column align-items-end justify-content-end justify-content-sm-between justify-content-md-end"
                            >
                              <p class="text-danger fw-bold d-none d-md-block">促銷價</p>

                              <div class="d-sm-flex flex-sm-column d-none d-md-none">
                                <p
                                  class="fs-7 fs-sm-6 text-dark2"
                                  v-if="currentDate <= productsItem.endDate"
                                >
                                  預約：{{ productsItem.startDate }} ~ {{ productsItem.endDate }}
                                </p>
                                <p class="fs-7 fs-sm-6 text-danger" v-else>預約時間已截止</p>
                                <p
                                  class="fs-7 fs-sm-6 text-dark2"
                                  v-if="currentDate <= productsItem.endDate"
                                >
                                  出遊：{{ productsItem.goStartDate }} ~
                                  {{ productsItem.goEndDate }}
                                </p>
                                <p class="fs-6 text-danger" v-else>已出遊完成</p>
                              </div>
                              <p class="fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger">
                                NT{{ thousand(productsItem.price) }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 d-none d-md-flex flex-md-column">
                        <p class="fs-6 text-dark2" v-if="currentDate <= productsItem.endDate">
                          預約時間：{{ productsItem.startDate }} ~ {{ productsItem.endDate }}
                        </p>
                        <p class="fs-6 text-danger" v-else>預約時間已截止</p>
                        <p class="fs-6 text-dark2" v-if="currentDate <= productsItem.endDate">
                          出遊時間：{{ productsItem.goStartDate }} ~ {{ productsItem.goEndDate }}
                        </p>
                        <p class="fs-6 text-danger" v-else>已出遊完成</p>
                      </div>
                    </div>
                    <div class="card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4">
                      <div class="d-flex align-items-end">
                        <router-link
                          :to="{
                            name: 'TouristSinglePackage',
                            params: { category: productsItem.category, title: productsItem.title }
                          }"
                          class="btn-outline-square w-100 me-2 px-2 px-md-3"
                          >行程介紹</router-link
                        >

                        <button
                          class="btn-square w-100 ms-2 px-2 px-md-3"
                          v-if="currentDate <= productsItem.endDate"
                          @click="addToCart(productsItem.id, quantity, productsItem.price)"
                          type="button"
                        >
                          <span
                            class="spinner-border spinner-grow-sm"
                            role="status"
                            v-if="status.loadingItem2 === productsItem.id"
                          ></span>
                          立即預約方案
                        </button>

                        <button
                          class="btn btn-danger w-100 ms-2 px-2 px-md-3 py-2 disabled btn-danger-rounded"
                          v-else
                          type="button"
                        >
                          預約時間截止
                        </button>
                      </div>
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
                    @click.prevent="currentPage > 1 && getProducts(currentPage - 1)"
                  >
                    上一頁
                  </button>
                </li>
                <li class="page-item" v-for="i in pageTotal" :key="`page-${i}`">
                  <button
                    class="page-link page-link-0 rounded-0"
                    :class="{ active: i === currentPage }"
                    @click.prevent="getProducts(i)"
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
                    @click.prevent="currentPage < pageTotal && getProducts(currentPage + 1)"
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
import sweetAlert from '@/js/sweetAlert.js'

export default {
  data() {
    return {
      products: [],
      user: '',
      userId: '',
      token: '',
      carts: [],
      newCarts: [],
      newProductsDes: '',
      enabledProducts: [],
      fullPath: '',
      currentURL: '',
      productsCategory: [],
      selectedCategory: '全部',
      currentDate: '',
      currentPage: 1,
      limitPage: 5,
      pageTotal: 0,
      isLoading: false,
      status: {
        loadingItem: '',
        loadingItem2: ''
      },
      category: '全部',
      cartsLength: 0,
      heartData: [],
      isFavorite: {},
    }
  },
  watch: {
    $route(to, from) {
      this.currentURL = to.fullPath
      if (this.$root.navigatedFromHeader && to.fullPath !== '/TouristPackage') {
        this.selectedCategory = '全部'
        this.status.loadingItem = true
        this.getProducts()
        this.$root.navigatedFromHeader = false
      }
    }
  },
  computed: {
    filterCategory() {
      // 提取出category
      const array = this.productsCategory.map((item) => item.category)
      // 過濾出重複的元素
      const uniqueCategories = [...new Set(array)]
      uniqueCategories.unshift('全部')
      return uniqueCategories
    },
    filterCateNum() {
      // 取出每個category的數量
      const cateNum = {}
      this.productsCategory.forEach((item) => {
        // 假如沒有這個類別的話，就創造一個並賦予值為1個
        if (!cateNum[item.category]) {
          cateNum[item.category] = 1
          // 假如已經有這個類別的話就+1
        } else {
          cateNum[item.category] += 1
        }
      })
      cateNum['全部'] = this.productsCategory.length
      return cateNum
    },
    filteredProducts() {
      if (this.selectedCategory === '全部' || !this.selectedCategory) return this.enabledProducts
      return this.enabledProducts.filter((product) => product.category === this.selectedCategory)
    }
  },
  created() {
    this.category = this.$route.query.category
    this.selectedCategory = this.category
    this.getProducts()
  },
  methods: {
    getProducts(currentPage = 1) {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          this.productsCategory = res.data.filter((item) => item.is_enabled === 1)
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
      // !this.selectedCategory 这个判断语句用于检查是否有从 B 页面传递过来的区域值。
      if (this.selectedCategory === '全部' || !this.selectedCategory) {
        this.axios
          .get(`${api_url2}/products?_limit=${this.limitPage}&_page=${currentPage}`)
          .then((res) => {
            var totalCount = parseInt(res.headers['x-total-count'])
            this.pageTotal = Math.ceil(totalCount / this.limitPage)
            this.currentPage = currentPage
            this.products = res.data
            this.getNewText()
            this.enabledProducts = this.products.filter((item) => item.is_enabled === 1)
            this.status.loadingItem = false
            this.$router.push({
              path: '/TouristPackage',
              query: { category: this.selectedCategory, page: this.currentPage }
            })
            window.scrollTo(0, 0)
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得全部產品資料失敗`)
          })
      } else {
        // 否则，根据selectedCategory进行过滤
        this.axios
          .get(
            `${api_url2}/products?category=${this.selectedCategory}&_limit=${this.limitPage}&_page=${currentPage}`
          )
          .then((res) => {
            var totalCount = parseInt(res.headers['x-total-count'])
            this.pageTotal = Math.ceil(totalCount / this.limitPage)
            this.currentPage = currentPage
            this.products = res.data
            this.getNewText()
            this.enabledProducts = this.products.filter((item) => item.is_enabled === 1)
            this.status.loadingItem = false
            this.$router.push({
              path: '/TouristPackage',
              query: { category: this.selectedCategory, page: this.currentPage }
            })
            window.scrollTo(0, 0)
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得區域產品資料失敗`)
          })
      }
    },
    filterProducts(category) {
      // 點擊篩選列時觸發，更新選擇的類別
      this.selectedCategory = category
      this.status.loadingItem = true
      this.getProducts()
    },
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
                  tag: '旅遊方案'
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
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
    },
    getNewText() {
      const idDescriptionsMap = {}
      this.products.forEach((item) => {
        // 檢查 item.description 是否存在
        if (item.description) {
          const splitText = item.description.split(';')

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
      this.newProductsDes = Object.entries(idDescriptionsMap).map(([id, descriptions]) => ({
        id,
        descriptions
      }))
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.carts = res.data
          this.carts.forEach((item) => {
            if (item.userId === this.userId) {
              this.newCarts.push(item)
            }
          })
          // 移除重複的產品
          const uniqueUserCarts = []
          const productIdSet = new Set()
          this.newCarts.forEach((item) => {
            if (!productIdSet.has(item.productId)) {
              productIdSet.add(item.productId)
              uniqueUserCarts.push(item)
            }
          })
          this.newCarts = uniqueUserCarts
          this.cartsLength = this.newCarts.length
          this.$emitter.emit('updateCart', this.cartsLength) // 發送特定事件
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
        })
    },
    addToCart(productId, qty = 1, price) {
      this.status.loadingItem2 = productId
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能預約套裝行程')
        this.status.loadingItem2 = ''
      } else {
        let productExists = false
        let percent = 1
        //檢查是否有重複產品，如果有則標記為存在
        this.newCarts.forEach((item) => {
          if (item.productId === productId && item.id) {
            productExists = true
            this.cartId = item.id
          }
        })
        // 如果產品已經存在於購物車中，則執行 put 操作
        if (productExists) {
          this.axios
            .put(`${api_url2}/carts/${this.cartId}`, {
              productId,
              qty,
              price,
              total: qty * price,
              userId: this.userId,
              final_total: qty * price * percent
            })
            .then((res) => {
              this.status.loadingItem2 = ''
              sweetAlert.threeLayerCheckType('success', '已更新預約人數')
              this.getCart()
            })
            .catch((err) => {
              this.status.loadingItem2 = ''
              sweetAlert.threeLayerCheckType('error', `更新預約人數失敗`)
            })
        } else {
          // 如果產品不在購物車中，則執行 post 操作
          this.axios
            .post(`${api_url2}/carts`, {
              productId,
              qty,
              price,
              total: qty * price,
              userId: this.userId,
              final_total: qty * price * percent
            })
            .then((res) => {
              this.status.loadingItem2 = ''
              sweetAlert.threeLayerCheckType('success', '已預約成功')
              this.getCart()
            })
            .catch((err) => {
              this.status.loadingItem2 = ''
              sweetAlert.threeLayerCheckType('error', `預約失敗，再重新登入預約`)
            })
        }
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
    this.isLoading = true
    this.getProducts()
    window.scrollTo(0, 0)
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.getCart()
    this.checkDate()
    this.getHeartData()
    this.fullPath = this.$route.fullPath
  }
}
</script>
<style lang="scss">
p {
  text-align: justify; /* 將文字左右對齊 */
}
.active-category {
  color: #0a58ca !important;
  background-color: #d5f3f4;
}
.page-item {
  .page-link-0 {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
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
.btn-danger-rounded {
  border-radius: 8px;
}
</style>
