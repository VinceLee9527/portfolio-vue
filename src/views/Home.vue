<template>
  <div class="main-container">
    <section class="main-section landing">
      <Intro />
    </section>
    <section class="main-section projects" id="projects">
      <Projects />
    </section>
    <section class="main-section contact"></section>
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Projects from "../components/Projects.vue";
export default {
  setup() {},
  components: {
    Intro,
    Projects,
  },
};
</script>

 <style lang="scss">
.main-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  .main-section {
    height: 100vh;
    scroll-snap-align: start;
  }
}

.landing {
  background-color: $background-blue;
}
</style>
