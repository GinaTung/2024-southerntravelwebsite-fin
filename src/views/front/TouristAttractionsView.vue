<template>
  <div class="about container">
    <h1 class="mb-30">This is an 南部旅遊景點 page</h1>
    {{ this.data }}
    <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>
    <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>
    <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data(){
    return {
      data:""
    }
  },
  mounted(){
    console.log(import.meta.env.VITE_PATH);
    this.$http.get('https://randomuser.me/api/').then((response) => {
        console.log(response.data)
        this.data = response.data;
      })
  }
}
</script>

<style>
</style>
