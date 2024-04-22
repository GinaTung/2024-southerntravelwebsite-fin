<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ productTitle }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row" v-for="item in userCart" :key="item.id">
            <div v-if="item.product.id === this.productId">
              <div class="col-12 mb-4">
                <img
                  class="img-fluid rounded-2 h-75"
                  :src="item.product.imageUrl"
                  alt="item.title"
                />
              </div>
              <div class="col-12">
                <span class="badge bg-primary rounded-pill mb-4 px-4 py-2">{{ item.product.category }}</span>
                <p style="text-align: justify">旅遊方案行程：</p>
                <div v-for="(item, index) in newProductsContent" :key="index + 123">
                  <p
                    v-for="(description, i) in item.content"
                    :key="i"
                    :class="{ 'mb-3': i === 2, 'ps-10': i !== 0 && i !== 3 }"
                  >
                    {{ description }}
                  </p>
                </div>
                <br />
                <p style="text-align: justify">
                  旅遊方案描述： <br />{{ item.product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    userCart: {
      type: Object,
      default() {
        return {}
      }
    },
    productId: {
      type: String,
      required: true
    },
    productTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      modal: '',
      qty: 1,
      newProductsContent: '',
      enabledProducts: [],
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    getCookie(cookieName) {
      const cookies = document.cookie.split(';')
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=')
        if (name === cookieName) {
          return value
        }
      }
      return null
    },
    openModal() {
      this.modal.show()
      this.getProducts()
    },
    hideModal() {
      this.modal.hide()
    },
    getProducts() {
      this.enabledProducts = []; // 清空之前的数据
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          const filteredItems = res.data.filter(item => item.is_enabled === 1 && item.title === this.productTitle);
          this.enabledProducts.push(...filteredItems);
          this.getNewText()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得旅遊方案資料失敗`)
        })
    },
    getNewText() {
      const idDescriptionsMap = {}
      this.enabledProducts.forEach((item, index) => {
        // 檢查 item.description 是否存在
        if (item.content) {
          const splitText = item.content.split(';')
          splitText.forEach((text) => {
            const trimmedText = text.trim()

            if (trimmedText !== '') {
              // 檢查是否為空字符串
              if (!idDescriptionsMap[item.id]) {
                idDescriptionsMap[item.id] = []
              }
              idDescriptionsMap[item.id].push(trimmedText)
            }
          })
        }
      })
      // 刪除陣列為空的項目
      for (const id in idDescriptionsMap) {
        if (idDescriptionsMap[id].length === 0) {
          delete idDescriptionsMap[id]
        }
      }
      // 將 id 與描述合併成物件
      this.newProductsContent = Object.entries(idDescriptionsMap).map(([id, content]) => ({
        id,
        content
      }))
    }
  }
}
</script>
