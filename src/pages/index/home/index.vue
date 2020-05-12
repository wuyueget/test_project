<template>
  <div class="container">
    <bottom :bottomnav = 'bottomarr' ></bottom>
    <img src="../../../../static/icont/font_1120850_v6e44xsed6f/banner1.png">
    <div class="navbox">
      <div class="nav1box" v-for="item in navarr">
        <img :src="item.img">
        <div class="fulibox">{{item.name}}</div>
      </div>
    </div>
    <div class="tishi">
      <div class="botton">提示222</div>
      <div class="wenzi">使用<span style="color:#F18B36 ">惠民优惠券</span>有机会再次获得福利哦！</div>
      <img src="../../../../static/icont/font_1120850_v6e44xsed6f/jiantou.png">
    </div>
    <div class="textnav">
      <div :class="item.active?'quanbu':'quanbu1'" v-for="item in textarr">{{item.name}}</div>
      <div class="whithbox"></div>
    </div>
    <div class="daohang1">
      <div class="add">
        <div class="canyin">餐饮</div>
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/biaoti.png">
      </div>
      <div class="dian1" @click="fn(item)">
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/tuijian1.png">
        <div class="xiangjie">
          <div class="zanbox">
            <div style="font-size: 1.5em;font-weight: bold">成都后花园（爱情海店）</div>
            <img src="../../../../static/icont/font_1120850_v6e44xsed6f/bang.png">
           </div>
          <div class="dazhe">全场低至8.8折</div>
          <div style=" color: #C1C1C1;">成都市武侯区商鼎国际B座407</div>
        </div>
        <div class="daohang">
          <img src="../../../../static/icont/font_1120850_v6e44xsed6f/daohang.png">
          <div style="color: #C1C1C1">导航</div>
        </div>
      </div>
      <div class="xianbox"></div>
      <div class="dian1">
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/tuijian2.png">
        <div class="xiangjie">
          <div class="zanbox">
            <div style="font-size: 1.5em;font-weight: bold">书亦烧仙草（科大路店）</div>
            <img src="../../../../static/icont/font_1120850_v6e44xsed6f/bang.png">
          </div>
          <div class="dazhe1">
            <div class="dazhe" style="width: 70px">全场8.8折</div>
            <div class="manjian">满减优惠</div>
          </div>
          <div style=" color: #C1C1C1;">成都市武侯区商鼎国际B座407</div>
        </div>
        <div class="daohang">
          <img src="../../../../static/icont/font_1120850_v6e44xsed6f/daohang.png">
          <div style="color: #C1C1C1">导航</div>
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
          {name:'首页',icont:'icon-shouye',id:0,active:true},
          {name:'商场',icont:'icon-shangcheng',id:1,active:false},
          {name:'评选',icont:'icon-shezhaodatiyemian-',id:2,active:false},
          {name:'我的',icont:'icon-wode',id:3,active:false}
        ],
        navarr:[
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/fuliicon@2x.png',name:'领福利'},
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/guanghuayangicon@2x.png',name:'逛华阳'},
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/zhaoicon@2x.png',name:'找“相因”'},
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/dakaicon@2x.png',name:'打卡礼'}
        ],
        textarr:[
          {name:'全部',id:0,active:true},
          {name:'餐饮',id:1,active:false},
          {name:'家居建材',id:2,active:false},
          {name:'服饰',id:3,active:false},
          {name:'商超',id:4,active:false},
          {name:'酒店',id:5,active:false},
          {name:'旅游',id:6,active:false}
        ],
      }
    },
    props: {
    },
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
      fn(item){
       this.$router.push({path:'/xiangqing'})
      }
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .container>img{
      width: 100%;
      /*height: 180px;*/
    }
    .navbox{
      width: 90%;
      height: 100px;
      background-color: #FFFFFF;
      box-shadow: 0 3px 0px #e9e9e9 ;
      border-radius: 8px;
      display: flex;
      justify-content: space-around;
      position: relative;
      top: -20px;
      left: 20px;
      .nav1box>img{
        width: 50px;
        margin: 15px 20px 0;
      }
      .fulibox{
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
    .tishi{
      width: 90%;
      height: 50px;
      border-radius: 25px;
      background-color: #F7F7F7;
      margin: 0 auto;
      display: flex;
       .botton{
        width: 50px;
        height: 28px;
        font-size: 1.4em;
        margin: 10px 15px;
        border-radius: 3px;
        text-align: center;
        line-height: 28px;
        color: white;
        background-color: #F18B36;
      }
      .wenzi{
        width: 70%;
        height: 25px;
        font-size: 1em;
        color: #969896;
        margin: 10px 0;
        line-height: 25px;
        box-sizing: border-box;
      }
   }
    .tishi>img{
      width: 8px;
      height: 12px;
      margin: 15px 5px;
    }
    .textnav{
      width: 96%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      margin-left: 30px;
      position: relative;
      .quanbu,.quanbu1{
        height: 40px;
        font-size: 1.3em;
        font-weight: bold;
        margin-top: 10px;
        line-height: 40px;
      }
      .quanbu{
        font-size: 1.5em;
        color: #F18B36;
      }
      .whithbox{
        width: 30px;
        height: 5px;
        border-radius: 10px;
        background-color: #F18B36;
        position: absolute;
        left: 5px;
        bottom: 15px;
      }
    }
    .daohang1{
      width: 90%;
      margin: 0 auto;
      padding-bottom: 50px;
      .add{
        width: 100%;
        text-align: center;
        margin: 10px 0;
        position: relative;
        .canyin{
          font-size: 1.2em;
          color: #666666;
        }
      }
      .dian1{
        width: 100%;
        display: flex;
        position: relative;
        .xiangjie{
          width: 80%;
          margin-left: 10px;
        .zanbox{
            width: 100%;
            display: flex;
          }
          .dazhe1{
            display: flex;
            .manjian{
              font-size: 0.9em;
              width: 70px;
              height: 17px;
              line-height: 17px;
              margin: 10px 5px;
              text-align: center;
              color: #F18B36;
              border: 1px solid #F18B36;
            }
          }
          .dazhe{
            width: 90px;
            height: 17px;
            font-size: 0.9em;
            text-align: center;
            line-height: 17px;
            background-color: #FFF7F0;
            color: #F18B36;
            margin: 10px 0;
          }
        }
        .daohang{
          width: 50px;
          height: 18px;
          display: flex;
          position: absolute;
          right: 0px;
          bottom: 0px;
         }
      }
      .xianbox{
        width: 72%;
        border-bottom:1px solid #E5E5E5;
        margin: 15px 0px 15px 90px;
      }
      .add>img{
        width: 110px;
        height: 8px;
        position: absolute;
        top: 7px;
        left: 33%;
      }
      .dian1>img{
        width: 85px;
      }
      .zanbox>img{
        width: 20px;
      }
      .daohang>img{
        width: 15px;
        margin-right: 5px;
      }
    }
  }
</style>
