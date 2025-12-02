-- Drop existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow anonymous inserts on intake submissions" ON client_intake_submissions;
DROP POLICY IF EXISTS "Allow updates on intake submissions" ON client_intake_submissions;

-- Create proper policy for anonymous inserts
CREATE POLICY "Allow anonymous inserts on intake submissions"
ON client_intake_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create proper policy for anonymous updates (for video_watched and calendar_scheduled)
CREATE POLICY "Allow anonymous updates on intake submissions"
ON client_intake_submissions
FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);