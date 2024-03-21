<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <banner-swiper></banner-swiper>
  <div class="search-bar bg-primary-400 border-left-bottom">
    <div class="container text-center pt-10 pb-25 py-md-20">
      <p class="fs-3 text-white mb-10 fw-bold text-center">開始你的南部輕旅遊！</p>
      <div class="mx-auto" style="max-width: 856px">
        <div class="input-group position-relative flex-column">
          <div class="input-wrapper">
            <input
              type="search"
              v-model.trim="searchText"
              @input="search"
              class="form-control rounded-pill px-6 px-md-10 py-4 z-index-2 border-0 my-3 w-100"
              placeholder="輸入遊玩景點，推薦：漫遊蓮潭風光"
            />

            <a
              class="btn-cerulean-blue position-absolute search-btn-cerulean-blue-position h-70"
              type="button"
              href="#"
              @click="search"
              >GO !</a
            >
          </div>
        </div>
        <ul class="list-unstyled bg-white rounded-5">
          <template v-if="showResults && searchResults.length > 0">
            <li v-for="item in searchResults" :key="item + 123">
              <a :href="item.link">{{ item.title }}</a>
            </li>
          </template>
          <li v-if="showResults && searchResults.length === 0">無資料</li>
        </ul>
      </div>
    </div>
  </div>
  <LatestNews></LatestNews>
  <TouristAttractions></TouristAttractions>
  <AdBlock></AdBlock>
  <TouristPackage></TouristPackage>
</template>
<style lang="scss">
.input-wrapper {
  position: relative;
}
.search-btn-cerulean-blue-position {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    .search-btn-cerulean-blue-position {
      top: auto;
      bottom: 0;
      right: 0;
      transform: translateY(0);
      margin-top: 0;
      margin-right: 10px; /* 調整距離 input 的距離 */
      height: inherit; /* 繼承父元素高度 */
      display: flex;
      align-items: center; /* 垂直置中 */
      padding: 0 10px; /* 調整左右 padding */
    }
  }
}
</style>
<script>
import BannerSwiper from '../../components/swiper/BannerSwiper.vue'
import LatestNews from '../../components/LatestNews.vue'
import TouristAttractions from '@/components/TouristAttractions.vue'
import AdBlock from '../../components/AdBlock.vue'
import TouristPackage from '@/components/TouristPackage.vue'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  components: {
    BannerSwiper,
    LatestNews,
    TouristAttractions,
    AdBlock,
    TouristPackage
  },
  data() {
    return {
      isLoading: false,
      searchText: '',
      searchResults: [],
      showResults: false,
      searchData: []
    }
  },
  methods: {
    search() {
      this.axios
        .get(`${api_url2}/search`)
        .then((res) => {
          this.searchData = res.data
          // console.log(this.searchData)
        })
        .catch((err) => {
          alert(`${err.message}`)
        })
      if (this.searchText === '') {
        this.showResults = false
        return
      }
      const regex = new RegExp(this.searchText, 'i')
      // 先筛选出搜索结果
      const filteredResults = this.searchData.filter((product) => {
        // console.log(product.title)
        return regex.test(product.title) // 这里假设产品名称在 product.title 中
      })
      // 对搜索结果进行切片操作，只显示前三条记录
      this.searchResults = filteredResults.slice(0, 3)
      this.showResults = true
    }
  },
  mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 5000) // 3000 毫秒即為 3 秒
  }
}
</script>
