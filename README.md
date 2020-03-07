# LabelSync

### Usage

1. Edit labels inside `labelsync.ts`
2. Commit and push on `master` branch (husky pre-commit script runs to update `labelsync.yml`)

### Development

- This repo relies on https://github.com/prisma-labs/prisma-labs-labelsync as a git submodule.
- Changing the common labels should be done there. Then come back here and run `yarn sync`.

### How it works

- We have [LabelSync Manager](https://label-sync.com/) [GitHub App](https://github.com/apps/labelsync-manager) built by [@maticzav](https://github.com/maticzav) [installed on our GitHub org](https://github.com/organizations/prisma-labs/settings/installations/7137275).
- It monitors this specially named repo and applies all changes detected to `labelsync.yml` on `master` branch.
