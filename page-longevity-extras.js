// Longevity Diet–specific sections, rendered below the standard ProductDetail
// calculator only when plan.slug === "longevity". Mirrors the Muscle UP page
// structure: Evidence, A day on the plan (menu carousel via PlanMenu),
// Longevity foods (green band), and Questions & Answers.

// ---- Built on the nutrition that actually has evidence behind it ---------
function LongevityEvidence() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  const items = [
    { n: "01", icon: "utensils", h: "The Mediterranean diet, the most studied diet in the world", p: "Olive oil, fish, legumes, vegetables, whole grains, nuts. Three decades of cohort evidence make this the most rigorously supported pattern of eating we have. We use it as the backbone.", src: "PREDIMED trial — Estruch et al., NEJM 2018, N=7,447" },
    { n: "02", icon: "flask-conical", h: "Valter Longo's longevity nutrition pillars", p: "Dr. Longo runs the Longevity Institute at USC. TIME named him one of the 50 most influential people in healthcare in 2018. His framework — pescatarian-leaning, lower animal protein under 65, 12-hour eating window, legumes daily — informs the structural logic of the plan.", src: "Longo, V.D., USC Longevity Institute." },
    { n: "03", icon: "globe", h: "Blue Zones, the populations that live longest", p: "Sardinia, Ikaria, Okinawa, Nicoya, Loma Linda. The common thread isn't a single nutrient. It's daily leafy greens, nuts, modest fish, and no refined sugar.", src: "Dan Buettner / National Geographic. Peer-reviewed work on Sardinian centenarians." },
    { n: "04", icon: "sprout", h: "Plant diversity, measured", p: "The largest open microbiome study ever conducted (11,000+ participants) found that people who ate 30+ different plant species per week had measurably more diverse gut microbiomes. Our weekly menu rotates through 35+. We print the count on your menu.", src: "McDonald et al., mSystems (ASM), 2018." },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
          <h2 className="hk-statement" style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.08, fontSize: "clamp(28px, 4.2vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)", whiteSpace: "nowrap" }}>Built on the nutrition</span>
            <span style={{ display: "block", color: "var(--green-700)", whiteSpace: "nowrap", fontStyle: "italic" }}>that actually has evidence behind it</span>
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
              <span style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", lineHeight: 1.45, color: "var(--text-faint)", fontStyle: "italic" }}>{it.src}</span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border-default)", marginTop: "64px", paddingTop: "56px", textAlign: "center" }}>
          <p className="hk-statement" style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 600, lineHeight: 1.2, fontSize: "clamp(28px, 3.6vw, 42px)", color: "var(--text-strong)" }}>
            No trends, no biohacks <span style={{ display: "block", color: "var(--green-700)", fontStyle: "italic" }}>Just the pattern from the places people live longest</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---- A day on the plan (reuses PlanMenu carousel) -------------------------
const LG_MENUS = [
  { label: "A day on the plan", meals: [
    { meal: "Breakfast", img: "assets/meals/longevity-breakfast.jpg", title: "Potato waffle with smoked salmon & egg", desc: "Cured salmon, jammy egg and a potato waffle under herbed coconut yoghurt — omega-3 forward and blood-sugar friendly.", kcal: 391, p: 25, c: 30, f: 19 },
    { meal: "Lunch", img: "assets/meals/longevity-lunch.jpg", title: "Beetroot summer salad with mango & prawns", desc: "Wild greens, sweet beets, mango and pumpkin seeds with poached prawns — polyphenol-rich and Blue Zone inspired.", kcal: 500, p: 44, c: 29, f: 23 },
    { meal: "Dinner", img: "assets/meals/longevity-dinner.jpg", title: "Wild miso salmon with sweet potato & broccoli", desc: "Wild-caught salmon brings the omega-3s longevity research keeps pointing to, with caramelised sweet potato and steamed broccoli.", kcal: 513, p: 40, c: 32, f: 25 },
    { meal: "Snack 1", img: "assets/meals/longevity-snack-1.jpg", title: "Rich chocolate cake with raw cacao & raspberry", desc: "A dense almond-flour cake with raw cacao ganache and fresh raspberries — naturally sweetened, no refined sugar.", kcal: 202, p: 6, c: 13, f: 14 },
    { meal: "Snack 2", img: "assets/meals/longevity-snack-2.jpg", title: "Homemade hummus with vegetable sticks", desc: "Silky chickpea hummus, extra virgin olive oil and smoked paprika with crisp carrot, cucumber and celery. Fiber and good fats.", kcal: 201, p: 10, c: 29, f: 5 },
  ] },
];

