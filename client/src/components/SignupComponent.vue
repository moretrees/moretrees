<template>
  <div class="signup">
    <form @submit.prevent="handleSubmit" class="auth__form">
      <div class="auth__form-row">
        <label class="auth__form-title">
          Username
        </label>
        <input
          class="auth__form-text-input"
          type="text"
          name="username"
          v-model="username"
        />
      </div>
      <div class="auth__form-row">
        <label class="auth__form-title">Email</label>
        <input
          class="auth__form-text-input"
          type="email"
          name="email"
          v-model="email"
        />
      </div>
      <div class="auth__form-row">
        <label class="auth__form-title">
          Password
        </label>
        <input
          class="auth__form-text-input"
          type="password"
          name="password"
          v-model="password"
        />
      </div>
      <div class="auth__form-row">
        <input class="auth__form-submit-input" type="submit" value="sign up" />
      </div>
    </form>
    <p class="signup__alt">
      Already have an account?
      <router-link to="/login">Log in</router-link>.
    </p>
  </div>
</template>

<script>
import Router from "../router";
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
      try {
        const data = {
          email: this.email,
          password: this.password,
          username: this.username
        };
        await UserService.signup(data);

        Router.push({
            path: "/login"
        });
      } catch (error) {
        alert(error)
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.signup {
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
.signup__alt {
  margin-top: 2rem;
}
</style>
