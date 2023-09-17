import { createRouter, createWebHashHistory, createRouterMatcher } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const options = {
    history: createWebHashHistory(),
    routes,
}

const router = createRouter(options);
console.log('matchers:', createRouterMatcher(options.routes, options).getRoutes())
console.log('router.getRoute', router.getRoutes())

export default router;
