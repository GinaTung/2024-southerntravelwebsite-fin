<template>
  <VueLoading :active="isLoading" class="text-center" :z-index="1060" />
  <div class="container py-10 py-lg-30">
    <div class="row">
      <div class="col-md-6 mx-auto pb-5 pb-lg-15">
        <CartNavbar></CartNavbar>
      </div>
    </div>
    <div class="mb-4">
      <p class="d-grid gap-2">
        <button
          class="btn btn-primary-600 border-top"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          @click="toggleOpen"
        >
          總計：{{ thousand(total) }}元<br />購買清單
          <i class="bi bi-chevron-down" v-if="isOpen === false"></i>
          <i class="bi bi-chevron-up" v-else></i>
        </button>
      </p>
      <div class="collapse" id="collapseExample" ref="headerCollapse" v-show="isOpen">
        <div class="card card-body rounded-0">
          <div class="row p-4 p-md-10" v-for="item in userCart" :key="item.id">
            <div class="col-12 col-md-5 col-lg-4">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid h-100" />
            </div>
            <div class="col-12 col-md-7 col-lg-8 d-flex flex-column justify-content-between">
              <div>
                <h4 class="mt-4 mt-md-0 mb-4">套裝行程名稱：{{ item.product.title }}</h4>
                <h5 class="mb-4">單價：{{ thousand(item.product.price) }}</h5>
                <h5 class="mb-4">預約數量：{{ item.qty }} 位</h5>
                <h5 class="mb-4">總計：{{ thousand(item.final_total) }}</h5>
              </div>
              <div>
                <button
                  type="button"
                  class="btn-turquoise border-0 rounded-1"
                  @click="forId(item.product.id, item.product.title)"
                >
                  查看更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="orderId === ordersData.id">
       <VeeForm id="form" ref="form" v-slot="{ errors }">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <h3 class="mb-4">訂單資料</h3>
            <div class="form-floating mb-4">
              <VeeField
                type="text"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['主要聯繫人姓名'] }"
                v-model="ordersData.user.name"
                id="floatingInput"
                name="主要聯繫人姓名"
                placeholder="請輸入姓名"
                rules="required"
              />
              <label for="floatingInput" class="form-label">主要聯繫人姓名</label>
              <ErrorMessage name="主要聯繫人姓名" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                id="floatingAppellation"
                name="稱謂"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['稱謂'] }"
                placeholder="請選擇稱謂"
                rules="required"
                v-model="ordersData.user.appellation"
                as="select"
              >
                <option selected value="" disabled>請選擇稱謂</option>
                <option value="female">女士</option>
                <option value="male">男士</option>
              </VeeField>
              <label for="floatingAppellation">稱謂</label>
              <ErrorMessage name="稱謂" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="text"
                name="身分證字號"
                class="form-control rounded-1"
                id="floatingMemberId"
                :class="{ 'is-invalid': errors['身分證字號'] }"
                placeholder="請輸入身分證字號"
                v-model="ordersData.user.memberId"
                :rules="verifyId"
              />
              <label for="floatingMemberId">身分證字號</label>
              <ErrorMessage name="身分證字號" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="text"
                name="護照號碼"
                class="form-control rounded-1"
                id="floatingPassport"
                :class="{ 'is-invalid': errors['護照號碼'] }"
                placeholder="請輸入護照號碼"
                v-model="ordersData.user.passport"
                rules="numeric:true|length:9|required"
              />
              <label for="floatingPassport">護照號碼</label>
              <ErrorMessage name="護照號碼" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="date"
                name="生日"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['生日'] }"
                id="floatingDate"
                placeholder="2024/03/08"
                v-model="ordersData.user.birthday"
                :rules="isOver18"
              />
              <label for="floatingDate">生日(主要聯繫人需滿18歲)</label>
              <ErrorMessage name="生日" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                id="floatingTel"
                name="手機號碼"
                type="text"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['手機號碼'] }"
                placeholder="請輸入手機號碼"
                :rules="isPhone"
                v-model="ordersData.user.tel"
              />
              <label for="floatingTel">請輸入手機號碼</label>
              <ErrorMessage name="手機號碼" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="email"
                name="email"
                class="form-control rounded-1"
                v-model="ordersData.user.email"
                id="floatingEmail"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                autocomplete="useremail"
              />
              <label for="floatingEmail">請輸入 Email</label>
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                name="住址"
                type="text"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['住址'] }"
                id="floatingAddress"
                placeholder="縣市鄉鎮市區"
                v-model="ordersData.user.address"
                rules="min:10|required"
              />
              <label for="floatingAddress">住址</label>
              <ErrorMessage name="住址" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <h3 class="mb-4">取件方式</h3>
            <div class="form-floating mb-4">
              <VeeField
                name="取件方式"
                v-model="ordersData.user.shippingMethod"
                class="form-select rounded-1"
                id="floatingSelect2"
                :class="{ 'is-invalid': errors['取件方式'] }"
                aria-label="Floating label select example"
                rules="required"
                as="select"
              >
                <option selected value="" disabled>請選擇取件方式</option>
                <option value="電子郵件">電子郵件</option>
                <option value="郵寄">郵寄</option>
              </VeeField>
              <label for="floatingSelect2">選擇取件方式</label>
              <ErrorMessage name="取件方式" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <textarea
                class="form-control rounded-1"
                placeholder="備註"
                id="floatingTextarea2"
                style="height: 280px"
                v-model="ordersData.user.comment"
              ></textarea>
              <label for="floatingTextarea2">備註(如:飲食、暈車等注意事項)</label>
            </div>
          </div>
        </div>
      </VeeForm>
    </div>
    <div v-else>
      <VeeForm id="form" ref="form" v-slot="{ errors }">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <h3 class="mb-4">訂單資料</h3>
            <div class="form-floating mb-4">
              <VeeField
                type="text"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['主要聯繫人姓名'] }"
                v-model="user.name"
                id="floatingInput"
                name="主要聯繫人姓名"
                placeholder="請輸入姓名"
                rules="required"
              />
              <label for="floatingInput" class="form-label">主要聯繫人姓名</label>
              <ErrorMessage name="主要聯繫人姓名" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                id="floatingAppellation"
                name="稱謂"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['稱謂'] }"
                placeholder="請選擇稱謂"
                rules="required"
                v-model="user.appellation"
                as="select"
              >
                <option selected value="" disabled>請選擇稱謂</option>
                <option value="female">女士</option>
                <option value="male">男士</option>
              </VeeField>
              <label for="floatingAppellation">稱謂</label>
              <ErrorMessage name="稱謂" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="text"
                name="身分證字號"
                class="form-control rounded-1"
                id="floatingMemberId"
                :class="{ 'is-invalid': errors['身分證字號'] }"
                placeholder="請輸入身分證字號"
                v-model="user.memberId"
                :rules="verifyId"
              />
              <label for="floatingMemberId">身分證字號</label>
              <ErrorMessage name="身分證字號" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="text"
                name="護照號碼"
                class="form-control rounded-1"
                id="floatingPassport"
                :class="{ 'is-invalid': errors['護照號碼'] }"
                placeholder="請輸入護照號碼"
                v-model="user.passport"
                rules="numeric:true|length:9|required"
              />
              <label for="floatingPassport">護照號碼</label>
              <ErrorMessage name="護照號碼" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="date"
                name="生日"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['生日'] }"
                id="floatingDate"
                placeholder="2024/03/08"
                v-model="user.birthday"
                :rules="isOver18"
              />
              <label for="floatingDate">生日(主要聯繫人需滿18歲)</label>
              <ErrorMessage name="生日" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                id="floatingTel"
                name="手機號碼"
                type="tel"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['手機號碼'] }"
                placeholder="請輸入手機號碼"
                :rules="isPhone"
                v-model="user.tel"
              />
              <label for="floatingTel">請輸入手機號碼</label>
              <ErrorMessage name="手機號碼" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                type="email"
                name="email"
                class="form-control rounded-1"
                v-model="user.email"
                id="floatingEmail"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                autocomplete="useremail"
              />
              <label for="floatingEmail">請輸入 Email</label>
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <VeeField
                name="住址"
                type="text"
                class="form-control rounded-1"
                :class="{ 'is-invalid': errors['住址'] }"
                id="floatingAddress"
                placeholder="縣市鄉鎮市區"
                v-model="user.address"
                rules="min:10|required"
              />
              <label for="floatingAddress">住址</label>
              <ErrorMessage name="住址" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <h3 class="mb-4">取件方式</h3>
            <div class="form-floating mb-4">
              <VeeField
                name="取件方式"
                v-model="user.shippingMethod"
                class="form-select rounded-1"
                id="floatingSelect2"
                :class="{ 'is-invalid': errors['取件方式'] }"
                aria-label="Floating label select example"
                rules="required"
                as="select"
              >
                <option selected value="" disabled>請選擇取件方式</option>
                <option value="電子郵件">電子郵件</option>
                <option value="郵寄">郵寄</option>
              </VeeField>
              <label for="floatingSelect2">選擇取件方式</label>
              <ErrorMessage name="取件方式" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-4">
              <textarea
                class="form-control rounded-1"
                placeholder="備註"
                id="floatingTextarea2"
                style="height: 280px"
                v-model="user.comment"
              ></textarea>
              <label for="floatingTextarea2">備註(如:飲食、暈車等注意事項)</label>
            </div>
          </div>
        </div>
      </VeeForm>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn-cerulean w-50 w-md-25 fs-5 mt-4 me-1" @click="backPage" type="button">
        上一步
      </button>
      <button class="btn-square mt-4 fs-5 w-50 w-md-25" @click="orderData" type="button">
        下一步
      </button>
    </div>
  </div>
  <UserProductModal
    ref="userProductModal"
    :user-cart="userCart"
    :product-id="productId"
    :product-title="productTitle"
  />
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue'
import CartNavbar from '@/components/CartNavbar.vue'
import Collapse from 'bootstrap/js/dist/collapse'
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '../../js/sweetAlert.js'

