<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">序號</th>
        <th scope="col">訂單編號</th>
        <th scope="col">訂購日期</th>
        <th scope="col">購買金額</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orders" :key="index + 123">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.user.create_at + formatId(item.id) }}</td>
        <td>Otto</td>
        <td>${{ finalTotal }}</td>
        <td>@mdo</td>
        <td>
            <button class="btn" type="button">查看詳情</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  data() {
    return {
      userId: '',
      token: '',
      orders: [],
      currentDate: '',
      finalTotal:''
    }
  },
  methods: {
    formatId(id) {
      // 將id轉化為字符串，檢查長度並根據長度前面填充零
      return id.toString().padStart(3, '0')
    },
    getOrders() {
      this.axios
        .get(`${api_url2}/orders?_embed=cartsData`)
        .then((res) => {
          this.orders = res.data.filter((item) => item.user.userId === this.userId)
          this.orders.forEach((item) => {
            console.log(item.user.create_at)
            var date = new Date(item.user.create_at)
            var utcDateTimeString = date.toISOString()
            var datePart = utcDateTimeString.slice(0, 10)

            // 使用 replace() 方法移除所有的 "-" 字符
            var formattedDate = datePart.replace(/-/g, '')

            // 將轉換後的值賦給原來的 create_at 屬性
            item.user.create_at = formattedDate
            console.log(item.cartsData[0].final_total);
            this.finalTotal = item.cartsData[0].final_total
          })
          console.log(this.orders)
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
        })
    },
    getCookie(cookieName) {
      const cookies = document.cookie.split(';')
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === cookieName) {
          return value
        }
      }
      return null
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.isLoading = true
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    this.getOrders()
  }
}
</script>
