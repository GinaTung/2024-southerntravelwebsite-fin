<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <CartNavbar></CartNavbar>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table align-middle table-rwd">
        <thead>
          <tr class="tr-only-hide">
            <th style="width: 100px"></th>
            <th style="width: 170px">圖片</th>
            <th style="width: 170px">行程名稱</th>
            <th style="width: 170px">數量/單位</th>
            <th style="width: 100px" class="text-end">單價</th>
            <th class="text-end" style="width: 100px">小計</th>
          </tr>
          <tr class="d-md-none" v-if="cartsData.length === 0">
            <th style="width: 80px"></th>
            <th style="width: 170px">圖片</th>
            <th style="width: 170px">行程名稱</th>
            <th style="width: 170px">數量/單位</th>
            <th style="width: 100px" class="text-end">單價</th>
            <th class="text-end" style="width: 100px">小計</th>
          </tr>
        </thead>
        <template v-if="status.loadingItem">
          <tbody>
            <tr>
              <td colspan="6" class="text-center" style="height: 150px">
                <div
                  class="spinner-border"
                  role="status"
                  style="width: 3rem; height: 3rem; color: #43b8bd"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </td>
            </tr>
          </tbody>
        </template>

        <template v-else>
          <tbody>
            <tr v-if="cartsData.length === 0">
              <td colspan="6" class="text-center">購物車是空的</td>
            </tr>
            <tr v-for="item in cartsData" :key="item.id" v-else>
              <td data-th="">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelCartModal(item.productId, item.product.title, item.id, item.qty)"
                >
                  <i class="bi bi-x"></i>刪除
                </button>
              </td>
              <td data-th="圖片" class="">
                <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid rounded-2 mt-1" />
              </td>
              <td data-th="行程名稱" class="fs-6 pb-0 pb-md-2">
                <span class="td-p-left">
                  {{ item.product.title }}
                </span>
                <!-- <div class="text-success">已套用優惠券</div> -->
              </td>
              <td class="py-0 py-md-2">
                <div class="td-number-direction">
                  <span class="fw-bold d-md-none fs-6">數量/單位</span>
                  <div class="input-group my-3 w-length">
                    <button
                      class="btn btn-outline-dark rounded-0 btn-sm"
                      type="button"
                      :disabled="item.qty === 1"
                      @click="decrementQuantity(item.id, item.qty, item.price)"
                    >
                      <span
                        class="spinner-border spinner-grow-sm"
                        role="status"
                        v-if="status.loadingItem4 === item.id"
                      ></span>
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <input
                      min="1"
                      max="10"
                      type="number"
                      :disabled="item.qty > 10"
                      class="form-control rounded-0 border border-dark d-flex"
                      v-model="item.qty"
                      readonly
                      style="text-align: center"
                    />
                    <button
                      class="btn btn-outline-dark rounded-0 btn-sm"
                      type="button"
                      @click="
                        incrementQuantity(item.id, item.qty, item.price, item.product.max_travelers)
                      "
                    >
                      <span
                        class="spinner-border spinner-grow-sm"
                        role="status"
                        v-if="status.loadingItem2 === item.id"
                      ></span>
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td data-th="單價" class="text-end">
                <span class="td-p-left">{{ thousand(item.price) }}</span>
              </td>
              <td class="text-end" data-th="小計">
                <span class="td-p-left">{{ thousand(item.final_total) }}</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="tr-border-bottom-0">
              <td colspan="6" class="text-end text-success">
                <span class="td-p-right">預約</span>
                {{ cartsData ? cartsData.length : 0 }} 項旅遊方案
              </td>
            </tr>
            <tr class="tr-border-bottom-0">
              <td colspan="6" class="text-end fs-5">
                <span class="td-p-right">總計 </span>
                {{
                  cartsData && cartsData.final_total !== undefined
                    ? thousand(cartsData.final_total)
                    : 0
                }}
                元
              </td>
            </tr>
          </tfoot>
        </template>
      </table>
    </div>
    <div class="d-flex justify-content-between">
      <router-link
        class="btn-outline-square w-50 w-md-25 fs-5 mt-4 me-1"
        to="/TouristPackage"
        @click="redirectToA('全部')"
        >繼續預約</router-link
      >
      <button
        class="btn btn-danger mt-4 fs-5 w-50 w-md-25 disabled btn-danger-rounded"
        type="button"
        v-if="cartsLength === 0"
      >
        請預約旅遊方案
      </button>
      <router-link
        v-else
        class="btn-square mt-4 fs-5 w-50 w-md-25"
        to="/cart/CartForm"
        @click="saveCartData(cartsData.final_total, cartsData.total)"
        >下一步</router-link
      >
    </div>
  </div>

  <!-- DelCartModal -->
  <del-cart-modal
    ref="delModal"
    :user-carts="userCarts"
    :delete-cart="deleteCart"
    :save-carts-del-modal="saveCartsDelModal"
  ></del-cart-modal>
