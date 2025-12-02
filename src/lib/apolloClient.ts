import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "@supabase/supabase-js";

// Clean environment values
const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL ?? "").replace(/^["']|["']$/g, "");
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? "").replace(/^["']|["']$/g, "");

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

const authLink = setContext(async (_, { headers }) => {
  const { data } = await supabase.auth.getSession();

  // Opposite (revised) logic:
  // Use the session token ONLY if logged in.
  // Otherwise use the ANON key.
  const token = data?.session?.access_token || SUPABASE_ANON_KEY;

  return {
    headers: {
      ...headers,
      apikey: SUPABASE_ANON_KEY, // always required
      Authorization: `Bearer ${token}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
