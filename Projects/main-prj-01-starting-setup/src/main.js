import { createApp } from 'vue';
import router from './router.js'
import store from './store/index.js'
import App from './App';
import BaseCard from './components/UI/BaseCard';
import BaseBadge from './components/UI/BaseBadge';
import BaseButton from './components/UI/BaseButton';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.mount('#app');


