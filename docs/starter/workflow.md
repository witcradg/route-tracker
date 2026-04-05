# Workflow

## Project Initialization (Required for New Repos)

When working in a newly cloned repository, complete this setup before beginning any tasks.

1. Remove the `meta/` directory

2. Define project context in `docs/project/*`:
   - PROJECT_OVERVIEW.md
   - STACK.md
   - ARCHITECTURE.md
   - BOUNDARIES.md

3. Update `README.md` to reflect the project:
   - describe the project purpose
   - remove starter-specific language
   - ensure it represents the actual system

Do not begin implementation until minimal project context exists.

---

## Purpose

Define the default workflow for AI-assisted engineering using this starter.

This workflow ensures that:

- work is guided by documentation, not assumptions
- repo-specific context is established before implementation
- changes are planned, verified, and consistent with project boundaries

---

## Core Flow

All non-trivial work follows this sequence:

1. Understand
2. Context
3. Plan
4. Implement
5. Verify
6. Capture

---

## Step 1 — Understand

Clarify the task before acting.

- What is being asked?
- Is this a bug, feature, refactor, or investigation?
- What part of the system does it affect?

Do not begin implementation yet.

---

## Step 2 — Context

Load the minimum required context.

Always read:

- `README.md`
- `AGENT_RULES.md`

Then read relevant files from:

- `docs/project/*` (source of truth)
- `docs/starter/*` (process guidance)

If required context is missing:

- do not guess
- identify what is missing
- update the appropriate file under `docs/project/*`

---

## Step 3 — Plan

For non-trivial work, create a plan before implementing.

Include:

### Guidance Context

- task type:
- primary project boundary:
- relevant docs:
- existing pattern to follow:
- legacy pattern to avoid (if any):

### Execution Readiness

Before finalizing the plan, confirm that the next steps can be executed from the current repo state.

Check:

- does the required scaffold exist?
- are install and run commands derivable from the repo?
- are required dependencies/configs present?
- is the environment runnable if the next step depends on it?

If prerequisites are missing:

- do not proceed with abstract planning
- explicitly identify the missing prerequisites
- sequence them before implementation work

### Verification Plan

- change classification (V1 / V2 / V3)
- why this classification applies
- verification steps
- test impact (add / update / none)
- risks or uncertainties

Do not begin implementation until this is clear.

---

## Step 4 — Implement

Follow these rules:

- respect project boundaries defined in `docs/project/*`
- do not introduce new patterns without justification
- keep changes small and scoped
- avoid mixing concerns (UI, data, integration, etc.)
- prefer consistency over convenience

If new repo-specific knowledge is discovered:

- update `docs/project/*` first
- then continue implementation

---

## Step 5 — Verify

Verify the change according to the plan.
Verification must be explicitly stated before completing a task.
Reference relevant checks from docs/starter/verification.md.

Examples:

- manual testing
- existing test suite
- new tests if required

Confirm:

- behavior matches expectations
- boundaries are not violated
- no unintended side effects were introduced

---

## Step 6 — Capture

After completing the work:

- update relevant project documentation if needed
- ensure decisions are recorded (architecture, boundaries, etc.)
- optionally create or update a work loop in `docs/work-loops/`

Work loops are especially useful for:

- multi-step tasks
- debugging sessions
- architectural changes

---

## Workflow Rules

### 1. Docs-first

Do not implement before understanding the system through documentation.

---

### 2. No assumption-driven development

If something is unclear:

- do not guess
- document or clarify first

---

### 3. Explicit context over implicit knowledge

Do not rely on:

- memory of other repos
- prior patterns
- “this is how it’s usually done”

Always rely on documented project context.

---

### 4. Small, reversible steps

Prefer:

- incremental changes
- clear checkpoints
- easy rollback

---

### 5. Respect the control system

- `AGENTS.md` defines how to operate
- `AGENT_RULES.md` defines what cannot be violated
- this workflow defines how work progresses

---

## When to Use a Work Loop

Create a work loop when:

- the task spans multiple steps
- debugging requires iteration
- architecture is being explored or changed
- the path forward is uncertain

File location:

- `docs/work-loops/WL-YYYY-MM-DD-<slug>.md`

---

## Summary

- Understand before acting
- Load context before planning
- Plan before implementing
- Verify before closing
- Capture decisions for future work

This workflow is designed to prevent:

- assumption-driven errors
- architectural drift
- undocumented decisions
- uncontrolled complexity growth
