<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">會員登入</h1>
        <VeeForm id="form" ref="form" v-slot="{ errors }" @submit="login">
          <div class="form-floating mb-4">
            <VeeField
              type="email"
              name="email"
              class="form-control"
              v-model="user.email"
              id="email"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              autocomplete="useremail"
            />
            <label for="email">請輸入 Email</label>
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-4">
            <VeeField
             :type="isActive ? 'password' : 'text'"
              class="form-control"
              name="password"
              id="userpassword"
              :class="{ 'is-invalid': errors['password'] }"
              placeholder="請輸入Password"
              rules="min:8|alpha_dash|required"
              autocomplete="current-password"
              v-model="user.password"
            />
            <label for="userpassword">請輸入Password</label>
            <button class="fs-3 fs-lg-2 bg-transparent border-0 form-eye" type="button" @click="toggleEye">
              <i :class="[isActive ? 'bi-eye-slash-fill' : 'bi-eye-fill', 'bi']"></i>
            </button>
            <ErrorMessage name="password" class="invalid-feedback" />
          </div>
          <button class="btn-turquoise w-100 mt-4 btn-rounded" type="submit" id="login">
            登入
          </button>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
import sweetAlert from '@/js/sweetAlert.js'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      userCarts: [],
      cartsLength: 0,
      isActive: true
    }
  },
  methods: {
    async login() {
      event.preventDefault()
      try {
        const res = await this.axios.post(`${api_url2}/login`, this.user)
        const { accessToken, expired } = res.data
        const userId = res.data.user.id
        document.cookie = `hexTokenU=${accessToken}; expires=${new Date(expired).toUTCString()}`
        document.cookie = `userId=${userId}`
        this.userIsLoggedIn2 = true

        sweetAlert.threeLayerCheckType('success', '會員登入成功')
        this.$emitter.emit('loginCheck2', true)
        this.$router.push('/')
        if (userId) {
          await this.getCarts(userId) // Wait for carts to be fetched
          this.$emitter.emit('adminUpdateCart', this.cartsLength)
        }
      } catch (err) {
        console.error(err)
        sweetAlert.threeLayerCheckType('error', `會員登入失敗，請再次填寫會員登入資料`)
      }
    },
    getCarts(userId) {
      return this.axios
        .get(`${api_url2}/carts`)
        .then((res) => {
          this.userCarts = res.data.filter((item) => item.userId === userId)

          const uniqueUserCarts = []
          const productIdSet = new Set()
          this.userCarts.forEach((item) => {
            if (!productIdSet.has(item.productId)) {
              productIdSet.add(item.productId)
              uniqueUserCarts.push(item)
            }
          })
          this.userCarts = uniqueUserCarts
          this.cartsLength = this.userCarts.length
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得購物車資料失敗`)
        })
    },
    toggleEye() {
      // 切換密碼顯示狀態
      this.isActive = !this.isActive
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/all.scss';
.form-floating {
  .form-eye {
    position: absolute;
    top: 0%;
    right: 5%;
    @include pc-lg {
      top: 12%;
      right: 8%;
    }
  }
}
.btn-rounded {
  border-radius: 20px !important;
}
.form-control:focus {
    border-color: #43b8bd !important;
}
</style>
