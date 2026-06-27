# ElectroShow - Electronics Product Showcase Website

A production-ready Mini Product Showcase Website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS (v4)**, and **Redux Toolkit + Redux Persist**.

Designed to showcase senior-level frontend architecture, modular component structure, and SOLID design principles.

---

## 🔗 Source Code Repository
- **GitHub Repository**: [https://github.com/username/electro-show](https://github.com/username/electro-show) *(simulated production workspace)*

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or later)
- npm (v9.x or later)

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd my-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build the application for production:
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack & Dependencies
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v4 (using CSS variables for dynamic themes)
- **State Management**: Redux Toolkit (RTK)
- **Form Management**: React Hook Form (library validator)
- **Persistence**: Redux Persist (SSR-safe custom LocalStorage engine)
- **Icons**: Lucide React

---

## 📁 Folder Structure
The project follows a modular, feature-isolated layout using a `src/` layout:

```text
src/
├── app/                  # Next.js App Router (Layouts, Pages, Router Configurations)
│   ├── about/            # About Page
│   ├── cart/             # Shopping Cart Page
│   ├── contact/          # Contact Page (with Form Validation)
│   ├── login/            # Simulated Authentication Portal
│   ├── products/         # Product Showcase (Catalog Grid & Dynamic Details [id])
│   ├── error.tsx         # Global Error boundary
│   ├── globals.css       # Tailwind directives & Theme mappings
│   ├── layout.tsx        # Global Layout containing Providers, Navbar, Footer
│   ├── loading.tsx       # Global Loading Fallback
│   └── not-found.tsx     # Custom 404 page
├── assets/               # Media & Icons resources
├── components/           # Reusable UI Components
│   ├── Badge/            # Colored Status badge tags
│   ├── Breadcrumb/       # Detail page route navigation path
│   ├── Button/           # Brand Buttons (Primary, Secondary, Outline, Danger)
│   ├── EmptyState/       # Blank filter / search response UI
│   ├── FilterSidebar/    # Interactive Filter panel (uses useFilterSidebar.ts)
│   ├── Footer/           # Footer containing newsletter forms (uses useFooter.ts)
│   ├── Hero/             # Interactive homepage banner carousel (uses useHero.ts)
│   ├── Loader/           # Page spinners & Skeleton cards loaders
│   ├── Modal/            # Modular dialog box overlays (uses useModal.ts)
│   ├── Navbar/           # Main header navigation bar (uses useNavbar.ts)
│   ├── ProductCard/      # Grid cards containing add-to-cart & wishlist controls (uses useProductCard.ts)
│   ├── ProductGrid/      # Responsive column container
│   ├── QuantitySelector/ # Item increment/decrement controls (uses useQuantitySelector.ts)
│   └── SearchBar/        # Active inputs with clear button controls
├── constants/            # Immutable variables, routes, messages, regex patterns
├── data/                 # Local JSON database datasets (products, categories)
├── hooks/                # Custom React hooks (useCart, useFilter, useSearch, etc.)
├── lib/                  # Layout Provider wrappers (Redux + PersistGate)
├── redux/                # Feature-based Redux architecture (store, hooks, slices, selectors)
├── services/             # Pure computational business logic (product filters, cart math)
├── styles/               # CSS styling variables (Light & Dark theme palettes)
├── types/                # Strict TypeScript typings & interfaces
└── utils/                # General helpers (formatter, validation checks, seo)
```

---

## 🏛️ Architectural Decisions

### 1. Why App Router?
Next.js App Router provides built-in SEO enhancements, layouts nesting, and route directories. We use Client Components for interactive UI nodes while utilizing static parameters generation structure for detail pages.

### 2. Why Redux Toolkit + Redux Persist instead of Context API?
For complex state trees (Cart items, Wishlist arrays, Filter queries, Themes, Auth states), Redux Toolkit provides an enterprise-ready architecture. Integrating **Redux Persist** guarantees cart and session retention on reload. We use a **custom SSR-safe storage engine** in Redux configuration to prevent standard hydration conflicts.

### 3. Why Isolated Hook Logic Files (`useComponent.ts`)?
To follow the **Single Responsibility Principle (SRP)**, we separate React views from component logic:
- `Component.tsx` solely maps JSX elements and handles visual binds.
- `useComponent.ts` holds React hooks, state initializations, Redux dispatches, and event handlers following standard React prefixing patterns (e.g. `useNavbar.ts`, `useModal.ts`).
- By naming hook files with a `use` prefix, we avoid name resolution collisions (e.g., resolving `Component.ts` instead of `Component.tsx`) and eliminate bundler index resolution loop issues in the editor.
- Components leverage specialized utilities and services to keep TSX lightweight.

### 4. Why Services & Utilities?
All sorting, filtering, and mathematical calculations are extracted from components:
- `CartService` calculates tax values, subtotal sums, free shipping limits, and order totals.
- `ProductService` filters categories, prices, and matches search queries.
- `Validation` evaluates names, messages, and matches email formats.

### 5. Why SEO Strategy?
We use a unified `generateSEO` utility which generates standard titles, keywords, canonical URLs, and Open Graph/Twitter card tags dynamically for every route.

---

## ✨ Features Implemented
- **Dynamic Search & Filtering**: Debounced query processing with price range slide selectors, sorting criteria (price, rating, name), and categories filters.
- **Wishlist & Cart Syncing**: Global state managers utilizing Redux slices, persisting carts, and adjusting stock thresholds cleanly.
- **Aesthetic Dark Mode**: Theme variables linked to tailwind theme layers, synced globally via Redux, and toggled instantly without page flicker.
- **Simulated Authentication**: Handles registered logins (with name length requirements) and guest check-ins. Updates Navbars and checkout overlays.
- **Breadcrumb Navigation & Sharing**: Clickable route navigators, plus clipboard link copying with check confirmation icons.
- **A11y & Form Validations**: Strict ARIA focus states, error messages, and disabled button indicators.

---

## ⚠️ Assumptions and Limitations
- **Mock Database Initialization**: The application relies on local JSON database files (`products.json` and `categories.json`) for data seeding, which is loaded into the Redux store during startup. No remote database or external REST APIs are called.
- **Client-Side Simulated Authorization Flow**: Authentication is handled entirely client-side with input validation rules. No real security tokens, cookies, OAuth protocols, or server-side session checks are implemented.
- **Simulated Checkout Gateways**: Checking out triggers a success modal confirming the final totals, clears the shopping cart, and redirects to the catalog. No actual payment gateways (such as Stripe or PayPal) are connected.

---

## 🤖 AI Tools & Platforms Utilized
- **Gemini 3.5 Flash**: Utilized as the primary AI model and coding companion during development for code generation, structuring components, isolating hooks, implementing selectors/slices, and aligning architectural patterns.
- **Antigravity AI Coding Assistant**: Used as the autonomous agent platform wrapping the Gemini model to orchestrate file system operations, execute refactoring tasks, and verify production builds.
