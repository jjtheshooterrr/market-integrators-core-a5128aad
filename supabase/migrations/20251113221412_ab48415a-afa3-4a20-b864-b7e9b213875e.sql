-- Create approved_emails table
CREATE TABLE public.approved_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.approved_emails ENABLE ROW LEVEL SECURITY;

-- Allow anyone to check if email is approved (needed for signup validation)
CREATE POLICY "Anyone can read approved emails"
ON public.approved_emails
FOR SELECT
USING (true);

-- Only service role can insert/update/delete
CREATE POLICY "Only admins can modify approved emails"
ON public.approved_emails
FOR ALL
USING (auth.jwt()->>'role' = 'service_role')
WITH CHECK (auth.jwt()->>'role' = 'service_role');

-- Function to check if email is approved
CREATE OR REPLACE FUNCTION public.is_email_approved(user_email text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.approved_emails
    WHERE lower(email) = lower(user_email)
  );
$$;

-- Trigger function to validate email on signup
CREATE OR REPLACE FUNCTION public.validate_approved_email()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.is_email_approved(NEW.email) THEN
    RAISE EXCEPTION 'Email not approved for signup. Please contact support.';
  END IF;
  RETURN NEW;
END;
$$;

-- Trigger to enforce approved emails on user creation
CREATE TRIGGER validate_user_email_approved
  BEFORE INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_approved_email();