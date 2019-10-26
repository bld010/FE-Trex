export const fetchMyTrips = async (user_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

<<<<<<< HEAD
  let queryParams = `{user(id: ${user_id}) {trips {id, name, startDate, endDate legs{name startDate endDate startLocation endLocation id}}}}`
=======
  let queryParams = `{user(id: ${user_id}) {trips {id, name, startDate, endDate legs{name startDate endDate id tripId startLocation endLocation}}}}`
>>>>>>> master

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
  console.log('tripInfo', tripInfo)

  let queryParams = `mutation {updateTrip(input: {name: "${name}", startDate: "${startDate}", endDate: "${endDate}", id: ${id}}) {trip {name startDate endDate id}}}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error editing your trip')
    }

    let data = await resp.json();
    console.log(data.data.updateTrip.trip)
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

  let queryParams = `mutation {createLeg(input: {name: "${startLocation}" startDate: "${startDate}", endDate: "${endDate}", startLocation: "${startLocation}", endLocation: "${endLocation}" tripId: ${tripId}}) {leg {startDate endDate startLocation endLocation id tripId}}}`

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

  let queryParams = `mutation {updateLeg(input: {id: ${id} name: "${startLocation}" startDate: "${startDate}", endDate: "${endDate}", startLocation: "${startLocation}", endLocation: "${endLocation}", tripId: ${tripId}}) {leg {startDate endDate startLocation endLocation id tripId}}}`
  
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