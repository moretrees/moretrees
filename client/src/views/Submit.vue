<template>
  <div id="Submit">
    <div id="map-container">
      <MapComponent v-bind:scrollWheelZoom="true" />
    </div>
    <!-- <header class="header">
      <img src="#" class="image__preview" />
    </header> -->
    <main class="main">
      <p class="description">Hey, I found an empty tree bed!</p>
      <form class="tree-form" @submit.prevent="handleSubmit">
        <div class="tree-form__row">
          <label for="photo" class="tree-form__row-label"
            >Step 1: Upload or Snap a photo</label
          >
          <input
            @change="handleFileSelection"
            type="file"
            name="photo"
            class="tree-form__input-file"
          />
        </div>
        <div class="tree-form__row">
          <label for="address" class="tree-form__row-label"
            >Step 2: Approx. Address</label
          >
          <input
            v-model="address"
            type="text"
            name="address"
            class="tree-form__input-text"
            placeholder="4th ave and 9th st."
          />
        </div>
        <div class="tree-form__row">
          <label for="address" class="tree-form__row-label"
            >Step 3: Submit</label
          >
          <input type="submit" value="submit" class="tree-form__input-submit" />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import MapComponent from "@/components/MapComponent";
export default {
  name: "Submit",
  data() {
    return {
      photo: null,
      address: null
    };
  },
  components: {
    MapComponent
  },
  methods: {
    handleFileSelection(evt) {
      const selectedImage = evt.target.files[0];
      this.photo = selectedImage;
    },
    handleSubmit() {
      const newData = {
        photo: this.photo,
        address: this.address
      };
      this.$store.dispatch("addTree", newData);
    }
  }
};
</script>

<style lang="scss" scoped>
#Submit {
  width: 100%;
  height: calc(100vh - 2rem);
  position: relative;
}

#map-container {
  width: 100%;
  height: 100%;
  // position:absolute;
  // top:0;
  // left:0;
}

.main {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 1rem;
  z-index: 1000;
}
.description {
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.header {
  position: relative;
}

.image__preview {
  display: none;
}

.tree-form {
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;

  &__row {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;

    &-label {
      font-size: 0.8rem;
      margin-bottom: 0.1rem;
    }
  }
  &__row:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &__input-text {
    width: 100%;
    height: 2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    background-color: #eee;
    color: black;
    padding: 0 0.5rem;
  }
  &__input-submit {
    height: 2rem;
    border-radius: 4px;
    background-color: #b7e49f;
    border: none;
    outline: none;
    color: black;
  }
}
</style>
