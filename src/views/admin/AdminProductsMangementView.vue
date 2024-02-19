<template>
  <div class="container">
    <h1>產品管理</h1>

    <div class="text-end mt-4">
      <button class="btn btn-primary" id="addModalBtn"  @click="openModal('new',product)">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120" class="text-end">原價</th>
          <th width="120" class="text-end">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="productItem in products" :key="productItem.id">
          <td>{{ productItem.category }}</td>
          <td>{{ productItem.title }}</td>
          <td class="text-end">{{ productItem.origin_price }}</td>
          <td class="text-end">{{ productItem.price }}</td>
          <td>
            <span class="text-success" v-if="productItem.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal('edit',productItem)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm" @click="openModal('delete',productItem)"
                  >
                    刪除
                  </button>
                </div>
              </td>
        </tr>
      </tbody>
    </table>
  </div>
    <!-- Modal -->
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span>{{ isNew ? "新增產品" : "編輯產品"}}</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-2">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">輸入圖片網址</label>
                      <input type="text" v-model="tempProduct.imageUrl" class="form-control"
                             placeholder="請輸入圖片連結">
                    </div>
                    <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
                  </div>
                  <!-- 多圖設置 -->
                  <!-- 判斷 tempProduct.imagesUrl"是一個陣列-->
                    <div v-if="Array.isArray(tempProduct.imagesUrl)">
                      <div v-for="(item,key) in tempProduct.imagesUrl" :key="key+1213">
                        <img :src="item" alt="" class="img-fluid my-2">
                        <input type="text" class="form-control" v-model="tempProduct.imagesUrl[key]">
                      </div>
                      <!-- v-if 判斷沒有圖片時顯示或有點選新增圖片未填寫完成網址時 -->
                      <button 
                        class="btn btn-outline-primary btn-sm d-block w-100"
                        v-if="tempProduct.imagesUrl.length ===0 || tempProduct.imagesUrl[tempProduct.imagesUrl.length-1]"
                        @click="tempProduct.imagesUrl.push('')"
                      >
                        新增圖片
                      </button>
                      <button v-else class="btn btn-outline-danger btn-sm d-block w-100" @click="tempProduct.imagesUrl.pop()">
                        刪除圖片
                      </button>
                      </div>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input id="title" type="text" v-model="tempProduct.title" class="form-control" placeholder="請輸入標題">
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">分類</label>
                      <input id="category" type="text" v-model="tempProduct.category" class="form-control"
                             placeholder="請輸入分類">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">單位</label>
                      <input id="unit" type="text" v-model="tempProduct.unit" class="form-control" placeholder="請輸入單位">
                    </div>
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input id="origin_price" type="number"  v-model="tempProduct.origin_price" min="0" class="form-control" placeholder="請輸入原價">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input id="price" type="number" v-model="tempProduct.price" min="0" class="form-control"
                             placeholder="請輸入售價">
                    </div>
                  </div>
                  <hr>

                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text" v-model="tempProduct.description" class="form-control"
                              placeholder="請輸入產品描述">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" type="text" v-model="tempProduct.content" class="form-control"
                              placeholder="請輸入說明內容">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input id="is_enabled" class="form-check-input" type="checkbox"
                             :true-value="1" :false-value="0">
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
              <button type="button" class="btn btn-primary" @click="updateProduct">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
           aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{tempProduct.title}}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="deleteProduct">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
</template>

<script>
let myModal = '' //實體化
// import ProductModal from "../../js/ProductModal.js";
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
const api_url = import.meta.env.VITE_API_URL
const api_path = import.meta.env.VITE_API_PATH
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      pages: {},
      modalProduct: null, //productModal
      modelDel: null, //delProductModal
      isNew: false,
    }
  },
  methods: {
    checkAdmin() {
      this.axios
        .post(`${api_url}/api/user/check`)
        .then((res) => {
          // console.log(res)
          this.getProducts()
        })
        .catch((err) => {
          // console.log(err);
          alert(`目前未登入狀態，請重新登入`)
          this.$router.push({ path: '/admin/adminlogin' })
        })
    },
    getProducts() {
      //參數預設值
      //有分頁
      this.axios
        .get(`${api_url}/api/${api_path}/admin/products/all`)
        .then((res) => {
          console.log(res)
          this.products = res.data.products
        })
        .catch((arr) => {
          alert(`${err.data.message}`)
        })
    },
    openModal(status,product) {
      
      if (status === 'new') {
        this.tempProduct = {
          "imagesUrl": []
        }
        this.isNew = true;
        this.modalProduct.show();
        
      }else if(status === 'edit'){
        this.tempProduct = { ...product };
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = [];
        }
        this.isNew = false;
        this.modalProduct.show();
      }else if(status === 'delete'){
        this.tempProduct = { ...product };
        this.modalDel.show();
      }
    },
    updateProduct(){
      //新增
      if(this.isNew ){
        this.axios.post(
          `${api_url}/api/${api_path}/admin/product`,
          {data:this.tempProduct}
        )
        .then((res) => {
          console.log(res);
          alert(`已建立產品`);
          this.getProducts();
          this.tempProduct = {};
          this.modalProduct.hide();
        })
        .catch((err) => {
          // console.log(err);
          alert(`${err.data.message}`);
        });
      }else if(!this.isNew){
        //更新
        this.axios.put(
          `${api_url}/api/${api_path}/admin/product/${this.tempProduct.id}`,
          {data:this.tempProduct}
        )
        .then((res) => {
          // console.log(res);
          alert(`已更新產品`);
          this.getProducts();
          this.tempProduct ={};
          this.modalProduct.hide();
        })
        .catch((err) => {
          // console.log(err);
          alert(`${err.data.message}`);
        });
      }

    },
    deleteProduct(){
      this.axios.delete(
        `${api_url}/api/${api_path}/admin/product/${this.tempProduct.id}`,
        {data:this.tempProduct}
      )
      .then((res) => {
        // console.log(res);
        this.getProducts();
        this.tempProduct ={};
        this.modalDel.hide();
      })
      .catch((err) => {
        // console.log(err);
        alert(`${err.data.message}`);
      });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token
    // console.log(token)
    this.checkAdmin()
    this.modalProduct = new bootstrap.Modal(this.$refs.productModal);
    this.modalDel = new bootstrap.Modal(this.$refs.delProductModal);
    
  }
}
</script>
