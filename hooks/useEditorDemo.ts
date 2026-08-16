"use client";

import { useEffect, useState } from "react";

const TICK_MS = 60;

type EditorDemoOptions = {
  taskCount: number;
  taskMs: number;
  holdMs: number;
  active: boolean;
};

const useEditorDemo = ({
  taskCount,
  taskMs,
  holdMs,
  active,
}: EditorDemoOptions) => {
  const [elapsed, setElapsed] = useState(0);
  const cycleMs = taskCount * taskMs + holdMs;

  useEffect(() => {
    if (!active) return;

    const id = window.setInterval(() => {
      setElapsed((value) => (value + TICK_MS) % cycleMs);
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, [active, cycleMs]);

  const completed = Math.min(Math.floor(elapsed / taskMs), taskCount);
  const finished = completed >= taskCount;
  const progress = finished ? 100 : ((elapsed % taskMs) / taskMs) * 100;

  return { completed, progress, finished };
};

export default useEditorDemo;
