<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
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
        <div class="card card-body rounded-bottom">
          <div class="row py-4 py-md-5 px-4 px-md-10" v-for="item in userCart" :key="item.id">
            <div class="col-12 col-md-5 col-lg-4">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid h-100 rounded-2" />
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
        <div class="card card-body rounded-bottom">
          <div class="row py-4 py-md-5 px-4 px-md-10">
            <h4 class="text-center mb-4">主要聯繫人資料</h4>
            <div class="col-12 col-md-6 col-lg-6">
              <h5 class="mb-4">姓名：{{ userOrderData_user.name }}</h5>
              <h5 class="mb-4">電話：{{ userOrderData_user.tel }}</h5>
              <h5 class="mb-4">身分證字號：{{ userOrderData_user.memberId }}</h5>
              <h5 class="mb-4">護照號碼：{{ userOrderData_user.passport }}</h5>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <h5 class="mb-4">地址：{{ userOrderData_user.address }}</h5>
              <h5 class="mb-4">收取方式：{{ userOrderData_user.shippingMethod }}</h5>
              <h5 class="mb-4">備註：{{ userOrderData_user.comment }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VeeForm id="form" ref="form" v-slot="{ errors }">
      <div class="row">
        <div class="col-12 col-md-6 mb-4">
          <h3 class="mb-4">付款方式</h3>
          <div class="form-check mb-4 ps-0">
            <label class="radio is-inline" v-for="activity in activities" :key="activity">
              <input
                type="radio"
                :value="activity"
                class="radio-input me-1"
                rules="required"
                name="activity"
                v-model="user.payMethod"
              />
              <span class="radio-label pe-5 fs-5">{{ activity }}</span>
            </label>
          </div>
          <div v-if="user.payMethod === '信用卡付款'">
            <label for="floatingAddress" class="fs-5 mb-4">信用卡卡號</label>
            <div class="row g-3 d-flex mb-4">
              <div class="col-3 d-flex flex-column">
                <VeeField
                  name="first"
                  type="text"
                  class="form-control rounded-1"
                  placeholder="4622"
                  :class="{ 'is-invalid': errors['first'] }"
                  id="first"
                  v-model="user.firstNum"
                  aria-label="First"
                  rules="numeric:true|length:4"
                />
                <ErrorMessage name="first" class="invalid-feedback mt-4" />
              </div>
              <div class="col-3 d-flex flex-column">
                <VeeField
                  name="second"
                  type="text"
                  class="form-control rounded-1"
                  :class="{ 'is-invalid': errors['second'] }"
                  placeholder="2223"
                  aria-label="second"
                  v-model="user.secondNum"
                  id="second"
                  rules="numeric:true|length:4"
                />
                <ErrorMessage name="second" class="invalid-feedback mt-4" />
              </div>
              <div class="col-3 d-flex flex-column">
                <VeeField
                  name="third"
                  type="text"
                  class="form-control rounded-1"
                  :class="{ 'is-invalid': errors['third'] }"
                  placeholder="2223"
                  v-model="user.thirdNum"
                  aria-label="third"
                  id="third"
                  rules="numeric:true|length:4"
                />
                <ErrorMessage name="third" class="invalid-feedback mt-4" />
              </div>
              <div class="col-3 d-flex flex-column">
                <VeeField
                  name="fourth"
                  type="text"
                  class="form-control rounded-1"
                  :class="{ 'is-invalid': errors['fourth'] }"
                  placeholder="2223"
                  v-model="user.fourthNum"
                  aria-label="fourth"
                  id="fourth"
                  rules="numeric:true|length:4"
                />
                <ErrorMessage name="fourth" class="invalid-feedback mt-4" />
              </div>
            </div>
            <div class="mb-4">
              <label for="floatingDate" class="fs-5 mb-4">信用卡有效月年</label>
              <VeeField
                type="month"
                name="floatingDate"
                class="form-control rounded-1"
                id="floatingDate"
                :class="{ 'is-invalid': errors['floatingDate'] }"
                placeholder="03/2024"
                v-model="user.cardDate"
                :rules="isOver"
              />
              <ErrorMessage name="floatingDate" class="invalid-feedback" />
            </div>
            <div class="mb-4">
              <label for="floatingDate" class="fs-5 mb-4">信用卡背後末三碼</label>
              <VeeField
                type="number"
                name="信用卡背後末三碼"
                class="form-control rounded-1"
                id="floatingNum"
                :class="{ 'is-invalid': errors['信用卡背後末三碼'] }"
                placeholder="123"
                rules="numeric:true|length:3"
              />
              <ErrorMessage name="信用卡背後末三碼" class="invalid-feedback" />
            </div>
          </div>
        </div>
      </div>
    </VeeForm>
    <div class="d-flex justify-content-between">
      <button class="btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1" @click="backPage" type="button">
        上一步
      </button>
      <button class="btn-square mt-4 fs-5 w-50 w-md-25" type="button" @click="updateOderData">
        下一步
      </button>
    </div>
  </div>
  <UserProductModal
    ref="userProductModal"
    :userCart="userCart"
    :productId="productId"
    :productTitle="productTitle"
  />
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue'
import CartNavbar from '@/components/CartNavbar.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import sweetAlert from '@/js/sweetAlert.js'

const api_url2 = import.meta.env.VITE_API_URL2
export default {
  components: {
    CartNavbar,
    UserProductModal
  },
  data() {
    return {
      activities: ['帳號匯款', '信用卡付款'],
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
        payMethod: '',
        cardDate: '',
        cardNum: '',
        firstNum: '',
        secondNum: '',
        thirdNum: '',
        fourthNum: ''
      },
      product_id: '',
      userId: '',
      cartDataId: '',
      userCart: [],
      total: 0,
      productId: '',
      productTitle: '',
      orderId: 0,
      isLoading: false,
      userCarts: [],
      cartsLength: 0,
      isStatus: false
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
      this.getCartsData()
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    toggleOpenOrder() {
      this.isOrderOpen = !this.isOrderOpen
    },
    isOver(cardDate) {
      if (cardDate.length === 0) {
        return '信用卡有效月年為必填'
      }
      // 将输入的年月转换为日期对象，假设cardDate格式为"YYYY-MM"
      const year = parseInt(cardDate.split('-')[0], 10)
      const month = parseInt(cardDate.split('-')[1], 10) - 1 // JavaScript中月份是从0开始的
      const cardDateValue = new Date(year, month)

      // 获取当前日期，并设置日期为当前月份的第一天（这样只比较年月）
      const currentDate = new Date()
      currentDate.setDate(1) // 将当前日期设置为本月第一天
      currentDate.setHours(0, 0, 0, 0) // 清除时分秒毫秒

      // 如果cardDateValue在当前日期之前或相等，表示卡已过期或者是当前月份，都不符合要求
      if (cardDateValue >= currentDate) {
        return true
      } else {
        return '信用卡有效月年要有效狀態'
      }
    },
    forId(id, title) {
      this.productId = id
      this.productTitle = title
      this.$refs.userProductModal.openModal()
    },
    getCartsData() {
      this.axios
        .get(`${api_url2}/cartsData`)
        .then((res) => {
          this.cartsData = res.data
          this.cartsData.forEach((item) => {
            if (item.status === false) {
              item.data.forEach((dataItem) => {
                if (dataItem.userId === this.userId) {
                  this.userCart.push(dataItem)
                  this.isLoading = false
                }
              })
            }
          })
          this.userCart.forEach((item) => {
            this.total += item.final_total
          })
        })
        .catch((err) => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `取得購買資料失敗`);
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
      this.axios
        .get(`${api_url2}/carts?userId=${this.userId}`)
        .then((res) => {
          const cartIds = res.data.map((cart) => cart.id)
          // 逐一刪除每個購物車
          cartIds.forEach((cartId) => {
            this.axios
              .delete(`${api_url2}/carts/${cartId}`)
              .then((res) => {})
              .catch((err) => {
                sweetAlert.threeLayerCheckType('error', `刪除已購買資料失敗`);
              })
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `刪除已購買資料失敗`);
        })
    },
    changeCartsDataStatus() {
      this.axios
        .patch(`${api_url2}/cartsData/${this.cartDataId}`, {
          status: true,
          orderId: this.orderId
        })
        .then(() => {
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `更新已購買資料失敗`);
        })
    },
    getOrderData() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          this.orderData = res.data
          this.orderData.forEach((item) => {
            if (item.user.userId === this.userId && item.user.status === false) {
              this.userOrderData = item
              this.orderId = item.id
            }
          })

          this.userOrderData_user = this.userOrderData.user
          if (this.isStatus === true) {
            this.changeCartsDataStatus()
            this.status = false
          }
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `更新訂單資料失敗`);
        })
    },
    updateOderData() {
      if (!this.user.payMethod) {
        sweetAlert.threeLayerCheckType('warning', '請填寫所有必填欄位')
        return // 如果有空值，停止執行下一步
      }
      // 当支付方式为“信用卡付款”时，检查所有相关信用卡信息是否已填写
      if (this.user.payMethod === '信用卡付款') {
        if (!this.user.cardDate && !this.user.cardNum) {
          sweetAlert.threeLayerCheckType('warning', '請填寫所有必填欄位')
          return
        }
        if (
          !this.user.firstNum &&
          !this.user.secondNum &&
          !this.user.thirdNum &&
          !this.user.fourthNum
        ) {
          sweetAlert.threeLayerCheckType('warning', '請填寫所有必填欄位')
          return
        }
      }
      this.status = true
      this.getOrderData()
      this.deleteCartsUSerData()
      this.changeCartsDataStatus()
      this.orderData.forEach((item) => {
        if (item.user.userId === this.userId && item.user.cartDataId === this.cartDataId) {
          const updatedUser = {
            create_at: new Date(),
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
            appellation: item.user.appellation,
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
              this.$router.push({ path: '/cart/orderDone' })
              document.cookie = 'cartDataId=; expires='
            })
            .catch((err) => {
              sweetAlert.threeLayerCheckType('error', `更新訂單資料失敗`);
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
    window.scrollTo(0, 0)
    const cookieUserId = this.getCookie('userId')
    const cookieCartDataId = this.getCookie('cartDataId')
    this.userId = cookieUserId * 1
    this.cartDataId = cookieCartDataId * 1
    this.isLoading = true
    this.getCartsData()
    this.getOrderData()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
  }
}
</script>
<style lang="scss" scoped>
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
  border-radius: 16px 16px 0 0;
}
.rounded-bottom{
  border-radius: 0 0 16px 16px !important;
}
</style>