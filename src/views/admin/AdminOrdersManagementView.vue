<template>
  <!-- <VueLoading :active="isLoading" :z-index="1060" /> -->
  <div class="container">
    <div class="row flex-column flex-lg-row">
      <div class="col-12 col-lg-2">
        <h1 class="my-4">訂單管理</h1>
        <AdminSidebar></AdminSidebar>
      </div>
      <div class="col-12 col-lg-10">
        <div class="text-end mt-18"></div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th>購買時間</th>
              <th>Email</th>
              <th>購買款項</th>
              <th>應付金額</th>
              <th>是否付款</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in orders" :key="item.id">
                {{ orders }}
              <!-- <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
                  <td>{{ $filters.date(item.create_at) }}</td>
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
                        :id="`paidSwitch${item.id}`"
                        v-model="item.is_paid"
                        @change="updatePaid(item)"
                      />
                      <label class="form-check-label" :for="`paidSwitch${item.id}`">
                        <span v-if="item.is_paid">已付款</span>
                        <span v-else>未付款</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button class="btn btn-outline-primary btn-sm" type="button" @click="openModal(item)">
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
                </tr> -->
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
</template>

<script>
// import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import AdminSidebar from '../../components/AdminSidebar.vue'
const api_url2 = import.meta.env.VITE_API_URL2

export default {
  components: {
    AdminSidebar
  },
  data() {
    return {
      orders: [],
      pageTotal: 0,
      currentPage: 1,
      limitPage: 10,
      parsedLinks: ''
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
        })
        .catch((err) => {
            console.log(err)
        })
    }
  },
  mounted(){
    this.getOrders()
  }
}
</script>
