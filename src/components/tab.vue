<template>
  <div class="tab" >
    <i class="fa fa-hand-o-left" v-if="leftFlag" @click="back"></i>
    <h2>移动端app</h2>
    <i class="fa fa-ellipsis-v" v-if="rightFlag"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftFlag: true,
      rightFlag: true
    };
  },
  watch: {
    $route() {
      // console.log(1);
      const { path } = this.$route;
      const arr = ["/my"];
      let f = arr.some(item => item === path);
      if (f) {
        this.leftFlag = false;
        // this.rightFlag = true;
      } 
    }
    
  },
  methods: {
    back() {
      this.$router.back(1);
    }
  },
};
</script>
<style lang="less" scoped>
@import "../style/index.less";
.tab {
  width: 3.45rem;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  padding: 0 0.15rem;
  h2 {
    flex: 1;
    font-size: 0.2rem;
    color: white;
    text-align: center;
  }
  i {
    color: white;
    font-size: 0.28rem;
  }
}
</style>