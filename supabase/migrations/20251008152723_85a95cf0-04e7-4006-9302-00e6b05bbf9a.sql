-- Grant SELECT permissions to anon and authenticated roles for GraphQL access
grant select on public.mi_home_metrics to anon, authenticated;

-- Refresh the GraphQL schema to pick up the new table
notify pgrst, 'reload schema';