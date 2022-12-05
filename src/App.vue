<template>
  <nav>
    <router-link to="/">About |</router-link>
    <router-link to="/lager"> Lager</router-link>
  </nav>
  <router-view />
</template>

<script>
/*
import StartUp from "@/components/StartUp.vue";

export default {
  components: {
    StartUp,
  },
};
*/
</script>

<style lang="scss">
@import "./styles/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
