-- Create mi_home_metrics table for agency performance KPIs
create table if not exists public.mi_home_metrics (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value numeric not null,
  suffix text,
  icon text,
  order_index integer default 0,
  is_public boolean default true,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.mi_home_metrics enable row level security;

-- Create policy for public read access
create policy "Public can read metrics"
on public.mi_home_metrics
for select
to anon
using (is_public = true);

-- Insert sample data
insert into public.mi_home_metrics (label, value, suffix, icon, order_index)
values
  ('Clients Served', 128, '+', 'users', 1),
  ('Average ROI', 410, '%', 'trending-up', 2),
  ('Ad Spend Managed', 12000000, '$', 'dollar-sign', 3)
on conflict do nothing;