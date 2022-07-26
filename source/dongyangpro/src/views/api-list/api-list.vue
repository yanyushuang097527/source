<template>
  <div>
    <van-nav-bar title="省委编办" left-arrow/>
  <div class="search">
    <input type="text" placeholder="输入资源名称搜索">
    </div>
    <div>
      <ul>
        <li>全部</li>
        <li>未申请</li>
        <li>已申请</li>
        <li>筛选</li>
      </ul>
    </div>
    <div class="content">
     <Info ref="info1"></Info>
     <div class="kong">
        <div class="footer">
        <van-button plain hairline type="info" color="#666666" icon="../../img/car1.png">加入申请车</van-button>
        <van-button type="info" icon="../../img/sr1.png">申请资源</van-button>
        </div>
     </div>
     <Info></Info>
    </div>
  </div>
</template>

<script>
import Info from '@/components/Info.vue'
export default {
  components: {
    Info
  }
}

</script>

<style lang="less" scoped>
  .search{
    overflow: hidden;
    text-align:center;
    padding:0 20px 0px 20px;
    input{
      width:100%;
      height:32px;
      border-radius:5px;
      background:url('/img/搜索按钮.png') no-repeat 88px 0px;
      background-size: 25px auto;
      background-color:#efeef4;
      border:0px;
      text-align:center;
    }
  }
  ul{
    list-style:none;
    li{
      margin-top:10px;
      height:42px;
      line-height:42px;
      float:left;
      width:25%;
      text-align:center;
    }
  }
  .content{
    .van-button--info{
    border-radius:8px;
    margin-left:20px;
  }
    padding-top:20px;
    // 边线合并的解决办法
    overflow: hidden;
    width:100%;
    height:718px;
    background-color:#f5f5f6;
    position:relative;
    .footer{
      height:60px;
      width:360px;
      margin-left:20px;
      background-color: white;
      padding-left:70px;
     position:absolute;
     float:right;
     margin-right:20px;
     .van-icon__image{
     width:18px;
     height:18px;
}
  }
  .kong{
    height:80px;
  }
   }
</style>
