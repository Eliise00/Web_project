<template>
  <header>
    <div class="left">
      <h1>
        PastaBook
      </h1>
    </div>
    <div class="menu">
      <a href="#">Home</a>
      <a href="#">Discover</a>
      <a href="#">Tips</a>
    </div>
    <div class="right">
      <button>Sign up</button>
      <button>Login</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderRecipe"
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 10vh;
  padding: 0 20px;
}

.left h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 5vh;
  font-weight: bold;
  color: mediumseagreen;
  text-align: left;
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu a {
  color: mediumseagreen;
  text-decoration: none;
  margin: 0 10px;
}

.right button {
  background-color: mediumseagreen;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
