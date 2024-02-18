<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
    <div class="container">
      <router-link to="/" class="navbar-brand py-6">
        <img src="../assets/img/logo.png" alt="南部輕旅遊網站" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse py-10 py-lg-0" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-lg-0 align-items-center">
          <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristAttractions" class="nav-link px-5 px-xl-10 fs-5 text-dark">南部旅遊景點</router-link>
          </li>
          <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristPackage" class="nav-link px-5 px-xl-10 fs-5 text-dark">南部旅遊方案</router-link>
          </li>
          <li class="nav-item mb-10 mb-lg-0">
            <router-link to="/TouristBudget" class="nav-link px-5 px-xl-10 fs-5 text-dark">南部旅遊預算</router-link>
          </li>
        </ul>
        <ul class="navbar-nav pt-5 pt-lg-0">
          <li class="nav-item">
            <router-link to="/login" class="btn-outline-turquoise">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="btn-turquoise ms-3">註冊</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>