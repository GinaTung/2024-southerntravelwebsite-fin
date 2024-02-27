<template>
    <div class="container">
      <div class="row">
      <div class="col-3">
        <h1 class="my-4">景點管理</h1>
        <AdminSidebar></AdminSidebar>
      </div>
      <div class="col-9">
      <div class="text-end mt-4">
          <button class="btn btn-primary">
            建立新的景點
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                區域
              </th>
              <th>景點名稱</th>
              <th width="120">
                建立日期
              </th>
              <th width="120">
                分類
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td class="text-end"></td>
              <td class="text-end"></td>
              <td>
                <span class="text-success">啟用</span>
                <span>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </template>
  <script>
  import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
  import AdminSidebar from '../../components/AdminSidebar.vue'
  export default {
  components: {
    AdminSidebar
  },
  methods:{
    openModal(status, product) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.modalProduct.show()
      } else if (status === 'edit') {
        this.tempProduct = { ...product }

        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = []
        }
        this.isNew = false
        this.modalProduct.show()
      } else if (status === 'delete') {
        this.tempProduct = { ...product }
        this.modalDel.show()
      }
    },
  },
  mounted() {
    // this.getProducts()
    // this.modalProduct = new bootstrap.Modal(this.$refs.productModal)
    // this.modalDel = new bootstrap.Modal(this.$refs.delProductModal)
  }
}
</script>  