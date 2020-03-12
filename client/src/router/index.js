import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Submit from "../views/Submit.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home - MoreTrees.nyc',
    }
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit,
    meta: {
      title: 'Submit - MoreTrees.nyc',
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: 'Dashboard - MoreTrees.nyc',
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login - MoreTrees.nyc',
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: 'Signup - MoreTrees.nyc',
    }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
