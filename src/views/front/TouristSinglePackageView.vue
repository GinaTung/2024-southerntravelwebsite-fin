<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/TouristPackage" exact active-class="active-link">
            南部旅遊方案
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link
            v-if="category === '台南'"
            to="/TouristPackage/searchTainan"
            exact
            active-class="active-link"
            >台南</router-link
          >
          <router-link
            v-else-if="category === '嘉義'"
            to="/TouristPackage/searchChiayi"
            exact
            active-class="active-link"
            >嘉義</router-link
          >
          <router-link
            v-else-if="category === '高雄'"
            to="/TouristPackage/searchKaohsiung"
            exact
            active-class="active-link"
            >高雄</router-link
          >
        </li>
        <li class="breadcrumb-item">
          {{ packageTitle }}
        </li>
      </ol>
    </nav>
    <!-- {{ enabledProducts }} -->

    <div
      class="row h-100 flex-wrap-reverse flex-md-nowrap"
      v-for="productsItem in enabledProducts"
      :key="productsItem.id"
    >
      <div class="col-12 col-md-7 col-lg-9 my-8 my-md-0">
        <div class="d-flex">
          <div class="w-5 d-none d-xl-flex">
            <i class="bi bi-geo-alt-fill position-relative fs-5">
              <div class="line"></div>
              <i class="bi bi-arrow-down-circle-fill arrow"></i>
            </i>
          </div>
          <div class="w-100 w-xl-95 position-relative pe-0 pe-lg-5">
            <h4 class="d-flex">
              <i class="bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"></i>第一天
            </h4>
            <ul class="nav nav-underline nav-fill mb-4 w-100 w-lg-60" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  早上
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  下午
                </button>
              </li>
            </ul>
            <div class="tab-content card-att" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="w-100 w-lg-60 mb-4">
                    <div class="card-att-img card-att-img-2">
                      <img
                        :src="productsItem.imagesUrl[0]"
                        class="img-fluid pb-4 pb-lg-0"
                        :alt="productsItem.title"
                      />
                    </div>
                  </div>
                  <div class="w-100 w-lg-40">
                    <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                      {{ productsItem.itinerary_data[0].itinerary_first_day_am_title }}
                    </h4>
                    <p class="text-dark mb-4">
                      {{ productsItem.itinerary_data[0].itinerary_first_day_am_content }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="w-100 w-lg-60 mb-4">
                    <div class="card-att-img card-att-img-2">
                      <img
                        :src="productsItem.imagesUrl[1]"
                        class="img-fluid pb-4 pb-lg-0"
                        :alt="productsItem.title"
                      />
                    </div>
                  </div>
                  <div class="w-100 w-lg-40">
                    <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                      {{ productsItem.itinerary_data[0].itinerary_first_day_pm_title }}
                    </h4>
                    <p class="text-dark">
                      {{ productsItem.itinerary_data[0].itinerary_first_day_pm_content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="productsItem.itinerary_data.length > 1">
          <div class="d-flex my-12">
            <div class="w-5 d-none d-xl-flex">
              <i class="bi bi-geo-alt-fill position-relative fs-5">
                <div class="line"></div>
                <i class="bi bi-arrow-down-circle-fill arrow"></i>
              </i>
            </div>
            <div class="w-100 w-xl-95 position-relative pe-0 pe-lg-5">
              <h4 class="d-flex">
                <i class="bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"></i>第二天
              </h4>
              <ul
                class="nav nav-underline nav-fill mb-4 w-100 w-lg-60"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home2"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    早上
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile2"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    下午
                  </button>
                </li>
              </ul>
              <div class="tab-content card-att" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home2"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[2]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.title"
                        />
                      </div>
                    </div>
                    <div class="w-100 w-lg-40">
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                        {{ productsItem.itinerary_data[1].itinerary_second_day_am_title }}
                      </h4>
                      <p class="text-dark mb-4">
                        {{ productsItem.itinerary_data[1].itinerary_second_day_am_content }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile2"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[3]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.title"
                        />
                      </div>
                    </div>
                    <div class="w-lg-40">
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                        {{ productsItem.itinerary_data[1].itinerary_second_day_pm_title }}
                      </h4>
                      <p class="text-dark">
                        {{ productsItem.itinerary_data[1].itinerary_second_day_pm_content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="productsItem.itinerary_data.length > 2">
          <div class="d-flex my-12">
            <div class="w-5 d-none d-xl-flex">
              <i class="bi bi-geo-alt-fill position-relative fs-5">
                <div class="line"></div>
                <i class="bi bi-arrow-down-circle-fill arrow"></i>
              </i>
            </div>
            <div class="w-100 w-xl-95 position-relative pe-0 pe-lg-5">
              <h4 class="d-flex">
                <i class="bi bi-geo-fill d-flex d-xl-none me-2 align-items-end"></i>第三天
              </h4>
              <ul
                class="nav nav-underline nav-fill mb-4 w-100 w-lg-60"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home2"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    早上
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile2"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    下午
                  </button>
                </li>
              </ul>
              <div class="tab-content card-att" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home2"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[4]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.title"
                        />
                      </div>
                    </div>
                    <div class="w-100 w-lg-40">
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                        {{ productsItem.itinerary_data[2].itinerary_third_day_am_title }}
                      </h4>
                      <p class="text-dark mb-4">
                        {{ productsItem.itinerary_data[2].itinerary_third_day_am_content }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile2"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[5]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.title"
                        />
                      </div>
                    </div>
                    <div class="w-lg-40">
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                        {{ productsItem.itinerary_data[2].itinerary_third_day_pm_title }}
                      </h4>
                      <p class="text-dark">
                        {{ productsItem.itinerary_data[2].itinerary_third_day_pm_content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-5 col-lg-3">
        <div class="d-flex mb-4">
          <span
            class="badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"
            >{{ category }}</span
          >
        </div>
        <h2 class="fs-3 fs-sm-4 fs-xl-3 mb-6 text-primary-700 fw-bold">{{ packageTitle }}</h2>
        <span
          class="fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"
        >
          <i class="bi bi-person-walking me-2"></i>景點行程
        </span>
        <div class="mt-2 mb-6">
          <div v-for="(item, index) in newProductsContent" :key="index + 123">
            <p v-for="description in item.content" :key="description">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="d-flex mb-4 flex-column mb-6">
          <h5 class="mb-2">
            <span
              class="fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"
            >
              <i class="bi bi-calendar-plus me-2"></i>預約期間
            </span>
          </h5>
          <h6 class="mt-2" v-if="currentDate <= productsItem.endDate">
            {{ productsItem.startDate }} 至 {{ productsItem.endDate }}
          </h6>
          <h5 class="mt-2 text-danger" v-else>預約時間已截止</h5>
        </div>
        <div class="d-flex mb-4 flex-column">
          <h5 class="mb-2">
            <span
              class="fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"
            >
              <i class="bi bi-car-front-fill me-2"></i>出發時間
            </span>
          </h5>
          <h6 class="mt-2">
            {{ productsItem.goStartDate }} 至 {{ productsItem.goEndDate }}
          </h6>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-end">
          <p class="fs-4 fs-lg-5 text-decoration-line-through text-end">
            NT{{ thousand(productsItem.origin_price) }}
          </p>
          <div class="d-flex flex-sm-column align-items-end justify-content-end">
            <p class="fs-6 text-danger fw-bold d-none d-sm-block">促銷價</p>
            <p class="fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger">
              NT{{ thousand(productsItem.price) }}
            </p>
          </div>
        </div>
        <div class="d-flex mb-2">
          <button
            class="btn btn-outline-dark rounded-0"
            type="button"
            :disabled="quantity === 1"
            @click="decrementQuantity"
          >
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            min="1"
            max="10"
            type="number"
            :disabled="quantity > 10"
            class="form-control text-center rounded-0 border border-dark"
            v-model="quantity"
            readonly
          />
          <button class="btn btn-outline-dark rounded-0" type="button" @click="incrementQuantity">
            <i class="bi bi-plus-lg"></i>
          </button>
          <button type="button" class="btn btn-outline-dark rounded-0 ms-2">
            <i class="bi bi-heart"></i>
          </button>
        </div>

        <h6 class="mb-2">
          注意：
          <span class="text-danger"> 至少3位成團，最多10位出遊 </span>
        </h6>
        <h6 class="mb-5" v-if="currentDate <= productsItem.endDate">
          目前已有
          <span class="text-danger">0</span>
          位預約，剩
          <span class="text-danger">10</span>
          位可預約
        </h6>
        <button
          class="btn-square w-100 fs-5 mb-4 border-0"
          type="button"
          :class="{ 'disabled-btn': currentDate > endDate }"
          @click="addToCart(productsItem.id, quantity, productsItem.price)"
        >
          預約套裝行程
        </button>
        <router-link
          class="btn-square fs-5 w-100"
          type="button"
          :class="{ 'disabled-btn': currentDate > endDate }"
          :to="{ name: 'checkProduct' }"
          @click="saveCardId"
          >直接結帳</router-link
        >
        <!-- <h6 class="mt-2">集合地點為{{productsItem.category}}火車站</h6>
          <h6 class="mt-2">集合時間為早上9點</h6> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.line {
  height: 95%;
  // padding: 50px 15px;
  // margin-bottom: 20px;
  display: block;
  position: absolute;
  top: 30px;
  left: 7px;
}

.line:last-of-type {
  border-left: 6px dotted #34405c;
}

.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--bs-nav-underline-border-width) solid #34405c;
}
.arrow {
  position: absolute;
  left: 0px;
  bottom: -40px;
}
p {
  text-align: justify; /* 將文字左右對齊 */
}
.disabled-btn {
  pointer-events: none;
  opacity: 0.5;
}
</style>

<script>
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  data() {
    return {
      category: '',
      packageTitle: '',
      products: [],
      newProductsContent: '',
      enabledProducts: [],
      carts: [],
      quantity: 1,
      newQty: 0,
      newCarts: [],
      cartId: null,
      bsOffcanvas: null,
      userId: '',
      token: '',
      currentDate: '',
      endDate:'',
      isDisabled: false
    }
  },
  created() {
    this.category = this.$route.params.category
    this.packageTitle = this.$route.params.title
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
      this.currentDate = formattedDate;
      // console.log(this.currentDate)

    },
    getProducts() {
      // console.log(this.packageTitle)
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
            if (item.is_enabled === 1 && item.title === this.packageTitle) {
              // console.log(item)
              this.enabledProducts.push(item)
            }
          })
          // console.log(this.enabledProducts)
          this.endDate = this.enabledProducts[0].endDate
          this.getNewText()
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
    },
    getNewText() {
      // console.log(this.products)
      const idDescriptionsMap = {}
      this.enabledProducts.forEach((item) => {
        // 檢查 item.description 是否存在
        // console.log(item.content)
        if (item.content) {
          const splitText = item.content.split(';')

          splitText.forEach((text) => {
            const trimmedText = text.trim()

            if (trimmedText !== '') {
              // 檢查是否為空字符串
              if (!idDescriptionsMap[item.id]) {
                idDescriptionsMap[item.id] = []
              }
              idDescriptionsMap[item.id].push(trimmedText)
            }
          })
        }
      })

      // 刪除陣列為空的項目
      for (const id in idDescriptionsMap) {
        if (idDescriptionsMap[id].length === 0) {
          delete idDescriptionsMap[id]
        }
      }

      // console.log(idDescriptionsMap)
      // 將 id 與描述合併成物件
      this.newProductsContent = Object.entries(idDescriptionsMap).map(([id, content]) => ({
        id,
        content
      }))
      // console.log(this.newProductsContent)
    },
    addToCart(productId, qty = 1, price) {
      if (!this.token) {
        alert('請登入會員後，才能預約套裝行程')
      } else {
        let productExists = false

        // 檢查是否有重複產品，如果有則標記為存在
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
              userId: this.userId
            })
            .then((res) => {
              alert('已更新預約人數')
              this.getCart()
            })
            .catch((err) => {
              // console.error('更新預約人數失敗:', err)
              alert('更新預約人數失敗')
            })
        } else {
          // 如果產品不在購物車中，則執行 post 操作
          this.axios
            .post(`${api_url2}/carts`, {
              productId,
              qty,
              price,
              total: qty * price,
              userId: this.userId
            })
            .then((res) => {
              // console.log(res)
              alert(`已預約${this.packageTitle}成功`)
              this.getCart()
            })
            .catch((err) => {
              // console.log(err);
              alert('預約失敗，再重新登入預約')
            })
        }
      }
    },
    incrementQuantity() {
      if (this.quantity < 10) {
        this.quantity += 1
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1
      }
    },
    checkMaxValue() {
      // 檢查輸入值是否超過最大值
      if (this.quantity > 10) {
        this.quantity = 10
      }
    },
    handlePlus(item) {
      this.quantity = item++
    },
    saveCardId() {
      document.cookie = `cartId=${this.newCarts.id}; path=/;`
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          // console.log(res);
          this.carts = res.data
          // console.log(this.carts);
          this.carts.forEach((item) => {
            if (item.userId === this.userId) {
              this.newCarts.push(item)
            }
          })
          // console.log(this.newCarts)
        })
        .catch((err) => {
          // console.log(err)
          alert('取得購物車資料失敗')
        })
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
    this.getCart()
    // console.log(document.cookie)
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.checkDate()
    // console.log(this.userId,this.token)
  }
}
</script>
