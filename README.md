# Route Tracker

### Terminology Consistency

The term "driving-route" must be used consistently for domain concepts.

Do not use the term "route" by itself in a way that could be confused with framework routing.

## Purpose

Route Tracker is an internal tool designed to help an owner manage, view, and work with route-related data.

The system is intentionally simple and focused on real-world workflows, with the flexibility to evolve over time if needed.

---

## Project Intent

This project is currently an internal owner tool.

It is optimized for speed, clarity, and usefulness—not completeness.

Future productization is possible, but not assumed.

---

## Current Status

* single-owner usage
* internal tool (not publicly available)
* early-stage implementation

---

## Core Documents (Control Structure)

This project is guided by a small set of documents:

* `PROJECT_OVERVIEW.md` — purpose, scope, direction
* `STACK.md` — technologies and tooling
* `ARCHITECTURE.md` — system structure
* `BOUNDARIES.md` — implementation rules

### How to Use Them

Before making non-trivial changes:

1. read `PROJECT_OVERVIEW.md` to understand intent
2. read `ARCHITECTURE.md` to understand structure
3. read `BOUNDARIES.md` to understand constraints
4. use `STACK.md` to confirm technology decisions

If code and docs diverge:

* treat docs as the source of truth
* update docs if the system has intentionally changed

---

## Working Approach

All meaningful work follows this flow:

1. Understand
2. Context
3. Plan
4. Implement
5. Verify
6. Capture

Do not skip planning for structural changes.

---

## Architectural Intent (Short Version)

The application is structured around four layers:

* presentation (UI)
* application logic (route rules, transformations)
* data access (reading/writing data)
* integrations (external systems)

These concerns should remain clearly separated.

---

## Key Constraints

* do not couple logic to a specific datastore (JSON, Google Sheets, etc.)
* do not embed business logic inside UI components
* keep integrations separate from core logic
* prefer simple solutions over premature abstraction

---

## Decision Guidelines

When making implementation decisions:

* favor simplicity over flexibility
* keep responsibilities clearly separated
* optimize for current use
* avoid blocking future evolution

If unsure:

choose the option that keeps the system easiest to change later.

---

## Known Tradeoffs

This project intentionally:

* avoids heavy backend infrastructure
* may use simple storage (e.g. JSON, Google Sheets)
* prioritizes speed of iteration over scalability

These are deliberate choices, not oversights.

---

## Extension Guidelines

When adding functionality:

* UI → presentation layer
* route rules → application logic
* storage → data access layer
* external services → integrations

Do not mix responsibilities across layers.

---

## Setup (Initial)

* install dependencies
* run development server

Detailed setup instructions will be added as the project stabilizes.

---

## Notes

This README is intentionally lightweight.

Refer to the core documents for deeper detail.
