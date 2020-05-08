<template>
  <div class="container">
    <bottom :bottomnav = 'bottomarr' ></bottom>
    <div class="box">
      <div class="box1" v-for="item in dataarr" @click="tiaozhuan(item)">
        <img :src="'https://www.mysterycode.cn'+item.doorPhoto">
        <div>
          <div>店名：{{item.name}}</div>
          <div>地址：{{item.address}}</div>
          <div class="iconfont icon-location"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bottom from '@/components/bottom/bottom'
  export default {
    components: {bottom},
    data() {
      return {
        bottomarr:[
          {name:'首页',icont:'icon-shouye',id:0,active:false},
          {name:'商场',icont:'icon-shangcheng',id:1,active:false},
          {name:'评选',icont:'icon-shezhaodatiyemian-',id:2,active:true},
          {name:'我的',icont:'icon-wode',id:3,active:false}
        ],
        dataarr:[],
      }
    },
    props: {},
    methods:{
      // navclick(item){
      //   console.log(item)
      //   if(item.id==1){
      //     this.$router.push({path:'/shangcheng'})
      //   }else if(item.id==0){
      //     this.$router.push({path:'/home'})
      //   }else if(item.id==2){
      //     this.$router.push({path:'/pingxuan'})
      //   }else if(item.id==3){
      //     this.$router.push({path:'/mycenter'})
      //   }
      // }
      tiaozhuan(item){
        this.$router.push({path:'/xiangqing',query:{id:item.id}})
      },
      getdata(){
        var data={
          pageNo:1,
          pageSize:12,
          categoryParentId:1,
          name:'',
          orderField:'id',
          orderType:'asc',
        }
        let _this = this
        this.axios.post(this.apis+'/api/merchant/index',data).then((res)=>{
          _this.dataarr=res.data.data
          console.log(_this.dataarr,'res')
        })
      }
    },
    mounted(){

    },
    created() {
      this.getdata()
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .box{
    width: 100%;
    padding-bottom: 50px;
    .box1{
      width: 100%;
      margin: 10px 0;
      border: 1px solid red;
      display: flex;
    }
  }
  img{
    width: 70px;
    height: 70px;
  }
</style>
