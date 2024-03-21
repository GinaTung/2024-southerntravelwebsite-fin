<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">會員登入</h1>
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
          <button class="btn-turquoise w-100 mt-4 border-0" type="submit" id="login">登入</button>
        </VeeForm>
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
