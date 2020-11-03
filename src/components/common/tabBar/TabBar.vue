<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  .tab-bar{
    /*元素浮动-横放*/
    display: flex;
    background-color: #f6f6f6;
    text-align: center;
    /*贴底*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*上边框*/
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  }

</style>
