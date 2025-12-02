-- Grant INSERT and UPDATE permissions to anon role for intake submissions
GRANT INSERT, UPDATE ON TABLE public.client_intake_submissions TO anon;
GRANT USAGE ON SCHEMA public TO anon;