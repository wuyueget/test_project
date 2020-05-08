<template>
  <div class="container">
    <div class="topbox">
      <input type="text" placeholder="商户搜索"/>
      <div class="sosuo">
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/sosuo.png">
      </div>
      <div class="textnav">
        <div :class="item.active?'quanbu':'quanbu1'" v-for="item in textarr">{{item.name}}</div>
        <div class="whithbox"></div>
      </div>
    </div>
    <div class="xuanbox">
      <div class="paixu">默认排序</div>
      <div class="zhekou" style="margin: 0 40px">
        <div class="zhekou1" style="margin-right: 5px">折扣</div>
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/shangjiantou.png">
      </div>
      <div class="renqi">人气</div>
    </div>
    <div class="neibox">
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
            <div class="youli">有礼</div>
          </div>
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
    <div class="dibu"></div>
    <bottom :bottomnav = 'bottomarr' ></bottom>
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
          {name:'商场',icont:'icon-shangcheng',id:1,active:true},
          {name:'评选',icont:'icon-shezhaodatiyemian-',id:2,active:false},
          {name:'我的',icont:'icon-wode',id:3,active:false}
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
    .topbox{
      width: 100%;
      position: relative;
      box-shadow: 0 3px 10px #e9e9e9 ;
    }
    input{
      width: 90%;
      height: 45px;
      margin: 10px 5% 0;
      font-size: 1.2em;
      color:rgba(43,43,43,1);
      text-indent: 10px;
      border: 1px solid #cccccc;
      outline:medium;
      border-radius:5px;
    }
    .sosuo{
      width: 60px;
      height: 35px;
      border-left: 1px solid #D2D2D2;
      position: absolute;
      top: 16px;
      right: 20px;
    }
    .sosuo>img{
      width: 40px;
      margin-left: 10px;
    }
    .textnav {
      width: 96%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      margin-left: 25px;
      position: relative;

      .quanbu, .quanbu1 {
        height: 40px;
        font-size: 1.3em;
        font-weight: bold;
        margin-top: 10px;
        line-height: 40px;
      }
      .quanbu {
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
    .neibox{
      width: 90%;
      margin-left: 20px;
    }
    .xuanbox{
      width: 90%;
      height: 30px;
      margin:10px auto;
      font-size: 1.2em;
      color: #2B2B2B;
      line-height: 30px;
      display: flex;
      .zhekou{
        display: flex;
      }
    }
    .zhekou>img{
      height: 15px;
      margin-top: 8px;
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
          .youli{
            width: 40px;
            height: 17px;
            margin: 10px 0;
            text-align: center;
            color: #F18B36;
            background-color: #FFF7F0;
            line-height: 15px;
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
        right: 10px;
        bottom: 0px;
      }
    }
    .xianbox{
      width: 72%;
      border-bottom:1px solid #E5E5E5;
      margin: 15px 0px 15px 90px;
    }
    .dibu{
      width: 100%;
      height: 15px;
      margin-top: 10px;
      background-color: #F2FCFF;
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

</style>
