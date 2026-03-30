# Work Loop: Data Ingestion Plan

## Date

2026-03-29

## Status

Phase 3 in progress; repo normalized to root-level structure, with lint configuration follow-up noted

## Objective

Make the sample driving-route data available to application logic without coupling the application to a temporary source format.

## Reassessment Update

This work loop was reassessed on 2026-03-30 after repository guidance changed.

The earlier plan is no longer treated as authoritative by default.

The current plan below reflects:

- the updated execution-readiness requirement from `docs/starter/workflow.md`
- the verification model from `docs/starter/verification.md`
- the stack truth declared in `docs/project/STACK.md`
- the current checked-in repo state

## Current Context

- Project context docs are now in place under `docs/project/*`.
- A local TSV source file exists at `data/sample-data.tsv`.
- A preset is expected to exist conceptually, but from the current repo state there is no verifiable application scaffold yet.
- The stack is not installed.
- There is currently no confirmed runnable environment.
- This arrangement is temporary.
- The likely future read source is either Google Sheets or Supabase.
- Project boundaries require application logic to remain independent of a specific storage format or external service.

## Repo State Assessment

Based on the repo as it exists now:

- project docs exist
- the sample TSV exists
- `.env.local` exists
- no `package.json` is present
- no lockfile is present
- no `tsconfig.json` is present
- no `next.config.*` file is present
- no `app/`, `src/`, `pages/`, or `components/` application directories are present
- no installed dependencies are present
- only documentation and `data/` artifacts are present at the repo root

Conclusion:

- the environment cannot currently be assumed runnable
- test data setup should not begin until the actual application scaffold and installable stack are present and verified

## Current Environment Outcome

Verified from checked-in repo state:

- the preset scaffold is not present in the working tree
- there is no dependency manifest to install from
- there is no baseline run command available to verify

Result:

- environment/setup work cannot continue past scaffold verification
- data-ingestion work remains blocked behind scaffold generation

## Current Task Executability

This reassessment task is executable from the current repo state because it is documentation-only work.

It requires:

- reading repository guidance
- checking the current working tree
- correcting the work loop to match documented truth

It does not require:

- a generated Next.js scaffold
- installed dependencies
- a runnable development server
- executable data-loading code

By contrast, any implementation task that introduces application code, data-access code, or runtime verification is not executable yet because the stack files required by `docs/project/STACK.md` are still absent.

## Corrected Planning Outcome

The next executable step for implementation is not data shaping.

The next executable implementation step is scaffold/setup work that produces the minimal runnable Next.js 16 / TypeScript / npm application baseline declared in `docs/project/STACK.md`.

Until that scaffold exists, data-ingestion implementation remains blocked.

## Updated Plan

### Phase 1: Documentation and planning

1. Keep this work loop aligned with current repo truth.
2. Treat data-ingestion work as blocked until scaffold/setup prerequisites are complete.

### Phase 2: Required setup prerequisites

3. Generate the minimal application scaffold required by `docs/project/STACK.md`.
   Minimum expected files:
   - `package.json`
   - npm lockfile
   - `tsconfig.json`
   - Next.js config
   - `app/` entry structure
   - default npm scripts

4. Install dependencies from the scaffolded manifest.

5. Verify that at least one baseline project command succeeds from the current repo state.
   Minimum target:
   - one of `npm run dev`, `npm run build`, or another scaffolded baseline command

## Phase 2 Progress

### Step 1: Minimal scaffold generated

Completed on 2026-03-30.

Added the minimum baseline files needed to match the documented stack:

- `package.json`
- TypeScript config
- Next.js config
- App Router entry files
- Tailwind setup
- ESLint config

What changed:

- the repo now contains a minimal Next.js 16 / TypeScript / npm scaffold
- the application entry structure now exists under `app/`
- baseline npm scripts are now declared in the manifest

Notes:

- deferred items were not added
- no database, auth, testing framework, analytics, or UI component library was introduced
- dependency installation and runnable verification are still pending

### Step 2: Dependencies installed

Completed on 2026-03-30.

What changed:

- `npm install` completed successfully
- `package-lock.json` was generated
- the baseline dependency tree is now present in `node_modules/`

Execution notes:

