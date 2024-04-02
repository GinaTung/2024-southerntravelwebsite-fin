<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">管理者登入</h1>
        <VeeForm id="form" ref="form" v-slot="{ errors }"  @submit="login">
          <div class="form-floating mb-4">
            <VeeField
              type="email"
              name="email"
              class="form-control"
              v-model="user.username"
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
          <button class="btn-turquoise w-100 mt-3 btn-rounded" @click="login">登入</button>

          <div class="mt-3">
            <button class="btn-outline-turquoise mt-3 w-100 btn-rounded" type="button" @click="goHome()">回前台</button>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
const api_url = import.meta.env.VITE_API_URL
import sweetAlert from '@/js/sweetAlert'

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      userIsLoggedIn: false, // 添加用户登录状态变量
      token:'' 
    }
  },
  methods: {
    goHome() {
      this.$router.push('/') 
    },
    checkAdmin(){
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = this.token
    if(this.token){
      sweetAlert.threeLayerCheckType('warning', '目前已為管理者身分登入，無需再次登入')
      this.$router.push({ path: '/admin/AdminHome' })
    }
    },
    login() {
      this.axios
        .post(`${api_url}/admin/signin`, this.user)
        .then((res) => {
          sweetAlert.threeLayerCheckType('success', '管理者登入成功')
          const { expired, token } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          this.$router.push({ name: 'AdminHome' })
          this.$emitter.emit('loginCheck', true)
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `管理者登入失敗`)
        })
    },
  },
  mounted(){
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.checkAdmin();
    }, 1000); 
  }
}
</script>

<style lang="scss">
.btn-rounded{
  border-radius: 20px !important;
}
</style>