<template>
  <BannerBlock />
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
            會員中心
        </li>
        <li class="breadcrumb-item">
            我的收藏
        </li>
      </ol>
    </nav>
    <h4 class="border-start border-primary-500 border-5 mb-4 d-none d-md-block">
      <span class="fs-4 fw-bold ps-3">會員中心</span>
    </h4>
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3 d-none d-md-block">
        <ul class="list-group rounded-0">
          <li class="list-group-item list-group-item-action rounded-0" aria-current="true">
            <router-link
              to="/profile/favorites"
              class="d-flex justify-content-between align-items-center fs-5"
              >我的收藏
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-9">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import BannerBlock from '@/components/BannerBlock.vue'
export default {
  components: {
    BannerBlock
  }
}
</script>