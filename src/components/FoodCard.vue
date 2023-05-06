<template>
  <ul class="food-list">
    <li @click="showRecipe">
      <div class="food-card">
        <img :src="recipe.image" alt="food-image" />
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
}

.food-card img {
  width: 100%;
  height: 150px;
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

.food-card p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
