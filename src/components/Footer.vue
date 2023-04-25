<template>
  <footer class="footer">
      <div class="left">
        <h3>PastaBook</h3>
      </div>
      <div class="center">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">Tips</a>
      </div>
  </footer>
</template>

<script>
export default {
  name: "FooterRecipe"
}
</script>

<style scoped>
.footer {
  background-color: mediumseagreen;
  color: antiquewhite;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left h3 {
  margin: 0;
}

.center a {
  margin-right: 20px;
  color: antiquewhite;
  text-decoration: none;
}
</style>
