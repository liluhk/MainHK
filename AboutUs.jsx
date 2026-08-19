const { Button, SectionHeading, Tag } = window.HealthyKitchenDesignSystem_f4c763;

/* ---------- Hero ---------- */
function AboutHero() {
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container hk-grid-2 hk-hero-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 32px 64px", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "56px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
            About us
          </span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.02, fontSize: "clamp(36px, 5.5vw, 60px)", color: "var(--text-strong)" }}>
            We craft wellness<br />
            <span style={{ color: "var(--green-700)" }}>with every bite</span>
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "48ch" }}>
            We believe in the power of truly nutritious, clean ingredients — not just to feed you, but to elevate your whole well-being. Every meal is built from the finest clean ingredients, aligned with your health goals and medical needs.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Tag tone="green" variant="soft">Clean ingredients</Tag>
            <Tag tone="green" variant="soft">Doctor-recommended</Tag>
            <Tag tone="green" variant="soft">Chef-crafted</Tag>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="assets/about-hero.jpg" alt="Healthy Kitchen delivery bag with meals" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "18px", display: "block" }} />
          <div style={{ position: "absolute", left: "-18px", bottom: "30px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "30px", color: "var(--green-700)", lineHeight: 1 }}>since day one</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>clinic × clean-food restaurant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Story ---------- */
function AboutStory() {
  return (
    <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="hk-container hk-grid-2" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
        <img src="assets/about-story.jpg" alt="Plating a fresh salad" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "18px", display: "block" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <SectionHeading eyebrow="Our story" title="Where medicine met the kitchen" align="left" />
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.65, color: "var(--text-body)" }}>
            Healthy Kitchen was born from the synergy of a preventive clinic and a clean-food restaurant — created to bridge the gap between complex medical dietary protocols and everyday meal planning. Our menu is meticulously crafted by expert nutritionists and recommended by doctors, so every meal genuinely supports your health journey.
          </p>
          <div style={{ background: "var(--green-50, rgba(46,89,60,0.06))", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "20px 22px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <i data-lucide="microscope" style={{ width: 22, height: 22, color: "var(--green-700)", flexShrink: 0, marginTop: "2px" }}></i>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.55, color: "var(--text-body)" }}>
                We follow evidence, not trends. Every protocol on our menu is grounded in published research — one example below: a peer-reviewed study on the Autoimmune Protocol Diet and quality of life in inflammatory bowel disease.
              </span>
              <a href="https://pubmed.ncbi.nlm.nih.gov/31832627/" target="_blank" rel="noopener" style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--green-700)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Read a sample study <i data-lucide="arrow-up-right" style={{ width: 14, height: 14 }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Values — interactive cards ---------- */
const HK_ABOUT_VALUES = [
  { icon: "leaf", title: "Pure Ingredients", body: "Only clean, natural ingredients. Our food is free from artificial additives, preservatives, and anything that isn't pure and wholesome." },
  { icon: "sun", title: "Freshness Guaranteed", body: "Every dish is prepared fresh daily to preserve its nutritional integrity and vitamin content — nothing sits, nothing waits." },
  { icon: "recycle", title: "Sustainability", body: "We avoid pesticides and strive for the cleanest possible food production methods, from sourcing to packaging." },
];

function AboutValues() {
  const [hovered, setHovered] = React.useState(-1);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [hovered]);
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <SectionHeading eyebrow="Our values" title="One standard, no exceptions" />
        </div>
        <div className="hk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {HK_ABOUT_VALUES.map((v, i) => {
            const isHover = hovered === i;
            return (
              <div
                key={v.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
                style={{
                  background: isHover ? "var(--green-700)" : "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)", padding: "32px 28px",
                  display: "flex", flexDirection: "column", gap: "16px",
                  boxShadow: isHover ? "var(--shadow-md)" : "var(--shadow-xs)",
                  transform: isHover ? "translateY(-6px)" : "none",
                  transition: "all var(--dur-slow) var(--ease-out)",
                  cursor: "default",
                }}
              >
                <div style={{ width: "58px", height: "58px", borderRadius: "50%", display: "grid", placeItems: "center", border: `1.5px solid ${isHover ? "rgba(253,252,248,0.4)" : "var(--green-300)"}`, background: isHover ? "rgba(253,252,248,0.08)" : "var(--green-50, rgba(46,89,60,0.06))", transition: "all var(--dur-slow) var(--ease-out)" }}>
                  <i data-lucide={v.icon} style={{ width: 26, height: 26, color: isHover ? "var(--green-200)" : "var(--green-700)" }}></i>
                </div>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "var(--text-lg, 22px)", color: isHover ? "var(--ivory-50)" : "var(--text-strong)", transition: "color var(--dur-slow) var(--ease-out)" }}>{v.title}</h3>
                <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.62, color: isHover ? "var(--green-100)" : "var(--text-muted)", transition: "color var(--dur-slow) var(--ease-out)" }}>{v.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Approach — green band ---------- */
function AboutApproach() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", left: "-30px", bottom: "-38px", fontFamily: "var(--font-script)", fontSize: "220px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>heal</span>
      <div className="hk-container hk-grid-2" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>Our approach</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(30px, 4.5vw, 44px)", lineHeight: "var(--leading-tight)", color: "var(--ivory-50)" }}>
            Strict protocols,
            <span style={{ display: "block", marginTop: "6px", color: "var(--green-300)" }}>without the struggle</span>
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.65, color: "var(--green-100)", maxWidth: "50ch" }}>
            Following a strict dietary protocol like Anti-Candida or the Autoimmune Protocol (AIP) at home is hard. We built Healthy Kitchen so you can stay on plan without compromising on taste or enjoyment — while we focus on calming inflammation, restoring gut health and giving your body the nutrients it needs to feel well.
          </p>
          <div style={{ marginTop: "8px" }}>
            <Button variant="inverse" size="lg" onClick={() => window.dispatchEvent(new CustomEvent("hk-about-explore"))}>Explore Meal Plans</Button>
          </div>
        </div>
        <img src="assets/about-approach.jpg" alt="Chef holding a prawn and arugula bowl" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "18px", display: "block" }} />
      </div>
    </section>
  );
}

