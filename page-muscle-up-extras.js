// Extra Muscle UP–specific sections, rendered below the standard ProductDetail
// calculator only when plan.slug === "muscle-up". Kept as one file: The Gap,
// Why Muscle UP, A day on the plan (menu carousel), and Questions & Answers.

// ---- The Gap -------------------------------------------------------------
function MuscleUpGap() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "battery-low", h: "You train 5 days a week but recovery takes forever", p: "Sore for 3 days after leg day. Energy crashes by 4pm. You blame overtraining — but it might be what's on your plate." },
    { n: "02", icon: "search-x", h: "Your 'clean' meal prep isn't that clean", p: "Supermarket chicken pumped with hormones. Vegetable oil in every sauce. Hidden sugars in 'protein' snacks. High protein ≠ high quality." },
    { n: "03", icon: "repeat", h: "Exhausted from cooking, counting, repeating", p: "Sunday meal prep. Same 4 meals. Every week. You'd rather spend those 3 hours training, resting, or living." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 className="hk-gap-heading" style={{ margin: "0 0 0 12%", textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(44px, 6.5vw, 80px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)" }}>Training hard</span>
            <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>Eating wrong</span>
          </h2>
        </div>
        <div className="hk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {items.map((it) => (
            <div key={it.n} style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start", borderTop: "1px solid var(--border-default)", paddingTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "15px", color: "var(--green-700)" }}>{it.n}</span>
                <span aria-hidden="true" style={{ width: "46px", height: "46px", borderRadius: "50%", background: "var(--green-50)", border: "1px solid var(--green-100)", display: "grid", placeItems: "center" }}>
                  <i data-lucide={it.icon} style={{ width: 22, height: 22, color: "var(--green-700)" }}></i>
                </span>
              </div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "22px", lineHeight: 1.25, color: "var(--text-strong)" }}>{it.h}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "var(--text-muted)" }}>{it.p}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border-default)", marginTop: "64px", paddingTop: "56px", textAlign: "center" }}>
          <p className="hk-statement" style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.2, fontSize: "clamp(28px, 3.6vw, 42px)", color: "var(--text-strong)" }}>
            You don't need more protein  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>You need better fuel</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- Why Muscle UP (2x2 grid, green band) --------------------------------
function MuscleUpWhy() {
  const items = [
    { n: "01", icon: "beef", cap: "High-protein, anti-inflammatory kitchen", h: "Precise protein targets", p: "Every plate hits a protein target scaled to your training load, so muscle gets exactly what it needs to rebuild." },
    { n: "02", icon: "wheat", cap: "Slow-release energy system", h: "Clean complex carbs", p: "Slow-release, whole-food carbohydrates fuel long sessions and refill glycogen — steady energy, no crash." },
    { n: "03", icon: "heart-pulse", cap: "Targeted recovery support", h: "Recovery micronutrients", p: "Anti-inflammatory ingredients and recovery-focused micronutrients help you bounce back faster between sessions." },
  ];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const resumeRef = React.useRef(null);
  const pauseTemporarily = () => { setPaused(true); clearTimeout(resumeRef.current); resumeRef.current = setTimeout(() => setPaused(false), 9000); };
  React.useEffect(() => () => clearTimeout(resumeRef.current), []);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [active]);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>stronger</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>Why Muscle UP</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(36px, 5vw, 58px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>Fuel built</span>
              <span style={{ display: "block", color: "var(--green-300)" }}>to rebuild you</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "400px" }}>When digestion is off, protein passes through barely absorbed. Heal the gut first and absorption climbs — so every plate, calibrated to your training load with clean protein, quality carbs and recovery micronutrients, actually reaches the muscle.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="Why Muscle UP" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch", height: "264px" }}>
          {items.map((it, i) => {
            const isActive = i === active;
            return (
              <button
                key={it.n}
                role="tab"
                aria-selected={isActive}
                onMouseEnter={() => { setActive(i); pauseTemporarily(); }}
                onFocus={() => { setActive(i); pauseTemporarily(); }}
                onClick={() => { setActive(i); pauseTemporarily(); }}
                className="hk-muscleacc-panel"
                style={{
                  flex: isActive ? "2.4 1 0%" : "1 1 0%", minWidth: 0,
                  display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "18px",
                  minHeight: "230px", height: "100%", padding: "22px 24px", margin: 0, textAlign: "left",
                  background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
                  border: "1px solid rgba(253,252,248,0.18)", borderRadius: "var(--radius-lg)",
                  color: "inherit", font: "inherit", cursor: "pointer", overflow: "hidden", position: "relative",
                  transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
                  transform: isActive ? "translateY(-4px)" : "none",
                }}
              >
                <i aria-hidden="true" data-lucide={it.icon} style={{ position: "absolute", right: "-20px", top: "-20px", width: "150px", height: "150px", color: "var(--ivory-50)", opacity: isActive ? 0.14 : 0.08, pointerEvents: "none", transition: "opacity 0.45s ease" }}></i>
                <span style={{ fontFamily: "var(--font-script)", fontSize: "26px", lineHeight: 1, color: isActive ? "var(--ivory-50)" : "var(--green-300)", transition: "color 0.4s ease", position: "relative" }}>{it.n}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: 0, position: "relative" }}>
                  <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--green-300)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxHeight: isActive ? "20px" : "0px", opacity: isActive ? 1 : 0, transition: "all 0.45s ease 0.15s" }}>{it.cap}</span>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "24px", lineHeight: 1.2, color: "var(--ivory-50)" }}>{it.h}</h3>
                  <div style={{ maxHeight: isActive ? "200px" : "0px", opacity: isActive ? 1 : 0, overflow: "hidden", transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s" }}>
                    <p style={{ margin: 0, fontSize: "15.5px", lineHeight: 1.65, color: "var(--green-100)", maxWidth: "46ch" }}>{it.p}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginTop: "26px" }}>
          <div style={{ display: "flex", gap: "6px", flex: 1 }}>
            {items.map((it, i) => (
              <span key={it.n} style={{ flex: 1, height: "2px", background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)", transition: "background 0.4s ease" }}></span>
            ))}
          </div>
          <span style={{ fontSize: "12px", letterSpacing: "var(--tracking-wider)", color: "var(--green-200)" }}>{items[active].n} / {String(items.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

window.MuscleUpGap = MuscleUpGap;
window.MuscleUpWhy = MuscleUpWhy;
