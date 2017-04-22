<template>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo horizontal-nav" mode="horizontal" >
    <el-menu-item index="1" class='cald'>日历
       <calender> </calender>
    </el-menu-item>
    <div class='nav-right'>
       <el-submenu index="2">
        <template slot="title">我的时间记录</template>
        <el-menu-item index="2-1"><a href='javascript:void(0)' data-value='1' @click='chageComp($event)'>时光展</a></el-menu-item>
        <el-menu-item index="2-2"><a href='javascript:void(0)' data-value='2' @click='chageComp($event)'>时光轴</a></el-menu-item>      
      </el-submenu>
      <el-menu-item index="3" ><a href='javascript:void(0)' data-value='3' 
      @click='chageComp($event)'>设置</a></el-menu-item>
      <el-menu-item index="4"><a href='javascript:void(0)'  @click='logout'>锁屏</a></el-menu-item>

    </div>
    
  </el-menu>
</template>



<script>
import Calender from './Calander'
  export default {
    props: ['showpic1','showcor1','showset1'],

    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1', 
        chagState: ''
      };
    },  
       
    computed: {
      showpic: function() {
         return this.showpic1;
      },
      showcor: function() {
         return this.showcor1;
      },
      showset: function(){
         return this.showset1;
      }

    },
    methods: {
      
      logout() {
        this.$router.replace('/');
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      chageComp(event) {

        let target = event.currentTarget;        
        
        let $i = target.getAttribute('data-value');
       
        switch($i) {
           case '1': 
              if(this.showpic !== true) {
                /*
                  this.showpic = true;
                  this.showcor = false;
                  this.showset = false;  
                */  
                  this.chagState = 'showpic';             

              }
              break;
           case '2': 
              if(this.showcor !== true) {
                /*
                  this.showcor = true;
                  this.showpic = false;
                  this.showset = false;
                */
                  this.chagState = 'showcor';
              }
              break;

           case '3': 
              if(this.showset !== true) {
                /*
                  this.showset = true;
                  this.showpic = false;
                  this.showcor = false;
                */
                  this.chagState = 'showset';
              }
              break;
          }       
        
        console.log(this.chagState);
        this.$emit('chagecomp', this.chagState);
      }
    },
    components: {Calender}
  }
</script>

<style type="text/css" scoped>

.horizontal-nav {
  position: fixed;
  width: 100%;
  z-index: 3000; 
}
.nav-right {
  float: right;
  padding-right: 100px;
}

li a {
   display: block;
}

@media (max-width: 768px) {
   .cald {
       display: none;
   }
}
</style>