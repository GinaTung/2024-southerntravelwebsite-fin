<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-3 mb-8">
      <div class="container px-0">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/admin/touristManagement" class="nav-link">景點管理</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/productsManagement" class="nav-link">產品管理</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h2 class="mb-5">後台首頁</h2>
    <div class="row flex-column">
      <div class="col-6">
        <div class="list-group" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action list-group-item-success rounded-0"
            id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="list-home"
            >網站情況</a
          >
        </div>
      </div>
      <div class="col-6">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <nav class="nav flex-column">
              <!-- <a class="nav-link active" aria-current="page" href="#">產品 1 個</a> -->
              <router-link to="/admin/productsManagement" class="nav-link">產品 1 個</router-link>
              <a class="nav-link" href="#">文章 1 篇</a>
              <a class="nav-link" href="#">留言 1 條</a>
              <a class="nav-link disabled" aria-disabled="true">優惠券</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api_url = import.meta.env.VITE_API_URL
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    checkAdmin() {
      this.axios
        .post(`${api_url}/api/user/check`)
        .then((res) => {
          // console.log(res)
          // this.getProducts();
        })
        .catch((err) => {
          // console.log(err);
          alert(`目前未登入狀態，請重新登入`)
          this.$router.push({ path: '/admin/adminlogin' })
        })
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    // console.log(token)
    this.checkAdmin()
  }
}
</script>
