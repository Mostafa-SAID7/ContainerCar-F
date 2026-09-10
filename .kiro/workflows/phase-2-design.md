# PHASE 2 - DESIGN EXECUTION

## Technical Design Documents

### 2.1 BUSINESSES MARKETPLACE ARCHITECTURE

**Design ID**: DESIGN-001-BUSINESSES

#### Component Structure
```
features/businesses/
├── components/
│   ├── BusinessCard.tsx
│   ├── BusinessFilter.tsx
│   ├── BusinessGrid.tsx
│   ├── BusinessDetailHeader.tsx
│   ├── InvestmentBreakdown.tsx
│   ├── EquipmentList.tsx
│   ├── LocationRequirements.tsx
│   ├── StaffRequirements.tsx
│   ├── OperatingCosts.tsx
│   ├── FranchiseInfo.tsx
│   ├── SupplierNetwork.tsx
│   ├── ComparisonTable.tsx
│   └── BudgetFitScore.tsx
├── hooks/
│   ├── useBusinesses.ts
│   ├── useBusinessDetail.ts
│   └── useBusinessFilters.ts
├── types/
│   └── business.types.ts
├── services/
│   └── businesses.service.ts
└── index.ts
```

#### Data Flow
```
User Input (Filters)
    ↓
useBusinessFilters hook
    ↓
React Query cache check
    ↓
API call (businesses.service.ts)
    ↓
Filter/sort data
    ↓
Update cache
    ↓
Re-render BusinessGrid
    ↓
Display BusinessCard components
```

#### State Management
```
Global State (Context):
- selectedBusinesses (for comparison)
- userBudget

Feature State (React Query):
- businessesList (paginated, filtered)
- businessDetail (selected business)
- filters (active filters)

Component State:
- loading states
- error states
- UI toggles
```

#### API Contracts
```
GET /api/businesses?
  - page=1
  - limit=12
  - budget_min=100000&budget_max=500000
  - category=coffee
  - setup_time_max=60
  - staff_required=2

Response:
{
  data: Business[],
  total: number,
  page: number,
  limit: number
}
```

---

### 2.2 FRANCHISES MARKETPLACE DESIGN

**Design ID**: DESIGN-002-FRANCHISES

#### Component Structure
```
features/franchises/
├── components/
│   ├── FranchiseCard.tsx
│   ├── FranchiseGrid.tsx
│   ├── FranchiseDetail.tsx
│   ├── FranchiseFilter.tsx
│   ├── InvestmentDetails.tsx
│   └── ApplicationForm.tsx
├── hooks/
│   ├── useFranchises.ts
│   └── useFranchiseDetail.ts
├── types/
│   └── franchise.types.ts
├── services/
│   └── franchises.service.ts
└── index.ts
```

#### Data Flow
```
Browse Franchises → Filter → Select → Apply
    ↓
FranchiseGrid
    ↓
FranchiseCard (display)
    ↓
Click → FranchiseDetail (full info)
    ↓
Click Apply → ApplicationForm
    ↓
Submit → Create Application record
    ↓
Show confirmation
```

---

### 2.3 SUPPLIERS NETWORK DESIGN

**Design ID**: DESIGN-003-SUPPLIERS

#### Component Structure
```
features/suppliers/
├── components/
│   ├── SupplierCard.tsx
│   ├── SupplierGrid.tsx
│   ├── SupplierDetail.tsx
│   ├── SupplierFilter.tsx
│   ├── ProductList.tsx
│   ├── QuotationForm.tsx
│   └── RatingDisplay.tsx
├── hooks/
│   ├── useSuppliers.ts
│   └── useSupplierDetail.ts
├── types/
│   └── supplier.types.ts
├── services/
│   └── suppliers.service.ts
└── index.ts
```

#### Data Flow
```
Browse Suppliers → Filter → Select → Request Quote
    ↓
SupplierGrid displays filtered suppliers
    ↓
SupplierCard shows summary
    ↓
Click → SupplierDetail shows full profile
    ↓
Click "Request Quote" → QuotationForm
    ↓
Submit → Create Quote Request
    ↓
Track quote status
```

---

## Design System Implementation

