# @farihatang/react-ui — React Component Library

> A React component library to help you build your own GitHub projects more easily. Built with React 18, TypeScript (strict), and Tailwind CSS. Documented in Storybook.

🔗 **Storybook**: _[Deploy to Chromatic / Vercel and update this link]_

---

## Components

| Component | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `Button`  | 4 variants, 3 sizes, loading state, leading/trailing icons        |
| `NavBar`  | Semantic status labels — Settled, Pending, Failed, Refunded, etc. |

## Design Decisions

- **IBM Plex Sans + IBM Plex Mono** — chosen for legibility and a professional fintech feel; monospace for all numeric values ensures tabular alignment
- **Semantic colour tokens** via Tailwind config — `brand`, `ink`, `surface`, `danger`, `success`, `warning`, `info`
- **`forwardRef` on all input primitives** — allows parent form libraries (React Hook Form, Formik) to work without wrappers
- **`cn()` utility** — thin wrapper around `clsx` for conditional class merging, no runtime overhead
- **Zero runtime CSS** — Tailwind utility classes only, no CSS-in-JS

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm

### Run Storybook locally

```bash
git clone https://github.com/YOUR_USERNAME/arcadia-ui.git
cd arcadia-ui
npm install
npm run dev          # opens Storybook at http://localhost:6006
```

### Use in a project

```bash
npm install @farihatang/react-ui
```

```tsx
import { Button, Navbar } from '@arcadia/ui';
// Import Tailwind styles in your app root
import '@farihatang/react-ui/dist/styles.css';

export function PaymentButton() {
  return (
    <Button variant="primary" size="lg">
      Pay <AmountDisplay value={99.99} size="sm" />
    </Button>
  );
}
```

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.stories.tsx
│   ├── Badge/
│   ├── Input/
│   ├── Select/
│   ├── AmountDisplay/
│   ├── Card/
│   ├── TransactionRow/
│   └── StatCard/
├── lib/
│   └── cn.ts
├── styles/
│   └── globals.css
└── index.ts            ← public API
```

## Scripts

```bash
npm run dev             # Storybook dev server (port 6006)
npm run build           # Build library (CJS + ESM + .d.ts)
npm run build-storybook # Static Storybook for deployment
npm run type-check      # TypeScript strict check
npm run lint            # ESLint
```

## Roadmap

- [ ] Dark mode support via CSS variables
- [ ] Radix UI primitives for Modal, Popover, Tooltip
- [ ] `DateRangePicker` for transaction filtering
- [ ] Vitest + Testing Library unit tests
- [ ] Chromatic visual regression tests

## Author

**[Your Name]** — [yourwebsite.com](https://yourwebsite.com) · [LinkedIn](https://linkedin.com/in/yourprofile) · [GitHub](https://github.com/YOUR_USERNAME)

---

_Part of the Arcadia portfolio — a suite of fintech frontend projects demonstrating React, TypeScript, and design-system skills._
