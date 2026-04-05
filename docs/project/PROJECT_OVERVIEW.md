# Project Overview

## Terminology

In this project:

- **driving-route** refers to a geographic route used to visit physical business locations
- this is the core domain concept of the application

This is distinct from:

- Next.js routes
- application routing
- URL or page routing

To avoid confusion, the term "route" should not be used by itself when referring to the domain model.

## Purpose

Route Tracker is an internal tool designed to help an owner manage, view, and work with route-related data.

The initial goal is to support practical, real-world workflows with minimal overhead.

## Current Scope

- single-owner usage
- internal tool (not publicly available)
- focused on speed, clarity, and usefulness
- no authentication or multi-user requirements at this stage

## Core Capabilities (Initial Direction)

The application will likely support:

- viewing route data
- organizing and reviewing routes
- basic transformations or filtering
- simple workflows around route management
- optional export or sync capabilities

## Operating Principles

- build only what is needed now
- keep the system simple and understandable
- avoid premature abstraction
- structure the code so it can evolve cleanly

## Future Potential

This project may evolve into:

- a team-facing tool
- a more structured internal system
- a publicly available product

The current implementation should not assume this future, but should avoid blocking it.

## Non-Goals (for now)

- multi-user support
- complex permissions or roles
- production-grade scaling concerns
- heavy infrastructure or backend services

These may be introduced later if needed.
