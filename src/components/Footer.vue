<style lang="scss" >
.footer-container {
  width: 100%;
  padding: 15px;
  background-color: $background-blue;
  color: $white;

  .footer-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    .name-container {
      margin: 20px 30px;
      .name {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 2px;
        a {
          color: $white;
        }
      }
    }
    .nav-container {
      margin: 20px 30px;
      width: 250px;
      .nav-header {
        font-size: 0.9rem;
        font-weight: 500;
        color: $main-gray;
      }
      .nav-ul {
        width: 100%;
        height: 70px;
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        .nav-link {
          color: $main-orange;
          font-size: 1.2rem;
          font-weight: 500;
          transition: all ease 0.4s;
          cursor: pointer;
          &:hover {
            color: $main-gray;
          }
        }
      }
    }
    .contacts-container {
      margin: 20px 30px;
      span {
        font-size: 0.9rem;
        font-weight: 500;
        color: $main-gray;
      }
      .contact-icons {
        display: flex;
        justify-content: space-between;
        width: 150px;
        margin-top: 10px;
        img {
          width: 35px;
          transition: filter 0.3s linear 0s;
          filter: invert(100%) sepia(1%) saturate(75%) hue-rotate(256deg)
            brightness(117%) contrast(100%);

          &:hover {
            filter: invert(81%) sepia(48%) saturate(4453%) hue-rotate(351deg)
              brightness(100%) contrast(98%);
          }
        }
      }
    }
  }
}
</style>


<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="name-container">
        <div class="name">
          <a href="#landing">Vincent Lee</a>
        </div>
        <div class="name"><a href="#landing">李崴霖</a></div>
      </div>
      <div class="nav-container">
        <div class="nav-header">Links</div>
        <ul class="nav-ul">
          <li>
            <router-link to="/" class="nav-link">about </router-link>
          </li>
          <li>
            <router-link to="/" class="nav-link">blog </router-link>
          </li>
          <li>
            <a href="#projects" class="nav-link">projects </a>
          </li>
          <li>
            <a href="#contact" class="nav-link"> contact </a>
          </li>
        </ul>
      </div>
      <div class="contacts-container">
        <span>Contact me</span>
        <div class="contact-icons">
          <a href="">
            <img src="../assets/images/github.svg" alt="" />
          </a>
          <a href="">
            <img src="../assets/images/linkedin.svg" alt="" />
          </a>
          <a href="">
            <img src="../assets/images/mail.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

