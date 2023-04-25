<template>
  <div class="food-gallery">
    <h1>Recipes</h1>
    <div class="food-search">
      <input type="text" v-model="searchText" placeholder="Search recipes...">
    </div>
    <div class="food-sort">
      <button id="sort-button" @click="sortRecipes">Sort</button>
    </div>
    <ul class="food-list">
      <li v-for="recipe in filteredRecipes" :key="recipe.id" @click="showRecipe(recipe)">
        <div class="food-card">
          <img :src="recipe.image">
          <h2>{{ recipe.title }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'FoodGallery',

  data() {
    return {
      recipes: [],
      searchText: '',
      sortOrder: 'asc',
      results: [],
    }
  },

  created() {
    const apiKey = '9a40450300614f6ab2d0a10f70ce5ea3';
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
      const apiKey = '9a40450300614f6ab2d0a10f70ce5ea3';
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

h1{
  font-family: 'Roboto', sans-serif;
  color : mediumseagreen;
}
.food-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  width:70%;
  margin:auto;
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

.food-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  font-family: 'Roboto', sans-serif;
  color : mediumseagreen;
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
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

