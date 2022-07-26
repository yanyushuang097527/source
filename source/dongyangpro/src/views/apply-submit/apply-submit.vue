<template>
  <div>
    <van-nav-bar  left-arrow/>
    <div class="content">
      <div class="word">
        <span>申请已提交</span>
        <span>审核可在3-7个工作日内完成,</span>
        <span>请关注浙政消息中心</span>
      </div>
      <button class="confirm">确认</button>
      <button class="detail">查看详情</button>
      </div>
     </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
  .content{
    height:800px;
    background-color: #f5f5f6;
    text-align:center;
    line-height:80px;
    position:relative;
    .word{
      height:250px;
      background:url('/img/勾.png') no-repeat 160px 60px;
      background-color:white;
    }
    span:first-child{
      position:absolute;
      top:110px;
      left:150px;
      font-size:18px;
      font-weight:500;
    }
    span:nth-child(2){
      position:absolute;
      top:140px;
      left:120px;
      font-size:12px;
      color:rgb(180, 179, 179);
    }
    span:last-child{
      position:absolute;
      top:160px;
      left:140px;
      font-size:12px;
      color:rgb(180, 179, 179);
    }
    button{
      height:50px;
      display:block;
      margin-top:20px;
      width:370px;
      margin-left:10px;
      border-radius:5px;
      line-height:50px;
    }
    .confirm{
      background-color:rgb(50, 150, 250);
      border:0px;
      color:white;
    }
    .detail{
      border:0.5px solid rgb(221, 213, 213);
      background-color:white;
    }
  }
</style>
