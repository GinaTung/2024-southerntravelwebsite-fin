<template>
  <swiper
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide v-for="(item,key) in imagesUrl" :key="key+123">
      <img
        :src="item" class="img-fluid"
      />
    </swiper-slide>

  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper3"
  >
  <swiper-slide v-for="(item,key) in imagesUrl" :key="key+123">
      <img
        :src="item" class="img-fluid"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import '@/scss/components/_singleAttraction.scss'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      attractionTitle: '',
      attractions: [],
      enabledAttractions: [],
      imagesUrl:''
    }
  },
  methods: {
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          // console.log(res)
          this.attractions = res.data
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1 && this.attractionTitle === item.title) {
              // console.log(item.title)
              // console.log(this.attractionTitle === item.title)
              this.enabledAttractions.push(item)
            }
          })
          // console.log(this.enabledAttractions[0].imagesUrl)
          this.imagesUrl = this.enabledAttractions[0].imagesUrl;
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
    },
  },
  setup() {
    const thumbsSwiper = ref(null)

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper
    }

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs]
    }
  },
  mounted(){
        this.attractionTitle = this.$route.params.title
    this.getAttractions()
  }
}
</script>
<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
