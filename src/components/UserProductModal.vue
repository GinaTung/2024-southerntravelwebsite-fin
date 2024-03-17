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
    <div class="modal-dialog modal-lg" role="document">
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
              <div class="col-12">
                <img class="img-fluid" :src="item.product.imageUrl" alt="" />
              </div>
              <div class="col-12">
                <span class="badge bg-primary rounded-pill">{{ item.product.category }}</span>
                <p>商品描述：{{ item.product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      required: true // 如果这个数据是必须的，可以添加 required: true
    },
    productTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productData: [],
      status: {},
      modal: '',
      qty: 1,
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
    this.addToCart();
  },
  methods: {
    addToCart() {
      // 在此处编写添加商品到购物车的逻辑
      // console.log('Adding product to cart:', this.userCart);
      // console.log(this.productId,this.productTitle);
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
    },
    openModal() {
      this.modal.show()
    },
    hideModal() {
      this.modal.hide()
    }
  }
}
</script>
