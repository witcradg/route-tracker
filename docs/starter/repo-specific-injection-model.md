# Repo-Specific Injection Model

## Purpose

Define how repo-specific context is introduced into a repository cloned from this starter, without polluting the portable control system.

This model ensures that:

- the control system remains stable and reusable across repos
- repo-specific details are explicitly declared, not implicitly inferred
- architecture, stack, and constraints do not drift into starter documents

---

## Core Principle

Repo-specific details must be **declared, not implied**.

All repo-specific truth must live in `docs/project/*`.

---

## Injection Layers

Repo-specific context enters the system through four defined layers.

### 1. Project Overview

File:
- `docs/project/PROJECT_OVERVIEW.md`

Defines:
- what the project is
- its purpose and scope
- current state (early, stable, migrating, etc.)

This is the highest-level context for all work.

---

### 2. Stack

File:
- `docs/project/STACK.md`

Defines:
- frameworks and runtime
- package manager
- data stores
- authentication systems
- external services and integrations
- scaffold-relevant defaults and deferred decisions

No stack assumptions should exist outside this file.

This file must be specific enough to support not only reasoning about the system, but also initial scaffold and setup decisions when project creation is still in progress.

---

### 3. Architecture

File:
- `docs/project/ARCHITECTURE.md`

Defines:
- system structure
- data flow patterns
- major modules and responsibilities

This replaces any implicit architectural assumptions.

---

### 4. Boundaries

File:
- `docs/project/BOUNDARIES.md`

Defines:
- rules governing implementation
- separation of concerns
- allowed and disallowed patterns

Examples:
- where data access should live
- how reads vs writes are handled
- how integrations are structured

---

## Injection Process

When starting a new repo:

1. Clone the starter repository
2. Remove the `meta/` directory
3. Initialize `docs/project/*`:
   - define project purpose
   - define stack
   - define architecture
   - define boundaries
4. Update `README.md` to reflect the actual project
5. Begin implementation only after minimal context exists

---

## Adding New Repo-Specific Context

When new information is required:

- do not infer or assume
- do not encode it only in code
- do not place it in starter documents

Instead:

1. Identify which layer the information belongs to
2. Update the appropriate file under `docs/project/*`
3. Continue work using that declared context

Repo-specific context must be sufficient not only for reasoning, but also for scaffold and setup decisions when project creation is still in progress.

---

## Anti-Patterns (Disallowed)

### 1. Starter Pollution

Do not place repo-specific details in:

- `docs/starter/*`
- `AGENTS.md`
- `AGENT_RULES.md`

---

### 2. Implicit Context

Do not:

- assume stack based on prior repos
- assume architecture from similar projects
- infer boundaries from existing code alone

---

### 3. Code-Only Truth

Do not:

- encode important architectural decisions only in implementation
- rely on code as the only source of truth

All meaningful decisions must be reflected in `docs/project/*`.

---

### 4. Meta Leakage

Do not:

- use `meta/` as project guidance
- rely on starter design notes for implementation decisions

---

## Relationship to Control System

The control system:

- defines how work is performed
- enforces documentation-first behavior
- prevents assumption-driven development

The injection model:

- defines how repo-specific truth enters the system
- ensures that truth is explicit, structured, and maintainable

---

## Evolution Over Time

As the project evolves:

- update `docs/project/*` to reflect current reality
- capture architectural changes explicitly
- document migrations and transitional states

Do not allow:

- outdated documentation to persist
- implementation to diverge from documented boundaries
- repo-specific rules to migrate into starter documents

---

## Summary

- Control system is portable and stable
- Repo-specific context is injected through `docs/project/*`
- All assumptions must be made explicit before implementation
- Repo-specific context must support both reasoning and setup
- The system prevents drift by separating process from truth
