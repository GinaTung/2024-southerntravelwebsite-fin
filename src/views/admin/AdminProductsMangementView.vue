<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h1 class="my-4">產品管理</h1>
        <AdminSidebar></AdminSidebar>
      </div>
      <div class="col-9">
        <div class="text-end mt-4">
          <button class="btn btn-primary" id="addModalBtn" @click="openModal('new', product)">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="100">上架</th>
              <th width="120">分類</th>
              <th>產品名稱</th>
              <th>標籤</th>
              <th width="120" class="text-end">原價</th>
              <th width="120" class="text-end">售價</th>
              <th width="120"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productItem in products" :key="productItem.id">
              <td>
                <span class="text-success" v-if="productItem.is_enabled">啟用</span>
                <span v-else>未啟用</span>
                <!-- {{ productItem.is_enabled ? '啟用' :  '未啟用'}} -->
              </td>
              <td>{{ productItem.category }}</td>
              <td>{{ productItem.title }}</td>
              <td>{{ productItem.tag_1 }}</td>
              <td class="text-end">{{ productItem.origin_price }}</td>
              <td class="text-end">{{ productItem.price }}</td>

              <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal('edit', productItem)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('delete', productItem)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
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
                  <input type="text" class="form-control" v-model="tempProduct.imagesUrl[key]" />
                </div>
                <!-- v-if 判斷沒有圖片時顯示或有點選新增圖片未填寫完成網址時 -->
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
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
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.pop()"
                >
                  刪除圖片
                </button>
              </div>

              <div class="pt-3">
                <input
                  type="file"
                  class="form-control"
                  ref="fileInput"
                  id="file"
                  placeholder="請輸入圖片連結"
                  @change="upload"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
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
                  <label for="day_num" class="form-label">旅遊天數</label>
                  <input
                    id="day_num"
                    type="number"
                    v-model="tempProduct.day_num"
                    class="form-control"
                    placeholder="請輸入旅遊天數"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="creation_date" class="form-label">建立日期</label>
                  <input
                    id="creation_date"
                    type="date"
                    v-model="tempProduct.creationDate"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    v-model="tempProduct.category"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
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
                  <label for="tag_1" class="form-label">標籤1</label>
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
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    v-model="tempProduct.origin_price"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    v-model="tempProduct.price"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>

              <!-- <div class="row mt-3">
                <div class="col-12">
                  <div class="accordion mb-3" id="accordionFirstDay">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button bg-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFirstDay"
                          aria-expanded="true"
                          aria-controls="collapseFirstDay"
                        >
                          行程資料-第一天
                        </button>
                      </h2>
  
                      <div
                        id="collapseFirstDay"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFirstDay"
                      >
                        <div class="accordion-body">
                          <div class="row">
                            <div
                              v-for="(item, index) in tempProduct.itinerary_data"
                              :key="index + 1213"
                            >
                              <div class="mb-3 col-md-6">
                                <label for="itinerary_first_day_am_title" class="form-label"
                                  >景點名稱-早上</label
                                >
                                <input
                                  id="itinerary_first_day_am_title"
                                  type="text"
                                  v-model="item.itinerary_first_day_am_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="itinerary_first_day_am_content" class="form-label"
                                  >景點介紹-早上</label
                                >
                                <textarea
                                  id="itinerary_first_day_am_content"
                                  type="text"
                                  v-model="item.itinerary_first_day_am_content"
                                  class="form-control"
                                  placeholder="請輸入景點內容"
                                ></textarea>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="itinerary_first_day_pm_title" class="form-label"
                                  >景點名稱-下午</label
                                >
                                <input
                                  id="itinerary_first_day_pm_title"
                                  type="text"
                                  v-model="item.itinerary_first_day_pm_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="itinerary_first_day_pm_content" class="form-label"
                                  >景點介紹-下午</label
                                >
                                <textarea
                                  v-model="item.itinerary_first_day_pm_content"
                                  id="itinerary_first_day_pm_content"
                                  type="text"
                                  class="form-control"
                                  placeholder="請輸入景點介紹"
                                >
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="row">
                <div class="col">
                  <div class="accordion mb-3" id="accordionFirstdDay">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button bg-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFirstDay"
                          aria-expanded="true"
                          aria-controls="collapseFirstDay"
                        >
                          行程資料-第一天
                        </button>
                      </h2>
                      <div
                        id="collapseFirstDay"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFirstdDay"
                      >
                        <div class="accordion-body">
                          <div class="row">
                            <div
                              v-for="(item, index) in tempProduct.itinerary_data"
                              :key="index + 1213"
                            >
                              <div class="mb-3 col-md-6" v-if="index === 0">
                                <label for="itinerary_first_day_am_title" class="form-label"
                                  >景點名稱-早上</label
                                >
                                <input
                                  id="itinerary_first_day_am_title"
                                  type="text"
                                  v-model="item.itinerary_first_day_am_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3" v-if="index === 0">
                                <label for="itinerary_first_day_am_content" class="form-label"
                                  >景點介紹-早上</label
                                >
                                <textarea
                                  id="itinerary_first_day_am_content"
                                  type="text"
                                  v-model="item.itinerary_first_day_am_content"
                                  class="form-control"
                                  placeholder="請輸入景點介紹"
                                >
                                </textarea>
                              </div>
                              <div class="col-md-6 mb-3" v-if="index === 0">
                                <label for="itinerary_first_day_pm_title" class="form-label"
                                  >景點名稱-下午</label
                                >
                                <input
                                  id="itinerary_first_day_pm_title"
                                  type="text"
                                  v-model="item.itinerary_first_day_pm_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3" v-if="index === 0">
                                <label for="itinerary_first_day_pm_content" class="form-label"
                                  >景點介紹-下午</label
                                >
                                <textarea
                                  id="itinerary_first_day_pm_content"
                                  type="text"
                                  v-model="item.itinerary_first_day_pm_content"
                                  class="form-control"
                                  placeholder="請輸入景點介紹"
                                >
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="accordion mb-3" id="accordionSecondDay">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button bg-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondDay"
                          aria-expanded="true"
                          aria-controls="collapseSecondDay"
                        >
                          行程資料-第二天
                        </button>
                      </h2>
                      <div
                        id="collapseSecondDay"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionSecondDay"
                      >
                        <div class="accordion-body">
                          <div class="row">
                            <div
                              v-for="(item, index) in tempProduct.itinerary_data"
                              :key="index + 1213"
                            >
                              <div class="mb-3 col-md-6" v-if="index === 1">
                                <label for="itinerary_second_day_am_title" class="form-label"
                                  >景點名稱-早上</label
                                >
                                <input
                                  id="itinerary_second_day_am_title"
                                  type="text"
                                  v-model="item.itinerary_second_day_am_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3" v-if="index === 1">
                                <label for="itinerary_second_day_am_content" class="form-label"
                                  >景點介紹-早上</label
                                >
                                <textarea
                                  id="itinerary_second_day_am_content"
                                  v-model="item.itinerary_second_day_am_content"
                                  class="form-control"
                                  placeholder="請輸入景點內容"
                                ></textarea>
                              </div>
                              <div class="col-md-6 mb-3" v-if="index === 1">
                                <label for="itinerary_second_day_pm_title" class="form-label"
                                  >景點名稱-下午</label
                                >
                                <input
                                  id="itinerary_second_day_pm_title"
                                  v-model="item.itinerary_second_day_pm_title"
                                  type="text"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3" v-if="index === 1">
                                <label for="itinerary_second_day_pm_content" class="form-label"
                                  >景點介紹-下午</label
                                >
                                <textarea
                                  v-model="item.itinerary_second_day_pm_content"
                                  id="itinerary_second_day_pm_content"
                                  type="text"
                                  class="form-control"
                                  placeholder="請輸入景點介紹"
                                >
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="accordion mb-3" id="accordionThirdDay">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button bg-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThirdDay"
                          aria-expanded="true"
                          aria-controls="collapseThirdDay"
                        >
                          行程資料-第三天
                        </button>
                      </h2>
                      <div
                        id="collapseThirdDay"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionThirdDay"
                      >
                        <div class="accordion-body">
                          <div class="row">
                            <div
                              v-for="(item, index) in tempProduct.itinerary_data"
                              :key="index + 1213"
                            >
                              <div class="mb-3 col-md-6" v-if="index === 2">
                                <label for="itinerary_third_day_am_title" class="form-label"
                                  >景點名稱-早上</label
                                >
                                <input
                                  id="itinerary_third_day_am_title"
                                  type="text"
                                  v-model="item.itinerary_third_day_am_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3" v-if="index === 2">
                                <label for="itinerary_third_day_am_content" class="form-label"
                                  >景點介紹-早上</label
                                >
                                <textarea
                                  id="itinerary_third_day_am_content"
                                  type="text"
                                  v-model="item.itinerary_third_day_am_content"
                                  class="form-control"
                                  placeholder="請輸入景點介紹"
                                >
                                </textarea>
                              </div>
                              <div class="col-md-6 mb-3" v-if="index === 2">
                                <label for="itinerary_third_day_pm_title" class="form-label"
                                  >景點名稱-下午</label
                                >
                                <input
                                  id="itinerary_third_day_pm_title"
                                  type="text"
                                  v-model="item.itinerary_third_day_pm_title"
                                  class="form-control"
                                  placeholder="請輸入景點名稱"
                                />
                              </div>
                              <div class="mb-3" v-if="index === 2">
                                <label for="itinerary_third_day_pm_content" class="form-label"
                                  >景點介紹-下午</label
                                >
                                <textarea
                                  id="itinerary_third_day_pm_content"
                                  type="text"
                                  v-model="item.itinerary_third_day_pm_content"
                                  class="form-control"
                                  placeholder="請輸入景點介紹"
                                >
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
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
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.content"
                  class="form-control"
                  placeholder="請輸入說明內容"
                >
                </textarea>
              </div>

              <!-- Provide services、Experience description、Other information、common problem -->
              <div class="mb-3">
                <label for="content" class="form-label">服務內容</label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.provideServices"
                  class="form-control"
                  placeholder="請輸入服務內容"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">體驗說明</label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.experienceDescription"
                  class="form-control"
                  placeholder="請輸入體驗說明"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">其他資訊</label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.otherInformation"
                  class="form-control"
                  placeholder="請輸入其他資訊"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">常見問題</label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.commonProblem"
                  class="form-control"
                  placeholder="請輸入常見問題"
                >
                </textarea>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="start_date" class="form-label">預訂起始日</label>
                  <input
                    id="start_date"
                    type="date"
                    v-model="tempProduct.startDate"
                    class="form-control"
                    :min="minDate"
                    :max="maxDate"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="end_date" class="form-label">預訂結束日</label>
                  <input
                    id="start_date"
                    type="date"
                    v-model="tempProduct.endDate"
                    class="form-control"
                    :min="minDate"
                    :max="maxDate"
                  />
                </div>
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
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
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
          <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import AdminSidebar from '../../components/AdminSidebar.vue'

