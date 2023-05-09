<template>
  <div class="food-button">
    <div class="food-sort">
      <button id="sort-button" @click="$emit('sort-recipes')">{{ sortOrder === 'asc' ? 'Sort ASC' : 'Sort DESC' }}</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FoodSearchAndSort',
  props: ['sortOrder'],
  methods: {
    sortRecipes() {
      this.$emit('sort-recipes');
    }
  }
}
</script>

<style scoped>


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


#sort-button:hover {
  background-color: mediumseagreen;
  color: antiquewhite;
}

</style>