<template>
  <div class="tab">
    <!-- 返回图标 -->
    <van-icon name="arrow-left" size="60px" @click="back" />
    <van-form class="form">
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
      <van-field
        v-model="phone"
        type="text"
        name="手机"
        label="手机"
        placeholder="手机"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="register">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import axios from "axios";
import { apiRegister } from "../../../api/index";
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    register() {
      axios
        .post(apiRegister, {
          username: this.username,
          password: this.password,
          phone: this.phone
        })
        .then(res => {
          console.log(res);
          const data = res.data;
          if (data == 1) {
            this.$toast.loading({
              message: "注册成功，正在跳转登入页",
              forbidClick: true
            });
            setTimeout(() => {
              this.$router.push("./login");
            }, 2500);
          } else {
            this.$toast.fail("用户名已被注册");
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
  // background-color: skyblue;
  .form {
    margin-top: 25%;
  }
}
</style>