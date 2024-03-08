<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">南部旅遊景點</li>
      </ol>
    </nav>
    <div class="tourist-list">
      <div class="row">
        <div class="col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex">
          <div class="border-info2 border-1 border w-100 rounded-1 h-100">
            <p class="fs-4 p-5 bg-primary-500 text-white">地區篩選</p>
            <ul class="nav flex-column attractions-select">
              <li class="nav-item">
                <router-link class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  data-name="全部"
                  aria-current="page"
                  to="/TouristAttractions/all"
                  >全部區域<span class="">{{ enabledAttractions.length }}</span
                ></router-link>
              </li>
              <li class="nav-item">
                <router-link  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  to="/TouristAttractions/searchChiayi"
                  data-name="嘉義"
                  >嘉義<span class="">{{ searchChiayi.length }}</span
                ></router-link>
              </li>
              <li class="nav-item">
                <router-link  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  to="/TouristAttractions/searchTainan"
                  data-name="台南"
                  >台南<span class="">{{ serchTainan.length }}</span
                ></router-link>
              </li>
              <li class="nav-item">
                <router-link  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  to="/TouristAttractions/searchKaohsiung"
                  data-name="高雄"
                  >高雄<span class="">{{ searchKaohsiung.length }}</span
                ></router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      attractions: [],
      enabledAttractions: [],
      searchChiayi:[],
      serchTainan:[],
      searchKaohsiung:[]
    }
  },
  methods: {
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          // console.log(res)
          this.attractions = res.data
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
    searchAttractions(){
      this.axios
        .get(`${api_url2}/attractions?category=嘉義`)
        .then((res) => {
          // console.log(res)
          this.attractions = res.data

          this.attractions.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.searchChiayi.push(item)
            }
          })
          // console.log(this.searchChiayi);
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
        this.axios
          .get(`${api_url2}/attractions?category=台南`)
          .then((res) => {
            // console.log(res)
            this.attractions = res.data
  
            this.attractions.forEach((item) => {
              if (item.is_enabled === 1) {
                // console.log(item)
                this.serchTainan.push(item)
              }
            })
            // console.log(this.serchTainan)
          })
          .catch((err) => {
            // console.log(err)
            alert(`${err.message}`)
          })
          this.axios
          .get(`${api_url2}/attractions?category=高雄`)
          .then((res) => {
            // console.log(res)
            this.attractions = res.data
  
            this.attractions.forEach((item) => {
              if (item.is_enabled === 1) {
                // console.log(item)
                this.searchKaohsiung.push(item)
              }
            })
            // console.log(this.searchKaohsiung)
          })
          .catch((err) => {
            // console.log(err)
            alert(`${err.message}`)
          })
    }
  },
  mounted() {
    this.getAttractions()
    this.searchAttractions()
  }
}
</script>

<style></style>