const api_url = import.meta.env.VITE_API_URL
const api_path = import.meta.env.VITE_API_PATH
const api_url2 = import.meta.env.VITE_API_URL2
export default {
  components: {
    AdminSidebar
  },
  data() {
    return {
      products: [],
      tempProduct: {},
      pages: {},
      modalProduct: null, //productModal
      modelDel: null, //delProductModal
      isNew: false,
      newProduct: {
        category: '',
        tag_1: '',
        tag_2: '',
        day_num: 0,
        itinerary_data: [
          {
            first_day_title: '',
            itinerary_first_day_am_title: '',
            itinerary_first_day_am_content: '',
            itinerary_first_day_pm_title: '',
            itinerary_first_day_pm_content: ''
          },
          {
            second_day_title: '',
            itinerary_second_day_am_title: '-',
            itinerary_second_day_am_content: '',
            itinerary_second_day_pm_title: '',
            itinerary_second_day_pm_content: ','
          },
          {
            third_day_title: '',
            itinerary_third_day_am_title: '',
            itinerary_third_day_am_content: '',
            itinerary_third_day_pm_title: '',
            itinerary_third_day_pm_content: ''
          }
        ],
        itinerary_content: '',
        itinerary_description: '',
        id: '',
        is_enabled: 0,
        origin_price: 0,
        price: 0,
        title: '',
        unit: '',
        num: 0,
        imageUrl: '',
        imagesUrl: [],
        provideServices: '',
        experienceDescription: '',
        otherInformation: '',
        commonProblem: ''
      },
      newAllItineraryData: [],
      minDate: '2024-01-01', // 最小日期
      maxDate: '2024-12-31', // 最大日期
    }
  },
  methods: {
    checkAdmin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common['Authorization'] = this.token
      if (!this.token) {
        alert(`目前未登入管理者身分，請重新登入`)
        this.$router.push({ path: '/admin/adminlogin' })
      } else {
        this.axios
          .post(`${api_url}/api/user/check`)
          .then((res) => {
            // 登入成功
            this.userIsLoggedIn = true
          })
          .catch((err) => {
            // 登入失敗或驗證失敗
            this.userIsLoggedIn = false
            alert(`管理者身分驗證失敗，自動跳轉至登入頁面`)
            this.$router.push({ path: '/admin/adminlogin' })
          })
      }
    },
    getProducts() {
      //參數預設值
      //有分頁
      this.axios
        .get(`${api_url2}/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data
        })
        .catch((arr) => {
          alert(`${err.data.message}`)
        })
    },
    openModal(status, product) {
      if (status === 'new') {
        this.tempProduct = {
         startDate: '',
         endDate:'',
          itinerary_data: [
            {
              first_day_title: '第一天',
              itinerary_first_day_am_title: '',
              itinerary_first_day_am_content: '',
              itinerary_first_day_pm_title: '',
              itinerary_first_day_pm_content: ''
            },
            {
              second_day_title: '第二天',
              itinerary_second_day_am_title: '',
              itinerary_second_day_am_content: '',
              itinerary_second_day_pm_title: '',
              itinerary_second_day_pm_content: ''
            },
            {
              third_day_title: '第三天',
              itinerary_third_day_am_title: '',
              itinerary_third_day_am_content: '',
              itinerary_third_day_pm_title: '',
              itinerary_third_day_pm_content: ''
            }
          ],
          imagesUrl: []
        }
        this.isNew = true
        this.modalProduct.show()
      } else if (status === 'edit') {
        this.tempProduct = { ...product }
        // this.getNewItineraryData();
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = []
        }
        this.isNew = false
        this.modalProduct.show()
      } else if (status === 'delete') {
        this.tempProduct = { ...product }
        this.modalDel.show()
      }
    },
    updateProduct() {
      //新增
      // const newProduct = this.tempProduct
      // this.$data.products.push(newProduct)
      if (this.isNew) {
        this.axios
          .post(`${api_url2}/products`, this.tempProduct)
          .then((res) => {
            // console.log(res)
            alert(`已建立產品`)
            this.getProducts()
            this.tempProduct = {}
            this.modalProduct.hide()
          })
          .catch((err) => {
            // console.log(err);
            alert(`${err.data.message}`)
          })
      } else if (!this.isNew) {
        //更新
        this.axios
          .put(`${api_url2}/products/${this.tempProduct.id}`, this.tempProduct)
          .then((res) => {
            // console.log(res);
            alert(`已更新產品`)
            this.getProducts()

            this.tempProduct = {}
            this.modalProduct.hide()
          })
          .catch((err) => {
            // console.log(err);
            alert(`${err.data.message}`)
          })
      }
    },
    deleteProduct() {
      this.axios
        .delete(`${api_url2}/products/${this.tempProduct.id}`, this.tempProduct)
        .then((res) => {
          console.log(res)
          this.getProducts()
          this.tempProduct = {}
          this.modalDel.hide()
        })
        .catch((err) => {
          // console.log(err);
          alert(`${err.data.message}`)
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
          console.log(res.data)
          const confirmationMessage = `
        網址產生中，請稍後...
        關閉提示視窗後，等待顯示圖片網址，再點確認按鈕
      `
          alert(`${confirmationMessage}`)

          // 使用 setTimeout 等待一段時間（這裡是3秒，根據需求調整）

          // 執行後續的代碼
          const blobUrl = URL.createObjectURL(fileInput.files[0])
          this.tempProduct.imagesUrl.push(blobUrl)
          // 清除檔案欄位的值
          fileInput.value = null
        })
        .catch((err) => {
          // console.log(err)
          // console.dir(err);
          alert(`${err.data.message}`)
        })
    },
    getNewItineraryData() {
      // console.log(this.products);
      this.tempProduct.forEach((item, i) => {
        console.log(item.itinerary_data)
      })
      console.log(this.newAllItineraryData)
    }
  },
  mounted() {
    this.checkAdmin()
    this.getProducts()
    this.modalProduct = new bootstrap.Modal(this.$refs.productModal)
    this.modalDel = new bootstrap.Modal(this.$refs.delProductModal)
  }
}
</script>
