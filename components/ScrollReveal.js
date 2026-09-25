"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Renders nothing; just observes every element with the "reveal" class on the
// current page and adds "in" once it scrolls into view, matching the
// fade/rise animation defined in globals.css.
//
// This re-runs on every route change (via `pathname`): Header/Footer/this
// component live in the root layout and never remount between pages, so
// without watching `pathname` this would only ever scan the very first page
// the visitor lands on. Navigating to another route client-side (e.g.
// clicking the logo from /founder back to "/") would then mount a fresh set
// of ".reveal" elements that nothing ever observes — leaving them stuck at
// opacity:0 forever, which looked like a blank page.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let currentObserver = null;

    // Run after the new page's DOM has actually painted.
    const raf = requestAnimationFrame(() => {
      const revealEls = document.querySelectorAll(".reveal:not(.in)");

      if (!("IntersectionObserver" in window)) {
        revealEls.forEach((el) => el.classList.add("in"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      revealEls.forEach((el) => observer.observe(el));
      currentObserver = observer;
    });

    return () => {
      cancelAnimationFrame(raf);
      if (currentObserver) currentObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
