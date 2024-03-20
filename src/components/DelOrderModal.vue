<template>
  <div
    class="modal fade"
    id="delorderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="delorderModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除訂單編號: {{ item.id }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="item.user">
          是否刪除 <strong class="text-danger me-2">訂單編號：{{ item.id }}</strong>
          <span class="text-primary">客戶：{{ item.user.name }}</span
          >(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delOrder">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'

export default {
  props: {
    item: Object,
    delOrder: Function // 声明 delOrder 为一个函数类型的 prop
  },
  data() {
    return {
      delModal: null,
      tempOrder: {}
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
    this.delModal = new Modal(this.$refs.delorderModal)
  }
}
</script>
