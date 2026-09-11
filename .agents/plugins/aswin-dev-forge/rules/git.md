# Git Hygiene

Before meaningful changes, inspect `git status` and understand existing work.

After changes:
- inspect the diff
- separate unrelated changes
- avoid changing line endings or formatting across unrelated files
- do not reset user changes
- prefer focused commits with clear messages when asked to commit
- inspect staged content before committing
- never commit secrets, local env files, build artifacts, or generated machine-specific state unless the repository explicitly expects them
