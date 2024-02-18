<template>
      <div class="bg-light">
    <div class="container py-10 justify-content-between">
      <nav class="navbar mb-10 flex-column flex-lg-row py-0">
        <router-link to="/" class="navbar-brand  mb-10 mb-lg-0 py-0 mx-0">
        <img src="../assets/img/logo.png" alt="南部輕旅遊網站" />
         </router-link>
        <ul class="navbar-nav flex-column flex-lg-row">
          <li class="nav-item">
            <router-link to="/TouristAttractions" class="nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0">南部旅遊景點</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/TouristPackage" class="nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0">南部旅遊方案</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/TouristBudget" class="nav-link px-5 px-xl-10 fs-6 fs-lg-5 text-dark mb-3 mb-lg-0">南部旅遊預算</router-link>
          </li>
        </ul>
        <ul class="navbar-nav flex-row fs-add-2">
          <li class="nav-item">
            <a class="nav-link py-0 ps-1" href="#">
              <i class="bi bi-youtube img-lg"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-6" href="#">
              <i class="bi bi-instagram img-lg"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 ps-6" href="#">
              <i class="bi bi-facebook img-lg"></i>
             </a>
          </li>
        </ul>
      </nav>

        <div class="d-flex text-center flex-column align-items-center">
          <p class="fw-bold text-dark mb-1">
            南部輕旅行 「完美套裝」
          </p>
          <p class="fw-bold text-dark mb-1">
            輕鬆省心，玩得盡興！
          </p>
          <p class="text-dark mb-10">
            景點探索 + 美食巡禮 + 便捷交通 + 舒適住宿
          </p>
          <p class="text-dark2 fs-7 fs-lg-6">
            本網站僅供個人作品使用，不提供商業用途<br>
            資料來源<br><a href="https://www.taiwan.net.tw/" class="fw-bold fs-7" target="_blank">臺灣觀光資訊網</a>
            <br><a href="https://www.swcoast-nsa.gov.tw/zh-tw/gwoia" class="fw-bold fs-7" target="_blank">雲嘉南濱海國家風景區管理處網站</a>
            <br><a href="https://khh.travel/" target="_blank" class="fw-bold fs-7">高雄旅遊網</a>、<a href="https://travel.chiayi.gov.tw/" target="_blank" class="fw-bold fs-7">嘉義市觀光旅遊網</a>
          </p>
        </div>
        <ul class="navbar-nav text-end">
          <li class="nav-item">
            <router-link to="/admin/adminlogin" class="nav-link">後台管理</router-link>
          </li>
        </ul>
    </div>
  </div>
</template>