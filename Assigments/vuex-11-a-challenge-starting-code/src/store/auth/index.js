

const authStore = {
  state() {
    return {
      isLoggedIn: false,
    }
  },
  getters: {
    getAuth(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.auth;
    },
  },
  actions: {
    logIn(context) {
      context.commit({
        type: 'setAuth',
        auth: true
      });
    },
    logOut(context) {
      context.commit({
        type: 'setAuth',
        auth: false
      });
    },
  }
}

export default authStore;