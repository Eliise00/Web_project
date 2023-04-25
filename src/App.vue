<template>
  <HeaderRecipe></HeaderRecipe>
  <div class="food-search">
    <!--<FoodGallery></FoodGallery>-->
    <router-view></router-view>
  </div>
  <FooterRecipe></FooterRecipe>
</template>

<script>

//import FoodGallery from "@/components/Food.vue";
import HeaderRecipe from "@/components/Header.vue";
import FooterRecipe from "@/components/Footer.vue";
//import RecipeDetails from "@/components/Recipe.vue";

export default {
  name: 'FoodSearch',
  components: {
    //FoodGallery,
    HeaderRecipe,
    FooterRecipe,
    //RecipeDetails,
  }
}
</script>

<style>
  body {
    margin : 0;
  }

</style>

