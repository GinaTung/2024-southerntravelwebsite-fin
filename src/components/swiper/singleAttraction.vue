<template>
  <swiper
    :spaceBetween="10"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide v-for="(item, key) in imagesUrl" :key="key + 123">
      <img :src="item" class="img-fluid" :alt="attractionTitle"/>
      <button
        class="position-absolute text-white end-5 bottom-5 fs-4 bg-transparent border-0"
        @click="openModal(item, key)"
        aria-label="zoom-in"
      >
        <i class="bi bi-zoom-in fs-2"></i>
      </button>
    </swiper-slide>
    <button class="swiper-button-next border-0 bg-transparent" aria-label="arrow-next"></button>
      <button class="swiper-button-prev border-0 bg-transparent" aria-label="arrow-prev"></button>
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
    <swiper-slide v-for="(item, key) in imagesUrl" :key="key + 123">
      <img :src="item" class="img-fluid" :alt="attractionTitle"/>
    </swiper-slide>
  </swiper>
  <div
    class="modal fade"
    id="bigModal"
    tabindex="-1"
    aria-labelledby="bigModalLabel"
    aria-hidden="true"
    ref="bigModal"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content bg-transparent">
        <div class="modal-body p-0">
          <img :src="modalImageFilePath" class="modal-content position-relative" alt="attractionTitle"/>
          <button type="button" class="border-0 bg-transparent position-absolute top-3 end-3 p-3" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg text-secondary-400 fs-3"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
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
import Modal from 'bootstrap/js/dist/modal'
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

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
      imagesUrl: '',
      showModal: false,
      modalImageFilePath: '', // 存储被点击图片的文件路径
      modalImageIndex: 0, // 存储被点击图片的索引
      bigModal: null
    }
  },
  methods: {
    openModal(filePath, index) {
      this.bigModal.show()
      this.modalImageFilePath = filePath
      this.modalImageIndex = index
      this.showModal = true
    },
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1 && this.attractionTitle === item.title) {
              this.enabledAttractions.push(item)
            }
          })
          this.imagesUrl = this.enabledAttractions[0].imagesUrl
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
    }
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
  mounted() {
    this.bigModal = new Modal(this.$refs.bigModal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.attractionTitle = this.$route.params.title
    this.getAttractions()
  }
}
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
