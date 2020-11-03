<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>
