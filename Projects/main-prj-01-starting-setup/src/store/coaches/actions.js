export default {
  addNewCoach(context, payload) {
    const newCoach = {
      id: context.rootGetters.userID,
      firstName: payload.first,
      lastName: payload.last,
      hourlyRate: payload.rate,
      description: payload.desc,
      areas: payload.areas,
    };
    context.commit('addNewCoach',newCoach);
  }
};