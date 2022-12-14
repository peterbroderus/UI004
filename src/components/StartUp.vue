<template>
  <v-app>
    <v-app-bar :elevation="8">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>title</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>Learning Vuetify</v-list-item-title>
          <v-list-item-subtitle>Navigation drawers</v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title
            ><v-icon icon="mdi-vuetify"></v-icon
            ><router-link to="/">Start</router-link></v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            ><v-icon>mdi-account</v-icon
            ><router-link to="/lager">Lager</router-link></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style lang="scss">
#nav {
  flex-basis: 200px;
  height: 100%;
  background: #024059;
  display: flex;
  flex-direction: column;
  img {
    padding: 25px 15px;
    width: 100%;
  }
  .btn-nav {
    margin-left: 1rem;
    padding: 1rem;
    border-radius: 5px 0 0 5px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: right;
    color: #fff;
    &.router-link-exact-active {
      background-color: #fff;
      color: #024059;
    }
  }
}
#nav2 {
  background: #024059;
}
</style>
