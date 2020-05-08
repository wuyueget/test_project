<template>
  <div class="container">
    <bottom :bottomnav = 'bottomarr'></bottom>
    <div></div>
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
          {name:'评选',icont:'icon-shezhaodatiyemian-',id:2,active:false},
          {name:'我的',icont:'icon-wode',id:3,active:true}
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
    },
    mounted(){
    },
    created() {
    },
  }
</script>

<style scoped lang="less">
</style>
