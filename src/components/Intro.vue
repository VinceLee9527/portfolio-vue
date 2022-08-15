<style lang="scss">
.intro-container {
  padding: 8px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  border: solid 2px white;
  width: 80%;
  .intro-text {
    width: 100%;
    padding-left: 20px;
    .headline {
      .headline-text {
        font-size: 2.6rem;
        color: $white;
        line-height: 120%;
      }
    }
    .socials {
      margin: 15px 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      width: 130px;
      .social-icons {
        width: 30px;
        filter: invert(81%) sepia(48%) saturate(4453%) hue-rotate(351deg)
          brightness(100%) contrast(98%);
      }
    }
  }
}
</style>

<template>
  <div class="intro-container">
    <div class="intro-text">
      <div class="headline">
        <div class="headline-text">Hi, I'm</div>
        <div class="headline-text">Vincent &nbsp;|</div>
        <div class="headline-text focus">Frontend Engineer</div>
      </div>
      <div class="socials">
        <a class="social-icons" href=""
          ><img src="../assets/images/github.svg" alt=""
        /></a>
        <a class="social-icons" href=""
          ><img src="../assets/images/linkedin.svg" alt=""
        /></a>
        <a class="social-icons" href=""
          ><img src="../assets/images/mail.svg" alt=""
        /></a>
      </div>
      <div class="intro">
        <p>Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>