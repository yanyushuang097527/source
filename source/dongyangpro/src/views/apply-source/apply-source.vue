<template>
  <div class="apply-source">
    <van-nav-bar title="申请数据源" left-arrow/>
    <div class="content">
      <div class="info1">
      <p>使用方式<input type="text" placeholder="请选择"></p>
      <p>共享方式<input type="text" placeholder="请选择"></p>
      </div>
      <div class="info2">
      <p>应用场景<input type="text" placeholder="请输入"></p>
      <p>项目名称<input type="text" placeholder="请输入"></p>
      <p>目标IP<input style="margin-left:25px;" type="text" placeholder="请输入"></p>
      <p>部署层级<input type="text" placeholder="请输入"></p>
      </div>
      <div class="info3">
      <p>申请依据<input type="text" placeholder="请输入"></p>
      </div>
      <div class="info4">
      <p>备注<input style="margin-left:40px;" type="text" placeholder="选填"></p>
      </div>
    </div>
    <input type="submit" placeholder="立即提交" class="submit">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .content{
    background-color: #f5f5f6;
    height:700px;
    padding-top:15px;
    .info1{
      height:120px;
      background-color:white;
    }
    .info2{
      height:240px;
      background-color:white;
      margin-top:10px;
    }
    .info3{
      height:100px;
      background-color:white;
      margin-top:10px;
      p{
        border:0px;
      }
    }
    .info4{
      height:100px;
      background-color:white;
      margin-top:10px;
      p{
        border:0px;
      }
  }
  }
   p{
      margin:0px;
      padding-left:10px;
      // background:url('../img/S3.png') no-repeat 340px 20px;
      background-size:25px 25px;
      height:59px;
      line-height:59px;
      border-bottom:1px solid #dddddd;
      input{
        margin-left:10px;
        height:20px;
        border:0px;
      }
   }
   .submit{
     margin-top:30px;
     margin-bottom:20px;
     width:330px;
     height:40px;
     margin-left:24px;
     border-radius:5px;
     border:0px;
   }
</style>
