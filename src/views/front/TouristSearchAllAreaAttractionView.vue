<template>
  <div class="row g-3">
    <div
      class="col-12 col-md-6 col-lg-4"
      v-for="attractionItem in enabledAttractions"
      :key="attractionItem.id"
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
              {{ truncateContent(attractionItem.description, 53) }}
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
      <li class="page-item" :class="{disabled : !currentPage || currentPage ===1}">
        <a class="page-link page-link-radius-2" href="" @click.prevent="getAttractions(currentPage - 1)"
          >上一頁</a
        >
      </li>
      <li class="page-item" v-for="i in pageTotal" :key="i+123">
        <a
          class="page-link page-link-0 rounded-0"
          href=""
          :value="i"
          :class="{'active': i === currentPage}"
          @click.prevent="getAttractions(i)"
          >{{ i }}</a
        >
      </li>
      <li class="page-item">
        <a class="page-link page-link-radius" href="" @click.prevent="getAttractions(currentPage + 1)" :class="{disabled : !currentPage || currentPage === pageTotal}">下一頁</a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
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
      attractions: [],
      enabledAttractions: [],
      pageTotal: 0,
      currentPage: 1,
      limitPage:6,
      parsedLinks:''
    }
  },
  methods: {
    getAttractions(currentPage=1) {
      this.axios
        .get(`${api_url2}/attractions?_limit=${this.limitPage}&_page=${currentPage}`)
        .then((res) => {
          // console.log(res)
          var totalCount = parseInt(res.headers['x-total-count'])
          // console.log(totalCount);
          this.pageTotal = Math.ceil(totalCount / this.limitPage)
          // console.log(this.pageTotal);
          this.currentPage = currentPage
          this.attractions = res.data
          this.enabledAttractions = [] // 清空已啟用的產品列表
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.enabledAttractions.push(item)
            }
          })
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
    }
  },
  mounted() {
    this.getAttractions()
  }
}
</script>
