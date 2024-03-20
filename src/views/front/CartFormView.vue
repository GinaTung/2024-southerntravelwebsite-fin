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
          <div class="row p-4 p-md-10" v-for="item in userCart" :key="item.id">
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
    <div class="row">
      <div class="col-12 col-md-6 mb-4">
        <h3 class="mb-4">訂單資料</h3>
        <div class="form-floating mb-4">
          <input
            type="text"
            class="form-control rounded-1"
            id="floatingInput"
            placeholder="王小明"
            v-model="user.name"
          />
          <label for="floatingInput">主要聯繫人</label>
        </div>
        <div class="form-floating mb-4">
          <select
            v-model="user.appellation"
            class="form-select rounded-1"
            id="floatingAppellation"
            aria-label="Floating label select example"
          >
            <option selected value="" disabled>請選擇稱謂</option>
            <option value="female">女士</option>
            <option value="male">男士</option>
          </select>
          <label for="floatingAppellation">稱謂</label>
        </div>
        <div class="form-floating mb-4">
          <input
            type="text"
            class="form-control rounded-1"
            id="floatingMemberId"
            placeholder="身分證字號"
            v-model="user.memberId"
          />
          <label for="floatingMemberId">身分證字號</label>
        </div>
        <div class="form-floating mb-4">
          <input
            type="text"
            class="form-control rounded-1"
            id="floatingPassport"
            placeholder="護照號碼"
            v-model="user.passport"
          />
          <label for="floatingPassport">護照號碼</label>
        </div>
        <div class="form-floating mb-4">
          <input
            type="date"
            class="form-control rounded-1"
            id="floatingDate"
            placeholder="2024/03/08"
            v-model="user.birthday"
          />
          <label for="floatingDate">生日</label>
        </div>
        <div class="form-floating mb-4">
          <input
            type="tel"
            class="form-control rounded-1"
            id="floatingTel"
            placeholder="tel"
            v-model="user.tel"
          />
          <label for="floatingTel">電話</label>
        </div>

        <div class="form-floating mb-4">
          <input
            type="email"
            class="form-control rounded-1"
            id="floatingEmail"
            placeholder="name@example.com"
            v-model="user.email"
          />
          <label for="floatingEmail">電子郵件</label>
        </div>
        <div class="form-floating mb-4">
          <input
            type="text"
            class="form-control rounded-1"
            id="floatingAddress"
            placeholder="縣市鄉鎮市區"
            v-model="user.address"
          />
          <label for="floatingAddress">住址</label>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-4">
        <h3 class="mb-4">取件方式</h3>
        <div class="form-floating mb-4">
          <select
            v-model="user.shippingMethod"
            class="form-select rounded-1"
            id="floatingSelect2"
            aria-label="Floating label select example"
          >
            <option selected value="" disabled>請選擇取件方式</option>
            <option value="電子郵件">電子郵件</option>
            <option value="郵寄">郵寄</option>
          </select>
          <label for="floatingSelect2">選擇取件方式</label>
        </div>
        <div class="form-floating mb-4">
          <textarea
            class="form-control rounded-1"
            placeholder="備註"
            id="floatingTextarea2"
            style="height: 280px"
            v-model="user.comment"
          ></textarea>
          <label for="floatingTextarea2">備註(如:飲食、暈車等注意事項)</label>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <a class="btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1" @click="backPage" type="button">上一步</a>
      <a
        class="btn-square mt-4 fs-5 w-50 w-md-25"
        type="button"
        href="#/cart/payList"
        @click="orderData"
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
      userCart: [],
      userId: '',
      isOpen: false,
      headerCollapse: {},
      order: {},
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
        birthday: '',
        comment: '',
        shippingMethod: '',
        passport: '',
        memberId: '',
        appellation:''
      },
      shippingMethod: ['電子郵件', '郵寄'],
      total: 0,
      productId: '',
      productTitle: '',
      cartDataId: '',
      ordersData: []
    }
  },
  watch: {
    $route() {
      this.headerCollapse.hide()
    }
  },
  methods: {
    backPage() {
      this.$router.go(-1)
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
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
            this.cartDataId = item.id
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
          console.log(this.cartDataId)
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
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    getOderData() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          // console.log(res)
          this.ordersData = res.data
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    orderData() {
      // console.log(this.ordersData)
      // console.log(`Successfully deleted cart with ID: ${this.cartDataId}`)
      const userExists = this.ordersData.some(
        (item) => item.user.cartDataId === this.cartDataId && item.user.status === false
      )
      // console.log(this.cartDataId)
      let orderId = 0
      this.ordersData.forEach((item) => {
        if (item.user.cartDataId === this.cartDataId && item.user.status === false) {
          orderId = item.id
        }
      })
      // console.log(orderId,userExists);
      if (userExists) {
        const user = {
          create_at: new Date(),
          name: this.user.name,
          email: this.user.email,
          tel: this.user.tel,
          address: this.user.address,
          birthday: this.user.birthday,
          comment: this.user.comment,
          shippingMethod: this.user.shippingMethod,
          passport: this.user.passport,
          memberId: this.user.memberId,
          appellation:this.user.appellation,
          userId: this.userId,
          cartDataId: this.cartDataId,
          status: false
        }
        this.axios
          .put(`${api_url2}/orders/${orderId}`, { user })
          .then((res) => {
            // console.log("res")
            this.order = res.data
          })
          .catch((err) => {
            console.log(err)
            // alert(`${err.message}`)
          })
      } else {
        const user = {
          create_at: new Date(),
          name: this.user.name,
          email: this.user.email,
          tel: this.user.tel,
          address: this.user.address,
          birthday: this.user.birthday,
          comment: this.user.comment,
          shippingMethod: this.user.shippingMethod,
          passport: this.user.passport,
          memberId: this.user.memberId,
          appellation:this.user.appellation,
          userId: this.userId,
          cartDataId: this.cartDataId,
          status: false
        }
        this.axios
          .post(`${api_url2}/orders`, { user })
          .then((res) => {
            // console.log("s")
            this.order = res.data
          })
          .catch((err) => {
            console.log(err)
            // alert(`${err.message}`)
          })
      }
    }
  },
  mounted() {
    // console.log(document.cookie)
    const cookieUserId = this.getCookie('userId')
    const cookieCartDataId = this.getCookie('cartDataId')
    this.userId = cookieUserId * 1
    // this.cartDataId = cookieCartDataId * 1
    // console.log(this.cartDataId);
    this.getCart()
    this.getOderData()
    // this.getProducts()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
  }
}
</script>
