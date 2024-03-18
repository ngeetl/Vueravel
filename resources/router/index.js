import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Home.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfoundpage',
        component: NotFoundPage,
    },
];

export const router = createRouter({
    history: createWebHistory('/'),
    routes,
})