- installation succeeded with an engine warning because the current environment is running Node `24.14.1`
- `docs/project/STACK.md` still declares Node `22.x` as the target runtime
- this did not block installation, but it should be treated as an environment mismatch during later verification work

### Step 3: Baseline command verified

Completed on 2026-03-30.

What changed:

- `npm run build` succeeded for the minimal scaffold
- Next.js generated the initial build output successfully
- Next.js updated `tsconfig.json` to its required defaults during verification

Execution notes:

- the first sandboxed build failed with a Turbopack permission error while processing CSS
- rerunning the build outside the sandbox succeeded
- this indicates the earlier failure was environment-related rather than a scaffold defect

Verification outcome:

- at least one baseline project command now succeeds from the repo state
- the repo has cleared the setup prerequisite that previously blocked application-level work

### Phase 3: Data-ingestion design and implementation

6. Define the canonical driving-route record shape independent of TSV and future providers.
7. Define source-to-domain mapping and normalization rules for `data/sample-data.tsv`.
8. Introduce the data-access boundary inside the scaffolded app so application logic reads normalized records rather than source rows.
9. Use normalized JSON in `data/` as a temporary runtime artifact only if the scaffolded implementation still supports that choice cleanly.

### Step 6: Canonical driving-route contract defined

Completed on 2026-03-30.

What changed:

- added an application-level contract module for driving-route records
- defined a storage-agnostic record shape independent of TSV column names
- represented machine inventory and quarterly totals as normalized nested structures

Boundary notes:

- the contract lives outside `app/` so presentation does not own business data shape
- the contract does not include TSV parsing rules, sheet column names, or provider-specific metadata
- source-to-domain mapping remains deferred to the next step

Verification plan for this step:

- run a build to confirm the contract compiles in the current repo state
- confirm the contract remains application-facing rather than source-facing

### Structural normalization: `src/` removed from active project code

Completed on 2026-03-30.

What changed:

- moved the existing application contract module from `src/application/` to root-level `application/`
- kept the root-level `app/` directory as the App Router entry
- confirmed no `tsconfig` alias update was required because the repo already uses root-relative `@/*`

Boundary notes:

- no presentation code was moved or reorganized
- no data-access behavior changed
- the move preserved the separation between `app/` and application-level modules

Verification plan for this step:

- confirm `src/` no longer contains project code
- run minimal verification commands after removing the empty directory

Verification outcome:

- `src/` was removed successfully after moving the only remaining project module to `application/`
- root-level `app/` remains the active Next.js App Router entry
- `npm run build` succeeded after the move
- `npm run lint` failed due to a circular-structure error in the current ESLint configuration rather than a path-resolution or App Router issue

### Phase 4: Verification

10. Re-run execution-readiness checks after scaffold/setup.
11. Verify the scaffolded app still runs after data-loading changes.
12. Verify normalized records are produced consistently and consumed without TSV-specific assumptions.

## Verification Classification For This Reassessment

- Classification: V1
- Reason: this change only corrects planning and documentation; it does not modify executable application behavior
- Tests: none added or updated
- Checks applied:
  - execution readiness check
  - documentation consistency check
  - repo-state-to-plan alignment check

## Recommendation

Use the TSV file as a bootstrap input, but do not make raw TSV the application-facing contract.

Short term:

- import and normalize the TSV into a local JSON dataset
- let application logic read normalized records, not TSV rows

Long term:

- treat local JSON as a temporary adapter
- preserve a storage-agnostic contract so the read source can later switch to Google Sheets or Supabase without rewriting business logic

## Immediate Next Steps Reassessed

The immediate next step for implementation is not data-ingestion work.

The immediate next step is to complete and verify the executable application baseline.

In practical terms:

1. ensure the preset-generated application files actually exist in the repo
2. install the stack dependencies
3. verify there is a baseline runnable application before introducing test data setup

Only after those prerequisites are complete should data ingestion work begin.

## Next Action

Generate the application scaffold into the repo root so the working tree contains, at minimum:

- `package.json`
- an npm lockfile
- framework config
- TypeScript config
- application source directory

This is the minimum concrete action required before dependency installation or run-command verification can happen.

## Execution Prerequisites Before Test Data Setup

The following must be completed first:

1. application scaffold exists in the repo
2. package manager and dependency manifest are present
3. dependencies are installed successfully
4. at least one baseline project command is identified from the manifest
5. the baseline app is verified runnable from repo state

