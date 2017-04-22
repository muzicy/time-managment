<template>
  <el-col :span="4" class='vertical'>    
    <el-menu default-active="2" class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" theme="dark">
      <el-menu-item  class='list-nav' index="1">时光展</el-menu-item>
      <el-menu-item  class='list-nav' index="2">时光轴</el-menu-item>
      <el-menu-item  class='list-nav' index="3">设置</el-menu-item>
      <el-menu-item  class='list-nav' index="4">锁屏</el-menu-item>
    </el-menu>
  </el-col>  

</template>
  

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/css" scoped>
  .vertical {
    position: absolute;
    top: 60px;
    height: 100%;
    width: 100px;        
  }

  .list-nav {
     border-bottom: 1px solid rgba(255,255,255, 0.3)
  }
  
  @media (max-width: 768px) {
     .vertical {
        display: none;
     }
  }
 
</style>