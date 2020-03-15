<template>
  <span>
    <v-navigation-drawer app v-model="drawer" light disable-resize-watcher right>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              {{
              item.title
              }}
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="transparent" id="app-bar" dark flat>
      <v-img :src="appLogo" max-width="170" />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <template v-for="(item, index) in items">
          <v-btn text id="button" :key="index">
            {{
            item.title
            }}
          </v-btn>
        </template>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  name: "AppNavigation",
  data() {
    return {
      appLogo: logo,
      drawer: false,
      items: [
        { title: "Web Hosting" },
        { title: "Cloud Hosting" },
        { title: "VPS Hosting" },
        { title: "Domain Checker" },
        { title: "Website Builder" }
      ]
    };
  }
};
</script>

<style lang="scss">
#app-bar {
  width: 100%;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1201px) {
  #app-bar {
    max-width: 1300px;
  }
}

@media (max-width: 1200px) {
  #app-bar {
    max-width: 1180px;

    #button {
      transform: scale(0.94);
      padding: 0 9px;
    }
  }
}
</style>
