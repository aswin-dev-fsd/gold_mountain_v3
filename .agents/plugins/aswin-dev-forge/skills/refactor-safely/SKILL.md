---
name: refactor-safely
description: Refactors code with strict behavior preservation, incremental verification, and diff hygiene.
---

# Refactor Safely

Define the invariant behavior first. Refactor in small steps. Keep public interfaces stable unless requested. Run focused checks after each meaningful step and inspect the final diff for semantic drift.