/* ---------- Our Philosophy — interactive accordion ---------- */
const HK_ABOUT_PHILOSOPHY = [
  { n: "01", title: "No Quick Fixes", body: "We don't endorse rapid weight-loss plans. Sustainable health is the goal — cleansing the body of toxins rather than extreme calorie restriction or fasting." },
  { n: "02", title: "Holistic Health", body: "Lose weight naturally, without the rebound. We don't count calories; we concentrate on the nutritional value your cells actually need." },
  { n: "03", title: "Personalised Nutrition", body: "Every person is unique, and so are their nutritional needs. Our meals support individual health requirements and stay compliant with protocols like AIP." },
];

function AboutPhilosophy() {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [open]);
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container hk-grid-2" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "64px", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <img src="assets/about-philosophy.jpg" alt="Bowls of clean whole-food ingredients" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "18px", display: "block" }} />
          <div style={{ position: "absolute", right: "-14px", top: "28px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "14px 18px" }}>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "26px", color: "var(--green-700)", lineHeight: 1 }}>no calorie counting</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <SectionHeading eyebrow="Our philosophy" title="Health that stays with you" align="left" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {HK_ABOUT_PHILOSOPHY.map((p, i) => {
              const isOpen = open === i;
              return (
                <div key={p.n} style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: i === HK_ABOUT_PHILOSOPHY.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    style={{
                      display: "grid", gridTemplateColumns: "48px 1fr auto", alignItems: "center", gap: "16px",
                      width: "100%", textAlign: "left", padding: "20px 6px", margin: 0,
                      background: "none", border: 0, cursor: "pointer", color: "inherit", font: "inherit",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "19px", color: isOpen ? "var(--green-700)" : "var(--text-faint)", transition: "color var(--dur-base) var(--ease-out)" }}>{p.n}</span>
                    <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "20px", color: "var(--text-strong)" }}>{p.title}</span>
                    <span aria-hidden="true" style={{
                      width: "34px", height: "34px", borderRadius: "50%", display: "grid", placeItems: "center",
                      border: "1px solid var(--border-subtle)",
                      background: isOpen ? "var(--green-700)" : "transparent",
                      color: isOpen ? "var(--ivory-50)" : "var(--green-700)",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "all var(--dur-slow) var(--ease-out)", fontSize: "18px", lineHeight: 1,
                    }}>+</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? "180px" : "0px", overflow: "hidden", transition: "max-height var(--dur-slow) var(--ease-out)" }}>
                    <p style={{ margin: 0, padding: "0 6px 22px 64px", fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "var(--text-muted)" }}>{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing CTA ---------- */
function AboutCta({ onExplore }) {
  return (
    <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "92px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "26px", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-script)", fontSize: "clamp(30px, 4vw, 42px)", color: "var(--green-700)", lineHeight: 1 }}>our promise</span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(30px, 5vw, 50px)", lineHeight: "var(--leading-tight)", color: "var(--text-strong)", maxWidth: "20ch" }}>
          We make your life easier and your body healthier
        </h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
          <Button variant="ghost" size="lg" iconLeft={<i data-lucide="message-circle" style={{ width: 17, height: 17 }}></i>} onClick={() => window.open("https://wa.me/971585129792", "_blank")}>WhatsApp Us</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function AboutUs({ onExplore }) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    const h = () => onExplore && onExplore();
    window.addEventListener("hk-about-explore", h);
    return () => window.removeEventListener("hk-about-explore", h);
  }, []);
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutApproach />
      <AboutPhilosophy />
      <AboutCta onExplore={onExplore} />
    </>
  );
}

window.AboutUs = AboutUs;
