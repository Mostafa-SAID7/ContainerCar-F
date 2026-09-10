# Setup Guide — Development Environment

Complete guide to set up your local development environment for ContainerCar.

---

## 🔧 Prerequisites

Before starting, ensure you have:

### Required

- **Node.js** 18+ or **Bun** runtime
- **npm** 9+ or **bun** 1+
- **Git** 2.30+
- **Code editor** (VS Code recommended)

### Optional

- **Docker** (for containerized development)
- **pnpm** (alternative package manager)

---

## ✅ Verify Installation

```bash
# Check Node.js version
node --version
# Expected: v18.0.0 or higher

# Check npm version
npm --version
# Expected: 9.0.0 or higher

# Check Git version
git --version
# Expected: 2.30.0 or higher
```

---

## 🚀 Quick Start (5 minutes)

### 1. Clone Repository

```bash
git clone https://github.com/Mostafa-SAID7/ContainerCar-F.git
cd ContainerCar-F
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR using Bun (faster)
bun install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# OR using Bun
bun dev
```

### 4. Open Browser

Navigate to: **http://localhost:5173**

✅ You're ready to develop!

---

## 📂 Project Structure Overview

```
ContainerCar-F/
├── src/                 # Source code
│   ├── components/      # React components
│   ├── features/        # Feature modules
│   ├── pages/           # Route pages
│   ├── types/           # TypeScript types
│   ├── services/        # API/data services
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── styles/          # Global styles
├── docs/                # Documentation
├── .github/             # GitHub workflows & templates
├── public/              # Static assets
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite build config
└── README.md            # Project README
```

---

## 📦 Available Commands

### Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

### Package Management

```bash
# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Clean install (remove node_modules)
rm -rf node_modules && npm install
```

---

## 🎨 Code Style & Standards

### Formatting

All code is automatically formatted with **Prettier**.

```bash
# Format specific file
npx prettier --write src/components/Button.tsx

# Format all files
npm run format
```

### Linting

Code quality is checked with **ESLint**.

```bash
# Check for issues
npm run lint

# Fix auto-fixable issues
npx eslint . --fix
```

### Git Hooks (Pre-commit)

Linting and formatting run automatically before commits via Husky.

```bash
# Hooks configured in:
.husky/
├── pre-commit       # Runs lint & format
└── commit-msg       # Validates commit message
```

---

## 🔗 Git Workflow

### Branch Naming Convention

```
feature/[name]      # New feature
bugfix/[name]       # Bug fix
docs/[name]         # Documentation
chore/[name]        # Maintenance
```

### Example

```bash
# Create and switch to new branch
git checkout -b feature/budget-calculator

# Make changes...
git add .
git commit -m "feat: add budget calculator component"

# Push to remote
git push origin feature/budget-calculator
```

### Commit Message Format

Follow **Conventional Commits**:

```
type(scope): description

Examples:
feat(businesses): add business filter component
fix(dashboard): resolve budget calculation error
docs(setup): update installation instructions
chore(deps): update React to 19.2
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

---

## 🔐 Environment Variables

### Setup Local .env

```bash
# Copy example (if exists)
cp .env.example .env.local

# Or create manually
touch .env.local
```

### Variables Reference

```env
# Vite
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=ContainerCar

# (Add more as needed for your development)
```

**Important**: Never commit `.env.local` to Git!

---

## 🧪 Testing (Future)

### Setup Testing Framework

```bash
# Install Vitest (recommended for Vite projects)
npm install -D vitest @testing-library/react

# Create test file
touch src/components/Button.test.tsx
```

### Run Tests

```bash
# Run all tests
npm run test

# Run in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

### Example Test

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

---

