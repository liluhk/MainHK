// Gut Healing Protocol–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "gut-healing". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu) + stat band, protocol
// phases (green band), and Questions & Answers.

// ---- When your gut runs the show --------------------------------------------
function GutHealingGamble() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "cloud-fog", h: "Bloating has become your baseline", p: "You've stopped remembering what a flat, comfortable stomach feels like. Some days you plan your outfit around it." },
    { n: "02", icon: "zap-off", h: "Your energy crashes after every meal", p: "Lunch shouldn't feel like sedation. When digestion struggles, everything else — focus, mood, sleep — struggles with it." },
    { n: "03", icon: "pill", h: "Probiotics and supplements haven't fixed it", p: "You can't out-supplement a diet that keeps irritating the gut. The food itself has to change first." },
    { n: "04", icon: "repeat", h: "Every 'gut reset' you've tried was impossible to sustain", p: "Bone broth from scratch, fermented everything, restrictive lists. Week one goes fine. Week two, life gets in the way." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(15px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>When your gut</span>
            <span style={{ display: "block", color: "var(--green-700)", whiteSpace: "nowrap", fontStyle: "italic" }}>runs the show</span>
          </h2>
        </div>
        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {items.map((it) => (
            <div key={it.n} style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start", borderTop: "1px solid var(--border-default)", paddingTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "15px", color: "var(--green-700)" }}>{it.n}</span>
                <span aria-hidden="true" style={{ width: "46px", height: "46px", borderRadius: "50%", background: "var(--green-50)", border: "1px solid var(--green-100)", display: "grid", placeItems: "center" }}>
                  <i data-lucide={it.icon} style={{ width: 22, height: 22, color: "var(--green-700)" }}></i>
                </span>
              </div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "21px", lineHeight: 1.25, color: "var(--text-strong)" }}>{it.h}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "var(--text-muted)" }}>{it.p}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border-default)", marginTop: "64px", paddingTop: "56px", textAlign: "center" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.2, fontSize: "clamp(28px, 3.6vw, 42px)", color: "var(--text-strong)" }}>
            A gut can heal  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>If you stop irritating it and start feeding it</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band ----------------
const GH_MENUS = [
  { label: "A day on the plan", meals: [
    { meal: "Breakfast", img: "assets/meals/gut-breakfast.jpg", title: "Zucchini pancakes with salmon & coconut yogurt", desc: "Rich in omega-3 for anti-inflammatory support. Gentle on digestion, with natural probiotics.", kcal: 364, p: 22, c: 24, f: 20 },
    { meal: "Lunch", img: "assets/meals/gut-lunch.jpg", title: "Pharmacy bowl", desc: "Fermented vegetables for gut flora, plus fiber from greens, seeds and avocado to boost nutrient absorption.", kcal: 533, p: 41, c: 36, f: 25 },
    { meal: "Dinner", img: "assets/meals/gut-dinner.jpg", title: "Konjac pasta bolognese", desc: "Low-carb and light on digestion, with prebiotics for microbiome health — an easy-absorbing, soothing evening meal.", kcal: 434, p: 44, c: 15, f: 22 },
    { meal: "Snack", img: "assets/meals/gut-snack.jpg", title: "Hazelnut cake", desc: "No sugar, no flour — only whole foods. Rich in magnesium for a calming effect and stable blood sugar.", kcal: 278, p: 8, c: 21, f: 18 },
  ] },
];

function GutHealingMenu() {
  const ghStat = (val, label, accent) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={GH_MENUS} showTotal={false} sub="Nutrient-dense, easy-to-digest meals: slow-cooked proteins, cooked vegetables, fermented foods daily — all dairy-, gluten- and sugar-free." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {ghStat("1×", "Fermented food every day", true)}
            {ghStat("25g+", "Gut-feeding fiber per day")}
            {ghStat("80%", <>Better absorption of<br />vitamins and macronutrients</>)}
            {ghStat("0g", <>Added sugar, gluten, dairy,<br />seed oils</>)}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- How the healing works (green band) ---------------------------------------
function GutHealingPhases() {
  const items = [
    { n: "01", icon: "circle-slash", cap: "Settle", h: "Remove & rest", p: "Take out the common irritants — gluten, dairy, refined sugar, seed oils, alcohol. Cooked, gentle meals give the gut lining a break." },
    { n: "02", icon: "soup", cap: "Nourish", h: "Rebuild", p: "Collagen-rich broths, glycine, zinc and omega-3s supply the raw materials the gut wall uses to repair itself." },
    { n: "03", icon: "sprout", cap: "Feed", h: "Repopulate", p: "Daily fermented foods and 25g+ of varied plant fiber feed a more diverse microbiome — the long-term insurance policy." },
  ];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [active]);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>restore</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>The full picture</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(34px, 4.4vw, 54px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>How the healing</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", color: "var(--green-300)" }}>actually happens</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "380px" }}>Gut healing isn't one trick — it's a sequence. Every menu on this plan works all three stages at once, so you don't have to think about any of them.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="How the healing works" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
          {items.map((it, i) => {
            const isActive = i === active;
            return (
              <button
                key={it.n}
                role="tab"
                aria-selected={isActive}
                onMouseEnter={() => { setActive(i); setPaused(true); }}
                onFocus={() => { setActive(i); setPaused(true); }}
                onClick={() => { setActive(i); setPaused(true); }}
                className="hk-muscleacc-panel"
                style={{
                  flex: isActive ? "2.4 1 0%" : "1 1 0%", minWidth: 0,
                  display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "18px",
                  minHeight: "230px", padding: "22px 24px", margin: 0, textAlign: "left",
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
          <span style={{ fontSize: "12px", letterSpacing: "var(--tracking-wider)", color: "var(--green-200)" }}>{items[active].n} / 03</span>
        </div>

        <p style={{ margin: "26px 0 0", fontSize: "15px", lineHeight: 1.6, color: "var(--green-100)", textAlign: "center" }}>Most clients feel the difference — less bloating, steadier energy — within the first two weeks.</p>
      </div>
    </section>
  );
}

// ---- Questions & Answers --------------------------------------------------------
const GH_FAQ_ITEMS = [
  { q: "How is this different from the Low FODMAP plan?", a: "Low FODMAP is a short diagnostic protocol for finding triggers. Gut Healing is a nourishing, longer-term plan focused on repairing the gut lining and rebuilding the microbiome — less about eliminating, more about restoring." },
  { q: "How long until I feel a difference?", a: "Most clients notice less bloating and steadier post-meal energy within the first two weeks. Deeper microbiome shifts build over 4+ weeks of consistency." },
  { q: "Is this a medical treatment?", a: "No. It's a structured nutrition plan that supports digestive health. If you have a diagnosed GI condition, keep your physician involved." },
  { q: "Are fermented foods in every menu?", a: "Yes — at least one live-culture food daily (sauerkraut, fermented vegetables, dairy-free kefir-style yogurt), portioned so it's gentle even for sensitive guts." },
  { q: "What if I dislike an ingredient?", a: "Customize up to 3 ingredients per meal to match your taste — no extra charge." },
  { q: "When and how do meals get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging." },
];

function GutHealingFAQ() {
  return <FAQ items={GH_FAQ_ITEMS} />;
}

window.GutHealingGamble = GutHealingGamble;
window.GutHealingMenu = GutHealingMenu;
window.GutHealingPhases = GutHealingPhases;
window.GutHealingFAQ = GutHealingFAQ;
