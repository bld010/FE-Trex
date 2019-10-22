import ApolloClient from 'apollo-boost';

import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://secret-cliffs-17751.herokuapp.com/graphql'
})

client
  .query({
    query: gql`
    {
      user(id: 1) {
        name
        email
        trips {
          name
          startDate
          endDate
        }
      }
    }
    `
  })
  .then(result => console.log(result))