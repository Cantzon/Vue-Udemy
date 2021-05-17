export default {
  async contactCoach(context, payload){
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(`https://vue--udemy-project-default-rtdb.firebaseio.com/requests/${payload.coachID}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if(!response.ok){
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }

    context.commit('addRequest', {
      ...newRequest,
      id: responseData.name,
      coachID: payload.coachID,
    });
  },
  async fetchRequests(context){
    const userID = context.rootGetters.userID;
    const response = await fetch(
      `https://vue--udemy-project-default-rtdb.firebaseio.com/requests/${userID}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests');
      throw error;
    }

    const requests = [];
    for(const key in responseData){
      const request = {
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
        coachID: userID,
        id: key,
      }
      requests.push(request);
    }

    context.commit('setRequests', requests);

  }
};