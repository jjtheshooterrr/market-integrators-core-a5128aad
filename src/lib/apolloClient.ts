// src/lib/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { supabase } from "@/integrations/supabase/client"; // <— reuse the single client

// Env (already validated in your supabase client file)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!;

// HTTP link to Supabase GraphQL
const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

// Attach auth headers
const authLink = setContext(async (_, { headers }) => {
  // If this ever runs in an SSR context, skip trying to read browser storage
  const isBrowser = typeof window !== "undefined";

  let bearer: string | undefined;

  if (isBrowser) {
    try {
      const { data } = await supabase.auth.getSession();
      bearer = data.session?.access_token;
    } catch {
      // no-op; we'll fall back to anon below
    }
  }

  return {
    headers: {
      ...headers,
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${bearer ?? SUPABASE_ANON_KEY}`, // fallback ensures GraphQL never gets a blank token
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    // Good for UI that should refresh when online
    watchQuery: { fetchPolicy: "cache-and-network" },
    query: { fetchPolicy: "network-only" },
  },
});
