<template>
  <div class="mt-10">
    <!-- <h2>{{ adTitle[adCategoryTitle] }}</h2> -->
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        '576': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }"
      :navigation="true"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper4"
    >
      <swiper-slide v-for="(attractionItem, key) in enabledAttractions" :key="key + 123">
        <div class="card h-100 flex-grow-1">
          <span class="tag text-white">{{ attractionItem.category }}</span>
          <img :src="attractionItem.imageUrl" class="img-fluid" alt="attractionItem.title" />
          <div class="card-body">
            <h5 class="fs-5 fs-xl-4 fw-bold text-primary-700 text-center flex-grow-1 h-50">
              {{ attractionItem.title }}
            </h5>
            <p class="h-100 p-5 flex-grow-1 h-50 text-center">加入收藏</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import '@/scss/components/_like-swiper.scss'

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules'
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['adCategoryTitle'], // 由 props 接收外部傳入資料
  data() {
    return {
      attractionTitle: '',
      attractions: [],
      enabledAttractions: [],
      adTitle: {
        sweet: '猜你喜歡吃甜甜'
      }
    }
  },
  methods: {
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledAttractions.push(item)
            }
          })
          console.log(this.enabledAttractions)
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
    }
  },
  setup() {
    return {
      modules: [FreeMode, Pagination, Navigation]
    }
  },
  mounted() {
    this.attractionTitle = this.$route.params.title
    this.getAttractions()
    // console.log(this.$route)
  }
}
</script>
