<template>
	<div class='container2'>
		<div class='echarts3'></div>
		<div id='echarts1' class='charts1' style='background-color: #BFE3F4 color:#fff'></div>

		<div id='echarts-bar'></div>
	</div>
</template>

<script type="text/javascript">

    import Eachpic from './Eachdaypic'

    import echarts from 'echarts'


	export default {
		 data() {
		 	return {
		 		hashYear: {}
		 	}
		 },
		 mounted() {
		 	this.settingEchars();
		 },
		 props: ['task'],

         methods: {
         	 showTask: function() {

         	 },
         	 getDateDuring: function(val, duration) {
                let time = val.split('-');
                let year = time[0],
                    month = time[1],
                    date = time[2];

                let st = duration.st.split(':'),
                    et = duration.et.split(':');

                let during = +(et[0])*60 + (+et[1]) - (+st[0]*60) - (+st[0]);
                return {
                	year: year,
                	month: month,
                	date: date,
                	during: during
                }

         	 },

         	 getYears: function(task) {
                 let i, len, date, st, et,
                     result, year, month, d,
                     during;

                 for(i = 0, len = task.length; i < len; i++) {
                     
                     date = task.date;                     
                     st = task.stime;
                     et = task.etime;
                     
                     result = getDateDuring(date, {st: st, et: et});
                     year = result.year;
                     month = result.month; 
                     d = result.date;
                     during = result.duration;


                     if(!this.hashYear[year]) {
                        
                        this.hashYear[year] = {};

                     	this.hashYear[year].value = year;

                     	this.hashYear[year].duration = result.duration;

                     	if(!this.hashYear[year][month]) {
                     		this.hashYear[year][month] = {};
                     		this.hashYear[year][month].value = month;
                     		this.hashYear[year][month].duration = result.duration;
                     	} else {
                     		this.hashYear[year][month].duration += result.duration;
                     	}

                     	if(!this.hashYear[year][month][d]) {
                     		this.hashYear[year][month][d] = {};
                     		this.hashYear[year][month][d].value = d;
                     		this.hashYear[year][month][d].duration = result.duration;
                     	} else {
                     		this.hashYear[year][month][d].duration += result.duration;
                     	}

                     } else {
                        this.hashYear[year].duration += result.duration; 
                     } 
                    
                 }
         	 },

         	 drawEcharts() {
         	 	let tsk = JSON.parse(sessionStorage.getItem('tasks'));
         	 	this.getYears(tsk);

         	 	let oContainer = document.querySelector('.container2');
         	 	let fragment = document.createDocumentFragment;   

         	 	var option1 = {		
			 	    label: {
					    normal: {
					        textStyle: {
					            color: 'rgba(255, 255, 255, 1)'
					        }
					    }
					},	 		
			 		textStyle: {
				        color: 'rgba(255, 255, 255, 1)'
				    },
			 		opacity: 0.3,
			 		
		            title: {
		                text: eachY[0],
		                textStyle: {
					        color: 'rgba(255, 255, 255, 1)'
					    }, 
		            },
		            tooltip: {},
		            legend: {
		                data:['time'],
		                textStyle: {
					        color: 'rgba(255, 255, 255, 1)'
					    },
		            },
		            xAxis: {
		                data: dt
		            },
		            yAxis: {},
		            series: [{
		                name: 'time',
		                type: 'bar',
		                data: times,		                
		            }]
		        };
		       

		        var option2 = {
		        	 series : [
				        {
				            name: '时间安排',
				            type: 'pie',
				            radius: '55%',
				            data: barData
				        }
				    ]
		        } 	 	

         	 	for(var key in this.hashYear) {
                    var oDiv = document.createElement('div');
                    oDiv.style.className = 'charts1';
                    var myChart = echarts.init(oDiv); 
                    option1.title.text = this.hashYear[key].value;
                    potion1.series.data.push(this.hashYear[key].value);                   
         	 	}
         	 },
             
             getDuration: function(st1, et1) {
             	let st = st1.split(':');
                let et = et1.split(':');
                
                st[0] = +st[0];
                st[1] = +st[1];
                et[0] = +et[0];
                et[1] = +et[1];

                let duration = et[0]*60 + et[1] - st[0] * 60 - st[1];
               
                return parseInt(duration/30);
             },


         	 settingEchars: function() {
         	 	let tsk = JSON.parse(sessionStorage.getItem('tasks'));         	 	
         	 	let myChart = echarts.init(document.querySelector('.charts1'));
         	 	let myChart2 = echarts.init(document.querySelector('#echarts-bar'));
         	 	let myChart3 = echarts.init(document.querySelector('.echarts3'));

			 	let dt = [];
			 	let dtimes = [];
			 	let mtimes = [];
			 	let eachY = [];
			 	let hash = {};
			 	let hash1 = {};
			 	let barData = [];
			 	let angleData = [];
			 	let monthHash = {};

			 	for(var i =0, leng = tsk.length; i < leng; i++) {
			 		var temp = tsk[i];			 	    
			 	    var dateArr = temp.date.split('-').slice(1);
			 	    var year = +temp.date.split('-')[0];
			 	    var month = +temp.date.split('-')[1];
			 	    var duration = this.getDuration(temp.stime, temp.etime);

			 	    if(!hash1[year]) {
			 	    	hash1[year] = {};
			 	    	hash1[year].value = year;
			 	    	eachY.push(year);
			 	    } else {
			 	    	if(!hash1[year][month]) {
			 	    		hash1[year][month] = {};
			 	    		hash1[year][month].value = month;
			 	    		hash1[year][month].duration = duration;
			 	    	} else {
			 	    		hash1[year][month].duration += duration;
			 	    	}
			 	    	hash1[year][month].duration;
			 	    }
			 	   	 		
			 		var eachDate = dateArr.join('-');
	                
	                if(!hash[eachDate]) {
                        hash[eachDate] = {};
                        hash[eachDate].value = eachDate;
                        dt.push(eachDate);
                        hash[eachDate].time = duration;
                    } else {
                    	hash[eachDate].time += duration;
                    }                       
                    //dtimes.push(hash[eachDate].time);
	                
			 	};

                var len = 0;

                for(var key in hash) {
                	dtimes.push(hash[key].time);
                }

                for(key in hash1) {

                	for(var m in hash1[key]) {
                		var mObj = {};
                		mObj.name = hash1[key][m].value;                	
                		mObj.value = hash1[key][m].duration;
                		console.log(mObj.value);
                        angleData.push(mObj);
                        
                		mtimes.push(hash1[key][m].duration);
                	}
                }



                for(i =0, len = dtimes.length; i < len; i++) {

	                var objData = {};

	                objData.value = dtimes[i];
	                
		        	objData.name = dt[i];
		        	barData.push(objData); 
                } 
			 	var option1 = {		
			 	    label: {
					    normal: {
					        textStyle: {
					            color: 'rgba(255, 255, 255, 1)'
					        }
					    }
					},	 		
			 		textStyle: {
				        color: 'rgba(255, 255, 255, 1)'
				    },
			 		opacity: 0.3,
			 		
		            title: {
		                text: eachY[0]+'时间管理计划',
		                textStyle: {
					        color: 'rgba(255, 255, 255, 1)'
					    }, 
		            },
		            tooltip: {},
		            legend: {
		                data:['time'],
		                textStyle: {
					        color: 'rgba(255, 255, 255, 1)'
					    },
		            },
		            xAxis: {
		                data: dt
		            },
		            yAxis: {},
		            series: [{
		                name: 'time',
		                type: 'bar',
		                data: dtimes,		                
		            }],

		        };
		       

		        var option2 = {
		        	 series : [
				        {
				            name: '时间安排',
				            type: 'pie',
				            radius: '55%',
				            data: barData
				        }
				    ]
		        };

		        var option3 = {
				    series : [
				        {
				            name: '月份',
				            type: 'pie',
				            radius: '55%',
				            roseType: 'angle',
				            data:angleData
				        }
				    ]
				};
		         myChart.setOption(option1);
		         myChart2.setOption(option2);
		         myChart3.setOption(option3);
	         }


         },
         components: {Eachpic}
	}

	
