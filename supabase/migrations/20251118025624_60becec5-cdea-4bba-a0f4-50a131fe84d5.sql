-- Drop all existing policies on client_intake_submissions
DROP POLICY IF EXISTS "Authenticated users can read intake submissions" ON client_intake_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts on intake submissions" ON client_intake_submissions;
DROP POLICY IF EXISTS "Allow anonymous updates on intake submissions" ON client_intake_submissions;
DROP POLICY IF EXISTS "Allow updates on intake submissions" ON client_intake_submissions;

-- Create new policies that work for both anonymous and authenticated users
-- Allow anyone (public) to insert intake submissions
CREATE POLICY "Anyone can insert intake submissions"
ON client_intake_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Allow anyone (public) to update intake submissions (for video_watched and calendar_scheduled)
CREATE POLICY "Anyone can update intake submissions"
ON client_intake_submissions
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

-- Allow authenticated users to read all intake submissions
CREATE POLICY "Authenticated users can read intake submissions"
ON client_intake_submissions
FOR SELECT
TO authenticated
USING (auth.role() = 'authenticated');