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
      treeMarkers: null,
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
  computed: {
    trees() {
      return this.$store.state.trees.trees;
    }
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
      this.treeMarkers = L.featureGroup().addTo(this.myMap);
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
      this.myMap.stopLocate();
      this.$store.commit("setTreeLocation", this.treeLocation);
    },
    locateUser() {
      this.myMap.locate({ watch: true, setView: true });
      this.myMap.on("locationfound", this.handleLocateUser);
    },
    showTrees() {
      this.trees.forEach(item => {
        L.circle([item.latitude, item.longitude], {
          radius: 10,
          color: "red"
        })
          .bindPopup(
            `
        <div class="marker-popup" style="max-width:300px">
          <img src="${item.photo}" class="marker-popup__image" style="width:100%; min-width:200px;">
        </div>
        `
          )
          .addTo(this.myMap);
      });
    }
  },
  async mounted() {
    await this.$store.dispatch("getTrees");
    this.createMap();
    this.locateUser();
    this.showTrees();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/leaflet.css";
.map-container {
  width: 100%;
  height: 100%;
  z-index: 0;
}
.leaflet-popup {
  width: 100%;
  max-width: 300px;
}
// .leaflet-popup-content {
//   max-width: 300px;
//   .marker-popup {
//     padding: 0.5rem;
//     &__image {
//       width: 100%;
//     }
//   }
// }
</style>
