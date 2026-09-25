import Link from "next/link";

export const metadata = {
  title: "About Us — Netvly",
  description:
    "Netvly is a product studio building web and mobile applications for teams who need to ship something real.",
};

const VALUES = [
  {
    title: "Ship real things",
    desc: "We measure progress by what's live, not what's in a deck. Every engagement ends with something users can actually open.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 12l5 5L20 6" stroke="#6D4CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "One team, start to finish",
    desc: "The people who design your product are the same people who build and ship it — no handoffs, no lost context.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.2" stroke="#2E6FE0" strokeWidth="1.6" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#2E6FE0" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Visible every week",
    desc: "Short sprints, working software you can click through weekly, and no surprises when launch day arrives.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" stroke="#C43FA0" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="page-main">
      <div className="wrap content" style={{ maxWidth: 780 }}>
        <span className="eyebrow">About</span>
        <h1>Building products people actually use</h1>

        <p>
          Netvly is a product studio that designs and builds web and mobile applications for
          teams who need to ship something real — not a prototype that stalls after the demo. We
          work end to end: product design, engineering, App Store &amp; Play Store launch, and the
          support that keeps things running afterward.
        </p>
        <p>
          We keep teams small and senior on purpose. That means fewer handoffs, faster decisions,
          and a product that stays coherent from the first wireframe to the last release.
        </p>

        <div className="about-stats">
          <div className="stat">
            <b>40+</b>
            <span>products shipped</span>
          </div>
          <div className="stat">
            <b>3</b>
            <span>industries served</span>
          </div>
          <div className="stat">
            <b>6–10 wks</b>
            <span>to first release</span>
          </div>
        </div>

        <h2>What we care about</h2>
        <div className="value-grid">
          {VALUES.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        <h2>How we work</h2>
        <p>
          Every project runs through the same five stages — discover, design, build, launch,
          support — so nothing gets rebuilt twice and nothing ships without a plan for what
          happens after launch. You can see the full breakdown on the{" "}
          <Link className="inline" href="/#process">
            process
          </Link>{" "}
          section of the home page.
        </p>

        <div className="about-cta">
          <p>Have a project in mind?</p>
          <Link href="/#contact" className="btn-grad">
            Start a project
          </Link>
        </div>
      </div>
    </main>
  );
}
