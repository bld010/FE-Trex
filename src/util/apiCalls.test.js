import {
  fetchMyTrips,
  postNewTrip,
  patchTrip,
  postNewLeg,
  patchLeg,
  deleteTrip
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

      queryParams = `{user(id: 1) {trips {id, name, startDate, endDate legs{name startDate endDate id startLocation endLocation tripId}}}}`

  
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

  describe('postNewLeg', () => {
  
    let mockFetch;
    let url;
    let options;
    let mockLegInfo;
  
    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;
  
      mockLegInfo = {
        name: "Peru",
        startDate: "2019-10-02",
        endDate: "2020-08-20", 
        startLocation: "Peru",
        endLocation: "Quito",
        tripId: 4,
      }
  
      let queryParams = `mutation {createLeg(input: {name: "Peru", startDate: "2019-10-02", endDate: "2020-08-20", startLocation: "Peru", endLocation: "Quito", tripId: 4}) {leg{startDate endDate startLocation endLocation id tripId}}}`
      
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
                  createLeg: {
                    leg:{}
                  }
                }
              }
            )}
          })
        })
  
        await postNewLeg(mockLegInfo)
  
        expect(mockFetch).toHaveBeenCalledWith(url, options)
    })
  
    it('should return a leg object when successful (HAPPY)', async () => {
  
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                  createLeg: {
                    leg: {...mockLegInfo, id: 4}
                  }
                }
              }
            )}
          })
        })
  
        let expected = {...mockLegInfo, id: 4}
  
        await expect(postNewLeg(mockLegInfo)).resolves.toEqual(expected)
  
    })
  
    it('should return an error if response status is not ok (SAD)', async () => {
  
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
          })
        })
  
      await expect(postNewLeg(mockLegInfo)).rejects.toEqual(Error('There was an error creating your leg'))
  
    })
  
    it('should return an error if the fetch fails (SAD)', async () => {
  
      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error creating your leg'))
      })
  
      await expect(postNewLeg(mockLegInfo)).rejects.toEqual(Error('There was an error creating your leg'))
  
    })
  })
  
  
  describe('patchLeg', () => {
  
    let mockFetch;
    let url;
    let options;
    let mockLegInfo;
  
    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;
  
      mockLegInfo = {
        id: 1,
        name: "Peru",
        startDate: "2019-10-02",
        endDate: "2020-08-20", 
        startLocation: "Peru",
        endLocation: "Quito",
        tripId: 4,
      }
  
      let queryParams = `mutation {updateLeg(input: {id: 1, name: "Peru", startDate: "2019-10-02", endDate: "2020-08-20", startLocation: "Peru", endLocation: "Quito", tripId: 4}) {leg{startDate endDate startLocation endLocation id tripId}}}`
      
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
                  updateLeg: {
                    leg: {}
                  }
                }
              }
            )}
          })
        })
  
        await patchLeg(mockLegInfo)
  
        expect(mockFetch).toHaveBeenCalledWith(url, options)
    })
  
    it('should return the updated leg when successful (HAPPY)', async () => {
  
      let newMockLegInfo = mockLegInfo = {
        name: "Dallas",
        startDate: "2019-10-02",
        endDate: "2020-08-20", 
        startLocation: "Dallas",
        endLocation: "Quito",
        tripId: 4,
      }
  
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                  updateLeg: {
                    leg: newMockLegInfo
                  }
                }
              }
            )}
          })
        })
  
  
        await expect(patchLeg(newMockLegInfo)).resolves.toEqual(newMockLegInfo)
    })
  
    it('should return an error if the response is not ok (SAD)', async () => {
  
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
          })
        })
  
        await expect(patchLeg(mockLegInfo)).rejects.toEqual(Error('There was an error editing your leg'))
    })
  
    it('should return an error if the fetch fails (SAD)', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error editing your leg'))
        })
  
        await expect(patchLeg(mockLegInfo)).rejects.toEqual(Error('There was an error editing your leg'))
    
    })
  })

  describe('deleteTrip', () => {

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let queryParams = `mutation {removeTrip(input: {id: "17"}) {trip {name}}}`

    let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
  
    let mockFetch;

    beforeEach(() => {
      mockFetch = jest.fn();
      global.fetch = mockFetch;
    })


    it('should call fetch with the proper url and options', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return (
              { 
                data: {
                  removeTrip: {
                    trip: {}
                  }
                }
              }
            )
          }
        })
      })

      await deleteTrip(17)

      expect(mockFetch).toHaveBeenCalledWith(url, options)
    })

    it('should return the deleted trip name when successful (HAPPY)', async () => {

      let mockTrip = { id: 17 }

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return (
              { 
                data: {
                  removeTrip: {
                    trip: mockTrip
                  }
                }
              }
            )
          }
        })
      })

      await expect(deleteTrip(17)).resolves.toEqual(mockTrip)

    })

    it('should return an error when response is not ok (SAD)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false,
        })
      })

      await expect(deleteTrip(17)).rejects.toEqual(Error('There was an error deleting your trip'))

    })

    it('should return an error when the fetch fails (SAD)', async () => {


      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error deleting your trip (fetch failed)'))
      })

      await expect(deleteTrip(17)).rejects.toEqual(Error('There was an error deleting your trip (fetch failed)'))
    })
  })
})



