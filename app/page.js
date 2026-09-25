import Image from "next/image";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main id="top">
            <section className="hero">
          <div className="wrap">
            <div className="badge"><span className="pip">NEW</span> Now booking Q4 builds</div>
            <h1 className="reveal">We design and build <span className="grad-text">web &amp; mobile apps</span> that ship.</h1>
            <p className="lede reveal">Netvly is a product studio for teams who need a real web app and mobile app — designed, engineered, and launched by one team, start to finish.</p>
            <div className="hero-ctas reveal">
              <a href="#contact" className="btn-grad">Start a project</a>
              <a href="#work" className="btn-outline">See our work</a>
            </div>

            <div className="hero-visual reveal">
              <div className="float-chip fc1">
                <span className="fc-icon" style={{background:'linear-gradient(135deg,#8B6BFF,#4F8CFF)'}}>🚀</span>
                <div><div style={{fontSize:'14px'}}>40+ products</div><div style={{fontSize:'11px', color:'var(--muted)', fontWeight:'500'}}>shipped to production</div></div>
              </div>
              <div className="float-chip fc2">
                <span className="fc-icon" style={{background:'linear-gradient(135deg,#FF6FCE,#8B6BFF)', color:'#fff'}}>★</span>
                <div><div style={{fontSize:'14px'}}>4.9 / 5</div><div style={{fontSize:'11px', color:'var(--muted)', fontWeight:'500'}}>average client rating</div></div>
              </div>

              <div className="glass-frame">
                <div className="mock-row">
                  <div className="mock mock-web">
                    <div className="mock-bar"><span></span><span></span><span></span></div>
                    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, sans-serif">
                      <rect width="560" height="320" fill="#FFFFFF"/>
                      <rect x="0" y="0" width="560" height="1" fill="#E4E4EA"/>
                      <circle cx="28" cy="24" r="5" fill="url(#hg1)"/>
                      <text x="40" y="28" fontSize="13" fontWeight="700" fill="#101014">netvly</text>
                      <text x="230" y="28" fontSize="11" fill="#8B8B95">Overview</text>
                      <text x="300" y="28" fontSize="11" fill="#101014" fontWeight="600">Projects</text>
                      <text x="368" y="28" fontSize="11" fill="#8B8B95">Team</text>
                      <circle cx="532" cy="24" r="11" fill="url(#hg2)"/>

                      <text x="24" y="70" fontSize="16" fontWeight="700" fill="#101014">Good morning, Alex</text>
                      <text x="24" y="88" fontSize="11" fill="#8B8B95">Here's what's shipping this week</text>

                      <rect x="24" y="104" width="164" height="66" rx="12" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <text x="40" y="128" fontSize="10" fill="#8B8B95">Active builds</text>
                      <text x="40" y="150" fontSize="20" fontWeight="700" fill="#101014">12</text>
                      <text x="130" y="150" fontSize="10" fontWeight="600" fill="#22A06B">+3 this wk</text>

                      <rect x="198" y="104" width="164" height="66" rx="12" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <text x="214" y="128" fontSize="10" fill="#8B8B95">In review</text>
                      <text x="214" y="150" fontSize="20" fontWeight="700" fill="#101014">4</text>

                      <rect x="372" y="104" width="164" height="66" rx="12" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <text x="388" y="128" fontSize="10" fill="#8B8B95">Shipped</text>
                      <text x="388" y="150" fontSize="20" fontWeight="700" fill="#101014">38</text>
                      <text x="424" y="150" fontSize="10" fontWeight="600" fill="#22A06B">▲ 14%</text>

                      <rect x="24" y="186" width="512" height="112" rx="14" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <text x="40" y="210" fontSize="11" fontWeight="600" fill="#101014">Recent projects</text>
                      <text x="500" y="210" fontSize="10" fill="#8B8B95">View all</text>
                      <rect x="40" y="222" width="10" height="10" rx="3" fill="url(#hg1)"/>
                      <rect x="58" y="223" width="140" height="8" rx="3" fill="#D9D9E0"/>
                      <rect x="452" y="219" width="64" height="18" rx="9" fill="#E9F7EF"/>
                      <text x="484" y="232" textAnchor="middle" fontSize="9" fill="#22A06B">Live</text>
                      <rect x="40" y="248" width="10" height="10" rx="3" fill="url(#hg2)"/>
                      <rect x="58" y="249" width="120" height="8" rx="3" fill="#D9D9E0"/>
                      <rect x="452" y="245" width="64" height="18" rx="9" fill="#FFF3E0"/>
                      <text x="484" y="258" textAnchor="middle" fontSize="9" fill="#B26A00">Review</text>
                      <rect x="40" y="274" width="10" height="10" rx="3" fill="#4F8CFF"/>
                      <rect x="58" y="275" width="150" height="8" rx="3" fill="#D9D9E0"/>
                      <rect x="452" y="271" width="64" height="18" rx="9" fill="#E9F7EF"/>
                      <text x="484" y="284" textAnchor="middle" fontSize="9" fill="#22A06B">Live</text>

                      <defs>
                        <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8B6BFF"/><stop offset="1" stopColor="#4F8CFF"/></linearGradient>
                        <linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FF6FCE"/><stop offset="1" stopColor="#8B6BFF"/></linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="mock mock-mobile">
                    <div className="mock-bar"><span></span><span></span><span></span></div>
                    <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, sans-serif">
                      <rect width="240" height="320" fill="#FFFFFF"/>
                      <text x="20" y="24" fontSize="10" fontWeight="600" fill="#101014">9:41</text>
                      <rect x="196" y="17" width="24" height="10" rx="2" fill="none" stroke="#101014" strokeWidth="1"/>

                      <text x="20" y="52" fontSize="14" fontWeight="700" fill="#101014">netvly</text>
                      <circle cx="212" cy="47" r="10" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <circle cx="215" cy="43" r="1.6" fill="#FF6FCE"/>

                      <rect x="20" y="66" width="200" height="78" rx="16" fill="url(#mg1)"/>
                      <circle cx="46" cy="94" r="16" fill="#FFFFFF" opacity="0.9"/>
                      <text x="46" y="99" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7C5CFC">A</text>
                      <text x="72" y="90" fontSize="11" fontWeight="700" fill="#FFFFFF">Alex Carter</text>
                      <text x="72" y="104" fontSize="9" fill="#FFFFFF" opacity="0.85">Product workspace</text>
                      <rect x="36" y="118" width="70" height="16" rx="8" fill="#FFFFFF" opacity="0.22"/>
                      <text x="71" y="129" textAnchor="middle" fontSize="8" fill="#FFFFFF">3 live apps</text>

                      <rect x="20" y="158" width="200" height="44" rx="12" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <circle cx="40" cy="180" r="10" fill="#EDE9FE"/>
                      <text x="40" y="184" textAnchor="middle" fontSize="10" fill="#7C5CFC">▲</text>
                      <rect x="58" y="173" width="110" height="8" rx="3" fill="#D9D9E0"/>
                      <rect x="58" y="185" width="70" height="6" rx="3" fill="#E4E4EA"/>
                      <text x="204" y="182" fontSize="12" fill="#8B8B95">›</text>

                      <rect x="20" y="210" width="200" height="44" rx="12" fill="#FAFAFB" stroke="#E4E4EA"/>
                      <circle cx="40" cy="232" r="10" fill="#FCE7F3"/>
                      <text x="40" y="236" textAnchor="middle" fontSize="10" fill="#DB2C8A">✓</text>
                      <rect x="58" y="225" width="110" height="8" rx="3" fill="#D9D9E0"/>
                      <rect x="58" y="237" width="90" height="6" rx="3" fill="#E4E4EA"/>
                      <text x="204" y="234" fontSize="12" fill="#8B8B95">›</text>

                      <rect x="0" y="284" width="240" height="36" fill="#FFFFFF"/>
                      <rect x="0" y="284" width="240" height="1" fill="#E4E4EA"/>
                      <circle cx="60" cy="302" r="4" fill="#7C5CFC"/>
                      <circle cx="110" cy="302" r="4" fill="#E4E4EA"/>
                      <circle cx="160" cy="302" r="4" fill="#E4E4EA"/>
                      <circle cx="210" cy="302" r="4" fill="#E4E4EA"/>

                      <defs>
                        <linearGradient id="mg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8B6BFF"/><stop offset="1" stopColor="#FF6FCE"/></linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <TrustBar />

            <section id="services">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow-pill">Services</span>
              <h2>Everything your product needs</h2>
              <p>Two core disciplines, built by one team, so your web and mobile experience never feels bolted together.</p>
            </div>

            <div className="bento">
              <div className="card span2 reveal">
                <div className="glow" style={{background:'#8B6BFF'}}></div>
                <div className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#6D4CFF" strokeWidth="1.6"/><path d="M3 9h18" stroke="#6D4CFF" strokeWidth="1.6"/></svg></div>
                <h3>Web application development</h3>
                <p>Dashboards, portals and marketing sites built to load fast, scale cleanly, and stay easy to extend. From first wireframe to production deploy.</p>
                <div className="pill-list"><span>React / Next.js</span><span>APIs &amp; backend</span><span>Performance</span><span>SEO</span></div>
              </div>

              <div className="card span2 reveal">
                <div className="glow" style={{background:'#FF6FCE'}}></div>
                <div className="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="3" stroke="#C43FA0" strokeWidth="1.6"/><line x1="7" y1="17" x2="17" y2="17" stroke="#C43FA0" strokeWidth="1.6"/></svg></div>
                <h3>Mobile app development</h3>
                <p>Native-feeling iOS and Android apps, shipped through App Store and Play Store review, with push, offline support and analytics from day one.</p>
                <div className="pill-list"><span>iOS &amp; Android</span><span>React Native</span><span>Flutter</span><span>App store launch</span></div>
              </div>

              <div className="card reveal">
                <div className="glow" style={{background:'#4F8CFF'}}></div>
                <div className="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3z" stroke="#2E6FE0" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
                <h3>Product design</h3>
                <p>UI systems and interaction design that make the product feel considered, not assembled from a component library.</p>
              </div>

              <div className="card reveal">
                <div className="glow" style={{background:'#8B6BFF'}}></div>
                <div className="card-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v6M12 16v6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M16 12h6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2" stroke="#6D4CFF" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
                <h3>Support &amp; scaling</h3>
                <p>Post-launch retainers for bug fixes, new features, and infrastructure that keeps up as usage grows.</p>
              </div>
            </div>
          </div>
        </section>

            <section id="process">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow-pill">Process</span>
              <h2>Five stages, no surprises</h2>
              <p>You see working software every week — not a status update.</p>
            </div>
            <div className="process-grid">
              <div className="p-card reveal"><span className="p-num">01</span><h3>Discover</h3><p>Map what the product needs to do and what "done" looks like.</p></div>
              <div className="p-card reveal"><span className="p-num">02</span><h3>Design</h3><p>Wireframes into a full UI system for web and mobile.</p></div>
              <div className="p-card reveal"><span className="p-num">03</span><h3>Build</h3><p>Engineering in short sprints, visible every week.</p></div>
              <div className="p-card reveal"><span className="p-num">04</span><h3>Launch</h3><p>Deployment and app store submission, checklist-verified.</p></div>
              <div className="p-card reveal"><span className="p-num">05</span><h3>Support</h3><p>Fixes and features on a retainer sized to your pace.</p></div>
            </div>
          </div>
        </section>

            <section id="work">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow-pill">Selected work</span>
              <h2>Products we've shipped</h2>
              <p>A few of the platforms Netvly has designed and built for clients across fintech, networking and astrology.</p>
            </div>
            <div className="work-grid">
              <div className="work-card reveal">
                <div className="work-thumb">
                  <Image src="/images/work-bullvera.jpg" alt="BullVera AI trading platform interface" fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="work-body">
                  <div className="work-tags"><span className="tag">Web app</span><span className="tag">Fintech / Trading</span></div>
                  <h3>BullVera</h3>
                  <p>AI-powered market intelligence platform for trading Indian, US and crypto markets, with a live terminal, sentiment analysis and paper trading.</p>
                </div>
              </div>
              <div className="work-card reveal">
                <div className="work-thumb">
                  <Image src="/images/work-netv.jpg" alt="Netv global network speed test interface" fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="work-body">
                  <div className="work-tags"><span className="tag">Web app</span><span className="tag">Network / VPN</span></div>
                  <h3>Netv</h3>
                  <p>A global speed test tool with a live 3D globe visualization connecting to 30+ server hubs worldwide in real time.</p>
                </div>
              </div>
              <div className="work-card reveal">
                <div className="work-thumb">
                  <Image src="/images/work-astrov.jpg" alt="AstroV astrology and celestial insights interface" fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="work-body">
                  <div className="work-tags"><span className="tag">Web app</span><span className="tag">Astrology / Lifestyle</span></div>
                  <h3>AstroV</h3>
                  <p>A celestial insights platform for birth charts, daily horoscopes, compatibility, tarot and numerology, built on real-time planetary data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

            <section>
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow-pill">Tools we build with</span>
              <h2>The stack</h2>
            </div>
            <div className="stack-wrap reveal">
              <div className="stack-pill"><span className="sq"></span>React / Next.js</div>
              <div className="stack-pill"><span className="sq"></span>React Native</div>
              <div className="stack-pill"><span className="sq"></span>Flutter</div>
              <div className="stack-pill"><span className="sq"></span>Swift / Kotlin</div>
              <div className="stack-pill"><span className="sq"></span>Node.js</div>
              <div className="stack-pill"><span className="sq"></span>PHP</div>
              <div className="stack-pill"><span className="sq"></span>Laravel</div>
              <div className="stack-pill"><span className="sq"></span>CodeIgniter</div>
              <div className="stack-pill"><span className="sq"></span>PostgreSQL</div>
              <div className="stack-pill"><span className="sq"></span>AWS / GCP</div>
              <div className="stack-pill"><span className="sq"></span>Figma</div>
            </div>
          </div>
        </section>

            <section id="contact">
          <div className="wrap">
            <div className="cta-card reveal">
              <span className="eyebrow-pill">Start a project</span>
              <h2>Tell us what you're building.</h2>
              <p>Send a few details and we'll come back with next steps, usually within a day.</p>

              <ContactForm />

              <div className="contact-info">
                <a href="mailto:haramohan222@gmail.com">haramohan222@gmail.com</a>
                <a href="tel:+919556213317">+91 9556213317</a>
                <span>Bhubaneswar, India</span>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
