// Anticandida Protocol–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "anticandida". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu) + stat band, protocol
// phases (green band accordion), and Questions & Answers.

// ---- When sugar runs the show ------------------------------------------------
function AnticandidaGamble() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "candy-off", h: "Sugar cravings that feel bigger than hunger", p: "It's not a willpower problem. Candida feeds on sugar — and an overgrowth keeps asking for more, louder every day." },
    { n: "02", icon: "cloud-fog", h: "Brain fog and fatigue with no obvious cause", p: "You sleep enough, you eat 'fine', and you're still running at 60%. Fungal overload keeps the whole system inflamed and tired." },
    { n: "03", icon: "repeat", h: "Recurring infections that keep coming back", p: "Thrush, skin flare-ups, digestive upsets — treated, gone, and back again. Treating symptoms doesn't touch what feeds them." },
    { n: "04", icon: "list-x", h: "You tried cutting sugar — and lasted a week", p: "Sugar hides in sauces, dressings, 'healthy' snacks, fruit. Doing a strict anticandida kitchen alone, every day, is a full-time job." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 className="hk-statement" style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(28px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>When candida</span>
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
          <p className="hk-statement" style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.2, fontSize: "clamp(28px, 3.6vw, 42px)", color: "var(--text-strong)" }}>
            Supplements alone won't clear it  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>You have to stop feeding it</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band ------------------
const AC_MENUS = [
  { label: "A day on the plan", meals: [
    { meal: "Breakfast", img: "assets/meals/ac-breakfast.jpg", title: "Vegetable omelette with smoked salmon & green salad", desc: "Savory, sugar-free start — quality protein and omega-3s with zero fuel for candida.", kcal: 338, p: 28, c: 16, f: 18 },
    { meal: "Lunch", img: "assets/meals/ac-lunch.jpg", title: "Thai curry with chicken & quinoa", desc: "Coconut curry with chicken, crisp vegetables and quinoa — antifungal ginger, lemongrass and garlic, no sugar.", kcal: 516, p: 43, c: 32, f: 24 },
    { meal: "Dinner", img: "assets/meals/ac-dinner.jpg", title: "Fried cauliflower rice with prawns & almond flakes", desc: "Lean prawns over fried cauliflower rice with toasted almond flakes — filling, low-glycemic, gentle on digestion.", kcal: 501, p: 45, c: 24, f: 25 },
    { meal: "Snack", img: "assets/meals/ac-snack.jpg", title: "Babaganoush dip with quinoa crackers", desc: "Smoky roasted aubergine whipped with tahini and olive oil, served with seeded quinoa crackers — savory, sugar-free, and genuinely filling.", kcal: 135, p: 4, c: 14, f: 6 },
    { meal: "Snack", img: "assets/meals/ac-snack-2.jpg", title: "Microbiome bowl with sour berries puree", desc: "Chia pudding layered with coconut yoghurt and unsweetened sour-berry puree — probiotics and fiber, nothing candida can feed on.", kcal: 210, p: 7, c: 18, f: 12 },
  ] },
];

function AnticandidaMenu() {
  const acStat = (val, label, accent) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={AC_MENUS} showTotal={false} sub="Low-sugar fruits and vegetables, lean proteins, antifungal herbs and spices, fermented foods for probiotics — all sugar-, gluten- and dairy-free." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {acStat("0g", "Added sugar — nothing for candida to feed on", true)}
            {acStat("Daily", "Antifungal ingredients: garlic, coconut oil, oregano")}
            {acStat("1×", "Fermented, probiotic-rich food every day")}
            {acStat("Low-GI", "Only low-sugar fruits and slow carbs")}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- How the protocol works (green band accordion) -----------------------------
function AnticandidaPhases() {
  const items = [
    { n: "01", icon: "circle-slash", cap: "We deliver this · from day one", h: "Starve", p: "Remove sugar, refined carbs, alcohol and yeast-promoting foods — everything candida feeds on. Balanced protein, fat and fiber keep blood sugar steady, so cravings quiet down instead of screaming." },
    { n: "02", icon: "flame", cap: "Built into every menu", h: "Fight", p: "Antifungal foods do daily work: garlic, coconut oil, oregano, ginger and leafy greens — while nutrient-dense meals reduce inflammation and support your immune system." },
    { n: "03", icon: "sprout", cap: "Long-term · Rebalance", h: "Restore", p: "Daily fermented foods repopulate the gut with beneficial bacteria — the competition that keeps candida in check long after the protocol ends." },
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
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>balance</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>The full picture</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(34px, 4.4vw, 54px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>How the protocol</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", color: "var(--green-300)" }}>beats the overgrowth</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "380px" }}>Beating candida takes discipline in three directions at once — starving it, fighting it, and rebuilding what keeps it in check. Every menu works all three.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="How the protocol beats the overgrowth" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
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

        <p style={{ margin: "26px 0 0", fontSize: "15px", lineHeight: 1.6, color: "var(--green-100)", textAlign: "center" }}>Signs it's working: quieter sugar cravings, steadier energy, clearer skin, better digestion. Your doctor may additionally recommend antifungal supplements or medication.</p>
      </div>
    </section>
  );
}

// ---- Questions & Answers --------------------------------------------------------
const AC_FAQ_ITEMS = [
  { q: "How does the Anticandida Diet help reduce fungal infections?", a: "It eliminates sugar, refined carbs, and yeast-containing foods that fuel candida growth, while emphasizing antifungal foods like garlic, coconut oil, and leafy greens — helping to restore your body's natural balance." },
  { q: "What foods are excluded on this plan?", a: "Foods high in sugar, refined grains, alcohol, and processed foods — anything that can promote the growth of candida and other harmful fungi. Everything we deliver is also gluten-, dairy- and added-sugar-free by default." },
  { q: "How does this diet address sugar cravings?", a: "By stabilizing blood sugar with balanced meals rich in fiber, protein, and healthy fats. Where sweetness is needed, we use natural alternatives like stevia, xylitol or monk fruit." },
  { q: "Can the Anticandida Diet support my immune system?", a: "Yes. By reducing the fungal load and eliminating inflammatory foods, the plan supports the immune system — making it more effective at fighting off infections and maintaining overall health." },
  { q: "How do I know it's working?", a: "Reduced sugar cravings, improved digestion, increased energy, clearer skin, and fewer candida-related symptoms like brain fog and fatigue. Your doctor might additionally recommend antifungal supplements or medications." },
  { q: "What if I dislike an ingredient?", a: "Customize up to 3 ingredients per meal to match your taste — no extra charge." },
  { q: "When and how do meals get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging." },
];

function AnticandidaFAQ() {
  return <FAQ items={AC_FAQ_ITEMS} />;
}

window.AnticandidaGamble = AnticandidaGamble;
window.AnticandidaMenu = AnticandidaMenu;
window.AnticandidaPhases = AnticandidaPhases;
window.AnticandidaFAQ = AnticandidaFAQ;
