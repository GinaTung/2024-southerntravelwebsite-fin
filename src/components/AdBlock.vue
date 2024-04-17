<template>
  <div class="d-flex justify-content-center">
    <div class="ad">
    <div class="container py-10 py-lg-30 d-flex flex-lg-row flex-column justify-content-lg-between text-center text-lg-start">
      <div class="ad-l-side mb-5 mb-lg-0">
        <p class="fs-4 text-center text-lg-start fs-lg-1 fw-bold mb-5 mb-lg-6">計算荷包 盡情遊覽</p>
        <p class="fs-4 text-center text-lg-start fs-lg-1 mb-8 fw-bold">我們的旅程 為您量身定制！</p>
        <p class="fs-6 text-center text-lg-start fs-lg-4 mb-2">Budget Smart, Travel Big</p>
        <p class="fs-6 text-center text-lg-start fs-lg-4">Your Custom Journey Awaits.</p>
      </div>
      <div class="ad-r-side d-flex flex-column align-items-lg-end justify-content-lg-center align-items-center ">
        <!-- <a href="#/TouristBudget" class="btn-cerulean-blue btn-cerulean-blue-spacer mb-2 mb-lg-4 d-inline-block fs-5">立即開始</a> -->
        <!-- <p class="fs-7 fs-lg-6 fw-bold text-center text-lg-start">根據天數與人數，推薦合適行程</p> -->
      </div>
    </div>
    
  </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/scss/all.scss';
.ad {
    background-image: url("../assets/img/banner.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    max-width: 100%;
    width: 1920px;
    height: auto;
    color: #fff;
    @include pc-lg {
      background-image: url("@/assets/img/banner-lg.png");
    }
    @include mobile {
      background-image: url("@/assets/img/banner-sm.png");
    }
  }
  
</style>