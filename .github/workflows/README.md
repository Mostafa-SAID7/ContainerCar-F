# GitHub Actions Workflows

Professional CI/CD pipeline with separate, focused workflows for each responsibility.

---

## 🔄 Workflow Overview

| Workflow | File | Trigger | Purpose |
|----------|------|---------|---------|
| **Lint** | `lint.yml` | Push/PR | Code quality checks |
| **Build** | `build.yml` | Push/PR | Verify production build |
| **Test** | `test.yml` | Push/PR | Run test suite |
| **Performance** | `performance.yml` | Push/PR main | Lighthouse & bundle |
| **Deploy Staging** | `deploy-staging.yml` | Push develop | Deploy to staging |
| **Deploy Production** | `deploy-production.yml` | Push main/tag | Deploy to production |
| **Security** | `security.yml` | Push/PR/Weekly | Security scanning |

---

## 📋 Workflow Details

### 1. Lint Workflow (`lint.yml`)

**Purpose**: Code quality and formatting validation  
**Runs on**: Push to main/develop, Pull requests  
**Duration**: ~2-3 minutes

#### Jobs:
- **ESLint** - Code quality checks
- **Prettier** - Format consistency
- **TypeScript** - Type checking

#### When It Fails:
Fix locally and push again:
```bash
npm run lint -- --fix
npm run format
npx tsc --noEmit
git add .
git commit -m "chore: fix linting issues"
git push
```

---

### 2. Build Workflow (`build.yml`)

**Purpose**: Verify production build succeeds  
**Runs on**: Push to main/develop, Pull requests  
**Duration**: ~3-5 minutes

#### Jobs:
- **Build** - Compile and bundle
- **Build Analyze** - Check bundle size

#### Artifacts:
- `dist/` folder (7 days retention)

#### When It Fails:
Check build errors:
```bash
npm run build
# Fix issues, then push
```

---

### 3. Test Workflow (`test.yml`)

**Purpose**: Verify code quality and functionality  
**Runs on**: Push to main/develop, Pull requests  
**Duration**: ~5-10 minutes

#### Jobs:
- **Unit Tests** - Test individual functions/components
- **Integration Tests** - Test feature workflows
- **Accessibility** - A11y audit

#### Coverage:
- Target: 80%+
- Reports uploaded to Codecov

#### When It Fails:
Run tests locally:
```bash
npm run test -- --run
npm run test:coverage
# Fix failing tests
git add .
git commit -m "test: fix failing tests"
git push
```

---

### 4. Performance Workflow (`performance.yml`)

**Purpose**: Monitor performance metrics  
**Runs on**: Push to main, Pull requests to main  
**Duration**: ~5-10 minutes

#### Jobs:
- **Lighthouse** - Performance, accessibility, best practices
- **Bundle Size** - Track bundle growth
- **Web Vitals** - Core Web Vitals readiness

#### Thresholds:
- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Bundle Size**: <500KB

#### When It Fails:
Optimize and re-submit:
```bash
npm run build
# Check bundle size and performance
# Optimize if needed
git add .
git commit -m "perf: optimize bundle size"
git push
```

---

### 5. Deploy Staging Workflow (`deploy-staging.yml`)

**Purpose**: Automatic deployment to staging  
**Runs on**: Push to develop branch  
**Duration**: ~10-15 minutes

#### Process:
1. Install dependencies
2. Lint & format check
3. Build verification
4. Run tests
5. Deploy to staging
6. Post-deployment verification
7. Notify Slack

#### When to Use:
- After PR merge to develop
- For testing features before production
- For QA validation

#### Requirements:
Set these GitHub Secrets:
- `STAGING_DEPLOY_TOKEN` - Deploy credentials
- `STAGING_URL` - Staging environment URL
- `SLACK_WEBHOOK_URL` - Slack notifications

---

### 6. Deploy Production Workflow (`deploy-production.yml`)

**Purpose**: Production deployment with full validation  
**Runs on**: Push to main branch, manual trigger  
**Duration**: ~15-20 minutes
**Environment**: Requires approval

#### Pre-Deployment Checks:
✅ ESLint  
✅ TypeScript  
✅ Prettier  
✅ Build  
✅ Tests  
✅ Coverage  
✅ Security audit  

#### Process:
1. All pre-deployment checks
2. Production build
3. Deploy to production
4. Verify deployment
5. Activate monitoring
6. Slack notification

#### When to Use:
- After PR merge to main
- For releasing new versions
- For critical bug fixes

#### Requirements:
Set these GitHub Secrets:
- `PROD_DEPLOY_TOKEN` - Production credentials
- `PROD_URL` - Production URL
- `SLACK_WEBHOOK_URL` - Slack notifications

#### Approval:
Manual approval required in GitHub UI:
1. Go to Actions
2. Click running workflow
3. Click "Review deployments"
4. Approve/reject

---

### 7. Security Workflow (`security.yml`)

**Purpose**: Security scanning and vulnerability detection  
**Runs on**: Push to main/develop, PR, Weekly schedule  
**Duration**: ~5-10 minutes

