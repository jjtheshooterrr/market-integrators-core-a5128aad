-- Re-enable RLS
ALTER TABLE client_intake_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert intake submissions" ON client_intake_submissions;
DROP POLICY IF EXISTS "Anyone can update intake submissions" ON client_intake_submissions;
DROP POLICY IF EXISTS "Authenticated users can read intake submissions" ON client_intake_submissions;

-- Create explicit policies for anon role
CREATE POLICY "anon_insert_intake"
ON client_intake_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "anon_update_intake"
ON client_intake_submissions
FOR UPDATE  
TO anon, authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "auth_read_intake"
ON client_intake_submissions
FOR SELECT
TO authenticated
USING (true);