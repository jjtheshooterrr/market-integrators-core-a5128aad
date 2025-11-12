import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Load environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!;

// Create HTTP link to Supabase GraphQL endpoint
const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

// Set authentication context dynamically
const authLink = setContext(async (_, { headers }) => {
  let bearer: string | undefined;

  try {
    // Lazy import to avoid bundling if Supabase auth isn’t used elsewhere
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data } = await supabase.auth.getSession();
    bearer = data.session?.access_token;
  } catch (error) {
    console.warn("Supabase auth not configured or failed to load session:", error);
  }

  return {
    headers: {
      ...headers,
      // Always include anon key
      apikey: SUPABASE_ANON_KEY,
      // Use user token if logged in, otherwise fallback to anon
      authorization: `Bearer ${bearer ?? SUPABASE_ANON_KEY}`,
    },
  };
});

// Create and export Apollo Client instance
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "cache-and-network" },
    query: { fetchPolicy: "network-only" },
  },
});
