<template>
  <div class="container d-flex justify-content-center flex-column vh-85">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-6">
        <h1 class="h3 mb-3">會員登入</h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              autocomplete="useremail"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
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
          <button class="btn-turquoise w-100 mt-3 border-0" type="submit" id="login">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.axios
        .post(`${api_url2}/login`, this.user)
        .then((res) => {
          // console.log(res)
          this.userId = res.data.user.id
          this.token = res.data.accessToken
          const { accessToken, expired } = res.data
          document.cookie = `hexToken=${accessToken}; expires=${new Date(
            expired
          )}; user=${this.userId}`
          // console.log(document.cookie)
          alert(`會員登入成功`)
          this.$router.push('/')
        })
        .catch((err) => {
          // console.log(err)
          alert(`會員登入失敗，請再次填寫會員登入資料`);
        })
    }
  }
}
</script>
