<style lang="scss" >
.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 15px;
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
      font-size: 0.9rem;
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
    width: 80%;
    padding: 10px;
    .nav-ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        z-index: 2;
        &:hover .router-link-exact-active::after {
          height: 100%;
          transition: 0.5s;
        }
        .router-link-exact-active {
          color: $white;
          font-size: 1rem;
          font-weight: 700;
          position: relative;
          padding: 4px 1px;
          &:hover {
            color: $background-blue;
            transition: all ease 0.5s;
          }
          &::after {
            position: absolute;
            content: "";
            z-index: -1;
            width: 100%;
            height: 20%;
            background-color: $main-orange;
            left: 0;
            bottom: 0;
            transition: all ease 0.3s;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="header-container">
    <div class="name-container">
      <h4 class="name">Vincent Lee / 李崴霖</h4>
    </div>
    <div class="nav-container">
      <ul class="nav-ul">
        <li>
          <router-link to="/">about </router-link>
        </li>
        <li>
          <router-link to="/">blog </router-link>
        </li>
        <li>
          <router-link to="/">projects </router-link>
        </li>
        <li>
          <router-link to="/">contact </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

