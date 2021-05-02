import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';


const counterModule = {
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
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
    },
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  }
}

const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      loggedIn: false
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.loggedIn = payload.isAuth;
    }
  },
  getters: {
    loggedIn(state) {
      return state.loggedIn;
    }
  },
  actions: {
    logIn(context) {
      context.commit({
        type: 'setAuth',
        isAuth: true
      });
    },
    logOut(context) {
      context.commit({
        type: 'setAuth',
        isAuth: false
      });
    }

  }
});
const app = createApp(App);
app.use(store);
app.mount('#app');
