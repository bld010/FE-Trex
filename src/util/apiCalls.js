export const fetchMyTrips = async (user_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{user(id: ${user_id}) {trips {id, name, startDate, endDate legs{name startDate endDate}}}}`

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

export const postNewTrip = async (user_id) => {

  let trip = {
    name,
    startDate,
    endDate,
    userId: user_Id
  }

  let queryParams = `
  mutation {
    createTrip(input: {name: "Austraila!", userId: 1, startDate: "", endDate: "Dec 1st"}) {
      trip {
        name
        startDate
        endDate
      }
    }
  }
}`

  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url,options)
    if (!resp.ok) {
      throw new Error('There was an error creating your trip')
    }

    let data = await resp.json();
    let trip_id
  } catch (error) {
    throw error
  }

}