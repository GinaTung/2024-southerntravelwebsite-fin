<template>
    <div
      class="modal fade"
      id="delCartModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="delCartModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0" >
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">
              <span>刪除購物車編號: {{ saveCartsDelModal.cartId }}</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger me-2">預約行程名稱：{{ saveCartsDelModal.productTitle }}</strong><br>
            <span class="text-primary">預約數量：{{ saveCartsDelModal.qty }}位</span
            >(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteCart(saveCartsDelModal.cartId,saveCartsDelModal.productTitle)">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { Modal } from 'bootstrap'
  
  export default {
    props: {
        userCarts: Array,
        deleteCart: Function, // 声明 delOrder 为一个函数类型的 prop
        saveCartsDelModal:Object
    },
    data() {
      return {
        delModal: null,
        // userCarts: []
      }
    },
    methods: {
      openModal() {
        this.delModal.show()
      },
      closeModal() {
        this.delModal.hide()
      }
    },
    mounted() {
      this.delModal = new Modal(this.$refs.delCartModal)
    }
  }
  </script>
  