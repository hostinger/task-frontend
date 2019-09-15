import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from '@/views/home/ViewHome.vue';
import ViewDataTable from '@/views/dataTable/ViewDataTable.vue';

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: ViewHome,
        },
        {
            path: '/data-table',
            name: 'data-table',
            component: ViewDataTable,
        },
    ],
});

export default router;
