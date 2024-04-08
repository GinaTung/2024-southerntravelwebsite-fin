<template>
   <VueLoading :active="isLoading" :z-index="1060" />
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="orderModal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節(目前查看訂單編號：{{ tempOrder.id }})</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">主要聯繫人</th>
                    <td>{{ tempOrder.user.name }} {{ tempOrder.user.appellation }}</td>
                  </tr>
                  <tr>
                    <th>身分證字號</th>
                    <td>{{ tempOrder.user.memberId }}</td>
                  </tr>
                  <tr>
                    <th>護照號碼</th>
                    <td>{{ tempOrder.user.passport }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td v-if="tempOrder.user">
                      {{ tempOrder.user.create_at }}
                    </td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ tempOrder.paid_date }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.user?.status" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      <template v-for="item in tempOrder.product" :key="item.id">
                        {{ thousand(item.final_total) }}
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 class="mb-3">選購商品</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">行程名稱</th>
                    <th scope="col">預約數量</th>
                    <th scope="col">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(productItem, index) in tempOrder.product" :key="index + 123">
                    <tr v-for="item in productItem.products" :key="item.id">
                      <th>
                        {{ item.title }}
                      </th>
                      <td>預約 {{ item.qty }} / 位</td>
                      <td>
                        {{ thousand(item.final_total) }}
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
              <div class="d-flex justify-content-start">
                <div class="me-10" v-if="tempOrder.user">
                  目前訂單狀態 :
                  <span
                    v-if="
                      !tempOrder.status &&
                      !tempOrder.billStatus &&
                      !tempOrder.checkDataStatus &&
                      !tempOrder.user.status
                    "
                    class="text-primary-emphasis"
                  >
                    訂單處理中
                  </span>
                  <span
                    v-else-if="
                      !tempOrder.status &&
                      !tempOrder.billStatus &&
                      !tempOrder.checkDataStatus &&
                      tempOrder.user.status
                    "
                    class="text-primary"
                  >
                    確認出遊資料中
                  </span>
                  <span
                    v-else-if="
                      !tempOrder.status &&
                      !tempOrder.billStatus &&
                      tempOrder.checkDataStatus &&
                      tempOrder.user.status
                    "
                    class="text-warning"
                  >
                    發票開立中
                  </span>
                  <span
                    v-else-if="
                      !tempOrder.status &&
                      tempOrder.billStatus &&
                      tempOrder.checkDataStatus &&
                      tempOrder.user.status
                    "
                    class="text-danger"
                  >
                    訂單即將完成，準備出遊
                  </span>
                  <span v-else class="text-success">已出遊結束</span>
                </div>
                <div  v-if="tempOrder.user && tempOrder.user.status===true">
                  <div class="form-check me-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault2"
                      v-model="tempOrder.checkDataStatus"
                    />
                    <label class="form-check-label" for="flexCheckDefault2">
                      <span v-if="tempOrder.checkDataStatus">已確認出遊資料完成</span>
                      <span v-else>未確認出遊資料</span>
                    </label>
                  </div>
                  <div class="form-check me-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault3"
                      v-model="tempOrder.billStatus"
                    />
                    <label class="form-check-label" for="flexCheckDefault3">
                      <span v-if="tempOrder.billStatus">已開立發票</span>
                      <span v-else>未開立發票</span>
                    </label>
                  </div>
                  <div class="form-check me-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault4"
                      v-model="tempOrder.status"
                    />
                    <label class="form-check-label" for="flexCheckDefault4">
                      <span v-if="tempOrder.status">出遊結束</span>
                      <span v-else>最後確認訂單資料</span>
                    </label>
                  </div>
                </div>
                <div v-else>
                  <span class="text-danger">已收到款項時，請更新付款狀態</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary px-6 py-2" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn-turquoise" @click="updateOrderStatue(tempOrder)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
import sweetAlert from '../js/sweetAlert'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  props: {
    order: {
      type: Object
    },
    ordersDate: {
      type: Array
    },
    updatePaid: {
      type: Function 
    },
    getOrders:{
      type: Function
    }
  },
  data() {
    return {
      orderModal: null,
      tempOrder: {},
      isLoading:false
    }
  },
  methods: {
    isCheckout(){
      sweetAlert.twoLayerCheckType("已收到款項時，請更新付款狀態");
    },
    openModal() {
      this.isCheckout()
      this.orderModal.show()
    },
    closeModal() {
      this.orderModal.hide()
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    updateOrderStatue(status) {
      this.isLoading = true;
      // 切换 status 的值
      const updatedStatus = status.user.status
      const updatedUser = {
        status: updatedStatus,
        ...status.user // 保留原来的用户数据
      }
      this.axios
        .patch(`${api_url2}/orders/${status.id}`, {
          user: updatedUser,
          billStatus: status.billStatus,
          checkDataStatus: status.checkDataStatus,
          status: status.status
        })
        .then((res) => {
          this.getOrders()
          this.isLoading = false;
          this.orderModal.hide()
          sweetAlert.threeLayerCheckType('success','更新訂單狀態')
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `${err.message}`);
        })
    }
  },
  watch: {
    order() {
      this.tempOrder = this.order
    }
  },
  mounted() {
    this.orderModal = new Modal(this.$refs.orderModal)

  }
}
</script>
