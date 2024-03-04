<template>

</template>
<script>
// 引入 Bootstrap 的 Collapse 檔案
import Collapse from 'bootstrap/js/dist/collapse'
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      headerCollapse: {},
      memberIsLoggedIn: false,
      userId:''
    }
  },
  // 路由改變時隱藏選單
  watch: {
    $route() {
      this.headerCollapse.hide()
    }
  },
  methods: {
    getUserIdFromCookie() {
      const cookies = document.cookie.split(';')
      console.log(cookies);
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === 'hexToken') {
          const cookieData = decodeURIComponent(value)
          const userIdMatch = cookieData.match(/user=(\w+)/)
          if (userIdMatch) {
            return userIdMatch[1] // 返回匹配到的用户 ID
          }
        }
      }
      return null // 如果未找到用户 ID，则返回 null
    },
    logout() {
      // this.axios
      //   .delete(`${api_url2}/users/${userId}`)
      //   .then((res) => {
          document.cookie = 'hexToken=; expires='
          this.$router.push({ path: '/' })
          this.userIsLoggedIn = false // 用户登出
        // })
        // .catch((err) => {
        //   alert(`管理者身分登出失敗，請稍後再點選登出按鈕`)
        // })
    }
  },
  mounted() {
    // 將 Booststrap 的 Collapse 實體化
    // 並且設定一開始的 toggle 為 false，選單才能在一開始維持折疊狀態
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    this.userId = this.getUserIdFromCookie();
// console.log(this.userId);
//     console.log(this.$route)
  }
}
</script>
