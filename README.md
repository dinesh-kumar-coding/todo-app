# ✅ React To-Do App

A clean, functional to-do list built with React. Add tasks, mark them complete, delete them, and see how many remain — all with a warm, minimal interface. Built to practice core React state management and the component composition patterns behind interactive apps.

🔗 **Live demo:**https://todo-app-din-dev.vercel.app/

---

## Features

- **Add tasks** via a controlled input form (with empty-input validation)
- **Mark tasks complete** by clicking them (strikethrough styling)
- **Delete tasks** individually
- **Live count** of remaining (incomplete) tasks
- Warm, minimal "paper" UI

## Built with

- **React** (functional components + hooks)
- **Vite** (build tooling)
- Deployed on **Vercel**

## What I learned / React concepts used

- **Immutable state updates** — adding (spread operator), deleting (`.filter()`), and toggling (`.map()` with object spread) without ever mutating state directly
- Managing a list in state and rendering it with `.map()` and stable `key`s
- **Lifting state up** and passing functions as props — the app is split into `App`, `TodoForm`, and `TodoList` components, with state owned at the right level
- Controlled form inputs with validation
- **Deriving values** from state (the remaining-tasks count) instead of storing them separately
- Handling event propagation (`stopPropagation`) so the delete button doesn't also toggle the task

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run build      # production build
```
