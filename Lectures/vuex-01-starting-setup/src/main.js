import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';


const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const currCounter = getters.finalCounter;
      if (currCounter > 100) {
        return 100;
      }
      return currCounter;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  }
});
const app = createApp(App);
app.use(store);
app.mount('#app');
