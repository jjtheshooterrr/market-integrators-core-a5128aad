-- Add comment to expose table to pg_graphql
COMMENT ON TABLE public.mi_home_metrics IS '@graphql({"totalCount": {"enabled": true}})';

-- Ensure proper grants are in place
GRANT SELECT ON public.mi_home_metrics TO anon, authenticated;

-- Notify PostgREST to reload schema
NOTIFY pgrst, 'reload schema';