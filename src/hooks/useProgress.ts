import { useState, useCallback } from 'react';

const STORAGE_KEY = 'nextplay_progress_v1';

interface ProgressEntry {
  bestScore: number;
}

type ProgressMap = Record<string, ProgressEntry>;

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      return {};
    }
    return parsed as ProgressMap;
  } catch {
    return {};
  }
}

function saveProgress(progress: ProgressMap): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(loadProgress);

  const getBestScore = useCallback(
    (ruleId: string): number => {
      return progress[ruleId]?.bestScore ?? 0;
    },
    [progress]
  );

  const updateBestScore = useCallback(
    (ruleId: string, score: number): void => {
      setProgress((prev) => {
        const prevBest = prev[ruleId]?.bestScore ?? 0;
        const newBest = Math.max(prevBest, score);
        const next = { ...prev, [ruleId]: { bestScore: newBest } };
        saveProgress(next);
        return next;
      });
    },
    []
  );

  return { getBestScore, updateBestScore };
}
