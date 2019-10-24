export const fetchMyTrips = async (user_id) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `{
    user(id: ${user_id}) {
      trips {
        name
        startDate
        endDate
      }
    }
  }
  `
  let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options)
    let data = await resp.json();
    let trips = data.data.user.trips;
    
    return trips;

  } catch (error) {
    throw new Error (error.message)
  }
}

