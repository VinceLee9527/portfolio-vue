<style lang="scss">
.intro-container {
  padding: 8px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 50vh;
  width: 80%;
  padding-top: 300px;
  .intro-text {
    width: 100%;
    padding-left: 20px;
    .headline {
      .headline-main {
        display: flex;
        flex-wrap: wrap;
      }
      .headline-text {
        font-size: 2.6rem;
        color: $white;
      }
    }
    .socials {
      margin: 20px 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      width: 130px;
      .social-icons {
        width: 30px;
        transition: filter 0.1s linear 0s;
        filter: invert(81%) sepia(48%) saturate(4453%) hue-rotate(351deg)
          brightness(100%) contrast(98%);

        &:hover {
          filter: invert(100%) sepia(1%) saturate(75%) hue-rotate(256deg)
            brightness(117%) contrast(100%);
        }
      }
    }
    .intro {
      padding-top: 5px;
      p {
        color: $wheat;
        font-size: 1.3rem;
        line-height: 150%;
        max-width: 420px;
      }
    }
  }
}

@media (min-width: $breakpoint-tablet) {
  .headline-text {
    font-size: 4rem !important;
  }
}
</style>

<template>
  <div>
    <Navbar />
  </div>
  <div class="intro-container">
    <div class="intro-text">
      <div class="headline">
        <div class="headline-main">
          <div class="headline-text">Hi, I'm&nbsp;</div>
          <div class="headline-text">Vincent &nbsp;|</div>
        </div>
        <div class="headline-text focus">Frontend Engineer</div>
      </div>
      <div class="socials">
        <a
          class="social-icons"
          href="https://github.com/VinceLee9527"
          target="_blank"
          ><img src="../assets/images/github.svg" alt=""
        /></a>
        <a
          class="social-icons"
          href="https://www.linkedin.com/in/vincent-lee-b5029a137/"
          target="_blank"
          ><img src="../assets/images/linkedin.svg" alt=""
        /></a>
        <a class="social-icons" href="mailto:vlee9527@gmail.com"
          ><img src="../assets/images/mail.svg" alt=""
        /></a>
      </div>
      <div class="intro">
        <p>
          An aspiring Frontend Engineer and a lifelong learner with a huge
          passion.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  setup() {},
  components: {
    Navbar,
  },
};
</script>