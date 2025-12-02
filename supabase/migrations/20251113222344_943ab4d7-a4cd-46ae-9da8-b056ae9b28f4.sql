-- Drop the trigger and validation function since we can't attach triggers to auth.users
DROP TRIGGER IF EXISTS validate_user_email_approved ON auth.users;
DROP FUNCTION IF EXISTS public.validate_approved_email();

-- Keep the approved_emails table and is_email_approved function for future use
-- But note: Email validation via triggers on auth.users is not supported

-- Add a comment explaining the limitation
COMMENT ON TABLE public.approved_emails IS 'Email allowlist table. Note: Cannot be enforced via database triggers on auth.users. Use Supabase Auth Hooks or manual user management instead.';