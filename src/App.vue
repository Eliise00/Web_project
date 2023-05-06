<template>
  <HeaderRecipe></HeaderRecipe>
  <div className="food-search">
    <router-view></router-view>
  </div>
  <FooterRecipe></FooterRecipe>
</template>

<script>

import HeaderRecipe from "@/components/Header.vue";
import FooterRecipe from "@/components/Footer.vue";

export default {
  name: 'FoodSearch',
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
