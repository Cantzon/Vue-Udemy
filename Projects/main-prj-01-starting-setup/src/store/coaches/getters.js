export default {
  getCoaches(state) {
    return state.coaches;
  },
  hasCoaches(state){
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state,getters, rootState, rootGetters){
    const coaches = getters.getCoaches;
    const user = rootGetters.userID;
    return coaches.some(el => el.id === user);
  },
  shouldUpdate(state){
    const lastFetch =  state.lastFetch;
    if (!lastFetch){
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch)/1000 > 60;
  }
};