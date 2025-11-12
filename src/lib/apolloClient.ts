import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!;

console.log("🔍 [ApolloClient Init]");
console.log("➡️ Supabase URL:", SUPABASE_URL);
console.log("➡️ Supabase key (first 10):", SUPABASE_ANON_KEY?.slice(0, 10) || "undefined");

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
});

const authLink = setContext(async (_, { headers }) => {
  // Get user session if exists
  const { data, error } = await supabase.auth.getSession();
  const token = data?.session?.access_token ?? SUPABASE_ANON_KEY;

  if (error) {
    console.error("⚠️ Supabase session fetch error:", error.message);
  }

  // Log what we’re sending to GraphQL
  console.log("🔑 [Apollo AuthLink]");
  console.log("→ Token source:", data?.session ? "user session" : "anon key");
  console.log("→ Token starts with:", token.slice(0, 10));
  console.log("→ apikey starts with:", SUPABASE_ANON_KEY.slice(0, 10));

  return {
    headers: {
      ...headers,
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
