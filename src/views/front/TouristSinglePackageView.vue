<template>
    {{ id }}
</template>

<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
    data(){
        return{
            id:'',
            products: [],
            newProductsDes: '',
      enabledProducts: [],
        }
    },        
    created(){
        // 此做法可以取出動態路由，讓ajax取出資料
        console.log(this.$route);

        this.id = this.$route.params.title;
        // // const seed = this.$route.params.id;
        // this.axios.get(`${api_url2}/products/${id}`).then(res=>
        // {
        //     console.log(res)
        //     this.id = id;
        // })
    }
};
</script>