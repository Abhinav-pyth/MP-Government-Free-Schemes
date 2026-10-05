# MP Government Free Schemes

A production-ready, bilingual (Hindi/English) information portal for Madhya Pradesh government welfare schemes.

## Overview

This is an independent information portal that helps citizens discover, search, filter, and understand MP government welfare schemes. It provides scheme details, eligibility criteria, required documents, application processes, and safe navigation to official government websites.

## Technology Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 4** for styling
- **React Router DOM** for client-side routing
- **Lucide React** for icons
- **Supabase** for help desk form submissions
- **clsx + tailwind-merge** for utility class management

## Features

- 🌐 **Bilingual** - Full Hindi/English support with persistent language selection
- 🔍 **Search** - Live search across scheme names, descriptions, categories, keywords
- 🏷️ **Filtering** - Filter by category and target audience
- 📱 **Responsive** - Mobile-first design that works on all screen sizes
- 🔒 **Safe External Links** - Confirmation modal before navigating to external government sites
- 📝 **Help Desk** - Submit queries through a validated form
- 📖 **Blog** - Educational articles about scheme processes
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Setup

### Database SQL

Create the following table in your Supabase project:

```sql
create table user_queries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  category text not null,
  query text not null,
  language text default 'hi',
  status text default 'new',
  created_at timestamptz default now()
);

-- Add indexes for common queries
create index idx_user_queries_status on user_queries(status);
create index idx_user_queries_created_at on user_queries(created_at desc);
create index idx_user_queries_category on user_queries(category);
```

### Row Level Security (RLS)

Enable RLS and create policies to allow anonymous inserts while preventing unauthorized reads. **Important:** RLS policies only filter rows — you must also GRANT table-level permissions to the `anon` role.

```sql
-- Enable RLS
alter table user_queries enable row level security;

-- Grant table-level permissions to the anon role
-- This is REQUIRED — RLS policies alone are not enough
grant usage on schema public to anon;
grant insert on user_queries to anon;
grant select on user_queries to authenticated;
grant update on user_queries to authenticated;

-- RLS policy: allow anonymous inserts (for help desk form submissions)
create policy "Allow anonymous inserts"
  on user_queries
  for insert
  to anon
  with check (true);

-- RLS policy: only authenticated users (admin) can read queries
create policy "Allow authenticated read"
  on user_queries
  for select
  to authenticated
  using (true);

-- RLS policy: only authenticated users (admin) can update queries
create policy "Allow authenticated updates"
  on user_queries
  for update
  to authenticated
  using (true)
  with check (true);
```

**If you still get a 42501 error**, run this to verify permissions:

```sql
-- Check what permissions anon has
SELECT grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_name = 'user_queries';

-- If INSERT is missing for anon, re-run:
grant insert on user_queries to anon;
```

## Local Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`)
4. Deploy

### Other Platforms

The `dist/` folder can be deployed to any static hosting service (Netlify, Cloudflare Pages, etc.).

## Project Structure

```
src/
├── App.tsx                    # Main app with routing
├── main.tsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Site header with navigation
│   │   └── Footer.tsx         # Site footer
│   ├── common/
│   │   ├── OfficialLink.tsx   # Safe external link with modal
│   │   └── Breadcrumbs.tsx    # Breadcrumb navigation
│   ├── schemes/
│   │   ├── SchemeCard.tsx     # Scheme card and grid
│   │   └── FilterPanel.tsx    # Search and filter controls
│   └── help/
│       └── HelpDeskForm.tsx   # Help desk form with validation
├── pages/
│   ├── HomePage.tsx           # Landing page
│   ├── SchemesPage.tsx        # Scheme listing with filters
│   ├── SchemeDetailPage.tsx   # Individual scheme details
│   ├── BlogPage.tsx           # Blog listing
│   ├── BlogDetailPage.tsx     # Blog article detail
│   ├── HelpPage.tsx           # Help desk page
│   ├── AboutPage.tsx          # About page
│   └── StaticPages.tsx        # Privacy, Terms, Disclaimer
├── data/
│   ├── index.ts               # Types and constants
│   ├── schemes.ts             # Scheme dataset
│   └── blog.ts                # Blog articles
├── lib/
│   ├── i18n/
│   │   ├── hi.ts              # Hindi translations
│   │   ├── en.ts              # English translations
│   │   └── index.tsx          # Language context and hooks
│   ├── supabase/
│   │   └── client.ts          # Supabase client
│   └── utils.ts               # Utility functions
```

## Adding a New Scheme

1. Open `src/data/schemes.ts`
2. Add a new object to the `schemes` array following the `Scheme` interface
3. Ensure all bilingual fields (hi/en) are filled
4. The scheme will automatically appear in listings and search

## Adding Translations

1. Edit `src/lib/i18n/hi.ts` for Hindi strings
2. Edit `src/lib/i18n/en.ts` for English strings
3. Use the `useLanguage()` hook to access translations in components

## Adding a Blog Article

1. Open `src/data/blog.ts`
2. Add a new object to the `blogPosts` array
3. Include bilingual title, excerpt, and content (HTML)
4. Link related schemes by their IDs

## Important Notes

- This is an **independent information portal** - not an official government website
- Always verify scheme information on official government portals
- The Help Desk form requires Supabase credentials to function
- Without Supabase credentials, the form will show an error (this is expected)

## License

This project is for informational purposes only.
