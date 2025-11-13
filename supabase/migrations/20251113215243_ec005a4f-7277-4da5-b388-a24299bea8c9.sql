-- Create enums
create type lead_status as enum (
  'new',
  'contacted',
  'discovery',
  'proposal_sent',
  'follow_up',
  'closed_won',
  'closed_lost'
);

create type task_status as enum ('open', 'done');

-- USERS table (profile, mapped to auth.users)
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  role text,
  created_at timestamptz default now()
);

-- COMPANIES table
create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text,
  industry text,
  created_at timestamptz default now()
);

-- CONTACTS table
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete set null,
  first_name text,
  last_name text,
  email text,
  phone text,
  title text,
  linkedin_url text,
  created_at timestamptz default now()
);

-- LEADS table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company_id uuid references public.companies(id) on delete set null,
  contact_id uuid references public.contacts(id) on delete set null,
  status lead_status not null default 'new',
  service_type text,
  source text,
  budget_range text,
  amount numeric,
  close_date date,
  priority text,
  owner_id uuid references public.users(id) on delete set null,
  last_activity_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- LEAD NOTES table
create table if not exists public.lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  author_id uuid references public.users(id) on delete set null,
  body text not null,
  created_at timestamptz default now()
);

-- LEAD TASKS table
create table if not exists public.lead_tasks (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete cascade,
  assignee_id uuid references public.users(id) on delete set null,
  title text not null,
  due_at timestamptz,
  status task_status not null default 'open',
  created_at timestamptz default now()
);

-- Enable RLS on all tables
alter table public.users enable row level security;
alter table public.companies enable row level security;
alter table public.contacts enable row level security;
alter table public.leads enable row level security;
alter table public.lead_notes enable row level security;
alter table public.lead_tasks enable row level security;

-- RLS Policies: allow any authenticated user full read/write
-- users table
create policy "users_read_auth"
  on public.users for select
  using (auth.role() = 'authenticated');

create policy "users_write_auth"
  on public.users for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- companies table
create policy "companies_read_auth"
  on public.companies for select
  using (auth.role() = 'authenticated');

create policy "companies_write_auth"
  on public.companies for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- contacts table
create policy "contacts_read_auth"
  on public.contacts for select
  using (auth.role() = 'authenticated');

create policy "contacts_write_auth"
  on public.contacts for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- leads table
create policy "leads_read_auth"
  on public.leads for select
  using (auth.role() = 'authenticated');

create policy "leads_write_auth"
  on public.leads for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- lead_notes table
create policy "lead_notes_read_auth"
  on public.lead_notes for select
  using (auth.role() = 'authenticated');

create policy "lead_notes_write_auth"
  on public.lead_notes for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- lead_tasks table
create policy "lead_tasks_read_auth"
  on public.lead_tasks for select
  using (auth.role() = 'authenticated');

create policy "lead_tasks_write_auth"
  on public.lead_tasks for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Trigger to update leads.updated_at on UPDATE
create or replace function public.update_leads_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_leads_updated_at_trigger
  before update on public.leads
  for each row
  execute function public.update_leads_updated_at();

-- Trigger to update leads.last_activity_at when notes are added
create or replace function public.update_lead_activity_on_note()
returns trigger as $$
begin
  update public.leads
  set last_activity_at = now()
  where id = new.lead_id;
  return new;
end;
$$ language plpgsql;

create trigger update_lead_activity_on_note_trigger
  after insert on public.lead_notes
  for each row
  execute function public.update_lead_activity_on_note();

-- Trigger to update leads.last_activity_at when tasks are added or status changes
create or replace function public.update_lead_activity_on_task()
returns trigger as $$
begin
  update public.leads
  set last_activity_at = now()
  where id = new.lead_id;
  return new;
end;
$$ language plpgsql;

create trigger update_lead_activity_on_task_trigger
  after insert or update on public.lead_tasks
  for each row
  execute function public.update_lead_activity_on_task();

-- Auto-create user profile on auth signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email)
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();