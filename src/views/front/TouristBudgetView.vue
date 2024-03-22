<template>
  <div class="container py-10 py-lg-30">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="pb-5 pb-lg-15">
      <ol class="breadcrumb mb-0 fs-5">
        <li class="breadcrumb-item">
          <router-link to="/" class="navbar-brand py-6"> 首頁 </router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">南部旅遊預算</li>
      </ol>
    </nav>
    <div class="bg-primary-600 w-100 mt-3 d-flex flex-column align-items-center justify-content-center" style="text-align: center;margin: auto;padding: 20px;min-height: 200px;">
    <span class="loader"></span>
</div>
  </div>
</template>

<script>
export default {
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>