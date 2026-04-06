# Junipra Development Steering

This repository is a Vue 3 + Vite + Tailwind CSS v4 + shadcn-vue marketing site. Treat these instructions as the default implementation standard when changing UI or structure.

## Core Stack

- Use Vue 3 SFCs with `script setup` and TypeScript.
- Use `vue-router` for page-level navigation.
- Use Tailwind CSS utilities for styling.
- Use generated `shadcn-vue` components from `src/components/ui` before inventing custom primitives.
- Keep global theme tokens in [src/style.css](/Users/cameronbaffuto/Developer/Junipra/src/style.css).
- Use Firebase Hosting for deployment and Firestore for the contact submission flow.

## Styling Rules

- Do not use inline styles or `<style>` blocks in components.
- Prefer semantic theme utilities such as `bg-background`, `text-muted-foreground`, `border-border`, `bg-primary`, and `text-primary-foreground`.
- Prefer Tailwind scale classes over arbitrary values when an equivalent exists.
- Prefer `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl` over `rounded-[...]` when possible.
- Prefer spacing scale utilities over arbitrary spacing values when possible.
- Use `gap-*` for layout spacing instead of `space-x-*` or `space-y-*`.
- Use `size-*` when width and height are equal.
- Add new colors through theme tokens in `src/style.css`, then consume them semantically.

## shadcn-vue Rules

- Prefer composition with existing shadcn-vue components before building custom UI wrappers.
- Use built-in variants and sizes first.
- Keep `Card` composition complete when practical: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
- Use `Badge`, `Separator`, `Accordion`, `Sheet`, `Input`, `Textarea`, and other generated components instead of restyling raw elements unless there is a clear reason not to.
- Overlay components must stay accessible and dismiss correctly on interaction.

## Site Architecture

- Shared page copy belongs in [src/content/site-copy.ts](/Users/cameronbaffuto/Developer/Junipra/src/content/site-copy.ts).
- Shared content types belong in [src/lib/types.ts](/Users/cameronbaffuto/Developer/Junipra/src/lib/types.ts).
- Shared site-level UI belongs in `src/components/site`.
- Routes are defined in [src/router.ts](/Users/cameronbaffuto/Developer/Junipra/src/router.ts).
- Keep page components in `src/pages`.

## UX Expectations

- The site must stay fully responsive across mobile, tablet, and desktop.
- Navigation interactions should feel complete on mobile. If a drawer or sheet opens navigation, it should close after selection.
- Favor clear hierarchy, strong readability, and restrained but intentional visual detail.
- Avoid generic placeholder sections once real content exists.

## Workflow

- If new shadcn-vue components are needed, add them with the CLI rather than hand-copying patterns.
- If a new design rule becomes repeated project practice, update this file.
- Build after meaningful UI or routing changes with `npm run build`.

## Firebase Conventions

- Prefer Firebase Hosting classic for this SPA.
- Keep Hosting configuration in `firebase.json` and the project alias in `.firebaserc`.
- Prefer Firestore-backed form submissions when the project already has a Firestore-triggered email workflow.
- Keep Firestore rules explicit and deny reads and updates unless they are intentionally needed.
- Use GitHub Actions for CI and Firebase Hosting deployment automation.
