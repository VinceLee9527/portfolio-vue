<style lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  .contacts-container {
    padding: 20px 20px;
    .header {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      .title {
        font-size: 2.2rem;
        position: relative;
        &::after {
          width: 130px;
          height: 4px;
          content: "";
          margin: auto;
          position: absolute;
          background: $main-orange;
          bottom: -2px;
          right: 0px;
        }
      }
    }
    .contacts-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      .contacts-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px 0;
        .contacts-icon {
          background-color: $main-gray;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          width: 100px;
          height: 100px;
          img {
            width: 50px;
            filter: invert(81%) sepia(48%) saturate(4453%) hue-rotate(351deg)
              brightness(100%) contrast(98%);
          }
        }
        .contacts-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
          .title {
            font-size: 1.2rem;
            color: $brown;
            font-weight: 700;
          }
          .info {
            margin: 10px 0;
            font-size: 1.1rem;
            position: relative;
            &::after {
              width: 100%;
              height: 3px;
              content: "";
              position: absolute;
              left: 0;
              bottom: -5px;
              background: $main-orange;
            }
          }
        }
      }
    }
  }
}
.footer {
  margin-top: 200px;
}

@media (min-width: $breakpoint-desktop) {
  .contacts {
    .contacts-container {
      .contacts-text {
        flex-direction: row;
        width: 1000px;
        justify-content: space-between;
      }
    }
  }
}
</style>

<template>
  <div class="contacts">
    <div class="contacts-container">
      <div class="header">
        <h3 class="title">Where To Find Me</h3>
      </div>
      <div class="contacts-text">
        <div class="contacts-card">
          <div class="contacts-icon">
            <img src="../assets/images/mail.svg" alt="" />
          </div>
          <div class="contacts-info">
            <span class="title">Email</span>
            <span class="info">vlee9527@gmail.com</span>
          </div>
        </div>

        <div class="contacts-card">
          <div class="contacts-icon">
            <img src="../assets/images/mobile.svg" alt="" />
          </div>
          <div class="contacts-info">
            <span class="title">Phone</span>
            <span class="info">+886 0971876622</span>
          </div>
        </div>

        <div class="contacts-card">
          <div class="contacts-icon">
            <img src="../assets/images/linkedin.svg" alt="" />
          </div>
          <div class="contacts-info">
            <span class="title">Linkedin</span>
            <span class="info">/vincent-lee-b5029a137</span>
          </div>
        </div>
        <div class="contacts-card">
          <div class="contacts-icon">
            <img src="../assets/images/github.svg" alt="" />
          </div>
          <div class="contacts-info">
            <span class="title">Github</span>
            <span class="info">/VinceLee9527</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  setup() {},
  components: {
    Footer,
  },
};
</script>