#### Jobs:
- **Dependency Audit** - Check npm vulnerabilities
- **Code Scanning** - Detect hardcoded secrets
- **SCA** - Software composition analysis
- **License Check** - Ensure license compliance

#### Thresholds:
- **High Severity Vulnerabilities**: ❌ Fail
- **Critical Vulnerabilities**: ❌ Fail
- **Moderate**: ⚠️ Warn

#### When It Fails:
```bash
# Update vulnerable dependencies
npm audit fix
npm audit fix --force  # If needed

# Review security issues
npm audit

# Commit fixes
git add package.json package-lock.json
git commit -m "security: fix vulnerability"
git push
```

---

## 🚨 Common Issues & Solutions

### Build Fails

**Problem**: "Build failed with 1 error"  
**Solution**:
```bash
npm ci
npm run build
# Check error messages
# Fix issues locally
npm run build  # Verify it works
git add .
git commit -m "fix: resolve build error"
git push
```

### Tests Fail

**Problem**: "Test suite failed"  
**Solution**:
```bash
npm run test -- --run
# Check failing tests
# Fix code or tests
npm run test -- --run  # Verify
git add .
git commit -m "test: fix failing tests"
git push
```

### Linting Issues

**Problem**: "ESLint found problems"  
**Solution**:
```bash
npm run lint -- --fix
npm run format
git add .
git commit -m "chore: fix linting issues"
git push
```

### Security Vulnerabilities

**Problem**: "High severity vulnerabilities"  
**Solution**:
```bash
npm audit
npm audit fix
# If fix conflicts, manually resolve
npm test  # Verify still works
git add package.json package-lock.json
git commit -m "security: fix vulnerabilities"
git push
```

### Deployment Approval Stuck

**Problem**: Deployment waiting for approval  
**Solution**:
1. Go to GitHub → Actions
2. Find the deployment workflow
3. Click "Review deployments"
4. Approve or reject
5. It will proceed/abort

---

## 📊 Monitoring Workflows

### View Workflow Status

**In GitHub UI**:
1. Go to repository
2. Click "Actions" tab
3. Select workflow
4. See runs and logs

**Command Line**:
```bash
# List workflow runs
gh run list

# View specific run
gh run view <run-id>

# Stream run logs
gh run view <run-id> --log
```

### Check Workflow Results

```bash
# Get status of last run
gh run list --limit 10

# View annotations (errors/warnings)
gh run view <run-id>
```

---

## 🔧 Environment & Secrets Setup

### Required GitHub Secrets

1. **STAGING_DEPLOY_TOKEN**
   - Deploy credentials for staging
   - Set in: Settings → Secrets → Actions

2. **STAGING_URL**
   - Staging environment URL
   - Example: `https://staging.containercar.com`

3. **PROD_DEPLOY_TOKEN**
   - Deploy credentials for production
   - Set in: Settings → Secrets → Actions

4. **PROD_URL**
   - Production URL
   - Example: `https://containercar.com`

5. **SLACK_WEBHOOK_URL**
   - Webhook for Slack notifications
   - Get from: Slack → Incoming Webhooks

### Set Secrets

```bash
# Via GitHub CLI
gh secret set STAGING_DEPLOY_TOKEN --body "your-token"
gh secret set PROD_DEPLOY_TOKEN --body "your-token"
gh secret set SLACK_WEBHOOK_URL --body "your-webhook"

# Via GitHub UI
# Settings → Secrets and variables → Actions → New repository secret
```

---

## 📈 Workflow Performance

### Average Execution Times

| Workflow | Time |
|----------|------|
| Lint | 2-3 min |
| Build | 3-5 min |
| Test | 5-10 min |
| Performance | 5-10 min |
| Deploy Staging | 10-15 min |
| Deploy Production | 15-20 min |
| Security | 5-10 min |

### Parallel Execution
- Lint, Build, Test run in parallel
- Performance runs after Build/Test
- Deploy Staging after all checks pass
- Deploy Production requires manual approval

### Total Time
- PR checks: ~10-15 minutes
- Staging deploy: ~15-20 minutes
- Production deploy: ~20-30 minutes

---

## 🎯 Best Practices

### 1. Keep Workflows Focused
- ✅ One job per file
- ✅ Single responsibility
- ✅ Easy to troubleshoot

### 2. Fail Fast
- ✅ ESLint before build
- ✅ Build before test
- ✅ Test before deploy

### 3. Clear Feedback
- ✅ Descriptive error messages
- ✅ Slack notifications
- ✅ Artifacts for debugging

### 4. Security First
- ✅ Run security checks
- ✅ Scan dependencies
- ✅ Detect secrets

### 5. Performance Monitoring
- ✅ Track bundle size
- ✅ Lighthouse scores
- ✅ Core Web Vitals

---

## 🔄 Workflow Triggers

### Lint, Build, Test
```yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
```

### Performance
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

### Deploy Staging
```yaml
on:
  push:
    branches: [develop]
```

### Deploy Production
```yaml
on:
  push:
    branches: [main]
    tags: ['v*']
  workflow_dispatch:
```

### Security
```yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  schedule:
    - cron: '0 0 * * 0'
```

---

## 📚 Documentation

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)

---

**Last Updated**: September 10, 2026  
**Version**: 1.0
