<template>
	<div class='login'>
		<input type='password' placeholder='请输入密码' v-model='password'> 
		<button @click='submit'> 确认登陆 </button>

		<transition name='expand'>
			<p v-show='showmsg'>{{msg}}</p>
		</transition>
		
	</div>
</template>
<script type="text/javascript">
    
    import {mapGetters,mapState,mapActions} from 'vuex'
	export default {
		 data() {
		 	return {
		 		password: '',
		 		msg: '',
		 		showmsg: false
		 	}
		 },
         methods: {
         	 ...mapActions(['getTasks']),
         	 submit: function(event) {
                 let pass = this.password.trim();
                 let len = pass.length;

                 if(len < 6 || len > 11 ) {
                 	this.msg = '密码位数为6-18位';
                 	this.showmsg = true;
                 	let that = this;
                    setTimeout(function(){
                    	that.msg = ''
                    	that.showmsg = false;
                    },5000)     
                    event.preventDefault();
                 } else {
                 	 this.$http.post('http://www.localhost:3000/', {password: this.password}).then(function(response) {

                 	 	if(response.data.tag == true) {
                 	 		console.log(response.data.msg);
                 	 	    this.$router.replace('/home');
                 	 	    this.$http.get('http://localhost:3000/home');
                 	 	    this.getTasks();
                 	 	} else {
                 	 		this.msg = response.data.msg;
	                        this.showmsg = true;
	                        this.password = '';  
	                        let that = this;
	                        setTimeout(function(){
	                        	that.msg = ''
	                        	that.showmsg = false;

	                        },5000) 
                 	 	}                 	 	

                 	 });
                 }
         	 }
         } 
	}
</script>
<style type="text/css" scoped>
	.login {

		position: absolute;
		
		height: 40px;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;		
		margin: auto;

		text-align: center;
	}

	.login input {

		display: inline-block;
		width: 90%; 
		height: 100%;
        float: left;
        border-radius: 10px;
	}

	.login button {
		
		display: inline-block;
		width: 8%;
		padding: 5px 10px;
		color: #3CF8F6;
		background: #fff;
		line-height: 30px;

		font-size: 14px;

		border-radius: 15px;
	}

	.login p {
        color: #fff;
		font-size: 20px;
		margin-top: 10px;
		font-style: italic;
	}

	.expand-enter-active {
      	transition: all 3s ease;      	
      	padding: 10px;      	
      	overflow: hidden;
      }	
	
	.expand-enter, .expand-leave {
  	    height: 0;
  	    padding: 10px;
  	    opacity: 0;
	}
    
    @media (max-width: 768px) {
    	.login input {
    		width: 70%;
    	}

    	.login button {
    		width: 30%;
    	}
    } 
</style>