export default {
  contactCoach(context, payload){
    const newRequest = {
      id: new Date().toISOString(),
      coachID: payload.coachID,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest);
  }
};