<template>
  <div id="Login">
    <header class="header">
      <h1>Login</h1>
    </header>
    <main class="main">
      <LoginComponent />
    </main>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "Login",
  components: {
    LoginComponent
  }
};
</script>

<style lang="scss" scoped>
#Login{
  height:90vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
}
</style>
