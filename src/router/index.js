import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Start from '../views/Start.vue';

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start,
        meta: { requireNav: false },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { requireNav: true },
    },
    {
        path: '/about',
        name: 'About',
        meta: { requireNav: true },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
