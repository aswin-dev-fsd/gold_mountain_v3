# Testing

Use the smallest sufficient verification set first.

Typical order:
1. targeted test for the changed behavior
2. typecheck and lint when relevant
3. broader unit/integration/e2e suite when the change has wider impact
4. build when packaging, framework configuration, or production behavior is affected

When a test fails:
- reproduce it
- identify the first meaningful failure
- fix the root cause
- rerun the focused test
- rerun impacted broader checks

Do not weaken or delete tests merely to obtain a green result.
