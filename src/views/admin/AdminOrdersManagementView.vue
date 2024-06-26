<template>
  <VueLoading :active="isLoading" :z-index="1060" />
  <div class="container">
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3">
        <AdminSidebar />
      </div>
      <div class="col-12 col-md-9">
        <h2 class="my-5">訂單列表</h2>
        <div class="table-responsive">
          <table class="table mt-4">
            <thead>
              <tr>
                <th>購買時間</th>
                <th>聯繫人</th>
                <th>購買款項</th>
                <th>應付金額</th>
                <th>是否付款</th>
                <th>處理狀態</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in orders" :key="item.id">
                <tr>
                  <td>
                    <div style="width: 100px">
                      {{ item.user.create_at }}
                    </div>
                  </td>
                  <td>
                    <span v-text="item.user.email" v-if="item.user" style="width: 80px"></span>
                  </td>
                  <td>
                    <ul class="list-unstyled">
                      <template v-for="product in item.product" :key="product.id">
                        <li
                          v-for="(item, index) in product.products"
                          :key="index + 123"
                          style="width: 200px"
                        >
                          {{ item.title }} 預約：{{ item.qty }}位
                          <br />
                        </li>
                      </template>
                    </ul>
                  </td>
                  <td class="text-right" v-for="product in item.product" :key="product.id">
                    <div style="width: 80px">
                      {{ thousand(product.final_total) }}
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-switch" style="width: 100px">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="item.user.status"
                        @change="updatePaid(item)"
                      />
                      <label class="form-check-label">
                        <span v-if="item.user.status">已付款</span>
                        <span v-else class="text-danger">未付款</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div style="width: 80px">
                      <p
                        v-if="
                          !item.status &&
                          !item.billStatus &&
                          !item.checkDataStatus &&
                          !item.user.status
                        "
                        class="text-primary-emphasis"
                      >
                        訂單處理中
                      </p>
                      <p
                        v-else-if="
                          !item.status &&
                          !item.billStatus &&
                          !item.checkDataStatus &&
                          item.user.status
                        "
                        class="text-primary"
                      >
                        預約安排出遊
                      </p>
                      <p
                        v-else-if="
                          !item.status &&
                          !item.billStatus &&
                          item.checkDataStatus &&
                          item.user.status
                        "
                        class="text-warning"
                      >
                        發票開立中
                      </p>
                      <p
                        v-else-if="
                          !item.status &&
                          item.billStatus &&
                          item.checkDataStatus &&
                          item.user.status
                        "
                        class="text-danger"
                      >
                        訂單即將完成，準備出遊
                      </p>
                      <p v-else class="text-success">已出遊結束</p>
                    </div>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button
                        class="btn btn-outline-primary btn-sm"
                        type="button"
                        @click="openModal(item)"
                      >
                        檢視
                      </button>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        type="button"
                        @click="openDelOrderModal(item)"
                      >
                        刪除
                      </button>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example" class="my-10">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === 1 }">
              <button
                class="page-link page-link-radius-2"
                @click.prevent="currentPage > 1 && getOrders(currentPage - 1)"
              >
                上一頁
              </button>
            </li>
            <li class="page-item" v-for="i in pageTotal" :key="`page-${i}`">
              <button
                class="page-link page-link-0 rounded-0"
                :class="{ active: i === currentPage }"
                @click.prevent="getOrders(i)"
              >
                {{ i }}
              </button>
            </li>
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === pageTotal }">
              <button
                class="page-link page-link-radius"
                @click.prevent="currentPage < pageTotal && getOrders(currentPage + 1)"
              >
                下一頁
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- orderModal -->
  <order-modal
    ref="orderModal"
    :order="tempOrder"
    :update-paid="updatePaid"
    :get-orders="getOrders"
  ></order-modal>
  <!-- delOrderModal -->
  <del-order-modal ref="delModal" :item="tempOrder" :del-order="delOrder"></del-order-modal>
</template>

