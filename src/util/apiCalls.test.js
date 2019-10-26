import {
  fetchMyTrips,
  postNewTrip,
  patchTrip
} from './apiCalls';

describe('apiCalls', () => {

  describe('fetchMyTrips', () => {

    let mockFetch;
    let queryParams;
    let url;
    let options;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;

      queryParams = `{user(id: 1) {trips {id, name, startDate, endDate legs{name startDate endDate startLocation endLocation id}}}}`

  
      url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
      
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    })

    it('should call fetch with correct url and queryParams', async () => {
      
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                user: {
                  trips: []
                }
                }
              }
            )}
          })
        })

        await fetchMyTrips(1)

        expect(mockFetch).toHaveBeenCalledWith(url, options)
    })
      
    it('should return the trips for a specific user (HAPPY)', async () => {
      let mockTrips = [{
        "endDate": "2020-01-02",
        "id": "1",
        "name": "Vanuatu",
        "startDate": "2019-07-11",
      },
      {
        "endDate": "2020-04-09",
        "id": "2",
        "name": "Lithuania",
        "startDate": "2019-09-28",
      }]

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                user: {
                  trips: mockTrips
                }
                }
              }
            )}
          })
        })

      let response = await fetchMyTrips(1)

      expect(response).toEqual(mockTrips)

    })

    it('should throw an error when fetch fails (SAD)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error fetching your trips'))
      })

      await expect(fetchMyTrips(1)).rejects.toEqual(Error('There was an error fetching your trips'))

    })

    it('should throw an error if response is not ok (SAD)', async () => {
      
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
          })
        })

      await expect(fetchMyTrips(1)).rejects.toEqual(Error('There was an error fetching your trips'))

    })
  })

  describe('postNewTrip', () => {

    let mockFetch;
    let url;
    let options;
    let mockTripInfo;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;

      mockTripInfo = {
        name: "Venezuela",
        startDate: "2019-08-02",
        endDate: "2018-08-22", 
        userId: 4
      }

      let queryParams = `mutation {createTrip(input: {name: "Venezuela", startDate: "2019-08-02", endDate: "2018-08-22", userId: 4}) {trip {name startDate endDate id}}}`
      
      url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
      
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    })

    it('should call fetch with proper url and query params', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                  createTrip: {
                    trip: {}
                  }
                }
              }
            )}
          })
        })

        await postNewTrip(mockTripInfo)

        expect(mockFetch).toHaveBeenCalledWith(url, options)

    })

    it('should return a trip object when successful (HAPPY)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                  createTrip: {
                    trip: {...mockTripInfo, id: 12}
                  }
                }
              }
            )}
          })
        })

        let expected = {...mockTripInfo, id: 12}

        await expect(postNewTrip(mockTripInfo)).resolves.toEqual(expected)

    })

    it('should return an error if response status is not ok (SAD)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
          })
        })

      await expect(postNewTrip(mockTripInfo)).rejects.toEqual(Error('There was an error creating your trip'))

    })

    it('should return an error if the fetch fails (SAD)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error creating your trip'))
      })

      await expect(postNewTrip(mockTripInfo)).rejects.toEqual(Error('There was an error creating your trip'))


    })
  })


  describe('patchTrip', () => {

    let mockFetch;
    let url;
    let options;
    let mockTripInfo;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;

      mockTripInfo = {
        name: "Venezuela",
        startDate: "2019-08-02",
        endDate: "2018-08-22", 
        id: 4
      }

      let queryParams = `mutation {updateTrip(input: {name: "Venezuela", startDate: "2019-08-02", endDate: "2018-08-22", id: 4}) {trip {name startDate endDate id}}}`
      
      url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
      
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    })

    it('should call fetch with the correct url and options', async() => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                  updateTrip: {
                    trip: {}
                  }
                }
              }
            )}
          })
        })

        await patchTrip(mockTripInfo)

        expect(mockFetch).toHaveBeenCalledWith(url, options)
    })

    it('should return the updated trip when successful (HAPPY)', async () => {

      let newMockTripInfo = mockTripInfo = {
        name: "Colorado Springs",
        startDate: "2019-08-02",
        endDate: "2018-08-22", 
        id: 4
      }

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                  updateTrip: {
                    trip: newMockTripInfo
                  }
                }
              }
            )}
          })
        })


        await expect(patchTrip(newMockTripInfo)).resolves.toEqual(newMockTripInfo)
    })

    it('should return an error if the response is not ok (SAD)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
          })
        })

        await expect(patchTrip(mockTripInfo)).rejects.toEqual(Error('There was an error editing your trip'))
    })

    it('should return an error if the fetch fails (SAD)', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error editing your trip'))
        })

        await expect(patchTrip(mockTripInfo)).rejects.toEqual(Error('There was an error editing your trip'))
    
    })
  })

})

