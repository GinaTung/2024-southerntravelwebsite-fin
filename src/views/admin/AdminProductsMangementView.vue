<template>
  <div class="container">
    <div class="row flex-column flex-md-row">
      <div class="col-12 col-md-3">
        <h1 class="my-4 fs-4 fs-md-1">產品管理</h1>
        <AdminSidebar />
      </div>
      <div class="col-12 col-md-9">
        <div class="text-end mt-4">
          <button
            type="button"
            class="btn-turquoise border-0"
            id="addModalBtn"
            @click="openModal('new', product)"
          >
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="80">上架</th>
              <th width="80">分類</th>
              <th width="200">產品名稱</th>
              <th width="120">標籤</th>
              <th width="80" class="text-end">原價</th>
              <th width="80" class="text-end">售價</th>
              <th width="120"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productItem in products" :key="productItem.id">
              <td>
                <span class="text-success" v-if="productItem.is_enabled">啟用</span>
                <span v-else>未啟用</span>
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
        <nav aria-label="Page navigation example" class="my-10">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === 1 }">
              <button
                class="page-link page-link-radius-2"
                @click.prevent="currentPage > 1 && getProducts(currentPage - 1)"
              >
                上一頁
              </button>
            </li>
            <li class="page-item" v-for="i in pageTotal" :key="`page-${i}`">
              <button
                class="page-link page-link-0 rounded-0"
                :class="{ active: i === currentPage }"
                @click.prevent="getProducts(i)"
              >
                {{ i }}
              </button>
            </li>
            <li class="page-item" :class="{ disabled: !currentPage || currentPage === pageTotal }">
              <button
                class="page-link page-link-radius"
                @click.prevent="currentPage < pageTotal && getProducts(currentPage + 1)"
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
                  <label for="day_num" class="form-label">旅遊天數<span class="required">*</span></label>
                  <input
                    id="day_num"
                    type="number"
                    v-model="tempProduct.day_num"
                    class="form-control"
                    placeholder="請輸入旅遊天數"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="creation_date" class="form-label">建立日期<span class="required">*</span></label>
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
                  <label for="category" class="form-label">分類<span class="required">*</span></label>
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
                  <label for="link" class="form-label">連結</label>
                  <input
                    id="link"
                    type="text"
                    v-model="tempProduct.link"
                    class="form-control"
                    placeholder="請輸入標籤"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="max_travelers" class="form-label">出遊上限人數<span class="required">*</span></label>
                  <input
                    id="max_travelers"
                    type="number"
                    v-model="tempProduct.max_travelers"
                    min="3"
                    max="30"
                    class="form-control"
                    placeholder="請輸入出遊上限人數"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價<span class="required">*</span></label>
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
                  <label for="price" class="form-label">售價<span class="required">*</span></label>
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
                                <label for="first_day_title" class="form-label">行程天數<span class="required">*</span></label>
                                <input
                                  id="first_day_title"
                                  type="text"
                                  v-model="item.first_day_title"
                                  class="form-control"
                                  placeholder="請輸入行程天數為第一天"
                                />
                              </div>
                              <div class="mb-3 col-md-6" v-if="index === 0">
                                <label for="itinerary_first_day_am_title" class="form-label"
                                  >景點名稱-早上<span class="required">*</span></label
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
                                  >景點介紹-早上<span class="required">*</span></label
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
                                  >景點名稱-下午<span class="required">*</span></label
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
                                  >景點介紹-下午<span class="required">*</span></label
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
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          行程資料-第二天
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
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
                                <label for="second_day_title" class="form-label">行程天數</label>
                                <input
                                  id="second_day_title"
                                  type="text"
                                  v-model="item.second_day_title"
                                  class="form-control"
                                  placeholder="請輸入行程天數為第二天"
                                />
                              </div>
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
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          行程資料-第三天
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
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
                                <label for="third_day_title" class="form-label">行程天數</label>
                                <input
                                  id="third_day_title"
                                  type="text"
                                  v-model="item.third_day_title"
                                  class="form-control"
                                  placeholder="請輸入行程天數為第三天"
                                />
                              </div>
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
                <label for="description" class="form-label">產品描述<span class="required">*</span></label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.description"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  required
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容<span class="required">*</span></label>
                <textarea
                  id="description"
                  type="text"
                  v-model="tempProduct.content"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  required
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
                  <label for="start_date" class="form-label">預約起始日<span class="required">*</span></label>
                  <input
                    id="start_date"
                    type="date"
                    v-model="tempProduct.startDate"
                    class="form-control"
                    :min="minDate"
                    :max="maxDate"
                    required
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="end_date" class="form-label">預約結束日<span class="required">*</span></label>
                  <input
                    id="start_date"
                    type="date"
                    v-model="tempProduct.endDate"
                    class="form-control"
                    :min="minDate"
                    :max="maxDate"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="go_start_date" class="form-label">出發起始日<span class="required">*</span></label>
                  <input
                    id="go_start_date"
                    type="date"
                    v-model="tempProduct.goStartDate"
                    class="form-control"
                    :min="minDate"
                    :max="maxDate"
                    required
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="go_end_date" class="form-label">出發結束日<span class="required">*</span></label>
                  <input
                    id="go_start_date"
                    type="date"
                    v-model="tempProduct.goEndDate"
                    class="form-control"
                    :min="minDate"
                    :max="maxDate"
                    required
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
  <!-- DelModal -->
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
import AdminSidebar from '@/components/AdminSidebar.vue'
import sweetAlert from '@/js/sweetAlert.js'
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
            itinerary_second_day_am_title: '',
            itinerary_second_day_am_content: '',
            itinerary_second_day_pm_title: '',
            itinerary_second_day_pm_content: ''
          },
          {
            third_day_title: '',
            itinerary_third_day_am_title: '',
            itinerary_third_day_am_content: '',
            itinerary_third_day_pm_title: '',
            itinerary_third_day_pm_content: ''
          }
        ]
      },
      newAllItineraryData: [],
      minDate: '2024-01-01', // 最小日期
      maxDate: '2024-12-31', // 最大日期
      formData: {
        productName: '',
        productDescription: ''
      },
      pageTotal: 0,
      currentPage: 1,
      limitPage: 10,
      parsedLinks: ''
    }
  },
  methods: {
    getProducts(currentPage = 1) {
      this.axios
        .get(`${api_url2}/products?_limit=${this.limitPage}&_page=${currentPage}`)
        .then((res) => {
          var totalCount = parseInt(res.headers['x-total-count'])
          this.pageTotal = Math.ceil(totalCount / this.limitPage)
          this.currentPage = currentPage
          this.products = res.data
        })
        .catch(() => {
          sweetAlert.threeLayerCheckType('error', `取得產品資料錯誤`)
        })
    },
    openModal(status, product) {
      if (status === 'new') {
        this.tempProduct = {
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
              itinerary_second_day_am_title: '',
              itinerary_second_day_am_content: '',
              itinerary_second_day_pm_title: '',
              itinerary_second_day_pm_content: ''
            },
            {
              third_day_title: '',
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
        if (this.tempProduct.itinerary_data.length === 0) {
          this.tempProduct = {
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
                itinerary_second_day_am_title: '',
                itinerary_second_day_am_content: '',
                itinerary_second_day_pm_title: '',
                itinerary_second_day_pm_content: ''
              },
              {
                third_day_title: '',
                itinerary_third_day_am_title: '',
                itinerary_third_day_am_content: '',
                itinerary_third_day_pm_title: '',
                itinerary_third_day_pm_content: ''
              }
            ]
          }
        } else if (this.tempProduct.itinerary_data.length === 1) {
          this.tempProduct.itinerary_data.push(
            {
              second_day_title: '',
              itinerary_second_day_am_title: '',
              itinerary_second_day_am_content: '',
              itinerary_second_day_pm_title: '',
              itinerary_second_day_pm_content: ''
            },
            {
              third_day_title: '',
              itinerary_third_day_am_title: '',
              itinerary_third_day_am_content: '',
              itinerary_third_day_pm_title: '',
              itinerary_third_day_pm_content: ''
            }
          )
        } else if (this.tempProduct.itinerary_data.length === 2) {
          this.tempProduct.itinerary_data.push({
            third_day_title: '',
            itinerary_third_day_am_title: '',
            itinerary_third_day_am_content: '',
            itinerary_third_day_pm_title: '',
            itinerary_third_day_pm_content: ''
          })
        }
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
      if(
        !this.tempProduct.title ||
        !this.tempProduct.day_num ||
        !this.tempProduct.creationDate ||
        !this.tempProduct.category ||
        !this.tempProduct.unit ||
        !this.tempProduct.tag_1 ||
        !this.tempProduct.max_travelers ||
        !this.tempProduct.origin_price ||
        !this.tempProduct.price ||
        !this.tempProduct.description ||
        !this.tempProduct.content ||
        !this.tempProduct.startDate ||
        !this.tempProduct.endDate ||
        !this.tempProduct.goStartDate ||
        !this.tempProduct.goEndDat
      ){
        sweetAlert.threeLayerCheckType('warning', `請填寫所有必填欄位`)
      }else{
        const filteredProduct = this.filterProduct(this.tempProduct)
        this.tempProduct = filteredProduct
        if (this.isNew) {
          this.axios
            .post(`${api_url2}/products`, this.tempProduct)
            .then(() => {
              sweetAlert.threeLayerCheckType('success', '已建立產品成功')
              this.getProducts()
              this.tempProduct = {}
              this.modalProduct.hide()
            })
            .catch((err) => {
              sweetAlert.threeLayerCheckType('error', `建立產品失敗`)
            })
        } else if (!this.isNew) {
          //更新
          this.axios
            .put(`${api_url2}/products/${this.tempProduct.id}`, this.tempProduct)
            .then((res) => {
              sweetAlert.threeLayerCheckType('success', '已更新產品成功')
              this.getProducts()
  
              this.tempProduct = {}
              this.modalProduct.hide()
            })
            .catch((err) => {
              sweetAlert.threeLayerCheckType('error', `更新產品失敗`)
            })
        }
      }
    },
    filterProduct(product) {
      const filteredProduct = {}

      for (const key in product) {
        if (key === 'itinerary_data') {
          // 如果是 itinerary_data 這個特定的陣列，進行過濾
          filteredProduct[key] = this.filterItineraryData(product[key])
          // 移除完全為空的物件
          filteredProduct[key] = filteredProduct[key].filter((itinerary) =>
            Object.values(itinerary).some((value) => value !== '')
          )
        } else if (product[key] !== '') {
          // 如果不是 itinerary_data 且值不是空字串，直接加入到過濾後的資料
          filteredProduct[key] = product[key]
        }
      }

      return filteredProduct
    },
    filterItineraryData(itineraryData) {
      // 過濾 itinerary_data 陣列中的物件
      return itineraryData.map((itinerary) => {
        const filteredItinerary = {}

        for (const key in itinerary) {
          if (itinerary[key] !== '') {
            // 如果值不是空字串，加入到過濾後的資料
            filteredItinerary[key] = itinerary[key]
          }
        }

        return filteredItinerary
      })
    },
    deleteProduct() {
      this.axios
        .delete(`${api_url2}/products/${this.tempProduct.id}`, this.tempProduct)
        .then((res) => {
          this.getProducts()
          this.tempProduct = {}
          this.modalDel.hide()
        })
        .catch((err) => {
          sweetAlert.threeLayerCheckType('error', `刪除產品資料失敗`)
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
    this.getProducts()
    this.modalProduct = new bootstrap.Modal(this.$refs.productModal)
    this.modalDel = new bootstrap.Modal(this.$refs.delProductModal)
  }
}
</script>
<style>
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
    margin-left: 5px; /* 根据需要调整距离 */
}
</style>
