<template>
  <div class="list">
    <van-loading type="spinner" color="#1989fa" v-if="loadingFlag" size="88" />
    <van-tabs type="line" background="#faf5f6" title-active-color="red">
      
      <van-tab title="人气">
        <Item :lists="hots"></Item>
      </van-tab>
      <van-tab title="最新">
        <Item :lists="latest"></Item>
      </van-tab>
      <van-tab title="销量">
        <Item :lists="sell"></Item>
      </van-tab>
      <van-tab title="价格">
        <Item :lists="price"></Item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getHot, getLatest, getPrice, getSell } from "Api/hot.js";
import Item from "./item";
export default {
  components: {
    Item
  },
  data() {
    return {
      hots: [],
      latest: [],
      sell: [],
      price: [],
      loadingFlag: true
    };
  },
  async mounted() {
    const { id } = this.$route.params;
    const hotRes = await getHot(id);
    const latestRes = await getLatest(id);
    const sellRes = await getSell(id);
    const priceRes = await getPrice(id);
    this.loadingFlag = false;
    this.hots = (hotRes.data && hotRes.data.data.content) || [];
    this.latest = (latestRes.data && latestRes.data.data.content) || [];
    this.sell = (sellRes.data && sellRes.data.data.content) || [];
    this.price = (priceRes.data && priceRes.data.data.content) || [];
  }
};
</script>