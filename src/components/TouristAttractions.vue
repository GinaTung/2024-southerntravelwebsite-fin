<template>
  <div class="southern-tourist-attractions bg-light">
    <div class="container py-10 py-lg-30">
      <p class="fs-4 fs-lg-1 text-primary-700 fw-bold mb-2 text-center">南部旅遊景點</p>
      <p class="fs-6 fs-lg-5 text-center mb-5 mb-lg-20">Southern tourist attractions</p>
      <template v-if="isLoading">
        <div class="col-12 mb-5 mb-lg-0">
          <div class="card-attractions">
            <!-- 愛心點選 -->
            <div class="heart">
              <i class="bi bi-heart heart-click" data-heartStatus="false"></i>
            </div>
            <img
              src="https://raw.githubusercontent.com/GinaTung/2024-southerntravelwebsite-fin/dev/public/products/duck.jpg"
              class="img-fluid opacity-25 card-attractions-img"
              alt="Placeholder Image"
            />
            <a href="#" class="stretched-link">
              <div class="mask d-none d-sm-flex flex-column placeholder">
                <p class="mb-4 placeholder w-25"></p>
                <p class="placeholder w-40 mb-2"></p>
                <p class="placeholder w-50 mb-2"></p>
                <p class="placeholder w-60 mb-2"></p>
                <p class="placeholder w-75 mb-2"></p>
                <p class="placeholder w-85 mb-2"></p>
              </div>
              <div class="mask d-flex d-sm-none flex-column placeholder-glow">
                <p class="mb-4 placeholder w-50"></p>
                <p class="placeholder"></p>
              </div>
            </a>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="row">
          <div class="col-12 col-lg-6 mb-5 mb-lg-0">
            <div class="card-attractions">
              <!-- 愛心點選 -->
              <button
                class="heart border-0"
                @click="toggleFavorite('-L9tH8jxVb2Ka_DYPwng', '嘉義', '高跟鞋教堂','./img/pic-church2.jpg')"
                type="button"
              >
                <i
                  :class="[
                    'bi',
                    {
                      'bi-heart-fill': isFavorite['-L9tH8jxVb2Ka_DYPwng'],
                      'bi-heart': !isFavorite['-L9tH8jxVb2Ka_DYPwng']
                    }
                  ]"
                  style="font-size: 24px"
                ></i>
              </button>
              <img
                src="../assets/img/pic-church2.jpg"
                class="img-fluid card-attractions-img"
                alt="高跟鞋教堂"
              />
              <a
                href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%95%99%E5%A0%82"
                class="stretched-link"
              >
                <div class="mask d-none d-sm-flex">
                  <p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p>
                  <p class="fs-6 fs-xl-5">
                    高跟鞋教堂高度約17m，寬度約11m，主結構由1,269根鋼架組成，外表共約320餘片玻璃，造型相當亮麗美觀，其設計與裝設不僅是全臺第一，更是全世界唯一。
                  </p>
                </div>
                <div class="mask d-flex d-sm-none flex-column">
                  <p class="fs-5 fs-xl-3 fw-bold mb-4">高跟鞋教堂</p>
                  <p class="fs-6">打卡熱點</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row h-100">
              <div class="col-12 col-sm-6 d-flex flex-column justify-content-between">
                <div class="image-mask mb-5 mb-lg-6">
                  <!-- 愛心點選 -->
                  <button
                    class="heart border-0"
                    @click="toggleFavorite('WJHUaKt', '高雄', '旗津黃金海韻-海珍珠','./attractions/pic-4.jpg')"
                    type="button"
                  >
                    <i
                      :class="[
                        'bi',
                        {
                          'bi-heart-fill': isFavorite['WJHUaKt'],
                          'bi-heart': !isFavorite['WJHUaKt']
                        }
                      ]"
                      style="font-size: 24px"
                    ></i>
                  </button>
                  <img
                    src="../assets/img/attraction2.png"
                    alt="Image 2"
                    class="img-size-attractions-1 image-mask-img"
                  />
                  <a
                    href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%97%97%E6%B4%A5%E9%BB%83%E9%87%91%E6%B5%B7%E9%9F%BB-%E6%B5%B7%E7%8F%8D%E7%8F%A0"
                    class="stretched-link"
                  >
                    <div class="mask mask-33 flex-column">
                      <p class="fs-5 fs-xl-4 fw-bold mb-2">黃金海韻海珍珠</p>
                      <p class="fs-6">情侶必遊之地</p>
                    </div>
                  </a>
                </div>
                <div class="image-mask mb-5 mb-lg-0">
                  <!-- 愛心點選 -->
                  <button
                    class="heart border-0"
                    @click="toggleFavorite('UR6kDTk', '台南', '安平古堡','./img/attraction5.png')"
                    type="button"
                  >
                    <i
                      :class="[
                        'bi',
                        {
                          'bi-heart-fill': isFavorite['UR6kDTk'],
                          'bi-heart': !isFavorite['UR6kDTk']
                        }
                      ]"
                      style="font-size: 24px"
                    ></i>
                  </button>
                  <img
                    src="../assets/img/attraction5.png"
                    alt="Image 2"
                    class="img-size-attractions-2 image-mask-img"
                  />
                  <a
                    href="#/TouristAttractions/%E5%8F%B0%E5%8D%97/%E5%AE%89%E5%B9%B3%E5%8F%A4%E5%A0%A1"
                    class="stretched-link"
                  >
                    <div class="mask mask-62 flex-column">
                      <p class="fs-5 fs-xl-4 fw-bold mb-2">安平古堡</p>
                      <p class="fs-6">荷蘭時期遺蹟</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-12 col-sm-6 d-flex flex-column justify-content-between">
                <div class="image-mask mb-5 mb-lg-6 h-100">
                  <!-- 愛心點選 -->
                  <button
                    class="heart border-0"
                    @click="toggleFavorite('KTpJNvf', '嘉義', '嘉義公園-射日塔','./img/attraction1-1.jpg')"
                    type="button"
                  >
                    <i
                      :class="[
                        'bi',
                        {
                          'bi-heart-fill': isFavorite['KTpJNvf'],
                          'bi-heart': !isFavorite['KTpJNvf']
                        }
                      ]"
                      style="font-size: 24px"
                    ></i>
                  </button>
                  <img
                    src="../assets/img/attraction1-1.jpg"
                    alt="嘉義公園-射日塔"
                    class="img-fluid img-size-attractions-2 image-mask-img h-100"
                  />
                  <a
                    href="#/TouristAttractions/%E5%98%89%E7%BE%A9/%E5%98%89%E7%BE%A9%E5%85%AC%E5%9C%92-%E5%B0%84%E6%97%A5%E5%A1%94"
                    class="stretched-link"
                  >
                    <div class="mask flex-column">
                      <p class="fs-5 fs-xl-4 fw-bold mb-2">嘉義公園-射日塔</p>
                      <p class="fs-6">親子共遊</p>
                    </div>
                  </a>
                </div>
                <div class="image-mask mb-5 mb-lg-0">
                  <!-- 愛心點選 -->
                  <button
                    class="heart border-0"
                    @click="toggleFavorite('sj3zTH_', '高雄', '愛河河畔美景','./attractions/loveriver3.jpg')"
                    type="button"
                  >
                    <i
                      :class="[
                        'bi',
                        {
                          'bi-heart-fill': isFavorite['sj3zTH_'],
                          'bi-heart': !isFavorite['sj3zTH_']
                        }
                      ]"
                      style="font-size: 24px"
                    ></i>
                  </button>
                  <img
                    src="../assets/img/attraction3.png"
                    alt="Image 4"
                    class="img-fluid img-size-attractions-1 image-mask-img"
                  />
                  <a
                    href="#/TouristAttractions/%E9%AB%98%E9%9B%84/%E6%84%9B%E6%B2%B3%E6%B2%B3%E7%95%94%E7%BE%8E%E6%99%AF"
                    class="stretched-link"
                  >
                    <div class="mask flex-column">
                      <p class="fs-5 fs-xl-4 fw-bold mb-2">愛河河畔美景</p>
                      <p class="fs-6">愛之船情侶遊覽</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style></style>
