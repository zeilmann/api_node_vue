<template>
  <nav>
  <div class="box">
    <router-link to="/">Home</router-link> |
    <router-link to="/allmovies">All Movies</router-link> |
    <router-link to="/searchclient">Search Movies</router-link> |
    <router-link to="/searchmoviebyname">Search Movies by Name</router-link> |
    <router-link to="/movieregister">Register Movie Database</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
    max-width: 200px;
    max-height: 150px;
    width: auto;
    height: auto;
}
</style>
