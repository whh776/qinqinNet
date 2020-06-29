<template>
  <div class="items">
   
    <ul>
      <router-link
        tag="li"
        v-for="item in lists"
        :key="item.id"
        :to="{
          name:'detail',
          parmas:{
            id:item.goodsid
          },
          query:{
            pic:item.pic,
            title:item.d_title,
            jiage:item.jiage,
            quan_jine:item.quan_jine,
            shop_name:item.shop_name
          }
        }"
      >
        <div class="itemLeft">
          <img :src="item.pic" alt />
        </div>
        <div class="itemRight">
          <h3>{{ item.d_title}}</h3>
          <p>价格: {{ item.jiage }}</p>
          <p>优惠券： {{ item.quan_jine }}</p>
          <p>
            <span>已售{{ item.xiaoliang }}</span> |
            <span>评论： {{ item.comment }}</span>
          </p>
          <p>{{ item.shop_name}} 进店></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["lists"],
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
ul {
  height: 100%;
  padding: .1rem;
  li {
       display: flex ;
        margin: .15rem 0;
        overflow :hidden;
    // width: 3.75rem;
    .itemLeft {
        // float: left;
      height: 1.26rem;
      width: 1.26rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .itemRight {
        flex:1;
        
      padding-left:0.2rem ;
        // float: left;
      h3 {
           width :2.02rem;
              text-overflow: ellipsis ;
              white-space: nowrap;
              overflow :hidden;
        font-size: 0.18rem;
        padding-bottom:0.2rem;
      }
      p:nth-child(2) {
          
        color: red;
        font-size: 0.14rem;
      }
      p:nth-child(3) {
          
        font-size: 0.14rem;
      }
      p:nth-child(4) {
        font-size: 0.14rem;
        span:nth-child(1) {
          font-size: 0.12rem;
        }
        span:nth-child(2) {
          font-size: 0.12rem;
        }
      }
       p:nth-child(5) {
        font-size: 0.14rem;
      }
    }
  }
}
</style>