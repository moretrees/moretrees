<template>
  <div class="login">
    <form @submit.prevent="handleSubmit" class="auth__form">
      <div class="auth__form-row">
        <label class="auth__form-title">Email</label>
        <input class="auth__form-text-input" type="email" name="email" v-model="email" />
      </div>
      <div class="auth__form-row">
        <label class="auth__form-title">
          Password |
          <router-link to="/reset_password">Forgot Password</router-link>
        </label>
        <input class="auth__form-text-input" type="password" name="password" v-model="password" />
      </div>
      <div class="auth__form-row">
        <input class="auth__form-submit-input" type="submit" value="log in" />
      </div>
    </form>
    <p class="auth__alt">
      Don't have an account yet?
      <router-link to="/signup">Signup</router-link>to begin.
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
      try {
        const data = {
          email: this.email,
          password: this.password
        };
        const result = await UserService.login(data);
        return result;
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
.auth__form {
  display: flex;
  flex-direction: column;
  max-width: 400px;

  &-title {
    font-size: 0.8rem;
  }

  &-row {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  &-text-input {
    height: 2rem;
  }

  &-submit-input {
    margin-top: 1rem;
    border: 2px solid #73903a;
    color: #73903a;
    background-color: white;
    height: 2.4rem;
  }
}
.auth__alt {
  margin-top: 2rem;
}
</style>
