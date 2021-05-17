export default {
  getRequests(state, getters, rootState, rootGetters){
    const id = rootGetters.userID;
    return state.requests.filter(el => el.coachID === id);
  },
  hasRequests(state, getters) {
    return getters.getRequests && getters.getRequests.length > 0;
  }
};