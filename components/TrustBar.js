const LOGOS = [
  {
    name: "BullVera",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M4 16l6-7 4 4 6-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Netv",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "AstroV",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M15 3a7 7 0 1 0 6 10.5A7 7 0 0 1 15 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "ZenithBE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 18l6-11 4 6 3-4 5 9H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Lumen Labs",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Northbridge",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 19v-4a9 9 0 0 1 18 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 19h4M17 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vantik",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Pulsewave",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M2 12h4l2 6 4-12 2 6h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function LogoGroup({ ariaHidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden || undefined}>
      {LOGOS.map((logo) => (
        <span className="logo-item" key={logo.name}>
          {logo.icon}
          {logo.name}
        </span>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="trustbar" style={{ padding: "0 0 96px" }}>
      <div className="wrap">
        <div className="trustbar-wrap">
          <div className="marquee-mask">
            <div className="marquee-track">
              <LogoGroup />
              <LogoGroup ariaHidden />
            </div>
          </div>
          <div className="trustbar-rating">
            <span className="stars">★★★★★</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>4.9 / 5</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>from teams we&apos;ve shipped for</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
