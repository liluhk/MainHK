// Detox & Cleanse–specific sections, rendered below the standard ProductDetail
// hero only when plan.slug === "detox-cleanse". Mirrors the other plan pages:
// pain points, A day on the plan (PlanMenu, 6 drinks) + stat band, how-it-works
// (green band accordion), and Questions & Answers.

// ---- When your body needs a full stop -------------------------------------------
function DetoxCleanseGamble() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "calendar-x", h: "A stretch of stress and bad eating caught up with you", p: "Deadlines, travel, celebrations — the weeks where food happened to you. Your body kept score, and now it's asking for a reset." },
    { n: "02", icon: "utensils", h: "Your digestion never gets a break", p: "Three meals plus snacks, every day, for years. Sometimes the kindest thing you can do for your gut is give it a short, well-fed rest." },
    { n: "03", icon: "sparkles", h: "Dull skin, puffiness, low glow", p: "Skin reflects what's happening inside. Concentrated antioxidants and serious hydration are the fastest lever you can pull." },
    { n: "04", icon: "timer", h: "You want a real reset — not a week-long project", p: "One to three days. Six bottles a day, delivered. No shopping, no juicer to clean, no decisions to make." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 className="hk-statement" style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(28px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>The deepest reset</span>
            <span style={{ display: "block", color: "var(--green-700)", whiteSpace: "nowrap", fontStyle: "italic" }}>we offer</span>
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
          <p className="hk-statement" style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.2, fontSize: "clamp(28px, 3.6vw, 42px)", color: "var(--text-strong)" }}>
            Flood the body with nutrients  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>Give digestion the day off</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the cleanse (reuses PlanMenu carousel) + stat band ------------------
const DC_MENUS = [
  { label: "A day on the cleanse", meals: [
    { meal: "Drink 01", img: "assets/meals/dc-drink-1.jpg", title: "Super Duper detox juice", desc: "Leafy greens and cucumber — chlorophyll-rich, hydrating start to the day.", kcal: 171, p: 4, c: 30, f: 1 },
    { meal: "Drink 02", img: "assets/meals/dc-drink-2.jpg", title: "Matcha wake up smoothie", desc: "Ceremonial matcha blended with banana and greens — steady, jitter-free morning energy.", kcal: 70, p: 1, c: 14, f: 0 },
    { meal: "Drink 03", img: "assets/meals/dc-drink-3.jpg", title: "Glowing skin juice", desc: "Carrot, pumpkin, pineapple, ginger and green apple — beta-carotene and vitamin C for glowing skin.", kcal: 241, p: 4, c: 48, f: 1 },
    { meal: "Drink 04", img: "assets/meals/dc-drink-4.jpg", title: "Cells boosting milk", desc: "Nuts and seeds blended for fiber, healthy fats and sustained energy mid-cleanse.", kcal: 610, p: 26, c: 16, f: 48 },
    { meal: "Drink 05", img: "assets/meals/dc-drink-5.jpg", title: "Anticandida lemonade", desc: "Butterfly pea flower tea with ginger, lavender extract and lemon — sugar-free and cleansing, supporting kidney and liver function.", kcal: 76, p: 1, c: 17, f: 0 },
    { meal: "Drink 06", img: "assets/meals/dc-drink-6.jpg", title: "Hormone balance smoothie", desc: "Cacao, seeds and adaptogens — a calming, restorative end to the day.", kcal: 222, p: 3, c: 40, f: 3 },
  ] },
];

function DetoxCleanseMenu() {
  const dcStat = (val, label, accent) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={DC_MENUS} showTotal={false} showMacros={false} sub="Six nutrient-packed juices and smoothies a day — vegetable and fruit juices, antioxidant berry blends, and hydrating, cleansing beverages. Fully vegan." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {dcStat("85%", "Vegetable content", true)}
            {dcStat("20+g", "Gut-restoring fiber per day")}
            {dcStat("100%", "Vegan, freshly squeezed")}
            {dcStat("0g", "Added sugar")}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- How the cleanse works (green band accordion) ----------------------------------
function DetoxCleansePhases() {
  const items = [
    { n: "01", icon: "droplets", cap: "All day · Six bottles", h: "Flood", p: "A high concentration of vitamins, minerals and antioxidants in the most digestible form there is. Leafy greens, ginger and citrus deliver detoxifying compounds and vitamin C from the first bottle." },
    { n: "02", icon: "moon", cap: "While you cleanse · Digest less", h: "Rest", p: "With no solid food to process, our smoothies keep you nicely satisfied, your digestive system gets a genuine break — while hydrating, cleansing beverages support the kidneys and liver doing the detox work." },
    { n: "03", icon: "sun", cap: "After day 3 · Transition", h: "Glow", p: "Clearer skin, lighter digestion, a visible glow. Keep it to 3 days maximum — then transition to Easy Detox for a more comprehensive, balanced detoxification." },
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
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>glow</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>The full picture</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(34px, 4.4vw, 54px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>How the cleanse</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", color: "var(--green-300)" }}>resets your system</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "380px" }}>Three days, three jobs: flood the body with nutrients, rest the digestive system, and let the results show. Then hand over to a balanced plan.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="How the cleanse resets your system" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
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
          <span style={{ fontSize: "12px", letterSpacing: "var(--tracking-wider)", color: "var(--green-200)" }}>{items[active].n} / {String(items.length).padStart(2, "0")}</span>
        </div>

        <p style={{ margin: "26px 0 0", fontSize: "15px", lineHeight: 1.6, color: "var(--green-100)", textAlign: "center" }}>We recommend no more than 3 days on the cleanse — longer durations should be done under professional supervision.</p>
      </div>
    </section>
  );
}

// ---- Questions & Answers -------------------------------------------------------------
const DC_FAQ_ITEMS = [
  { q: "What are the key benefits of the Detox and Cleanse plan?", a: "It provides a high concentration of vitamins, minerals, and antioxidants in an easily digestible form — supporting detoxification, boosting immunity, and enhancing skin health." },
  { q: "How do the juices and smoothies detoxify the body and boost immunity?", a: "The plan incorporates ingredients like leafy greens, ginger, and citrus fruits that are rich in detoxifying compounds and vitamin C, which help cleanse the body and strengthen the immune system." },
  { q: "What makes it effective for achieving a healthy glow?", a: "The high intake of hydrating fruits and vegetables, combined with antioxidants, promotes clear skin, reduces inflammation, and provides the nutrients that contribute to a radiant complexion." },
  { q: "How long should I follow the cleanse?", a: "For best results, 3 days maximum — depending on your goals and how your body responds. After that, switch to our Easy Detox plan for a more comprehensive, balanced detoxification. Longer durations should be done under professional supervision." },
  { q: "Who is this cleanse for?", a: "Anyone looking to reset their digestive system, support weight loss, enhance skin health, or boost their immune system — especially after periods of stress or unhealthy eating." },
  { q: "What if I dislike an ingredient?", a: "Customize up to 3 ingredients to match your taste — no extra charge." },
  { q: "When and how do drinks get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM, chilled, in recyclable, eco-friendly packaging." },
];

function DetoxCleanseFAQ() {
  return <FAQ items={DC_FAQ_ITEMS} />;
}

window.DetoxCleanseGamble = DetoxCleanseGamble;
window.DetoxCleanseMenu = DetoxCleanseMenu;
window.DetoxCleansePhases = DetoxCleansePhases;
window.DetoxCleanseFAQ = DetoxCleanseFAQ;
