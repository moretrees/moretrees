<template>
  <div id="MyMap" class="map-container"></div>
</template>

<script>
import * as L from "leaflet";

export default {
  name: "MapComponent",
  data() {
    return {
      userMarker: null,
      myMap: null,
      treeLocation: {
        latitude: null,
        longitude: null,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        bounds: null,
        heading: null
      }
    };
  },
  methods: {
    createMap() {
      const map = L.map("MyMap").setView([40.775449, -73.970959], 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      this.myMap = map;
      this.userMaker = L.circle([0, 0], 10).addTo(this.myMap);
    },
    handleLocateUser(evt) {
      this.userMaker.remove();

      this.userMaker
        .setLatLng(evt.latlng)
        .bindPopup("Empty Tree Bed Near Here!")
        .openPopup();

      this.treeLocation = {
        latitude: evt.latlng.lat,
        longitude: evt.latlng.lng,
        altitude: evt.altitude,
        altitudeAccuracy: evt.altitudeAccuracy,
        accuracy: evt.accuracy,
        bounds: { ...evt.bounds },
        heading: evt.heading
      };

      this.userMaker.addTo(this.myMap);
      this.$store.commit("setTreeLocation", this.treeLocation);
    },
    locateUser() {
      this.myMap.locate({ watch: true, setView: true });
      this.myMap.on("locationfound", this.handleLocateUser);
    }
  },
  mounted() {
    this.$store.dispatch("getTrees");
    this.createMap();
    this.locateUser();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/leaflet.css";
.map-container {
  width: 100%;
  height: 500px;
  z-index: 0;
}
</style>
