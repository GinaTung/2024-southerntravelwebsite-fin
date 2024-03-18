<template>
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
        <tbody>
          <tr v-if="cartsData.length === 0">
            <td colspan="6" class="text-center">購物車是空的</td>
          </tr>
          <tr v-for="item in cartsData" :key="item.id" v-else>
            <td data-th="">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="deleteCart(item.id, item.product.title)"
              >
                <i class="bi bi-x"></i>刪除
              </button>
            </td>
            <td data-th="圖片" class="">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid" />
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
                    v-if="item.qty > 1"
                    @click="decrementQuantity(item.id, item.qty, item.price)"
                  >
                    <i class="bi bi-dash-lg"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger rounded-0 btn-sm"
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
                    style="text-align: center"
                  />
                  <button
                    class="btn btn-outline-dark rounded-0 btn-sm"
                    type="button"
                    @click="incrementQuantity(item.id, item.qty, item.price)"
                  >
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
              <!-- <small class="text-success">折扣價：</small> -->
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="tr-border-bottom-0">
            <td colspan="6" class="text-end text-success">
              <span class="td-p-right">預約</span>
              {{ cartsData.length }} 項行程
            </td>
            <!-- <td class="text-end text-success"></td> -->
          </tr>
          <tr class="tr-border-bottom-0">
            <td colspan="6" class="text-end fs-5">
              <span class="td-p-right">總計 </span>
              {{ thousand(cartsData.final_total) }}
            </td>
            <!-- <td class="text-end fs-5"></td> -->
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="d-flex justify-content-between">
      <!-- <div class="w-md-50 d-none"></div> -->

        <a class="btn-outline-square w-50 w-md-25 fs-5 mt-4 me-1" @click="back" type="button">繼續預約</a>

        <router-link
          class="btn-square mt-4 fs-5 w-50 w-md-25"
          type="button"
          to="/cart/CartForm"
          @click="saveCartData(cartsData.final_total, cartsData.total)"
          >下一步</router-link
        >

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
    /*最重要的就是這串*/
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    /* margin-right: 10px; */
    /* color: #D20B2A; */
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
      quantity: '',
      cartIdData: [],
      resData:[]
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
          this.cartsData.total = cartsTotal
          let percent = 1
          this.cartsData.final_total = cartsTotal * percent
          // console.log(this.cartsData)
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
        // console.log(res.data)
        this.cartIdData = res.data
        // console.log(this.cartIdData);
      })
    },
    saveCartData(final_total, total) {
      // console.log(final_total,total);
      // 判斷 cartsData 中是否存在該使用者的資料
      const userExists = this.cartIdData.some(
        (item) => item.userId === this.userId && item.status === false
      )
      console.log(userExists);
      let cartDataId = 0
      this.cartIdData.forEach((item) => {
        if (item.userId === this.userId && item.status === false) {
          cartDataId = item.id
        }
      })
      console.log(cartDataId);

      if (userExists && cartDataId !== 0) {
        // 如果使用者資料已存在，執行 PUT 請求
        this.axios
          .put(`${api_url2}/cartsData/${cartDataId}`, {
            data: this.cartsData,
            total: total,
            final_total: final_total,
            status: false,
            userId: this.userId,
            orderStatus: false,
            orderStatus: false
          })
          .then((res) => {
            // console.log(res)
            document.cookie = `cartDataId=${cartDataId}`
            console.log("s");
            this.getCartSData()
          })
          .catch((err) => {
            console.log(err)
            alert(`更新購物車資料失敗`)
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
            console.log(res.data.id);
            // console.log("sss")
            // this.resData = res.data;
            // resData.forEach(item=>{
            //   cartDataId = item.id
            //   console.log(item.id);
            // })
            // console.log(cartDataId);
            document.cookie = `cartDataId=${res.data.id}`
            this.getCartSData()
          })
          .catch((err) => {
            console.log(err);
            alert(`儲存購物車資料失敗`)
          })
      }
    }
  },
  mounted() {
    // console.log(document.cookie)
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    // console.log(this.userId)
    this.getCarts()
    this.getCartSData()
  }
}
</script>