Until those are true:

- there is no safe location to place data access code
- there is no verified runtime path for loading data
- there is no meaningful application-level verification path for test data

## Why This Approach

### Why not raw TSV as the runtime source

- TSV parsing would leak source-specific concerns into runtime behavior
- the file already contains formatting issues that require normalization
- raw headers are not suitable as a stable domain contract

### Why not Google Sheets or Supabase first

- the project is intentionally lightweight at this stage
- adding a live source now would introduce integration complexity before the domain model is stable
- the repo docs already point toward simple local storage first, with future evolution kept open

### Why JSON as the temporary runtime format

- it is easy to load locally
- it creates a stable shape for application logic
- it keeps parsing and normalization in the data access layer
- it can later be replaced by another provider with minimal application change

## Proposed Data Direction

### Source artifacts

- raw input: `data/sample-data.tsv`
- temporary runtime data: normalized JSON file in `data/`

### Stable contract

Application logic should consume normalized driving-route records through a data-access boundary.

The application should not depend on:

- TSV column names
- Google Sheets column layout
- Supabase table structure
- source-specific parsing rules

## Proposed Layer Ownership

### Data access layer owns

- reading source files or external sources
- parsing TSV
- normalizing values
- validating required fields
- mapping source fields into the domain shape

### Application logic owns

- filtering
- transformation
- validation rules tied to business meaning
- workflows over normalized driving-route records

### Presentation owns

- displaying records
- collecting user input
- invoking application workflows

## Updated Step-by-Step Plan

### Environment / Setup Steps

1. Confirm the preset output is present in the working tree.
   Minimum expectation:
   - dependency manifest
   - framework config
   - application directory structure

2. If preset output is not present, complete the preset/bootstrap step before touching data ingestion work.

3. Install the stack dependencies using the package manager defined by the scaffold.

4. Identify the baseline project commands from the dependency manifest.
   Minimum commands to identify:
   - install command
   - development or build command
   - test or lint command if present

5. Verify the baseline app environment.
   At minimum, confirm one application command succeeds from repo state.

### Implementation Steps

6. Define the canonical driving-route record shape independent of TSV, Google Sheets, and Supabase.

7. Define the source-to-domain mapping from TSV columns to normalized fields.

8. Define normalization rules for dates, currency, whitespace, booleans, blanks, and notes.

9. Choose the temporary runtime artifact.
   Recommendation:
   - raw TSV remains source input
   - normalized JSON becomes the temporary runtime dataset

10. Add the data-access boundary in the eventual app structure so application logic reads normalized driving-route records rather than source-specific rows.

11. Keep the provider design storage-agnostic so the read source can later move to:
   - Google Sheets
   - Supabase

### Verification Steps

12. Verify the scaffolded app still runs after any data-related changes are introduced.

13. Verify data-load behavior with the sample file.
   Minimum checks:
   - expected columns are recognized
   - malformed values fail clearly
   - normalized records are produced consistently

14. Verify application logic consumes normalized records without TSV-specific assumptions.

15. Verify the temporary JSON-backed approach does not block a future provider swap to Google Sheets or Supabase.

## Implementation Guidance

- keep the bootstrap process simple
- avoid introducing integration code before it is needed
- avoid hard-coding TSV specifics outside the data access layer
- treat local JSON as temporary, not foundational
- optimize for a future source swap with minimal application rewrite

## Recommended Near-Term Decision

Proceed in this order:

1. verify or complete the preset scaffold
2. install and verify the stack
3. only then begin test data setup
4. use raw TSV as input and normalized JSON as the temporary runtime format
5. keep the application-facing contract storage-agnostic from the beginning

## Open Questions

- What is the minimum required record identity for a driving-route entry?
- Should coin values be stored as numbers, cents, or nullable strings during the first pass?
- Should service dates be normalized to ISO strings?
- Which fields are essential for initial UI and workflow support?
- Will the future Google Sheets or Supabase source become the system of record, or only a sync target?

## Exit Criteria

This work loop is ready to move into implementation when:

- the preset scaffold is present in the repo
- the stack is installed
- a baseline application command has been verified
- the canonical driving-route shape is agreed
- the source-to-domain mapping is documented
- normalization rules are defined
- the temporary JSON-backed provider approach is accepted
