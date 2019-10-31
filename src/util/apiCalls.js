export const fetchTrip = async tripId => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `{trip(id: ${tripId}) {id, name, startDate, endDate legs{startDate endDate id startLocation endLocation tripId}}}`;
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error("There was an error fetching your trip");
    }

    let data = await resp.json();
    let trip = data.data.trip;
    return trip;
  } catch (error) {
    throw error;
  }
};

export const fetchMyTrips = async user_id => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `{user(id: ${user_id}) {trips {id, name, startDate, endDate legs{startDate endDate id startLocation endLocation tripId}}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error("There was an error fetching your trips");
    }

    let data = await resp.json();
    let trips = data.data.user.trips;
    return trips;
  } catch (error) {
    throw error;
  }
};

export const postNewTrip = async tripInfo => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  let { name, startDate, endDate, userId } = tripInfo;

  let queryParams = `mutation {createTrip(input: {name: "${name}", startDate: "${startDate}", endDate: "${endDate}", userId: ${userId}}) {trip {name startDate endDate id}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error("There was an error creating your trip");
    }

    let data = await resp.json();
    return data.data.createTrip.trip;
  } catch (error) {
    throw error;
  }
};

export const patchTrip = async tripInfo => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  let { name, startDate, endDate, id } = tripInfo;

  let queryParams = `mutation {updateTrip(input: {name: "${name}", startDate: "${startDate}", endDate: "${endDate}", id: ${id}}) {trip {name startDate endDate id}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error editing your trip");
    }

    let data = await resp.json();
    return data.data.updateTrip.trip;
  } catch (error) {
    throw error;
  }
};

export const deleteTrip = async tripId => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {removeTrip(input: {id: "${tripId}"}) {trip {name}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error deleting your trip");
    }

    let data = await resp.json();
    return data.data.removeTrip.trip;
  } catch (error) {
    throw error;
  }
};

export const postNewLeg = async legInfo => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  let { startLocation, endLocation, startDate, endDate, tripId } = legInfo;

  let queryParams = `mutation {createLeg(input: {startDate: "${startDate}", endDate: "${endDate}", startLocation: "${startLocation}", endLocation: "${endLocation}", tripId: ${tripId}}) {leg{tripId}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error("There was an error creating your leg");
    }

    let data = await resp.json();
    return data.data.createLeg.leg;
  } catch (error) {
    throw error;
  }
};

export const patchLeg = async legInfo => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let { startLocation, endLocation, startDate, endDate, tripId, id } = legInfo;

  let queryParams = `mutation {updateLeg(input: {id: ${id}, startDate: "${startDate}", endDate: "${endDate}", startLocation: "${startLocation}", endLocation: "${endLocation}", tripId: ${tripId}}) {leg{tripId}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error("There was an error editing your leg");
    }
    let data = await resp.json();
    return data.data.updateLeg.leg;
  } catch (error) {
    throw error;
  }
};

export const deleteLeg = async legId => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {removeLeg(input: {id: "${legId}"}) {leg {tripId}}}`;

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error deleting your leg");
    }

    let data = await resp.json();
    return data.data.removeLeg.leg;
  } catch (error) {
    throw error;
  }
};

export const fetchLodging = async legId => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{leg(id: ${legId}) {lodgings {name arrivalDate departureDate city legId id}}}`
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options)
    if (!resp.ok) {
      throw new Error('There was an error fetching your lodging')
    }

    let data = await resp.json();
    let lodgings = data.data.leg.lodgings;
    return lodgings;

  } catch (error) {
    throw error
  }
}

export const postNewLodging = async lodgingInfo => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let { legId, name, arrivalDate, departureDate, city } = lodgingInfo;

  let queryParams = `mutation {
    createLodging(
      input: {
        name: "${name}",
        arrivalDate: "${arrivalDate}",
        departureDate: "${departureDate}",
        city: "${city}",
        legId: ${legId} 
      })
    {
      lodging {
        legId
      }
    }
  }`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error saving your lodging')
    }

    let data = await resp.json();
    let lodging = data.data.createLodging.lodging
    return lodging

  } catch (error) {
    throw error
    }
}

export const patchLodging = async lodgingInfo => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let { lodgingId, legId, name, arrivalDate, departureDate, city } = lodgingInfo;

  let queryParams = `mutation {
    updateLodging(
      input: {
        id: ${lodgingId},
        name: "${name}",
        arrivalDate: "${arrivalDate}",
        departureDate: "${departureDate}",
        city: "${city}",
        legId: ${legId}
      })
    {
      lodging {
        legId
      }
    }
  }`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error editing your lodging.')
    }
    let data = await resp.json();
    return data.data.updateLodging.lodging

  } catch (error) {
    throw error
  }
}

export const deleteLodging = async lodgingId => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {
    removeLodging(
      input: {
        id: ${lodgingId}
      })
    {
      lodging {
        legId
      }
    }
  }`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error deleting your lodging.')
    }

    let data = await resp.json();
    return data.data.removeLodging.lodging

  } catch (error) {
    throw error
  }
}


