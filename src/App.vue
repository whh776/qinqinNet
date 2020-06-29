<template>
  <div id="App">
    <!-- 头部 -->
    <Tabs v-if="tabsFlag"></Tabs>
    <!-- 中间内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <Tabbar v-if="tabbarFlag"></Tabbar>
  </div>
</template>

<script>
import Tabs from "./components/tab";
import Tabbar from "./components/tabbar";
export default {
  name: "App",
  components: {
    Tabs,
    Tabbar
  },
  data(){
    return({
      tabsFlag:true,
      tabbarFlag:true,
    })
  },
  watch:{
    $route(){
      const {path}=this.$route
      const arr=['/detail']
      const arr1=['/my','/type',"/login", "/register"]
      let f=arr.some(item=>item===path)
      let f1=arr1.some(item=>item===path)
      if(f){
        this.tabsFlag=false
        this.tabbarFlag=false
      }else{
        this.tabsFlag=true
        this.tabbarFlag=true
      }
      if(f1){
        this.tabsFlag=false
        // this.tabbarFlag=false
      }else{
        this.tabsFlag=true
        // this.tabbarFlag=true
      }
    }
  }
};
</script>

<style lang="less">
@import "./style/reset.css";
#App{
  // height:100%;
  width: 3.75rem;
  display:flex;
  flex-direction: column;
  // background:blue;
  .content {
    flex: 1;
    height: 100%;
    // overflow: hidden;
  }
}
</style>