</template>

<script>
import CartNavbar from '@/components/CartNavbar.vue'
import DelCartModal from '@/components/DelCartModal.vue'
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert.js'

export default {
  components: {
    CartNavbar,
    DelCartModal
  },
  data() {
    return {
      userId: '',
      products: [],
      enabledProducts: [],
      carts: [],
      userCarts: [],
      newCarts: [],
      saveCartsDelModal: {},
      cartsData: [],
      isCartProductsFetched: false,
      isGetProductsTriggered: false,
      isGetCartsTriggered: false,
      quantity: '',
      cartIdData: [],
      resData: [],
      isLoading: false,
      status: {
        loadingItem: false,
        loadingItem2: '',
        loadingItem3: '',
        loadingItem4: '',
        loadingItem5: ''
      },
      cartsLength: 0
    }
  },
  methods: {
    redirectToA(category) {
      this.$root.navigatedFromHeader = true
      this.$router.push({ path: '/TouristPackage', query: { category: category } })
    },
    getCarts() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.carts = res.data
          this.carts.forEach((item) => {
            if (item.userId === this.userId) {
              this.userCarts.push(item)
            }
          })
          this.cartsLength = this.userCarts.length
          this.getProducts()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
        })
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.userCarts = res.data.filter((item) => item.userId === this.userId) // 只保留当前用户的购物车数据
          window.scrollTo(0, 0)
          this.cartsLength = this.userCarts.length
          if (this.userCarts.length === 0) {
            // 如果购物车没有任何内容，则将购物车数量设置为0
            this.$emitter.emit('updateCartNum', 0)
            // 顯示提示訊息
            sweetAlert.fourLayerCheckType(
              'warning',
              '目前無購物車資料',
              '將在',
              '秒後自動跳轉至旅遊景點方案頁面',
              '預約購買旅遊方案'
            )
            setTimeout(() => {
              // 將使用者導向到旅遊景點方案頁面
              this.$router.push({ path: '/TouristPackage' })
            }, 11000)
          } else {
            // 如果购物车有内容，则将购物车数量设置为购物车数据的长度
            this.$emitter.emit('updateCartNum', this.userCarts.length)
          }
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
        })
    },
    deleteCart(id, title) {
      this.status.loadingItem3 = id
      this.status.loadingItem = true
      this.$refs.delModal.closeModal()
      this.axios
        .delete(`${api_url2}/carts/${id}`)
        .then((res) => {
          this.status.loadingItem3 = ''
          //渲染資料是cartsData，非carts
          this.cartsData = this.cartsData.filter((item) => item.id !== id)
          let cartsTotal = 0
          this.cartsData.forEach((item) => {
            cartsTotal += item.final_total
          })
          this.cartsData.total = cartsTotal
          let percent = 1
          this.cartsData.final_total = cartsTotal * percent
          this.status.loadingItem = false
          this.getCart()
        })
        .catch((err) => {
          this.status.loadingItem3 = ''
          sweetAlert.threeLayerCheckType('error', `刪除購物車資料失敗`)
          this.status.loadingItem = false
        })
    },
    openDelCartModal(productId, productTitle, cartId, qty) {
      if (!Array.isArray(this.userCarts)) {
        this.userCarts = []
      }
      this.saveCartsDelModal = { cartId, productId, productTitle, qty }
      this.$refs.delModal.openModal()
    },
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
          this.products = res.data
          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledProducts.push(item)
            }
          })
          let cartsTotal = 0
          this.userCarts.forEach((cartItem) => {
            // 獲取該物品的 productId
            const productId = cartItem.productId
            // 在 enabledProducts 中尋找與該 productId 相匹配的產品
            const matchingProduct = this.enabledProducts.find((product) => product.id === productId)

            // 如果找到了匹配的產品
            if (matchingProduct) {
              cartItem.product = matchingProduct
              cartsTotal += cartItem.final_total
              this.cartsData.push(cartItem)
            }
          })
          this.isLoading = false
          this.cartsData.total = cartsTotal
          let percent = 1
          this.cartsData.final_total = cartsTotal * percent
        })
        .catch((err) => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `取得產品資料失敗`)
        })
    },
    incrementQuantity(id, qty, price, maxNum) {
      this.status.loadingItem2 = id
      if (qty < maxNum) {
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
            this.status.loadingItem2 = ''
            const itemIndex = this.cartsData.findIndex((item) => item.id === id)
            if (itemIndex !== -1) {
              this.cartsData[itemIndex].qty = qty
              this.cartsData[itemIndex].final_total = qty * price * percent
              let cartsTotal = 0
              this.cartsData.forEach((item) => {
                cartsTotal += item.final_total
              })
              this.cartsData.total = cartsTotal
              this.cartsData.final_total = cartsTotal * percent
            }
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `增加購物車預約數量失敗`)
          })
      } else {
        this.status.loadingItem2 = ''
        sweetAlert.threeLayerCheckType('warning', `預約人數上限為${maxNum}人`)
      }
    },
    decrementQuantity(id, qty, price) {
      this.status.loadingItem4 = id
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
            this.status.loadingItem4 = ''
            const itemIndex = this.cartsData.findIndex((item) => item.id === id)
            if (itemIndex !== -1) {
              this.cartsData[itemIndex].qty = qty
              this.cartsData[itemIndex].final_total = qty * price * percent
              let cartsTotal = 0
              this.cartsData.forEach((item) => {
                cartsTotal += item.final_total
              })
              this.cartsData.total = cartsTotal
              this.cartsData.final_total = cartsTotal * percent
            }
          })
          .catch((err) => {
            this.status.loadingItem4 = ''
            alert('更新購物車資料失敗')
          })
      } else {
        this.status.loadingItem2 = ''
      }
    },
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
    getCartSData() {
      this.axios.get(`${api_url2}/cartsData`).then((res) => {
        this.cartIdData = res.data
      })
    },
    saveCartData(final_total, total) {
      // 判斷 cartsData 中是否存在該使用者的資料
      const userExists = this.cartIdData.some(
        (item) => item.userId === this.userId && item.status === false
      )
      let cartDataId = 0
      this.cartIdData.forEach((item) => {
        if (item.userId === this.userId && item.status === false) {
          cartDataId = item.id
        }
      })

      if (userExists && cartDataId !== 0) {
        // 如果使用者資料已存在，執行 PUT 請求
        this.axios
          .put(`${api_url2}/cartsData/${cartDataId}`, {
            data: this.cartsData,
            total: total,
            final_total: final_total,
            status: false,
            userId: this.userId,
            orderStatus: false
          })
          .then((res) => {
            document.cookie = `cartDataId=${cartDataId}`
            this.getCartSData()
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `更新購物車資料失敗`)
          })
      } else {
        // 如果使用者資料不存在，執行 POST 請求
        this.axios
          .post(`${api_url2}/cartsData`, {
            data: this.cartsData,
            total: total,
            final_total: final_total,
            status: false,
            userId: this.userId,
            orderStatus: false
          })
          .then((res) => {
            document.cookie = `cartDataId=${res.data.id}`
            this.getCartSData()
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `儲存購物車資料失敗`)
          })
      }
    }
  },
  mounted() {
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    this.isLoading = true
    this.getCarts()
    this.getCartSData()
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
.form-control {
  padding: 0.375rem 0.5rem 0.375rem 1.5rem;
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
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(
    .invalid-tooltip
  ):not(.invalid-feedback) {
  margin-right: calc(1px * -0);
}
@media (min-width: 768px) {
  .d-lg-none-thead {
    display: none;
  }
}

@media (max-width: 768px) {
  .table-rwd {
    min-width: 100%;
  }
  .table > :not(caption) > * > * {
    border-bottom-width: 0px;
  }
  /*針對tr去做隱藏*/
  tr.tr-only-hide {
    display: none !important;
  }
  /*讓tr變成區塊主要讓他有個區塊*/
  .table-rwd tr {
    display: block;
    /* border: 1px solid #ddd; */
    margin-top: 5px;
  }
  .table-rwd td {
    text-align: left;
    font-size: 15px;
    overflow: hidden;
    width: 100%;
    display: block;
  }
  .td-only-hide {
    display: none !important;
  }
  .table-rwd td:before {
    /*最重要的就是這串*/
    content: attr(data-th) ' ';
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
  }
  .table-rwd td .td-p-left {
    padding-left: 8px;
  }
  .table-rwd td .td-p-right {
    padding-right: 8px;
  }

  /*當RWD縮小的時候.table-bordered 會有兩條線，所以針對.table-bordered去做修正*/
  .table-rwd.table-bordered td,
  .table-rwd.table-bordered th,
  .table-rwd.table-bordered {
    border: 0;
  }

  .table-rwd tr {
    border: 1px solid #ddd;
    padding: 5px;
  }
  .tr-border-bottom-0 {
    border: 0px solid #ddd !important;
  }
  .td-number-direction {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .w-length {
    width: 50%;
    text-align: center;
  }
}
.btn-danger-rounded {
  border-radius: 8px !important;
}
.swal2-loader {
  display: none;
}
</style>
