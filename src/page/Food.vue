<template>
  <div>
    <div class="food-button">
      <h1>Recipes</h1>
      <div class="food-search">
        <input type="text" v-model="searchText" placeholder="Search recipes...">
      </div>
      <div class="food-sort">
        <button id="sort-button" @click="sortRecipes">Sort</button>
      </div>
    </div>
    <div class="food-gallery">
      <food-card v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" @show-recipe="showRecipe" />
    </div>
  </div>
</template>

<script>
import FoodCard from '@/components/FoodCard.vue';

export default {
  name: 'FoodGallery',
  components: {
    FoodCard
  },
  data() {
    return {
      recipes: [],
      searchText: '',
      sortOrder: 'asc',
      results: [],
    }
  },

  created() {
    const apiKey = '4cf608d45f50467da410ce667d0b16d2';
    const pastaUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta`;
    const pizzaUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza`;

    Promise.all([fetch(pastaUrl), fetch(pizzaUrl)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
          const pastaRecipes = data[0].results;
          const pizzaRecipes = data[1].results;
          const allRecipes = [...pastaRecipes, ...pizzaRecipes];
          this.recipes = allRecipes;
        })
        .catch(error => {
          console.error(error);
        });
  },

  computed: {
    filteredRecipes() {
      let filtered = this.recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(this.searchText.toLowerCase());
      });

      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      } else if (this.sortOrder === 'desc') {
        filtered.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }

      return filtered;
    }
  },

  methods: {
    showRecipe(recipe) {
      const apiKey = '4cf608d45f50467da410ce667d0b16d2';
      const recipeUrl = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`;

      fetch(recipeUrl)
          .then(response => response.json())
          .then(data => {
            // Navigate to the recipe details route and pass the recipe data as a prop
            this.$router.push({ name: 'RecipeDetails', params: { id: recipe.id }, query: { data: JSON.stringify(data) } });
          })
          .catch(error => {
            console.error(error);
          });
    },

    sortRecipes() {
      if (this.sortOrder === 'asc') {
        this.sortOrder = 'desc';
      } else {
        this.sortOrder = 'asc';
      }
    },
  }
}
</script>


<style scoped>

.food-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
  width: 70%;
  margin: auto;
}

.food-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width:70%;
  margin:auto;
}


h1{
  font-family: 'Roboto', sans-serif;
  color : mediumseagreen;
}


.food-search {
  align-self:flex-start;
  margin-left:2rem;
}

.food-search input {
  background-color: antiquewhite;
  border: none;
  border-radius: 20px;
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  outline: none;
}
.food-search input::placeholder {
  color:green;
  font-size:10pt;
}


.food-sort   {
  align-self:flex-end;
}

#sort-button {
  background-color: antiquewhite;
  border: none;
  border-radius: 5px;
  width: 130%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  outline: none;
  color: mediumseagreen;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
}

#sort-button::after {
  content: "";
  position: absolute;
  top: calc(50% - 5px);
  left: 70px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid mediumseagreen;
}

#sort-button:hover {
  background-color: mediumseagreen;
  color: antiquewhite;
}


</style>