<template>
  <div class="tabbar">
    <ul class="tabbarUl">
      <router-link
        :to=item.path
        tag="li"
        active-class="sel"
        v-for="item in list"
        :key="item.id"
      >
        <i :class="['fa',item.icon]"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "首页",
          path: "/home",
          name: "home",
          icon: "fa-home"
        },
        {
          id: 2,
          title: "9.9包邮",
          path: "/hot",
          name: "hot",
          icon: "fa-shopping-cart"
        },
        {
          id: 3,
          title: "类型",
          path: "/type",
          name: "type",
          icon: "fa-bars"
        },
        {
          id: 4,
          title: "我的",
          path: "/my",
          name: "my",
          icon: "fa-user"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../style/index.less";
.tabbar {
  width: 3.75rem;
  height: 0.51rem;
  background-color: #fff;
  position:fixed;
  bottom: 0;
    border-top: solid 0.01rem #fe3c35;
  .tabbarUl {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .sel{
      background-color: orange;
    }
    li {
      height: 100%;
      width: 25%;
      text-align: center;
      // line-height: 0.49rem;
      span {
          display: block;
          font-size: 0.14rem;
          //  color:white ;
        }
        i {
          display: block;
          // color:white ;
          // color: #666;
          font-size: 0.18rem;
          padding: 0.08rem 0 0.02rem 0;
      }
    }
  }
}
</style>