// Low FODMAP Protocol–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "low-fodmap". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu), protocol phases
// (green band), and Questions & Answers. Content from healthykitchen.delivery/lowfodmap.

// ---- When every meal feels like a gamble ----------------------------------
function LowFodmapGamble() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "salad", h: "You feel bloated even when you eat clean", p: "Salads, smoothies, fruit, gluten-free snacks. Even the healthy meals leave you uncomfortable, and you've stopped trusting them." },
    { n: "02", icon: "list-x", h: "You've cut foods at random and still don't have answers", p: "Gluten one month. Dairy the next. Then coffee, sauces, onions. The list keeps growing. Nothing has fully worked." },
    { n: "03", icon: "utensils-crossed", h: "Eating out has become a quiet anxiety", p: "You read every menu twice, ask the waiter awkward questions, and still don't know what's in the sauce. Some nights you'd rather not go." },
    { n: "04", icon: "clipboard-list", h: "A doctor mentioned low-FODMAP — but doing it sounds impossible", p: "Hidden onion and garlic everywhere. Confusing portion sizes. One slip and you're back to square one." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(15px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>When every meal</span>
            <span style={{ display: "block", color: "var(--green-700)", whiteSpace: "nowrap", fontStyle: "italic" }}>feels like a gamble</span>
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
            You don't need another diet  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>You need a structured protocol</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the plan (reuses PlanMenu carousel) -------------------------
const LF_MENUS = [
  { label: "A day on the plan", meals: [
    { meal: "Breakfast", img: "assets/meals/lf-breakfast.jpg", title: "Potato pancakes with smoked salmon and green salad", desc: "Golden potato pancakes topped with wild smoked salmon and a fresh green salad. Naturally low-FODMAP, satisfying and easy on digestion.", kcal: 438, p: 26, c: 32, f: 22 },
    { meal: "Lunch", img: "assets/meals/lf-lunch.jpg", title: "Grilled chicken & vegetable wild rice", desc: "Lean grilled chicken on wild rice with crisp vegetables. High-protein, balanced and naturally gluten-free.", kcal: 531, p: 42, c: 48, f: 19 },
    { meal: "Dinner", img: "assets/meals/lf-snack.jpg", title: "Prawn zucchini noodles", desc: "Succulent prawns with fresh zucchini noodles in a light herb sauce. A low-carb, gut-friendly pasta alternative.", kcal: 419, p: 40, c: 22, f: 19 },
    { meal: "Snack", img: "assets/meals/lf-dinner.jpg", title: "Carrot cake mini balls", desc: "Wholesome energy bites rolled in coconut. Naturally sweet, refined sugar-free and Monash-safe.", kcal: 247, p: 6, c: 22, f: 15 },
  ] },
];

function LowFodmapMenu() {
  const lfStat = (val, label, accent) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={LF_MENUS} showTotal={false} sub="Every meal is FODMAP-compliant down to the portion size — engineered against the Monash University food database, gluten- and dairy-free by default." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {lfStat("86%", "IBS symptom improvement reported", true)}
            {lfStat("21 days", "The full Phase 1 elimination")}
            {lfStat("Day 7", "When most clients notice change")}
            {lfStat("0", "Hidden onion, garlic or FODMAPs")}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- How the protocol works (green band) -----------------------------------
function LowFodmapPhases() {
  const items = [
    { n: "01", icon: "circle-slash", cap: "We deliver this · 21 days", h: "Elimination", p: "Remove all major FODMAP sources. Let the gut settle into a calm baseline." },
    { n: "02", icon: "list-plus", cap: "With your dietitian · 6–8 weeks", h: "Reintroduction", p: "Reintroduce FODMAP groups one at a time. This is where your specific triggers get identified." },
    { n: "03", icon: "user-check", cap: "Long-term · Ongoing", h: "Personalization", p: "Build a personalized eating pattern that excludes only your confirmed triggers." },
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
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>calmer</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>The full picture</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(34px, 4.4vw, 54px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>How the protocol</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", color: "var(--green-300)" }}>works</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "380px" }}>The low-FODMAP protocol has three phases. We deliver even Phase 1 — the elimination phase — at the level of execution most people can't sustain on their own.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="How the protocol works" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
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

        <p style={{ margin: "26px 0 0", fontSize: "15px", lineHeight: 1.6, color: "var(--green-100)", textAlign: "center" }}>After your 21 days, our experts help you plan Phase 2 reintroduction — at no extra cost, as part of your reset.</p>
      </div>
    </section>
  );
}

// ---- Questions & Answers ---------------------------------------------------
const LF_FAQ_ITEMS = [
  { q: "Is this a medical treatment for IBS?", a: "No. This is a structured food protocol based on the low-FODMAP approach. It supports people with sensitive digestion, but it doesn't replace medical advice. If you have a diagnosed condition, consult your physician before starting." },
  { q: "Why is 21 days recommended?", a: "The elimination phase (Phase 1) is clinically structured around 2–3 weeks. The 21-day plan covers the full Phase 1 — shorter durations are useful as a trial but don't deliver the complete baseline." },
  { q: "Is this a diet I have to follow forever?", a: "No. Phase 1 is meant to end. The whole point is to identify what you can comfortably eat again — through Phase 2 reintroduction with our dietitian. The end goal is the most varied diet possible, with only your confirmed triggers excluded." },
  { q: "Will I lose weight?", a: "Some people do, simply because the menu is whole-food and portion-controlled. But this is not a weight-loss product — if weight loss is your primary goal, our other plans are a better fit." },
  { q: "What if I have other dietary restrictions or allergies?", a: "Every meal is already gluten-free, dairy-free, refined-sugar-free, and free of onion and garlic. We can accommodate additional restrictions — share them with us." },
  { q: "Do I have to eat only your meals during the 21 days?", a: "For best results, yes — most of the time. The protocol works because it removes all FODMAP sources. We deliver 3 meals plus a snack per day, and we'll guide you on safe options for any meal we don't deliver." },
];

function LowFodmapFAQ() {
  return <FAQ items={LF_FAQ_ITEMS} />;
}

window.LowFodmapGamble = LowFodmapGamble;
window.LowFodmapMenu = LowFodmapMenu;
window.LowFodmapPhases = LowFodmapPhases;
window.LowFodmapFAQ = LowFodmapFAQ;
