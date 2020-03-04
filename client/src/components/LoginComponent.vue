<template>
  <div class="login">
    <form @submit.prevent="handleSubmit" class="login__form">
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
        <router-link to="/reset_password">Forgot Password?</router-link>
      </div>
      <div>
        <input type="submit" value="log in" />
      </div>
    </form>
    <p class="login__alt">
      Don't have an account yet?
      <router-link to="/register">Register</router-link>to begin.
    </p>
  </div>
</template>

<script>
import UserService from "../UserService";
export default {
  name: "LoginComponent",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password
      };
      await UserService.login(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
