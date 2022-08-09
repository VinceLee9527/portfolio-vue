<template>
  <div class="flex flex-col justify-around w-full items-center mt-5">
    <div class="name-container">
      <h1 class="name">Vincent Lee / 李崴霖</h1>
    </div>
    <div class="w-full">
      <ul class="flex justify-around text-lg">
        <li>
          <router-link to="/"><span>about</span> </router-link>
        </li>
        <li>
          <router-link to="/"><span>blog</span> </router-link>
        </li>
        <li>
          <router-link to="/"><span>projects</span> </router-link>
        </li>
        <li>
          <router-link to="/"><span>contact</span> </router-link>
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