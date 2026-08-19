const { Button, SectionHeading } = window.HealthyKitchenDesignSystem_f4c763;

const HK_WHY_MARQUEE = ["Gluten-free", "Chef-crafted", "Nutritionist-designed", "Eco-packaged", "Delivered daily"];

const HK_WHY_ICONS = ["leaf", "sliders-horizontal", "brain", "chef-hat", "wheat-off", "recycle"];

const HK_WHY_HOOKS = [
  "Picked fresh, cooked the same day",
  "Your macros, your rules",
  "Menus built on nutrition science",
  "Restaurant craft in every box",
  "A 100% gluten-free kitchen",
  "Kind to you — and the planet",
];

function WhyChooseUs({ onExplore }) {
  const features = window.HK_FEATURES;
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % features.length), 5000);
    return () => clearInterval(t);
  }, [paused, features.length]);

  const f = features[active];

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <style>{`
        @keyframes hkWhyIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes hkWhyBar { from { width: 0%; } to { width: 100%; } }
        @keyframes hkWhyMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .hk-why-anim { animation: none !important; } }
      `}</style>

      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-30px", top: "18px", fontFamily: "var(--font-script)", fontSize: "250px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>delight</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "92px 32px 72px", position: "relative" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>Why choose us</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: "var(--leading-tight)", color: "var(--ivory-50)" }}>
              Food that heals,
              <span style={{ display: "block", marginTop: "6px", color: "var(--green-300)" }}>made to delight</span>
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: "330px", fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)" }}>
            From sourcing to plating we hold one standard — clean, functional nutrition that tastes like a treat. Six reasons Dubai trusts us daily.
          </p>
        </div>

        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "72px", alignItems: "stretch" }}>

          <div role="tablist" aria-label="Why choose us" onMouseLeave={() => setPaused(false)} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {features.map((ft, i) => {
              const isActive = i === active;
              return (
                <button
                  key={ft.n}
                  role="tab"
                  aria-selected={isActive}
                  onMouseEnter={() => { setActive(i); setPaused(true); }}
                  onFocus={() => { setActive(i); setPaused(true); }}
                  onClick={() => { setActive(i); setPaused(true); }}
                  style={{
                    display: "grid", gridTemplateColumns: "52px 1fr auto", alignItems: "center", gap: "18px",
                    padding: "20px 18px", margin: 0, width: "100%", textAlign: "left",
                    background: isActive ? "rgba(253,252,248,0.07)" : "transparent",
                    border: "none", borderTop: "1px solid rgba(253,252,248,0.14)",
                    borderBottom: i === features.length - 1 ? "1px solid rgba(253,252,248,0.14)" : "none",
                    borderRadius: isActive ? "var(--radius-md, 10px)" : 0,
                    cursor: "pointer", transition: "background 0.3s ease, transform 0.3s ease",
                    transform: isActive ? "translateX(6px)" : "none",
                    color: "inherit", font: "inherit",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: isActive ? "var(--ivory-50)" : "var(--green-300)", transition: "color 0.3s ease" }}>{ft.n}</span>
                  <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "20px", color: "var(--ivory-50)", opacity: isActive ? 1 : 0.68, transition: "opacity 0.3s ease" }}>{ft.title}</span>
                  <span aria-hidden="true" style={{
                    width: "36px", height: "36px", borderRadius: "50%", display: "grid", placeItems: "center",
                    border: "1px solid rgba(253,252,248,0.3)",
                    background: isActive ? "var(--ivory-50)" : "transparent",
                    color: isActive ? "var(--green-700)" : "var(--green-200)",
                    transform: isActive ? "rotate(45deg)" : "none",
                    transition: "all 0.35s ease", fontSize: "16px", lineHeight: 1,
                  }}>↑</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "36px", minHeight: "420px" }}>
            <div key={active} className="hk-why-anim" style={{ animation: "hkWhyIn 0.5s ease both" }}>
              <div aria-hidden="true" style={{ width: "128px", height: "128px", borderRadius: "50%", border: "1.5px solid var(--green-300)", background: "rgba(253,252,248,0.06)", display: "grid", placeItems: "center" }}>
                <i data-lucide={HK_WHY_ICONS[active]} style={{ width: "58px", height: "58px", color: "var(--green-200)" }}></i>
              </div>
              <p style={{ margin: "18px 0 14px", fontFamily: "var(--font-script)", fontSize: "clamp(24px, 2.6vw, 32px)", lineHeight: 1.2, color: "var(--green-200)" }}>{HK_WHY_HOOKS[active]}</p>
              <p style={{ margin: 0, maxWidth: "42ch", fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.65, color: "var(--green-100)" }}>{f.body}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <div style={{ display: "flex", gap: "6px", flex: 1 }}>
                  {features.map((ft, i) => (
                    <span key={ft.n} style={{ position: "relative", flex: 1, height: "2px", background: "rgba(253,252,248,0.18)", overflow: "hidden" }}>
                      {i < active && <span style={{ position: "absolute", inset: 0, background: "var(--green-200)" }}></span>}
                      {i === active && <span key={active} className="hk-why-anim" style={{ position: "absolute", top: 0, left: 0, bottom: 0, background: "var(--ivory-50)", animation: "hkWhyBar 5s linear both", animationPlayState: paused ? "paused" : "running" }}></span>}
                    </span>
                  ))}
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wider)", color: "var(--green-200)" }}>{f.n} / 06</span>
              </div>
              <div>
                <Button variant="inverse" size="lg" onClick={onExplore}>Start your plan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(253,252,248,0.14)", overflow: "hidden", padding: "16px 0", whiteSpace: "nowrap" }} className="hk-marquee-wrap">
        <div className="hk-why-anim" style={{ display: "inline-flex", animation: "hkWhyMarquee 30s linear infinite" }}>
          {[0, 1].map((rep) => (
            <div key={rep} aria-hidden={rep === 1} style={{ display: "inline-flex", alignItems: "center" }}>
              {HK_WHY_MARQUEE.map((w) => (
                <span key={w} style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px" }}>
                  <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wider)", fontSize: "18px", color: "var(--green-200)" }}>{w}</span>
                  <span style={{ color: "var(--green-400)", fontSize: "12px" }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = window.HK_REVIEWS;
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <SectionHeading eyebrow="Reviews" title="Loved across Dubai" />
        </div>
        <div className="hk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {reviews.map((r) => (
            <figure key={r.name} style={{ margin: 0, background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "28px", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "var(--shadow-xs)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "44px", lineHeight: 0.6, color: "var(--green-300)" }}>&ldquo;</span>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-body)" }}>{r.text}</blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1px" }}>
                <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "16px", color: "var(--text-strong)" }}>{r.name}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WhyChooseUs = WhyChooseUs;
window.Reviews = Reviews;
