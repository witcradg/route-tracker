# Verification

## Purpose

Define how changes are verified in this system.

Verification ensures:

- changes behave as intended
- system boundaries are preserved
- unintended side effects are avoided
- decisions remain consistent with project documentation

---

## Core Verification Model

All non-trivial work must include verification.

At minimum, confirm:

- the change works as expected
- no existing behavior is broken
- project boundaries are respected
- the implementation matches documented intent

Verification should be:

- proportional to the risk of the change
- explicit (not assumed)
- grounded in actual system behavior

---

## Common Verification Checks

These are reusable checks that can be applied depending on the task.

Select the relevant checks based on the type and risk of the change.

---

### Functional Check

- Does the feature or fix behave correctly?
- Does it match the task requirements?

---

### Regression Check

- Did anything previously working break?
- Are related flows still functioning?

---

### Boundary Check

- Does the change respect `docs/project/BOUNDARIES.md`?
- Are concerns (UI, data, integration) properly separated?

---

### Documentation Check

- Do `docs/project/*` still reflect reality?
- Were any new decisions captured?

---

### Simplicity Check

- Is the solution unnecessarily complex?
- Could this have been done with less surface area?

---

### Execution Readiness Check

Use this when a planned step depends on a runnable environment or existing scaffold.

Ask:

- does the required scaffold or structure exist?
- are install and run commands derivable from the repo?
- are required dependencies or configuration present?
- is the environment runnable if the next step depends on it?

If not:

- identify the missing prerequisite
- update the plan to include it before implementation

---

## UI Consistency Check

Run this when working on UI or after multiple UI changes.

Review for repeated or drifting implementations of:

- buttons
- inputs
- dialogs
- dropdowns
- tabs
- toasts
- cards or panels
- loading and empty states

---

### Repetition

- Have we implemented the same pattern more than twice?
- Are similar elements being recreated instead of reused?

---

### Drift

- Are similar UI elements inconsistent in spacing, sizing, or behavior?
- Are there multiple versions of the same component type?

---

### AI Workflow Cost

- Have I had to repeatedly tell the agent to match an existing pattern?
- Has the agent generated near-duplicate UI components?
- Are UI consistency issues recurring during review?

---

### Change Cost

- Would a shared change require touching multiple files?
- Are patterns difficult to update globally?

---

### Trigger for Standardization

Move toward shared components or a UI layer (for example, shadcn/ui) when two or more are true:

- the same pattern has been implemented three or more times
- near-duplicate UI components exist
- UI consistency corrections recur during review
- shared changes require multiple edits
- ad hoc shared components are starting to appear

---

## How to Use This File

- Use relevant checks during Step 5 — Verify
- Do not run every check every time
- Select checks based on task type and risk

This file defines patterns, not rigid rules.
