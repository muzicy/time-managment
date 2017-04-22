<template>
<transition name='expand'>
<div class='col1 col'>	
    <img :src = 'picsrc' height="300" width="400">	
	<div class='testlog'>		
	</div>
</div>
</transition>
</template>

<script type="text/javascript">
	export default {
        data() {
           return {
           	  picsrc: '../../../static/images/时光展/1.png'
           }
        }       

	}
</script>

<style type="text/css" scoped>
.col {
	position: relative;
	float: left;
}
.col img:hover {
	animation: pic-expand 0.2s;
}

@keyframe pic-expand {
	transform: scale(1.5);
	opacity: 1;
}

.col img {
	display: block;
	border-radius: 20px;
	box-shadow: 5px 5px 10px #fff;
}
.testlog {
	opacity: 0;
	position: absolute;
	left: 0;
	top: 0;
	background-color: red;
}

@media (max-width: 768px) {
	img {
		width: 150px;
		height: 130px;
	}
}

</style>