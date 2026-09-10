# ContainerCar — Architecture Guide

Technical documentation for frontend architecture, component structure, and design system.

---

## 📦 Project Structure

```
src/
├── components/               # Shared, reusable components
│   └── ui/                   # shadcn/ui components (auto-generated)
│
├── features/                 # Feature-specific modules (organized by domain)
│   ├── businesses/           # Business marketplace feature
│   │   ├── components/       # Business-specific components
│   │   ├── hooks/            # Business-specific hooks
│   │   ├── types/            # Business TypeScript types
│   │   └── services/         # Business data fetching
│   │
│   ├── franchises/           # Franchise marketplace
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── services/
│   │
│   ├── suppliers/            # Supplier network
│   ├── investors/            # Entrepreneur dashboard
│   ├── applications/         # Business applications
│   ├── setup/                # Setup planning
│   ├── expenses/             # Budget tracking
│   ├── locations/            # Location management
│   ├── messaging/            # Communication
│   └── notifications/        # Notifications system
│
├── layouts/                  # Page layout components
│   ├── MainLayout.tsx
│   ├── DashboardLayout.tsx
│   └── AuthLayout.tsx
│
├── pages/                    # Route pages (one page per route)
│   ├── HomePage.tsx
│   ├── BusinessesPage.tsx
│   ├── BusinessDetailPage.tsx
│   ├── DashboardPage.tsx
│   └── [feature]Pages/
│
├── routes/                   # TanStack Router route definitions
│   └── __root.tsx
│
├── hooks/                    # Global custom hooks
│   ├── useBudget.ts          # Budget context hook
│   ├── useAuth.ts            # Authentication hook
│   └── useNotifications.ts
│
├── services/                 # API/data services
│   ├── api/                  # Future API client
│   ├── businesses.service.ts # Mock business data
│   ├── franchises.service.ts
│   ├── suppliers.service.ts
│   └── applications.service.ts
│
├── types/                    # Global TypeScript types
│   ├── business.types.ts
│   ├── franchise.types.ts
│   ├── user.types.ts
│   └── api.types.ts
│
├── data/                     # Mock data (temporary)
│   ├── businesses.ts
│   ├── franchises.ts
│   ├── suppliers.ts
│   └── equipment.ts
│
├── utils/                    # Utility functions
│   ├── formatting.ts         # Format currency, dates, etc.
│   ├── validation.ts         # Form validation
│   ├── calculations.ts       # Budget calculations
│   └── helpers.ts
│
├── styles/                   # Global styles
│   └── globals.css
│
├── lib/                      # Library utilities
│   ├── error-capture.ts      # Error handling
│   ├── error-page.ts         # Error page renderer
│   └── cn.ts                 # Tailwind classname merge
│
├── state/                    # Global state (React Context/Zustand)
│   ├── budget.context.ts
│   ├── auth.context.ts
│   └── filters.context.ts
│
├── App.tsx                   # Root component
├── start.ts                  # SSR entry point
└── server.ts                 # Server entry point
```

---

## 🎨 Design System

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Deep Graphite | `#111827` | Headers, navigation, text |
| **Accent** | Industrial Orange | `#F97316` | CTAs, progress, important actions |
| **Success** | Electric Green | `#22C55E` | Verified, completed, positive |
| **Background** | Off White | `#F8FAFC` | Page backgrounds |
| **Secondary Text** | Slate | `#64748B` | Secondary information |
| **Border** | Gray 200 | `#E5E7EB` | Dividers, form borders |
| **Error** | Red 500 | `#EF4444` | Error states, warnings |
| **Info** | Blue 500 | `#3B82F6` | Information, notifications |

### Typography

#### English
```css
/* Headings & Display */
font-family: 'Manrope';
font-weight: 700, 600;

/* Body & UI */
font-family: 'Inter';
font-weight: 400, 500, 600;
```

#### Arabic
```css
/* All text */
font-family: 'Cairo';
font-weight: 400, 500, 600, 700;
```

### Type Scale

```
h1: 32px / 40px (bold)      — Page titles
h2: 24px / 32px (semibold)  — Section headers
h3: 20px / 28px (semibold)  — Subsection headers
h4: 18px / 26px (semibold)  — Card headers
body: 16px / 24px (regular) — Main content
small: 14px / 20px (regular)— Secondary text
tiny: 12px / 16px (regular) — Captions, labels
```

