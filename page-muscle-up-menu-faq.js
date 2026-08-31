// Muscle UP — "A day on the plan" menu carousel + "Questions & Answers" FAQ.
// Split from MuscleUpExtras.jsx to keep files small. Loaded after it; both
// attach to window so MuscleUpFullExtras.jsx (the composer) can use them.

const MU_MENUS = [
  { label: "Low calories · 1,600–1,900 kcal", meals: [
    { meal: "Breakfast", img: "assets/meals/mu-low-breakfast.jpg", title: "Zucchini pancakes with salmon & green salad", kcal: 358, p: 21, c: 22, f: 20 },
    { meal: "Lunch", img: "assets/meals/mu-low-lunch.jpg", title: "Green protein salad with prawns", kcal: 573, p: 58, c: 29, f: 25 },
    { meal: "Dinner", img: "assets/meals/mu-low-dinner.jpg", title: "Bone broth & konjac pasta bolognese", kcal: 503, p: 55, c: 19, f: 23 },
    { meal: "Snack 1", img: "assets/meals/mu-low-snack-1.jpg", title: "Coconut mini bites", kcal: 232, p: 3.9, c: 17, f: 15 },
    { meal: "Snack 2", img: "assets/meals/mu-low-snack-2.jpg", title: "Sauerkraut", kcal: 40, p: 2, c: 5.8, f: 1 },
  ] },
  { label: "High calories · 2,000–2,200 kcal", meals: [
    { meal: "Breakfast", img: "assets/meals/mu-high-breakfast.jpg", title: "Buckwheat bowl with smoked salmon & egg", kcal: 476, p: 34, c: 31, f: 24 },
    { meal: "Lunch", img: "assets/meals/mu-high-lunch.jpg", title: "Beef with roasted veggies & wild rice", kcal: 669, p: 59, c: 43, f: 29 },
    { meal: "Dinner", img: "assets/meals/mu-high-dinner.jpg", title: "Baked seabass, roasted veg & sweet potato wedges", kcal: 602, p: 57, c: 44, f: 22 },
    { meal: "Snack 1", img: "assets/meals/mu-high-snack-1.jpg", title: "Matcha mini balls", kcal: 251, p: 4, c: 19, f: 15 },
    { meal: "Snack 2", img: "assets/meals/mu-high-snack-2.jpg", title: "Lean green smoothie", kcal: 179, p: 4, c: 25, f: 7 },
  ] },
];

function muStat(val, label, accent) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1px", flex: "1 1 0" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "26px" : "20px", color: accent ? "var(--green-700)" : "var(--text-strong)", lineHeight: 1 }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-faint)" }}>{label}</span>
    </div>
  );
}
function muTotStat(val, label, accent) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-start" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: accent ? "62px" : "52px", lineHeight: 0.9, color: "var(--ivory-50)" }}>{val}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--green-200)" }}>{label}</span>
    </div>
  );
}

