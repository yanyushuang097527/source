<template>
  <div class="data">
  <van-nav-bar title="东阳一体化资源系统" left-arrow/>
  <div class="search">
    <input type="text" placeholder="输入资源名称搜索">
    </div>
    <div class="theme-img">
      <span>数据资源</span>
      <span>Data resource</span>
    </div>
    <div class="content">
      <div class="left-content">
        <div class="title">
          <h3>省市回流</h3>
          <router-link to="provinceback">更多</router-link>
        </div>
       <ul>
         <li>
          <a href="#">
          <span>省经信厅(省中...</span>
          <span>3</span>
          <em>></em>
          </a>
        </li>
        <li>
           <a href="#">
          <span>省档案馆</span>
          <span>42</span>
          <em>></em>
          </a>
        </li>
        <li>
           <a href="#">
          <span>省委编办</span>
          <span>18</span>
          <em>></em>
          </a>
        </li>
        <li>
           <a href="#">
          <span>省教育厅</span>
          <span>21</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>省科技厅</span>
          <span>2</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>市自然资源规划...</span>
          <span>32</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>省经信厅(省中...</span>
          <span>12</span>
          <em>></em>
          </a>
        </li>
      </ul>
      </div>
      <div class="right-content">
        <div class="title">
          <h3>本地归集</h3>
          <a href="#">更多</a>
        </div>
       <ul>
         <li>
          <a href="#">
          <span>省经信厅(省中...</span>
          <span>3</span>
          <em>></em>
          </a>
        </li>
        <li>
           <a href="#">
          <span>省档案馆</span>
          <span>42</span>
          <em>></em>
          </a>
        </li>
        <li>
           <router-link to="province-party">
          <span>省委编办</span>
          <span>18</span>
          <em>></em>
          </router-link>
        </li>
        <li>
           <a href="#">
          <span>省教育厅</span>
          <span>21</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>省科技厅</span>
          <span>2</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>市自然资源规划...</span>
          <span>32</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>省经信厅(省中...</span>
          <span>12</span>
          <em>></em>
          </a>
        </li>
      </ul>
      </div>
      <div class="clear"></div>
      <div class="base">
        <div>
          基础库
        </div>
        <div>
          专题库
        </div>
        <div>
          乡镇数据库
        </div>
      </div>
    </div>
    <div class="footer">
      <table>
        <tr>
        <td>
          <router-link to="data"><img src="../../../img/图标一.png" alt=""></router-link>
          </td>
        <td>
          <router-link to="api"><img src="../../../img/编组 6.png" alt=""></router-link>
        </td>
        </tr>
        <tr>
          <td><router-link to="data">数据资源</router-link></td>
          <td><router-link to="api">接口资源</router-link></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyData'
}
</script>

<style lang="less" scoped>
*{
  margin:0px;
  padding:0px;
}
  .search{
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
  .theme-img{
    height:138px;
    background:url('/img/矩形 2.png') no-repeat 0 10px;
    background-size:100% auto;
    position:relative;
    span{
      display:block;
    }
    span:nth-child(1){
      color:#fff;
      font-size:32px;
      position:absolute;
      top:35px;
      left:20px;
    }
    span:nth-child(2){
      color:#fff;
      position:absolute;
      top:85px;
      left:20px;
    }
  }
  .content{
    padding-top:12px;
    height:520px;
    background-color:#f5f5f6;
     ul li a{
        font-size:12px;
        color:#333333;
      }
    div h3{
      display:inline-block;
    }
    .title a{
      font-size:12px;
      color:#3296fa;
      margin-left:55px;
    }
    ul li{
      height:33px;
      width:153px;
      line-height:32px;
    }
    ul li{
      position:relative;
    }
    ul li:nth-of-type(odd){
      background-color:#Eff2f6;
    }
    ul li a em{
      position:absolute;
      right:5px;
    }
    ul li a span:nth-child(2){
      float:right;
      margin-right:15px;
    }
    .left-content{
      width:170px;
      float:left;
      background-color:white;
      margin-left:12px;
      padding:5px 0px 7px 7px;
      ul{
        margin-left:5px;
        margin-right:2px;
      }
    }
    .right-content{
      width:170px;
      float:right;
      background-color:white;
      margin-right:12px;
      padding:5px 0 7px 7px;
       ul{
        margin-left:5px;
        margin-right:2px;
      }
    }
    .clear{
      clear:both;
    }
    .base{
      height:200px;
      // background-color: red;
      margin-left:12px;
      padding-top:15px;
      div{
        float:left;
        width:167px;
        height:100px;
        // background-color: #3296fa;
        margin-right:12px;
        border-radius:8px;
        line-height:100px;
        font-size:18px;
        color:#333333;
        padding-left:10px;
      }
      div:nth-child(1){
        background:url('/img/15@2x.png') no-repeat;
        background-size:62px 80px;
        background-color:white;
        background-position:115px 12px;
      }
      div:nth-child(2){
        background:url('/img/09@2x.png') no-repeat 115px 11px;;
        background-color:white;
        background-size:62px 80px;
      }
      div:nth-child(3){
        background:url('/img/17@2x.png') no-repeat 115px 11px;
        margin-top:15px;
        background-color: white;
        background-size:62px 80px;
      }
    }
  }
  .footer{
    position:fixed;
    width:100%;
    height:80px;
    img{
      width:22px;
      height:22px;
      margin-top:10px;
    }
    table tr td{
      width:192px;
      text-align:center;
    }
      table tr td:first-child{
        a{
        color:#3296fa;
        font-size:10px;
      }
      }
      table tr td:last-child{
        a:first-child{
          font-size:10px;
        }
      }
  }
</style>
