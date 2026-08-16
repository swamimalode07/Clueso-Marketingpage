"use client";

import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

type AutoAdvanceOptions = {
  length: number;
  intervalMs: number;
  paused: boolean;
  setIndex: Dispatch<SetStateAction<number>>;
};

const useAutoAdvance = ({
  length,
  intervalMs,
  paused,
  setIndex,
}: AutoAdvanceOptions) => {
  useEffect(() => {
    if (paused || length < 2) return;

    const id = window.setInterval(() => {
      setIndex((index) => (index + 1) % length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [length, intervalMs, paused, setIndex]);
};

export default useAutoAdvance;
