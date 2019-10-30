export const fetchTrip = async (tripId) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{trip(id: ${tripId}) {id, name, startDate, endDate legs{startDate endDate id startLocation endLocation tripId}}}`
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
  
  try {
    let resp = await fetch(url, options)
    if (!resp.ok) {
      throw new Error('There was an error fetching your trip')
    }

    let data = await resp.json();
    let trip = data.data.trip;
    return trip;

  } catch (error) {
    throw error
  }
}


export const fetchMyTrips = async (user_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{user(id: ${user_id}) {trips {id, name, startDate, endDate legs{startDate endDate id startLocation endLocation tripId}}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options)
    if (!resp.ok) {
      throw new Error('There was an error fetching your trips')
    }

    let data = await resp.json();
    let trips = data.data.user.trips;
    return trips;

  } catch (error) {
    throw error
  }
}

export const postNewTrip = async (tripInfo) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let { name, startDate, endDate, userId } = tripInfo;  

  let queryParams = `mutation {createTrip(input: {name: "${name}", startDate: "${startDate}", endDate: "${endDate}", userId: ${userId}}) {trip {name startDate endDate id}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error creating your trip')
    }

    let data = await resp.json();
    return data.data.createTrip.trip
  
  } catch (error) {
    throw error
  }

}


export const patchTrip = async (tripInfo) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let { name, startDate, endDate, id } = tripInfo;  

  let queryParams = `mutation {updateTrip(input: {name: "${name}", startDate: "${startDate}", endDate: "${endDate}", id: ${id}}) {trip {name startDate endDate id}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error editing your trip')
    }

    let data = await resp.json();
    return data.data.updateTrip.trip
  
  } catch (error) {
    throw error
  }
}



export const deleteTrip = async (tripId) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {removeTrip(input: {id: "${tripId}"}) {trip {name}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error deleting your trip')
    }

    let data = await resp.json();
    return data.data.removeTrip.trip

  } catch (error) {
    throw error
  }

}


export const postNewLeg = async (legInfo) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let { startLocation, endLocation, startDate, endDate, tripId } = legInfo; 

  let queryParams = `mutation {createLeg(input: {startDate: "${startDate}", endDate: "${endDate}", startLocation: "${startLocation}", endLocation: "${endLocation}", tripId: ${tripId}}) {leg{tripId}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error creating your leg')
    }

    let data = await resp.json();
    return data.data.createLeg.leg
  
  } catch (error) {
    throw error
  }
}


export const patchLeg = async (legInfo) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let { startLocation, endLocation, startDate, endDate, tripId, id } = legInfo; 

  let queryParams = `mutation {updateLeg(input: {id: ${id}, startDate: "${startDate}", endDate: "${endDate}", startLocation: "${startLocation}", endLocation: "${endLocation}", tripId: ${tripId}}) {leg{tripId}}}`
  
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error editing your leg')
    }
    let data = await resp.json();
    return data.data.updateLeg.leg
  
  } catch (error) {
    throw error
  }
}

export const deleteLeg = async (legId) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {removeLeg(input: {id: "${legId}"}) {leg {tripId}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error deleting your leg')
    }

    let data = await resp.json();
    return data.data.removeLeg.leg

  } catch (error) {
    throw error
  }

}

export const postNewLodging = async (lodgingInfo) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let { name, arrivalDate, departureDate, city, legId } = lodgingInfo; 

  let queryParams = `mutation {createLodging(input: {name: "${name}", arrivalDate: "${arrivalDate}", departureDate: "${departureDate}", city: "${city}", legId: ${legId}}) {lodging{legId}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error creating your lodging')
    }

    let data = await resp.json();
    return data.data.createLodging.lodging
  
  } catch (error) {
    throw error
  }
}

export const patchLodging = async (lodgingInfo) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let { name, arrivalDate, departureDate, city, legId } = lodgingInfo;  

  let queryParams = `mutation {updateLodging(input: {id: ${id}, name: "${name}", arrivalDate: "${arrivalDate}", departureDate: "${departureDate}", city: "${city}", legId: ${legId}}) {lodging{legId}}}`
  
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error editing your lodging')
    }
    let data = await resp.json();
    return data.data.updateLodging.lodging
  
  } catch (error) {
    throw error
  }
}

export const deleteLodging = async (id) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {removeLodging(input: {id: "${id}"}) {lodging {legId}}}`
 
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    
    if (!resp.ok) {
      throw new Error('There was an error deleting your lodging')
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