<template>
  <ul class="food-list">
    <li @click="showRecipe">
      <div class="food-card" @click="$emit('show-recipe', recipe)" v-if="!isFiltered">
        <img :src="recipe.image" alt="food-image"/>
        <h2>{{ recipe.title }}</h2>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },

    filteredRecipes: {
      type: Array,
      required: true
    }
  },

  computed: {
    isFiltered() {
      return !this.filteredRecipes.includes(this.recipe);
    }
  },

  methods: {
    showRecipe() {
      this.$emit("show-recipe", this.recipe);
    },
  },
};
</script>

<style scoped>
.food-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.food-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.food-card img {
  width: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.food-card h2 {
  font-family: "Roboto", sans-serif;
  color: mediumseagreen;
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
}


</style>
