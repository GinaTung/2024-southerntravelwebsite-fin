<template>
  <div class="card mb-3 card-att" v-for="productsItem in enabledProducts" :key="productsItem.id">
    <div class="row g-0">
      <div class="col-md-4">
        <span class="tag text-white">{{ productsItem.category }}</span>
        <div class="card-att-img card-att-img-2 h-100">
          <img
            :src="productsItem.imageUrl"
            class="card-img-top img-fluid"
            :alt="productsItem.title"
          />
        </div>
        <div class="heart3">
          <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body px-5">
          <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att mb-4">
            {{ productsItem.title }}
          </h4>

          <div v-for="item in newProductsDes" :key="item.id">
            <div v-if="item.id === productsItem.id">
              <p v-for="description in item.descriptions" :key="description">
                {{ description }}
              </p>
            </div>
          </div>
          <p class="card-text card-text-position">
            <a href="#" class="fs-5">more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      products: [],
      user: '',
      newProductsDes: '',
      enabledProducts: [],
      searchChiayi: [],
      serchTainan: [],
      searchKaohsiung: []
    }
  },
  methods: {
    getProducts() {
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data

          this.products.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.enabledProducts.push(item)
            }
          })
          // 現在 enabledProducts 將包含所有 is_enabled 為 1 的項目
          // console.log(this.enabledProducts)

          this.getNewText()
        })
        .catch((err) => {
          console.log(err)
          // alert(`${err.message}`)
        })
    },
    getNewText() {
      const idDescriptionsMap = {}
      this.products.forEach((item) => {
        // 檢查 item.description 是否存在
        if (item.description) {
          const splitText = item.description.split(';')

          splitText.forEach((text) => {
            const trimmedText = text.trim()

            if (!idDescriptionsMap[item.id]) {
              idDescriptionsMap[item.id] = []
            }
            idDescriptionsMap[item.id].push(trimmedText)
          })
        }
      })

      // 將 id 與描述合併成物件
      this.newProductsDes = Object.entries(idDescriptionsMap).map(([id, descriptions]) => ({
        id,
        descriptions
      }))
      // console.log(this.newProductsDes)
    },
    mounted() {
      this.getProducts()
    }
  }
}
</script>
