-- Enable the pg_graphql extension for GraphQL API support
CREATE EXTENSION IF NOT EXISTS pg_graphql WITH SCHEMA graphql;

-- Grant necessary permissions for the GraphQL schema
GRANT USAGE ON SCHEMA graphql TO postgres, anon, authenticated, service_role;

-- Allow graphql schema to access public schema tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO anon, authenticated;