<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">會員登入</h1>
        <VeeForm id="form" ref="form" v-slot="{ errors }"  @submit="login">
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
              type="password"
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
            <ErrorMessage name="password" class="invalid-feedback" />
          </div>
          <button class="btn-turquoise w-100 mt-4 btn-rounded" type="submit" id="login">登入</button>
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
      }
    }
  },
  methods: {
    login() {
      event.preventDefault();
      this.axios
        .post(`${api_url2}/login`, this.user)
        .then((res) => {
          // 解構資料中的 accessToken, expired 和 userId
          const { accessToken, expired } = res.data
          const userId = res.data.user.id;
          document.cookie = `hexTokenU=${accessToken}; expires=${new Date(expired).toUTCString()}`
          document.cookie = `userId=${userId}`
          this.userIsLoggedIn2 = true
          this.userId = userId
          sweetAlert.threeLayerCheckType('success', '會員登入成功')
            this.$emitter.emit('loginCheck2', true)
            this.$emitter.emit('adminUpdateCart', true) // 發送特定事件
            this.$router.push('/')
        })
        .catch((err) => {
          console.log(err);
          sweetAlert.threeLayerCheckType('error', `會員登入失敗，請再次填寫會員登入資料`);
        })
    }
  },
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>
<style lang="scss" scoped>
.btn-rounded{
  border-radius: 20px !important;
}
</style>