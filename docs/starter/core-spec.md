# Core Spec — AI Engineering Starter

## Purpose

Define a consistent repository structure that supports both human development and AI-assisted workflows.

This model separates project definition from AI execution to maintain clarity, consistency, and control.

## Control System (Conceptual Layers)

These layers define how the AI system operates and enforces behavior.
They are conceptual and govern how work is performed.

This system is composed of five distinct layers:

- `AGENTS.md`  
  Defines how the AI agent should think, load context, and approach work.

- `AGENT_RULES.md`  
  Defines non-negotiable constraints and behaviors that must not be violated.

- `docs/starter/*`  
  Defines how the system works, including workflow, verification, and context injection.

- `docs/project/*`  
  Defines what this specific project is, including purpose, stack, architecture, and boundaries.  
  This is the source of truth for all repo-specific decisions.

- `meta/`  
  Contains system design, audits, and starter development material.  
  This layer is not part of the active system and must not be used as project guidance.

---

## Repository Structure

This defines how the repository is physically organized.
These are the concrete files and directories used to implement the system.

### 1. README.md

Human entry point.

Provides:

- quick orientation
- project intent
- how to begin working in the repo

---

### 2. docs/project/*

Project truth.

Defines:

- purpose (`PROJECT_OVERVIEW.md`)
- technologies (`STACK.md`)
- system structure (`ARCHITECTURE.md`)
- implementation rules (`BOUNDARIES.md`)

These documents are:

- human-readable
- stable
- the source of truth for the project

---

### 3. AGENTS.md

Agent bootstrap.

Defines:

- what documents must be read first
- how the agent should load context
- which project docs are authoritative

Ensures AI systems operate with the correct understanding of the project.

---

### 4. AGENT_RULES.md

Agent behavior constraints.

Defines:

- required workflows (plan before implement, verify changes, etc.)
- coding discipline
- system-level rules that cannot be violated

This is the primary enforcement layer for AI-assisted development.

---

### 5. docs/starter/*

Portable control system.

Provides:

- workflow (`workflow.md`)
- verification model (`verification.md`)
- repo-specific injection model
- this core specification

This layer:

- is shared across all projects
- must remain free of project-specific logic

---

### 6. meta/

Starter design and analysis layer.

Contains:

- portability decisions
- audits (e.g. UFit-specific injection audit)
- starter development notes

This layer:

- is not part of the active control system
- must not be used as project guidance
- is removed when cloning into a real project

---

## Repo-Specific Injection

Repo-specific context is introduced only through:

- `docs/project/*`

This ensures:

- the control system remains portable
- all project truth is explicit
- architecture and stack do not leak into starter documents

See:

- `docs/starter/repo-specific-injection-model.md`

---

## Key Principles

### Separation of Concerns

- project docs define the system
- agent files control behavior
- starter docs provide reusable control logic

These layers must remain distinct.

---

### Project Docs Are the Source of Truth

- `docs/project/*` defines intent, structure, and constraints
- AI systems must treat these as authoritative
- if code and docs diverge, resolve the discrepancy intentionally

---

### Enforcement Is Behavioral, Not Mechanical

There is no hard enforcement layer.

Instead:

- `AGENTS.md` ensures correct context loading
- `AGENT_RULES.md` constrains behavior
- `docs/starter/*` defines workflow and expectations

Consistency is achieved through structured usage.

---

## Anti-Patterns

Avoid:

- collapsing all guidance into `README.md`
- turning project docs into agent instruction files
- omitting `AGENTS.md` (leads to inconsistent AI behavior)
- mixing project-specific logic into `docs/starter/*`
- duplicating rules across multiple layers
- relying on implicit or assumed architecture

---

## Minimal Required Structure

```text
README.md
AGENTS.md
AGENT_RULES.md

docs/
  project/
    PROJECT_OVERVIEW.md
    STACK.md
    ARCHITECTURE.md
    BOUNDARIES.md
