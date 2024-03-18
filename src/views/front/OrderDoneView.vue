<template>
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <CartNavbar></CartNavbar>
      </div>
    </div>
    <div class="text-center mb-10">
      <div class="text-center">
        <i class="bi bi-check-circle-fill text-success fs-3"></i>
        <p class="fs-4">感謝您！您的訂單已建立完成</p>
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
            訂單及運送資料<br />
            <i class="bi bi-chevron-down" v-if="isOrderOpen === false"></i>
            <i class="bi bi-chevron-up" v-else></i>
          </button>
        </p>
        <div class="collapse show" id="collapseOrder" ref="orderCollapse" v-show="isOrderOpen">
          <div class="card card-body rounded-0" style="height: 350px">
            <div class="row p-4 p-md-10">
              <div class="col-12  col-md-5 col-lg-4">
                <h5 class="mb-4">收件人名字：{{ userOrder.name }}</h5>
                <h5 class="mb-4">收件人電話：{{ userOrder.tel }}</h5>
                <h5 class="mb-4">備註：{{ userOrder.comment }}</h5>
              </div>
              <div class="col-12  col-md-7 col-lg-8">
                <h5 class="mb-4">收件人地址：{{ userOrder.address }}</h5>
                <h5 class="mb-4">運送方式：{{ userOrder.shippingMethod }}</h5>
                <h5 class="mb-4">付款方式：{{ userOrder.payMethod }}</h5>
                <h5 class="mb-4" >付款狀態：
                  <span :class="{'text-danger': userOrder.status===false,'text-success': userOrder.status===true}">
                    {{ userOrder.status ? '已付款' : '未付款' }}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w-100 w-md-25">
        <router-link class="btn-square mt-4 fs-5 w-100" type="button" to="/">回首頁</router-link>
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
.order-h-size {
  height: 300px;
}
@media (max-width: 992px) {
  .order-h-size {
    height: 600px !important;
  }
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
      orderId:0
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
    getOderData() {
      this.axios
        .get(`${api_url2}/order`)
        .then((res) => {
          // console.log(res)
          this.orderData = res.data
          this.orderData.forEach((item) => {
            if (item.user.userId === this.userId && item.status === false) {
              this.userOrder = item.user
            }
          })
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    getCart() {
      this.axios
        .get(`${api_url2}/cartsData`)
        .then((res) => {
          //  console.log(res.data)
          this.cartsData = res.data
          this.cartsData.forEach((item) => {
            if(item.orderStatus === false && item.orderId === this.orderId){
              item.data.forEach((dataItem) => {
                if (dataItem.userId === this.userId) {
                  this.userCart.push(dataItem)
                  // console.log(item.orderId);
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
    }
  },
  mounted() {
    // console.log(document.cookie)
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    const cookieOrderId = this.getCookie('orderId')
    this.orderId = cookieOrderId * 1
    // this.getProducts()
    this.getOderData()
    this.getCart()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    this.orderCollapse = new Collapse(this.$refs.orderCollapse, { toggle: false })
    // console.log(this.$route);
  }
}
</script>
