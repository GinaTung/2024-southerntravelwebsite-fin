<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" exact active-class="active-link">首頁</router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link
            v-if="fullPath !== '/TouristAttractions'"
            :to="{ path: '/TouristAttractions' }"
            exact
            active-class="active-link"
          >
            南部旅遊景點
          </router-link>
          <span v-else> 南部旅遊景點 </span>
        </li>
      </ol>
    </nav>
    <div class="tourist-list">
      <div class="row">
        <div class="col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex">
          <div class="border-info2 border-1 border w-100 rounded-1 h-100">
            <p class="fs-4 p-5 bg-primary-500 text-white">地區篩選</p>
            <ul class="nav flex-column">
              <li class="nav-item" v-for="(item, i) in filterCategory" :key="i">
                <a
                  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  data-name="item"
                  aria-current="page"
                  :value="item"
                  :class="{ 'active-category': selectedCategory === item }"
                  @click.prevent="filterProducts(item)"
                  >{{ item }}
                  <span>{{ filterCateNum[item] }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <div v-if="status.loadingItem" class="text-center" style="margin: 150px">
            <div
              class="spinner-border"
              role="status"
              style="width: 3rem; height: 3rem; color: #43b8bd"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-else>
            <div class="row g-3">
              <div
                class="col-12 col-md-6 col-lg-4"
                v-for="(attractionItem, index) in filteredProducts"
                :key="index + 123"
              >
                <div class="card card-att h-100">
                  <span class="tag text-white">{{ attractionItem.category }}</span>
                  <div class="card-att-img">
                    <img :src="attractionItem.imageUrl" class="img-fluid" alt="" />
                  </div>
                  <div class="heart3">
                    <i class="bi bi-heart heart-click"></i>
                  </div>
                  <div style="transform: rotate(0)">
                    <div class="card-body card-body-att">
                      <div
                        class="card-title d-flex justify-content-between align-items-center card-title-att"
                      >
                        <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att">
                          {{ attractionItem.title }}
                        </h4>
                      </div>
                      <p class="card-text card-font-truncate">
                        {{ truncateContent(attractionItem.description, 65) }}
                      </p>
                    </div>
                    <div class="card-footer text-end border-0">
                      <router-link
                        :to="{
                          name: 'TouristSingleAttraction',
                          params: { category: attractionItem.category, title: attractionItem.title }
                        }"
                        class="fs-5 stretched-link"
                        type="button"
                        >more</router-link
                      >
                      <!-- <a href="#" class="fs-5 stretched-link"></a> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example " class="my-10">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: !currentPage || currentPage === 1 }">
                  <a
                    class="page-link page-link-radius-2"
                    href=""
                    @click.prevent="getAttractions(currentPage - 1)"
                    >上一頁</a
                  >
                </li>
                <li class="page-item" v-for="i in pageTotal" :key="i + 123">
                  <a
                    class="page-link page-link-0 rounded-0"
                    href=""
                    :value="i"
                    :class="{ active: i === currentPage }"
                    @click.prevent="getAttractions(i)"
                    >{{ i }}</a
                  >
                </li>
                <li class="page-item">
                  <a
                    class="page-link page-link-radius"
                    href=""
                    @click.prevent="getAttractions(currentPage + 1)"
                    :class="{ disabled: !currentPage || currentPage === pageTotal }"
                    >下一頁</a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <!-- <router-view></router-view> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.active-category {
  color: #0a58ca !important;
  background-color: #d5f3f4;
}
.card-att .card-att-img img {
  border-radius: calc(1.25rem - 1px) calc(1.25rem - 1px) 0 0 ;
}
.page-link-radius {
  border-radius: 0 4px 4px 0 !important;
}

