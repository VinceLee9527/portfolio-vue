<template>
  <div class="">
    <Navbar />
  </div>
  <div class="main-container">
    <section class="landing">
      <Intro />
    </section>
    <section class="projects"></section>
    <section class="contact"></section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Intro from "../components/Intro.vue";
export default {
  setup() {},
  components: {
    Navbar,
    Intro,
  },
};
</script>

<style lang="scss">
.main-container {
  scroll-snap-type: y mandatory;
  section {
    height: 100vh;
    scroll-snap-align: start;
  }
}

.landing {
  background-color: $background-blue;
}
</style>
