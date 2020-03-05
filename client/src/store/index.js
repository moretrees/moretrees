import Vue from "vue";
import Vuex from "vuex";

import GeoStore from "./GeoStore";
import TreeStore from "./TreeStore";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    geo: GeoStore,
    trees: TreeStore
  }
});