### Spacing

```
2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

Used for: margins, padding, gaps, dividers
```

### Border Radius

```
sm: 4px      — Buttons, small inputs
md: 8px      — Cards, modals
lg: 12px     — Large containers
xl: 16px     — Feature sections
```

### Shadows

```
sm: 0 1px 2px rgba(0, 0, 0, 0.05)
md: 0 4px 6px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px rgba(0, 0, 0, 0.1)
```

---

## 🧩 Component Architecture

### Component Hierarchy

```
Shared Components (reusable across features)
├── UI Components (shadcn/ui)
│   ├── Button
│   ├── Card
│   ├── Input
│   ├── Select
│   ├── Dialog
│   ├── Tabs
│   └── ...
│
├── Layout Components
│   ├── Header
│   ├── Sidebar
│   ├── Footer
│   └── MobileNav
│
└── Business Components
    ├── PriceDisplay
    ├── BudgetProgress
    ├── EquipmentList
    ├── LocationBadge
    └── ...

Feature Components (scoped to features)
├── BusinessCard (businesses feature)
├── BusinessFilter (businesses feature)
├── SupplierQuote (suppliers feature)
└── ...
```

### Component Naming Convention

```
// Reusable UI components
Button.tsx
Card.tsx
Input.tsx

// Feature-specific components
BusinessCard.tsx          // In features/businesses/components/
BusinessDetailHeader.tsx
BusinessEquipmentList.tsx
BusinessComparisonTable.tsx
```

### Props Pattern

```typescript
// Always use TypeScript
interface ComponentProps {
  // Required props first
  title: string;
  
  // Optional props with defaults
  description?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  
  // Event handlers last
  onClick?: () => void;
  onSubmit?: (data: FormData) => void;
}

export function Component({
  title,
  description = '',
  variant = 'primary',
  ...props
}: ComponentProps) {
  // Implementation
}
```

---

## 🔄 State Management

### Context vs Zustand

| Use Case | Solution |
|----------|----------|
| Global UI state (theme, mobile menu) | React Context |
| Complex feature state | Zustand store |
| Form state | React Hook Form |
| Server state (API data) | React Query |

### Example: Budget Context

```typescript
// state/budget.context.ts
interface BudgetContextType {
  budget: number;
  setBudget: (amount: number) => void;
}

export const BudgetContext = createContext<BudgetContextType | null>(null);

export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) throw new Error('useBudget must be used within BudgetProvider');
  return context;
}
```

---

## 🎯 Data Flow

### Mock Data → Services → Components

```
src/data/
  businesses.ts (mock data array)
        ↓
src/services/
  businesses.service.ts (fetches & transforms)
        ↓
src/features/businesses/
  useBusinesses() hook (React Query)
        ↓
BusinessCard Component
  Renders data
```

### Service Example

```typescript
// services/businesses.service.ts
import { businessesData } from '../data/businesses';

export async function getBusinesses(filters?: FilterParams) {
  // In future: call API endpoint
  // For now: filter mock data
  return businessesData.filter(b => matchesFilters(b, filters));
}

export async function getBusinessById(id: string) {
  return businessesData.find(b => b.id === id);
}
```

### Hook Pattern

```typescript
// features/businesses/hooks/useBusinesses.ts
import { useQuery } from '@tanstack/react-query';
import { getBusinesses } from '../../../services/businesses.service';

export function useBusinesses(filters?: FilterParams) {
  return useQuery({
    queryKey: ['businesses', filters],
    queryFn: () => getBusinesses(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

---

## 📱 Responsive Design

### Breakpoints

```
sm: 640px    - Mobile
md: 768px    - Tablet
lg: 1024px   - Desktop
xl: 1280px   - Large desktop
2xl: 1536px  - Extra large
```

### Mobile-First Approach

```tsx
// Start with mobile styles, enhance for desktop
<div className="
  grid grid-cols-1                    // Mobile: 1 column
  md:grid-cols-2                      // Tablet: 2 columns
  lg:grid-cols-3                      // Desktop: 3 columns
  gap-4 md:gap-6 lg:gap-8
">
  {/* Content */}
