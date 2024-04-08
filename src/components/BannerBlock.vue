<template>
    <div class="ad d-flex justify-content-center align-items-center">
        <p class="fs-3 fs-md-2 text-center fw-bold" v-if="this.linkPath === '/TouristAttractions'">南部旅遊景點</p>
        <!--  -->
        <p class="fs-3 fs-md-2 text-center fw-bold" v-if="this.linkPath === '/TouristPackage'">南部旅遊方案</p>
        <p class="fs-3 fs-md-2 text-center fw-bold" v-if="linkName === 'TouristSingleAttraction' && linkCategory === $route.params.category && linkTitle">
            {{ linkCategory }} - {{ linkTitle }}</p>
        <p class="fs-3 fs-md-2 text-center fw-bold" v-if="linkName === 'TouristSinglePackage' && linkCategory === $route.params.category && linkTitle">
            {{ linkCategory }}<br>{{ linkTitle }}</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            linkPath:'',
            linkCategory: '',
            linkTitle:'',
            linkName:'',
        }
    },
    mounted() {
        const { path, params,name } = this.$route;       
        this.linkPath = path;
        this.linkName = name;
        this.linkCategory = params.category;
        this.linkTitle = params.title;
    }
}
</script>
<style>
.ad {
    background-image: url("../assets/img/banner-lg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
    max-height: 250px;
    height: 250px;
  }
  
</style>