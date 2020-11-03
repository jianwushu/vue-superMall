<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">买买买</div>
    </nav-bar>
<!--    <scroll class="wrapper"-->
<!--      ref="scroll"-->
<!--            :probe-type="3"-->
<!--            @scroll="contentScroll"-->
<!--            :pull-up-load="true"-->
<!--            @pullingUp="loadMore">-->
      <home-swiper :banners="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <good-list :goods="showGoods" />

<!--    </scroll>-->
    <back-top @topClick="topClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/good/GoodList";
  import BackTop from "components/common/backTop/BackTop";
  import Scroll from "components/common/scroll/Scroll";

  import HomeSwiper from "./HomeSwiper";
  import HomeRecommend from "./HomeRecommend";
  import HomeFeatureView from "./HomeFeatureView";


  import {getHomeData,getGoodData} from "network/home";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      HomeRecommend,
      HomeFeatureView,
      TabControl,
      GoodList,BackTop,Scroll
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        imgUrl: "assets/img/common/top.png",
        isShowBackTop: false
      }
    },
    created() {
      this.getHomeData();
      this.getGoodData('pop');
      this.getGoodData('new');
      this.getGoodData('sell');
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods:{
      getHomeData(){
        getHomeData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getGoodData(type){
        const page = this.goods[type].page + 1;
        getGoodData(type,page).then(res => {
          switch (type) {
            case 'pop':
              this.goods[type].list.push(...res.pops)
              this.goods[type].page += 1
              break
            case 'sell':
              this.goods[type].list.push(...res.sell)
              this.goods[type].page += 1
              break
            case 'new':
              this.goods[type].list.push(...res.new)
              this.goods[type].page += 1
              break
          }
        })
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      topClick(){

      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {

      }

    }
  }
</script>

<style scoped>
  /*.home{*/
  /*  position: fixed;*/
  /*  bottom: 0;*/
  /*  left: 0;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  overflow: hidden;*/
  /*}*/
  .home-nav{
    background-color: deeppink;
    color: white;
  }
  /*.wrapper{*/
  /*  height: 100%;*/
  /*  position: absolute;*/
  /*}*/
</style>
