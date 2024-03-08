<template>
  <div class="row g-3">
    <div
      class="col-12 col-md-6 col-lg-4"
      v-for="attractionItem in enabledAttractions"
      :key="attractionItem.id"
    >
      <div class="card card-att h-100">
        <span class="tag text-white">{{ attractionItem.category }}</span>
        <div class="card-att-img">
          <img :src="attractionItem.imageUrl" class="img-fluid" alt="" />
        </div>
        <div class="heart3">
          <i class="bi bi-heart heart-click"></i>
        </div>
        <div style="transform: rotate(0)">
          <div class="card-body card-body-att">
            <div
              class="card-title d-flex justify-content-between align-items-center card-title-att"
            >
              <h4 class="fs-5 fs-xl-4 fw-bold text-primary-700 card-title-att">
                {{ attractionItem.title }}
              </h4>
            </div>
            <p class="card-text card-font-truncate">
              {{ truncateContent(attractionItem.description, 53) }}
            </p>
          </div>
          <div class="card-footer text-end border-0">
            <router-link
              :to="{
                name: 'TouristSingleAttraction',
                params: { category: attractionItem.category, title: attractionItem.title }
              }"
              class="fs-5 stretched-link"
              type="button"
              >more</router-link
            >
            <!-- <a href="#" class="fs-5 stretched-link"></a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card-att .card-att-img img {
  border-radius: calc(1.25rem - 1px) calc(1.25rem - 1px) 0 0 ;
}
</style>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  data() {
    return {
      attractions: [],
      enabledAttractions: []
    }
  },
  methods: {
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          // console.log(res)
          this.attractions = res.data
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1) {
              // console.log(item)
              this.enabledAttractions.push(item)
            }
          })
        })
        .catch((err) => {
          // console.log(err)
          alert(`${err.message}`)
        })
    },
    truncateContent(content, maxLength) {
      if (content && content.length > maxLength) {
        return content.substring(0, maxLength) + '...'
      }
      return content
    }
  },
  mounted() {
    this.getAttractions()
  }
}
</script>
