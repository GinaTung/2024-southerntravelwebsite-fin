<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <h1 class="h3 mb-3">管理者登入</h1>
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="username"
              placeholder="name@example.com"
              required autofocus autocomplete="username"
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
              required autocomplete="current-password"
            />
            <label for="password">Password</label>
          </div>
          <a
            class="btn btn-lg btn-primary w-100 mt-3"
            type="button"
            @click="login"
          >
            登入
        </a>
          <!-- <a
            class="btn btn-lg btn-primary w-100 mt-3"
            type="button"
            href="index.html"
          >
            回前台
        </a> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const api_url = import.meta.env.VITE_API_URL;
export default{
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      userIsLoggedIn: false // 添加用户登录状态变量
    };
  },
  methods: {
    login() {
      this.axios.post(`${api_url}/admin/signin`, this.user).then((res) => {
          // console.log(res);
          alert(`${res.data.message}`);
          
          this.$router.push({ name: 'AdminHome' });
          this.userIsLoggedIn = true;          // unix.timestamp
          //取得token
          const { expired, token } = res.data;
        //   console.log(expired, token);
          //儲存cookeie
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      })
        .catch((err) => {
          // console.log(err);
          //   console.dir(err);
          alert(`${err.data.message}`);
        });
    }
  }
}
</script>

