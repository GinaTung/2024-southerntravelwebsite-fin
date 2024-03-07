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
            <p class="number d-flex justify-content-center align-items-center mb-0 number-active">
              3
            </p>
            <p class="fw-bold mb-0">付款資料</p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <p class="number d-flex justify-content-center align-items-center mb-0 number-active">
              4
            </p>
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
          訂單及運送資料
          <i class="bi bi-chevron-down" v-if="isOrderOpen === false"></i>
          <i class="bi bi-chevron-up" v-else></i>
        </button>
      </p>
      <div class="collapse" id="collapseOrder" ref="orderCollapse" v-show="isOrderOpen">
        <div class="card card-body rounded-0">
          <div class="row p-10">
            <div class="col-12 col-md-5">
              <h5>收件人名字：{{ shoppingData.name }}</h5>
              <h5>收件人電話：{{ shoppingData.tel }}</h5>
              <h5>備註：{{ shoppingData.comment }}</h5>
            </div>
            <div class="col-12 col-md-7">
              <h5>收件人地址：{{ shoppingData.address }}</h5>
              <h5>運送方式：{{ shoppingData.shippingMethod }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="w-25">
        <a class="btn-cerulean w-100 fs-5 mt-4 me-1" @click="backPage" type="button">上一步</a>
      </div>
      <div class="w-25">
        <router-link class="btn-square mt-4 fs-5 w-100" type="button" to="/"
          >回首頁</router-link
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
      isOrderOpen: false,
      headerCollapse: {},
      products: [],
      product: {},
      cartTotal: 0,
      shoppingData: [],
      user: {
        payMethod: 'creditCard'
      }
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
    getOrderData() {
      this.axios
        .get(`${api_url2}/order?user.cartId=${this.cartId}`)
        .then((res) => {
          //   console.log(res.data[0].user)
          this.shoppingData = res.data[0].user
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
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
    this.cartId = this.getCookie('cartId') * 1
    if (!document.cookie) {
      alert('目前購物車無資料，請加入預約行程')
    } else {
      this.getCart()
    }
    this.getProducts()
    this.getOrderData()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    this.orderCollapse = new Collapse(this.$refs.orderCollapse, { toggle: false })
  }
}
</script>
