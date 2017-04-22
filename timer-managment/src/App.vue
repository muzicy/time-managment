<template> 
<div id='app'>  
  <router-view></router-view>
</div>
</template>

<script>

import Vue from 'vue'


export default {
  name: 'App',
  data () {
      return {
          tabs: 'hello world'
      }      
   }
  
}



</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: scroll-y;
}

body {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../static/images/bg1.png) repeat left top;
  overflow: scroll-y;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0;

  position: relative;
  width: 100%;
  height: 100%;

}
</style>
