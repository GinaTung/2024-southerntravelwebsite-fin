<template>
  <!-- <VueLoading :active="isLoading" :z-index="1060" /> -->
  <div class="container">
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3">
        <h1 class="my-4 fs-4 fs-md-1">訂單管理</h1>
        <AdminSidebar></AdminSidebar>
      </div>
      <div class="col-12 col-md-9">
        <div class="text-end mt-18"></div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th>購買時間</th>
              <th>Email</th>
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
                  <ul class="list-unstyled">
                    <li v-for="date in ordersDate" :key="date.id">
                      <span v-if="date.id === item.id">
                        {{ date.create_at }}
                      </span>
                    </li>
                  </ul>
                </td>

                <td><span v-text="item.user.email" v-if="item.user"></span></td>
                <td>
                  <ul class="list-unstyled">
                    <li v-for="product in item.products" :key="product.id">
                      {{ product.product.title }} 數量：{{ product.qty }}
                      {{ product.product.unit }}
                    </li>
                  </ul>
                </td>
                <td class="text-right">{{ item.total }}</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="item.user.status"
                      @change="updatePaid(item)"
                    />
                    <label class="form-check-label">
                      <span v-if="item.user.status">已付款</span>
                      <span v-else>未付款</span>
                    </label>
                  </div>
                </td>
                <td>
                  <p v-if="!item.status && !item.billStatus && !item.checkDataStatus && !item.user.status" class="text-primary-emphasis">訂單處理中</p>
                  <p v-else-if="!item.status && !item.billStatus && !item.checkDataStatus && item.user.status" class="text-primary">預約安排出遊</p>
                  <p v-else-if="!item.status && !item.billStatus && item.checkDataStatus && item.user.status" class="text-warning">發票開立中</p>
                  <p v-else-if="!item.status && item.billStatus && item.checkDataStatus && item.user.status" class="text-danger">訂單完成，準備出遊</p>
                  <p v-else class="text-success">已出遊結束</p>
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
        <nav aria-label="Page navigation example " class="my-10">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === 1 }">
              <a
                class="page-link page-link-radius-2"
                href=""
                @click.prevent="getOrders(currentPage - 1)"
                >上一頁</a
              >
            </li>
            <li class="page-item" v-for="i in pageTotal" :key="i + 123">
              <a
                class="page-link page-link-0 rounded-0"
                href=""
                :value="i"
                :class="{ active: i === currentPage }"
                @click.prevent="getOrders(i)"
                >{{ i }}</a
              >
            </li>
            <li class="page-item">
              <a
                class="page-link page-link-radius"
                href=""
                @click.prevent="getOrders(currentPage + 1)"
                :class="{ disabled: !currentPage || currentPage === pageTotal }"
                >下一頁</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- orderModal -->
  <order-modal ref="orderModal" :order="tempOrder" :orders-date="ordersDate"></order-modal>
  <!-- delOrderModal -->
  <del-order-modal ref="delModal" :item="tempOrder" :del-order="delOrder"></del-order-modal>
</template>
<style>
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
</style>
<script>
// import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import OrderModal from '@/components/OrderModal.vue'
import DelOrderModal from '@/components/DelOrderModal.vue'
import AdminSidebar from '../../components/AdminSidebar.vue'
import DelOrderModalVue from '@/components/DelOrderModal.vue'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  components: {
    AdminSidebar,
    OrderModal,
    DelOrderModal
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
      delModal: null,
      ordersDate: []
    }
  },
  methods: {
    getOrders(currentPage = 1) {
      this.axios
        .get(`${api_url2}/orders?_limit=${this.limitPage}&_page=${currentPage}`)
        .then((res) => {
          console.log(res)
          var totalCount = parseInt(res.headers['x-total-count'])
          // console.log(totalCount);
          this.pageTotal = Math.ceil(totalCount / this.limitPage)
          // console.log(this.pageTotal);
          this.currentPage = currentPage
          this.orders = res.data
          this.transDate()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    transDate() {
      this.orders.forEach((item) => {
        this.ordersDate.push({ create_at: item.user.create_at, id: item.id })
      })
      console.log(this.ordersDate)
      this.ordersDate.forEach((item) => {
        var date = new Date(item.create_at)
        var utcDateTimeString = date.toISOString()
        var datePart = utcDateTimeString.slice(0, 10)

        // 將轉換後的值賦給原來的 create_at 屬性
        item.create_at = datePart
      })
      console.log(this.ordersDate)
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
    delOrder() {
      this.axios
        .delete(`${api_url2}/orders/${this.tempOrder.id}`, this.tempOrder)
        .then((res) => {
          console.log(res)
          alert(`已刪除成功`)
          this.getOrders()
          this.tempProduct = {}
          this.$refs.delModal.closeModal()
        })
        .catch((err) => {
          // console.log(err);
          alert(`${err}`)
        })
    },
  },
  mounted() {
    this.getOrders()
  }
}
</script>
