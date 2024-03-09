<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-6">
        <h1 class="h3 mb-4">會員註冊</h1>
        <form id="form" class="form-signin" @submit.prevent="signup">
          <div class="form-floating mb-4">
            <input
              type="text"
              class="form-control"
              v-model="user.name"
              id="username"
              placeholder="王曉明"
              required
            />
            <label for="username">姓名</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="useremail"
              placeholder="name@example.com"
              required
              autocomplete="useremail"
            />
            <label for="useremail">Email address</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="userpassword"
              placeholder="Password"
              required
              autocomplete="current-password"
            />
            <label for="userpassword">Password</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="tel"
              class="form-control"
              v-model="user.tel"
              id="usertel"
              placeholder="09-XXXX-XXXX"
              required
            />
            <label for="usertel">電話</label>
          </div>
          <button class="btn-turquoise w-100 mt-3 border-0" type="submit" id="signup">註冊</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        age: '',
        tel: '',
        address: '',
        role: 'user'
      }
    }
  },
  methods: {
    signup() {
      const api_url2 = import.meta.env.VITE_API_URL2
      this.axios
        .post(`${api_url2}/signup`, {
          email: this.user.email,
          password: this.user.password,
          name: this.user.name,
          tel: this.user.tel,
          role: 'user'
        })
        .then((response) => {
          // console.log(response)
          alert(`會員註冊完成`)
          this.$router.push('/login')
        })
        .catch((err) => {
          // console.log(err)
          alert(`會員註冊失敗，請再次填寫註冊資料`)
        })
    }
  }
}
</script>
