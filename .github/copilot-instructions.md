# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a React single-page application (SPA) bootstrapped with Vite.
- The main entry point is `src/main.jsx`, which renders the root `App` component from `src/App.jsx`.
- The project structure is component-driven, with most UI logic in `src/components/` and reusable UI elements in subfolders (e.g., `ui/shadcn-io/`).
- Assets (images, icons) are stored in `src/assets/`.

## Key Patterns & Conventions
- **Component Organization:**
  - Each component has its own `.jsx` and `.css` file (e.g., `About.jsx` + `About.css`).
  - Group related components in folders (e.g., `ui/shadcn-io/background-gradient-animation/`).
- **Styling:**
  - CSS Modules are not used; styles are global per component.
  - Use the corresponding `.css` file for each component.
- **Utilities:**
  - Shared JS utilities are in `src/lib/utils.js`.
- **ReactBitComponents:**
  - Custom interactive UI elements (e.g., `Particles.jsx`, `TiltedCard.jsx`) are in `src/ReactBitComponents/`.

## Developer Workflows
- **Development:**
  - Start the dev server: `npm run dev`
  - Entry: `index.html` loads the Vite bundle.
- **Build:**
  - Production build: `npm run build`
- **Linting:**
  - Run ESLint: `npm run lint`
  - ESLint config: `eslint.config.js`
- **No built-in testing setup** (add if needed).

## Integration & External Dependencies
- Uses Vite for fast builds and HMR.
- React is the primary UI library.
- Some components may use third-party libraries (check `package.json`).

## Examples
- To add a new section, create a new component in `src/components/`, import it in `App.jsx`, and add its CSS file.
- To add a new asset, place it in `src/assets/` and import it using a relative path in your component.

## Special Notes
- No TypeScript or type-checking by default.
- No server-side code; this is a purely client-side SPA.
- Follow the file/folder naming conventions for consistency.

---
If you are unsure about a pattern or workflow, check `README.md`, `package.json` scripts, or existing components for examples.
