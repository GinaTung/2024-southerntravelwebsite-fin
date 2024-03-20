<template>
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <CartNavbar></CartNavbar>
      </div>
    </div>
    <div class="mb-4">
      <p class="d-grid gap-2">
        <button
          class="btn btn-primary-600 border-top"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          @click="toggleOpen"
        >
          總計：{{ thousand(total) }}元<br />購買清單
          <i class="bi bi-chevron-down" v-if="isOpen === false"></i>
          <i class="bi bi-chevron-up" v-else></i>
        </button>
      </p>
      <div class="collapse" id="collapseExample" ref="headerCollapse" v-show="isOpen">
        <div class="card card-body rounded-0">
          <div class="row p-4 p-md-6" v-for="item in userCart" :key="item.id">
            <div class="col-12 col-md-5 col-lg-4">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid h-100" />
            </div>
            <div class="col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between">
              <div>
                <h4 class="mt-4 mt-md-0 mb-4">套裝行程名稱：{{ item.product.title }}</h4>
                <h5 class="mb-4">單價：{{ thousand(item.product.price) }}</h5>
                <h5 class="mb-4">預約數量：{{ item.qty }} 位</h5>
                <h5 class="mb-4">總計：{{ thousand(item.final_total) }}</h5>
              </div>
              <div>
                <button
                  type="button"
                  class="btn-turquoise border-0 rounded-1"
                  @click="forId(item.product.id, item.product.title)"
                >
                  查看更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <p class="d-grid gap-2">
        <button
          class="btn btn-primary-600 border-top"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOrder"
          aria-expanded="false"
          aria-controls="collapseOrder"
          @click="toggleOpenOrder"
        >
        訂單資料及收件方式
          <i class="bi bi-chevron-down" v-if="isOrderOpen === false"></i>
          <i class="bi bi-chevron-up" v-else></i>
        </button>
      </p>
      <div class="collapse" id="collapseOrder" ref="orderCollapse" v-show="isOrderOpen">
        <div class="card card-body rounded-0">
          <div class="row p-4 p-md-5">
            <!-- {{ userOrderData_user }} -->
            <div class="col-12 col-md-6 col-lg-6">
              <h5>主要聯繫人名字：{{ userOrderData_user.name }}</h5>
              <h5>主要聯繫人電話：{{ userOrderData_user.tel }}</h5>
              <h5>主要聯繫人身分證字號：{{ userOrderData_user.memberId }}</h5>
              <h5>主要聯繫人護照號碼：{{ userOrderData_user.passport }}</h5>
             
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <h5>主要聯繫人地址：{{ userOrderData_user.address }}</h5>
              <h5>收取方式：{{ userOrderData_user.shippingMethod }}</h5>
              <h5>備註：{{ userOrderData_user.comment }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 mb-4">
        <h3 class="mb-4">付款方式</h3>
        <div class="mb-4 d-flex">
          <div class="form-check me-4">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="帳號匯款"
              v-model="user.payMethod"
            />
            <label class="form-check-label" for="flexRadioDefault1"> 帳號匯款</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="信用卡付款"
              v-model="user.payMethod"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">信用卡付款</label>
          </div>
        </div>
        <div v-if="user.payMethod === '信用卡付款'">
          <label for="floatingAddress" class="fs-5 mb-4">信用卡卡號</label>
          <div class="row g-3 d-flex mb-4">
            <div class="col-3 d-flex">
              <input
                type="text"
                class="form-control rounded-1"
                placeholder="4622"
                id="floatingAddress"
                aria-label="First name"
              />
            </div>
            <div class="col-3 d-flex">
              <input
                type="text"
                class="form-control rounded-1"
                placeholder="2223"
                aria-label="Last name"
              />
            </div>
            <div class="col-3 d-flex">
              <input
                type="text"
                class="form-control rounded-1"
                placeholder="3323"
                aria-label="Last name"
              />
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control rounded-1"
                placeholder="3231"
                aria-label="Last name"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="floatingDate" class="fs-5 mb-4">信用卡有效月年</label>
            <input
              type="month"
              class="form-control rounded-1"
              id="floatingDate"
              placeholder="03/2024"
            />
          </div>
          <div class="mb-4">
            <label for="floatingDate" class="fs-5 mb-4">信用卡背後末三碼</label>
            <input
              type="number"
              class="form-control rounded-1"
              id="floatingDate"
              placeholder="123"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
        <a class="btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1" @click="backPage" type="button">上一步</a>
        <a
          class="btn-square mt-4 fs-5 w-50 w-md-25"
          type="button"
          href="#/cart/orderDone"
          @click="updateOderData"
          >下一步</a
        >
    </div>
  </div>
  <UserProductModal
    ref="userProductModal"
    :userCart="userCart"
    :productId="productId"
    :productTitle="productTitle"
  />
</template>
<style>
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
.arrow-rotated {
  transform: rotate(-180deg);
}
.border-top {
  border-radius: 12px 12px 0 0;
}
</style>
<script>
import UserProductModal from '@/components/UserProductModal.vue'
import CartNavbar from '@/components/CartNavbar.vue'
import Collapse from 'bootstrap/js/dist/collapse'
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  components: {
    CartNavbar,
    UserProductModal
  },
  data() {
    return {
      cartsData: [],
      isOpen: false,
      isOrderOpen: false,
      headerCollapse: {},
      products: [],
      product: {},
      cartTotal: 0,
      orderData: [],
      userOrderData: [],
      userOrderData_user: '',
      user: {
        payMethod: '信用卡付款'
      },
      product_id: '',
      userId: '',
      cartDataId: '',
      userCart: [],
      total: 0,
      productId: '',
      productTitle: '',
      orderId: 0
    }
  },
  watch: {
    $route() {
      this.headerCollapse.hide()
      this.orderCollapse.hide()
    }
  },
  methods: {
    backPage() {
      this.$router.go(-1)
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    toggleOpenOrder() {
      this.isOrderOpen = !this.isOrderOpen
    },
    forId(id, title) {
      // console.log(id,title);
      this.productId = id
      this.productTitle = title
      this.$refs.userProductModal.openModal()
    },
    getCart() {
      this.axios
        .get(`${api_url2}/cartsData`)
        .then((res) => {
          // console.log(res.data)
          this.cartsData = res.data
          this.cartsData.forEach((item) => {
            if (item.status === false) {
              item.data.forEach((dataItem) => {
                if (dataItem.userId === this.userId) {
                  this.userCart.push(dataItem)
                }
              })
            }
          })

          // console.log(this.userCart)
          this.userCart.forEach((item) => {
            this.total += item.final_total
          })
          // console.log(this.total);
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err}`)
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
    deleteCartsUSerData() {
      // 使用者的 userId
      // const userId = 4
      // console.log(`Successfully deleted cart with ID: ${this.userId}`)
      // 取得符合 userId 的購物車 ID 列表
      this.axios
        .get(`${api_url2}/carts?userId=${this.userId}`)
        .then((res) => {
          const cartIds = res.data.map((cart) => cart.id)
          // console.log(cartIds)
          // 逐一刪除每個購物車
          cartIds.forEach((cartId) => {
            this.axios
              .delete(`${api_url2}/carts/${cartId}`)
              .then((res) => {
                // console.log(`Successfully deleted cart with ID: ${cartId}`)
              })
              .catch((err) => {
                console.error(`Failed to delete cart with ID: ${cartId}`, err)
              })
          })
        })
        .catch((err) => {
          console.error('Error fetching cart IDs:', err)
        })
    },
    changeCartsDataStatus() {
      // console.log(this.orderId)
      this.axios
        .patch(`${api_url2}/cartsData/${this.cartDataId}`, {
          status: true,
          orderId:this.orderId
        })
        .then((res) => {
          // console.log('修改ok')
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err}`)
        })
    },
    getOrderData() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          this.orderData = res.data
          // console.log(this.orderData)
          this.orderData.forEach((item) => {
            if (item.user.userId === this.userId && item.user.status === false) {
              this.userOrderData = item
              this.orderId = item.id
            }
          })

          // console.log(this.orderId)
          this.userOrderData_user = this.userOrderData.user
          // this.updateOderData()
          this.changeCartsDataStatus()
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    updateOderData() {
      // console.log(this.shoppingData)
      this.getOrderData()
      this.deleteCartsUSerData()
      this.changeCartsDataStatus()

      this.orderData.forEach((item) => {
        if (item.user.userId === this.userId && item.user.cartDataId === this.cartDataId) {
          const updatedUser = {
            create_at:new Date(),
            name: item.user.name,
            email: item.user.email,
            tel: item.user.tel,
            address: item.user.address,
            birthday: item.user.birthday,
            comment: item.user.comment,
            shippingMethod: item.user.shippingMethod,
            userId: item.user.userId,
            cartDataId: item.user.cartDataId,
            passport: item.user.passport,
          memberId: item.user.memberId,
          appellation:item.user.appellation,
            status: false,
            payMethod: this.user.payMethod
          }
          this.axios
            .patch(`${api_url2}/orders/${item.id}`, {
              user: updatedUser,
              status: false,
              billStatus: false,
              checkDataStatus: false
            })
            .then((res) => {
              // console.log('ss')
              document.cookie = `orderId=${item.id}`
              this.$router.go(0)
              document.cookie = 'cartDataId=; expires='
            })
            .catch((err) => {
              console.log(err)
              // alert(`${err.message}`)
            })
        }
      })
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    }
  },
  mounted() {
    // console.log(document.cookie)
    const cookieUserId = this.getCookie('userId')
    const cookieCartDataId = this.getCookie('cartDataId')
    this.userId = cookieUserId * 1
    this.cartDataId = cookieCartDataId * 1
    this.getCart()
    this.getOrderData()
    // this.changeCartsDataStatus()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    // this.orderCollapse = new Collapse(this.$refs.orderCollapse, { toggle: false })
  }
}
</script>
