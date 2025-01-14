import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import AboutView from '../components/AboutView.vue';
import ContactView from '../components/ContactView.vue';
import ServicesView from '../components/ServicesView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView, 
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView, 
    },
    {
        path: '/services',
        name: 'services',
        component: ServicesView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;