"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [clockText, setClockText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const isNarrow = typeof window !== "undefined" && window.innerWidth <= 480;
      const datePart = now.toLocaleDateString(
        undefined,
        isNarrow
          ? { month: "short", day: "numeric" }
          : { weekday: "short", month: "short", day: "numeric" }
      );
      const timePart = now.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
      });
      setClockText(`${datePart} \u00b7 ${timePart}`);
    }
    updateClock();
    const id = setInterval(updateClock, 30 * 1000);
    window.addEventListener("resize", updateClock);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", updateClock);
    };
  }, []);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/#work", label: "Work" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header>
      <div className="wrap" style={{ padding: "0 24px" }}>
        <div className="navpill">
          <div className="brand-group">
            <Link href="/" className="logo">
              <Image
                src="/images/logo.png"
                alt="Netvly"
                width={116}
                height={30}
                className="logo-img"
                priority
              />
            </Link>
            <span className="nav-clock" id="nav-clock">
              <span className="live-dot" />
              <span id="nav-clock-text">{clockText}</span>
            </span>
          </div>

          <ul className="navlinks">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/#contact" className="nav-cta">
            Start a project
          </Link>

          <button
            className="burger"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div
            className="navlinks"
            style={{
              display: "flex",
              position: "fixed",
              top: 78,
              left: 24,
              right: 24,
              background: "#ffffff",
              flexDirection: "column",
              padding: "20px 24px",
              gap: 16,
              border: "1px solid rgba(10,10,20,.1)",
              borderRadius: 20,
              boxShadow: "0 20px 50px -20px rgba(20,20,45,.25)",
              zIndex: 200,
            }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>
              Start a project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
