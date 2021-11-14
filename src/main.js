import { createApp } from 'vue';
import routers from "./routes";

import App from './App.vue'

import './assets/scss/main.scss';


createApp(App).use(routers).mount('#app')


