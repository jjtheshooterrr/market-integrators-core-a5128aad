-- Enable security_invoker on the careers_open_roles view
-- This makes the view execute with the permissions of the calling user (safer)
ALTER VIEW public.careers_open_roles SET (security_invoker = on);