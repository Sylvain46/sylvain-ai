"use client";

import { useEffect } from "react";

function isProtectedImageTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("img, [data-protected-image], [data-protected-media]"));
}

export default function ImageProtection() {
  useEffect(() => {
    const preventImageAction = (event: Event) => {
      if (isProtectedImageTarget(event.target)) event.preventDefault();
    };

    document.addEventListener("contextmenu", preventImageAction);
    document.addEventListener("dragstart", preventImageAction);

    return () => {
      document.removeEventListener("contextmenu", preventImageAction);
      document.removeEventListener("dragstart", preventImageAction);
    };
  }, []);

  return null;
}
