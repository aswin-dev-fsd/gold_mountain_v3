# Engineering Core

Use a plan → implement → verify loop.

For meaningful tasks:
- Establish the current architecture and entry points.
- Identify dependencies and likely blast radius.
- Reuse project conventions before inventing new patterns.
- Make the smallest coherent implementation.
- Run targeted checks first, then broader checks when justified.
- Review the final diff for accidental changes, dead code, debug output, and inconsistent naming.

Prefer explicit error handling, deterministic behavior, readable code, and maintainability over cleverness.
