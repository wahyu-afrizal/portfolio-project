This is a personal portfolio website for Wahyu Afrizal built with Next.js App Router, Tailwind CSS, and Sanity CMS.

## Requirements

- Node `22.x`
- npm

This repo currently runs most reliably with webpack mode on Node 22.

## Environment

Create `.env.local` from `.env.example` and set:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-27
```

## Getting Started

Use Node 22 first:

```bash
nvm use
```

Then install dependencies and start the local dev server:

```bash
npm install
npm run dev:webpack
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

Main routes:
- `/`
- `/projects`
- `/blog`
- `/experience`
- `/studio`

## Current Notes

- Sanity content is connected for the projects page, blog listing page, and experience page.
- If the repo stalls under `Documents`, move the working copy to a normal local directory outside iCloud-managed locations.
