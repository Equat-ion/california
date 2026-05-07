# California Monorepo

This repository is organized as a monorepo with two workspace roots:

- `apps/` for deployable applications
- `packages/` for shared libraries and utilities

## Workspace managers

- Bun manages JavaScript and TypeScript workspaces from the repository root.
- uv manages Python workspaces from the repository root.

## Current apps

- `apps/android` - Expo mobile app
- `apps/api` - FastAPI service

## Suggested commands

```bash
bun install
uv sync
```