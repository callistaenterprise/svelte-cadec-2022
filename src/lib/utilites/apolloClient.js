import { ApolloClient } from '@apollo/client/core/core.cjs.js';
import { HttpLink } from '@apollo/client/link/http/http.cjs.js';
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js';
import { setContext } from '@apollo/client/link/context/context.cjs.js';

class Client {
  constructor() {
    if(Client._instance) {
      return Client_instance;
    }
    Client_instance = this;
    this.client = this.setupClient();
    setupClient() {
      const link = new HttpLink({
          uri: 'http://graphql.org/swapi-graphql',
          fetch
      });

      const client = new ApolloClient({
          link,
          cache: new InMemoryCache()
      });
      return client;
  }
  }
}