function PlanMenu({ menus = MU_MENUS, title = "See a full day of meals", totalTitle = "A full day on Muscle UP", showTotal = true, showMacros = true, sub = "Switch between two sample menus — each meal shows its macros, and the daily total updates as you choose." }) {
  const [idx, setIdx] = React.useState(0);
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [idx]);

  const menu = menus[idx];
  const totRaw = menu.meals.reduce((a, m) => ({ kcal: a.kcal + m.kcal, p: a.p + m.p, c: a.c + m.c, f: a.f + m.f }), { kcal: 0, p: 0, c: 0, f: 0 });
  const tot = { kcal: Math.round(totRaw.kcal), p: Math.round(totRaw.p), c: Math.round(totRaw.c), f: Math.round(totRaw.f) };

  const scrollBy = (dir) => { if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" }); };
  const arrowStyle = (side) => ({
    position: "absolute", top: "50%", transform: "translateY(-50%)", [side]: "-18px",
    width: "40px", height: "40px", borderRadius: "50%", border: "1px solid var(--border-subtle)",
    background: "rgba(253,252,248,0.7)", color: "var(--text-muted)", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2,
    opacity: 0.55, transition: "opacity var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
    boxShadow: "var(--shadow-xs)",
  });

  return (
    <section id="day" style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", marginBottom: "36px" }}>
          <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>A day on the plan</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", lineHeight: 1.05, fontSize: "clamp(28px, 5vw, 40px)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>{title}</h2>
          <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.5, color: "var(--text-muted)", maxWidth: "56ch" }}>{sub}</p>
        </div>

        {menus.length > 1 && (
        <div style={{ display: "inline-flex", background: "var(--white)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-pill)", padding: "4px", gap: "4px", marginBottom: "28px" }}>
          {menus.map((m, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              cursor: "pointer", border: 0, borderRadius: "var(--radius-pill)", padding: "9px 22px",
              fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)",
              background: i === idx ? "var(--green-700)" : "transparent", color: i === idx ? "var(--ivory-50)" : "var(--text-muted)",
              transition: "all var(--dur-base) var(--ease-out)",
            }}>{m.label}</button>
          ))}
        </div>
        )}

        <div style={{ position: "relative", margin: "0 8px" }}>
          <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll left" style={arrowStyle("left")}>
            <i data-lucide="chevron-left" style={{ width: 18, height: 18 }}></i>
          </button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="Scroll right" style={arrowStyle("right")}>
            <i data-lucide="chevron-right" style={{ width: 18, height: 18 }}></i>
          </button>
          <div ref={scrollRef} style={{ display: "flex", gap: "20px", overflowX: "auto", scrollSnapType: "x mandatory", padding: "2px 2px 6px", scrollbarWidth: "none" }}>
            {menu.meals.map((m, i) => (
              <div key={i} style={{ flex: "0 0 300px", scrollSnapAlign: "start", display: "flex", flexDirection: "column", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3", background: m.img ? "var(--ivory-100)" : "repeating-linear-gradient(45deg, var(--ivory-200), var(--ivory-200) 9px, var(--ivory-100) 9px, var(--ivory-100) 18px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {m.img
                    ? <img src={m.img} alt={m.title} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    : <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-400)", background: "var(--ivory-50)", padding: "4px 8px", borderRadius: "var(--radius-sm)" }}>{m.meal} photo</span>}
                </div>
                <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", gap: "12px", padding: "22px" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--green-600)" }}>{m.meal}</span>
                  <h3 style={{ margin: 0, minHeight: "calc(20px * 1.15 * 2)", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "20px", lineHeight: 1.15, color: "var(--text-strong)" }}>{m.title}</h3>
                  <p style={{ margin: 0, minHeight: "calc(13.5px * 1.5 * 3)", fontFamily: "var(--font-body)", fontSize: "13.5px", lineHeight: 1.5, color: "var(--text-muted)" }}>{m.desc || ""}</p>
                  {showMacros && (
                  <div style={{ display: "flex", gap: "12px", marginTop: "auto", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                    {muStat(m.kcal, "kcal", true)}{muStat(m.p + "g", "protein")}{muStat(m.c + "g", "carbs")}{muStat(m.f + "g", "fat")}
                  </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showTotal && (
        <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)", padding: "32px 36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-200)" }}>Daily total · {menu.label}</span>
            <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "22px" }}>{totalTitle}</span>
          </div>
          <div style={{ display: "flex", gap: "38px", flexWrap: "wrap", alignItems: "flex-end" }}>
            {muTotStat(tot.kcal.toLocaleString("en-US"), "kcal", true)}{muTotStat(tot.p + "g", "protein")}{muTotStat(tot.c + "g", "carbs")}{muTotStat(tot.f + "g", "fat")}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}

const MU_FAQ_ITEMS = [
  { q: "How much protein per meal?", a: "Each meal is calibrated to hit 35–55g of protein, scaled to your calorie tier and training load." },
  { q: "Are portions big enough for serious training?", a: "Yes. This isn't a diet plan with tiny portions. Meals are calibrated for active people who train 4–6x per week. If you need more volume, your nutritionist adjusts it." },
  { q: "Can I customize meals or swap ingredients?", a: "Yes — customize up to 3 ingredients per meal to match your taste or macros." },
  { q: "What if I have food intolerances?", a: "Every plate is dairy-, gluten- and sugar-free by default. Let us know any other intolerances and we'll adjust your menu." },
  { q: "When and how do meals get delivered?", a: "Delivered fresh daily across Dubai, 7 AM–12 PM." },
  { q: "Can I pause?", a: "Yes — pause or skip any day with 24 hours' notice, no penalties." },
];

function MuscleUpFAQ() {
  return <FAQ items={MU_FAQ_ITEMS} />;
}

const HK_FAQ_DEFAULT_ITEMS = [
  { q: "How does delivery work?", a: "Meals are chef-made fresh and delivered daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging." },
  { q: "Can I customize my meals?", a: "Yes — every plan lets you remove up to 3 ingredients you dislike or can't tolerate, no extra charge." },
  { q: "What about allergies and intolerances?", a: "Every dish is dairy-, gluten- and sugar-free by default. Tell us about any other intolerances and we'll tailor your menu." },
  { q: "Can I pause or skip a day?", a: "Yes — pause or skip any day with 24 hours' notice, no penalties." },
  { q: "How is pricing calculated?", a: "Pricing depends on meals per day, calorie tier, and subscription length — longer plans unlock a bigger discount." },
  { q: "How clean is the food, really?", a: "Very. We source clean, nutrient-rich ingredients and organic protein, free from harmful pesticides and chemicals, for every plan." },
];

function FAQ({ items, eyebrow = "Questions", titleTop = "Questions", titleBottom = "& Answers" }) {
  const list = items || HK_FAQ_DEFAULT_ITEMS;
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section style={{ background: "var(--bg-page)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="hk-container hk-grid-2" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "64px", alignItems: "start" }}>
        <div className="hk-sticky" style={{ position: "sticky", top: "110px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>{eyebrow}</span>
          </div>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.08, fontSize: "clamp(34px, 4vw, 48px)" }}>
            <span style={{ display: "block", color: "var(--text-strong)" }}>{titleTop}</span>
            <span style={{ display: "block", color: "var(--green-700)" }}>{titleBottom}</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--border-default)" }}>
          {list.map((it, i) => {
            const open = i === openIdx;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--border-default)" }}>
                <button type="button" onClick={() => setOpenIdx(open ? -1 : i)} style={{ width: "100%", display: "flex", alignItems: "center", gap: "20px", background: "none", border: 0, cursor: "pointer", padding: "26px 0", textAlign: "left" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "var(--green-700)", flexShrink: 0, width: "28px" }}>{i + 1 < 10 ? "0" + (i + 1) : i + 1}</span>
                  <span style={{ flex: 1, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "20px", lineHeight: 1.3, color: "var(--text-strong)" }}>{it.q}</span>
                  <span style={{
                    flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid " + (open ? "var(--green-700)" : "var(--border-default)"), background: open ? "var(--green-700)" : "transparent",
                    color: open ? "var(--ivory-50)" : "var(--text-strong)", transition: "all var(--dur-base) var(--ease-out)",
                  }}>
                    <span style={{ fontSize: "20px", lineHeight: 1, fontWeight: 400, position: "relative", top: "-1px" }}>{open ? "\u2212" : "+"}</span>
                  </span>
                </button>
                {open && (
                  <div style={{ padding: "0 0 30px 48px" }}>
                    <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "62ch" }}>{it.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MuscleUpMenu() {
  return <PlanMenu />;
}

window.PlanMenu = PlanMenu;
window.MuscleUpMenu = MuscleUpMenu;
window.MuscleUpFAQ = MuscleUpFAQ;
window.FAQ = FAQ;
