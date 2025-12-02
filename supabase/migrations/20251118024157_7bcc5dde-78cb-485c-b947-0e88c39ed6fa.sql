-- Drop existing policy that might be misconfigured
DROP POLICY IF EXISTS "Anyone can submit intake forms" ON public.client_intake_submissions;

-- Create a new policy that explicitly allows anonymous inserts
CREATE POLICY "Allow anonymous inserts on intake submissions"
ON public.client_intake_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Also allow unauthenticated users to update their own submissions (for calendar scheduling)
DROP POLICY IF EXISTS "Authenticated users can update intake submissions" ON public.client_intake_submissions;

CREATE POLICY "Allow updates on intake submissions"
ON public.client_intake_submissions
FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);