<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="icon" src="~assets/img/tabBar/home.svg">
        <img slot="icon-active" src="~assets/img/tabBar/home_active.svg">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="icon" src="~assets/img/tabBar/category.svg">
        <img slot="icon-active" src="~assets/img/tabBar/category_active.svg">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <img slot="icon" src="~assets/img/tabBar/shopcart.svg">
        <img slot="icon-active" src="~assets/img/tabBar/shopcart_active.svg">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="icon" src="~assets/img/tabBar/profile.svg">
        <img slot="icon-active" src="~assets/img/tabBar/profile_active.svg">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabBar/TabBar'
  import TabBarItem from '@/components/common/tabBar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,TabBarItem
    }

  }
</script>

<style scoped>

</style>
