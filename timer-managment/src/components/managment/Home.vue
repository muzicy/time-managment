<template>
    <div class='container'>
    	<navigatorH :showpic1='showpic' :showcor1='showcor' :showset1='showset'
      v-on:chagecomp='showComp'> </navigatorH>    	
    	<navigator> </navigator>    	
    	<transition name='expand' class='expand-center'>
    		<keep-alive >
    		   <timerpic v-if='showpic' :task = 'tasks'></timerpic>
    		   <timercor v-if='showcor' :task = 'tasks'></timercor>
    		   <timerset v-if='showset'></timerset>
    	  </keep-alive>
    	</transition>               
    </div>
	
	
</template>


<script type="text/javascript">

import Vue from 'vue'
import Navigator from './Navigator'
import NavigatorH from './Navigator-H'
import Timerpic from './Timerpic'
import Timercor from './Timercor'
import Timerset from './Timerset'

import {mapGetters,mapState,mapActions} from 'vuex'

export default {  
   beforeCreted() {
      this.getTasks();
   },
   data() {
   	  return {
   	  	showpic: true,
   	  	showcor: false,
   	  	showset: false
   	  }
   },
   computed: {
      ...mapState(['tasks'])
   },

   components: {Navigator, NavigatorH, Timerpic, Timercor, Timerset},

   methods: {
        ...mapActions(['getTasks']),
        showComp: function(val) {

          if(val == 'showpic') {
             this.showpic = true;
             this.showcor = false;
             this.showset = false;
             return;
          };

          if(val == 'showset') {
             this.showpic = false;
             this.showcor = false;
             this.showset = true;
             return;
          };

          if(val == 'showcor') {
            this.showpic = false;
            this.showcor = true;
            this.showset = false;
            return;
          }
        }       
   }
 
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
      margin-left: 0;
      padding: 0;
    }

    .expand-center {
       text-align: center;
       height: 90%;
       position: absolute;
       right: 100px;
       bottom: 30px;
    }

	.navigator {
		width: 100%;
		overflow: hidden;
		height: 40px;		
		border-radius: 5px;
		opacity: 0.5;
		background-color: #A4F7D3;
		box-shadow: 5px 5px 10px #19F5A3	;	
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


  .enpand-enter-active {
     animation: bounce-in 3s;
  }

  .enpand-leave-active {
     animation: bounce-out 3s;
  }

  @keyframes bounce-in {
    0% {
      opacity: 0;      
    }
    50% {
      opacity: 1;      
    }
    100% {
      opacity: 0.5;      
    }
  }

  @keyframes bounce-out {
    0% {
      opacity: 0.5;      
    }
    50% {
      opacity: 1;      
    }
    100% {
      opacity: 0;      
    }
  }

	.expand-enter-active {
      	transition: all 3s ease;      	
      	padding: 10px;      	
      	overflow: hidden;
  }	

  .expand-enter, .expand-leave {
     height: 0;
     opacity: 0;
  }
	
	
</style>