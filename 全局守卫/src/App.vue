<template>
  <div id="app">
     <router-view/> 
     <router-view name="showmoney"/> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
.active{
  background:yellow;
}
#app {
}
</style>
