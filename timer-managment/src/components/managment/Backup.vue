<template>
    <div class='container'>
      <div class='navigator'>
    <div class='left-navigator'>
      <span class='glyphicon glyphicon-star-empty'></span>
    </div>
    <div class='right-navigator'>
        <ul class='per-page'>         
          <li><router-link to='/logout'>锁屏</router-link></li>         
          <li><router-link to='/home/timeset'>管理</router-link></li>

          <li><router-link to= '/home/timecor'>时光轴</router-link></li>
          <li><router-link to='/home/timepic'>时光展</router-link></li>
        </ul>       
      </div>
      </div>
        <router-view></router-view>
    </div>
  
  
</template>
<script type="text/javascript">
  export default {

  }
</script>

<style type="text/css" scoped>
    * {
      padding: 0;
      margin: 0;
    }

    a:hover {
      text-decoration: none;
      cursor: pointer;
      color: #fff;
    }

    
    .container {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  .navigator {
    width: 100%;
    overflow: hidden;
    height: 40px;   
    border-radius: 5px;
    opacity: 0.5;
    background-color: #A4F7D3;
    box-shadow: 5px 5px 10px #19F5A3  ; 
  }

  .left-navigator {
    float: left;
    margin-left: 100px;
  }

  .glyphicon {
    display: inline-block;
    width: 40px;
    height: 30px;
    line-height: 40px;
  }

  .right-navigator {
    width: 50%;
    float: right;
    margin-right: 100px;
  }

  .per-page {
    display: inline-block;
    line-height: 40px;
  }

  .per-page li{
    display: inline-block;
    float: right;
    margin-left: 30px;
    font-size: 20px;
    color: #333;
    text-shadow: #4DEDF6
  }

  .v-link-active {
    color: #F413D2;
  }
</style>