<template>
  <HeaderRecipe></HeaderRecipe>
  <router-view></router-view>
  <FooterRecipe></FooterRecipe>
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

</style>
