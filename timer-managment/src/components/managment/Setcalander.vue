<template>  
    <div class="block">      
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0" class='picktime'>
      </el-date-picker>
    </div>
  
</template>

<script>
  import formatDate from '../../../static/scripts/formatdate.js'

  export default {
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: ''       
      };
    },
    watch: {
      value1: function(val, oldval) {        
          
          let time = formatDate(val);
          
          let tag = time.split('-').length > 1 ? true : false;            

          if (tag) {   
             console.log(time);          
             this.$emit('chgcal', time);
          }    
                         
      }
    }

  };
</script>

<style type="text/css" scoped>
    
</style>