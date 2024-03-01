<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">南部旅遊方案</li>
        <li class="breadcrumb-item" aria-current="page">{{ category }}</li>
        <li class="breadcrumb-item" aria-current="page">{{ packageTitle }}</li>
      </ol>
    </nav>
    <div class="row h-100" v-for="productsItem in enabledProducts" :key="productsItem.id">
      <div class="col-9">
        <div class="d-flex">
          <div class="w-5 d-flex">
            <i class="bi bi-geo-alt-fill position-relative fs-5">
              <div class="line"></div>
              <i class="bi bi-arrow-down-circle-fill arrow"></i>
            </i>
          </div>
          <div class="w-95 position-relative">
            <h4>第一天</h4>
            <ul class="nav nav-underline nav-fill mb-4 w-60" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  早上
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  下午
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div class="row">
                  <div class="w-60">
                    <div class="card-att-img card-att-img-2 h-100">
                      <img
                        :src="productsItem.imageUrl"
                        class="card-img-top img-fluid"
                        :alt="productsItem.title"
                      />
                    </div>
                  </div>
                  <div class="w-40">
                    <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
                      {{ productsItem.title }}
                    </h4>
                    <div v-for="item in newProductsDes" :key="item.id" class="mb-6">
                      <div v-if="item.id === productsItem.id">
                        <p v-for="description in item.descriptions" :key="description">
                          {{ description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                text2
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="d-flex mb-4">
          <span
            class="badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"
            >{{ category }}</span
          >
        </div>
        <h2 class="fs-2 mb-4">{{ packageTitle }}</h2>
        <div>
          <p class="fs-2 fs-lg-3 mb-2">景點行程</p>
          <div v-for="item in newProductsDes" :key="item.id" class="mb-6">
            <div v-if="item.id === productsItem.id">
              <p v-for="description in item.descriptions" :key="description">
                {{ description }}
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <p class="fs-2 fs-lg-3 fs-xl-2">{{ thousand(productsItem.origin_price) }}</p>
          <p class="fs-2 fs-lg-3 fs-xl-2">{{ thousand(productsItem.price) }}</p>
        </div>
        <div class="d-flex mb-4">
          <button type="button" class="btn btn-outline-dark rounded-0">
            <i class="bi bi-dash-lg"></i>
          </button>
          <input
            min="1"
            type="number"
            value="1"
            class="form-control text-center rounded-0 border border-dark"
            readonly
          />
          <button type="button" class="btn btn-outline-dark rounded-0">
            <i class="bi bi-plus-lg"></i>
          </button>
          <button type="button" class="btn btn-outline-dark rounded-0 ms-2">
            <i class="bi bi-heart"></i>
          </button>
        </div>
        <a class="btn-square w-100" href="#" type="button"> 加入購物車 </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.line {
  height: 95%;
  // padding: 50px 15px;
  // margin-bottom: 20px;
  display: block;
  position: absolute;
  top: 30px;
  left: 7px;
}

.line:last-of-type {
  border-left: 6px dotted #34405c;
}

.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--bs-nav-underline-border-width) solid #34405c;
}
.arrow {
  position: absolute;
  left: 0px;
  bottom: -40px;
}
// .line {
//   //  width: 1px;
//   height: 100%;
//   /* background-color: #2ecc71; */
//   transform: rotate(180deg);
//   /* transform-origin: 50% 100%; */
//   position: absolute;
//   top: 24px;
//   left: 6px;
//   border-style: dotted;
//   // border-top: 1px solid #000;
// 	background: radial-gradient(#000000, #000000 3px, transparent 3px, transparent);
// 	background-size: 25px 100%;

// }
// .line {
//   height: 15%;
//   transform: rotate(180deg);
//   position: absolute;
//   top: 26px;
//   left: 7px;
//   border-style: dotted;
// // 	background: radial-gradient(#000000, #000000 3px, transparent 3px, transparent);
// // background-size: 50px 100%;
// }
</style>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      category: '',
      packageTitle: '',
      products: [],
      newProductsDes: '',
      enabledProducts: []
    }
  },
  created() {
    // 此做法可以取出動態路由，讓ajax取出資料
    // console.log(this.$route)

    this.category = this.$route.params.category
    this.packageTitle = this.$route.params.title

    // // const seed = this.$route.params.id;
    // this.axios.get(`${api_url2}/products/${id}`).then(res=>
    // {
    //     console.log(res)
    //     this.id = id;
    // })
  },
  methods: {
    getProducts() {
      console.log(this.packageTitle)
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
            if (item.is_enabled === 1 && item.title === this.packageTitle) {
              // console.log(item)
              this.enabledProducts.push(item)
            }
          })
          // 現在 enabledProducts 將包含所有 is_enabled 為 1 的項目
          console.log(this.enabledProducts)

          this.getNewText()
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    getNewText() {
      const idDescriptionsMap = {}
      this.products.forEach((item) => {
        // 檢查 item.description 是否存在
        if (item.description) {
          const splitText = item.description.split(';')

          splitText.forEach((text) => {
            const trimmedText = text.trim()

            if (!idDescriptionsMap[item.id]) {
              idDescriptionsMap[item.id] = []
            }
            idDescriptionsMap[item.id].push(trimmedText)
          })
        }
      })

      // 將 id 與描述合併成物件
      this.newProductsDes = Object.entries(idDescriptionsMap).map(([id, descriptions]) => ({
        id,
        descriptions
      }))
      // console.log(this.newProductsDes)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
