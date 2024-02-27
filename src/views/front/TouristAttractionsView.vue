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
              class="col-4"
              v-for="articlesItem in articles"
              :key="articlesItem.id"
            >
              <div class="card card-att h-100">
                <span class="tag text-white">{{ articlesItem.author }}</span>
                <div class="card-att-img">
                  <img :src="articlesItem.image" class="card-img-top img-fluid" alt="" />
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
                        {{ articlesItem.title }}
                      </h4>
                    </div>
                    <p class="card-text card-font-truncate">
                      {{ articlesItem.description }}
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

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default{
  data(){
    return {
      data:"",
      articles:[]
    }
  },
  methods:{
    checkAdmin() {
      this.axios
        .post(`${api_url2}/users`)
        .then((res) => {
          // console.log(res)
          // alert(`驗證成功`);
          this.getArticles()
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.data.message}`)
        })
    },
    getArticles() {
      this.axios
        .get(`${api_url2}/articles`)
        .then((res) => {
          // console.log(res)
          this.articles = res.data.articles
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.data.message}`)
        })
    },
  },
  mounted(){
    //取得cookie資料
    // const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    // this.axios.defaults.headers.common['Authorization'] = token
    // console.log(token)
    // this.checkAdmin()
    this.getArticles()
  }
}
</script>

<style>
</style>
