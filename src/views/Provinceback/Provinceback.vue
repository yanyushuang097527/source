<template>
  <div class="Provinceback">
    <van-nav-bar title="省市回流" left-arrow/>
  <div class="search">
    <input type="text" placeholder="输入资源名称搜索">
    </div>
    <div class="theme-img">
      <span>数据资源</span>
      <span>Data resource</span>
    </div>
    <div  class="content">
    <ul>
         <li>
          <a href="#">
          <span>省经信厅</span>
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
          <span>市自然资源和规划局</span>
          <span>32</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>市交通运输局</span>
          <span>32</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>市人力资源和社会保障局</span>
          <span>32</span>
          <em>></em>
          </a>
        </li>
        <li>
          <a href="#">
          <span>市退役军人事务局</span>
          <span>32</span>
          <em>></em>
          </a>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProvinceback'
}
</script>

<style lang="less">
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
    ul li{
      height:45px;
      border-bottom:1px solid #eeeeee;
      line-height:45px;
      padding-left:20px;
      position:relative;
    }
    ul li a{
      color:#333333;
      font-size:16px;
    }
    ul li a em{
      position:absolute;
      right:10px;
    }
     ul li a span:nth-child(2){
      position:absolute;
      right:25px;
     }
  }
</style>
