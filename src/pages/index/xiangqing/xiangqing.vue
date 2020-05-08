<template>
  <div class="container">
    <div class="topbox">
      <img src="../../../../static/icont/font_1120850_v6e44xsed6f/tuijian1.png">
      <div class="textbox">
        <div class="huayuan">成都后花园</div>
        <div class="xiaofei">人均消费：50元</div>
      </div>
      <div class="pingfen">
        <div class="fenbox">4.5分</div>
        <div class="fenbox1">评分</div>
      </div>
    </div>
    <div class="zhongjian">
      <div class="zhekou">
        <div class="huodong">折扣活动：</div>
        <div class="huodong1">全场商品低至1折</div>
      </div>
      <div class="zhekou">
        <div class="huodong">满减优惠：</div>
        <div class="manjian">
          <div class="manjian1">满100减30</div>
          <div class="manjian1" style="margin: 0 10px">满500减100</div>
          <div class="manjian1">满800减200</div>
        </div>
      </div>
      <div class="zhekou">
        <div class="libox">
          <div>有</div>
          <div>礼：</div>
        </div>
        <div class="miaoshu">最多15个字符的有礼描述</div>
      </div>
      <div class="zhekou">
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/dingwei1.png">
        <div class="dizhi" style="color:rgba(43,43,43,0.8);">三眼桥时间国际8号楼</div>
        <div class="daohang">
          <img src="../../../../static/icont/font_1120850_v6e44xsed6f/daohang1.png">
          <div>导航</div>
        </div>
      </div>
      <div class="zhekou">
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/shijian.png">
        <div class="shijian">
          <div class="shuzi" style="color:rgba(43,43,43,0.8);">12:00——19:00 </div>
          <div style="margin-left: 20px;color:rgba(43,43,43,0.8);">联系电话：12345678900</div>
          <div class="bohao">
            <img src="../../../../static/icont/font_1120850_v6e44xsed6f/bohao.png">
            <div>拨号</div>
          </div>
        </div>
      </div>
    </div>
    <div class="kongbox"></div>
    <div class="dibubox">
      <div class="erbox">
        <div class="shangpin">商品</div>
        <div class="shangjia">商家</div>
      </div>
      <div class="tishi">
        <div class="textbox"><span>温馨提示：</span> 此页面信息由商家提供，消费者到店消费时，注意核实，理性消费，商家如有违法违规行为欢迎投诉举报。</div>
      </div>
      <div class="jieshao">商户介绍</div>
      <div class="xiangxi">本店主要经营烤肉、饮品，与多家北京的生鲜供应商建立长期 稳定的合作关系，菜品新鲜、价格合理，重信用、保证产品质 量，以多品种经营特色和薄利多销的原则，赢得了广大客户的信任。</div>
      <div class="zhifu">本店支持扫码点单，微信支付。</div>
      <div class="xianbox"></div>
      <div class="tubox">
        <div class="imgbox" v-for="item in imgarr">
          <img :src="item.img">
        </div>
      </div>
    </div>
    <div class="bottombox">
      <div class="tousu">
        <div class="rexian">消费者投诉热线：<span style="color: #BE2929">12315</span></div>
        <img src="../../../../static/icont/font_1120850_v6e44xsed6f/jubao.png">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        imgarr:[
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/huanjinzhao.png'},
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/huanjinzhao.png'},
          {img:'../../../../static/icont/font_1120850_v6e44xsed6f/huanjinzhao.png'}
        ],
        xiangqinngid:'',
      }
    },
    props: {},
    methods:{
      getdata(){
        var data ={
          merchantId:this.xiangqinngid
        }
        this.axios.post(this.apis+'/api/commodity/index',data).then((res)=>{
          console.log(res.data.data,'res')
        })
      },
    },
    mounted(){
    },
    created() {
      this.xiangqinngid = this.$route.query.id
      this.getdata()
      console.log(this.xiangqinngid)
    },
  }
</script>

