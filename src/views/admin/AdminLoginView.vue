<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">管理者登入</h1>
        <VeeForm id="form" ref="form" v-slot="{ errors }"  @submit.prevent="login">
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
          <a class="btn-turquoise w-100 mt-3 text-center" type="button" @click="login"> 登入 </a>
          <div class="mt-3">
            <router-link to="/" class="btn-outline-turquoise w-100 text-center" type="button"
              >回前台</router-link
            >
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
const api_url = import.meta.env.VITE_API_URL
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
    checkAdmin(){
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = this.token
    if(this.token){
      alert("目前已為管理者身分登入，無需再次登入")
      this.$router.push({ path: '/admin/AdminHome' })
    }
    },
    login() {
      this.axios
        .post(`${api_url}/admin/signin`, this.user)
        .then((res) => {
          // console.log(res);
          alert(`${res.data.message}`)
          this.$router.push({ name: 'AdminHome' })
          // this.userIsLoggedIn = true;
          this.$emitter.emit('loginCheck', true)
          const { expired, token } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
        })
        .catch((err) => {
          // console.log(err);
          //   console.dir(err);
          alert(`${err.data.message}`)
        })
    },
  },
  mounted(){
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.checkAdmin();
    }, 1000); // 3000 毫秒即為 3 秒
  }
}
</script>
