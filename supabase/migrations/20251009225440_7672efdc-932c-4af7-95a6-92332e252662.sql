-- Create contact_leads table for form submissions
CREATE TABLE public.contact_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  website TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (submit forms)
CREATE POLICY "Anyone can submit contact forms"
ON public.contact_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT policy means only service role can view (service role bypasses RLS)

-- Create indexes for better query performance
CREATE INDEX idx_contact_leads_created_at ON public.contact_leads(created_at DESC);
CREATE INDEX idx_contact_leads_email ON public.contact_leads(email);