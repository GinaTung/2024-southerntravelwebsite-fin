<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-20">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">南部旅遊方案</li>
      </ol>
    </nav>
    <div class="tourist-list">
      <div class="row">
        <div class="col-12 col-md-3 mb-5 mb-md-6 mb-lg-0">
          <div class="border-info2 border-1 border">
            <p class="fs-4 p-5 bg-primary-500 text-white">地區篩選</p>
            <ul class="nav flex-column attractions-select">
              <li class="nav-item">
                <a
                  class="nav-link p-5 fs-5 link-color active d-flex justify-content-between"
                  data-name="全部"
                  aria-current="page"
                  href="#"
                  >全部區域<span class="attractionsNum"></span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  href="#"
                  data-name="嘉義"
                  >嘉義<span class="attractionsNum2"></span
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  href="#"
                  data-name="台南"
                  >台南<span class="attractionsNum2">0</span></a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  data-name="高雄"
                  >高雄<span class="attractionsNum2">0</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <div class="row g-3">
            <div
              class="col-12 col-md-6 col-lg-4"
              v-for="productsItem in products"
              :key="productsItem.id"
            >
              <div class="card card-att h-100">
                <span class="tag text-white">{{ productsItem.category }}</span>
                <div class="card-att-img">
                  <img :src="productsItem.imageUrl" class="card-img-top img-fluid" alt="" />
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
                        {{ productsItem.title }}
                      </h4>
                    </div>
                    <p class="card-text card-font-truncate">
                      {{ truncateContent(productsItem.content, 30) }}
                    </p>
                  </div>
                  <div class="card-footer text-end border-0">
                    <a href="#" class="fs-5 stretched-link">more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card-att {
  position: relative;
  .card-att-img {
    position: relative;
    width: 100%;
    height: 0%;
    padding-top: 90%;
    z-index: 1;
    overflow: hidden;
    // @include pad-md {
    //   padding-top: 85%;
    // }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s;
    }
    &:hover img {
      transform: scale(1.5);
      // @include pad-md {
      //   transform: scale(1.2);
      // }
    }
  }
}
</style>
<script>
const api_url = import.meta.env.VITE_API_URL
const api_path = import.meta.env.VITE_API_PATH
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      text: '南部旅遊方案',
      products: []
    }
  },
  methods: {
    checkAdmin() {
      this.axios
        .post(`${api_url}/api/user/check`)
        .then((res) => {
          // console.log(res)
          // alert(`驗證成功`);
          this.getProducts()
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.data.message}`)
        })
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          console.log(res)
          this.products = res.data
        })
        .catch((err) => {
          console.log(err)
          alert(`${err.data.message}`)
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
    //取得cookie資料
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    // console.log(token)
    this.checkAdmin()
  }
}
</script>
