<template>
  <div class="latestNews">
    <div class="container py-10 py-lg-30">
      <p class="fs-4 fs-lg-1 text-primary-700 fw-bold mb-1 mb-lg-2 text-center">最新消息</p>
      <p class="fs-6 fs-lg-5 text-center mb-5 mb-lg-20">Latest News</p>
      <template v-if="isLoading">
        <div class="row">
          <div class="col-12 col-lg-7">
            <div class="tab-content mb-8 mb-lg-0 flex-grow-1" id="nav-tabContent">
              <!-- 在這裡加入 placeholder -->
              <div class="image-tab-pane">
                <img
                  src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
                  class="img-fluid opacity-10 first-img z-index-1 rounded-5"
                  alt="Placeholder Image"
                />
                <img
                  src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
                  class="img-fluid second-img opacity-25 z-index-2 rounded-5"
                  alt="Placeholder Image"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                v-for="index in 4"
                :key="index"
                class="list-group-item list-group-item-action px-6 py-4 p-lg-6 mb-3 active placeholder"
              >
                <div class="d-flex align-items-center placeholder-glow">
                  <span class="placeholder w-15 mb-3"></span>
                  <span class="placeholder w-15 mb-3 ms-2"></span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center mb-3 placeholder-glow"
                >
                  <span class="list-tab-title placeholder w-40"> </span>
                  <span class="placeholder w-5"></span>
                </div>
                <div class="d-flex flex-column placeholder-glow">
                  <span class="placeholder w-75 mb-3"></span>
                  <span class="placeholder w-75"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="row">
          <div class="col-12 col-lg-7">
            <div class="tab-content mb-8 mb-lg-0 flex-grow-1" id="nav-tabContent">
              <!-- 這裡使用 v-for 循環來動態生成 tab-pane -->
              <div
                v-for="(item, index) in newsLatestProductData"
                :key="index"
                class="tab-pane fade"
                :class="{ 'show active': index === 0 }"
                :id="'list-' + index"
                role="tabpanel"
                :aria-labelledby="'list-' + index + '-list'"
              >
                <div class="image-tab-pane">
                  <img
                    :src="item.imageUrl"
                    class="img-fluid opacity-25 first-img z-index-1"
                    :alt="item.title"
                  />
                  <img
                    :src="item.imageUrl"
                    class="img-fluid second-img z-index-2"
                    :alt="item.title"
                  />
                  <RouterLink
                    v-if="item.category && item.title"
                    class="btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3"
                    :to="{
                      name: 'TouristSinglePackage',
                      params: { category: item.category, title: item.title }
                    }"
                  >
                    查看更多
                  </RouterLink>
                  <a
                    v-else
                    class="btn-golden-yellow fs-5 position-absolute end-5 bottom-5 z-index-3 col-md-3"
                    href="#"
                  >
                    查看更多
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                v-for="(item, index) in newsLatestProductData"
                :key="index"
                :class="{
                  'list-group-item': true,
                  'list-group-item-action': true,
                  'px-6': true,
                  'py-4': true,
                  'p-lg-6': true,
                  'mb-2': true,
                  active: index === 0
                }"
                :id="'list-' + index + '-list'"
                data-bs-toggle="list"
                :data-bs-target="'#list-' + index"
                role="tab"
                :aria-controls="'list-' + index"
                style="cursor: pointer"
                @click="handleTabClick(index)"
              >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="list-tab-title">
                    <div class="d-flex mb-3">
                      <span
                        class="badge rounded-pill"
                        :class="{
                          'bg-primary-200 text-primary-500 fw-bold me-1 py-1 px-4 fs-6':
                            item.type === '旅遊方案',
                          'bg-secondary-200 text-secondary-600 fw-bold me-1 py-1 px-4 fs-6':
                            item.type === '旅遊景點'
                        }"
                        >{{ item.type }}</span
                      >
                      <span class="badge rounded-pill bg-light2 text-dark2 py-1 px-4 fs-6">{{
                        item.category
                      }}</span>
                    </div>
                    <div class="nav-section-title">
                      <h4 class="fs-6 fs-lg-5 mb-2 fw-bold text-primary-700">{{ item.title }}</h4>
                      <p class="fs-6 fs-lg-5 text-dark2" v-if="currentDate <= item.endDate">
                        預約時間：{{ item.startDate }} ~ {{ item.endDate }}
                      </p>
                      <p class="fs-6 fs-lg-5 text-danger" v-else>預約時間已截止</p>
                    </div>
                  </div>
                  <i
                    class="bi bi-chevron-double-right text-primary-500 fw-bold d-none d-lg-block"
                    :class="{
                      'bi-chevron-direction': true,
                      'bi-chevron-active': currentTab === index
                    }"
                  ></i>
                  <i
                    class="bi bi-chevron-double-right text-primary-500 fw-bold d-lg-none"
                    :class="{
                      'bi-chevron-direction': true,
                      'bi-chevron-active2': currentTab === index
                    }"
                  ></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>
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
      enabledProducts: [],
      newsLatestProductData: [],
      attractions: [],
      currentDate: '',
      isLoading: false,
      arrowIcon: 'bi-chevron-right',
      currentTab: 0,
      arrowRotation: false
    }
  },
  methods: {
    handleTabClick(index) {
    this.currentTab = index; 
  },
    checkDate() {
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
    getProducts() {
      this.axios
        .get(`${api_url2}/products?id=-c35c4Q9gWLGb7p4aWAM4&id=KvBuohr&id=xoGgJIk&id=fsfguEU`)
        .then((res) => {
          this.products = res.data
          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledProducts.push(item)
              this.isLoading = false
            }
          })
          this.getNewsProductsData()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
    },
    getNewsProductsData() {
      this.enabledProducts.forEach((item) => {
        this.newsLatestProductData.push({
          type: '旅遊方案',
          id: item.id,
          category: item.category,
          startDate: item.startDate,
          endDate: item.endDate,
          title: item.title,
          imageUrl: item.imageUrl
        })
      })
    }
  },
  mounted() {
    this.isLoading = true
    this.getProducts()
    this.checkDate()
  }
}
</script>

<style lang="scss" scoped>

.bi-chevron-direction {
  transition: transform 0.3s ease;
  transform: rotate(0deg); 
}

.bi-chevron-active {
  transform: rotate(180deg);
}

.bi-chevron-active2 {
  transform: rotate(270deg);
}



</style>
