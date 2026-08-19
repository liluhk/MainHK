// Easy Detox–specific sections, rendered below the standard ProductDetail hero
// only when plan.slug === "easy-detox". Mirrors the other plan pages: pain
// points, A day on the plan (PlanMenu) + stat band, how-it-works (green band
// accordion), and Questions & Answers.

// ---- When your body asks for a reset ------------------------------------------
function EasyDetoxGamble() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "battery-low", h: "You feel heavy, dull and permanently tired", p: "Processed food, late dinners, coffee-on-empty. The toxin load of a modern week adds up — and your energy pays the bill." },
    { n: "02", icon: "glass-water", h: "Juice fasts feel like punishment", p: "Days of liquid hunger, headaches, and a mood nobody around you enjoys. Deprivation isn't a requirement for a reset." },
    { n: "03", icon: "sparkles", h: "\"Detox\" teas and pills haven't done anything", p: "Your liver and kidneys do the detoxing. What they need isn't a magic supplement — it's food that supports them and a break from what doesn't." },
    { n: "04", icon: "repeat", h: "Every reset you start dissolves by Wednesday", p: "Shopping, juicing, prepping salads and soups from scratch — a proper detox week is a lot of work exactly when you have no energy for it." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(28px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Eating on autopilot</span>
            <span style={{ display: "block", color: "var(--green-700)", whiteSpace: "nowrap", fontStyle: "italic" }}>catches up with you</span>
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
            A real reset is  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>Not fasting, not deprivation</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band -------------------
const ED_MENUS = [
  { label: "A day on the plan", meals: [
    { meal: "Drink 1", img: "assets/meals/ed-drink-1.jpg", title: "Blood cleansing juice", desc: "Apple, beetroot and carrot, freshly squeezed — nitrates, beta-carotene and antioxidants to support circulation.", kcal: 215, p: 2, c: 50, f: 1 },
    { meal: "Drink 2", img: "assets/meals/ed-drink-2.jpg", title: "Lean green smoothie", desc: "Greens, cucumber and apple blended whole — fiber and chlorophyll that keep you full and light.", kcal: 179, p: 4, c: 25, f: 7 },
    { meal: "Lunch", img: "assets/meals/ed-lunch.jpg", title: "Wild rice salad with vegan feta cheese", desc: "Wild rice with arugula, pine nuts and pomegranate seeds — slow carbs, polyphenols and greens that keep the detox working.", kcal: 329, p: 10, c: 34, f: 17 },
    { meal: "Snack", img: "assets/meals/ed-snack.jpg", title: "Vegan wild cherry tart", desc: "Almond-flour crust filled with wild cherries slow-cooked with rosemary — no refined sugar, no dairy.", kcal: 233, p: 6, c: 12, f: 16 },
    { meal: "Dinner", img: "assets/meals/ed-dinner.jpg", title: "Vegetable curry with cauliflower rice", desc: "Warm, light and satisfying — a gentle end to the day that still feels like dinner.", kcal: 434, p: 16, c: 34, f: 26 },
  ] },
];

function EasyDetoxMenu() {
  const edStat = (val, label, accent) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={ED_MENUS} showTotal={false} sub="Juices, smoothies, salads and soups — fresh detoxifying vegetables and fruits, whole grains and plant proteins. Fully vegan, sugar-, gluten- and dairy-free." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {edStat("100%", "Vegan — plants only", true)}
            {edStat("Daily", "Liver-supporting greens, beets")}
            {edStat("0", "Fasting days — you eat real meals")}
            {edStat("0g", "Added sugar, gluten, dairy")}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- How the reset works (green band accordion) ---------------------------------
function EasyDetoxPhases() {
  const items = [
    { n: "01", icon: "droplets", cap: "Hydrate", h: "Flush", p: "Green juices, herbal teas and hydrating foods like cucumber and celery flush the system while delivering the nutrients a tired body is usually missing." },
    { n: "02", icon: "leaf", cap: "Support", h: "Nourish", p: "Your liver does the actual detoxing. Leafy greens, beets and lemon enhance its function — while whole grains and plant proteins keep you full and steady, no deprivation required." },
    { n: "03", icon: "sun", cap: "Feel it", h: "Recharge", p: "After the first few days most people report more energy, clearer skin and a lighter, calmer digestion. Repeat seasonally — 3–4 times a year — whenever you need the reset." },
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
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>refresh</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>The full picture</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(34px, 4.4vw, 54px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>How a gentle detox</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", color: "var(--green-300)" }}>actually works</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "380px" }}>Your body already knows how to detox — it just needs the right support and a break from what's slowing it down. Every day on the plan does both.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="How a gentle detox works" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
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

        <p style={{ margin: "26px 0 0", fontSize: "15px", lineHeight: 1.6, color: "var(--green-100)", textAlign: "center" }}>A temporary energy dip in the first day or two is normal — most people feel refreshed, clearer and lighter by day three.</p>
      </div>
    </section>
  );
}

// ---- Questions & Answers ----------------------------------------------------------
const ED_FAQ_ITEMS = [
  { q: "What are the primary goals of the Easy Detox plan?", a: "To eliminate toxins from the body, reset digestive health, and boost energy levels — leading to improved mental clarity, better skin health, and enhanced overall well-being." },
  { q: "How does it support the body's natural detoxification?", a: "The plan is built on liver-supporting foods like leafy greens, beets, and lemon, which enhance liver function and promote the elimination of toxins — your body's own detox pathways, supported rather than replaced." },
  { q: "What happens to energy and mood during the detox?", a: "Some people experience a temporary dip in energy and mood in the first day or two. After that, most report increased energy, improved mood, and mental clarity." },
  { q: "Which foods and drinks are central to the plan?", a: "Green juices, herbal teas, and hydrating foods like cucumber and celery — they flush out toxins while providing essential nutrients and hydration, alongside whole grains and plant proteins so you never go hungry." },
  { q: "How often should I do an Easy Detox?", a: "Seasonally — about 3–4 times a year, or whenever you feel the need to reset and rejuvenate your body." },
  { q: "What if I dislike an ingredient?", a: "Customize up to 3 ingredients per meal to match your taste — no extra charge." },
  { q: "When and how do meals get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging." },
];

function EasyDetoxFAQ() {
  return <FAQ items={ED_FAQ_ITEMS} />;
}

window.EasyDetoxGamble = EasyDetoxGamble;
window.EasyDetoxMenu = EasyDetoxMenu;
window.EasyDetoxPhases = EasyDetoxPhases;
window.EasyDetoxFAQ = EasyDetoxFAQ;
