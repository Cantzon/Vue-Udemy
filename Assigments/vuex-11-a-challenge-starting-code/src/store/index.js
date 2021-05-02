import { createStore } from 'vuex';
import authStore from './auth/index.js';
import shopStore from './shop/index.js';

const store = createStore({
  modules: {
    auth: authStore,
    shop: shopStore,
  },
});

export default store;