"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Next.js's <Link href="/#section"> does not reliably scroll to the target
// when navigating FROM a different route — the new page's DOM (and the
// element with that id) often isn't mounted yet at the moment Next tries to
// scroll. This re-checks the hash after every route change and scrolls to it
// once the target actually exists in the DOM.
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    let attempts = 0;
    const maxAttempts = 20; // ~1s at 50ms intervals

    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
  }, [pathname]);

  return null;
}
