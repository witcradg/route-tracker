# Architecture

## Purpose

Describe the intended structure of the application so the project can evolve without unnecessary drift.

## Operating Model

This project is currently an internal owner tool.

The architecture should support fast iteration and low operational overhead while preserving clean seams for future expansion if the tool later evolves into a broader product.

## System Shape

The application is organized into four primary layers:

- presentation
- application logic
- data access
- integrations

### Presentation

The UI is responsible for rendering views, forms, route displays, tables, and user interactions.

Presentation code should remain focused on display and interaction behavior.

### Application Logic

Application logic is responsible for route-related rules such as transformation, validation, filtering, normalization, and workflow behavior.

This logic should not be tied directly to React components or datastore implementation details.

### Data Access

Data access is responsible for reading and writing project data.

The initial datastore may be simple and low-overhead, including JSON-based storage or imported/exported files.

The storage model may later evolve toward Google Sheets or other systems.

### Integrations

Integrations are optional edge capabilities such as map providers, export utilities, external sync, or future service connections.

These should remain separate from core application logic.

## Architectural Direction

The project should be built for current internal use, but structured so future changes remain possible without large rewrites.

In particular, the system should preserve clean seams around:

- storage changes
- integrations
- authentication and user model expansion
- possible future productization

## Evolution Notes

This is not intended to be a full enterprise architecture document.

It is a lightweight structural guide for building the project cleanly at its current stage.
