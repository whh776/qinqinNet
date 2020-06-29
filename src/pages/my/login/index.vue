<template>
  <div class="tab">
    <!-- 返回 -->
    <van-icon name="arrow-left" size="60px" @click="back" />
    <!-- 返回 -->
    <van-form  class="form">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="login">登入</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { apiLogin } from "../../../api/index";
import { getCookie, setCookie } from "Utils/cookie.js";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    login() {
      axios({
        url:apiLogin,
        method:'post',
        data:{
          username: this.username,
          password: this.password,
        },
        headers:{
          token:getCookie('token')
        }
      })
        .then(data => {
          console.log(data);
          const datas =data.data
          
          if (datas.status == 1) {
            setCookie("token", datas.token, 1);
            setCookie("userId", datas.userId, 1);
            this.$toast.loading({
              message: "登入成功，正在跳转首页",
              forbidClick: true
            });
            setTimeout(()=> {
              this.$router.push("./home");
            }, 2500);
          } else {
            this.$toast.fail('用户名或密码错误');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.tab {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .form {
    margin-top: 25%;
  }
}
</style>