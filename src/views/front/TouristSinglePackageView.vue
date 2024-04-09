<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <BannerBlock />
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link
            exact
            active-class="active-link"
            :to="{ path: '/TouristPackage', query: { category: '全部', page: '1' } }"
          >
            南部旅遊方案
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <a v-show="category === '台南'" @click="redirectToA('台南')" class="navbar-brand">台南</a>
          <a v-show="category === '嘉義'" @click="redirectToA('嘉義')" class="navbar-brand">嘉義</a>
          <a v-show="category === '高雄'" @click="redirectToA('高雄')" class="navbar-brand">高雄</a>
        </li>
        <li class="breadcrumb-item">
          {{ packageTitle }}
        </li>
      </ol>
    </nav>

    <div
      class="row h-100 flex-wrap-reverse flex-md-nowrap"
      v-for="productsItem in enabledProducts"
      :key="productsItem.id"
    >
      <div class="col-12 col-md-7 col-lg-8 my-8 my-md-0">
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
                  class="nav-link active"
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
                  下午1
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  下午2
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
                        :alt="productsItem.itinerary_data[0].itinerary_first_day_am_title"
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
                        :alt="productsItem.itinerary_data[0].itinerary_first_day_pm_title"
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
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="w-100 w-lg-60 mb-4">
                    <div class="card-att-img card-att-img-2">
                      <img
                        :src="productsItem.imagesUrl[2]"
                        class="img-fluid pb-4 pb-lg-0"
                        :alt="productsItem.itinerary_data[0].itinerary_first_day_pm_title2"
                      />
                    </div>
                  </div>
                  <div class="w-100 w-lg-40">
                    <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                      {{ productsItem.itinerary_data[0].itinerary_first_day_pm_title2 }}
                    </h4>
                    <p class="text-dark">
                      {{ productsItem.itinerary_data[0].itinerary_first_day_pm_content2 }}
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
                    class="nav-link active"
                    id="pills-home-tab-two"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-two"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-two"
                    aria-selected="true"
                  >
                    早上
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab-two"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-two"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-two"
                    aria-selected="false"
                  >
                    下午1
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab-two"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact-two"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact-two"
                    aria-selected="false"
                  >
                    下午2
                  </button>
                </li>
              </ul>
              <div class="tab-content card-att" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home-two"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-two"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[3]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.itinerary_data[1].itinerary_second_day_am_title"
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
                  id="pills-profile-two"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-two"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[4]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.itinerary_data[1].itinerary_second_day_pm_title"
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
                <div
                  class="tab-pane fade"
                  id="pills-contact-two"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab-two"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[5]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.itinerary_data[1].itinerary_second_day_pm_title2"
                        />
                      </div>
                    </div>
                    <div class="w-lg-40">
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                        {{ productsItem.itinerary_data[1].itinerary_second_day_pm_title2 }}
                      </h4>
                      <p class="text-dark">
                        {{ productsItem.itinerary_data[1].itinerary_second_day_pm_content2 }}
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
                class="nav nav-underline nav-fill mb-4 w-100 w-lg-75"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab-third"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-third"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-third"
                    aria-selected="true"
                  >
                    早上
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab-third"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-third"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-third"
                    aria-selected="false"
                  >
                    下午1
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab-third"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact-third"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact-third"
                    aria-selected="false"
                  >
                    下午2
                  </button>
                </li>
              </ul>
              <div class="tab-content card-att" id="pills-tabContent">
                <div
                  class="tab-pane fade"
                  id="pills-home-third"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-third"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[6]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.itinerary_data[2].itinerary_third_day_am_title"
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
                  id="pills-profile-third"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-third"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[7]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.itinerary_data[2].itinerary_third_day_pm_title"
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
                <div
                  class="tab-pane fade"
                  id="pills-contact-third"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab-third"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="w-100 w-lg-60 mb-4">
                      <div class="card-att-img card-att-img-2">
                        <img
                          :src="productsItem.imagesUrl[8]"
                          class="img-fluid pb-4 pb-lg-0"
                          :alt="productsItem.itinerary_data[2].itinerary_third_day_pm_title2"
                        />
                      </div>
                    </div>
                    <div class="w-lg-40">
                      <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                        {{ productsItem.itinerary_data[2].itinerary_third_day_pm_title2 }}
                      </h4>
                      <p class="text-dark">
                        {{ productsItem.itinerary_data[2].itinerary_third_day_pm_content2 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-5 col-lg-4">
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
            <p
              v-for="(description, i) in item.content"
              :key="i"
              :class="{ 'mb-3': i === 2, 'ps-10': i !== 0 && i !== 3 }"
            >
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
        <div class="d-flex mb-6 flex-column">
          <h5 class="mb-2">
            <span
              class="fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"
            >
              <i class="bi bi-car-front-fill me-2"></i>出發時間
            </span>
          </h5>
          <h6 class="mt-2">{{ productsItem.goStartDate }} 至 {{ productsItem.goEndDate }}</h6>
        </div>
        <div class="d-flex mb-4 flex-column">
          <h5 class="mb-2">
            <span
              class="fs-4 fs-sm-5 fs-xl-4 mb-2 border-bottom border-primary-400 border-3 text-primary-600"
            >
              <i class="bi bi-card-list me-2"></i>旅遊方案概覽
            </span>
          </h5>
          <h6 class="mt-2">適合年齡：6-80歲</h6>
          <h6 class="mt-2">集合地點與時間：{{ productsItem.category }}火車站，早上8點</h6>
          <h6 class="mt-4">所需時間：約10-12小時</h6>
          <h6 class="mt-2">交通：當地公車/客運，或渡輪/麵包車(依情況調整)</h6>
          <h6 class="mt-4">
            特色：深度體驗當地文化與生活，享受悠閒旅行節奏，包含足夠自由時間用於探索、拍照和休息
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
            @click="decrementQuantity(productsItem.id)"
          >
            <span
              class="spinner-border spinner-grow-sm"
              role="status"
              v-if="status.loadingItem4 === productsItem.id"
            ></span>
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            min="1"
            max="10"
            type="number"
            :disabled="quantity > productsItem.max_travelers"
            class="form-control text-center rounded-0 border border-dark"
            v-model="quantity"
            readonly
          />
          <button
            class="btn btn-outline-dark rounded-0"
            type="button"
            @click="incrementQuantity(productsItem.id, productsItem.max_travelers)"
          >
            <span
              class="spinner-border spinner-grow-sm"
              role="status"
              v-if="status.loadingItem2 === productsItem.id"
            ></span>
            <i class="bi bi-plus-lg"></i>
          </button>
          <button
            type="button"
            class="btn-outline-cerulean rounded-0 ms-2 p-2"
            @click="toggleFavorite(productsItem.id, category, packageTitle)"
          >
            <i
              :class="[
                'bi',
                {
                  'bi-heart-fill': isFavorite[productsItem.id],
                  'bi-heart': !isFavorite[productsItem.id]
                }
              ]"
            ></i>
          </button>
        </div>

        <h6 class="mb-2">
          注意：
          <span class="text-danger"> 至少3位成團，最多{{ productsItem.max_travelers }}位出遊 </span>
        </h6>
        <h6 class="mb-5" v-if="currentDate <= productsItem.endDate">
          目前已有
          <span class="text-danger">0</span>
          位預約，剩
          <span class="text-danger">{{ productsItem.max_travelers }}</span>
          位可預約
        </h6>
        <button
          class="btn-square w-100 fs-5 mb-4"
          type="button"
          v-if="currentDate <= endDate"
          :class="{ 'disabled-btn': currentDate > endDate }"
          @click="addToCart(productsItem.id, quantity, productsItem.price)"
        >
          <span
            class="spinner-border spinner-grow-sm"
            role="status"
            v-if="status.loadingItem3 === productsItem.id"
          ></span>
          預約旅遊方案
        </button>
        <button
          class="btn btn-danger w-100 fs-5 mb-4 disabled btn-danger-rounded"
          v-else
          type="button"
        >
          預約時間截止
        </button>
        <button
          class="btn-square fs-5 w-100"
          type="button"
          :class="{ 'disabled-btn': currentDate > endDate || newCarts.length === 0 }"
          @click="saveCardId"
        >
          直接結帳
        </button>
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
      endDate: '',
      isDisabled: false,
      cartsLength: 0,
      isLoading: false,
      status: {
        loadingItem: false,
        loadingItem2: '',
        loadingItem3: '',
        loadingItem4: '',
        loadingItem5: ''
      },
      heartData: [],
      isFavorite: {}
    }
  },
  created() {
    this.category = this.$route.params.category
    this.packageTitle = this.$route.params.title
  },
  methods: {
    redirectToA(category) {
      this.$router.push({ path: '/TouristPackage', query: { category: category } })
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
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          this.products = res.data
          this.products.forEach((item) => {
            if (item.is_enabled === 1 && item.title === this.packageTitle) {
              this.enabledProducts.push(item)
              this.isLoading = false
            }
          })
          this.endDate = this.enabledProducts[0].endDate
          this.getNewText()
        })
        .catch(() => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    getNewText() {
      const idDescriptionsMap = {}
      this.enabledProducts.forEach((item, index) => {
        // 檢查 item.description 是否存在
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
      // 將 id 與描述合併成物件
      this.newProductsContent = Object.entries(idDescriptionsMap).map(([id, content]) => ({
        id,
        content
      }))
    },
    addToCart(productId, qty = 1, price, percent = 1) {
      this.status.loadingItem3 = productId
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能預約套裝行程')
        this.status.loadingItem3 = ''
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
              userId: this.userId,
              final_total: qty * price * percent
            })
            .then(() => {
              this.status.loadingItem3 = ''
              sweetAlert.threeLayerCheckType('success', '已更新預約人數')
              this.getCart()
            })
            .catch(() => {
              this.status.loadingItem3 = ''
              sweetAlert.threeLayerCheckType('error', `已更新預約人數失敗`)
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
            .then(() => {
              this.status.loadingItem3 = ''
              sweetAlert.threeLayerCheckType('success', `已預約${this.packageTitle}成功`)
              this.getCart()
            })
            .catch(() => {
              this.status.loadingItem3 = ''
              sweetAlert.threeLayerCheckType('error', `預約失敗，再重新登入預約`)
            })
        }
      }
    },
    incrementQuantity(id, maxNum) {
      this.status.loadingItem2 = id
      if (this.quantity < maxNum) {
        this.status.loadingItem2 = ''
        this.quantity += 1
      } else {
        this.status.loadingItem2 = ''
        sweetAlert.threeLayerCheckType('warning', `預約人數上限為${maxNum}人`)
      }
    },
    decrementQuantity(id) {
      this.status.loadingItem4 = id
      if (this.quantity > 1) {
        this.status.loadingItem4 = ''
        this.quantity -= 1
      }
    },
    checkMaxValue(maxNum) {
      if (this.quantity > maxNum) {
        this.quantity = maxNum
      }
    },
    handlePlus(item) {
      this.quantity = item++
    },
    saveCardId() {
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能預約套裝行程')
      } else {
        this.$router.push('/cart')
      }
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.carts = res.data
          this.carts.forEach((item) => {
            if (this.userId === item.userId) {
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
        .catch(() => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
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
    this.isLoading = true
    this.getProducts()
    this.getCart()
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.checkDate()
    this.getHeartData()
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
.line {
  height: 97%;
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
.btn-danger-rounded {
  border-radius: 8px !important;
}
a.navbar-brand {
  cursor: pointer;
}
</style>
