# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Next Play – Rule Library" is a kid-friendly React web app that teaches football rules through interactive SVG animations and quizzes. It covers three rules: Holding, Offside, and False Start.

## Commands

- **Dev server**: `npm run dev` (Vite, port 5173)
- **Build**: `npm run build` (runs `tsc -b && vite build`)
- **Preview production build**: `npm run preview`

No test runner or linter is configured.

## Architecture

**Stack**: React 18 + TypeScript + Vite + React Router v6. Plain CSS (no framework). localStorage for persistence.

**Routing** (defined in `src/App.tsx`):
- `/` → HomePage (rule card grid)
- `/rules/:ruleId` → RuleLessonPage (animation + explanation)
- `/rules/:ruleId/quiz` → QuizPage (2-question quiz per rule)

**Key data flow**:
- Rules are hardcoded in `src/data/rules.ts` (each has id, title, summary, explanation, and quiz questions)
- `src/hooks/useProgress.ts` manages quiz scores in localStorage (key: `nextplay_progress_v1`). Best scores only increase, never decrease on retakes.
- `src/components/VideoPlaceholder.tsx` routes to the correct animation component based on `ruleId`

**Animations** (`src/components/animations/`): Each rule has a dedicated React component rendering an inline SVG with CSS keyframe animations showing the penalty scenario and a referee throwing a flag.

## TypeScript

Strict mode is enabled with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`. Target is ES2020.

## Styling

All styles live in `src/styles/global.css`. The design uses a kid-friendly color palette with large touch targets and responsive layout.
