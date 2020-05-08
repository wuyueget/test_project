<template>
    <div class="bottom">
      <div :class="item.active?'dibubox':'dibubox1'" v-for="item in bottomnav" @click="bottomfn(item)">
        <div class="tubiao">
          <div :class="'iconfont '+item.icont"></div>
        </div>

        <div>{{item.name}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {

      }
    },
    props: {
      bottomnav:{},
    },
    methods:{
      bottomfn(item){
        // this.$emit('bottomclick',item)

         if (item.id==1){
          this.$router.push({path:'/shangcheng'})
        }else if (item.id==0){
          this.$router.push({path:'/home'})
        }else if(item.id==2){
           this.$router.push({path:'/pingxuan'})
         }else if(item.id==3){
           this.$router.push({path:'/mycenter'})
         }
      },
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
    .bottom{
      width: 100%;
      height: 50px;
      display: flex;
      position: fixed;
      left: 0;
      bottom: 0px;
      background-color: #fff;
      z-index: 100;
      .dibubox,.dibubox1{
        width: 25%;
        height: 40px;
        font-size: 0.9em;
        text-align: center;
      }
      .dibubox{
        color: #F18B36;
      }
    }

</style>
