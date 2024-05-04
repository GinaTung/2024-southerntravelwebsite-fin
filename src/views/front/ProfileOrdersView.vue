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
      <template v-for="(item, index) in orders" :key="index + 123">
        <tr>
          <th scope="row" class="align-middle text-center">{{ index + 1 }}</th>
          <td class="align-middle">{{  getNewOrderNum(item) }}</td>
          <td class="align-middle">{{ getOrderDate(item) }}</td>
          <td class="align-middle">$ {{ item.cartsData[0].final_total }}</td>
          <td>
            item.status:{{ item.status }}<br />
            item.billStatus:{{ item.billStatus }}<br />
            item.checkDataStatus:{{ item.checkDataStatus }}<br />
            item.user.status:{{ item.user.status }}<br />
          </td>
          <td class="align-middle">
            <button class="btn" type="button" @click="showDetails(index)">查看詳情</button>
          </td>
        </tr>
        <tr>
          <td colspan="6" v-if="selectedOrder === index">
            訂單編號：{{  getNewOrderNum(item) }}<br />
            其他訂單資訊...
          </td>
        </tr>
      </template>
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
      orderNum: '',
      orderDate: '',
      finalTotal: '',
      isOpen: false,
      selectedOrder: null
    }
  },
  methods: {
    showDetails(index) {
      console.log(index)
      this.selectedOrder = index
    },
    getNewOrderNum(item){
    // 獲取日期部分
    var date = new Date(item.user.create_at);
    var utcDateTimeString = date.toISOString();
    var datePart = utcDateTimeString.slice(0, 10);
    // 格式化日期，移除所有 "-"
    var formattedDate = datePart.replace(/-/g, '');
    // 返回組合後的訂單編號
    return formattedDate + this.formatId(item.id);
    },
    getOrderNum(item) {
      // 這裡返回單個訂單的訂單編號
      return this.formatId(item.id)
    },
    getOrderDate(item) {
      // 這裡返回單個訂單的日期
      var date = new Date(item.user.create_at)
      var utcDateTimeString = date.toISOString()
      var datePart = utcDateTimeString.slice(0, 10)
      return datePart
    },
    formatId(id) {
      // 將id轉化為字符串，檢查長度並根據長度前面填充零
      return id.toString().padStart(3, '0')
    },
    getOrders() {
      this.axios
        .get(`${api_url2}/orders?_embed=cartsData`)
        .then((res) => {
          this.orders = res.data.filter((item) => item.user.userId === this.userId)
        })
        .catch((err) => {
          // sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          console.log(err)
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
