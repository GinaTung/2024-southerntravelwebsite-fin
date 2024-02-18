<template>
  <front-layout-header />
  <router-view />
  <front-layout-footer />
</template>

<script>
import FrontLayoutHeader from '../components/FrontLayoutHeader.vue';
import FrontLayoutFooter from '../components/FrontLayoutFooter.vue';
export default {
  components: {
    FrontLayoutHeader,FrontLayoutFooter
  },
  // 其他相關設定...
};
</script>