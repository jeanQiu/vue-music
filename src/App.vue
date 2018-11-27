<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view />
  </div>
</template>
<script>
import VHeader from "_c/v-header";
import VNav from "_c/v-nav";
export default {
  components: {
    VHeader,
    VNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  border: 1px solid red;
}
</style>