<script>
import OrderModal from '@/components/OrderModal.vue'
import DelOrderModal from '@/components/DelOrderModal.vue'
import sweetAlert from '@/js/sweetAlert.js'
import AdminSidebar from '@/components/AdminSidebar.vue'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  components: {
    OrderModal,
    DelOrderModal,
    AdminSidebar
  },
  data() {
    return {
      orders: [],
      isNew: false,
      pageTotal: 0,
      currentPage: 1,
      limitPage: 10,
      isLoading: false,
      tempOrder: {},
      orderModal: null,
      delModal: null
    }
  },
  methods: {
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    getOrders(currentPage = 1) {
      this.isLoading = true
      this.axios
        .get(`${api_url2}/orders?_limit=${this.limitPage}&_page=${currentPage}`)
        .then((res) => {
          var totalCount = parseInt(res.headers['x-total-count'])
          this.pageTotal = Math.ceil(totalCount / this.limitPage)
          this.currentPage = currentPage
          this.orders = res.data
          this.orders.forEach((item) => {
            var date = new Date(item.user.create_at)
            var utcDateTimeString = date.toISOString()
            var datePart = utcDateTimeString.slice(0, 10)
            // 將轉換後的值賦給原來的 create_at 屬性
            item.user.create_at = datePart
          })
          this.getOrderProducts()
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `取得訂單資料失敗`)
        })
    },
    getOrderProducts() {
      this.axios
        .get(`${api_url2}/cartsData`)
        .then((res) => {
          const orderProducts = {} // 使用物件來存儲每個 item.id 的相關產品資料

          res.data.forEach((item) => {
            if (!orderProducts[item.id]) {
              orderProducts[item.id] = {
                final_total: item.final_total,
                userId: item.userId,
                cartDataId: item.id,
                total: item.total,
                products: []
              }
            }

            item.data.forEach((product) => {
              orderProducts[item.id].products.push({
                id: product.productId,
                title: product.product.title,
                qty: product.qty,
                price: product.price,
                total: product.total,
                final_total: product.final_total
              })
            })
          })

          // 將 orderProducts 轉換為陣列
          const ordersArray = Object.values(orderProducts)
          this.orders.forEach((orderItem) => {
            ordersArray.forEach((item) => {
              if (orderItem.user.cartDataId === item.cartDataId) {
                orderItem.product = []
                orderItem.product.push(item)
              }
            })
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得訂單的產品資料失敗`)
        })
    },
    openModal(item) {
      this.tempOrder = { ...item }
      this.isNew = false
      this.$refs.orderModal.openModal()
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item }
      this.$refs.delModal.openModal()
    },
    updatePaid(status) {
      this.isLoading = true
      const updatedStatus = status.user.status
      const updatedUser = {
        ...status.user, // 保留原来的用户数据
        status: updatedStatus
      }
      this.axios
        .patch(`${api_url2}/orders/${status.id}`, {
          user: updatedUser
        })
        .then((res) => {
          this.getOrders()
          this.isLoading = false
          this.$refs.orderModal.closeModal()
          sweetAlert.threeLayerCheckType('success', '更新付款狀態')
        })
        .catch((err) => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `更新付款狀態失敗`)
        })
    },
    delOrder() {
      this.isLoading = true
      this.axios
        .delete(`${api_url2}/orders/${this.tempOrder.id}`, this.tempOrder)
        .then((res) => {
          this.getOrders()
          this.isLoading = false
          this.$refs.delModal.closeModal()
          sweetAlert.threeLayerCheckType('success', '已刪除訂單成功')
        })
        .catch((err) => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `${err.message}`)
        })
    }
  },
  mounted() {
    this.getOrders()
  }
}
</script>
<style lang="scss" scoped>
.page-link-radius {
  border-radius: 0 4px 4px 0 !important;
}

.page-link-radius-2 {
  border-radius: 4px 0 0 4px !important;
}
.page-link:focus {
  box-shadow: 0px;
}
.page-link.active {
  background: #43b8bd;
  border-color: #0ea0a6;
  color: #fff !important;
}
.btn:hover {
  color: white !important;
}
</style>