export default {
  components: {
    CartNavbar,
    UserProductModal
  },
  data() {
    return {
      cartsData: [],
      userCart: [],
      userId: '',
      isOpen: false,
      headerCollapse: {},
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
        birthday: '',
        comment: '',
        shippingMethod: '',
        passport: '',
        memberId: '',
        appellation: ''
      },
      shippingMethod: ['電子郵件', '郵寄'],
      total: 0,
      productId: '',
      productTitle: '',
      cartDataId: '',
      ordersData: [],
      isLoading: false,
      orderId: 0
    }
  },
  watch: {
    $route() {
      this.headerCollapse.hide()
    }
  },
  methods: {
    verifyId(id) {
      id = id.trim()

      if (id.length === 0) {
        return '身份證字號 為必填'
      }

      if (id.length != 10) {
        return '身份證字號 長度需為10'
      }

      let countyCode = id.charCodeAt(0)
      if ((countyCode < 65) | (countyCode > 90)) {
        return '身份證字號 字首英文代號，縣市不正確'
      }

      let genderCode = id.charCodeAt(1)
      if (genderCode != 49 && genderCode != 50) {
        return '身份證字號 性別代碼不正確'
      }

      let serialCode = id.slice(2)
      for (let i in serialCode) {
        let c = serialCode.charCodeAt(i)
        if ((c < 48) | (c > 57)) {
          return '身份證字號 數字區出現非數字字元'
        }
      }

      let conver = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
      let weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]

      id = String(conver.indexOf(id[0]) + 10) + id.slice(1)

      let checkSum = 0
      for (let i = 0; i < id.length; i++) {
        let c = parseInt(id[i])
        let w = weights[i]
        checkSum += c * w
      }

      let verification = checkSum % 10 == 0

      if (!verification) {
        return '身份證字號 檢核碼錯誤'
      }

      return verification
    },
    isOver18(birthday) {
      if (birthday.length === 0) {
        return '生日 為必填'
      }
      // 将生日字符串转换为日期对象
      const birthDate = new Date(birthday)

      // 获取当前日期
      const currentDate = new Date()

      // 计算年龄差
      const ageDifference = currentDate.getFullYear() - birthDate.getFullYear()

      // 如果当前日期在生日之前，年龄减1
      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        // 如果年龄小于18岁，返回错误提示
        if (ageDifference - 1 < 18) {
          return '主要聯繫人需滿18歲'
        }
        // 否则返回 true
        return true
      }

      // 如果当前日期在生日之后或是同一天
      // 如果年龄小于18岁，返回错误提示
      if (ageDifference < 18) {
        return '主要聯繫人需滿18歲'
      }
      // 否则返回 true
      return true
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    backPage() {
      this.$router.go(-1)
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    forId(id, title) {
      // console.log(id,title);
      this.productId = id
      this.productTitle = title
      this.$refs.userProductModal.openModal()
    },
    getCartsData() {
      this.axios
        .get(`${api_url2}/cartsData`)
        .then((res) => {
          this.cartsData = res.data
          this.cartsData.forEach((item) => {
            if (item.status === false && item.userId === this.userId) {
              item.data.forEach((dataItem) => {
                this.userCart.push(dataItem)
                this.isLoading = false
              })
            }
          })
          this.userCart.forEach((item) => {
            this.total += item.final_total
          })
        })
        .catch((err) => {
          this.isLoading = false
          sweetAlert.threeLayerCheckType('error', `取得購買資料失敗`);
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
    },
    thousand(data) {
      if (data !== undefined) {
        data = data.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      }
      return `$ ${data}`
    },
    orderData() {
      // 檢查必填欄位是否有空值
      if (this.orderId){
        if (
          !this.ordersData.user.name ||
          !this.ordersData.user.email ||
          !this.ordersData.user.tel ||
          !this.ordersData.user.address ||
          !this.ordersData.user.birthday ||
          !this.ordersData.user.shippingMethod
        ) {
          sweetAlert.threeLayerCheckType('warning', '請填寫所有必填欄位')
          return
        }
      }else{
        if (
          !this.user.name ||
          !this.user.email ||
          !this.user.tel ||
          !this.user.address ||
          !this.user.birthday ||
          !this.user.shippingMethod
        ) {
          sweetAlert.threeLayerCheckType('warning', '請填寫所有必填欄位')
          return
        }
      }

      if (this.orderId) {
        
      const user = {
        create_at: new Date(),
        name: this.ordersData.user.name,
        email: this.ordersData.user.email,
        tel: this.ordersData.user.tel,
        address: this.ordersData.user.address,
        birthday: this.ordersData.user.birthday,
        comment: this.ordersData.user.comment,
        shippingMethod: this.ordersData.user.shippingMethod,
        passport: this.ordersData.user.passport,
        memberId: this.ordersData.user.memberId,
        appellation: this.ordersData.user.appellation,
        userId: this.ordersData.userId,
        cartDataId: this.cartDataId,
        status: false
      }
        this.axios
          .put(`${api_url2}/orders/${this.orderId}`, { user })
          .then((res) => {
            this.ordersData = res.data
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `更新填寫資料內容失敗`);
          })
      } else {
        const user = {
        create_at: new Date(),
        name: this.user.name,
        email: this.user.email,
        tel: this.user.tel,
        address: this.user.address,
        birthday: this.user.birthday,
        comment: this.user.comment,
        shippingMethod: this.user.shippingMethod,
        passport: this.user.passport,
        memberId: this.user.memberId,
        appellation: this.user.appellation,
        userId: this.userId,
        cartDataId: this.cartDataId,
        status: false
      }
        this.axios
          .post(`${api_url2}/orders`, { user })
          .then((res) => {
            this.ordersData = res.data
            document.cookie = `orderId=${res.data.id}`
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `新增填寫資料內容失敗`);
          })
      }
      this.$router.push('/cart/payList')
    },
    getOrder() {
      this.axios
        .get(`${api_url2}/orders/${this.orderId}`)
        .then((res) => {
          this.ordersData = res.data
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得填寫資料內容失敗`);
        })
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    const cookieUserId = this.getCookie('userId')
    this.userId = cookieUserId * 1
    this.isLoading = true
    this.getCartsData()
    this.headerCollapse = new Collapse(this.$refs.headerCollapse, { toggle: false })
    setTimeout(() => {
      const cookieCartDataId = this.getCookie('cartDataId')
      this.cartDataId = cookieCartDataId * 1
    }, 3000) // 3000 毫秒即為 3 秒
    const cookieOrderId = this.getCookie('orderId')
    this.orderId = cookieOrderId * 1
    if(this.orderId){
      this.getOrder()
    }
  }
}
</script>
<style>
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

.text-position {
  text-align: center;
  @media (max-width: 576px) {
    text-align: left;
  }
}
.border-top-size {
  border-top: 2px solid blue;
}
.arrow-rotated {
  transform: rotate(-180deg);
}
.border-top {
  border-radius: 12px 12px 0 0;
}
</style>