<template>
  <div class="container">
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3">
        <AdminSidebar />
      </div>
      <div class="col-12 col-md-9">
        <div class="d-flex justify-content-between mt-4">
          <h2>景點列表</h2>
          <button
            type="button"
            class="btn-turquoise"
            id="addModalBtn"
            @click="openModal('new', product)"
          >
            建立新的景點
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="80">上架</th>
              <th width="80">分類</th>
              <th width="200">景點名稱</th>
              <th width="120">標籤1</th>
              <th width="120">標籤2</th>
              <th width="120"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="attractionItem in attractions" :key="attractionItem.id">
              <td>
                <span class="text-success" v-if="attractionItem.is_enabled">啟用</span>
                <span v-else>未啟用</span>
                <!-- {{ productItem.is_enabled ? '啟用' :  '未啟用'}} -->
              </td>
              <td>{{ attractionItem.category }}</td>
              <td>{{ attractionItem.title }}</td>
              <td>{{ attractionItem.tag_1 }}</td>
              <td class="">{{ attractionItem.tag_2 }}</td>

              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal('edit', attractionItem)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('delete', attractionItem)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example" class="my-10">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === 1 }">
              <button
                class="page-link page-link-radius-2"
                @click.prevent="currentPage > 1 && getAttractions(currentPage - 1)"
              >
                上一頁
              </button>
            </li>
            <li class="page-item" v-for="i in pageTotal" :key="`page-${i}`">
              <button
                class="page-link page-link-0 rounded-0"
                :class="{ active: i === currentPage }"
                @click.prevent="getAttractions(i)"
              >
                {{ i }}
              </button>
            </li>
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === pageTotal }">
              <button
                class="page-link page-link-radius"
                @click.prevent="currentPage < pageTotal && getAttractions(currentPage + 1)"
              >
                下一頁
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增景點' : '編輯景點' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    v-model="tempProduct.imageUrl"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <!-- 多圖設置 -->
              <!-- 判斷 tempProduct.imagesUrl"是一個陣列-->
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <div v-for="(item, key) in tempProduct.imagesUrl" :key="key + 1213">
                  <img :src="item" alt="" class="img-fluid my-2" />
                  <input
                    type="text"
                    class="form-control my-2"
                    v-model="tempProduct.imagesUrl[key]"
                  />
                </div>
                <!-- v-if 判斷沒有圖片時顯示或有點選新增圖片未填寫完成網址時 -->
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100 btn-sm-radius"
                  v-if="
                    tempProduct.imagesUrl.length === 0 ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                  @click="tempProduct.imagesUrl.push('')"
                >
                  新增圖片
                </button>
                <button
                  v-else
                  class="btn btn-outline-danger btn-sm d-block w-100 btn-sm-radius"
                  @click="tempProduct.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>

              <!-- <div class="pt-3">
                <input
                  type="file"
                  class="form-control"
                  ref="fileInput"
                  id="file"
                  placeholder="請輸入圖片連結"
                  @change="upload"
                />
              </div> -->
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題<span class="required">*</span></label>
                <input
                  id="title"
                  type="text"
                  v-model="tempProduct.title"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label"
                    >分類<span class="required">*</span></label
                  >
                  <input
                    id="category"
                    type="text"
                    v-model="tempProduct.category"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位<span class="required">*</span></label>
                  <input
                    id="unit"
                    type="text"
                    v-model="tempProduct.unit"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="tag_1" class="form-label">標籤1<span class="required">*</span></label>
                  <input
                    id="tag_1"
                    type="text"
                    v-model="tempProduct.tag_1"
                    class="form-control"
                    placeholder="請輸入標籤"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="tag_2" class="form-label">標籤2</label>
                  <input
                    id="tag_2"
                    type="text"
                    v-model="tempProduct.tag_2"
                    class="form-control"
                    placeholder="請輸入標籤"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">套裝方案連結</label>
                  <input
                    id="origin_price"
                    type="text"
                    v-model="tempProduct.aboutAroductLink"
                    min="0"
                    class="form-control"
                    placeholder="請輸入套裝方案連結"
                  />
                </div>
              </div>

              <hr />
              <div class="row">
                <div class="mb-3">
                  <label for="imgMap" class="form-label">位置<span class="required">*</span></label>
                  <input
                    id="imgMap"
                    type="text"
                    v-model="tempProduct.imgMap"
                    class="form-control"
                    placeholder="請輸入位置"
                  />
                  <img :src="tempProduct.imgMap" alt="" class="img-fluid my-2" />
                </div>
              </div>
              <div class="mb-3 col">
                <label for="timeOpen" class="form-label"
                  >開放時間<span class="required">*</span></label
                >
                <textarea
                  id="timeOpen"
                  type="text"
                  v-model="tempProduct.timeOpen"
                  class="form-control"
                  placeholder="請輸入開放時間"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label"
                  >產品描述<span class="required">*</span></label
                >
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.description"
                  class="form-control"
                  placeholder="請輸入產品描述"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label"
                  >交通資訊<span class="required">*</span></label
                >
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.content"
                  class="form-control"
                  placeholder="請輸入交通資訊"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    v-model="tempProduct.is_enabled"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary px-6 py-2" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn-turquoise" @click="updateAttractions">確認</button>
        </div>
      </div>
    </div>
  </div>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteAttraction">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import AdminSidebar from '@/components/AdminSidebar.vue'
