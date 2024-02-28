<template>
    <div class="card mb-3 card-att" v-for="productsItem in searchKaohsiung" :key="productsItem.id">
      <div class="row g-0">
        <div class="col-md-4">
          <span class="tag text-white">{{ productsItem.category }}</span>
          <div class="card-att-img card-att-img-2 h-100">
            <img
              :src="productsItem.imageUrl"
              class="card-img-top img-fluid"
              :alt="productsItem.title"
            />
          </div>
          <div class="heart3">
            <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body px-5">
            <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
              {{ productsItem.title }}
            </h4>
  
            <div v-for="item in newProductsDes" :key="item.id">
              <div v-if="item.id === productsItem.id">
                <p v-for="description in item.descriptions" :key="description">
                  {{ description }}
                </p>
              </div>
            </div>
            <p class="card-text card-text-position">
              <a href="#" class="fs-5">more</a>
            </p>
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
            // console.log(res)
            this.products = res.data
  
            this.products.forEach((item) => {
              if (item.is_enabled === 1) {
                // console.log(item)
                this.enabledProducts.push(item)
              }
            })
            // 現在 enabledProducts 將包含所有 is_enabled 為 1 的項目
            // console.log(this.enabledProducts)
  
            this.getNewText()
          })
          .catch((err) => {
            console.log(err)
            // alert(`${err.message}`)
          })
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
        // console.log(this.newProductsDes)
      },
      searchProducts() {
        this.axios
          .get(`${api_url2}/products?category=高雄`)
          .then((res) => {
            // console.log(res)
            this.products = res.data
  
            this.products.forEach((item) => {
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
      //取得cookie資料
      // const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      // this.axios.defaults.headers.common['Authorization'] = token
      // console.log(token)
      // this.checkAdmin()
      this.searchProducts()
      this.getProducts()
    }
  }
  </script>