<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="trees-container">
      <div
        class="tree"
        v-for="(tree, index) in trees"
        v-bind:item="tree"
        v-bind:index="index"
        v-bind:key="tree._id"
      >
        <p>{{ tree.latitude }}, {{ tree.longitude }}, {{ tree.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TreeService from "../services/TreeService";
export default {
  name: "TreeService",
  data() {
    return {
      trees: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.trees = await TreeService.getTrees();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
