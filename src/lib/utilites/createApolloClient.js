// import { ApolloClient } from '@apollo/client/core';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

const createStarwarsApolloClient = () => {
  console.log(' --- running createStarwarsApolloClient');
   const httpLink = new HttpLink({
     // uri: "http://graphql.org/swapi-graphql",
     uri: "https://swapi-graphql.netlify.app/.netlify/functions/index"
   });

   const cache = new InMemoryCache();

   const client = new ApolloClient({
     httpLink,
     cache,
   });

   return client;
 }

 export default createStarwarsApolloClient;