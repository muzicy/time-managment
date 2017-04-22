<template>  
    <div class="block">      
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="查看日期"
        :picker-options="pickerOptions0" class='picktime'>
      </el-date-picker>
    </div>
  
</template>

<script>
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
        value1: '',
        value2: '',
      };
    },
    wacth: {
      value1: function(val, oldval) {
          let time = val.split('-').length > 1 ? true : false;
          if (time) {
             this.$emit('chgcal', val);
          }                   
      }
    }

  };
</script>

<style type="text/css" scoped>
  .block {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
  }
  
  @media (max-width: 768px) {
     .block {
      display: none;
     }
  }
  
</style>