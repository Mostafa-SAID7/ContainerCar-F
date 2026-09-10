# Changelog

All notable changes to ContainerCar will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Budget-first discovery experience
- Business marketplace with filtering
- Business comparison tool (up to 3 businesses)
- Investment breakdown visualization
- Equipment checklist with supplier info
- Location requirements guide
- Staff requirements display
- Operating costs estimation
- Franchise information section
- Supplier network integration
- Investor dashboard (mock)
- Business request wizard
- Responsive mobile design
- Arabic (RTL) and English (LTR) support
- Project documentation (Product Vision, Architecture, Setup Guide)
- GitHub templates (PR, Issue, Code of Conduct)

### Changed
- Removed Lovable dependencies and configuration
- Updated Vite configuration for local development
- Refactored vite.config.ts to use TanStack plugins directly

### Fixed
- Vite config compatibility issues
- Dev server startup errors
- Build process optimization

---

## [1.0.0-MVP] - 2026-09-10

### Initial Release

**First version of ContainerCar with core MVP features:**

#### Platform Features
- ✅ Landing page with hero section
- ✅ Budget discovery tool
- ✅ Business marketplace
- ✅ Advanced filtering system
- ✅ Business detail pages
- ✅ Business comparison
- ✅ Investor dashboard
- ✅ Mock authentication (entrepreneur, franchise owner, supplier, admin)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Internationalization (Arabic RTL, English LTR)

#### Technical Stack
- React 19.2.0
- TanStack Router 1.170.18
- TanStack React Start 1.168.32
- TanStack React Query 5.101.1
- Tailwind CSS 4.2.1
- Radix UI components
- shadcn/ui components
- Vite 8.1.5
- TypeScript 5.8.3

#### Documentation
- 📖 Product Vision document
- 🏗️ Architecture guide
- 📋 Setup & development guide
- 🤝 Contributing guidelines
- 📝 Code of Conduct

#### Quality
- ESLint configuration
- Prettier code formatting
- Git hooks (pre-commit)
- Build optimization

---

## Version History

### Planned for Future Releases

#### Phase 2 (1.1.0)
- [ ] Payment integration
- [ ] Real-time quotation system
- [ ] Appointment scheduling
- [ ] User review system
- [ ] Email notifications
- [ ] SMS alerts

#### Phase 3 (1.2.0)
- [ ] Financing partnerships
- [ ] Insurance integration
- [ ] Legal document templates
- [ ] Mobile application
- [ ] Advanced analytics

#### Phase 4 (2.0.0)
- [ ] AI-powered recommendations
- [ ] Predictive business analytics
- [ ] Market insights dashboard
- [ ] Franchise analytics
- [ ] Advanced reporting

---

## Migration Guides

### From Lovable to Local Development (1.0.0)

If you were using this project with Lovable, follow these steps to migrate to local development:

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Visit http://localhost:5173
```

**What Changed:**
- ❌ Removed `@lovable.dev/vite-tanstack-config` dependency
- ❌ Removed `.lovable/` configuration directory
- ❌ Removed Lovable error reporting
- ✅ Added standard Vite configuration
- ✅ Added improved error handling
- ✅ Added comprehensive documentation

**No Breaking Changes:** The application interface remains unchanged.

---

## How to Update

### For Users

```bash
# Get latest changes
git pull origin main

# Install any new dependencies
npm install

# Start development
npm run dev
```

### For Contributors

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines on contributing to releases.

---

## Reporting Issues

Found a bug in a release? Follow these steps:

1. **Check existing issues** → Search GitHub Issues first
2. **Create bug report** → Use [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. **Include details** → Steps to reproduce, environment, screenshots
4. **Be patient** → We review issues regularly

---

## Release Process

### Versioning Scheme

```
MAJOR.MINOR.PATCH

- MAJOR: Breaking changes, significant features
- MINOR: New features, backwards compatible
- PATCH: Bug fixes, minor improvements
```

### Changelog Format

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New feature descriptions

### Changed
- Modifications to existing features

### Fixed
- Bug fixes

### Deprecated
- Soon-to-be removed features

### Removed
- Removed features

### Security
- Security-related fixes
```

### Release Checklist

- [ ] Update version in package.json
- [ ] Update CHANGELOG.md
- [ ] Verify all tests pass
- [ ] Create git tag (v1.0.0)
- [ ] Push to main branch
- [ ] Create GitHub release
- [ ] Update documentation if needed

---

## Semantic Versioning

Read about [Semantic Versioning](https://semver.org/) to understand version numbering:

- **1.0.0** → Major version 1, Minor version 0, Patch version 0
- **1.1.0** → Added new features (backwards compatible)
- **1.1.5** → Bug fixes (backwards compatible)
- **2.0.0** → Major breaking changes

---

## Deprecation Policy

When a feature is deprecated:

1. **Announce** in CHANGELOG under "Deprecated"
2. **Support** for at least 2 minor versions
3. **Remove** in next major version
4. **Document** migration path clearly

Example:
```markdown
### Deprecated
- Old API endpoint `/api/businesses/v1` — use `/api/businesses/v2` instead
  (Will be removed in v3.0.0)
```

---

## Contributors

### Version 1.0.0
- 👤 **Mostafa Said** — Project Lead, Architecture
- 🤝 Open to community contributions

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) to join!

---

## License

All versions are proprietary. All rights reserved.

---

## Links

- 🏠 [Homepage](https://containercar.com)
- 📖 [Documentation](./docs/)
- 🐛 [Issues](https://github.com/Mostafa-SAID7/ContainerCar-F/issues)
- 💬 [Discussions](https://github.com/Mostafa-SAID7/ContainerCar-F/discussions)
- 🤝 [Contributing](./CONTRIBUTING.md)

---

## Keep a Changelog

This changelog follows the [Keep a Changelog](https://keepachangelog.com/) format.

### Guidelines

When contributing changes, update CHANGELOG.md following these rules:

1. **Always** update CHANGELOG.md in your PR
2. **Add** changes under "Unreleased" section
3. **Categorize** as: Added, Changed, Deprecated, Removed, Fixed, Security
4. **Use** clear, user-focused descriptions
5. **Link** to relevant issues/PRs when applicable

### Example Entry

```markdown
### Added
- [#123] Budget calculator component for entrepreneurs
- New filtering by location requirements
- Email notifications for application status

### Fixed
- [#456] Mobile navigation menu flickering on Safari
- Incorrect budget calculations with large numbers

### Changed
- Improved investment breakdown visualization
- Updated equipment supplier verification process
```

---

**Last Updated**: September 10, 2026

For questions about releases, visit [Discussions](https://github.com/Mostafa-SAID7/ContainerCar-F/discussions).
