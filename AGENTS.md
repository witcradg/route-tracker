# AGENTS.md

This file contains persistent instructions for AI agents working in this repository.

Agents must read this file before performing significant work in the repo.

---

# Purpose

Use this file as the startup instruction layer for work in this repository.

This file defines:

- the required reading order
- the operating model for AI-assisted engineering
- the boundary between portable control guidance and repo-specific project truth
- the default working style for implementation, refactoring, and verification

This file does not replace deeper repository guidance. It establishes how to interpret and use it.

---

# Core Principle

Starter documents define **process**.

Project documents define **truth**.

Do not infer repo-specific architecture, stack, or implementation boundaries from starter documents.

Always rely on `docs/project/*` for repo-specific truth.

---

# Repository Guidance Model

This repository is organized into three guidance layers.

## 1. Control System

These documents define how work should be approached:

- `AGENT_RULES.md`
- `docs/starter/core-spec.md`
- `docs/starter/workflow.md`
- `docs/starter/verification.md`
- `docs/starter/repo-specific-injection-model.md`

Use these to understand:

- how the AI control system works
- how planning and verification should be handled
- how repo-specific context must be added
- how drift between starter guidance and project truth should be avoided

## 2. Project Context

These documents define the truth for the specific repo cloned from this starter:

- `docs/project/PROJECT_OVERVIEW.md`
- `docs/project/STACK.md`
- `docs/project/ARCHITECTURE.md`
- `docs/project/BOUNDARIES.md`

Use these to understand:

- what the project is
- what stack it uses
- what architecture it follows
- what boundaries govern implementation in this repo

If these files are incomplete, missing, or outdated, do not compensate by inventing assumptions from prior repos or starter materials.

Instead, identify the missing context explicitly and update the appropriate project document before making major architectural assumptions.

## 3. Meta

The `meta/` directory contains starter-development material only.

It is not part of the active control system for cloned project repos and must not be treated as implementation guidance or project truth.

If working inside the starter repo itself, `meta/` may be used for starter design and portability work, but not as authority for product implementation decisions.

---

# Required Reading Order

Before making significant changes, consult these files in order:

1. `README.md`
2. `AGENT_RULES.md`
3. relevant files in `docs/starter/`
4. relevant files in `docs/project/`

When the task is architecture-sensitive, boundary-sensitive, or non-trivial, prefer reading the smallest set of governing files rather than scanning the entire repo.

If instructions conflict:

- follow the most specific applicable instruction
- prefer project documents over starter documents for repo-specific truth
- prefer explicit documented guidance over assumptions

---

# Working Style

- Be docs-first and architecture-aware.
- Preserve existing behavior unless the task explicitly calls for behavior change.
- Prefer small, reversible refactors.
- Prefer explicit documentation over inferred assumptions.
- Do not invent new architectural patterns when the repo already has an intended pattern.
- If the current implementation conflicts with the documented boundaries, do not silently spread the older pattern further.
- When guidance is incomplete, surface the gap explicitly instead of improvising invisible system rules.

---

# Guidance Context Summary

For non-trivial tasks, before presenting a verification plan or implementing changes, briefly state the active guidance context for the task.

Use this structure:

Guidance context:

- task type:
- primary project boundary:
- relevant repository guidance files:
- existing pattern to follow:
- legacy pattern to avoid (if any):

Keep this concise and specific.

Do not list files that are not materially relevant.

Prefer the smallest set of governing documents over a long inventory of consulted files.

---

# Verification Planning Before Implementation

# Verification Planning Before Implementation

For non-trivial, architecture-sensitive, or boundary-sensitive tasks, perform a short planning step before implementation.

Before implementing, provide:

1. the relevant repository guidance files
2. the change classification (V1, V2, or V3)
3. why that classification applies
4. the planned verification steps
5. whether tests will be added, updated, or deferred
6. any risks, boundary changes, missing project context, or unresolved uncertainties
7. whether the next step is executable from the current repo state

The agent must state this plan explicitly before making code changes.

Do not begin implementation until this planning step is complete.

When the next step depends on runnable project state, confirm that the necessary prerequisites exist in the current repo. This may include scaffolded structure, install and run commands derivable from the repo, required dependencies or configuration, or a runnable environment.

If those prerequisites are missing, do not proceed with abstract implementation steps. Instead, explicitly identify the missing prerequisites and sequence them before implementation work.

Before completing a task, explicitly state:

1. what was verified
2. how it was verified
3. which verification checks were applied

Do not treat verification as implicit.

Escalate to a higher verification level when the task touches:

- authentication or authorization
- persistence or external data access
- routing or request handling
- server/client boundaries
- integrations or external services
- architectural modules
- shared abstractions or reusable infrastructure

---

# Architecture and Boundary Discipline

Respect documented project boundaries.

Do not assume a stack, datastore, auth provider, framework pattern, or integration approach unless it is declared in `docs/project/*`.

When working in a repo cloned from this starter:

- use `docs/project/STACK.md` to determine stack assumptions
- use `docs/project/ARCHITECTURE.md` to determine high-level system structure
- use `docs/project/BOUNDARIES.md` to determine implementation boundaries
- use `docs/project/PROJECT_OVERVIEW.md` to understand product purpose and current repo reality

If the repo does not yet define these clearly, the correct response is to document the missing context, not to backfill it from memory of another project.

---

# Separation of Concerns

Avoid mixing multiple concerns in one file when possible, especially:

- UI rendering and persistence access
- read logic and write logic
- interaction logic and integration logic
- transport concerns and domain logic
- authentication concerns and unrelated data orchestration

When working in an already mixed module, prefer the smallest safe step toward separation rather than a large rewrite unless explicitly requested.

---

# When Adding or Changing Code

Before introducing a new pattern, check whether an existing pattern already exists in the relevant project code and project documents.

Prefer consistency with the intended project architecture over local convenience.

When changing architecture-sensitive code, update the relevant project documentation in the same change set when appropriate.

When a change exposes missing or implicit repo-specific rules, capture them in `docs/project/*` rather than silently encoding them into implementation only.

Do not let repo-specific details drift upward into starter documents unless the change genuinely affects the portable control system itself.

---

# Repo-Specific Injection Rule

Repo-specific details must be declared, not implied.

When new repo-specific guidance is needed, add it to the appropriate file under `docs/project/*`.

Examples include:

- project purpose or scope changes
- stack decisions
- architecture decisions
- implementation boundaries
- migration state or transitional constraints

Do not place repo-specific truth into:

- `docs/starter/*`
- `AGENTS.md`
- `AGENT_RULES.md`

unless the change is about the portable control system itself rather than the current project.

---

# Legacy and Transitional Patterns

Some cloned repos will contain transitional code, legacy patterns, or partially migrated structures.

Rules:

- do not assume legacy patterns are preferred just because they already exist
- do not spread a legacy pattern further unless the task explicitly requires working within it
- prefer the smallest safe change that preserves progress toward documented boundaries
- if a transitional pattern exists, document it in project context rather than normalizing it silently

---

# If Uncertain

If the correct placement, pattern, or boundary is unclear:

- prefer the smallest change that preserves boundary clarity
- state the uncertainty explicitly
- avoid spreading mixed patterns further
- check whether the missing guidance belongs in `docs/project/*`
- if necessary, add or update the relevant project document before proceeding

