# Contributing to ContainerCar

Thank you for your interest in contributing to ContainerCar! This document provides guidelines and instructions for contributing to the project.

---

## 🤝 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📋 Before You Start

### Getting Help

- 💬 **Questions?** → [GitHub Discussions](https://github.com/Mostafa-SAID7/ContainerCar-F/discussions)
- 🐛 **Found a bug?** → [GitHub Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues)
- 💡 **Feature idea?** → [GitHub Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues) (label: `enhancement`)

### Check Existing Issues

Before starting work, search existing issues to avoid duplicate effort:

```
GitHub Issues → Search relevant keywords
GitHub Discussions → Ask if your idea is already planned
```

---

## 🚀 Development Setup

Follow the [Setup Guide](../docs/SETUP_GUIDE.md) to prepare your environment:

```bash
git clone https://github.com/Mostafa-SAID7/ContainerCar-F.git
cd ContainerCar-F
npm install
npm run dev
```

---

## 🌳 Git Workflow

### 1. Create a Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Branch Naming Convention

```
feature/[description]    # New feature
bugfix/[description]     # Bug fix
docs/[description]       # Documentation
chore/[description]      # Maintenance, deps
```

**Examples**:

- `feature/budget-calculator`
- `bugfix/mobile-navigation`
- `docs/api-setup`
- `chore/update-dependencies`

### 3. Make Changes

```bash
# Edit files...
# Test locally:
npm run dev
npm run build
npm run lint
npm run format
```

### 4. Commit Changes

Follow **Conventional Commits** format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

**Examples**:

```
feat(businesses): add filter by budget range
fix(dashboard): resolve budget calculation error
docs(setup): add environment variables section
style(components): improve spacing consistency
chore(deps): update React to 19.2.0
```

### 5. Keep Commits Clean

```bash
# Before pushing, ensure:
npm run lint -- --fix      # Fix linting issues
npm run format             # Format code
npm run build              # Verify build succeeds

# Then commit:
git add .
git commit -m "feat(feature): description"
```

### 6. Push to Remote

```bash
# First push to new branch
git push -u origin feature/your-feature-name

# Subsequent pushes
git push origin feature/your-feature-name
```

### 7. Create Pull Request

1. Go to [GitHub repository](https://github.com/Mostafa-SAID7/ContainerCar-F)
2. Click **"Pull Requests"** tab
3. Click **"New Pull Request"**
4. Select your branch
5. Fill out the PR template (see below)
6. Click **"Create Pull Request"**

---

## 📝 Pull Request Template

```markdown
## Description

Brief summary of what this PR does.

## Type of Change

- [ ] Feature (new functionality)
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Breaking change

## Related Issues

Closes #123

## Changes Made

- Added X component
- Fixed Y bug
- Updated Z documentation

## Testing

How was this tested?

- [ ] Tested locally with `npm run dev`
- [ ] Verified build with `npm run build`
- [ ] Ran linter with `npm run lint`
- [ ] Mobile tested (if UI changes)

## Checklist

- [ ] Code follows project style guide
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] All tests pass

## Screenshots (if applicable)

<!-- Add screenshots for UI changes -->
```

---

## ✨ Code Style Guide

### TypeScript

```typescript
// ✓ Good: Clear types, named exports
export interface BusinessProps {
  id: string;
  name: string;
  investment: number;
}

export function BusinessCard({ id, name, investment }: BusinessProps) {
  return <div>{name}</div>;
}

// ✗ Avoid: Implicit types, default exports
export default function BusinessCard(props) {
  return <div>{props.name}</div>;
}
```

### React Components

```tsx
// ✓ Good: Named function, clear props type
interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button className={`btn-${variant}`} {...props} />;
}

// ✗ Avoid: Arrow functions for exports, missing types
export const Button = (props) => <button {...props} />;
```

### CSS / Tailwind

```tsx
// ✓ Good: Utility classes, responsive modifiers
<div className="
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4 md:gap-6
  p-4 md:p-8
">

// ✗ Avoid: Custom CSS, hardcoded values
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
```

### File Organization

```
features/businesses/
├── components/
│   ├── BusinessCard.tsx
│   ├── BusinessFilter.tsx
│   └── index.ts          # Export all components
├── hooks/
│   ├── useBusinesses.ts
│   └── index.ts
├── types/
│   ├── business.types.ts
│   └── index.ts
├── services/
│   ├── businesses.service.ts
│   └── index.ts
└── index.ts              # Export feature modules
```

---

## 🧪 Testing Requirements

### Before Submitting PR

```bash
# 1. Run ESLint
npm run lint

# 2. Format code
npm run format

# 3. Build for production
npm run build

# 4. Test locally
npm run dev

# 5. Preview production build
npm run preview
```

### Writing Tests (Future)

```typescript
// components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

Run tests:

```bash
npm run test
npm run test:watch
npm run test:coverage
```

---

## 📚 Documentation

### Update Docs When Needed

If your change affects:

- **Setup** → Update `docs/SETUP_GUIDE.md`
- **Architecture** → Update `docs/ARCHITECTURE.md`
- **Product** → Update `docs/PRODUCT_VISION.md`
- **README** → Update root `README.md`

### Code Comments

```typescript
// ✓ Good: Explain WHY, not WHAT
// Use budget fit calculation to show compatibility percentage
const budgetFit = (businessCost / userBudget) * 100;

// ✗ Avoid: Obvious comments
// Multiply by 100
const budgetFit = (businessCost / userBudget) * 100;
```

---

## 🔍 Review Process

### What to Expect

1. **Automated Checks** (GitHub Actions)
   - ✅ ESLint passes
   - ✅ Build succeeds
   - ✅ No console errors

2. **Code Review**
   - Team reviews your changes
   - May request modifications
   - Comments on code quality

3. **Approval & Merge**
   - At least 1 approval required
   - Your branch is merged to `main`

### Feedback Tips

- Be responsive to feedback
- Ask clarifying questions
- Update PR based on comments
- Re-request review when ready

---

## 🐛 Reporting Bugs

### Create a Bug Report

1. Go to **[Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues)**
2. Click **"New Issue"**
3. Select **"Bug Report"** template
4. Fill out completely:

```markdown
## Description

Brief description of the bug.

## Steps to Reproduce

1. Go to...
2. Click...
3. See error...

## Expected Behavior

What should happen?

## Actual Behavior

What actually happened?

## Environment

- OS: Windows 11
- Browser: Chrome 120
- Node: 18.17.0

## Screenshots

<!-- Attach screenshots if helpful -->
```

---

## 💡 Suggesting Features

### Create a Feature Request

1. Go to **[Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues)**
2. Click **"New Issue"**
3. Select **"Feature Request"** template
4. Fill out:

```markdown
## Description

What would you like to add?

## Problem Solved

What problem does this solve?

## Proposed Solution

How should it work?

## Alternatives Considered

Any other approaches?

## Additional Context

Screenshots, mockups, etc.
```

---

## 📋 Issue Labels

| Label              | Meaning                 |
| ------------------ | ----------------------- |
| `bug`              | Something isn't working |
| `enhancement`      | Feature request         |
| `documentation`    | Docs improvement        |
| `good first issue` | Great for newcomers     |
| `help wanted`      | Extra attention needed  |
| `wontfix`          | Won't be implemented    |

---

## 🚀 Release Process

### Version Numbering (Semantic Versioning)

```
MAJOR.MINOR.PATCH
1    .2    .3

1.0.0 → Initial MVP
1.1.0 → New features
1.1.1 → Bug fix
2.0.0 → Breaking changes
```

### Changelog Update

See [CHANGELOG.md](../CHANGELOG.md) for format and update procedure.

---

## ❓ FAQs

### Q: How long does code review take?

**A**: Usually 1-3 days. Critical fixes prioritized.

### Q: Can I work on multiple features?

**A**: Yes, use separate branches for each feature.

### Q: What if my PR conflicts with main?

**A**: Rebase and resolve conflicts:

```bash
git fetch origin
git rebase origin/main
# Resolve conflicts, then:
git push origin feature/your-feature --force-with-lease
```

### Q: Do I need to squash my commits?

**A**: No, we preserve commit history. Keep commits logical and clean.

### Q: How do I add myself as a contributor?

**A**: You're automatically recognized via git history. GitHub handles attribution.

---

## 📞 Getting Help

- 💬 **Questions** → [GitHub Discussions](https://github.com/Mostafa-SAID7/ContainerCar-F/discussions)
- 🐛 **Bugs** → [GitHub Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues)
- 📚 **Documentation** → [Setup Guide](../docs/SETUP_GUIDE.md)
- 🏗️ **Architecture** → [Architecture Guide](../docs/ARCHITECTURE.md)

---

## ✅ Ready to Contribute?

1. ✓ Read this guide
2. ✓ Set up development environment
3. ✓ Pick an issue or create one
4. ✓ Create a branch
5. ✓ Make your changes
6. ✓ Submit a pull request
7. ✓ Respond to feedback
8. ✓ Celebrate! 🎉

---

**Thank you for contributing to ContainerCar! Your efforts help build a better platform for entrepreneurs.**

Last Updated: September 2026
