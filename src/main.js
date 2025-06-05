import { createApp } from 'vue';
import { createPinia } from 'pinia'

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.component('base-badge', BaseBadge);

app.mount('#app');
