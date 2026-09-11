# Aswin Dev Forge

A verification-first Antigravity 2.0 plugin tuned for full-stack development.

## Design goals

- Conservative by default: inspect first, plan before significant changes, ask before destructive or security-sensitive actions.
- Verify instead of assuming: run the narrowest meaningful checks, then broader checks when warranted.
- Protect user work: never overwrite unrelated work, secrets, generated files, or configuration without explicit reason.
- Current-information bias: for framework/API/tool behavior that may have changed, prefer current official documentation and authoritative sources.
- Stack-agnostic core with first-class React/Next.js/TypeScript behavior.
- Clear slash-command workflows plus reusable specialist agents.

## Included

### Rules
- safety-first
- engineering-core
- nextjs-react
- security
- testing
- git
- web-research
- ui-ux-performance
- dependencies

### Skills / slash commands
- `/plan-feature`
- `/implement-feature`
- `/debug`
- `/code-review`
- `/security-audit`
- `/test-fix`
- `/frontend-ui`
- `/backend-api`
- `/dependency-modernize`
- `/research-official`
- `/git-cleanup`
- `/release-check`
- `/performance-audit`
- `/refactor-safely`
- `/explain-code`

### Custom agents
- architect
- debugger
- security-reviewer
- frontend-engineer
- backend-engineer
- qa-engineer
- code-reviewer
- research-engineer

### MCP
The bundled `mcp_config.json` contains only the verified GitHub remote MCP endpoint and Microsoft Playwright MCP. Context7 is intentionally documented as an optional add-on rather than guessed into the bundle; add it through Antigravity's MCP Store when available.

## Workspace installation

For Antigravity workspace scope, copy this entire folder to:

`.agents/plugins/aswin-dev-forge/`

Then restart/reload Antigravity so it rescans customizations.

## Global installation later

For the desktop plugin location documented by Google, place it under:

`~/.gemini/config/plugins/aswin-dev-forge/`

Keep a workspace-specific copy when you want project-local variations. Antigravity also supports workspace/global skills and agents independently of plugins.

## MCP safety note

The plugin does not create GitHub tokens or secrets. Authenticate GitHub through Antigravity's MCP flow when prompted. Playwright uses `npx @playwright/mcp@latest`; Node.js is required.

## Hooks

Hooks are deliberately not enabled in v1. A conservative workflow should prove the project-specific commands before enforcing automatic post-tool actions. See `hooks.example.json` for the recommended pattern to add later.
