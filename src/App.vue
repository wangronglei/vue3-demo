<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/view1">view1</router-link>
    <router-link to="/view2">view2</router-link>
    <router-link to="/view3">view3</router-link>
    <router-link to="/view4">view4</router-link>
    <router-link to="/view5">view5</router-link>
    <router-link to="/view6">view6</router-link>
    <router-link to="/view7">view7</router-link>
    <router-link to="/view8">view8</router-link>
    <router-link to="/view9">view9</router-link>
    <router-link to="/view10">view10</router-link>
    <router-link to="/view11">view11</router-link>
    <router-link to="/view12">view12</router-link>
    <router-link to="/view13">view13</router-link>
    <router-link to="/view14">view14</router-link>
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
</style>
