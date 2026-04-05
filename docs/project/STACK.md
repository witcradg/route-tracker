# Stack

## Purpose

Define the technologies and runtime assumptions for this project.

This file must be specific enough to support:

- reasoning about the system
- scaffold and setup decisions during project initialization

## Primary Stack

- Framework: Next.js 16
- Language: TypeScript
- Runtime: Node.js 24.x
- Package manager: npm

## Styling

- Tailwind CSS v4

## Application Type

- Web application
- App Router
- Server-first approach unless client behavior is required

## Application Structure

- code location: project root (no `src/` directory)

Expected top-level source structure:

- `app/` — routing and UI entry (App Router)
- `components/` — reusable UI components (create as needed)
- `lib/` — shared utilities and data-access helpers (create as needed)
- `public/` — static assets

Root-level operational files:

- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.js`
- ESLint config
- `.env.*` if introduced later

Generated file policy:

- `next-env.d.ts` remains part of the TypeScript project configuration, but it is treated as generated build/dev metadata and should not be tracked in Git for this repo
- local development, CI, and Vercel builds are expected to regenerate `next-env.d.ts` as needed
- `tsconfig.json` should continue to include `next-env.d.ts` so TypeScript and Next.js tooling stay aligned

## Initial Scaffold Requirements

The initial scaffold should include:

- `package.json` and npm lockfile
- TypeScript configuration
- Next.js framework configuration
- application entry structure
- basic linting and default project scripts
- Tailwind setup if not included by default

The initial scaffold should:

- use App Router (`app/`)
- use TypeScript
- use npm
- use root-level application structure (no `src/`)
- remain minimal and runnable

## Explicit Defaults

Unless otherwise documented:

- use App Router
- use TypeScript
- use npm
- do not use a `src/` directory
- prefer minimal scaffold
- do not introduce custom folder structures beyond those listed above
- do not add database, auth, testing, analytics, or non-essential libraries during initial scaffold
- follow framework defaults where possible

## Deferred Stack Decisions

These are intentionally not part of the initial scaffold unless later documented:

- database
- auth provider
- hosting platform
- testing framework beyond scaffold defaults
- UI component library (for example, shadcn/ui)
- external integrations
- background jobs or workers

## Notes

- Do not assume stack details from prior projects.
- If a decision affects scaffold generation, it must be specified here.
- If a future change requires `src/`, document that explicitly before restructuring the repo.
