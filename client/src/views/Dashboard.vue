<template>
  <div id="Dashboard">
    <h1>dashboard</h1>
    <TreeComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import TreeComponent from "@/components/TreeComponent.vue";

export default {
  name: "Dashboard",
  components: {
    TreeComponent
  }
};
</script>