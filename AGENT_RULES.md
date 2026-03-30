# AGENT_RULES.md

This file defines non-negotiable rules for AI agents working in this repository.

These rules take precedence over task-level instructions when conflicts arise.

---

## Summary Principles

- Keep control-system guidance separate from repo-specific context
- Do not let project-specific details drift into starter documents
- Do not treat meta as project guidance
- Prefer explicit documentation over assumptions
- Keep changes small, scoped, and verifiable
- Document missing architecture instead of guessing

---

# Core Rules

## 1. Documentation is the source of truth

- Project documentation under `docs/project/*` defines the authoritative truth for this repository.
- Starter documentation under `docs/starter/*` defines process, not project reality.
- Do not infer architecture, stack, or boundaries from starter documents.
- When behavior or architecture changes, update the relevant documentation in the same change.

---

## 2. Do not invent or assume missing context

- Do not invent requirements.
- Do not assume architecture, stack, or patterns not explicitly documented.
- Do not reuse assumptions from other repositories.

If required context is missing:

- explicitly state what is missing
- update or create the appropriate file under `docs/project/*`
- proceed only after context is clarified or documented

---

## 3. Respect the repository guidance hierarchy

When making decisions, follow this order of authority:

1. `AGENT_RULES.md`
2. `AGENTS.md`
3. project documentation (`docs/project/*`)
4. starter documentation (`docs/starter/*`)
5. task instructions

If instructions conflict:

- prefer the most specific applicable guidance
- prefer project documentation over starter documentation for repo-specific truth
- do not override rules with assumptions

---

## 4. Do not perform speculative implementation

- Do not modify code without a clear, justified task.
- Do not introduce new patterns without confirming they align with documented architecture.
- Do not refactor broadly unless explicitly requested or clearly required by boundaries.

Prefer:

- small, scoped, reversible changes
- explicit reasoning before implementation

---

## 5. Enforce separation of concerns

Do not mix:

- UI logic and persistence logic
- read logic and write logic
- integration logic and domain logic
- transport concerns and core application logic

When encountering mixed modules:

- prefer the smallest safe step toward separation
- do not expand the mixed pattern further

---

## 6. Repo-specific details must be declared

Repo-specific details must not be implied or inferred.

When new repo-specific knowledge is required, it must be added to:

- `docs/project/PROJECT_OVERVIEW.md`
- `docs/project/STACK.md`
- `docs/project/ARCHITECTURE.md`
- `docs/project/BOUNDARIES.md`

Do not encode repo-specific behavior only in code.

Do not place repo-specific truth into:

- `docs/starter/*`
- `AGENTS.md`
- `AGENT_RULES.md`

---

## 7. Meta directory is not authoritative

The `meta/` directory contains starter-development material.

- Do not use `meta/` as implementation guidance
- Do not treat it as project truth
- It must be ignored in cloned project repositories

---

## 8. When uncertain

If the correct approach is unclear:

- do not guess
- state the uncertainty explicitly
- identify what documentation is missing
- update the appropriate project document if needed
- choose the smallest safe step that preserves system clarity
