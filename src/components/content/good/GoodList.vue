<template>
  <div class="goods">
    <good-list-item class="goods-item" v-for="item in goods" :goods-item="item" :key="item.iid"/>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";
  export default {
    name: "GoodList",
    components: {GoodListItem},
    props:{
      goods:{
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    margin-bottom: 44px;
  }
</style>
