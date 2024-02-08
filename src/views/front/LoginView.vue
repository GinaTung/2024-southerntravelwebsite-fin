<template>
  <div class="container d-flex justify-content-center flex-column vh-100">
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
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  mounted() {
    this.setBodyHeight();
    window.addEventListener("resize", this.setBodyHeight);
  },
  methods: {
    setBodyHeight() {
      var windowHeight = window.innerHeight;
      document.body.style.height = windowHeight + 'px';
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setBodyHeight);
  }
}

</script>

<style lang="scss">
html, body {
    height: 100vh !important;
    margin: 0;
    padding: 0;
}

</style>