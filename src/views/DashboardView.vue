<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/admin" class="navbar-brand">後台管理</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">回前台</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="userIsLoggedIn === false" to="/admin/adminlogin" class="nav-link"
              >管理者登入</router-link
            >
            <a v-else class="nav-link" type="button" @click="logout()">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
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
      userIsLoggedIn: false // 添加用户登录状态变量
    }
  },
  methods: {
    checkAdmin() {
        this.axios
          .post(`${api_url}/api/user/check`)
          .then((res) => {
            // this.userIsLoggedIn = true;
            this.$emitter.on('loginCheck', (msg) => {
                this.userIsLoggedIn = msg
            });
          })
          .catch((err) => {
            this.userIsLoggedIn = false;
          });
    },
    logout() {
      this.axios
        .post(`${api_url}/logout`)
        .then((res) => {

          document.cookie = 'hexToken=; expires='
          this.$router.push({ path: '/' })
          this.userIsLoggedIn = false // 用户登出
        })
        .catch((err) => {
          alert(`${err.message}`)
        })
    }
  },
  mounted() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = token
      this.checkAdmin();
  }
}
</script>