## 🐛 Debugging

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src",
      "sourceMaps": true
    }
  ]
}
```

### Browser DevTools

```bash
# Dev server enables source maps automatically
# Open Chrome DevTools (F12) and debug in:
# Sources tab → webpack://src/
```

### Console Logging

```typescript
// Development-only logs
if (import.meta.env.DEV) {
  console.log("Debug info:", data);
}
```

---

## 📚 Useful Extensions (VS Code)

```json
// .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "GitLab.gitlab-workflow",
    "dsznajder.es7-react-js-snippets"
  ]
}
```

---

## 🚨 Common Issues & Solutions

### Issue 1: Port 5173 Already in Use

```bash
# Kill process on port 5173
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Issue 2: Node Modules Corruption

```bash
# Clean reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue 3: TypeScript Errors in Editor

```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### Issue 4: Vite Cache Issues

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Issue 5: Prettier/ESLint Not Working

```bash
# Restart VS Code
# Or manually format:
npm run format
npm run lint -- --fix
```

---

## 🔄 Updating Dependencies

### Check for Updates

```bash
# See what's outdated
npm outdated

# See update details
npm update --dry-run
```

### Safe Update

```bash
# Update all patch versions (1.2.x)
npm update

# Update specific package
npm update react

# Update to major version
npm install react@latest
```

### After Major Updates

```bash
# Test build
npm run build

# Test locally
npm run preview

# Run linter
npm run lint
```

---

## 🌍 Working with i18n (Arabic/English)

### Current Setup

```
src/
├── components/
│   └── Layout.tsx    # Uses [dir="rtl"] for Arabic
├── styles/
│   └── globals.css   # Contains RTL-aware styles
```

### RTL Considerations

When adding new components:

```tsx
// ✓ Good: Uses flex-row-reverse on RTL
<div className="flex [dir=rtl]:flex-row-reverse gap-4">

// ✗ Bad: Hardcoded left/right
<div style={{ marginLeft: '10px' }}>
```

---

## 📱 Testing on Mobile/Tablet

### Option 1: Chrome DevTools

```
F12 → Toggle device toolbar (Ctrl+Shift+M)
Select device: iPhone 12, iPad, etc.
```

### Option 2: Local Network Access

```bash
# Start dev server and note the Network URL
npm run dev

# On another device on same network, visit:
http://<your-ip>:5173
```

### Option 3: ngrok Tunnel

```bash
# Install ngrok
brew install ngrok

# Create tunnel to localhost:5173
ngrok http 5173

# Share public URL with team
```

---

## 🚀 Production Build

### Build Steps

```bash
# Create optimized production build
npm run build

# Output in: dist/

# Preview the build
npm run preview
```

### Build Analysis

```bash
# Analyze bundle size
npm run build -- --mode analyze

# View bundle composition
# (Install plugin if needed: npm install -D rollup-plugin-visualizer)
```

### Deployment Options

| Platform         | Steps                             |
| ---------------- | --------------------------------- |
| **Vercel**       | Connect GitHub repo → auto-deploy |
| **Netlify**      | Connect GitHub repo → auto-deploy |
| **GitHub Pages** | Push to `gh-pages` branch         |
| **Docker**       | Build image → run container       |

---

## 📋 Pre-Commit Checklist

Before pushing code:

```bash
# 1. Run linter and formatter
npm run lint
npm run format

# 2. Build to verify no errors
npm run build

# 3. Preview build locally
npm run preview

# 4. Test on mobile (if changed UI)
npm run dev -- --host

# 5. Verify git status
git status

# 6. Push
git push origin <branch>
```

---

## 🆘 Getting Help

### Resources

- 📖 **[Product Vision](./PRODUCT_VISION.md)** — Business requirements
- 🏗️ **[Architecture Guide](./ARCHITECTURE.md)** — Technical design
- 📚 **[React Docs](https://react.dev)**
- 🎨 **[Tailwind CSS](https://tailwindcss.com)**
- 🧬 **[TanStack Router](https://tanstack.com/router)**
- 🔧 **[Vite Docs](https://vitejs.dev)**

### Issues & Discussions

- 🐛 **Report bugs**: [GitHub Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues)
- 💬 **Ask questions**: [GitHub Discussions](https://github.com/Mostafa-SAID7/ContainerCar-F/discussions)

---

**Last Updated**: September 2026
**Version**: 1.0 Setup Guide
