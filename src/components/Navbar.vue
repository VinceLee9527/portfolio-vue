<style lang="scss" >
.header-container {
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
  align-items: center;
  background-color: $background-blue;
  color: $white;
  .name-container {
    margin-top: 10px;
    position: relative;
    cursor: pointer;
    &:hover .name::after {
      width: 100%;
      left: 0;
    }
    .name {
      color: $white;
      font-size: 0.9rem;
      font-weight: 700;
      &:hover {
        color: $main-orange;
        transition: 0.7s;
      }
      &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 4px;
        background-color: $main-orange;
        left: 50%;
        bottom: -10px;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .nav-container {
    width: 100%;
    position: relative;
    .navbar-toggle {
      visibility: hidden;
      position: absolute;
      &:checked ~ .nav-ul {
        display: block;
        transform: scale(1, 1);
        transition: transform 0.5s ease;
      }
    }
    .nav-ul {
      position: absolute;
      left: 0;
      width: 100%;
      height: 200px;
      background-color: $background-blue;
      display: flex !important;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      transition: transform 0.5s ease;
      transform-origin: top;
      transform: scale(1, 0);
      li {
        z-index: 2;
        &:hover .nav-link::after {
          height: 100%;
          transition: 0.5s;
        }
        .nav-link {
          color: $white;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          padding: 6px 2px;
          &:hover {
            color: $background-blue;
            transition: all ease 0.5s;
          }
          &::after {
            position: absolute;
            content: "";
            z-index: -1;
            width: 100%;
            height: 15%;
            background-color: $main-orange;
            left: 0;
            bottom: 0;
            transition: all ease 0.3s;
            border-radius: 2px;
          }
        }
      }
    }
    .nav-toggle-label {
      cursor: pointer;
      position: absolute;
      top: -23px;
      right: 10px;
      img {
        width: 25px;
        height: 25px;
        filter: invert(99%) sepia(100%) saturate(1%) hue-rotate(256deg)
          brightness(106%) contrast(100%);
      }
    }
  }
}

@media (min-width: $breakpoint-tablet) {
  .header-container {
    height: 100px;
    padding: 15px;
    .nav-container {
      width: 80%;
      padding: 10px;
      .nav-ul {
        flex-direction: row;
        transform: scale(1, 1);
        height: 10px;
        margin-top: 10px;
      }
      .nav-toggle-label {
        display: none;
      }
    }
  }
}
</style>


<template>
  <div class="header-container">
    <div class="name-container">
      <router-link to="/#landing" class="name"
        >Vincent Lee / ?????????</router-link
      >
    </div>
    <div class="nav-container">
      <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
      <ul class="nav-ul">
        <li>
          <router-link to="/about" class="nav-link">about </router-link>
        </li>
        <li>
          <a href="https://medium.com/@vlee9527" target="blank" class="nav-link"
            >blog</a
          >
        </li>
        <li>
          <router-link to="/#projects" class="nav-link">projects </router-link>
        </li>
        <li>
          <router-link to="/#contact" class="nav-link"> contact </router-link>
        </li>
      </ul>
      <label for="navbar-toggle" class="nav-toggle-label">
        <img src="../assets/images/menu.svg" alt="" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

