"use client";
import { useSyncExternalStore } from "react";
const query = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function snapshot() {
  return window.matchMedia(query).matches;
}
// A stable server snapshot also runs during hydration. The browser preference
// takes over immediately afterward, without changing the server-rendered tree.
export function useReducedMotionPreference() {
  return useSyncExternalStore(subscribe, snapshot, () => false);
}
