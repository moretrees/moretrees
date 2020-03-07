<template>
  <div id="Dashboard">
    <!-- <TreeComponent /> -->
    <MapComponent v-bind:scrollWheelZoom="true"/>
  </div>
</template>
<script>
// @ is an alias to /src
// import TreeComponent from "@/components/TreeComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "Dashboard",
  components: {
    MapComponent
  }
};
</script>

<style lang="scss" scoped>
#Dashboard {
  width: 100%;
  height: calc(100vh - 2rem);
}
</style>
