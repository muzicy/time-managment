<template>
	<div class='container1'>
	    <div class='set-timer'>
		    <calander class='set-date' v-on:chgcal='chgCald'></calander>
		    <settimer class='set-time'  
		    v-on:chg-end-time='chgET' v-on:chg-start-time='chgST'></settimer>
	    </div>
	    
		<div class='set-task'>			    		   
		    <input  type='text' v-model='task' placeholder='增加任务'></input>
		    <button class='addTask' @click='addTask'>add</button>   
		</div>
		
		<div class='seperate-line'></div>
		<ul class='task-list'>
			<li v-for='item in Datas'>{{item.stime}}-{{item.etime}}
				 
			</li>
		</ul>
		<p v-show='showerr'>{{errormsg}}</p>
	</div>
</template>
<script>

import Caltimerset from './CalTimer'
import Settimer from './Settimer'
import Calander from './Setcalander'

import {mapGetters,mapState,mapActions} from 'vuex'

	export default {
	    data() {
	    	return {
	    		task: '',
	    		getDate: '',
	    		chgSTime: '',
	    		chgETime: '',
	    		Datas: [],	
	    		showerr:false,
	    		errormsg: ''

	    	}
	    },
	    methods: {
	    	...mapActions(['getTasks']),
	    	chgCald: function(val) {
	    		this.getDate = val;	    		
	    	},
	    	chgST: function(val) {
	    		this.chgSTime = val;	    		
	    	},
	    	chgET: function(val) {
	    		this.chgETime = val;	    		
	    	},
	    	addTask() {
	    		let date = this.getDate;
	    		let stime = this.chgSTime;
	    		let etime = this.chgETime;
	    		let task = this.task.trim();

	    		console.log(date);	
	    		console.log(stime);
	    		console.log(etime);
	    		console.log(task);

	    		if(date && stime && etime && task) {
	    			let saveTask = {
	    				date: date,
	    				stime: stime,
	    				etime: etime,
	    				task: task
	    			};
                      
	    			this.$http.post("http://localhost:3000/home/add", {data: saveTask}).then(function(response) {
	    				    console.log(response.data.tag);
	    				    if(response.data.tag == true) {
	    				    	this.Datas.push(saveTask);
	    				    };

	    				    this.getTasks();
	    			})
	    		} else {
                    this.showerr = true;
                    if(!date) {
                    	this.errormsg = '请设置日期';
                    } else if(!stime) {
                        this.errormsg = '请设置起始时间';
                    } else if(!etime) {
                    	this.errormsg = '请设置结束时间';
                    } else {
                    	this.errormsg = '请输入任务';
                    }

                    setTimeout(function() {
                    	this.errormsg = '';
                    	this.showerr = false;
                    }, 2000);
	    		}   		
	    	},
	    	formatSave() {
	    		let date = this.getDate;
	    		let stime = this.chgSTime;
	    		let etime = this.chgETime;
                
                let dateArr = date.split('-');
                let stimeArr = date.split(':');
                let etimeArr = date.split(':');

	    	}	    	
	    },
        components: {Caltimerset, Settimer, Calander}
	}
</script>

<style scoped>
	* {
	    padding: 0;
	    margin: 0;
	}
    .container1 {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 80%;
		height: 90%;
		border: 1px solid #D0C8C8;
		border-radius: 20px;
		margin: auto;
		margin-bottom: 10px;	
		overflow: hidden;	
	}

	.set-task {
		float:left;
		text-align: left;
		padding-left: 30px;
		margin-top: 5px;
	}

	.addTask {

		display: block;		
		font-size: 16px;		
		padding: 5px 10px;
		border-radius: 10px;
		background-color: #17A5FA;
		color: #fff;
		margin-top: 10px;
	}

	.set-timer {	   
	    margin: 10px 20px 5px;	    
	    overflow: hidden;    
	}
    
	.timercald {			
		margin-left: 0;		
		margin-top: 20px;
		padding: 0;
	}
    .set-date {    	  
    	display: inline; 	
    	position: relative;
    	float: left;
    	margin-right: 4px;
    }

    .set-time {
    	float: left;
    	display: inline;
    	margin: 0;
    	padding: 0;
    }
     
	.container input {
		position: relative;	
		display: block;	
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 16px;        
		margin-top: 20px;
		padding: 10px 20px;
		border-radius: 30px;
		border-color: none;
		color: #fff;		
		background: transparent;
		overflow: scroll-y;
		
	}

	.seperate-line {
		position: absolute;
		height: 80%;
		bottom: 85px;
		left: 54%;
	    border: 1px dotted #fff;
	}
    .slide-transition {
    	transition: all 0.3 ease;    	
    }

    .slide-enter-active,{
    	height: 0;  
    	opacity: 0.5;
    }

    .slide-leave-active {
    	height: 80%;
    	opacity: 0.5;
    }
	.slide-enter, .slide-leave {
        height: 0;
        opacity: 0;
	}

	.task-list {
		color: #fff;
		font-size: 20px;
	}

	.task-list li {
		list-style: none;
	}

	
</style>