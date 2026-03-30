# Boundaries

### Terminology Consistency

The term "driving-route" must be used consistently for domain concepts.

Do not use the term "route" by itself in a way that could be confused with framework routing.

## Purpose

Define the implementation rules that keep the project maintainable as it evolves.

## Core Principle

Build for the current internal owner use case without letting temporary shortcuts become permanent architectural drift.

## Boundary Rules

### 1. Presentation does not own business logic

UI components and pages should not become the long-term home of route rules, validation, normalization, filtering, or transformation logic.

### 2. Presentation does not own storage logic

Pages and components should not directly implement datastore-specific reads, writes, or sync behavior.

### 3. Core logic does not depend on one storage format

Route logic should not assume JSON, Google Sheets, or any other single storage mechanism as part of the business rules.

### 4. Integrations stay at the edge

Map APIs, export utilities, sync processes, and other third-party connections should be isolated from the core application logic.

### 5. Internal-tool shortcuts must not block future expansion

The project does not need public-product complexity today.

However, implementation choices should avoid making future authentication, multi-user support, or broader distribution unnecessarily difficult.

### 6. Prefer simple structure over premature abstraction

Keep the implementation lightweight.

Do not introduce extra layers unless they create a real separation of responsibility.

## Anti-Patterns

Avoid:

- route-processing logic embedded deeply in React components
- direct Google Sheets or datastore logic inside UI files
- duplicated validation logic across screens
- sync/export code becoming the main application logic
- hard-coded assumptions that only work for one person forever
