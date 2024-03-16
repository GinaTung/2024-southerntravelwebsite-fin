<template>
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <CartNavbar></CartNavbar>
      </div>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th style="width: 100px"></th>
          <th style="width: 150px">圖片</th>
          <th>行程名稱</th>
          <th style="width: 160px">數量/單位</th>
          <th style="width: 100px">單價</th>
          <th class="text-end" style="width: 100px">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartsData" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="deleteCart(item.id, item.product.title)"
            >
              <!-- <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> -->
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              x
            </button>
          </td>
          <td>
            <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid" />
          </td>
          <td>
            {{ item.product.title }}
            <!-- <div class="text-success">已套用優惠券</div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group my-3">
                <button
                  class="btn btn-outline-dark rounded-0"
                  type="button"
                  v-if="item.qty > 1"
                  @click="decrementQuantity(item.id, item.qty, item.price)"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger rounded-0"
                  v-else
                  @click="deleteCart(item.id, item.product.title)"
                >
                  <i class="bi bi-trash"></i>
                </button>
                <input
                  min="1"
                  max="10"
                  type="number"
                  :disabled="item.qty > 10"
                  class="form-control rounded-0 border border-dark d-flex"
                  v-model="item.qty"
                  readonly
                />
                <button
                  class="btn btn-outline-dark rounded-0"
                  type="button"
                  @click="incrementQuantity(item.id, item.qty, item.price)"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </td>
          <td>{{ thousand(item.price) }}</td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            {{ thousand(item.final_total) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end text-success">預約</td>
          <td class="text-end text-success">{{ cartsData.length }} 項行程</td>
        </tr>
        <tr>
          <td colspan="5" class="text-end fs-5">總計</td>
          <td class="text-end fs-5">{{ thousand(cartsData.final_total) }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="d-flex">
      <div class="w-50"></div>
      <div class="w-50 d-flex">
        <a class="btn-outline-square w-100 fs-5 mt-4 me-1" @click="back" type="button">繼續預約</a>
        <router-link
          class="btn-square mt-4 fs-5 w-100"
          type="button"
          to="/cart/CartForm"
          @click="saveCartData(cartsData.final_total, cartsData.total)"
          >下一步</router-link
        >
      </div>
    </div>
  </div>
</template>
<style>
.form-control {
  padding: 0.375rem 0.5rem 0.375rem 1.5rem;
}
.number {
  border: 1px solid #43b8bd;
  width: 32px;
  height: 32px;
  background-color: #d5f3f4;
  z-index: 1;
}
@media (min-width: 768px) {
  .number {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
}
.number-active {
  background-color: #43b8bd;
  color: #fff;
}
.pay-list::before {
  content: '';
  width: 83%;
  height: 1px;
  background-color: black;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  position: absolute;
  z-index: 1;
}

.text-position {
  text-align: center;
  @media (max-width: 576px) {
    text-align: left;
  }
}
.border-top-size {
  border-top: 2px solid blue;
}
</style>

<script>
import CartNavbar from '@/components/CartNavbar.vue'

const api_url2 = import.meta.env.VITE_API_URL2
export default {
  components: {
    CartNavbar
  },
  data() {
    return {
      userId: '',
      products: [],
      enabledProducts: [],
      carts: [],
      userCarts: [],
      userProductId: [],
      cartsData: [],
      isCartProductsFetched: false,
      isGetProductsTriggered: false,
      isGetCartsTriggered: false,
      quantity: ''
    }
  },
  methods: {
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
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
          // console.log(this.enabledProducts)
          // this.isGetProductsTriggered = true
          // this.getCartProducts()
          let cartsTotal = 0
          // 遍歷每個購物車中的物品
          this.userCarts.forEach((cartItem) => {
            // 獲取該物品的 productId
            const productId = cartItem.productId

            // 在 enabledProducts 中尋找與該 productId 相匹配的產品
            const matchingProduct = this.enabledProducts.find((product) => product.id === productId)

            // 如果找到了匹配的產品
            if (matchingProduct) {
              // 將匹配的產品資料存入該物品的 product 屬性中
              cartItem.product = matchingProduct
              // 將物品的 finalTotal 加到總額中

              cartsTotal += cartItem.final_total

              // 將物品添加到 cartData 中
              this.cartsData.push(cartItem)
            }
          })
          // console.log(this.cartsData)
          this.cartsData.total = cartsTotal
          let percent = 1
          this.cartsData.final_total = cartsTotal * percent
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
    },
    getCarts() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          // console.log(res)
          this.carts = res.data
          // console.log(this.carts)
          this.carts.forEach((item) => {
            if (item.userId === this.userId) {
              this.userCarts.push(item)
            }
          })
          this.getProducts()

          // console.log(this.userCarts[0]);
          // this.isGetCartsTriggered = true
          // this.getCartProducts()
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
    },
    incrementQuantity(id, qty, price) {
      // console.log(this.userCarts);
      if (qty < 10) {
        qty += 1
        let percent = 1
        this.axios
          .patch(`${api_url2}/carts/${id}`, {
            qty,
            price,
            total: qty * price,
            final_total: qty * price * percent
          })
          .then((res) => {
            console.log(res)
            this.$router.go(0)
          })
          .catch((err) => {
            // console.log(err)
            alert('取得購物車資料失敗')
          })
      } else {
        alert('預約人數上限為10人')
      }
    },
    decrementQuantity(id, qty, price) {
      if (qty > 1) {
        qty -= 1
        let percent = 1
        this.axios
          .patch(`${api_url2}/carts/${id}`, {
            qty,
            price,
            total: qty * price,
            final_total: qty * price * percent
          })
          .then((res) => {
            console.log(res)
            this.$router.go(0)
          })
          .catch((err) => {
            // console.log(err)
            alert('更新購物車資料失敗')
          })
      }
    },
    deleteCart(id, title) {
      this.axios
        .delete(`${api_url2}/carts/${id}`)
        .then((res) => {
          console.log(res)
          alert(`已刪除${title}`)
          this.$router.go(0)
        })
        .catch((err) => {
          // console.log(err)
          alert('刪除購物車資料失敗')
        })
    },
    // getCartProducts() {
    //   if (this.isGetProductsTriggered && this.isGetCartsTriggered && !this.isCartProductsFetched) {
    //     let cartsTotal = 0
    //     // 遍歷每個購物車中的物品
    //     this.userCarts.forEach((cartItem) => {
    //       // 獲取該物品的 productId
    //       const productId = cartItem.productId

    //       // 在 enabledProducts 中尋找與該 productId 相匹配的產品
    //       const matchingProduct = this.enabledProducts.find((product) => product.id === productId)

    //       // 如果找到了匹配的產品
    //       if (matchingProduct) {
    //         // 將匹配的產品資料存入該物品的 product 屬性中
    //         cartItem.product = matchingProduct
    //         // 將物品的 finalTotal 加到總額中

    //         cartsTotal += cartItem.final_total

    //         // 將物品添加到 cartData 中
    //         this.cartsData.push(cartItem)
    //       }
    //     })
    //     let percent = 1

    //     this.axios
    //       .post(`${api_url2}/cartsData`, {
    //         data: this.cartsData,
    //         total: cartsTotal, // 將 total 加入到 post 的物件中
    //         final_total: cartsTotal * percent // 將 final_total 加入到 post 的物件中
    //       })
    //       .then((res) => {
    //         console.log(res)
    //       })
    //       .catch((err) => {
    //         // console.log(err)
    //         alert(`${err.message}`)
    //       })
    //     console.log(this.cartsData)
    //     this.isCartProductsFetched = true
    //   }
    // },
    back() {
      this.$router.back()
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
    saveCartData(final_total, total) {
      this.axios
        .post(`${api_url2}/cartsData`, {
          data: this.cartsData,
          total: total,
          final_total: final_total
        })
        .then((res) => {
          // console.log(res)
        })
        .catch((err) => {
          // console.log(err)
          alert(`儲存最終購物車資料失敗}`)
        })
    }
  },
  mounted() {
    // console.log(this.$route)
    // console.log(document.cookie)
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    // console.log(this.userId)
    // this.getProducts()
    this.getCarts()
  }
}
</script>
