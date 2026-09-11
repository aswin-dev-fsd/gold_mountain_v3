# Dependencies

Dependency changes should be deliberate and verified.

- Inspect the current lockfile, package manager, runtime version, and direct dependencies.
- Prefer the latest compatible stable release when the user asks to modernize, but do not blindly upgrade unrelated packages.
- Check release notes and breaking changes for major upgrades.
- Resolve peer dependency and runtime compatibility constraints before editing code around them.
- After upgrades, run install validation, typecheck/lint/tests, and build when relevant.
