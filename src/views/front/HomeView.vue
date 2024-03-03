<template>
  <banner-swiper></banner-swiper>
  <div class="search-bar bg-primary-400 border-left-bottom">
      <div class="container text-center pt-10 pb-25 py-md-20">
        <p class="fs-3 text-white mb-10 fw-bold">開始你的南部輕旅遊！</p>
        <div class="mx-auto" style="max-width: 856px;">
          <div class="input-group position-relative">
            <input type="text" class="form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0"
              placeholder="輸入遊玩縣市">
            <a class="btn-cerulean-blue position-absolute search-btn-cerulean-blue-position" type="button" hrdf="#">GO
              !</a>
          </div>
        </div>
      </div>
    </div>
    <LatestNews></LatestNews>
    <TouristAttractions></TouristAttractions>
    <AdBlock></AdBlock>
    <TouristPackage></TouristPackage>
</template>
<style lang="scss">
.search-btn-cerulean-blue-position {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  @media(max-width: 768px){
    margin-top: 40px;
    left: 50%;
    transform: translate(-50%, 20%);
  }
}
</style>
<script>
import BannerSwiper from '../../components/swiper/BannerSwiper.vue';
import LatestNews from '../../components/LatestNews.vue';
import TouristAttractions from '@/components/TouristAttractions.vue';
import AdBlock from "../../components/AdBlock.vue";
import TouristPackage from '@/components/TouristPackage.vue';

export default {
  components: {
    BannerSwiper,LatestNews,TouristAttractions,AdBlock,TouristPackage
  },
  // 其他相關設定...
};
</script>