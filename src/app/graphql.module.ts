import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uriLocal = 'http://localhost:8080/graphql'; // Local run enviroment
var uri = 'https://the-thinker-learner-backend1.herokuapp.com/'; // Deployed server
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  uri+='graphql';
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
