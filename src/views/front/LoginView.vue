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
              v-model="user.username"
              id="username"
              placeholder="name@example.com"
              required autofocus autocomplete="username" disabled
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
              required autocomplete="current-password" disabled
            />
            <label for="password">Password</label>
          </div>
          <button
            class="btn-turquoise w-100 mt-3 border-0"
            type="submit"
            id="login"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
  </template>

<script>
const api_url = import.meta.env.VITE_USER_API_URL;
// console.log(api_url);
export default{
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.axios.post(`${api_url}/login`,this.user).then((res) => {
          // console.log(res);
          alert(`${res.data}`);
          this.$router.push('/');
      })
        .catch(() => {
          // console.log(err);
          //   console.dir(err);
          alert(`維護中`);
          this.$router.push('/');
        });
    }
  }
}
</script>

<style lang="scss">

</style>