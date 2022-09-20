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
        color: $white;
        font-size: 1.3rem;
        line-height: 150%;
        max-width: 420px;
      }
      .typed-text {
        color: $main-orange;
        font-size: 1.3rem;
      }
      .cursor {
        display: inline-block;
        margin-left: 1px;
        width: 2px;
        background-color: $wheat;
        animation: cursorBlink 1s infinite;
      }
      .typing {
        animation: none;
      }
    }
  }
}

@keyframes cursorBlink {
  49% {
    background-color: $wheat;
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: transparent;
  }
}

@media (min-width: $breakpoint-tablet) {
  .intro-container {
    padding-top: 300px;
    .headline-text {
      font-size: 4rem !important;
    }
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
        <p>An aspiring Frontend Engineer</p>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Navbar from "../components/Navbar.vue";

export default {
  setup() {
    let typeValue = ref("");
    let typeStatus = ref(false);
    const typeArray = ref([
      "with a huge passion for coding.",
      "and a driven learner.",
      "that thrives on challenges.",
      "and a problem solver.",
    ]);
    const typingSpeed = ref(50);
    const erasingSpeed = ref(50);
    const newTextDelay = ref(2000);
    let typeArrayIndex = ref(0);
    let charIndex = ref(0);

    const typeText = () => {
      if (charIndex.value < typeArray.value[typeArrayIndex.value].length) {
        if (!typeStatus) typeStatus.value = true;
        typeValue.value += typeArray.value[typeArrayIndex.value].charAt(
          charIndex.value
        );

        charIndex.value += 1;

        setTimeout(typeText, typingSpeed.value);
      } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay.value);
      }
    };
    const eraseText = () => {
      if (charIndex.value > 0) {
        if (!typeStatus) typeStatus.value = true;

        typeValue.value = typeArray.value[typeArrayIndex.value].substring(
          0,
          charIndex.value - 1
        );
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed.value);
      } else {
        typeStatus.value = false;
        typeArrayIndex.value += 1;
        if (typeArrayIndex.value >= typeArray.value.length)
          typeArrayIndex.value = 0;
        setTimeout(typeText, newTextDelay.value);
      }
    };

    setTimeout(typeText, newTextDelay.value + 100);

    return {
      typeValue,
      typeStatus,
      typeArray,
      typingSpeed,
      erasingSpeed,
      newTextDelay,
      typeArrayIndex,
      charIndex,
      typeText,
      eraseText,
    };
  },
  components: {
    Navbar,
  },
};
</script>