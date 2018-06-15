<template>
  <div class="home-container">
    <header class="top_tips">
  		<span class="num_tip">第一周</span>
  	</header>
  	<div>
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style" ></router-link>
  	</div>
  </div>
</template>

<script>

</script>

<style lang='scss'>
@function pxTorem($px){
	$rem : 37.5px;
  @return ($px / $rem) + rem
}

.top_tips {
	position: absolute;
	width: 100px;
	height: 150px;
	right: 40px;
	background-image: url('../../assets/images/WechatIMG2.png');
	background-size: 100px 150px;
	background-repeat: repeat-x;
	.num_tip {
		position: absolute;
		top: 110px;
		right: 25px;
		font-size: 14px;
		color: red;
		font-family: '黑体';
		font-weight: 600;
	}
}

.home_logo {
  position: absolute;
  background-image: url('../../assets/images/1-2.png');
  background-size: 13.12rem 100%;
  width: 300px;
  height: 350px;
  top: 50px;
  left: 30px;
}
.start {
	display: block;
  position: absolute;
  background-image: url('../../assets/images/1-4.png');
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}

</style>
