<template>
  <div class="container py-10 py-lg-30">
    <div class="row justify-content-center align-items-cneter">
      <div class="col-md-6">
        <h1 class="h3 mb-4 text-center">會員註冊</h1>
        <VeeForm ref="form" v-slot="{ errors }" @submit="signup">
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
              name="手機號碼"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['手機號碼'] }"
              placeholder="請輸入手機號碼"
              :rules="{ required: true, regex: /^(0\d{7,9})$/ }"
              v-model="user.phone"
            />
            <label for="phone">請輸入手機號碼</label>
            <ErrorMessage name="手機號碼" class="invalid-feedback" />
          </div>
          <div class="form-floating mb-4">
            <VeeField
              type="date"
              name="生日"
              class="form-control"
              :class="{ 'is-invalid': errors['生日'] }"
              id="floatingDate"
              placeholder="2024/03/08"
              v-model="user.birthday"
              :rules="isOver18"
            />
            <label for="floatingDate">生日(加入會員需滿18歲)</label>
            <ErrorMessage name="生日" class="invalid-feedback" />
          </div>
          <button class="btn-turquoise w-100 mt-3" type="submit" id="signup">註冊</button>
        </VeeForm>
      </div>
    </div>
  </div>
</template>
<script>
import sweetAlert from '@/js/sweetAlert.js'

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
        role: 'user',
        birthday: ''
      }
    }
  },
  methods: {
    isOver18(birthday) {
      if(birthday.length === 0){
        return '生日 為必填'
      }
      // 将生日字符串转换为日期对象
      const birthDate = new Date(birthday)

      // 获取当前日期
      const currentDate = new Date()

      // 计算年龄差
      const ageDifference = currentDate.getFullYear() - birthDate.getFullYear()

      // 如果当前日期在生日之前，年龄减1
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        // 如果年龄小于18岁，返回错误提示
        if (ageDifference - 1 < 18) {
          return '加入會員需滿18歲'
        }
        // 否则返回 true
        return true
      }

      // 如果当前日期在生日之后或是同一天
      // 如果年龄小于18岁，返回错误提示
      if (ageDifference < 18) {
        return '加入會員需滿18歲'
      }
      // 否则返回 true
      return true
    },
    signup() {
      event.preventDefault()
      const api_url2 = import.meta.env.VITE_API_URL2
      this.axios
        .post(`${api_url2}/signup`, {
          email: this.user.email,
          password: this.user.password,
          name: this.user.name,
          tel: this.user.tel,
          role: 'user'
        })
        .then(() => {
          this.$router.push('/login')
          sweetAlert.threeLayerCheckType('success', '會員註冊完成')
        })
        .catch(() => {
          sweetAlert.threeLayerCheckType('error', `會員註冊失敗，請再次填寫註冊資料`)
        })
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
