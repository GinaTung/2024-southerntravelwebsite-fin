<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/TouristPackage" class="navbar-brand py-6"> 南部旅遊方案 </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link
            v-if="category === '台南'"
            to="/TouristPackage/searchTainan"
            class="navbar-brand py-6"
            >台南</router-link
          >
          <router-link
            v-else-if="category === '嘉義'"
            to="/TouristPackage/searchChiayi"
            class="navbar-brand py-6"
            >嘉義</router-link
          >
          <router-link
            v-else-if="category === '高雄'"
            to="/TouristPackage/searchKaohsiung"
            class="navbar-brand py-6"
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
          <i class="bi bi-person-walking"></i>景點行程
        </span>
        <div class="mt-4 mb-6">
          <div v-for="item in newProductsContent" :key="item.id">
            <div v-if="item.id === productsItem.id">
              <p v-for="description in item.content" :key="description">
                {{ description }}
              </p>
            </div>
          </div>
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
        <div class="d-flex mb-4">
          <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="至少3人成行">
            <button
              type="button"
              class="btn btn-outline-dark rounded-0"
              :disabled="quantity === 3"
              data-toggle="tooltip"
              data-placement="top"
              title="至少3人成行"
              @click="decrementQuantity"
            >
              <i class="bi bi-dash-lg"></i>
            </button>
          </span>
          <input
            min="3"
            max="10"
            type="number"
            value="3"
            v-model="quantity"
            class="form-control text-center rounded-0 border border-dark"
            @input="checkMaxValue"
          />
          <button
            type="button"
            class="btn btn-outline-dark rounded-0"
            @click="incrementQuantity"
            data-toggle="tooltip"
            data-placement="top"
            title="最多10人成行"
          >
            <i class="bi bi-plus-lg"></i>
          </button>
          <button type="button" class="btn btn-outline-dark rounded-0 ms-2">
            <i class="bi bi-heart"></i>
          </button>
        </div>
        <a
          class="btn-square w-100 fs-5 mb-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          @click="addToCart(productsItem.id, quantity, productsItem.price)"
          >預約套裝行程</a
        >
        <!-- {{ newCarts.id }}{{ newCarts.qty }} -->
        <!-- <router-link class="btn-square fs-5 w-100"  type="button"
        :to="{ name: 'checkProduct' }"
        >直接結帳</router-link> -->
        <router-link
          class="btn-square fs-5 w-100"
          type="button"
          :class="{ 'disabled-btn': !cartId }"
          :to="{ name: 'checkProduct' }"
          @click="saveCardId"
          >直接結帳</router-link
        >
      </div>
    </div>
  </div>
  <div class="d-none d-lg-flex">
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">購物車</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <hr />
        <div class="row" v-for="cartItem in carts" :key="cartItem.id">
          <div class="col-5">
            <div class="card-att-img card-att-img-2">
              <img
                :src="cartItem.product.imageUrl"
                class="img-fluid pb-4 pb-lg-0"
                :alt="cartItem.product.title"
              />
            </div>
          </div>
          <div class="col-7">
            <h5 class="mb-2">{{ cartItem.product.title }}</h5>
            <h6 class="mb-2">NT{{ thousand(totalPrice) }}</h6>
            <div class="d-flex mb-4">
              <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="至少3人成行">
                <button
                  type="button"
                  class="btn btn-outline-dark rounded-0"
                  :disabled="quantity === 3"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="至少3人成行"
                  @click="decrementQuantity"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
              </span>
              <input
                min="3"
                max="10"
                type="number"
                v-model="quantity"
                class="form-control text-center rounded-0 border border-dark"
                @input="checkMaxValue"
              />
              <button
                type="button"
                class="btn btn-outline-dark rounded-0"
                @click="incrementQuantity"
                data-toggle="tooltip"
                data-placement="top"
                title="最多10人成行"
              >
                <i class="bi bi-plus-lg"></i>
              </button>
              <button class="d-flex align-items-center"  type="button" @click="removeCartItem(cartItem.product.title,cartItem.id)">
                <i class="bi bi-trash"></i>
              </button>
            </div>
            <!-- {{ cartItem.order.qty }} -->
          </div>

          <hr />
        </div>
      </div>
      <div class="offcanvas-footer">
        <hr />
        <p>購買 {{ carts.length }} 項產品</p>
        <h4 class="mt-4">總共：NT {{ thousand(totalPrice) }} 元</h4>
        <div class="d-flex pe-8">
          <a
            class="btn-outline-square w-100 fs-5 mt-4 me-1"
            href="#"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="addToCart(carts.product.id, quantity, carts.product.price)"
            >繼續預約</a
          >
          <router-link
            class="btn-square mt-4 fs-5 w-100"
            type="button"
            :class="{ 'disabled-btn': !cartId }"
            :to="{ name: 'checkProduct' }"
            @click="saveCardId"
            >直接結帳</router-link
          >
        </div>
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
@media (min-width: 992px) {
  .offcanvas-footer {
    background: #fff;
    position: fixed;
    right: -16px;
    bottom: 16px;
    width: 400px;
  }
  .disabled-btn {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
const api_url2 = import.meta.env.VITE_API_URL2
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)
export default {
  data() {
    return {
      category: '',
      packageTitle: '',
      products: [],
      newProductsContent: '',
      enabledProducts: [],
      carts: [],
      quantity: 3,
      newQty: 0,
      newCarts: [],
      cartId: null,
      bsOffcanvas:null
    }
  },
  created() {
    this.category = this.$route.params.category
    this.packageTitle = this.$route.params.title
  },
  computed: {
    totalPrice() {
      return this.carts.reduce((sum, cartItem) => {
        return sum + cartItem.order.price * cartItem.order.qty
      }, 0)
    }
  },
  methods: {
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
      this.products.forEach((item) => {
        // 檢查 item.description 是否存在
        // console.log(item.content)
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
      // console.log(this.newProductsContent)
    },
    isProductInCart(productId) {
      return this.carts.some((cartItem) => cartItem.product.id === productId)
    },
    addToCart(product_id, qty, price) {
      this.getCart();
      const order = {
        product_id,
        qty,
        price,
        total: qty * price
      }

      const cartId = this.cartId // 將cartId存入一個變數，以確保所有商品使用相同的cartId

      if (this.isProductInCart(product_id)) {
        // 如果產品已經在購物車中，更新數量
        const existingCartItem = this.carts.find((cartItem) => cartItem.product.id === product_id)
        existingCartItem.order.qty = qty
        existingCartItem.order.total = existingCartItem.order.qty * price
        this.quantity = existingCartItem.order.qty

        this.axios
          .put(`${api_url2}/carts/${existingCartItem.id}`, {
            data: { ...existingCartItem.order, cartId }
          })
          .then((res) => {
            console.log(res);
            this.newCarts = res.data
            this.cartId = this.newCarts.id
          })
          .catch((err) => {
            console.log(err);
            alert(`${err.response}`)
          })
      } else {
        // 如果產品不在購物車中，新增一個新項目
        this.axios
          .post(`${api_url2}/carts?_embed=products`, { data: { ...order } })
          .then((res) => {
            this.products.forEach((item) => {
              if (item.id === order.product_id) {
                this.carts.push({
                  id: res.data.id,
                  order,
                  product: item
                })
              }
            })
            this.newCarts = res.data
            this.cartId = this.newCarts.id
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    removeCartItem(productTitle, id) {
      console.log(productTitle,id)
      this.axios
        .delete(`${api_url2}/carts/${id}`)
        .then((res) => {
          // console.log(res);
          alert(`已刪除成功`)
          this.getCart();
          this.bsOffcanvas.hide();

          // 返回上一個頁面
          this.$router.go(0);
        })
        .catch((err) => {
          // console.log(err.message)
          alert(`${err.message}`)
        })
    },
    incrementQuantity() {
      if (this.quantity < 10) {
        this.quantity += 1
      }
    },
    decrementQuantity() {
      if (this.quantity > 3) {
        this.quantity -= 1
      }
    },
    checkMaxValue() {
      // 檢查輸入值是否超過最大值
      if (this.quantity > 10) {
        this.quantity = 10
      }
      if (this.quantity < 3) {
        this.quantity = 3
      }
    },
    initTooltip() {
      // Use Vue's $nextTick to make sure the DOM is updated before accessing elements
      this.$nextTick(() => {
        // Now you can safely access the DOM elements
        $('[data-toggle="tooltip"]').tooltip()
      })
    },
    saveCardId() {
      document.cookie = `cartId=${this.newCarts.id}; path=/;`
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          // console.log(err);
          alert(`${err}`);
        });
    },
  },
  mounted() {
    this.getProducts()
    this.getCart()
    this.bsOffcanvas = new bootstrap.Offcanvas('#offcanvasRight')

    // this.initTooltip();
  }
}
</script>
