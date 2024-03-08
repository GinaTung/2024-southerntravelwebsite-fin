<template>
  <div class="container py-10 py-lg-30">
    123
    {{ packageTitle }}
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/TouristAttractions" class="navbar-brand py-6">
            南部旅遊景點
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link
            v-if="category === '台南'"
            to="/TouristAttractions/searchTainan"
            class="navbar-brand py-6"
            >台南</router-link
          >
          <router-link
            v-else-if="category === '嘉義'"
            to="/TouristAttractions/searchChiayi"
            class="navbar-brand py-6"
            >嘉義</router-link
          >
          <router-link
            v-else-if="category === '高雄'"
            to="/TouristAttractions/searchKaohsiung"
            class="navbar-brand py-6"
            >高雄</router-link
          >
        </li>
        <li class="breadcrumb-item">
          {{ packageTitle }}
        </li>
      </ol>
    </nav>
    <singleAttraction></singleAttraction>
  </div>
</template>
<script>
import singleAttraction from '../../components/swiper/singleAttraction.vue';

export default {
  components: {
    singleAttraction
  },
  data() {
    return {
      category: '',
      packageTitle: ''
    }
  },
  methods: {
    created() {
      this.category = this.$route.params.category
      this.packageTitle = this.$route.params.title
    }
  },
  mounted() {
    // console.log(this.$route);
    this.category = this.$route.params.category
    this.packageTitle = this.$route.params.title
    console.log(this.category, this.packageTitle)
  }
}
</script>