function LongevityMenu() {
  const lgStat = (val, label, accent) => (
    <div className="hk-lg-stat" style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-start", flex: "1 1 0", minWidth: "150px" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "44px" : "38px", lineHeight: 1, color: "var(--ivory-50)" }}>{val}</span>
      <span className="hk-lg-stat-label" style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
  return (
    <>
      <PlanMenu menus={LG_MENUS} showTotal={false} sub="A sample day from the plan — each meal shows its macros and why it earns its place." />
      <section style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px 84px" }}>
          <div className="hk-lg-band" style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "24px 30px" }}>
            {lgStat("35+", "Plant species / week", true)}
            {lgStat("30–45ml", <>Extra virgin<br />olive oil / day</>)}
            {lgStat("3×", "Omega-3 rich foods / week")}
            {lgStat("0g", "Added sugar, gluten, dairy, seed oils")}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- Every box is built from a handful of longevity foods -----------------
function LongevityFoods() {
  const foods = [
    { icon: "droplet", h: "Extra-virgin olive oil", p: "Polyphenols and monounsaturated fat — the backbone of the Mediterranean pattern." },
    { icon: "leaf", h: "Leafy greens", p: "Folate, vitamin K and nitrates for vascular and brain health." },
    { icon: "bean", h: "Legumes", p: <>The common denominator of long-lived diets: fiber, plant protein,<br />slow carbs.</> },
    { icon: "nut", h: "Nuts & seeds", p: "A daily handful, linked to lower cardiovascular risk." },
    { icon: "cherry", h: "Berries", p: "Anthocyanins that support memory and tame oxidative stress." },
    { icon: "fish", h: "Fatty fish", p: "Omega-3s for heart rhythm, blood vessels and cognition." },
    { icon: "wheat", h: "Whole grains", p: "Intact fiber for steady glucose and a well-fed microbiome." },
    { icon: "sprout", h: "Fermented foods", p: "Live cultures that keep the gut ecosystem diverse." },
  ];
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-20px", top: "6px", fontFamily: "var(--font-script)", fontSize: "210px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>longer</span>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 68px", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", textAlign: "left", marginBottom: "40px" }}>
          <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>Inside the box</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "-0.01em", fontWeight: 400, lineHeight: 1.08, fontSize: "clamp(30px, 3.4vw, 42px)", maxWidth: "none" }}>
            <span style={{ display: "block", color: "var(--ivory-50)" }}>Every box is built from</span>
            <span style={{ display: "block", color: "var(--green-300)", whiteSpace: "nowrap" }}>a handful of longevity foods</span>
          </h2>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--green-100)", maxWidth: "560px" }}>Eight ingredients with real evidence behind them, rotated through every menu — so eating for the long run never gets boring.</p>
        </div>

        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", columnGap: "64px", rowGap: "26px", width: "100%" }}>
          {foods.map((f) => (
            <div key={f.icon} style={{ display: "flex", gap: "20px", minWidth: 0 }}>
              <i aria-hidden="true" data-lucide={f.icon} style={{ width: 42, height: 42, flexShrink: 0, marginTop: "1px", color: "var(--green-300)", opacity: 0.9, strokeWidth: 1.15, pointerEvents: "none" }}></i>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: 0, flex: "1 1 auto" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "20px", lineHeight: 1.2, color: "var(--ivory-50)" }}>{f.h}</h3>
                <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.55, color: "var(--green-100)" }}>{f.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Questions & Answers ---------------------------------------------------
const LG_FAQ_ITEMS = [
  { q: "Is the Longevity Diet fully plant-based?", a: "Plant-forward, not plant-only. Most of every plate is vegetables, legumes and whole grains, with fatty fish and eggs appearing a few times a week." },
  { q: "Will I lose weight on this plan?", a: "It's built for healthspan, not crash dieting — but with two calorie tiers and no added sugar, most clients settle at a healthy weight naturally." },
  { q: "Is there a lactose option?", a: "Yes — Longevity is the one plan with an optional lactose add-back (fermented dairy, aged cheeses). Everything stays gluten- and sugar-free." },
  { q: "What if I dislike an ingredient?", a: "Customize up to 3 ingredients per meal to match your taste — no extra charge." },
  { q: "When and how do meals get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging." },
  { q: "Can I pause?", a: "Yes — pause or skip any day with 24 hours' notice, no penalties." },
];

function LongevityFAQ() {
  return <FAQ items={LG_FAQ_ITEMS} />;
}

window.LongevityEvidence = LongevityEvidence;
window.LongevityMenu = LongevityMenu;
window.LongevityFoods = LongevityFoods;
window.LongevityFAQ = LongevityFAQ;
