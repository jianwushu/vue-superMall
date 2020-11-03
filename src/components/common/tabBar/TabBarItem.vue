<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="icon"></slot></div>
      <div v-else><slot name="icon-active"></slot></div>
      <div><slot name="text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props:{
      path: String
    },
    data(){
      return{
      }
    },
    computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*取消图片下边距*/
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
