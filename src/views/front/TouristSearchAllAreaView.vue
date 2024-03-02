<template>
  <div class="card mb-4 card-att" v-for="productsItem in enabledProducts" :key="productsItem.id">
    <div class="row g-0">
      <div class="col-md-4">
        <span class="tag text-white">{{ productsItem.category }}</span>
        <div class="card-att-img h-100">
          <img :src="productsItem.imageUrl" class="card-img-top img-fluid" :alt="productsItem.title" />
        </div>
      </div>
      <div class="col-md-8">
        <div class="card h-100 border-0 bg-transparent">
          <div class="card-body px-3 px-md-4">
            <div class="heart3">
              <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
            </div>
            <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4 pe-8">
              {{ productsItem.title }}
            </h4>
            <div class="d-flex mb-4">
              <span class="badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6">{{
                productsItem.tag_2 }}</span>
            </div>
  
            <div class="row">
              <div class="col-12 col-sm-8 my-2">
                <div v-for="item in newProductsDes" :key="item.id">
                  <div v-if="item.id === productsItem.id">
                    <p v-for="description in item.descriptions" :key="description">
                      {{ truncateContent(description,85) }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="d-flex flex-column">
                  <p class="fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end">NT{{ thousand(productsItem.origin_price) }}</p>
                  <div class="d-flex flex-sm-column align-items-end justify-content-end">
                    <p class="text-danger fw-bold d-none d-sm-block">促銷價</p>
                    <p class="fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger">NT{{ thousand(productsItem.price) }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
  
            </div>
          </div>
          <div class="card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4">
            <div class="d-flex align-items-end">
                <router-link :to="{
                  name: 'TouristSinglePackage',
                  params: { category: productsItem.category, title: productsItem.title }
                }" class="btn-outline-square w-100 me-2 px-2 px-md-3" type="button">行程介紹</router-link>
                <a class="btn-square w-100 ms-2 px-2 px-md-3" href="#" type="button">預約套裝行程</a>
              </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example " class="my-10">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link page-link-radius-2">Previous</a>
      </li>
      <li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">1</a></li>
      <li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">2</a></li>
      <li class="page-item"><a class="page-link page-link-0 rounded-0" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link page-link-radius" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
p {
  text-align: justify; /* 將文字左右對齊 */
}
.page-item {
  .page-link-0 {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}

.page-link-radius {
  border-radius: 0 4px 4px 0 !important;
}

.page-link-radius-2 {
  border-radius: 4px 0 0 4px !important;
}
</style>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      text: '南部旅遊方案',
      products: [],
      user: '',
      newProductsDes: '',
      enabledProducts: [],
      searchChiayi: [],
      serchTainan: [],
      searchKaohsiung: []
    }
  },
  methods: {
    checkAdmin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = this.token
      if (!this.token) {
        alert(`目前未登入管理者身分，請重新登入`)
        this.$router.push({ path: '/admin/adminlogin' })
      } else {
        console.log(token, user)
        this.axios
          .post(`${api_url2}/api/users/${user}`)
          .then((res) => {
            // 登入成功
            this.userIsLoggedIn = true
          })
          .catch((err) => {
            // 登入失敗或驗證失敗
            this.userIsLoggedIn = false
            alert(`管理者身分驗證失敗，自動跳轉至登入頁面`)
            this.$router.push({ path: '/admin/adminlogin' })
          })
      }
    },
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          //   console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.enabledProducts.push(item)
            }
          })
          // 現在 enabledProducts 將包含所有 is_enabled 為 1 的項目
          //   console.log(this.enabledProducts)

          this.getNewText()
        })
        .catch((err) => {
          //   console.log(err)
          alert(`${err.message}`)
        })
    },
    thousand (data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      }
      return `$ ${data}`;
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
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
      //   console.log(this.newProductsDes)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
