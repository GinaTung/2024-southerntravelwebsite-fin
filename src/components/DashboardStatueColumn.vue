<template>
  <div class="row g-0">
    <div class="col-6">
      <order-card
        :count="payStatus.length"
        label="尚未付款訂單"
        cardClass="rounded-border-top border"
      ></order-card>
    </div>
    <div class="col-6">
      <order-card
        :count="checkoutStatue.length"
        label="預約出遊安排訂單"
        cardClass="rounded-border-end border"
      ></order-card>
    </div>
    <div class="col-6">
      <order-card
        :count="billStatus.length"
        label="即將出遊訂單"
        cardClass="rounded-border-bottom border"
      ></order-card>
    </div>
    <div class="col-6">
      <order-card
        :count="orderStatus.length"
        label="出遊結束訂單"
        cardClass="rounded-border-start border"
      ></order-card>
    </div>
  </div>
</template>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert'

export default {
  components: {
    'order-card': {
      props: {
        count: {
          type: Number,
          required: true
        },
        label: {
          type: String,
          required: true
        },
        cardClass: {
          type: String,
          required: true
        }
      },
      template: `
        <div :class="cardClass" class="card border shadow-sm bg-body-tertiary">
          <div class="card-body">
            <h5 class="card-title">{{ count }}</h5>
            <p class="card-text">{{ label }}</p>
          </div>
        </div>
      `
    }
  },
  data() {
    return {
      orders: []
    }
  },
  computed: {
    payStatus() {
      return this.orders.filter((item) => !item.user.status)
    },
    checkoutStatue() {
      return this.orders.filter((item) => item.user.status && !item.checkDataStatus)
    },
    billStatus() {
      return this.orders.filter(
        (item) => item.user.status && item.checkDataStatus && item.billStatus && !item.status
      )
    },
    orderStatus() {
      return this.orders.filter(
        (item) => item.user.status && item.checkDataStatus && item.billStatus && item.status
      )
    }
  },
  methods: {
    getOrders() {
      this.axios
        .get(`${api_url2}/orders`)
        .then((res) => {
          this.orders = res.data
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得訂單資料失敗`)
        })
    }
  },
  mounted() {
    this.getOrders()
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/all.scss';
.rounded-border-top {
  border-radius: 12px 0 0 0;
}
.rounded-border-end {
  border-radius: 0 12px 0 0;
}
.rounded-border-bottom {
  border-radius: 0 0 0 12px;
}
.rounded-border-start {
  border-radius: 0 0 12px 0;
}
</style>
