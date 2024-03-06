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
            <p class="number d-flex justify-content-center align-items-center mb-0">2</p>
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
    <table class="table align-middle">
      <thead>
        <tr>
          <th style="width: 100px"></th>
          <th style="width: 150px">圖片</th>
          <th>行程名稱</th>
          <th style="width: 180px">數量/單位</th>
          <th style="width: 100px">單價</th>
          <th class="text-end" style="width: 100px">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in newCart" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm">
              <!-- <span class="spinner-border spinner-border-sm" aria-hidden="true"></span> -->
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              x
            </button>
          </td>
          <td>
            <img :src="item.cartData.product.imageUrl" alt="" class="img-fluid" />
          </td>
          <td>
            {{ item.cartData.product.title }}
            <!-- <div class="text-success">已套用優惠券</div> -->
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group my-3">
                <button class="btn btn-outline-primary" type="button">-</button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  style="padding-left: 10px; padding-right: 10px"
                >
                  <i class="bi bi-trash"></i>
                </button>
                <input
                  min="1"
                  type="number"
                  class="form-control text-end"
                  v-model="item.cartData.qty"
                />
                <button class="btn btn-outline-primary" type="button">+</button>
              </div>
            </div>
          </td>
          <td>$ {{ item.cartData.price }}</td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            $ {{ item.cartData.total }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end text-success">預約</td>
          <td class="text-end text-success">{{ newCart.length }} 項行程</td>
        </tr>
        <tr v-for="(item,index) in newCart" :key="item.id">
          <td colspan="5" class="text-end">總計</td>
          <td class="text-end" v-if="index ===0"> {{ thousand(item.cartData.total) }}</td>

        </tr>
      </tfoot>
    </table>
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
</style>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      id: '',
      title: '',
      category: '',
      status: {
        addCartLoading: '',
        carteQtyLoading: ''
      },
      cart: [],
      cartId: null,
      products: [],
      enabledProducts: [],
      newCart: []
    }
  },
  methods: {
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
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
          this.combineCart()
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
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data
          this.combineCart()
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    combineCart() {
      this.products.forEach((item) => {
        if (item.id === this.cart.data.product_id) {
          // 假设 cartData 是一个对象，你需要将产品信息添加到 cartData 中
          const updatedCartData = { ...this.cart.data, product: item }

          this.newCart.push({
            cartData: updatedCartData
          })
        }
      })

      // console.log(this.newCart)
    }
  },
  mounted() {
    this.getCart()
    this.getProducts()
    // console.log(this.$route)
    // console.log(document.cookie)
    this.cartId = this.getCookie('cartId') * 1
    // console.log(this.cartId)
  }
}
</script>
