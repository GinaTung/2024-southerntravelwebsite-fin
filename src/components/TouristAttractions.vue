<template>
  <div class="southern-tourist-attractions bg-light">
    <div class="container py-10 py-lg-30">
      <p class="fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center">南部旅遊景點</p>
      <p class="fs-6 fs-lg-5 text-center mb-5 mb-lg-20">Southern tourist attractions</p>
      <div class="row">
        <div class="col-12 col-lg-6 mb-5 mb-lg-0">
          <div class="card-attractions">
            <!-- 愛心點選 -->
            <div class="heart3">
              <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
            </div>
            <img
              src="../assets/img/attraction1-1.jpg"
              class="card-img-top img-fluid card-attractions-img"
              alt="嘉義公園-射日塔"
            />
            <a href="tourist-attractions.html" class="stretched-link">
              <div class="mask">
                <p class="fs-5 fs-xl-3 fw-bold mb-4">嘉義公園-射日塔</p>
                <p class="fs-6 fs-xl-5">
                  在嘉義公園內，民眾只要仰頭看，便能看見一朵巨型豔紫荊花，與藍天相輝映。豔紫荊花為嘉義市市花，透過射日塔照射，充分顯示嘉義市花之美！
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row h-100">
            <div class="col-12 col-sm-6 d-flex flex-column justify-content-between">
              <div class="image-mask mb-5 mb-lg-6">
                <!-- 愛心點選 -->
                <div class="heart3">
                 <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
                </div>
                <img
                  src="../assets/img/attraction2.png"
                  alt="Image 2"
                  class="img-size-attractions-1 image-mask-img"
                />
                <a href="tourist-attractions.html" class="stretched-link">
                  <div class="mask mask-33 flex-column">
                    <p class="fs-5 fs-xl-4 fw-bold mb-2">黃金海韻海珍珠</p>
                    <p class="fs-6">情侶必遊之地</p>
                  </div>
                </a>
              </div>
              <div class="image-mask mb-5 mb-lg-0">
                <!-- 愛心點選 -->
                <div class="heart3">
                  <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
                </div>
                <img
                  src="../assets/img/attraction5.png"
                  alt="Image 2"
                  class="img-size-attractions-2 image-mask-img"
                />
                <a href="tourist-attractions.html" class="stretched-link">
                  <div class="mask mask-62 flex-column">
                    <p class="fs-5 fs-xl-4 fw-bold mb-2">安平古堡</p>
                    <p class="fs-6">荷蘭時期遺蹟</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-6 d-flex flex-column justify-content-between">
              <div class="image-mask mb-5 mb-lg-6">
                <!-- 愛心點選 -->
                <div class="heart3">
                  <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
                </div>
                <img
                  src="../assets/img/attraction4.png"
                  alt="Image 3"
                  class="img-fluid img-size-attractions-2 image-mask-img"
                />
                <a href="tourist-attractions.html" class="stretched-link">
                  <div class="mask flex-column">
                    <p class="fs-5 fs-xl-4 fw-bold mb-2">旋轉式行人跨海大橋</p>
                    <p class="fs-6">台灣第一座</p>
                  </div>
                </a>
              </div>
              <div class="image-mask mb-5 mb-lg-0">
                <!-- 愛心點選 -->
                <div class="heart3">
                  <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
                </div>
                <img
                  src="../assets/img/attraction3.png"
                  alt="Image 4"
                  class="img-fluid img-size-attractions-1 image-mask-img"
                />
                <a href="tourist-attractions.html" class="stretched-link">
                  <div class="mask flex-column">
                    <p class="fs-5 fs-xl-4 fw-bold mb-2">愛河河畔美景</p>
                    <p class="fs-6">愛之船情侶遊覽</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      products: [],
      enabledProducts: [],
      newsLatestProductData: [],
      attractions: []
    }
  },
  methods: {
    getProducts() {
      this.axios
        .get(`${api_url2}/products?id=-c35c4Q9gWLGb7p4aWAM4&id=KvBuohr&id=xoGgJIk&id=fsfguEU`)
        .then((res) => {
          //   console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.enabledProducts.push(item)
            }
          })
          this.getNewsProductsData()
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    getNewsProductsData() {
      console.log(this.enabledProducts)
      this.enabledProducts.forEach((item) => {
        this.newsLatestProductData.push({
          type: '旅遊方案',
          id: item.id,
          category: item.category,
          startDate: item.startDate,
          endDate: item.endDate,
          title: item.title,
          imageUrl: item.imageUrl
        })
      })
      console.log(this.newsLatestProductData)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script> -->