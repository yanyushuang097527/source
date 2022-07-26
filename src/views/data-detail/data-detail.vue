<template>
  <div>
    <van-nav-bar title="数源详情" left-arrow/>
    <Info></Info>
    <div class="info">
      <div class="info-table">
      <p>
        <span>资源信息</span>
        <span>数据项(9)</span>
      </p>
      <table>
        <tr>
          <td>数源单位</td>
          <td>省生态环境厅</td>
        </tr>
        <tr>
          <td>所属系统名称</td>
          <td>无</td>
        </tr>
        <tr>
          <td>归集更新频率</td>
          <td>每日</td>
        </tr>
        <tr>
          <td>信息资源资格</td>
          <td>数据库</td>
        </tr>
      </table>
      </div>
    </div>
    <div class="footer">
        <van-button type="default">加入申请车</van-button>
        <van-button type="info">申请资源</van-button>
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

<style lang="less">
.info{
   height:380px;
  background-color: #f5f5f6;
  padding-top:10px;
  .info-table{
    height:235px;
    margin-top:10px;
    background-color: white;
    p{
      padding-top:10px;
    }
  p span{
    display:inline-block;
    width:50%;
    height:30px;
    text-align:center;
    color:#303030;
    font-size:15px;
  }
  p span:first-child{
    border-bottom:2px solid #108ee9;
    color:#108ee9;
  }
table{
  margin:0px;
  padding:0px;
  width:100%;
  tr td{
    width:50%;
    height:45px;
    color:#303030;
    font-size:16px;
    border-bottom:1px solid rgb(207, 205, 205);
  }
  tr td:first-child{
    padding-left:20px;
  }
  tr td:nth-child(2){
    padding-right:20px;
    text-align:right;
  }
}
  }
}
.footer{
  position:fixed;
  width:100%;
  margin-left:20px;
  margin-top:20px;
  button:first-child{
    margin-right:10px;
    background-color: white;
  }
  button{
    height:50px;
    width:42%;
    border-radius:8px;
  }
}
</style>
