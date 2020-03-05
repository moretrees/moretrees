import TreeService from "@/TreeService";
export default {
  state: {
    trees: []
  },
  getters: {
    trees: state => {
      return state.trees;
    }
  },
  mutations: {
    setTrees(state, trees) {
      state.trees = trees;
    },
    addTree(state, tree){
      state.trees = [...state.trees, tree];
    },
    editTree(state, updatedTree){
      state.trees = state.trees.map(item => {
        return item._id === updatedTree._id ? updatedTree : item;
      });
    },
    removeTree(state, id) {
      state.trees = state.trees.filter(item => item._id !== id);
    }
  },
  actions: {
    async getTrees(context) {
      try{
        const result = await TreeService.getTrees();
        const data = result.data;
        context.commit("setTrees", data);
      }catch(err){
        console.error(err);
      }
    }
  }
};
