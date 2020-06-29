<template>
    <div class="datailItem">
        <!-- <div class="itemImg"> -->
         <img :src="$route.query.pic" alt="" />
        <!-- </div> -->
        <div class="ItemButtom">
        <p>卷后：￥{{$route.query.quan_jine}}元</p>
         <p>原价：{{$route.query.shop_name}}</p>
            <p>商品名字：{{$route.query.title}}</p>
           
            <p>现价：￥{{$route.query.jiage}}元</p>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return({
            lists:[]
        })
    },
    components:{

    },
    methods:{

    },
}
</script>
<style lang="less" scoped>
.datailItem{
    img{
        width:3.75rem;
        height:3.75rem
    }
    p{
        padding:0.1rem 0 0 0.2rem;
        
    }
    p:nth-child(1){
        font-size: 0.2rem;
        color:red;
    }
    p:nth-child(2){
        font-size: 0.12rem;
    }
    p:nth-child(3){
        font-size: 0.16rem;
    }
    p:nth-child(4){
        font-size: 0.16rem;
        color:gray;
    }
}
</style>