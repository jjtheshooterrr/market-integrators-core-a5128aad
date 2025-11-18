-- Create client intake submissions table
CREATE TABLE public.client_intake_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  website TEXT,
  selected_services JSONB NOT NULL DEFAULT '[]'::jsonb,
  budget_range TEXT,
  pain_points TEXT,
  video_watched BOOLEAN DEFAULT false,
  calendar_scheduled BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.client_intake_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit (insert)
CREATE POLICY "Anyone can submit intake forms" 
ON public.client_intake_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Authenticated users can read intake submissions" 
ON public.client_intake_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update intake submissions" 
ON public.client_intake_submissions 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create trigger for updated_at
CREATE TRIGGER update_client_intake_submissions_updated_at
BEFORE UPDATE ON public.client_intake_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_leads_updated_at();