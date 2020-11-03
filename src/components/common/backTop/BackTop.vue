<template>
  <div class="back-top"@click="topClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      topClick(){
        this.$emit('topClick')
      }
    }
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
    z-index: 9;
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>
