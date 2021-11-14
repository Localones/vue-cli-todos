import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const routerHistory = createWebHashHistory();

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFound,
        }
    ]
})

export default routers;
