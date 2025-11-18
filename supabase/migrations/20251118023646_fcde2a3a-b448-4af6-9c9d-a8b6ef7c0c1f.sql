-- Create calendar_appointments table
CREATE TABLE public.calendar_appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  submission_id UUID REFERENCES public.client_intake_submissions(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_time TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.calendar_appointments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create appointments
CREATE POLICY "Anyone can create appointments"
ON public.calendar_appointments
FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to read appointments
CREATE POLICY "Authenticated users can read appointments"
ON public.calendar_appointments
FOR SELECT
USING (auth.role() = 'authenticated');