### Color Application
```
ComponentCard:
  background: bg-white
  border: border-gray-200
  hover: shadow-md (from Industrial Orange accent)

Button:
  primary: bg-orange-500 text-white (industrial orange)
  secondary: bg-gray-100 text-gray-900

Status Badge:
  active: bg-green-100 text-green-900 (electric green)
  pending: bg-blue-100 text-blue-900
  inactive: bg-gray-100 text-gray-900
```

### Typography Hierarchy
```
Page Title: h1 (32px, bold, dark graphite)
Section Header: h2 (24px, semibold, dark graphite)
Card Title: h3 (20px, semibold, dark graphite)
Body Text: 16px (regular, slate)
Secondary Text: 14px (regular, slate)
Labels: 12px (semibold, slate)
```

---

## Performance Optimization Strategy

### Lazy Loading
```
- Businesses grid: Infinite scroll or pagination
- Images: Lazy load with placeholder
- Components: Code splitting by route
```

### Caching
```
- Businesses list: Cache for 10 minutes
- Business detail: Cache for 30 minutes
- Suppliers: Cache for 5 minutes
- Franchises: Cache for 5 minutes
```

### Bundle Optimization
```
- Tree shake unused Radix UI components
- Dynamic import heavy components
- Compress images to WebP
- Minify CSS and JS
```

---

## Accessibility Design

### Keyboard Navigation
- Tab through all interactive elements
- Enter to select/click buttons
- Escape to close modals
- Arrow keys for carousel/dropdown

### Screen Reader Support
- Semantic HTML (buttons, links, forms)
- ARIA labels for icons
- Form label associations
- Status announcements for dynamic content

### Color Contrast
- Text on background: 4.5:1 minimum
- UI components: 3:1 minimum
- Test with WebAIM contrast checker

---

## RTL (Arabic) Considerations

### Layout Flipping
```
flex-row → [dir=rtl]:flex-row-reverse
margin-l → [dir=rtl]:margin-r
text-left → [dir=rtl]:text-right
```

### Number Formatting
- Thousands separator: , or . based on locale
- Currency: EGP symbol positioning
- Dates: DD/MM/YYYY format

---

## Testing Strategy

### Unit Tests
```
- Filter logic
- Data transformation
- Calculation functions (budget fit, etc)
- Component rendering with props
```

### Integration Tests
```
- Complete filter workflow
- Business detail page full flow
- Comparison feature end-to-end
- Application submission flow
```

### E2E Tests
```
- User browses businesses
- User applies filters
- User compares businesses
- User starts application
```

---

## Database Schema (Future)

### businesses table
```sql
CREATE TABLE businesses (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  investment INTEGER NOT NULL,
  setup_time INTEGER NOT NULL,
  staff_required INTEGER NOT NULL,
  monthly_cost INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### franchises table
```sql
CREATE TABLE franchises (
  id UUID PRIMARY KEY,
  business_id UUID REFERENCES businesses(id),
  fee INTEGER NOT NULL,
  royalty_percentage DECIMAL(5,2) NOT NULL,
  contract_months INTEGER NOT NULL
);
```

### suppliers table
```sql
CREATE TABLE suppliers (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  rating DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Integration Points

### With Budget Context
```
<BusinessCard budget={userBudget} />
→ Calculate budgetFitScore
→ Highlight green if fit, orange if stretch
```

### With Business Comparison
```
- Store selected businesses in context
- Pass to ComparisonTable
- Highlight differences
- Show budget fit for each
```

### With Start My Business Flow
```
- Click "Start My Business" on detail page
- Open wizard
- Pre-fill business info
- Continue with location, budget verification
```

---

## Error Handling

### API Errors
```
500 Server Error → Show "Something went wrong" with retry
404 Not Found → Show "Business not found"
400 Bad Request → Show validation error
Network Error → Show offline message with retry
```

### User Errors
```
Invalid filter selection → Show validation message
Empty results → Show "No businesses match your criteria"
Session timeout → Show "Please log in again"
```

---

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS 14+, Android 10+

---

**Status**: ✅ DESIGN APPROVED
**Created**: 2026-09-10
**Version**: 1.0