</script>
<style type="text/css" scoped>
    * {
    	padding: 0;
    	margin: 0;
    }

    a:hover {
    	text-decoration: none;
    }

    a:active {
    	color: ;
    }
 
	.container2 {
		position: relative;
		left: 20px;
		top: 90px;		
		width: 85%;					
		margin: auto;
		margin-top: 110px;
		margin-bottom: 10px;
		overflow: hidden;		
	}
	.container .direction {
        position: absolute;
        right: 50px;
        bottom: 20px;       
	}

	.direction i {
		font-size: 30px;
		color: #fff;
		padding-left: 40px;
	}
    
	.row {	
        
	    width: 90%;		
		height: 320px;		
		margin: 10px auto;
		margin-top: 40px;
		overflow: hidden;			
	}	

    @media (max-height: 768px) {
    	.container2 {
    		height: 85%;
    	}
     }

     #echarts1 {
     	display: inline-block;
     	float: left;
     	margin-left: 20px;
     	width: 500px;
     	height: 500px;  
     	opacity: 0.9;
     	border-radius: 5px;
     }

     .echarts3 {
     	display: inline-block;
     	float: left;     	
     	width: 500px;
     	height: 500px;  
     	opacity: 0.9;
     	border-radius: 5px;
     }

     #echarts-bar {
     	display: inline-block;
     	width: 400px;
        height: 400px;
        margin-left: 20px;
        float: left;
     }     


</style>