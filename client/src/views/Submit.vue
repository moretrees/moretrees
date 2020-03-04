<template>
  <div id="Submit">
    <header class="header">
      <img src="#" class="image__preview" />
    </header>
    <main class="main">
      <p class="description">Hey, I found an empty tree bed!</p>
      <form class="tree-form">
        <div class="tree-form__row">
          <label for="photo" class="tree-form__row-label">Step 1: Upload or Snap a photo</label>
          <input type="file" name="photo" class="tree-form__input-file" />
        </div>
        <div class="tree-form__row">
          <label for="address" class="tree-form__row-label">Step 2: Approx. Address</label>
          <input type="text" name="address" class="tree-form__input-text"  placeholder="4th ave and 9th st."/>
        </div>
        <div class="tree-form__row">
          <label for="address" class="tree-form__row-label">Step 3: Submit</label>
          <input type="submit" value="submit" class="tree-form__input-submit" />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Submit",
  components: {}
};
</script>

<style lang="scss" scoped>
#Submit {
  width: 100%;
  height: calc(100vh - 2rem);
  background-image: url(../assets/nyc-map-800x800.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.main {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 1rem;
}
.description{
  margin-bottom:0.5rem;
  padding:0 0.5rem;
  font-size:1rem;
  max-width:600px;
  margin:0 auto;
}

.image__preview {
  display: none;
}

.tree-form {
  width: 100%;
  max-width:600px;
  margin:0 auto;
  
  &__row{
    width:100%;
    border: 1px solid #eee;
    border-radius:4px;
    padding: 0.5rem;
    display:flex;
    flex-direction: column;

    &-label{
      font-size:0.8rem;
      margin-bottom:0.1rem;
    }
  }
  &__row:not(:last-child){
    margin-bottom:0.5rem;
  }

  &__input-text{
    width:100%;
    height:2rem;
    border-radius:4px;
    outline:none;
    border:none;
    background-color:#eee;
    color:black;
    padding:0 0.5rem;
  }
  &__input-submit{
    height:2rem;
    border-radius:4px;
    background-color:#B7E49F;
    border:none;
    outline:none;
    color:black;
  }
}
</style>
