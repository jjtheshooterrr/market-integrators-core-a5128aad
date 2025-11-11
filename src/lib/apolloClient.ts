import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!;

const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

const authLink = setContext(async (_, { headers }) => {
  // If you’re using Supabase Auth, prefer a user session token as Bearer
  // Fallback to anon key if not logged in.
  let bearer: string | undefined = undefined;
  try {
    // Lazy import to avoid bundling if you’re not using auth in this bundle
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data } = await supabase.auth.getSession();
    bearer = data.session?.access_token;
  } catch {
    // ignore if auth not configured in this app
  }

  return {
    headers: {
      ...headers,
      // apikey header must always be present
      apikey: SUPABASE_ANON_KEY,
      // Prefer user token; otherwise omit Authorization (or use anon if you must)
      ...(bearer ? { authorization: `Bearer ${bearer}` } : {}),
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});
