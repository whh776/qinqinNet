<template>
  <div>
    <van-loading type="spinner" color="#1989fa" v-if="loadingFlag" size="88" />
    <van-search v-model="searchVal" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <ul v-show="show">
      <li v-for="(item,index) in NewItems" :key="index" :value="item.value" v-text="item.name"></li>
    </ul>
    <Item :categorys="categorys"></Item>
  </div>
</template>
<script>
import { getCategory } from "Api/category.js";
import Item from "./item";
import axios from 'axios'
// import mock from '../../assets/mock'
// import {getSearch} from "Api/search.js"
export default {
  components: {
    Item
  },
  data() {
    return {
      categorys: [],
      searchs: [],
      loadingFlag: true,
      searchVal: "",
      show: false,
      items: [
        {
          name: "上海",
          value: "sh"
        },

        {
          name: "北京",
          value: "bj"
        },

        {
          name: "重庆",
          value: "cq"
        },

        {
          name: "嗨嗨嗨",
          value: "hhh"
        },

        {
          name: "海上",
          value: "hs"
        },

        {
          name: "京都",
          value: "jd"
        }
      ]
    };
  },
  created() {},
  async mounted() {
    let result = await getCategory();
    this.loadingFlag = false;
    this.categorys = result.data.data.data;
    this.categorys = (result.data.data.data && result.data.data.data) || [];

  },
  methods: {
    // init(){ 
    //   axios({
    //     url:mock
    //   }).then((res)=>{
    //     console.log(res);
        
    //   })
      
    // }
  },
  watch: {},
  computed: {
    NewItems() {
      let _this = this;
      let NewItems = [];
      this.items.map(function(item) {
        if (item.name.search(_this.searchVal) != -1) {
          NewItems.push(item);
        }
      });
      return NewItems;
    }
  },
  // eslint-disable-next-line no-dupe-keys
  mounted(){
    // this.init()
  }
};
</script>
<style lang="less" scoped>
span {
  font-size: 0.2rem;
}
li {
  font-size: 0.2rem;
}
</style>
