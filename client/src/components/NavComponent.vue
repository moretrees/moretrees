<template>
  <div id="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/submit">submit</router-link>
    <router-link class="nav__link" to="/dashboard">dashboard</router-link>
    <router-link class="nav__link" to="/login">login</router-link>
    <router-link class="nav__link" to="/signup">signup</router-link>
  </div>
</template>
<style lang="scss" scoped>
#nav{
  width:100%;
  display:flex;
  align-items:center;
  justify-content: center;
  background-color: black;
  position: fixed;
  top:0;
  left:0;
  z-index: 9999;
}

.nav__link:not(:last-child){
  margin-right: 1rem;
}
.nav__link:visited,
.nav__link:link{
  color: #eee;
  text-decoration:none;
}

</style>
