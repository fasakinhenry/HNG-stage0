# Task.Card — Stage 0 Frontend Challenge

A clean, accessible, fully testable **Todo Item Card** built with **React** and **Tailwind CSS**.

## 🚀 How to Run Locally

### Option A — Drop into any Vite + React + Tailwind project

```bash
npm create vite@latest . -- --template react
bun install

# Add Tailwind
bun install tailwindcss @tailwindcss/vite
# vite.config.js → plugins: [tailwindcss(), react()]
# src/index.css  → @import "tailwindcss";

npm run dev
```

## ✅ `data-testid` Map

| `data-testid`               | Element                     | Notes                             |
| --------------------------- | --------------------------- | --------------------------------- |
| `test-todo-card`            | `<article>`                 | Root container                    |
| `test-todo-title`           | `<h2>`                      | Strikethrough when done           |
| `test-todo-description`     | `<p>`                       | Task notes                        |
| `test-todo-priority`        | `<span>`                    | High / Medium / Low, colour-coded |
| `test-todo-due-date`        | `<time datetime>`           | "Due Apr 19, 2026"                |
| `test-todo-time-remaining`  | `<time aria-live="polite">` | Updates every 30s                 |
| `test-todo-status`          | `<strong>`                  | "In Progress" → "Done"            |
| `test-todo-complete-toggle` | `<input type="checkbox">`   | Real checkbox                     |
| `test-todo-tags`            | `<ul role="list">`          | Tag chips                         |
| `test-todo-tag-design`      | `<li>`                      | Tag                               |
| `test-todo-tag-urgent`      | `<li>`                      | Tag                               |
| `test-todo-tag-work`        | `<li>`                      | Tag                               |
| `test-todo-edit-button`     | `<button>`                  | console.log + alert               |
| `test-todo-delete-button`   | `<button>`                  | Confirm → animated removal        |

## ♿ Accessibility

- Real checkbox with associated `<label>` (visually hidden)
- `aria-live="polite"` on time-remaining
- All buttons have `aria-label`
- `focus-visible` outlines on all interactive elements
- WCAG AA colour contrast throughout
- Fully keyboard-navigable (Tab → checkbox → edit → delete)

## ⚖️ Trade-offs

- Hard-coded due date (Stage 0 spec) — trivial to accept as a prop
- No external state library — `useState` / `useEffect` suffice
- Checkbox checkmark via inline SVG `bg-image` — avoids pseudo-element hacks with `appearance-none`

> Made with ❤️ by [Fasakin Henry](https://github.com/fasakinhenry) during the HNG Internship Program.
