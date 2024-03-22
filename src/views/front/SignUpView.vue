<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">會員註冊</h1>
        <VeeForm ref="form" v-slot="{ errors }" @submit.prevent="signup">
          <div class="form-floating mb-4">
            <VeeField
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              v-model="user.name"
              id="username"
              name="姓名"
              placeholder="請輸入姓名"
              rules="required"
            />
            <label for="username" class="form-label">請輸入姓名</label>
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>
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
          <div class="form-floating mb-4">
            <VeeField
              type="password"
              class="form-control"
              name="password_confirmation"
              id="userpassword_confirmation"
              :class="{ 'is-invalid': errors['password_confirmation'] }"
              placeholder="請再次輸入Password"
              rules="confirmed:@password"
              autocomplete="current-password"
            />
            <label for="userpassword_confirmation">再次確認輸入Password</label>
            <ErrorMessage name="password_confirmation" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-4">
            <VeeField
              id="phone"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="user.phone"
            />
            <label for="phone">請輸入手機號碼</label>
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>
          <button class="btn-turquoise w-100 mt-3 border-0" type="submit" id="signup">註冊</button>
        </VeeForm>
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
        phone: '',
        address: '',
        role: 'user'
      }
    }
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
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
  },
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>
