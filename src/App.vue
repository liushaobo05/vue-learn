<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@function pxTorem($px){
	$rem : 37.5px;
  @return ($px / $rem) + rem
}
body{
	margin: 0;
  padding: 0;
  font-size: pxTorem(14px);
  background-image: url('./assets/images/1-1.jpg');
}
</style>
