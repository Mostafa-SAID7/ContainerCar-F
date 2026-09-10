# GitHub Actions Workflows

This project uses a **focused, consolidated CI/CD pipeline** with semantic versioning and automated releases.

## Workflow Structure

### 1. **ci.yml** - Continuous Integration Pipeline

Runs on every push and pull request to `main` and `develop` branches.

**Pipeline Stages (Sequential):**

```
┌─────────────────────────────────────────────────────────────┐
│ QUALITY (ESLint, Prettier, TypeScript)                      │
│ ├─ Fast fail: stops pipeline if linting/types fail          │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ BUILD (Production Bundle)                                    │
│ ├─ Needs: quality ✓                                          │
│ ├─ Verifies: npm run build                                   │
│ └─ Artifacts: dist/ uploaded for 1 day                       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ TEST (Unit Tests + Coverage)                                │
│ ├─ Needs: quality ✓                                          │
│ ├─ Runs: npm run test -- --run                               │
│ └─ Reports: Coverage to Codecov                              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ SECURITY (Dependency & Secret Scan)                         │
│ ├─ Needs: quality ✓                                          │
│ ├─ Audits: npm audit --audit-level=moderate                  │
│ └─ Scans: TruffleHog for secrets                             │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ PERFORMANCE (Bundle Analysis)                               │
│ ├─ Needs: build ✓                                            │
│ ├─ Checks: Bundle size, build integrity                      │
│ └─ Warns: If exceeds 500MB                                   │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ SUMMARY (All Checks Passed)                                 │
│ └─ Validates: All jobs succeeded                             │
└─────────────────────────────────────────────────────────────┘
```

**Key Features:**

- ✅ Node 20 with deprecation handling
- ✅ `npm ci || npm install` fallback for missing lock file
- ✅ Fast-fail on quality issues
- ✅ Parallel execution (build, test, security run simultaneously)
- ✅ Coverage reporting to Codecov
- ✅ Secret scanning with TruffleHog

**When It Runs:**

- Every push to `main` or `develop`
- Every pull request targeting `main` or `develop`
- Automatic on code changes

---

### 2. **release.yml** - Semantic Versioning & Release

Handles automated releases with semantic versioning.

**Pipeline Stages:**

```
┌─────────────────────────────────────────────────────────────┐
│ DETECT VERSION CHANGE                                       │
│ ├─ Compares: Current vs Previous package.json version       │
│ ├─ Detects: major/minor/patch change                        │
│ └─ Outputs: version, version_type, should_release           │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ VALIDATE RELEASE (if version changed)                       │
│ ├─ Checks: Semantic version format (X.Y.Z)                  │
│ ├─ Checks: CHANGELOG.md entry exists                        │
│ ├─ Runs: lint, format, build, tests                         │
│ └─ Fails: If any validation fails                            │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ CREATE GITHUB RELEASE                                       │
│ ├─ Creates: Git tag v{version}                              │
│ ├─ Extracts: Release notes from CHANGELOG.md                │
│ └─ Posts: GitHub Release with notes                         │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ PUBLISH RELEASE                                             │
│ ├─ Builds: Production bundle                                │
│ ├─ Archives: dist/ as tar.gz                                │
│ └─ Uploads: Build artifact to GitHub Release                │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ SLACK NOTIFICATION (optional)                               │
│ └─ Posts: Release announcement to Slack                     │
└─────────────────────────────────────────────────────────────┘
```

**How to Trigger a Release:**

1. **Automatic Detection:**

   ```bash
   # Update version in package.json
   npm version patch  # or minor, major

   # Update CHANGELOG.md with entry for new version
   # Commit and push to main
   git push origin main
   ```

   Release workflow automatically triggers!

2. **Manual Trigger:**
   ```bash
   # Go to GitHub Actions → Release & Versioning → Run workflow
   # Select version type: patch, minor, or major
   ```

**Key Features:**

- ✅ Automatic version detection from package.json
- ✅ Semantic versioning validation (X.Y.Z)
- ✅ CHANGELOG.md validation
- ✅ Full validation before release
- ✅ Git tags creation
- ✅ GitHub Release with notes
- ✅ Build artifacts uploaded
- ✅ Slack notifications (requires SLACK_WEBHOOK_URL secret)
- ✅ No duplicate jobs - streamlined process

**When It Runs:**

- On push to `main` when `package.json` or `CHANGELOG.md` changes
- Manual trigger via workflow_dispatch

---

## Configuration

### Environment Variables

```yaml
NODE_VERSION: "20" # Uses Node 20 with deprecation handling
```

### Required Secrets (Optional)

- `SLACK_WEBHOOK_URL` - For Slack notifications on releases

### Node Version Handling

- GitHub Actions deprecated Node 18
- Workflows use Node 20 + `ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION: true`
- Fallback: `npm ci || npm install` handles missing lock files

---

## Workflow Status

Check workflow status in GitHub:

- **Actions Tab:** https://github.com/Mostafa-SAID7/ContainerCar-F/actions
- **Badges in README:** Available for CI status

---

## Troubleshooting

### "Dependencies lock file is not found"

**Fix:** Already handled with `npm ci || npm install` fallback

### "Node 20 deprecated warning"

**Fix:** Already handled with `ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION: true`

### Release not triggering

**Check:**

1. Is `package.json` version different from last commit?
2. Does `CHANGELOG.md` have an entry for the new version?
3. Format: `## [X.Y.Z]` in CHANGELOG.md

### Slack notifications not appearing

**Setup:**

1. Create Slack webhook: https://api.slack.com/messaging/webhooks
2. Add `SLACK_WEBHOOK_URL` secret in GitHub repo settings
3. Re-run release workflow

---

## No Duplicates Guarantee

**Consolidated Structure:**

- ✅ Single ci.yml → All QA/testing/security/performance
- ✅ Single release.yml → All versioning/releasing/artifacts
- ✅ NO duplicate lint/build/test/security files
- ✅ NO duplicate deploy files
- ✅ Focused, maintainable workflows

**File Count Before:** 9 workflows (duplicates)
**File Count After:** 2 workflows (consolidated)

---

## Next Steps

1. **Update version in package.json:**

   ```bash
   npm version patch
   ```

2. **Update CHANGELOG.md:**

   ```markdown
   ## [X.Y.Z] - YYYY-MM-DD

   ### Added

   - Feature description

   ### Fixed

   - Bug fix description
   ```

3. **Commit and push:**

   ```bash
   git add package.json CHANGELOG.md
   git commit -m "chore: release version X.Y.Z"
   git push origin main
   ```

4. **Watch release workflow:**
   - Go to Actions tab
   - Release workflow runs automatically
   - GitHub Release created with artifacts

---

**Status:** ✅ All workflows consolidated, tested, and ready for production.
