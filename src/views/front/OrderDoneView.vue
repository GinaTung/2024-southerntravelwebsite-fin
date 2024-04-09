<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <CartNavbar></CartNavbar>
      </div>
    </div>
    <div class="text-center mb-10">
      <div class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-3 text-center"></i>
        <p class="fs-4 text-center">感謝您！您的訂單已建立完成</p>
      </div>
    </div>
    <div class="row">
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
        <div class="collapse show" id="collapseExample" ref="headerCollapse" v-show="isOpen">
          <div class="card card-body rounded-0">
            <div class="row p-4 p-md-10" v-for="item in userCart" :key="item.id">
              <div class="col-12 col-md-5 col-lg-4">
                <img
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                  class="img-fluid h-100"
                />
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
      <div class="mb-4 col-12">
        <p class="d-grid gap-2">
          <button
            class="btn btn-primary-600 border-top"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOrder"
            aria-expanded="true"
            aria-controls="collapseOrder"
            @click="toggleOpenOrder"
          >
            訂單資料及收件方式<br />
            <i class="bi bi-chevron-down" v-if="isOrderOpen === false"></i>
            <i class="bi bi-chevron-up" v-else></i>
          </button>
        </p>
        <div class="collapse show" id="collapseOrder" ref="orderCollapse" v-show="isOrderOpen">
          <div class="card card-body rounded-0">
            <div class="row p-4 p-md-10">
              <div class="col-12 col-md-6 col-lg-6">
                <h5 class="mb-4">
                  主要聯繫人名字：{{ userOrder.name }}
                  {{ userOrder.appellation === 'female' ? '女士' : '男士' }}
                </h5>
                <h5 class="mb-4">主要聯繫人電話：{{ userOrder.tel }}</h5>
                <h5 class="mb-4">主要聯繫人身分證字號：{{ userOrder.memberId }}</h5>
                <h5 class="mb-4">主要聯繫人護照號碼：{{ userOrder.passport }}</h5>
                <h5 class="mb-4">主要聯繫人地址：{{ userOrder.address }}</h5>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <h5 class="mb-4">收取方式：{{ userOrder.shippingMethod }}</h5>
                <h5 class="mb-4">付款方式：{{ userOrder.payMethod }}</h5>
                <h5 class="mb-4">
                  付款狀態：
                  <span
                    :class="{
                      'text-danger': userOrder.status === false,
                      'text-success': userOrder.status === true
                    }"
                  >
                    {{ userOrder.status ? '已付款' : '未付款' }}
                  </span>
                </h5>
                <h5>備註：{{ userOrder.comment }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w-100 w-md-25">
        <button class="btn-square mt-4 fs-5 w-100" type="button" @click="goHome()">回首頁</button>
      </div>
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
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert.js'

export default {
  components: {
    CartNavbar,
    UserProductModal
  },
  data() {
    return {
      userId: '',
      total: 0,
      cartsData: [],
      userCart: [],
      isOpen: true,
      isOrderOpen: true,
      headerCollapse: {},
      products: [],
      product: {},
      cartTotal: 0,
      orderData: [],
      userOrder: '',
      product_id: '',
      productId: '',
      productTitle: '',
      orderId: 0,
      isLoading: false
    }
  },
  watch: {
    $route() {
      this.headerCollapse.hide()
      this.orderCollapse.hide()
    }
  },
  methods: {
    goHome() {
      this.$router.push('/') 
    },
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
      this.productId = id
      this.productTitle = title
      this.$refs.userProductModal.openModal()
    },
    getOderData() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          this.orderData = res.data
          this.orderData.forEach((item) => {
            if (item.user.userId === this.userId && item.status === false) {
              this.userOrder = item.user
            }
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得訂單資料失敗`)
        })
    },
    getCartsData() {
      this.axios
        .get(`${api_url2}/cartsData`)
        .then((res) => {
          this.cartsData = res.data
          this.cartsData.forEach((item) => {
            if (item.orderStatus === false && item.orderId === this.orderId) {
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
          sweetAlert.threeLayerCheckType('error', `取得填寫資料內容失敗`)
          this.isLoading = false
        })
    },
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
    getCart() {
      this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.userCarts = res.data.filter((item) => item.userId === this.userId) // 只保留当前用户的购物车数据
          this.cartsLength = this.userCarts.length
          if (this.userCarts.length === 0) {
            // 如果购物车没有任何内容，则将购物车数量设置为0
            this.$emitter.emit('updateCartNum', 0)
          } else {
            // 如果购物车有内容，则将购物车数量设置为购物车数据的长度
            this.$emitter.emit('updateCartNum', this.userCarts.length)
          }
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
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
    this.isLoading = true
    window.scrollTo(0, 0)
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    const cookieOrderId = this.getCookie('orderId')
    this.orderId = cookieOrderId * 1
    setTimeout(() => {
      document.cookie = 'orderId=; expires='
    }, 3000) // 3000 毫秒即為 3 秒
    this.getOderData()
    this.getCartsData()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    this.orderCollapse = new Collapse(this.$refs.orderCollapse, { toggle: false })
    this.getCart()
    setTimeout(() => {
      if (!this.orderId) {
        sweetAlert.threeLayerCheckType('warning', `網頁停留過久，為您轉至首頁`)
        this.$router.push({ path: '/' })
      }
    }, 10000)
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
  border-radius: 12px 12px 0 0;
}
.order-h-size {
  height: 300px;
}
@media (max-width: 992px) {
  .order-h-size {
    height: 600px !important;
  }
}
</style>
