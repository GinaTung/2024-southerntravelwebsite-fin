<template>
  <div class="mt-10">
    <h2>{{ adTitle[adCategoryTitle] }}</h2>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        '768': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '992': {
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
        <div class="card h-100 flex-grow-1">
          <span class="tag text-white">{{ attractionItem.category }}</span>
          <a :href="goRouter(attractionItem)" target="_blank" class="stretched-link">
            <img :src="attractionItem.imageUrl" class="img-fluid" alt="attractionItem.title" />
          </a>
          <div class="card-body">
            <h5 class="fs-5 fs-lg-4 fw-bold text-primary-700 text-center flex-grow-1 h-35">
              {{ attractionItem.title }}
            </h5>
            <p>
              {{ truncateContent(attractionItem.description, 48) }}
            </p>
          </div>
        </div>
      </swiper-slide>
      <button class="swiper-button-next border-0 bg-transparent"></button>
      <button class="swiper-button-prev border-0 bg-transparent"></button>
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
  props: ['adCategoryTitle', 'token', 'userId'], // 由 props 接收外部傳入資料
  data() {
    return {
      attractionTitle: '',
      attractions: [],
      enabledAttractions: [],
      adTitle: {
        sweet: '你可能喜歡景點'
      },
      isFavorite: {}
    }
  },
  methods: {
    goRouter(attractionItem) {
      return `#/TouristAttractions/${attractionItem.category}/${attractionItem.title}`
    },
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
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
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
  }
}
</script>
<style lang="scss" scoped>
// @import '../../scss/utils/custom-color';
// .text-heart {
//   color: $primary-500;
// }
</style>
