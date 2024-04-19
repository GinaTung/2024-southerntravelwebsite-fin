<template>
  <div class="mt-10" v-if="linkPath === 'TouristSingleAttraction'">
    <h2>{{ adTitle[adCategoryTitle] }}</h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '1200': {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper4"
    >
      <swiper-slide v-for="(attractionItem, key) in enabledAttractions" :key="key + 123">
        <div class="card h-100">
          <span class="tag text-white">{{ attractionItem.category }}</span>
          <div class="card-header p-0 border-0 h-100">
            <a :href="goRouter(attractionItem)" target="_blank">
              <img
                :src="attractionItem.imageUrl"
                class="img-fluid h-100"
                alt="attractionItem.title"
              />
            </a>
          </div>
          <div class="card-body" style="transform: rotate(0)">
            <div class="text-center flex-grow-1 h-35">
              <a
                :href="goRouter(attractionItem)"
                target="_blank"
                class="card-title fs-5 fw-bold text-primary-700 text-center stretched-link"
              >
                {{ attractionItem.title }}
              </a>
            </div>
            <p class="fs-6 pb-7">
              {{ truncateContent(attractionItem.description, 52) }}
            </p>
          </div>
        </div>
      </swiper-slide>
      <button class="swiper-button-next border-0 bg-transparent" aria-label="arrow-next"></button>
      <button class="swiper-button-prev border-0 bg-transparent" aria-label="arrow-prev"></button>
    </swiper>
  </div>
  <div class="mt-10" v-if="linkPath === 'TouristSinglePackage'">
    <h2>{{ adTitle[adCategoryTitle] }}</h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '1200': {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper4"
    >
      <swiper-slide v-for="(productsItem, key) in enabledProducts" :key="key + 123">
        <div class="card h-100 flex-grow-1">
          <span class="tag text-white">{{ productsItem.category }}</span>
          <div class="card-header p-0 border-0">
            <a :href="goRouterProduct(productsItem)" target="_blank">
              <img :src="productsItem.imageUrl" class="img-fluid" alt="productsItem.title" />
            </a>
          </div>
          <div class="card-body" style="transform: rotate(0)">
            <div class="text-center flex-grow-1 h-45">
              <a
                :href="goRouterProduct(productsItem)"
                target="_blank"
                class="card-title fs-5 fw-bold text-primary-700 text-center stretched-link"
              >
                {{ productsItem.title }}
              </a>
            </div>
            <p class="fs-6">
              {{ truncateContent(productsItem.description, 48) }}
            </p>
          </div>
          <div class="card-footer border-0" style="transform: rotate(0)">
            <div class="d-flex align-items-center pb-4">
              <a :href="goRouterProduct(productsItem)" target="_blank" class="stretched-link">
                <h6 v-if="currentDate <= productsItem.endDate">
                  預約期間：
                  {{ productsItem.startDate }} 至 {{ productsItem.endDate }}
                  <div class="d-flex align-items-center mt-1">
                    <h5 class="text-danger fw-bold me-2">促銷價</h5>
                    <h5 class="text-danger">NT{{ thousand(productsItem.price) }}</h5>
                  </div>
                </h6>
                <h5 class="text-danger py-3" v-else>預約時間已截止</h5>
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <button class="swiper-button-next border-0 bg-transparent" aria-label="arrow-next"></button>
      <button class="swiper-button-prev border-0 bg-transparent" aria-label="arrow-prev"></button>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import '@/scss/components/_like-swiper.scss'

import { FreeMode, Pagination, Navigation } from 'swiper/modules'
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['adCategoryTitle', 'token', 'userId', 'currentDate'], // 由 props 接收外部傳入資料
  data() {
    return {
      attractionTitle: '',
      attractions: [],
      enabledAttractions: [],
      adTitle: {
        attractions: '探索旅遊景點',
        packages: '探索旅遊方案'
      },
      isFavorite: {},
      linkPath: '',
      enabledProducts: []
    }
  },
  methods: {
    goRouter(attractionItem) {
      return `#/TouristAttractions/${attractionItem.category}/${attractionItem.title}`
    },
    goRouterProduct(productsItem) {
      return `#/TouristPackage/${productsItem.category}/${productsItem.title}`
    },
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.enabledAttractions = this.attractions.filter((item) => item.is_enabled === 1)
          // 在這裡移除相同標題的資料
          this.removeAttractionWithTitle(this.attractionTitle)
        })
        .catch((err) => {
          console.log(err);
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
    },
    removeAttractionWithTitle(title) {
      if (!title) return // 如果 title 為空，則不進行操作
      this.enabledAttractions = this.enabledAttractions.filter((item) => item.title !== title)
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledProducts.push(item)
            }
          })
          this.removeProductsWithTitle(this.attractionTitle)
        })
        .catch(() => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
    },
    removeProductsWithTitle(title) {
      if (!title) return // 如果 title 為空，則不進行操作
      this.enabledProducts = this.enabledProducts.filter((item) => item.title !== title)
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    }
  },
  setup() {
    return {
      modules: [FreeMode, Pagination, Navigation]
    }
  },
  mounted() {
    this.attractionTitle = this.$route.params.title
    this.linkPath = this.$route.name
    this.getAttractions()
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped>
p {
  text-align: justify; /* 將文字左右對齊 */
}
.card-title {
  margin-bottom: 0;
  &:hover {
    color: #0ea0a6 !important;
  }
}
</style>
