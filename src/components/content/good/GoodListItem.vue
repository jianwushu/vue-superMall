<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 49%;
    position: relative;
    vertical-align: center;
    padding-bottom: 44px;
  }
  .goods-item img{
    width: 100%;
    height: 90%;

    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
