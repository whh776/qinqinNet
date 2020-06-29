<template>
  <div class="my">
    <!-- 顶部 -->
    <div class="myTop">
      <div class="topPic">
        <img
          src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/user.png?v=202006042105"
          alt
        />
      </div>

      <div class="topLogin">
        <p @click="pLogin">登入/</p>
        <p @click="pRegister">注册</p>
      </div>
    </div>
    <!-- 中间 -->
    <ul>
      <router-link to="/myList" tag="li" active-class="sel">
        <van-icon name="coupon-o" size="30px" />
        <span>我的订单</span>
      </router-link>
      <router-link to="/myCollect" tag="li" active-class="sel">
        <van-icon name="like-o" size="30px" />
        <span>我的收藏</span>
      </router-link>
      <router-link to="/footprint" tag="li" active-class="sel">
        <van-icon name="logistics" size="30px" />
        <span>我的足迹</span>
      </router-link>
    </ul>
    <!-- 照片 -->
    <div class="pic">
      <img
        src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01bLpnd12JJi1DrW0a9_!!2053469401.jpg"
        alt
      />
    </div>
    <!-- 底部 -->
    <nav>
      <h4>常用工具</h4>
      <router-link to tag="li" active-class="sel">
        <van-icon name="edit" size="30px" color="#FF7E83" />
        <span>新手教程</span>
      </router-link>
      <router-link to tag="li" active-class="sel">
        <van-icon name="music" size="30px" color="#FBBC4D" />
        <span>专属客服</span>
      </router-link>
      <router-link to tag="li" active-class="sel">
        <van-icon name="comment-circle" size="30px" color="#4AD7CE" />
        <span>意见反馈</span>
      </router-link>
      <router-link to tag="li" active-class="sel">
        <van-icon name="down" size="30px" color="#61A4FF" />
        <span>下载APP</span>
      </router-link>
      <router-link to tag="li" active-class="sel">
        <van-icon name="question" size="30px" color="#FBBA4D" />
        <span>帮助中心</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    pLogin() {
      this.$router.push("/login");
    },
    pRegister() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="less" scoped>
  .my {
    width: 100%;
    // background-color: #f5f5f5;
    height: 100%;
    .myTop {
      border-radius: 0 0 5% 5%;
      padding-top: 0.35rem;
      width: 100%;
      height: 1.26rem;

      background-color: red;
      .topPic {
        width: 0.66rem;
        height: 0.6rem;
        float: left;

        padding: 0 0.1rem;
      }
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .topLogin {
      height: 100%;
      float: left;
      padding: 0 0.1rem;
      p {
        font-size: 0.26rem;
        float: left;
        line-height: 0.66rem;

        color: white;
      }
    }
    ul {
      background-color: #fff;
      width: 3.55rem;
      height: 0.93rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-left: 0.1rem;
      border-radius: 0.1rem;
      position: relative;
      bottom: 0.25rem;
      li {
        height: 0.93rem;
        text-align: center;
        span {
          display: block;
          font-size: 0.14rem;
          height: 0.45rem;
          line-height: 0.45rem;
        }
        .van-icon {
          display: block;
          margin-top: 0.15rem;
        }
      }
      .sel {
        background-color: red;
      }
    }
    .pic {
      // margin-top: 0.1rem;
      width: 3.55rem;
      height: 0.9rem;
      padding: 0 0.1rem;
      img {
        width: 100%;
        height: 100%;

        border-radius: 0.1rem;
      }
    }
    nav {
      margin-top: 0.15rem;
      width: 3.55rem;
      // height: 2.9rem;
      padding: 0 0.1rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      h4 {
        width: 100%;
        height: 0.35rem;
        font-size: 0.16rem;
        border-bottom: solid 1px #f5f5f5;
      }
      li {
        list-style: none;
        font-size: 0.2rem;
        width: 0.88rem;
        height: 0.66rem;
        text-align: center;
        span {
          display: block;
          font-size: 0.14rem;
          color: #666;
        }
        .van-icon {
          margin-top: 0.15rem;
        }
      }
    }
  }
</style>