<script>
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert.js'

export default {
  data() {
    return {
      attractions: [],
      enabledAttractions: [],
      isLoading: false,
      heartData: [],
      isFavorite: {},
      userId: '',
      token: ''
    }
  },
  methods: {
    getHeartData() {
      this.axios
        .get(`${api_url2}/hearts`)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.userId === this.userId && item.tag === '旅遊景點') {
              // 設置收藏狀態
              this.isFavorite[item.product] = true
            }
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
        })
    },
    toggleFavorite(productId, category, title, imageUrl) {
      if (!this.token) {
        sweetAlert.threeLayerCheckType('warning', '請登入會員後，才能加入收藏')
      } else {
        // 取得收藏資料
        this.axios
          .get(`${api_url2}/hearts`)
          .then((res) => {
            // 檢查是否已存在收藏資料
            const existingData = res.data.find(
              (item) =>
                item.product === productId && item.userId === this.userId && item.tag === '旅遊景點'
            )
            if (existingData) {
              // 如果已存在收藏資料，則執行刪除操作
              this.axios
                .delete(`${api_url2}/hearts/${existingData.id}`)
                .then((res) => {
                  // 更新收藏狀態
                  this.isFavorite[productId] = false
                  sweetAlert.threeLayerCheckType('success', `取消收藏 ${title} 成功`)
                  this.getHeartData()
                })
                .catch((err) => {
                  sweetAlert.threeLayerCheckType('error', `取消收藏資料失敗`)
                })
            } else {
              // 如果不存在收藏資料，則新增收藏資料
              this.axios
                .post(`${api_url2}/hearts`, {
                  product: productId,
                  category,
                  title,
                  userId: this.userId,
                  tag: '旅遊景點',
                  imageUrl
                })
                .then((res) => {
                  // 更新收藏狀態
                  this.isFavorite[productId] = true
                  sweetAlert.threeLayerCheckType('success', `已加入收藏 ${title} 成功`)
                  this.getHeartData()
                })
                .catch((err) => {
                  sweetAlert.threeLayerCheckType('error', `收藏資料失敗`)
                })
            }
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `取得愛心收藏資料失敗`)
          })
      }
    },
    getAttractions() {
      this.axios
        .get(`${api_url2}/attractions`)
        .then((res) => {
          this.attractions = res.data
          this.attractions.forEach((item) => {
            if (item.is_enabled === 1) {
              this.enabledAttractions.push(item)
            }
          })
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
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
    }
  },
  mounted() {
    this.isLoading = true
    const cookieUserId = this.getCookie('userId')
    const cookieToken = this.getCookie('hexTokenU')
    this.userId = cookieUserId * 1
    this.token = cookieToken
    setTimeout(() => {
      this.isLoading = false
      this.getAttractions()
      if(this.token){
        this.getHeartData()
      }
    }, 3000)
  }
}
</script>
