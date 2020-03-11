<template>
    <span>
        <v-navigation-drawer app v-model="drawer" light disable-resize-watcher right>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>{{item.title}}</v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="transparent" class="app-bar" dark flat>
            <v-img :src="appLogo" max-width="170" />
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-card-text class="hidden-md-and-down menu-items">
                <template v-for="(item, index) in items">
                    <v-btn text :key="index">{{item.title}}</v-btn>
                </template>
            </v-card-text>
        </v-app-bar>
    </span>
</template>

<script>
import logo from '@/assets/logo.png';
export default {
    name: 'AppNavigation',
    data() {
        return {
            appLogo: logo,
            drawer: false,
            items: [
                { title: 'Web Hosting' },
                { title: 'Cloud Hosting' },
                { title: 'VPS Hosting' },
                { title: 'Domain Checker' },
                { title: 'Website Builder' }
            ]
        };
    }
};
</script>

<style lang="scss">
.app-bar {
    padding: 10px 30px;
}
.menu-items {
    max-width: fit-content;
}
</style>