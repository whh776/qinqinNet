<template>
  <van-tabs v-model="activeKey" type="line" background="#faf5f6" title-active-color="red">
    <van-tab v-for="item in categorys" :key="item.cid" :title="item.name">
      <div class="category-list"> 
        <div class="category-list-item"
          v-for = "(floor,index) in item.floors"
          :key = 'index'
        >
          <h2> {{ floor.name }} </h2>
          <ul>
            <router-link 
              tag="li"
              v-for = "ele in floor.list"
              :key = "ele.api_cid"
              :to = "{
                name: 'list',
                params: {
                  id: ele.api_cid
                }
              }"
            >
              <img :src="ele.img" alt="">
              <span> {{ ele.name }} </span>
            </router-link>
          </ul>
        </div>
      </div>
    
    <!-- 里面内容 -->
    </van-tab>
  </van-tabs>
</template>
<script>
export default {
  props: ["categorys"],

  data() {
    return {
      activeKey: ""
    };
  }
};
</script>
<style lang="less" scoped>
.category-list {
  height: 100%;
//   overflow: auto;
  .category-list-item {
    margin-bottom: 0.3rem;
    h2 {
      font-size: 0.18rem;
      font-weight: normal;
      margin-bottom: 0.3rem;
      margin-left: 0.2rem;
      padding-top: 0.2rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0.15rem;
        margin-bottom: 0.2rem;
        img {
          width: 0.6rem;
          height: 0.6rem;
        }
        span {
          font-size: 0.14rem;
          color: #666;
        }
      }
    }
  }
}
</style>