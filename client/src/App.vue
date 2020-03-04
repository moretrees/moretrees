<template>
  <div id="app">
    <NavComponent/>
    <router-view />
  </div>
</template>

<script>
  import NavComponent from '@/components/NavComponent';
  export default {
    name:"App",
    components:{
      NavComponent
    }
  }
</script>
<style lang="scss">
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html{
  font-size:16px;
}

body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  
}


</style>