<style scoped lang="less">
  .topbox{
    width: 90%;
    height: 110px;
    border-bottom: 1px solid #b5b5b5;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .textbox{
    width: 50%;
    height: 90%;
    margin-top: 10px;
    .huayuan{
      font-size: 1.5em;
      margin: 10px 0;
      font-weight: bold;
      color: #333333;
    }
    .xiaofei{
      font-size: 1.2em;
      margin-top: 15px;
      color: grey;
    }
  }
  .pingfen{
    width: 15%;
    height: 60px ;
    margin: auto 0;
    border-left: 1px solid #E5E5E5;
    .fenbox{
      width: 100%;
      height: 30px;
      font-size: 1.2em;
      color: #2B2B2B;
      text-align: center;
      line-height: 30px;
    }
    .fenbox1{
      width: 100%;
      font-size: 1.2em;
      color: #2B2B2B;
      font-weight:400;
      text-align: center;
    }
  }
  .zhongjian{
    width: 90%;
    margin: 10px auto 0;
    .zhekou{
      width: 100%;
      height: 25px;
      margin: 5px 0;
      display: flex;
      .huodong{
        font-size: 1.1em;
        font-weight: bold;
        line-height: 25px;
      }
      .huodong1{
        width: 110px;
        height: 20px;
        font-size: 1em;
        color: #F18B36;
        margin: auto 10px;
        background-color: #FFECDD;
        text-align: center;
        line-height: 20px;
      }
      .manjian{
        width: 75%;
        height: 20px;
        margin: auto 2px;
        display: flex;
        .manjian1{
          width: 140px;
          height: 20px;
          font-size: 1em;
          text-align: center;
          line-height: 20px;
          color: #F18B36;
          border: 1px solid #F18B36;
        }

      }
      .daohang{
        width: 60px;
        height: 20px;
        color: #F18B36;
        border: 1px solid #F18B36;
        display: flex;
        line-height: 20px;
        margin-left: 130px;
      }
      .shijian{
        display: flex;

        font-size: 0.4rem;
      }
      .bohao{
        width: 60px;
        height: 20px;
        color: #F18B36;
        border: 1px solid #F18B36;
        display: flex;
        line-height: 20px;
        margin-left: 8px;
      }
    }
  }
  .kongbox{
    width: 100%;
    height: 15px;
    background-color: #F2FCFF;
  }
  .dibubox{
    width: 90%;
    margin: 0 auto;
    .erbox{
      width: 80%;
      height: 35px;
      margin: 10px 0;
      display: flex;
      font-size: 1.3em;
      .shangpin{
        width: 80px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border-radius: 5px;
        margin-left: 10px;
        border: 1px solid #333333;
      }
      .shangjia{
        width: 80px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border-radius: 5px;
        color: white;
        margin: 0 30px;
        background-color: #F18B36;
      }
    }
  }
  .tishi{
    width: 100%;
    height: 70px;
    margin: 10px 0;
    background-color: #F7F7F7;
    .textbox{
      width: 95%;
      height: 60px;
      margin: 5px auto;
      font-size: 0.9em;
      color:rgba(43,43,43,0.8);
      line-height: 30px;
      span{
        font-size: 1.1em;
        color: #F18B36;
      }
    }
  }
  .jieshao{
    width: 100%;
    font-size: 1.4em;
    font-weight: bold;
  }
  .xiangxi,.zhifu{
    width: 100%;
    font-size: 0.95em;
    color:rgba(43,43,43,0.8);
    line-height: 20px;
  }
  .xianbox{
    width: 100%;
    margin: 10px 0;
    border-bottom: 1px solid #DCDCDC;
  }
  .tubox{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .imgbox{
    width: 30%;
  }
  .bottombox{
    width: 100%;
    height: 100px;
    margin-top: 10px;
    background-color: #F2FCFF;
    .tousu{
      width: 90%;
      height: 60%;
      border-bottom: 1px solid #DCDCDC;
      margin: 10px auto;
      display: flex;
      justify-content: space-between;
      .rexian{
        font-size: 1.2em;
        font-weight: bold;
        line-height: 75px;
        color:rgba(43,43,43,0.8);
      }
    }

  }
  .tousu>img{
    width: 30px;
    height: 30px;
    margin-top: 25px;
  }
  .imgbox>img{
    width: 100%;
  }
  .libox{
    width: 65px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
    line-height: 25px;
    font-weight: bold;
  }
  .miaoshu{
    width: 160px;
    height: 20px;
    font-size: 1em;
    color: #F18B36;
    margin: auto 15px;
    background-color: #FFECDD;
    text-align: center;
    line-height: 20px;
  }
  .topbox>img{
    width: 85px;
    height: 85px;
    margin-top: 10px;
  }
  .zhekou>img{
    width: 20px;
    height: 20px;
  }
  .daohang>img{
    width: 25px;
  }
  .bohao>img{
    width: 25px;
  }
</style>
