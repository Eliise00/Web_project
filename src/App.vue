<template>
  <div class="app-container">
    <HeaderRecipe></HeaderRecipe>
    <router-view></router-view>
    <FooterRecipe></FooterRecipe>
  </div>
</template>

<script>

import HeaderRecipe from "@/components/Header.vue";
import FooterRecipe from "@/components/Footer.vue";

export default {
  components: {
    HeaderRecipe,
    FooterRecipe,
  }
}
</script>

<style>
body {
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
