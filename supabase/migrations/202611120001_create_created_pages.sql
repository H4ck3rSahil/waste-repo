-- LittlePages: additive migration. Does not alter or delete birthdays, photos,
-- existing users, or existing policies.

create table if not exists public.created_pages (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  template_id text not null,
  title text not null default 'A little page for you',
  payload jsonb not null default '{}'::jsonb,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists created_pages_owner_updated_idx
  on public.created_pages (owner_id, updated_at desc);
create index if not exists created_pages_published_idx
  on public.created_pages (id) where is_published = true;

alter table public.created_pages enable row level security;

drop policy if exists "LittlePages owner select" on public.created_pages;
create policy "LittlePages owner select"
  on public.created_pages for select to authenticated
  using (auth.uid() = owner_id);

drop policy if exists "LittlePages owner insert" on public.created_pages;
create policy "LittlePages owner insert"
  on public.created_pages for insert to authenticated
  with check (auth.uid() = owner_id);

drop policy if exists "LittlePages owner update" on public.created_pages;
create policy "LittlePages owner update"
  on public.created_pages for update to authenticated
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

drop policy if exists "LittlePages owner delete" on public.created_pages;
create policy "LittlePages owner delete"
  on public.created_pages for delete to authenticated
  using (auth.uid() = owner_id);

-- New private bucket. Existing public `photos` bucket and policies stay untouched.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('littlepages-private', 'littlepages-private', false, 5242880,
        array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do nothing;

drop policy if exists "LittlePages private image owner select" on storage.objects;
create policy "LittlePages private image owner select"
  on storage.objects for select to authenticated
  using (bucket_id = 'littlepages-private' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "LittlePages private image owner insert" on storage.objects;
create policy "LittlePages private image owner insert"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'littlepages-private' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "LittlePages private image owner update" on storage.objects;
create policy "LittlePages private image owner update"
  on storage.objects for update to authenticated
  using (bucket_id = 'littlepages-private' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'littlepages-private' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "LittlePages private image owner delete" on storage.objects;
create policy "LittlePages private image owner delete"
  on storage.objects for delete to authenticated
  using (bucket_id = 'littlepages-private' and (storage.foldername(name))[1] = auth.uid()::text);

create or replace function public.littlepages_created_pages_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists littlepages_created_pages_touch_updated_at on public.created_pages;
create trigger littlepages_created_pages_touch_updated_at
before update on public.created_pages
for each row execute function public.littlepages_created_pages_touch_updated_at();

grant select, insert, update, delete on public.created_pages to authenticated;
