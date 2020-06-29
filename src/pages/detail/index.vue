<template>
  <div class="detail">
    <Item></Item>
    <!-- 購物車組件 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="num" @click.native='shopcar'/>
      <van-goods-action-icon icon="shop-o" text="店铺" badge />
      <van-goods-action-button type="warning" text="加入购物车" @click.native="openShow" />
      <van-goods-action-button type="danger" text="立即购买" @click.native="openShow" />
    </van-goods-action>

    <!-- 商品规格 -->
    <!-- <div class="sku-container"> -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @sku-selected="onSkuSelected"
      @stepper-change="getNumber"
    />
    <!-- <van-sku
    v-model="showStepper"
    />-->
  </div>
</template>
<script>
import Item from "./item";
import {getStorage,setStorage} from '../../utils/storage'
export default {
  data() {
    return {
      num: 0,
      show: false,
      quota: 10,
      quotaUsed: 0,
      count: 0,
      goodsId: 0,
      data:{},
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1223370101/O1CN01kEAyR51CcIbo8WKIf_!!0-saturn_solar.jpg_580x580Q90.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/1223370101/O1CN01kEAyR51CcIbo8WKIf_!!0-saturn_solar.jpg_580x580Q90.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2658474131/O1CN01baqCd21gO2jT4WJ70_!!2658474131.jpg_580x580Q90.jpg",
                previewImgUrl: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2658474131/O1CN01baqCd21gO2jT4WJ70_!!2658474131.jpg_580x580Q90.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1214", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "1215", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        picture: ""
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    };
  },
  components: {
    Item
  },
  watch:{
    show(){
      this.num=getStorage('car').length  //获取储存在本地购物车数量的长度
    }
  },
  methods: {
    openShow() {
      this.show = true;
    },
    shopcar(){
      this.$router.push('./shopCar')
    },
    onBuyClicked() {
      // 点击加入立即购买  进入支付页面
      this.$toast.loading({
              message: "正在跳往支付页面",
              forbidClick: true
            });
            setTimeout(()=> {
              this.$router.push("./payload");
            }, 2500);
      console.log(1);
    },
    onAddCartClicked() {
      // 点击加入购物车
      console.log(2);
      const car =getStorage('car')
      this.data.num=this.num
      let f=true 
      if(car.length!=0){
        car.map(item=>{
          if(item.id===this.$route.params.id){
            // 同一個商品，需要数量增加
            item.num+=this.num
            setStorage('car',car)
            f=false
            return
          }
        })
        if(f){
          car.push({
            ...this.data,
            num:this.num
          })
          setStorage('car',car)
        }
      }else{
        console.log('第一次添加');
        setStorage('car',[{
          ...this.data,
          num:this.num
        }])
      }
       this.$toast.success('添加成功');
      this.show = false 
    },
    onSkuSelected() {
      // 切换商品图片
      console.log(3);
    },
    getNumber(val) {
      // 商品的增删改查
      this.num=val
      console.log(4);
    }
  }
};
</script>