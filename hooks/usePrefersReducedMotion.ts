"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

const getServerSnapshot = () => false;

const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export default usePrefersReducedMotion;
