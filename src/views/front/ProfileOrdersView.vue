<template>
  <table class="table table-bordered table-hover">
    <thead>
      <tr class="bg-primary-400 align-middle fs-7 fs-md-6 text-center">
        <th scope="col">序號</th>
        <th scope="col" class="mw-2">訂單編號</th>
        <th scope="col" class="mw-2">訂購日期</th>
        <th scope="col" class="mw-2">購買金額</th>
        <th scope="col" class="mw-2">訂單狀態</th>
        <th scope="col" class="mw-1">操作</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="ordersLength === 0">
        <tr class="text-center"  v-if="status.loadingItem">
          <td colspan="6">
            <div
              class="spinner-border m-10"
              role="status"
              style="width: 3rem; height: 3rem; color: #43b8bd"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </td>
        </tr>
        <tr v-else class="table-style">
          <td colspan="6" class="table-hover-style p-10">
            <p class="text-center mb-5 fs-5">
              目前沒有可用的訂單資料。<br />欲查看旅遊方案或進行購買，請點擊下方的連結。
            </p>
            <div class="d-flex justify-content-center">
              <router-link to="/TouristPackage" class="btn-turquoise w-100 w-md-25 text-center"
                >南部旅遊方案</router-link
              >
            </div>
          </td>
        </tr>
      </template>
      <template v-for="(item, index) in orders" :key="index + 123" v-else>
        <tr class="table-style" :class="{ 'bg-active': selectedOrder === index }">
          <th scope="row" class="align-middle text-center fs-8 fs-md-6">{{ index + 1 }}</th>
          <td class="align-middle fs-8 fs-md-6">{{ getNewOrderNum(item) }}</td>
          <td class="align-middle fs-8 fs-md-6">{{ getOrderDate(item) }}</td>
          <td class="align-middle fs-8 fs-md-6">{{ thousand(item.cartsData[0].final_total) }}</td>
          <td class="align-middle fs-8 fs-md-6">
            <span
              v-if="!item.status && !item.billStatus && !item.checkDataStatus && !item.user.status"
              class="text-primary-emphasis"
            >
              訂單處理中
            </span>
            <span
              v-else-if="
                !item.status && !item.billStatus && !item.checkDataStatus && item.user.status
              "
              class="text-primary"
            >
              預約安排出遊
            </span>
            <span
              v-else-if="
                !item.status && !item.billStatus && item.checkDataStatus && item.user.status
              "
              class="text-warning"
            >
              發票開立中
            </span>
            <span
              v-else-if="
                !item.status && item.billStatus && item.checkDataStatus && item.user.status
              "
              class="text-danger"
            >
              訂單即將完成，準備出遊
            </span>
            <span v-else class="text-success">已出遊結束</span>
          </td>
          <td class="align-middle">
            <button
              class="btn-outline-turquoise w-100 d-none d-md-block"
              type="button"
              @click="showDetails(index)"
            >
              查看詳情
            </button>
            <button
              class="btn-outline-turquoise w-100 d-md-none"
              type="button"
              @click="showDetails(index)"
            >
              詳情
            </button>
          </td>
        </tr>
        <template v-if="selectedOrder === index">
          <tr>
            <td colspan="6" class="table-hover-style border-0"></td>
          </tr>
          <tr>
            <td class="table-hover-style border-left-trans"></td>
            <th colspan="5" class="align-middle text-center bg-primary-200">購買訂單資料</th>
          </tr>
          <tr>
            <td class="table-hover-style border-left-trans"></td>
            <td colspan="2" class="bg-primary-300">產品名稱</td>
            <td class="bg-primary-300">單價</td>
            <td class="bg-primary-300">數量</td>
            <td class="bg-primary-300">小計</td>
          </tr>
          <tr v-for="(product, index) in item.cartsData[0].data" :key="index + 123">
            <td colspan="1" class="table-hover-style border-left-trans border-bottom-trans"></td>
            <td colspan="2" class="fs-8 fs-md-6">{{ product.product.title }}</td>
            <td class="fs-8 fs-md-6">{{ thousand(product.price) }}</td>
            <td class="fs-8 fs-md-6">{{ product.qty }}</td>
            <td class="fs-8 fs-md-6">{{ thousand(product.final_total) }}</td>
          </tr>
          <tr>
            <td
              colspan="6"
              class="border-0 border-left-trans table-hover-style"
              :class="{ 'border-bottom-trans': index === ordersLength - 1 }"
            ></td>
          </tr>
        </template>
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
      selectedOrder: null,
      cartsData: '',
      ordersLength: '',
      status: {
        loadingItem: false
      }
    }
  },
  methods: {
    showDetails(index) {
      this.selectedOrder = this.selectedOrder === index ? -1 : index
    },
    getNewOrderNum(item) {
      // 獲取日期部分
      var date = new Date(item.user.create_at)
      var utcDateTimeString = date.toISOString()
      var datePart = utcDateTimeString.slice(0, 10)
      // 格式化日期，移除所有 "-"
      var formattedDate = datePart.replace(/-/g, '')
      // 返回組合後的訂單編號
      return formattedDate + this.formatId(item.id)
    },
    getOrderNum(item) {
      return this.formatId(item.id)
    },
    getOrderDate(item) {
      var date = new Date(item.user.create_at)
      var utcDateTimeString = date.toISOString()
      var datePart = utcDateTimeString.slice(0, 10)
      return datePart
    },
    formatId(id) {
      return id.toString().padStart(3, '0')
    },
    getOrders() {
      this.status.loadingItem = true
      this.axios
        .get(`${api_url2}/orders?_embed=cartsData`)
        .then((res) => {
          this.orders = res.data.filter((item) => item.user.userId === this.userId)
          this.status.loadingItem = false
          this.ordersLength = this.orders.length
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得會員訂單資料失敗`)
        })
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
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

<style lang="scss" scoped>
.table {
  --bs-table-hover-bg: rgba(67, 184, 189, 0.075);
}
.bg-active {
  background: rgba(67, 184, 189, 0.2);
}
.bg-primary-300 {
  background: rgba(67, 184, 189, 0.75);
}
.table-hover-style {
  border-top: 1px solid transparent;
  // --bs-table-border-color: rgba(1, 1, 1, 0);
  --bs-table-hover-bg: rgba(67, 185, 189, 0);
}
.border-left-1 {
  border-left: 1px solid rgb(222, 226, 230) !important;
}
.border-bottom-1 {
  border-bottom: 1px solid rgb(222, 226, 230) !important;
}
.border-top-1 {
  border-top: 1px solid rgb(222, 226, 230) !important;
}
.border-left-trans {
  border-left: 1px solid transparent !important;
}
.border-bottom-trans {
  border-bottom: 1px solid transparent !important;
}
.btn-outline-turquoise {
  padding: 8px;
}
@media (max-width: 768px) {
  .mw-1 {
    width: 80px;
  }
  .mw-2 {
    width: 100px;
  }
}
.fs-8 {
  font-size: 12px;
}
</style>
