// Autoimmune Protocol (AIP)–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "autoimmune". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu) + stat band, protocol
// phases (green band), and Questions & Answers.

// ---- When your body works against you --------------------------------------
function AutoimmuneGamble() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "flame", h: "Flare-ups arrive without warning", p: "Joint pain, skin reactions, brain fog, fatigue. You can't predict the bad days — and you've stopped planning around the good ones." },
    { n: "02", icon: "list-x", h: "You've tried elimination diets and given up", p: "AIP is one of the strictest protocols there is: no grains, legumes, nightshades, eggs, dairy, nuts or seeds. Cooking it yourself, three meals a day, is a full-time job." },
    { n: "03", icon: "search-x", h: "Hidden triggers are everywhere", p: "Tomato in the sauce, seed oil in the dressing, paprika in the seasoning. One overlooked ingredient can undo weeks of progress." },
    { n: "04", icon: "battery-low", h: "You're managing a condition on an empty tank", p: "The fatigue that comes with autoimmune conditions makes strict meal prep exactly the thing you don't have energy for." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(15px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Living with autoimmunity</span>
            <span style={{ display: "block", color: "var(--green-700)", whiteSpace: "nowrap", fontStyle: "italic" }}>shouldn't be a second job</span>
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
            Let us manage the strict part  <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>You focus on feeling better</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band ---------------
const AIP_MENUS = [
  { label: "A day on the plan", meals: [
    { meal: "Breakfast", img: "assets/meals/aip-breakfast.jpg", title: "AIP waffles with guacamole & smoked salmon", desc: "Grain-free waffles with avocado and cured salmon — omega-3s and healthy fats, no eggs, grains or nightshades.", kcal: 409, p: 18, c: 28, f: 25 },
    { meal: "Lunch", img: "assets/meals/aip-lunch.jpg", title: "Roasted lamb in tagine with green pumpkin salad", desc: "Slow-roasted lamb with AIP-safe spices and a green pumpkin salad — collagen, zinc and iron for repair.", kcal: 539, p: 48, c: 26, f: 27 },
    { meal: "Dinner", img: "assets/meals/aip-dinner.jpg", title: "Bone broth & konjac pasta with salmon & pesto", desc: "Glycine-rich bone broth and low-carb konjac pasta with wild salmon — soothing and light on digestion.", kcal: 436, p: 43, c: 12, f: 24 },
    { meal: "Snack 1", img: "assets/meals/aip-snack.jpg", title: "Beetroot dip with veggie cuts", desc: "Nitrate-rich beetroot whipped with olive oil and crisp raw vegetables — nut- and seed-free fiber.", kcal: 171, p: 4, c: 14, f: 11 },
    { meal: "Snack 2", img: "assets/meals/aip-snack-2.jpg", title: "AIP lemon cookies", desc: "Coconut-flour cookies with fresh lemon — no eggs, grains or refined sugar, and gentle on blood sugar.", kcal: 234, p: 5, c: 13, f: 18 },
  ] },
];

function AutoimmuneMenu() {
  const aipStat = (val, label, accent) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={AIP_MENUS} showTotal={false} sub="Every meal is built to the AIP elimination template — no grains, legumes, nightshades, eggs, dairy, nuts, seeds or refined sugar. Nutrient-dense, never bland." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {aipStat("8", "Food groups eliminated", true)}
            {aipStat("30+", <>Plants every week</>)}
            {aipStat("100%", <>AIP-compliant meals,<br />every single day</>)}
            {aipStat("0", <>Immune triggers<br />on your plate</>)}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- How the protocol works (green band) ------------------------------------
function AutoimmunePhases() {
  const items = [
    { n: "01", icon: "circle-slash", cap: "Weeks 1–5 · Fully handled by us", h: "Elimination", p: "Remove the food groups most likely to drive inflammation and immune reactivity. Give the gut lining and immune system room to settle." },
    { n: "02", icon: "list-plus", cap: "Weeks 6–8 · With guidance", h: "Reintroduction", p: "Bring foods back individually, watching symptoms for 3–7 days each. This is where your personal triggers reveal themselves." },
    { n: "03", icon: "user-check", cap: "Long-term · Ongoing", h: "Personalization", p: "Settle into the widest diet your body tolerates — excluding only your confirmed triggers, not everything." },
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
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>soothe</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "52px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>The full picture</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(34px, 4.4vw, 54px)" }}>
              <span style={{ display: "block", color: "var(--ivory-50)" }}>How the AIP</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", color: "var(--green-300)" }}>framework works</span>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "380px" }}>The Autoimmune Protocol has three phases. We deliver the even elimination phase — the strictest part, and the one that's hardest to sustain alone.</p>
        </div>

        <div className="hk-muscleacc" role="tablist" aria-label="How the AIP framework works" onMouseLeave={() => setPaused(false)} style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
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

        <p style={{ margin: "26px 0 0", fontSize: "15px", lineHeight: 1.6, color: "var(--green-100)", textAlign: "center" }}>When you're ready to reintroduce, our nutrition experts help you plan it — as part of your protocol, not as an upsell.</p>
      </div>
    </section>
  );
}

// ---- Questions & Answers -----------------------------------------------------
const AIP_FAQ_ITEMS = [
  { q: "Is this a medical treatment for autoimmune conditions?", a: "No. AIP is a structured nutrition framework designed to reduce dietary sources of inflammation and immune reactivity. It complements — never replaces — the care of your physician. Keep your doctor in the loop, especially if you take medication." },
  { q: "What exactly is removed on AIP?", a: "Grains, legumes, nightshades (tomato, pepper, eggplant, white potato), eggs, dairy, nuts, seeds, refined sugar, alcohol and processed oils. What remains: quality meats and fish, vegetables, fruit, olive and coconut oil, and fermented foods." },
  { q: "How long should I stay on the elimination phase?", a: "Most practitioners recommend a minimum of 30 days, or until you feel a clear improvement in symptoms. After that, foods are reintroduced one at a time." },
  { q: "Will the food be bland?", a: "No nightshade spices doesn't mean no flavor. Our chefs lean on fresh herbs, citrus, garlic-infused oils, ginger and turmeric — every plate is built to taste like food, not medicine." },
  { q: "What if I dislike an ingredient?", a: "Customize up to 3 ingredients per meal to match your taste — no extra charge." },
  { q: "When and how do meals get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging." },
];

function AutoimmuneFAQ() {
  return <FAQ items={AIP_FAQ_ITEMS} />;
}

window.AutoimmuneGamble = AutoimmuneGamble;
window.AutoimmuneMenu = AutoimmuneMenu;
window.AutoimmunePhases = AutoimmunePhases;
window.AutoimmuneFAQ = AutoimmuneFAQ;
