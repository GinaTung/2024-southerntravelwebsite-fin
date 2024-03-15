<template>
  <div class="card mb-4 card-att" v-for="productsItem in serchTainan" :key="productsItem.id">
    <div class="row g-0">
      <div class="col-md-4">
        <span class="tag text-white">{{ productsItem.category }}</span>
        <div class="card-att-img h-100">
          <img
            :src="productsItem.imageUrl"
            class="card-img-top img-fluid"
            :alt="productsItem.title"
          />
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
              <span
                class="badge rounded-pill bg-primary-200 text-primary-600 fw-bold me-1 py-1 px-4 fs-6"
                >{{ productsItem.tag_2 }}</span
              >
            </div>

            <div class="row">
              <div class="col-8 col-sm-8 my-2">
                <div v-for="item in newProductsDes" :key="item.id">
                  <div v-if="item.id === productsItem.id">
                    <p v-for="description in item.descriptions" :key="description">
                      {{ truncateContent(description, 85) }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="d-flex flex-column">
                  <p class="fs-4 fs-lg-5 fs-xl-4 text-decoration-line-through text-end">
                    NT{{ thousand(productsItem.origin_price) }}
                  </p>
                  <div class="d-flex flex-sm-column align-items-end justify-content-end">
                    <p class="text-danger fw-bold d-none d-sm-block">促銷價</p>
                    <p class="fs-2 fs-sm-3 fs-lg-4 fs-xl-2 text-danger">
                      NT{{ thousand(productsItem.price) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12"></div>
          </div>
          <div class="card-footer bg-transparent border-0 pt-0 pb-4 px-3 px-md-4">
            <div class="d-flex align-items-end">
              <router-link
                :to="{
                  name: 'TouristSinglePackage',
                  params: { category: productsItem.category, title: productsItem.title }
                }"
                class="btn-outline-square w-100 me-2 px-2 px-md-3"
                type="button"
                >行程介紹</router-link
              >
              <a
                class="btn-square w-100 ms-2 px-2 px-md-3"
                @click="addToCart(productsItem.id, quantity, productsItem.price)"
                type="button"
                >預約套裝行程</a
              >
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
      searchKaohsiung: [],
      enabledProducts: [],
      carts: [],
      quantity: 3,
      newQty: '',
      newCarts: [],
      cartId: null,
      userId: '',
      token: ''
    }
  },
  methods: {
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
          // console.log(err)
          alert(`${err.message}`)
        })
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
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
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    addToCart(productId, qty = 1, price) {
      if (!this.token) {
        alert('請登入會員後，才能預約套裝行程')
      } else {
        let productExists = false

        // 檢查是否有重複產品，如果有則標記為存在
        this.newCarts.forEach((item) => {
          if (item.productId === productId && item.id) {
            productExists = true
            this.cartId = item.id
          }
        })
        // 如果產品已經存在於購物車中，則執行 put 操作
        if (productExists) {
          this.axios
            .put(`${api_url2}/carts/${this.cartId}`, {
              productId,
              qty,
              price,
              total: qty * price,
              userId: this.userId
            })
            .then((res) => {
              alert('已更新預約人數')
              this.getCart()
            })
            .catch((err) => {
              // console.error('更新預約人數失敗:', err)
              alert('更新預約人數失敗')
            })
        } else {
          // 如果產品不在購物車中，則執行 post 操作
          this.axios
            .post(`${api_url2}/carts`, {
              productId,
              qty,
              price,
              total: qty * price,
              userId: this.userId
            })
            .then((res) => {
              // console.log(res)
              alert(`已預約成功`)
              this.getCart()
            })
            .catch((err) => {
              // console.log(err);
              alert('預約失敗，再重新登入預約')
            })
        }
      }
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          // console.log(res);
          this.carts = res.data
          // console.log(this.carts);
          this.carts.forEach((item) => {
            if (item.userId === this.userId) {
              this.newCarts.push(item)
            }
          })
          // console.log(this.newCarts)
        })
        .catch((err) => {
          // console.log(err)
          alert('取得購物車資料失敗')
        })
    },
    getCookie(cookieName) {
      const cookies = document.cookie.split(';')
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === cookieName) {
          return value
        }
      }
      return null
    },
    saveCardId() {
      document.cookie = `cartId=${this.newCarts.id}; path=/;`
    }
  },
  mounted() {
    this.searchProducts()
    this.getProducts()
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
  }
}
</script>
