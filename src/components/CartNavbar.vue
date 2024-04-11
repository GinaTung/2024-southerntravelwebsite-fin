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
            path:''
        }
    },
    mounted(){
        this.path = this.$route.path;
    }
}
</script>
<style lang="scss" scoped>
.number {
  border: 1px solid #43b8bd;
  width: 32px;
  height: 32px;
  background-color: #d5f3f4;
  z-index: 1;
}
@media (min-width: 768px) {
  .number {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
}
.number-active {
  background-color: #43b8bd;
  color: #fff;
}
.pay-list::before {
  content: '';
  width: 83%;
  height: 1px;
  background-color: black;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  position: absolute;
  z-index: 1;
}
</style>