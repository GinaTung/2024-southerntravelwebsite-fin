<template>
  <ul class="list-group rounded-1">
    <li class="list-group-item list-group-item-action list-group-item d-flex justify-content-between align-items-center">
      <router-link to="/admin/touristManagement" class="nav-link">景點管理</router-link>
      <span class="badge text-bg-primary rounded-pill">0</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <router-link to="/admin/productsManagement" class="nav-link">產品管理</router-link>
      <span class="badge text-bg-primary rounded-pill">0</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      留言
      <span class="badge text-bg-primary rounded-pill">1</span>
    </li>
    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <a class="nav-link disabled" aria-disabled="true"
        >優惠券
        <span class="badge text-bg-primary rounded-pill"></span>
      </a>
    </li>
  </ul>
</template>
