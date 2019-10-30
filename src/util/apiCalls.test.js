import {
  fetchTrip,
  fetchMyTrips,
  postNewTrip,
  patchTrip,
  postNewLeg,
  patchLeg,
  deleteTrip,
  deleteLeg, 
  fetchFollowers,
  fetchWanderersIncomingNotifications,
  fetchTransport,
  postNewTransport,
  deleteTransport,
  patchTransport
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

      queryParams = `{user(id: 1) {trips {id, name, startDate, endDate legs{startDate endDate id startLocation endLocation tripId}}}}`

  
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
        startDate: "2019-10-02",
        endDate: "2020-08-20", 
        startLocation: "Peru",
        endLocation: "Quito",
        tripId: 4,
      }
  
      let queryParams = `mutation {createLeg(input: {startDate: "2019-10-02", endDate: "2020-08-20", startLocation: "Peru", endLocation: "Quito", tripId: 4}) {leg{tripId}}}`
      
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
  
      let queryParams = `mutation {updateLeg(input: {id: 1, startDate: "2019-10-02", endDate: "2020-08-20", startLocation: "Peru", endLocation: "Quito", tripId: 4}) {leg{tripId}}}`
      
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

  describe('deleteLeg', () => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {removeLeg(input: {id: "13"}) {leg {tripId}}}`

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
                removeLeg: {
                  leg: {}
                }
              }
            }
          )
        }
      })
    })

    await deleteLeg(13)

    expect(mockFetch).toHaveBeenCalledWith(url, options)
  })

  it('should return the deleted leg name when successful (HAPPY)', async () => {

    let mockLeg = { id: 13 }

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return (
            { 
              data: {
                removeLeg: {
                  leg: mockLeg
                }
              }
            }
          )
        }
      })
    })

    await expect(deleteLeg(13)).resolves.toEqual(mockLeg)

  })

  it('should return an error when response is not ok (SAD)', async () => {

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    })

    await expect(deleteLeg(13)).rejects.toEqual(Error('There was an error deleting your leg'))

  })

  it('should return an error when the fetch fails (SAD)', async () => {


    mockFetch.mockImplementation(() => {
      return Promise.reject(Error('There was an error deleting your leg (fetch failed)'))
    })

    await expect(deleteLeg(17)).rejects.toEqual(Error('There was an error deleting your leg (fetch failed)'))
    })
  })


  describe('fetchTrip', () => {

    let mockFetch;
    let queryParams;
    let url;
    let options;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;

      queryParams = `{trip(id: 1) {id, name, startDate, endDate legs{startDate endDate id startLocation endLocation tripId}}}`
  
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
                trip: {
                  legs: []
                }
                }
              }
            )}
          })
        })

        await fetchTrip(1)

        expect(mockFetch).toHaveBeenCalledWith(url, options)
    })
      
    it('should return the trips for a specific user (HAPPY)', async () => {
      let mockTrip = {"legs": [{
        "starttLocation": "Paris",
        "endLocation": "Rome",
        "endDate": "2020-01-02",
        "id": "1",
        "startDate": "2019-07-11",
        "tripId": "22"
      }]
    }

      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => { 
            return (
              { data: {
                trip: mockTrip
                }
              }
            )}
          })
        })

      let response = await fetchTrip(1)

      expect(response).toEqual(mockTrip)

    })

    it('should throw an error when fetch fails (SAD)', async () => {

      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error fetching your trip'))
      })

      await expect(fetchTrip(1)).rejects.toEqual(Error('There was an error fetching your trip'))

    })

    it('should throw an error if response is not ok (SAD)', async () => {
      
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
          })
        })

      await expect(fetchTrip(1)).rejects.toEqual(Error('There was an error fetching your trip'))

    })
  })

  describe('fetchFollowers', () => {
    let mockFetch;
    let queryParams;
    let url;
    let options;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;

      queryParams = `{user(id: 1) {friends { id name role }}}`

      url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
      
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    })

    it('should call fetch with correct url and options', async () => {
      
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return ({
              data: {
                user: {
                  friends: []
                }
              }
            })
          }
        })
      })

      await fetchFollowers(1)
      expect(mockFetch).toHaveBeenCalledWith(url, options)
    })

    it('should return an array of friends when successful', async () => {

      let mockFriends = [
        {id: 9, name: 'John Mayer'},
        {id: 5, name: 'Oscar Meyer'},
        {id: 18, name: 'Oscar The Grouch'}
      ]


      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return ({
              data: {
                user: {
                  friends: mockFriends
                }
              }
            })
          }
        })
      })

      await expect(fetchFollowers(1)).resolves.toEqual(mockFriends)
    })

    it('should return an error when fetch fails (SAD)', async () => {


      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      await expect(fetchFollowers(1)).rejects.toEqual(Error('There was an error fetching your followers'))
    })

    it('should return an error when status is not ok (SAD)', async () => {


      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error fetching your followers'))
      })

      await expect(fetchFollowers(1)).rejects.toEqual(Error('There was an error fetching your followers'))
    })
  })

  describe('fetchWanderersIncomingNotifications', () => {
    let mockFetch;
    let queryParams;
    let url;
    let options;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;

      queryParams = `{user(id: 1) {notificationsReceived { unread message senderId }}}`

      url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
      
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      } 
    })

    it('should call fetch with correct url and options', async () => {
      
      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return ({
              data: {
                user: {
                  notificationsReceived: []
                }
              }
            })
          }
        })
      })

      await fetchWanderersIncomingNotifications(1)
      expect(mockFetch).toHaveBeenCalledWith(url, options)
    })

    it('should return an array of messages when successful', async () => {

      let mockMessages = [
        'Hi', 
        'Hey',
        'Hope you are ok'
      ]


      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return ({
              data: {
                user: {
                  notificationsReceived: mockMessages
                }
              }
            })
          }
        })
      })

      await expect(fetchWanderersIncomingNotifications(1)).resolves.toEqual(mockMessages)
    })

    it('should return an error when fetch fails (SAD)', async () => {


      mockFetch.mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      await expect(fetchWanderersIncomingNotifications(1)).rejects.toEqual(Error('There was an error fetching your messages'))
    })

    it('should return an error when status is not ok (SAD)', async () => {


      mockFetch.mockImplementation(() => {
        return Promise.reject(Error('There was an error fetching your messages'))
      })

      await expect(fetchWanderersIncomingNotifications(1)).rejects.toEqual(Error('There was an error fetching your messages'))
    })
  })

})