</div>
```

### Responsive Patterns

- **Navigation**: Bottom nav (mobile) → Sidebar (desktop)
- **Filters**: Collapsible drawer (mobile) → Sidebar (desktop)
- **Cards**: Full width (mobile) → Grid (tablet+)
- **Tables**: Horizontal scroll (mobile) → Full table (desktop)

---

## ♿ Accessibility

### Guidelines Implemented

- ✅ Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus visible states
- ✅ Color contrast (WCAG AA minimum)
- ✅ Form labels & error messages
- ✅ Screen reader support

### Example: Accessible Button

```tsx
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
  onClick={onClose}
>
  ✕
</button>
```

---

## 🌍 Internationalization (i18n)

### Current Implementation
- **English (LTR)** — Default language
- **Arabic (RTL)** — Layout flipped via CSS

### Future i18n Strategy
```
i18n/
  locales/
    en.json
    ar.json
  hooks/
    useTranslation.ts
```

### RTL Handling

```css
/* Automatic RTL support */
[dir="rtl"] .sidebar {
  transform: scaleX(-1); /* or use margin-left → margin-right */
}
```

---

## 🔐 Authentication (Mock)

### Current Flow (MVP)
```
1. Sign up/login (form only, no validation)
2. Store user in context/localStorage
3. Show role-based UI
4. No real authentication

Roles:
- entrepreneur
- franchise_owner
- supplier
- admin
```

### Future Implementation
```
1. Real auth API (JWT tokens)
2. Secure localStorage
3. Auth guards on routes
4. Role-based access control (RBAC)
```

---

## 🧪 Testing Strategy

### Unit Tests
```
components/ui/Button.test.tsx
utils/formatting.test.ts
services/businesses.service.test.ts
```

### Integration Tests
```
features/businesses/BusinessList.integration.test.tsx
features/investors/Dashboard.integration.test.tsx
```

### E2E Tests (Future)
```
tests/e2e/entrepreneur-journey.spec.ts
tests/e2e/supplier-onboarding.spec.ts
```

---

## 🚀 Performance Optimizations

### Code Splitting
- Route-based splitting (TanStack Router)
- Lazy component loading
- Dynamic imports for heavy libraries

### Caching
- React Query cache strategies
- Component memoization (React.memo)
- useMemo for expensive calculations

### Images
- WebP format with fallback
- Lazy loading with placeholder
- Responsive sizes

### Bundling
```bash
npm run build   # Analyzes bundle size
```

---

## 🔌 API Integration (Future)

### Service Abstraction Pattern

```typescript
// services/api/client.ts
export const apiClient = {
  businesses: {
    list: (filters) => fetch('/api/businesses', { /* ... */ }),
    get: (id) => fetch(`/api/businesses/${id}`, { /* ... */ }),
    create: (data) => fetch('/api/businesses', { /* ... */ }),
  },
  franchises: { /* ... */ },
  suppliers: { /* ... */ },
};
```

### Replacing Mock Data

```typescript
// Before (mock):
return businessesData.filter(/* ... */);

// After (API):
return apiClient.businesses.list(filters);

// Zero component changes needed!
```

---

## 📋 File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `BusinessCard.tsx` |
| Hooks | camelCase with `use` prefix | `useBudget.ts` |
| Services | camelCase with `.service.ts` | `businesses.service.ts` |
| Types | PascalCase with `.types.ts` | `business.types.ts` |
| Utils | camelCase | `formatting.ts` |
| Constants | UPPER_SNAKE_CASE | `API_ENDPOINTS.ts` |
| Context | PascalCase with `Context` | `BudgetContext.ts` |

---

## 📚 Tech Stack Decisions

### Why These Tools?

| Tool | Why |
|------|-----|
| **React 19** | Latest, modern hooks |
| **TanStack Router** | Type-safe routing |
| **Tailwind CSS** | Utility-first, no CSS files |
| **Radix UI** | Headless, accessible components |
| **React Query** | Server state management |
| **TypeScript** | Type safety, better DX |
| **Vite** | Fast build, hot reload |

---

## 🔄 Development Workflow

### 1. Start Development Server
```bash
npm run dev
# or
bun dev
```

### 2. Create Feature Structure
```
features/
  new-feature/
    components/
    hooks/
    types/
    services/
```

### 3. Build Components
- Start with UI (shadcn/ui)
- Add business logic (hooks)
- Connect to services
- Add to pages/routes

### 4. Test Locally
```bash
npm run build  # Ensure production build works
```

### 5. Format & Lint
```bash
npm run format  # Prettier
npm run lint    # ESLint
```

---

**Last Updated**: September 2026
**Version**: 1.0 Architecture
