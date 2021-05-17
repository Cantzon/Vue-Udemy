export default {
  addNewCoach(state, payload){
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state){
    state.lastFetch = new Date().getTime();
  }
};