<template>
	<div class='container3'>
		<ul>
			<li v-for='(t,index) in task' class='task-list' @mouseenter='showDTask($event)' @mouseleave='hiddenDTask($event)'>				
				<a href="javascript:void(0)" class='task-botton'>
					<span>{{t.date}}</span>					
					<span>{{t.stime}} - {{t.etime}}</span>
					<span class='delete-task' v-on:click='deleteTask($event)'>删除
				    </span>				    
				    <input type='hidden' style='display:none' :value='index'>
				</a>

				<transition name='showDetail'>
				  <div class='detail-task hidden-detail-task'>
					  {{t.task}}
				  </div>
			    </transition>			    
			</li>
		</ul>

		<p v-show='showDeleteMsg' class='deletemsg'>{{deletemsg}}</p>
		<div class='seperate'>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {				
				showTask: false,
				task: JSON.parse(sessionStorage.getItem('tasks')),
				deletemsg: '删除成功',
				showDeleteMsg: false
			}
		}, 		    
       
        methods: {
        	getColorfulborder: function() {

        		let colors = ['#F54464', '#6C5DF6', '#1AACF5', '#F0F88A', '#76ACF6', '#C0DAFA', '#F68158', '#F6BDE2'];                

        		let aLis = document.getElementsByClassName('container3')[0].getElementsByClassName('.task-list');
                
                let tsk = JSON.parse(sessionStorage.getItem('tasks'));

                console.log(aLis);

        		for(let i = 0, leng = tsk.length; i < leng; i++) {

        			let color = colors.shift();         						      			
                    var circle = aLis[i].firstElementChild; 
                    var message = aLis[i].querySelector('.detail-task'); 

                    circle.style.color = color;
                    circle.style.borderColor = color;
                    message.style.borderColor = color;

                    colors.push(color);
        		}

        	},
        	showDeleteBtn: function() {

        		this.showDelete = true;
        	},
        	hiddenDeleteBtn: function() {

        		this.hiddenDeleteBtn = false;
        	},
        	showDTask: function(event) {
                let target = event.currentTarget;
                let task = target.querySelector('.detail-task');
                let deleteBtn = target.querySelector('.delete-task');
                
        		task.style.display = 'block';
        		deleteBtn.style.display = 'block';
        	},
        	hiddenDTask: function(event) {
                
        		let target = event.currentTarget;
                let task = target.querySelector('.detail-task');
                
                let deleteBtn = target.querySelector('.delete-task');
        		task.style.display = 'none';
        		deleteBtn.style.display = 'none';
        	},

        	deleteTask: function(event) {

        		console.log('delete');
        		
        		let target = event.currentTarget;
                let index = target.parentNode.lastChild.value;
                console.log(index);

        		this.$http.post('http://localhost:3000/home/delete', {uid: this.task[index]._id}).then(function(response) {

                    this.deletemsg = response.data;
        		});

        	},
        }
	}
</script>

<style type="text/css" scoped>

	.container3 {
		position: relative;
		left: 20px;
		top: 90px;		
		width: 80%;			
		border-radius: 20px;
		margin: auto;
		margin-top: 80px;
		margin-bottom: 10px;			
	}
    
    .task-list a:hover{
        text-decoration: none;
    }   

    .container3 ul {
    	position: relative;
    	width: 150px;   
    	left: 50%;
    	text-align: center; 	 	
    	   	
    }

	.task-list {
	    position: relative;		
		display:block;
		list-style: none;
		margin-bottom: 30px;
		width: 150px;
    	height: 150px;
    	text-align: center;   

	}

	.task-list a.task-botton {	
	    	   
		display: block;
		width: 150px;
		height: 150px;		
		border: 1px solid  #337ab7;
		text-align: center;
		border-radius: 75px;
		overflow: hidden;
		z-index: 20;		
	}

	.task-list span {
		display: block;
		margin-top: 30px;
	}

	.delete-task {

		position: absolute;
		color: #337ab7;
		width: 150px;
		display: inline-block;		
		bottom: 0px;
		height: 40px;
		margin-left: 150px;		
		z-index: 20;
		text-align: center;
		display: none;		
		
	}

	.detail-task {
		position: absolute;
		display: inline-block;
		vertical-align: middle;
		width: 250px;
		height: 150px;
		color: #337ab7;
		top: 0;	
		margin-left: 20px;		
		border: 1px solid #337ab7;	
		border-radius: 30px;	
		text-overflow:ellipsis;

	}

	.container3 ul :nth-child(2n+1) {
		left: -150px;
	}

	.container3 ul :nth-child(2n) {
		left: 150px;
	}

	.showDetail-enter-active {
       animation: bounce-in 0.3s;
	}

	@keyframes bounce-in {
		0% {
			transform:rotate(30deg);					
		}

		50% {
			transform:rotate(50deg)
		}

		100% {
			transform:rotate(0deg);
		}
	}

	.showDetail-leave-active {
       animation: bounce-out 0.3s;
	}

	@keyframes bounce-out {
		0% {
			transform:rotate(0deg);			
		}

		50% {
			transform:rotate(30deg)
		}

		100% {
			transform:rotate(0deg);
		}
	}
    
    .show-detail-task {
    	display: block;
    	-webkit-animation: bounce-in 0.2s;
    	-o-animation: bounce-in 0.2s;
    	animation: bounce-in 0.2s;
    }

    .hidden-detail-task {
    	display: none;
    	-webkit-animation: bounce-out 0.2s;
    	-o-animation: bounce-out 0.2s;
    	animation: bounce-out 0.2s;
    }

    .deletemsg {
    	position: absolute;
    	top: 30%;
    	width: 100%;
    	color: #fff;
    	font-style: 26px;
    }


	
</style>