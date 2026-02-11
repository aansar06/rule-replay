# Next Play – Rule Library

A kid-friendly web app that teaches 3 football rules (Holding, Offside, False Start) through short lessons and interactive 2-question quizzes. Built with React, TypeScript, and Vite.

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router v6
- localStorage for progress tracking
- Plain CSS (no frameworks)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
  data/rules.ts              Rule content and quiz questions (hardcoded)
  types/rule.ts              TypeScript interfaces (Rule, QuizQuestion)
  hooks/useProgress.ts       Custom hook for localStorage progress tracking
  components/
    AppHeader.tsx             Header bar with app title and home link
    RuleCard.tsx              Card component for the home page rule listing
    VideoPlaceholder.tsx      Placeholder for animation/video area
  pages/
    HomePage.tsx              Home screen – lists 3 rules with progress
    RuleLessonPage.tsx        Lesson screen – video placeholder + explanation
    QuizPage.tsx              Quiz screen – 2 questions with grading
    NotFoundPage.tsx          404 / invalid rule handler
  styles/
    global.css                All styles (kid-friendly, responsive)
  App.tsx                     Router setup
  main.tsx                    Entry point
```

## Routes

| Path                | Screen           |
|---------------------|------------------|
| `/`                 | Home (Rule Library) |
| `/rules/:ruleId`    | Rule Lesson      |
| `/rules/:ruleId/quiz` | Quick Quiz     |
| `*`                 | Not Found        |

## Progress Tracking

- Stored in `localStorage` under key `nextplay_progress_v1`
- Tracks `bestScore` (0–2) per rule
- Best score only increases (never decreases on retakes)
- `completed` status is derived: `bestScore === 2`
- Persists across page refreshes
- Robust: corrupted JSON is safely reset to defaults

## Notes / Assumptions

- **Video placeholder**: No real videos are included. The lesson page renders a styled placeholder box with a play icon and "Animation here" label. This area is designed to be replaced with actual video/animation content.
- **No backend**: All data is hardcoded in `src/data/rules.ts`.
- **No tests framework**: Manual testing is used (see checklist below).

## Manual Test Checklist

### 1) Navigation
- [ ] Open Home, click "Learn" on Holding, confirm lesson page shows.
- [ ] Click Back, confirm returns to Home.

### 2) Quiz grading (Perfect score)
- [ ] Go to Holding quiz, select correct answers for both.
- [ ] Submit.
- [ ] Expected: Shows "You got 2/2"
- [ ] Both questions marked correct
- [ ] Go back to Home; Holding card shows "Best: 2/2" and "Completed".

### 3) Quiz grading (Mixed score)
- [ ] Go to Offside quiz. Get 1 correct, 1 wrong.
- [ ] Expected: Shows "You got 1/2"
- [ ] Reveals correct answers
- [ ] Home shows "Best: 1/2" for Offside (not completed)

### 4) Best score updates
- [ ] Take Offside quiz again and get 2/2.
- [ ] Expected: Best becomes 2/2 and "Completed".

### 5) Best score does not decrease
- [ ] After getting 2/2 on a rule, retake and get 1/2.
- [ ] Expected: Best stays 2/2.

### 6) Persistence
- [ ] Refresh the page.
- [ ] Expected: Best scores remain (localStorage works).

### 7) Disabled submit
- [ ] On any quiz, do not answer both questions.
- [ ] Expected: Submit button disabled until both answered.

### 8) Invalid routes
- [ ] Go to `/rules/bad-id`
- [ ] Expected: "Rule not found" with a button to Home.
- [ ] Go to `/rules/bad-id/quiz`
- [ ] Expected: Same behavior.
