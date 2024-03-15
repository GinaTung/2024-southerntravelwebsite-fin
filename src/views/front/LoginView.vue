<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-6">
        <h1 class="h3 mb-4">會員登入</h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-4">
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
          <button class="btn-turquoise w-100 mt-4 border-0" type="submit" id="login">登入</button>
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
          alert(`會員登入成功`)

          // 解構資料中的 accessToken, expired 和 userId
          const { accessToken, expired } = res.data
          const userId = res.data.user.id;

          // 將資訊存入 cookie
          document.cookie = `hexTokenU=${accessToken}; expires=${new Date(expired).toUTCString()}`
          document.cookie = `userId=${userId}`
          // 將 userIsLoggedIn2 設為 true
          this.userIsLoggedIn2 = true

          // 將使用者ID存儲在組件中，以便日後使用
          this.userId = userId

          // 導向至首頁
          this.$router.push('/')
          this.$emitter.emit('loginCheck2', true)
        })
        .catch((err) => {
          // console.log(err)
          alert(`會員登入失敗，請再次填寫會員登入資料`)
        })
    }
  }
}
</script>
