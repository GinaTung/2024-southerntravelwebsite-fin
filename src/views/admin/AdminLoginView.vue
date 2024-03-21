<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1 class="h3 mb-4">管理者登入</h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              autocomplete="username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="password"
              placeholder="Password"
              required
              autocomplete="current-password"
            />
            <label for="password">Password</label>
          </div>
          <a class="btn-turquoise w-100 mt-3 text-center" type="button" @click="login"> 登入 </a>
          <div class="mt-3">
            <router-link to="/" class="btn-outline-turquoise w-100 text-center" type="button"
              >回前台</router-link
            >
          </div>
        </form>
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
    setTimeout(() => {
      this.checkAdmin();
    }, 1000); // 3000 毫秒即為 3 秒
  }
}
</script>
