<template>
  <div class="signup">
    <form @submit.prevent="handleSubmit" class="signup__form">
      <div>
        <label>Username</label>
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" v-model="password" />
        <router-link to="/reset_password">Forgot Password?</router-link>
      </div>
      <div>
        <input type="submit" value="sign up" />
      </div>
    </form>
    <p class="signup__alt">
      Already have an account?
      <router-link to="/login">Log in</router-link>.
    </p>
  </div>
</template>

<script>
import UserService from "../UserService";
export default {
  name: "SignupComponent",
  data() {
    return {
      email: null,
      password: null,
      username: null
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
        username: this.username
      };
      await UserService.signup(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
