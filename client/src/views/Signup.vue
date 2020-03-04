<template>
  <div id="Login">
    <header class="header">
      <h1>Signup</h1>
    </header>
    <main class="main">
      <SignupComponent />
    </main>
  </div>
</template>

<script>
import SignupComponent from "@/components/SignupComponent.vue";

export default {
  name: "Signup",
  components: {
    SignupComponent
  }
};
</script>

<style lang="scss" scoped></style>
