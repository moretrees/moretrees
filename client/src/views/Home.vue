<template>
  <div id="Home">
    <header class="header">
      <h1 class="header__title">Let's Plant More Trees</h1>
      <h2 class="header__subtitle">A project by moretrees.nyc</h2>
      <button class="header__cta">Learn More</button>
    </header>
    <main class="main">
      <section class="section section--lawn">
        <h2 class="section__title">Section 1</h2>
      </section>
      <section class="section section--tree">
        <!-- <svg class="planter__icon">
          <use xlink:href="../assets/planter.svg" />
        </svg> -->
        <img class="planter__icon" src="../assets/planter.png">
        <h2 class="section__title">Section 2</h2>
      </section>
      <section class="section section--tree">
        <img class="tree-branch__icon tree-branch__icon--right" src="../assets/tree-branch--right.png">
        <h2 class="section__title">Section 3</h2>
      </section>
      <section class="section section--tree">
        <img class="tree-branch__icon tree-branch__icon--left" src="../assets/tree-branch--left.png">
        <h2 class="section__title">Section 4</h2>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    scrollToBottom() {
      var $header = document.querySelector(".header");
      $header.scrollIntoView();
    }
  },
  mounted() {
    this.scrollToBottom();
  }
};
</script>

<style scoped lang="scss">
#Home {
  width: 100%;
  background: rgb(171, 220, 207);
  background: linear-gradient(
    0deg,
    rgba(171, 220, 207, 1) 19%,
    rgba(145, 203, 194, 1) 96%
  );
  display: flex;
  flex-direction: column-reverse;
}

.header {
  height: 90vh;
  background-color: #412517;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    color: #eee;
    font-size: 2.4rem;
  }

  &__subtitle {
    color: #eee;
    font-size: 1.4rem;
    font-weight: 100;
  }

  &__cta {
    border: 2px solid #5f642c;
    background-color: none;
    color: #5f642c;
    background: none;
    width: 200px;
    height: 3rem;
    text-decoration: none;
    margin-top: 4rem;
  }
}

.main {
  display: flex;
  flex-direction: column-reverse;
}

.section {
  height: 90vh;

  &--lawn {
    background: rgb(115, 144, 58);
    background: linear-gradient(
      180deg,
      rgba(115, 144, 58, 1) 27%,
      rgba(95, 100, 44, 1) 45%,
      rgba(65, 37, 23, 1) 82%
    );
  }

  &--tree {
    position: relative;
  }

  &--tree:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 100%;
    background-color: #8a3f38;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.planter__icon{
  z-index:9000;
  width:400px;
  height: 8rem;
  position: absolute;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
}
.tree-branch__icon{
  width:520px;
  position:absolute;
  z-index: 9000;

  &--left{
    left:50%;
    top:50%;
    transform: translate(-90%,-50%);
  }
   &--right{
    left:50%;
    top:50%;
    transform: translate(-10%,-50%);
  }
}
</style>
