-- Verify pg_graphql is tracking the public schema
SELECT graphql.resolve($$
{
  __schema {
    types {
      name
    }
  }
}
$$);

-- Notify PostgREST to reload
NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload config';