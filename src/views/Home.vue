<template>
  <div class="main-container">
    <section class="main-section landing" id="landing">
      <Intro />
    </section>
    <section class="main-section projects" id="projects">
      <Projects />
    </section>
    <section class="main-section contact" id="contact">
      <Contacts />
    </section>
  </div>
</template>

<script>
import Intro from "../components/Intro.vue";
import Projects from "../components/Projects.vue";
import Contacts from "../components/Contacts.vue";

export default {
  setup() {},
  components: {
    Intro,
    Projects,
    Contacts,
  },
};
</script>

 <style lang="scss">
.main-container {
  // scroll-snap-type: y mandatory;
  // overflow-y: scroll;
  height: 100vh;
  // section {
  //   // height: 100vh;
  //   // scroll-snap-align: start;
  // }
  .landing {
    height: 100vh;
    background-color: $background-blue;
  }
}
</style>
