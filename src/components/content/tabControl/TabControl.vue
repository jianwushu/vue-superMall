<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(title,index) in titles"
         :class="{active:index===curIndex}"
         @click="tabClick(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type: Array,
        default: []
      }
    },
    data(){
      return{
        curIndex: 0
      }
    },
    methods:{
      tabClick(index){
        this.curIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