const api_url2 = import.meta.env.VITE_API_URL2
import sweetAlert from '@/js/sweetAlert.js'

export default {
  components: {
    AdminSidebar
  },
  data() {
    return {
      attractions: [],
      tempProduct: {},
      pages: {},
      modalProduct: null, //productModal
      modelDel: null, //delProductModal
      isNew: false,
      pageTotal: 0,
      currentPage: 1,
      limitPage: 10,
      parsedLinks: ''
    }
  },
  methods: {
    getAttractions(currentPage = 1) {
      this.axios
        .get(`${api_url2}/attractions?_limit=${this.limitPage}&_page=${currentPage}`)
        .then((res) => {
          var totalCount = parseInt(res.headers['x-total-count'])
          this.pageTotal = Math.ceil(totalCount / this.limitPage)
          this.currentPage = currentPage
          this.attractions = res.data
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `取得景點資料失敗`)
        })
    },
    openModal(status, attractionItem) {
      if (status === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.modalProduct.show()
      } else if (status === 'edit') {
        this.tempProduct = { ...attractionItem }

        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = []
        }
        this.isNew = false
        this.modalProduct.show()
      } else if (status === 'delete') {
        this.tempProduct = { ...attractionItem }
        this.modalDel.show()
      }
    },
    //新增
    updateAttractions() {
      if (
        !this.tempProduct.title ||
        !this.tempProduct.category ||
        !this.tempProduct.unit ||
        !this.tempProduct.tag_1 ||
        !this.tempProduct.imgMap ||
        !this.tempProduct.timeOpen ||
        !this.tempProduct.description ||
        !this.tempProduct.content
      ) {
        sweetAlert.threeLayerCheckType('warning', `請填寫所有必填欄位`)
        return
      }
      if (this.isNew) {
        this.axios
          .post(`${api_url2}/attractions`, this.tempProduct)
          .then((res) => {
            sweetAlert.threeLayerCheckType('success', '已建立景點資料成功')
            this.getAttractions()
            this.tempProduct = {}
            this.modalProduct.hide()
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `建立景點資料失敗`)
          })
      } else if (!this.isNew) {
        //更新
        this.axios
          .put(`${api_url2}/attractions/${this.tempProduct.id}`, this.tempProduct)
          .then((res) => {
            sweetAlert.threeLayerCheckType('success', '已更新景點資料成功')
            this.getAttractions()
            this.tempProduct = {}
            this.modalProduct.hide()
          })
          .catch((err) => {
            sweetAlert.threeLayerCheckType('error', `更新景點資料失敗`)
          })
      }
    },
    deleteAttraction() {
      this.axios
        .delete(`${api_url2}/attractions/${this.tempProduct.id}`, this.tempProduct)
        .then((res) => {
          sweetAlert.threeLayerCheckType('success', '已刪除景點資料成功')
          this.getAttractions()
          this.tempProduct = {}
          this.modalDel.hide()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('success', '刪除景點資料失敗')
        })
    },
    upload() {
      // 上傳檔案
      const fileInput = this.$refs.fileInput
      const file = fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)

      this.axios
        .post(`${api_url2}/products`, formData)
        .then((res) => {
          const confirmationMessage = `
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `
          sweetAlert.threeLayerCheckType('warning', `${confirmationMessage}`)
          // 執行後續的代碼
          const blobUrl = URL.createObjectURL(fileInput.files[0])
          this.tempProduct.imagesUrl.push(blobUrl)
          // 清除檔案欄位的值
          fileInput.value = null
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `上傳產品圖片失敗`)
        })
    }
  },
  mounted() {
    this.getAttractions()
    this.modalProduct = new bootstrap.Modal(this.$refs.productModal)
    this.modalDel = new bootstrap.Modal(this.$refs.delProductModal)
  }
}
</script>
<style lang="scss" scoped>
.page-link-radius {
  border-radius: 0 4px 4px 0 !important;
}

.page-link-radius-2 {
  border-radius: 4px 0 0 4px !important;
}
.page-link:focus {
  box-shadow: 0px;
}
.page-link.active {
  background: #43b8bd;
  border-color: #0ea0a6;
  color: #fff !important;
}
.required {
  color: red;
  margin-left: 5px;
}
.btn:hover {
  color: white !important;
}
.btn-sm-radius {
  border-radius: 20px !important;
}
</style>
