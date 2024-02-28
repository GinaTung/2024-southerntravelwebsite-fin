<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">南部旅遊方案</li>
      </ol>
    </nav>
    <div class="tourist-list">
      <div class="row">
        <div class="col-12 col-md-3 mb-5 mb-md-6 mb-lg-0 d-none d-lg-flex">
          <div class="border-info2 border-1 border w-100">
            <p class="fs-4 p-5 bg-primary-500 text-white">地區篩選</p>
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  data-name="全部"
                  aria-current="page"
                  to="/TouristPackage/all"
                  >全部區域<span class="">{{ enabledProducts.length }}</span
                ></router-link>
              </li>
              <li class="nav-item">

                <router-link  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  to="/TouristPackage/searchChiayi"
                  data-name="嘉義"
                  >嘉義<span class="">{{ searchChiayi.length }}</span
                ></router-link>
              </li>
              <li class="nav-item">
                <router-link  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  to="/TouristPackage/searchTainan"
                  data-name="台南"
                  >台南<span class="">{{ serchTainan.length }}</span
                ></router-link>
              </li>
              <li class="nav-item">
                <router-link  class="nav-link p-5 fs-5 link-color d-flex justify-content-between"
                  to="/TouristPackage/searchKaohsiung"
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
      text: '南部旅遊方案',
      products: [],
      user: '',
      newProductsDes: '',
      enabledProducts: [],
      searchChiayi:[],
      serchTainan:[],
      searchKaohsiung:[]
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
    searchProducts(){
      this.axios
        .get(`${api_url2}/products?category=嘉義`)
        .then((res) => {
          // console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
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
          .get(`${api_url2}/products?category=台南`)
          .then((res) => {
            // console.log(res)
            this.products = res.data
  
            this.products.forEach((item) => {
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
