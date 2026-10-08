"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { useEffect, useState } from "react";
import {} from "framer-motion";
export default function Typewriter({
  text,
  speed = 16,
  onComplete,
  className,
}: {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      const timer = setTimeout(() => onComplete?.(), 0);
      return () => clearTimeout(timer);
    }
    let i = 0;
    const timer = setInterval(() => {
      i = Math.min(text.length, i + 3);
      setCount(i);
      if (i >= text.length) {
        clearInterval(timer);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, reduce, onComplete]);
  return (
    <span className={className}>
      <span aria-hidden="true">{reduce ? text : text.slice(0, count)}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
