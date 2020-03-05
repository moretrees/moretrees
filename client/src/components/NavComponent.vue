<template>
  <div id="nav" class="nav">
    <ul class="nav__list nav__list--left">
      <router-link class="nav__link" to="/submit">submit</router-link>
    </ul>
    <ul class="nav__list nav__list--center">
      <router-link class="nav__link" to="/">moretrees.nyc</router-link>
    </ul>
    <ul class="nav__list nav__list--right">
      <router-link class="nav__link" to="/login">login</router-link>
    </ul>
    <!-- <router-link class="nav__link" to="/dashboard">dashboard</router-link> -->
    <!-- <router-link class="nav__link" to="/signup">signup</router-link> -->
  </div>
</template>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 2rem;
  display: flex;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.nav__link:not(:last-child) {
  margin-right: 1rem;
}
.nav__link:visited,
.nav__link:link {
  color: #eee;
  text-decoration: none;
}
</style>
