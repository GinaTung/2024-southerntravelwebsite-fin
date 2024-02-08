<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-lg-0 align-items-center">
          <li class="nav-item">
            <router-link to="/TouristAttractions" class="nav-link px-3">南部旅遊景點</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link px-3">南部旅遊方案</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link px-3">南部旅遊預算</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/login" class="btn-outline-turquoise">登入</router-link>
          </li>
          <!-- <a href="logIn.html" class="btn-outline-turquoise" type="button">登入</a> -->
          <li class="nav-item">
            <router-link to="/signup" class="btn-turquoise ms-3">註冊</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/admin/adminlogin" class="nav-link">後台管理</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
