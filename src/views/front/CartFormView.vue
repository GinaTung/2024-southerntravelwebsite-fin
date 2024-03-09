<template>
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <ol
          class="pay-list mt-5 d-flex justify-content-between list-unstyled pe-0 position-relative"
        >
          <li class="d-flex flex-column align-items-center">
            <p class="number d-flex justify-content-center align-items-center number-active mb-0">
              1
            </p>
            <p class="fw-bold mb-0">確認行程</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <p class="number d-flex justify-content-center align-items-center mb-0 number-active">
              2
            </p>
            <p class="fw-bold mb-0">訂單資料</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <p class="number d-flex justify-content-center align-items-center mb-0">3</p>
            <p class="fw-bold mb-0">付款資料</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <p class="number d-flex justify-content-center align-items-center mb-0">4</p>
            <p class="fw-bold mb-0">訂單完成</p>
          </li>
        </ol>
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
          總計：{{ cartTotal }}元<br />購買清單
          <i class="bi bi-chevron-down" v-if="isOpen === false"></i>
          <i class="bi bi-chevron-up" v-else></i>
        </button>
      </p>
      <div class="collapse" id="collapseExample" ref="headerCollapse" v-show="isOpen">
        <div class="card card-body rounded-0">
          <div class="row p-10">
            <div class="col-12 col-md-4">
              <img :src="product.imageUrl" :alt="product.title" class="img-fluid h-100" />
            </div>
            <div class="col-12 col-md-8">
              <h3 class="mb-4">套裝行程名稱：{{ product.title }}</h3>
              <h3 class="mb-4">單價：{{ thousand(product.price) }}</h3>
              <h3 class="mb-4">總計：{{ thousand(cartTotal) }}</h3>
              <router-link
                :to="{
                  path: '/TouristPackage/' + product.category + '/' + product.title
                }"
                class="btn-square px-2 px-md-3 w-50"
                type="button"
                >查看更多</router-link
              >
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
          <label for="floatingInput">姓名</label>
        </div>
        <div class="form-floating mb-4">
          <input type="tel" class="form-control rounded-1" id="floatingTel" placeholder="tel" 
          v-model="user.tel"/>
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
            type="date"
            class="form-control rounded-1"
            id="floatingDate"
            placeholder="2024/03/08"
            v-model="user.birthday"
          />
          <label for="floatingDate">生日</label>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control rounded-1"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
            v-model="user.comment"
          ></textarea>
          <label for="floatingTextarea2">備註</label>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-4">
        <h3 class="mb-4">運送資料</h3>
        <div class="form-floating mb-4">
          <select
          v-model="user.shippingMethod"
            class="form-select rounded-1"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected value="" disabled>選擇運送方式</option>
            <option value="超商取貨">超商取貨</option>
            <option value="宅配">宅配</option>
          </select>
          <label for="floatingSelect">運送方式</label>
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
    </div>
    <div class="d-flex justify-content-between">
      <div class="w-25">
        <a class="btn-cerulean w-100 fs-5 mt-4 me-1" @click="backPage" type="button">上一步</a>
      </div>
      <div class="w-25">
        <router-link class="btn-square mt-4 fs-5 w-100" type="button" to="/cart/payList"
        @click="orderData"
          >下一步</router-link
        >
      </div>
    </div>
  </div>
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
import Collapse from 'bootstrap/js/dist/collapse'
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      text: 123,
      cartId: 0,
      cart: [],
      isOpen: false,
      headerCollapse: {},
      products: [],
      product: {},
      cartTotal: 0,
      order: {},
      user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          birthday:'',
          comment:'',
          shippingMethod:''
        },
      shippingMethod:['超商取貨','宅配'],
      product_id:''
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
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data
          // console.log(this.cart.data.product_id)
          this.products.forEach((item) => {
            if (item.id === this.cart.data.product_id) {
              this.product = item
            }
          })
          // console.log(this.product)
          this.product_id = this.cart.data.product_id
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          // console.log(res.data)
          this.cart = res.data
          this.cart.forEach((item) => {
            if (item.id === this.cartId) {
              this.cart = item
            }
          })
          // console.log(this.cart)
          this.cartTotal = this.cart.data.total
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err}`)
        })
    },
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    orderData() {
      const user = {
          name: this.user.name,
          email: this.user.email,
          tel: this.user.tel,
          address: this.user.address,
          birthday:this.user.birthday,
          comment:this.user.comment,
          shippingMethod:this.user.shippingMethod,
          cartId:this.cartId
      }
      this.axios
        .post(`${api_url2}/order`, { user })
        .then((res) => {
          // console.log(res)
          this.order = res.data;
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    }
  },
  mounted() {
    // console.log(document.cookie)
    this.cartId = this.getCookie('cartId') * 1
    if (!document.cookie) {
      alert('目前購物車無資料，請加入預約行程')
    } else {
      this.getCart()
    }
    this.getProducts()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
  }
}
</script>
