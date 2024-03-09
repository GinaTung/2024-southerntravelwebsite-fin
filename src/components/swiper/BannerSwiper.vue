<template>
  <swiper
    :navigation="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="banner-bg banner-img3">
        <div class="banner-box px-6 py-10 p-lg-10 mx-auto text-center">
          <p
            class="fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"
          >
            <!-- <img src="../assets/images/icon-map.png" alt="icon-map" class="me-2 icon-map"> -->
            <i class="bi bi-geo-alt-fill me-2 icon-map"></i>
            高雄景點推薦
            <i class="bi bi-geo-alt-fill ms-2 icon-map"></i>
          </p>
          <h1 class="font-hero mb-0 mb-md-10 text-nowrap">高雄港旅運中心</h1>
          <p class="fs-6 fs-lg-5 mb-2 d-none d-md-block text-center">
            高雄港是台灣港務與海運的核心，近年來亞太地區的郵輪旅遊產業日益興盛
          </p>
          <p class="fs-6 fs-lg-5 d-none d-md-block text-center">
            ，作為台灣第一大港的高雄，在港市合作、水岸開發的方針下
          </p>
        </div>
        <div class="d-block d-md-none mt-8 text-center text-white mb-8">
          <p class="fs-7 mb-2 text-center">
            可同時停泊2艘排水量達22.5萬噸的豪華郵輪<br />是南台灣最重要的海上門戶
          </p>
          <p class="fs-7 text-center">
            輕軌串連駁二藝術中心、高雄流行音樂中心等大型建設<br />共築高雄水岸的新天際線。
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-bg banner-img2">
        <div class="banner-box px-6 py-10 p-lg-10 mx-auto text-center">
          <p class="fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center">
            <!-- <img src="../assets/images/icon-map.png" alt="icon-map" class="me-2 icon-map"> -->
            <i class="bi bi-geo-alt-fill me-2 icon-map"></i>
            高雄景點推薦
            <i class="bi bi-geo-alt-fill ms-2 icon-map"></i>
          </p>
          <h1 class="font-hero mb-0 mb-md-10 text-nowrap">旗津黃金海韻－海珍珠</h1>
          <p class="fs-6 fs-lg-5 mb-2 d-none d-md-block text-center">
            由兩位藝術家耗時6年完成，外純白、內金黃的海貝造型
          </p>
          <p class="fs-6 fs-lg-5 d-none d-md-block text-center">
            能讓遊客聆聽海聲，更是亞洲最大的貝殼裝置藝術
          </p>
        </div>
        <div class="d-block d-md-none mt-8 text-center text-white mb-8">
          <p class="fs-7 mb-2 text-center">由兩位藝術家耗時6年完成<br />外純白、內金黃的海貝造型</p>
          <p class="fs-7 text-center">能讓遊客聆聽海聲<br />更是亞洲最大的貝殼裝置藝術</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-bg banner-img1">
        <div class="banner-box px-6 py-10 p-lg-10 mx-auto text-center">
          <p
            class="fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center text-center"
          >
            <!-- <img src="../assets/images/icon-map.png" alt="icon-map" class="me-2 icon-map"> -->
            <i class="bi bi-geo-alt-fill me-2 icon-map"></i>
            嘉義景點推薦
            <i class="bi bi-geo-alt-fill ms-2 icon-map"></i>
          </p>
          <h1 class="font-hero mb-0 mb-md-10 text-nowrap">國立故宮博物院南部院區</h1>
          <p class="fs-6 fs-lg-5 mb-2 d-none d-md-block text-center">
            博物館建築以中國水墨畫濃墨、非白與渲染三種技法
          </p>
          <p class="fs-6 fs-lg-5 d-none d-md-block text-center">
            形成時量體展示空間及文物庫房、虛量體公共接待空間與穿透連接空間
          </p>
        </div>
        <div class="d-block d-md-none mt-8 text-center text-white mb-8">
          <p class="fs-7 mb-2 text-center">博物館建築以中國水墨畫濃墨、<br />非白與渲染三種技法</p>
          <p class="fs-7 text-center">
            形成時量體展示空間及文物庫房、<br />虛量體公共接待空間與穿透連接空間
          </p>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 3</swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

import '../../scss/utils/_mixins.scss'
import '../../scss/components/_banner-swiper.scss'
// import required modules
import { Autoplay,Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation,Autoplay]
    }
  }
}
</script>
