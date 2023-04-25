<template>
  <div className="recipe-details">
    <h1>{{ recipe.title }}</h1>
    <img :src="recipe.image" alt="">
    <p>{{ recipe.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetails',
  props: ['recipe'],
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      recipe: {}
    }
  },
  created() {
    if (this.$route.query.data) {
      const data = JSON.parse(this.$route.query.data);
      // eslint-disable-next-line vue/no-mutating-props
      this.recipe = data;
    }
  }
}
</script>

<style scoped>
.recipe-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: auto;
}

.recipe-details h1 {
  font-family: 'Roboto', sans-serif;
  color: mediumseagreen;
  margin-top: 2rem;
}

.recipe-details img {
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 2rem 0;
}

.recipe-details p {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