export const fetchFollowers = async (wanderer_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{user(id: ${wanderer_id}) {friends { id name role }}}`
 
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error('There was an error fetching your followers')
    }
    let data = await resp.json();
 
    return data.data.user.friends;

  } catch (error) {
    throw error
  }
}


export const fetchWanderersIncomingNotifications = async (wanderer_id) => {
 
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{user(id: ${wanderer_id}) {notificationsReceived { unread message senderId id latitude longitude createdAt}}}`
 
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error fetching your messages')
    }

    let data = await resp.json();
    return data.data.user.notificationsReceived;

  } catch (error) {
    throw error
  }
}


export const markMessageRead = async (message_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {updateNotification(input: {id: ${message_id}, unread: false}) {notification {id message unread}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error marking your message as read')
    }

    let data = await resp.json();

    return data.data.updateNotification.notification;

  } catch (error) {
    throw error
  }

}

export const sendWandererMessage = async (message_object) => {
  
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let { 
    senderId,
    receiverId, 
    message,
    latitude,
    longitude
  } = message_object;


  let queryParams = `mutation {createNotification(input: {senderId: ${senderId}, receiverId: ${receiverId}, message: "${message}", latitude: ${latitude}, longitude: ${longitude}}) {notification {id message latitude longitude senderId receiverId}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error sending your message')
    }

    let data = await resp.json();
    return data.data.createNotification.notification;

  } catch (error) {
    throw error
  }

}

export const fetchTransport = async (legId) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{leg(id: ${legId}) {id, startDate, startLocation, endDate, endLocation tripId transportations {id mode departureTime departureCity arrivalTime arrivalCity}}}`
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
  
  try {
    let resp = await fetch(url, options)
    if (!resp.ok) {
      throw new Error('There was an error fetching your transport details')
    }

    let data = await resp.json();
    let transportations = data.data.leg.transportations;
    return transportations;

  } catch (error) {
    throw error
  }
}


export const postNewTransport = async (transportationInfo) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let { legId, mode, arrivalTime, departureTime, arrivalCity, departureCity } = transportationInfo;  
  
  let queryParams = `mutation {createTransportation(input: {mode: "${mode}",  departureCity: "${departureCity}",  departureTime: "${departureTime}", arrivalCity: "${arrivalCity}", arrivalTime: "${arrivalTime}", legId: ${legId} }) {transportation {legId}}}`
 
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
    
  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error saving your transportation information')
    }
    
    let data = await resp.json();
    let transportation = data.data.createTransportation.transportation
    return transportation
      
  } catch (error) {
    throw error
    }
    
  }



export const patchTransport = async (transportationInfo) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let { transportId, legId, mode, arrivalTime, departureTime, arrivalCity, departureCity } = transportationInfo;  
  
  let queryParams = `mutation {updateTransportation(input: {id: ${transportId}, mode: "${mode}",  departureCity: "${departureCity}",  departureTime: "${departureTime}", arrivalCity: "${arrivalCity}", arrivalTime: "${arrivalTime}", legId: ${legId} }) {transportation {legId}}}`
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error editing your transport.')
    }
    let data = await resp.json();
    return data.data.updateTransportation.transportation
  
  } catch (error) {
    throw error
  }
}

export const deleteTransport = async (transportationId) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {removeTransportation(input: {id: ${transportationId}}) {transportation {legId}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error deleting your transport.')
    }

    let data = await resp.json();
    return data.data.removeTransportation.transportation

  } catch (error) {
    throw error
  }

}

export const fetchFollowersIncomingNotifications = async (follower_id) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{user(id: ${follower_id}) {notificationsReceived { unread message senderId id latitude longitude}}}`
 
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error fetching your messages')
    }

    let data = await resp.json();
 
    return data.data.user.notificationsReceived;

  } catch (error) {
    throw error
  }
}

export const fetchSafety = async (legId) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{
    currentLocationInformation(latitude: 43.69973, longitude: 7.25649) {
      id
      code
      hasAdvisoryWarning
      passportInfo
      visaInfo
      vaccineInfo
      healthInfo
      transitInfo
    }
  }`
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
  
  try {
    let resp = await fetch(url, options)
    if (!resp.ok) {
      throw new Error('There was an error fetching your transport details')
    }

    let data = await resp.json();
    let transportations = data.data.leg.transportations;
    return transportations;

  } catch (error) {
    throw error
  }
}