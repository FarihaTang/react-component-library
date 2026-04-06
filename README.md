# @farihatang/react-ui — React Component Library

> A React component library to help you build your own GitHub projects more easily. Built with React 18, TypeScript (strict), and Tailwind CSS. Documented in Storybook.

🔗 **Storybook**: _https://react-component-library-farihatang.vercel.app_

---

## Components

| Component | Description                                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `Button`  | 4 variants, 3 sizes, loading state, leading/trailing icons                                                                    |
| `NavBar`  | 2 themes (light/dark), scroll-triggered background effect, configurable links, CTA button, responsive mobile menu with toggle |

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm

### Run Storybook locally

```bash
git clone git@github.com:FarihaTang/react-component-library.git
cd react-component-library
npm install
npm run dev          # opens Storybook at http://localhost:6006
```

### Use in a project

```bash
npm install @farihatang/react-ui
```

```tsx
import { Button } from '@farihatang/react-ui';
// Import Tailwind styles in your app root
import '@farihatang/react-ui/dist/styles.css';

export function PaymentButton() {
  return (
    <Button variant="primary" size="lg">
      To Pay
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
│   ├── NavBar/
│   │   ├── NavBar.tsx
│   │   └── NavBar.stories.tsx
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

## Author

**FarihaTang** — [yourwebsite.com](https://yourwebsite.com) · [LinkedIn](https://www.linkedin.com/in/farihatang) · [GitHub](https://github.com/FarihaTang)
