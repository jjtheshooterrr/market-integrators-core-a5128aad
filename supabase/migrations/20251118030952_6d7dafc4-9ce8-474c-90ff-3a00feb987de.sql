-- Allow anon to select intake submissions (needed for .select() after insert)
CREATE POLICY "anon_select_intake" 
ON public.client_intake_submissions
FOR SELECT 
TO anon
USING (true);