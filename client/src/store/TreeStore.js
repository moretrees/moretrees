import TreeService from '../services/TreeService';
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
    addTree(state, tree) {
      state.trees = [...state.trees, tree];
    },
    editTree(state, updatedTree) {
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
      try {
        const result = await TreeService.getTrees();
        if (result) {
          context.commit('setTrees', result);
          return result;
        }
        throw new Error('Uh oh! Error getting tree data');
      } catch (err) {
        alert(err);
      }
    },
    async addTree({ commit, rootState }, data) {
      try {
        const newTreeData = {
          ...data,
          ...rootState.geo.treeLocation
        };
        const result = await TreeService.addTree(newTreeData);
        
        if (result) {
          alert('Success! Submission successful 🌱');
          commit('addTree', result);
          return result;
        }
        throw new Error('Uh-oh. Error submitting data.');
      } catch (error) {
        alert(error);
      }
    }
  }
};
