import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import ContactView from '../components/ContactView.vue';
import PostView from '../components/PostView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView, 
    },
    {
        path: '/post',
        name: 'post',
        component: PostView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;