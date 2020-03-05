export default {
  state: {
    myMap: null,
    treeLocation: null
  },
  getters: {

  },
  mutations: {
    setTreeLocation(state, newTreeLocation) {
      state.treeLocation = newTreeLocation;
    }
  },
  actions: {
    setTreeLocation(context, data){
      context.commit('setTreeLocation', data);
    }
  }
};
