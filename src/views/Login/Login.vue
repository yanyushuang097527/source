<template>
  <div class="login">
    <van-nav-bar title="登录确认" left-arrow/>
    <div class="bag">
      <h1>东阳一体化资源系统</h1>
      <div class="button">
        <van-button type="primary" to="login">取消</van-button>
        <van-button type="default" to="data">立即登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin'
}
</script>

<style lang="less" scoped>
  *{
    margin:0px;
    padding:0px;
  }
  .bag{
    background: url('/img/Theme.png') no-repeat;
    background-color: #3296fa;
    height:800px;
    background-size:390px auto;
    background-position: 0px 200px;
    h1{
      font-size:28px;
      color:#fff;
      padding-top:75px;
      text-align:center;
    }
    .button{
     margin-top:580px;
     text-align:center;
    .van-button--primary{
      background-color:#2584e4;
      margin-right:20px;
    }
    .van-button--default{
      font-weight:bold;
    }
    .van-button{
      border-radius:5px;
      border:0px;
      width:140px;
      height:40px;
    }
    }
  }
</style>
