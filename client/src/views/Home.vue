<template>
  <div class="home">
    <h1>home</h1>
    <TreeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TreeComponent from "@/components/TreeComponent.vue";

export default {
  name: "Home",
  components: {
    TreeComponent
  }
};
</script>
