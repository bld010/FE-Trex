import {
  fetchMyTrips
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

      queryParams = `{user(id: 1) {trips {id, name, startDate, endDate}}}`
  
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

})

