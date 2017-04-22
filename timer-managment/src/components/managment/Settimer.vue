<template>
  <div class='set-timer'>
    
    <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '05:30',
      step: '00:10',
      end: '23:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '05:30',
      step: '00:10',
      end: '23:30',
      minTime: startTime
    }">
  </el-time-select>

  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    },
    watch: {
      startTime: function (val) { 
         this.$emit('chg-start-time', val);
                 
      },
      endTime: function(val) {         
          this.$emit('chg-end-time', val);                  
      },     
    },

    methods: {
      confirmUseful: function(val) {
         let tag = val.toString().split(':').length>1 ? true:false;
         return tag;
      }
    }

  }
</script>

<style type="text/css" scoped>

</style>