import {
  fetchMyTrips
} from './apiCalls';

describe('apiCalls', () => {

  describe('fetchMyTrips', () => {

    let mockFetch;

    beforeEach(() => {
      mockFetch = jest.fn()
      global.fetch = mockFetch;
    })

    it('should call fetch with correct url and queryParams', async () => {
      
      let queryParams = `{
       user(id: 1) {
         trips {
           id
           name
           startDate
           endDate
         }
       }
      }`

      let url = `https://secret-cliffs-17751.herokuapp.com/graphql?query=${queryParams}`
      
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }

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
      
    it('should return the trip (HAPPY)', () => {

    })

    it('should throw an error when fetch fails (SAD)', () => {

    })

    it('should throw an error if response is not ok (SAD)', () => {

    })
  })

})

