import Image from "next/image";

export const metadata = {
  title: "Founder — Netvly",
};

export default function FounderPage() {
  return (
    <main className="page-main">
      <div className="wrap content">
        <span className="eyebrow">About</span>
        <h1>Meet the founder</h1>

        <div className="founder-card">
          <div className="founder-avatar" style={{ padding: 0, overflow: "hidden", position: "relative" }}>
            <Image
              src="/images/founder.jpg"
              alt="Haramohan Mahalik"
              fill
              style={{ objectFit: "cover" }}
              sizes="96px"
            />
          </div>
          <div>
            <div className="founder-name">Haramohan Mahalik</div>
            <div className="founder-role">Founder &amp; CEO, Netvly</div>
            <div className="founder-links">
              <a href="https://www.linkedin.com/company/netvly/">LinkedIn</a>
              {/* <a href="#">Twitter</a> */}
              <a href="mailto:haramohan222@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className="quote">
          &quot;We started Netvly because too many good ideas never make it past a slide deck. Our
          job is to turn them into products people actually use.&quot;
        </div>

        <h2>Background</h2>
        <p>
          Haramohan has spent years building web and mobile products across fintech, networking,
          and consumer apps, working with early-stage founders and growing teams alike. That
          experience shapes how Netvly runs every engagement: short feedback loops, visible
          progress every week, and no black-box handoffs.
        </p>

        <h2>Why Netvly</h2>
        <p>
          Netvly was founded on a simple idea &mdash; that a small, senior team can move faster
          and build better than a large, layered agency. Every project is led hands-on, from the
          first wireframe to the App Store submission, with the same people involved throughout.
        </p>

        <h2>Outside of work</h2>
        <p>
          When not shipping products, Haramohan mentors early-stage founders and writes about
          product development and team building.
        </p>
      </div>
    </main>
  );
}
