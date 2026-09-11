# React / Next.js / TypeScript

When the project uses React or Next.js:

- Inspect `package.json`, framework version, routing style, tsconfig, lint config, and existing component conventions first.
- Preserve the existing App Router/Pages Router choice; do not migrate architecture without an explicit reason.
- Respect server/client boundaries. Add client components only when browser state, effects, or event handlers actually require them.
- Prefer framework-native patterns for routing, data fetching, caching, metadata, and image/font handling when compatible with the installed version.
- Keep components focused and avoid unnecessary state, effects, prop drilling, or duplicated fetching.
- Use strict TypeScript types; do not silence errors with `any`, `@ts-ignore`, or broad casts unless there is a demonstrated reason.
- Verify framework APIs against current official documentation when version-sensitive behavior is involved.