.page-link-radius-2 {
  border-radius: 4px 0 0 4px !important;
}
.page-link:focus {
  box-shadow: 0px;
}
.page-link.active{
  background: #43B8BD;
  border-color: #0EA0A6;
  color: #fff !important;
}
</style>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      allAttractions: [],
      enabledAttractions: [],
      searchChiayi: [],
      serchTainan: [],
      searchKaohsiung: [],
      fullPath: '',
      currentURL: '',
      selectedCategory: '全部',
      currentPage: 1,
      limitPage: 6,
      pageTotal: 0,
      attractionsCategory: [],
      isLoading: false,
      status: {
        loadingItem: false
      },
      category: '全部'
    }
  },
  computed: {
    filterCategory() {
      const array = this.attractionsCategory.map((item) => item.category)
      const uniqueCategories = [...new Set(array)]
      uniqueCategories.unshift('全部')
      return uniqueCategories
    },
    filterCateNum() {
      const cateNum = {}
      this.attractionsCategory.forEach((item) => {
        if (!cateNum[item.category]) {
          cateNum[item.category] = 1
        } else {
          cateNum[item.category] += 1
        }
      })
      cateNum['全部'] = this.attractionsCategory.length
      return cateNum
    },
    filteredProducts() {
      if (this.selectedCategory === '全部' || !this.selectedCategory) return this.enabledAttractions
      return this.enabledAttractions.filter((product) => product.category === this.selectedCategory)
    }
  },
  watch: {
    $route(to, from) {
      // 當路由變化時觸發
      this.currentURL = to.fullPath
      if (this.$root.navigatedFromHeader && to.fullPath !== '/TouristAttractions') {
        this.selectedCategory = '全部'
        this.status.loadingItem = true
        this.getAttractions() // 根据需要调整参数
        // 重置标志
        this.$root.navigatedFromHeader = false
      }
    }
  },
  created() {
    this.category = this.$route.query.category
    // 根据URL中的category参数来设置selectedCategory
    this.selectedCategory = this.category

    // 获取相应的项目列表
    this.getAttractions()
  },
  methods: {
    getAttractions(currentPage = 1) {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractionsCategory = res.data.filter((item) => item.is_enabled === 1)
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
        })
        .catch((err) => {
          alert(`${err.message}`)
        })
      // !this.selectedCategory 这个判断语句用于检查是否有从 B 页面传递过来的区域值。
      if (this.selectedCategory === '全部' || !this.selectedCategory) {
        this.axios
          .get(`${api_url2}/attractions?_limit=${this.limitPage}&_page=${currentPage}`)
          .then((res) => {
            var totalCount = parseInt(res.headers['x-total-count'])
            this.pageTotal = Math.ceil(totalCount / this.limitPage)
            this.currentPage = currentPage
            this.allAttractions = res.data
            this.enabledAttractions = this.allAttractions.filter((item) => item.is_enabled === 1)
            this.status.loadingItem = false
            this.$router.push({
              path: '/TouristAttractions',
              query: { category: this.selectedCategory, page: this.currentPage }
            })
            window.scrollTo(0, 0)
          })
          .catch((err) => {
            alert(`${err.message}`)
          })
      } else {
        // 否则，根据selectedCategory进行过滤
        this.axios
          .get(
            `${api_url2}/attractions?category=${this.selectedCategory}&_limit=${this.limitPage}&_page=${currentPage}`
          )
          .then((res) => {
            var totalCount = parseInt(res.headers['x-total-count'])
            this.pageTotal = Math.ceil(totalCount / this.limitPage)
            this.currentPage = currentPage
            this.allAttractions = res.data
            this.enabledAttractions = this.allAttractions.filter((item) => item.is_enabled === 1)
            this.status.loadingItem = false
            this.$router.push({
              path: '/TouristAttractions',
              query: { category: this.selectedCategory, page: this.currentPage }
            })
            window.scrollTo(0, 0)
          })
          .catch((err) => {
            alert(`${err.message}`)
          })
      }
    },
    filterProducts(category) {
      // 點擊篩選列時觸發，更新選擇的類別
      this.selectedCategory = category
      // console.log(category)
      this.status.loadingItem = true
      this.getAttractions()
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
    }
  },
  mounted() {
    this.isLoading = true
    this.getAttractions()
    window.scrollTo(0, 0)
    this.fullPath = this.$route.fullPath
  }
}
</script>

<style></style>
