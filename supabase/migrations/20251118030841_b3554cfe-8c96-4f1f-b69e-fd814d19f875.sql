-- Ensure anon role can actually insert into the table
-- First verify RLS is enabled
ALTER TABLE public.client_intake_submissions ENABLE ROW LEVEL SECURITY;

-- Drop and recreate the insert policy to be absolutely clear
DROP POLICY IF EXISTS "anon_insert_intake" ON public.client_intake_submissions;
CREATE POLICY "anon_insert_intake" 
ON public.client_intake_submissions
FOR INSERT 
TO anon
WITH CHECK (true);

-- Grant explicit table permissions
GRANT INSERT ON TABLE public.client_intake_submissions TO anon, authenticated;
GRANT UPDATE ON TABLE public.client_intake_submissions TO anon, authenticated;
GRANT USAGE ON SCHEMA public TO anon, authenticated;