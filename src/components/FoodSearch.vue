<template>
  <div class="food-search">
    <input type="text" :value="searchText" @input="$emit('update:searchText', $event.target.value)" placeholder="Search recipes...">
  </div>
</template>

<script>
export default {
  name: 'FoodSearch',
  props: {
    searchText: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleSearch(event) {
      this.$emit('search-recipes', event.target.value);
    }
  }
}
</script>

<style scoped>
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
</style>