<template>
  <ol class="pay-list mt-5 d-flex justify-content-between list-unstyled pe-0 position-relative">
    <li class="d-flex flex-column align-items-center">
      <p class="number d-flex justify-content-center align-items-center mb-0" :class="{ 'number-active': path === '/cart/checkProduct' || path === '/cart/CartForm' ||  path === '/cart/payList' || path === '/cart/orderDone'}">1</p>
      <p class="fw-bold mb-0">確認行程</p>
    </li>
    <li class="d-flex flex-column align-items-center">
      <p class="number d-flex justify-content-center align-items-center mb-0"
      :class="{ 'number-active': path === '/cart/CartForm' || path === '/cart/payList' || path === '/cart/orderDone'}">2</p>
      <p class="fw-bold mb-0">訂單資料</p>
    </li>
    <!--  -->
    <li class="d-flex flex-column align-items-center">
      <p class="number d-flex justify-content-center align-items-center mb-0"
      :class="{ 'number-active': path === '/cart/payList' || path === '/cart/orderDone' }">3</p>
      <p class="fw-bold mb-0">付款資料</p>
    </li>
    <!-- cart/orderDone -->
    <li class="d-flex flex-column align-items-center">
      <p class="number d-flex justify-content-center align-items-center mb-0"
      :class="{ 'number-active': path === '/cart/orderDone' }">4</p>
      <p class="fw-bold mb-0">訂單完成</p>
    </li>
  </ol>
</template>
<script>
export default {
    data() {
        return {
            path:'' // 初始状态设为false
        }
    },
    mounted(){
        this.path = this.$route.path;
    }
}
</script>