-- Fix security warnings by setting search_path on functions

-- Fix update_leads_updated_at function
create or replace function public.update_leads_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Fix update_lead_activity_on_note function
create or replace function public.update_lead_activity_on_note()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.leads
  set last_activity_at = now()
  where id = new.lead_id;
  return new;
end;
$$;

-- Fix update_lead_activity_on_task function
create or replace function public.update_lead_activity_on_task()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.leads
  set last_activity_at = now()
  where id = new.lead_id;
  return new;
end;
$$;