import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const SUPABASE_URL = 'https://wtjuzhjddqekvqmjbsdn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0anV6aGpkZHFla3ZxbWpic2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NjEyNjcsImV4cCI6MjA3NTMzNzI2N30.pxm2gze_4J246ijopoGuUjGR-Gwy7Ld49Za3ugj8vww';

// Create HTTP link to Supabase GraphQL endpoint
const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

// Set authentication context with Supabase anon key
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      apikey: SUPABASE_ANON_KEY,
      authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  };
});

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
