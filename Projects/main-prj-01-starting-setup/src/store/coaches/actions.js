export default {
  async addNewCoach(context, payload) {
    const userID = context.rootGetters.userID;
    const newCoach = {
      firstName: payload.first,
      lastName: payload.last,
      hourlyRate: payload.rate,
      description: payload.desc,
      areas: payload.areas
    };

    const response = await fetch(
      `https://vue--udemy-project-default-rtdb.firebaseio.com/coaches/${userID}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(newCoach)
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      // error handling
    }

    context.commit('addNewCoach', {
      ...newCoach,
      id: userID
    });
  },
  async loadCoaches(context, payload) {

    if(!payload.forceRefresh && !context.getters.shouldUpdate){
      return;
    }

    const response = await fetch(
      `https://vue--udemy-project-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        hourlyRate: responseData[key].hourlyRate,
        description: responseData[key].description,
        areas: responseData[key].areas,
        id: key
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
