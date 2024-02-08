<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
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
              <p class="fs-6 fs-lg-5 mb-2 d-none d-md-block">由兩位藝術家耗時6年完成，外純白、內金黃的海貝造型</p>
              <p class="fs-6 fs-lg-5 d-none d-md-block">能讓遊客聆聽海聲，更是亞洲最大的貝殼裝置藝術</p>
            </div>
            <div class="d-block d-md-none mt-8 text-center text-white mb-8">
              <p class="fs-7 mb-2">由兩位藝術家耗時6年完成<br>外純白、內金黃的海貝造型</p>
              <p class="fs-7">能讓遊客聆聽海聲<br>更是亞洲最大的貝殼裝置藝術</p>
            </div>
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner-bg banner-img1">
          <div class="banner-box px-6 py-10 p-lg-10 mx-auto text-center">
            <p class="fs-md-1 fs-6 mb-5 mb-md-8 d-flex align-items-center justify-content-center">
              <!-- <img src="../assets/images/icon-map.png" alt="icon-map" class="me-2 icon-map"> -->
              <i class="bi bi-geo-alt-fill me-2 icon-map"></i>
              嘉義景點推薦
              <i class="bi bi-geo-alt-fill ms-2 icon-map"></i>
            </p>
            <h1 class="font-hero mb-0 mb-md-10 text-nowrap">國立故宮博物院南部院區</h1>
            <p class="fs-6 fs-lg-5 mb-2 d-none d-md-block">博物館建築以中國水墨畫濃墨、非白與渲染三種技法</p>
            <p class="fs-6 fs-lg-5 d-none d-md-block">形成時量體展示空間及文物庫房、虛量體公共接待空間與穿透連接空間</p>
          </div>
          <div class="d-block d-md-none mt-8 text-center text-white mb-8">
            <p class="fs-7 mb-2">博物館建築以中國水墨畫濃墨、<br>非白與渲染三種技法</p>
            <p class="fs-7">形成時量體展示空間及文物庫房、<br>虛量體公共接待空間與穿透連接空間</p>
          </div>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>Slide 3</swiper-slide> -->
    </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  import '../../scss/utils/_mixins.scss';
  import '../../scss/components/_banner-swiper.scss';
  // import required modules
  import { Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
