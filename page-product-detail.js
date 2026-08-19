const { Button, Tag } = window.HealthyKitchenDesignSystem_f4c763;

// ---- Calculator configuration -------------------------------------------------
const MEAL_CONFIGS = [
  { id: "full", label: "Full day", meals: "Breakfast · Lunch · Dinner · 2 Snacks", factor: 1.6, calories: ["1600–1800", "1900–2200"] },
  { id: "am",   label: "AM",        meals: "Breakfast · Lunch · Snack",             factor: 1.0, calories: ["1000–1200", "1100–1300"] },
  { id: "pm",   label: "PM",        meals: "Lunch · Dinner · Snack",                factor: 1.0, calories: ["1200–1400", "1300–1500"] },
  { id: "main", label: "Main meals",meals: "Breakfast · Lunch · Dinner",            factor: 1.2, calories: ["1400–1500", "1500–1600"] },
];
const DURATIONS = [5, 7, 14, 21, 28];
const DURATION_DISCOUNT = { 5: 0, 7: 0.02, 14: 0.05, 21: 0.08, 28: 0.12 };

// Per-plan calculator overrides (mirrors the live site)
const PLAN_CALC_OVERRIDES = {
  "detox-cleanse": {
    mealConfigs: [
      { id: "full", label: "Full day", meals: "6 juices & smoothies", factor: 1.6, calories: ["1000–1200"] },
    ],
    durations: [1, 2, 3],
    durationDiscount: { 1: 0, 2: 0, 3: 0.05 },
    defaultDays: 1,
  },
  "easy-detox": {
    mealConfigs: [
      { id: "full", label: "Full day", meals: "2 Drinks · Lunch · Snack · Dinner", factor: 1.6, calories: ["1200–1500"] },
      { id: "am",   label: "AM",        meals: "Drink · Snack · Lunch",            factor: 1.0, calories: ["800–1000"] },
      { id: "pm",   label: "PM",        meals: "Lunch · Dinner · Snack",           factor: 1.0, calories: ["900–1100"] },
      { id: "main", label: "Main meals",meals: "Drink · Lunch · Dinner",           factor: 1.2, calories: ["1000–1200"] },
    ],
    durations: [5, 7, 14, 21],
    durationDiscount: { 5: 0, 7: 0.02, 14: 0.05, 21: 0.08 },
    defaultDays: 7,
  },
};

// Explicit AED price tables (total for the whole period) — [mealId][calorie tier][days].
// Tier 0 = low calories, tier 1 = high calories.
const HK_PRICE_TABLE = {
  full: [
    { 5: 1750, 7: 2450, 14: 4550, 21: 6300, 28: 7700 },
    { 5: 2025, 7: 2825, 14: 5320, 21: 7455, 28: 9240 },
  ],
  pm: [
    { 5: 1350, 7: 1890, 14: 3430, 21: 4620, 28: 5460 },
    { 5: 1625, 7: 2275, 14: 4200, 21: 5775, 28: 7000 },
  ],
  am: [
    { 5: 1300, 7: 1820, 14: 3290, 21: 4410, 28: 5180 },
    { 5: 1575, 7: 2205, 14: 4060, 21: 5565, 28: 6720 },
  ],
  main: [
    { 5: 1460, 7: 2040, 14: 3794, 21: 5250, 28: 6440 },
    { 5: 1725, 7: 2415, 14: 4578, 21: 6342, 28: 7756 },
  ],
};
const HK_PRICE_TABLE_PLANS = ["longevity", "anticandida", "autoimmune"];

// Easy Detox — single calorie tier, 5–21 days.
const HK_PRICE_TABLE_EASY_DETOX = {
  full: [{ 5: 1750, 7: 2450, 14: 4550, 21: 6300 }],
  am:   [{ 5: 1300, 7: 1820, 14: 3290, 21: 4410 }],
  pm:   [{ 5: 1350, 7: 1890, 14: 3430, 21: 4620 }],
  main: [{ 5: 1460, 7: 2040, 14: 3794, 21: 5250 }],
};

// Detox & Cleanse — single option, 1–3 days.
const HK_PRICE_TABLE_DETOX_CLEANSE = {
  full: [{ 1: 350, 2: 700, 3: 990 }],
};

// Gut Healing & Low FODMAP — same AM/PM/Main as the group above, own Full day.
const HK_PRICE_TABLE_GUT = {
  full: [
    { 5: 1675, 7: 2345, 14: 4200, 21: 5880, 28: 7140 },
    { 5: 1950, 7: 2730, 14: 4970, 21: 7035, 28: 8680 },
  ],
  am: HK_PRICE_TABLE.am,
  pm: HK_PRICE_TABLE.pm,
  main: HK_PRICE_TABLE.main,
};
const HK_PRICE_TABLE_GUT_PLANS = ["gut-healing", "low-fodmap"];

// Muscle UP — own main-meals pricing (tier 0 = standard, tier 1 = high calories).
const HK_PRICE_TABLE_MUSCLE_UP = {
  full: [
    { 5: 1800, 7: 2520, 14: 4760, 21: 6825, 28: 8400 },
    { 5: 1950, 7: 2730, 14: 5180, 21: 7455, 28: 9240 },
  ],
  am: [
    { 5: 1300, 7: 1820, 14: 3360, 21: 4725, 28: 5600 },
    { 5: 1450, 7: 2030, 14: 3780, 21: 5355, 28: 6440 },
  ],
  pm: [
    { 5: 1375, 7: 1925, 14: 3570, 21: 5040, 28: 6020 },
    { 5: 1525, 7: 2135, 14: 3990, 21: 5670, 28: 6860 },
  ],
  main: [
    { 5: 1550, 7: 2170, 14: 4088, 21: 5859, 28: 7196 },
    { 5: 1750, 7: 2450, 14: 4606, 21: 6615, 28: 7952 },
  ],
};

/* ---------- Reusable calculator card ---------- */
function PlanCalculator({ calc, onOpenCustomize }) {
  const { mealId, setMealId, calIdx, setCalIdx, days, setDays, excluded, meal, perDay, saved, total, addToCart } = calc;
  const mealConfigs = calc.mealConfigs || MEAL_CONFIGS;
  const durations = calc.durations || DURATIONS;
  const durationDiscount = calc.durationDiscount || DURATION_DISCOUNT;

  const labelStyle = { margin: "0 0 8px", fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" };
  const stepNo = (n) => (
    <span style={{ width: 20, height: 20, borderRadius: "var(--radius-circle)", background: "var(--green-100)", color: "var(--green-800)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flex: "none" }}>{n}</span>
  );

  return (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <i data-lucide="calculator" style={{ width: 18, height: 18, color: "var(--green-700)" }}></i>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "20px", color: "var(--text-strong)" }}>Build your plan</h2>
      </div>

      {/* Step 1 — meals per day */}
      <div>
        <p style={labelStyle}>{stepNo(1)} How many meals per day?</p>
        <div style={{ display: "grid", gridTemplateColumns: mealConfigs.length > 1 ? "1fr 1fr" : "1fr", gap: "10px" }}>
          {mealConfigs.map((m) => {
            const active = m.id === mealId;
            return (
              <button key={m.id} onClick={() => { setMealId(m.id); setCalIdx(0); }} style={{
                textAlign: "left", cursor: "pointer", padding: "12px 14px", borderRadius: "var(--radius-md)",
                background: active ? "var(--green-50)" : "var(--white)",
                border: "1.5px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
                transition: "all var(--dur-base) var(--ease-out)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "16px", color: active ? "var(--green-800)" : "var(--text-strong)" }}>{m.label}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", lineHeight: 1.35, color: "var(--text-faint)", marginTop: "3px" }}>{m.meals}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2 — calories */}
      <div>
        <p style={labelStyle}>{stepNo(2)} Determine your calorie intake</p>
        <div style={{ display: "grid", gridTemplateColumns: meal.calories.length > 1 ? "1fr 1fr" : "1fr", gap: "10px" }}>
          {meal.calories.map((c, i) => {
            const active = i === calIdx;
            return (
              <button key={c} onClick={() => setCalIdx(i)} style={{
                cursor: "pointer", padding: "12px 14px", borderRadius: "var(--radius-md)",
                background: active ? "var(--green-700)" : "var(--white)",
                color: active ? "var(--ivory-50)" : "var(--text-body)",
                border: "1.5px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
                transition: "all var(--dur-base) var(--ease-out)", display: "flex", flexDirection: "column", gap: "2px",
              }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "18px" }}>{c}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", opacity: 0.75 }}>kcal / day</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3 — duration */}
      <div>
        <p style={labelStyle}>{stepNo(3)} Choose your subscription</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {durations.map((d) => {
            const active = d === days;
            const disc = durationDiscount[d] || 0;
            return (
              <button key={d} onClick={() => setDays(d)} style={{
                position: "relative", flex: "1 1 0", minWidth: "64px", cursor: "pointer", padding: "11px 5px", borderRadius: "var(--radius-md)",
                background: active ? "var(--green-700)" : "var(--white)",
                color: active ? "var(--ivory-50)" : "var(--text-body)",
                border: "1.5px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
                transition: "all var(--dur-base) var(--ease-out)", textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "19px", lineHeight: 1 }}>{d}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", opacity: 0.8, marginTop: "2px" }}>days</div>
                {disc > 0 && (
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, marginTop: "2px", color: active ? "var(--green-100)" : "var(--clay-600)" }}>−{Math.round(disc * 100)}%</div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 4 — customize ingredients */}
      <div>
        <p style={labelStyle}>{stepNo(4)} Customize ingredients (optional)</p>
        <button onClick={onOpenCustomize} style={{
          width: "100%", boxSizing: "border-box", cursor: "pointer", padding: "12px 15px", borderRadius: "var(--radius-md)",
          background: "var(--white)", border: "1.5px solid " + (excluded.length > 0 ? "var(--green-700)" : "var(--border-default)"),
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px",
          transition: "all var(--dur-base) var(--ease-out)",
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-strong)" }}>
            <i data-lucide="sliders-horizontal" style={{ width: 16, height: 16, color: "var(--green-700)" }}></i>
            {excluded.length > 0 ? "Excluding " + excluded.join(", ") : "Remove up to 3 ingredients"}
          </span>
          <i data-lucide="chevron-right" style={{ width: 16, height: 16, color: "var(--text-faint)" }}></i>
        </button>
      </div>

      {/* Price summary */}
      <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "13px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>{perDay} AED / day · {days} days</span>
            {saved > 0 && <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--clay-600)", fontWeight: 500 }}>You save {saved} AED</span>}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--green-700)", lineHeight: 1 }}>{total}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-faint)" }}>AED</span>
          </div>
        </div>
        <Button variant="primary" size="lg" fullWidth iconLeft={<i data-lucide="shopping-bag" style={{ width: 18, height: 18 }}></i>} onClick={addToCart}>
          Add to cart · {total} AED
        </Button>
      </div>
    </div>
  );
}

function ProductDetail({ plan, onBack, onAdd }) {
  const calcOverride = (plan && PLAN_CALC_OVERRIDES[plan.slug]) || null;
  const planMealConfigs = (calcOverride && calcOverride.mealConfigs) || MEAL_CONFIGS;
  const planDurations = (calcOverride && calcOverride.durations) || DURATIONS;
  const planDurationDiscount = (calcOverride && calcOverride.durationDiscount) || DURATION_DISCOUNT;
  const [mealId, setMealId] = React.useState(planMealConfigs[0].id);
  const [calIdx, setCalIdx] = React.useState(0);
  const [days, setDays] = React.useState(planDurations[0]);
  React.useEffect(() => {
    setMealId(planMealConfigs[0].id);
    setCalIdx(0);
    setDays(planDurations[0]);
    setExcluded([]);
  }, [plan && plan.slug]);
  const [excluded, setExcluded] = React.useState([]);
  const [customizeOpen, setCustomizeOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleIngredient = (ing) => setExcluded((prev) => prev.includes(ing) ? prev.filter((i) => i !== ing) : (prev.length < 3 ? [...prev, ing] : prev));

  // keep lucide icons after re-render
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  if (!plan) return null;

  const heroSpec = plan.slug === "muscle-up" ? {
    eyebrow: <>High-protein · Recovery &amp; endurance</>,
    chip: "High-protein",
    facts: [
      { n: "01", h: "1,600–2,300 kcal/day", p: "Matched to your training goal" },
      { n: "02", h: "High protein, anti-inflammatory", p: "For muscle growth and recovery" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "longevity" ? {
    eyebrow: <>Plant-forward · Longevity &amp; healthspan</>,
    chip: "Heart-healthy",
    hook: <>Longevity isn't a supplement. <span style={{ display: "block", color: "var(--green-700)" }}>It's what you eat every day.</span></>,
    facts: [
      { n: "01", h: "1,600–2,200 kcal/day", p: "Calibrated for healthspan, not restriction" },
      { n: "02", h: "Plant-forward, antioxidant-rich", p: "Fiber, polyphenols and omega-3s every day" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "gut-healing" ? {
    eyebrow: <>Restore · Microbiome &amp; digestion</>,
    chip: "Gut support",
    facts: [
      { n: "01", h: "Remove · rebuild · repopulate", p: "All three stages of gut repair in every menu" },
      { n: "02", h: "Fermented foods daily", p: "Live cultures plus 25g+ of gut-feeding fiber" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "autoimmune" ? {
    eyebrow: <>AIP framework · Anti-inflammatory</>,
    chip: "Anti-inflammatory",
    facts: [
      { n: "01", h: "Full AIP elimination template", p: "No grains, legumes, nightshades, eggs, dairy, nuts or seeds" },
      { n: "02", h: "Deeply anti-inflammatory", p: "Nutrient-dense meals that calm an overactive immune response" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "anticandida" ? {
    eyebrow: <>Low-sugar · Antifungal &amp; balance</>,
    chip: "Low-sugar",
    facts: [
      { n: "01", h: "Zero added sugar", p: "Nothing for candida to feed on — cravings quiet down" },
      { n: "02", h: "Antifungal ingredients daily", p: "Garlic, coconut oil, oregano, leafy greens and ferments" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "easy-detox" ? {
    eyebrow: <>Fully vegan · Gentle reset</>,
    chip: "Vegan",
    facts: [
      { n: "01", h: "1,200–1,500 kcal/day", p: "A full reset without fasting or deprivation" },
      { n: "02", h: "Liver-supporting foods daily", p: "Leafy greens, beets, lemon, green juices and herbal teas" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "detox-cleanse" ? {
    eyebrow: <>Juices &amp; smoothies · 1–3 day cleanse</>,
    chip: "Vegan · Juice",
    facts: [
      { n: "01", h: "6 juices & smoothies a day", p: "Nutrient-dense, more vegetable than fruit, no added sugar" },
      { n: "02", h: "3 days maximum", p: "Then transition to Easy Detox for a balanced follow-up" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : plan.slug === "low-fodmap" ? {
    eyebrow: <>Monash-aligned · Gut calm &amp; IBS relief</>,
    chip: "Anti-bloat",
    facts: [
      { n: "01", h: "21 days — the full Phase 1", p: "The clinically recommended elimination window" },
      { n: "02", h: "Zero hidden FODMAPs", p: "No onion or garlic — portions checked against the Monash database" },
      { n: "03", h: "Delivered daily across Dubai", p: "Before noon, every day" },
    ],
  } : null;

  const meal = planMealConfigs.find((m) => m.id === mealId) || planMealConfigs[0];
  const calFactor = calIdx === 0 ? 1.0 : 1.12;
  const priceTable = plan.slug === "easy-detox" ? HK_PRICE_TABLE_EASY_DETOX
    : plan.slug === "detox-cleanse" ? HK_PRICE_TABLE_DETOX_CLEANSE
    : plan.slug === "muscle-up" ? HK_PRICE_TABLE_MUSCLE_UP
    : HK_PRICE_TABLE_GUT_PLANS.includes(plan.slug) ? HK_PRICE_TABLE_GUT
    : HK_PRICE_TABLE_PLANS.includes(plan.slug) ? HK_PRICE_TABLE : null;
  const priceRow = priceTable && priceTable[meal.id]
    && priceTable[meal.id][Math.min(calIdx, priceTable[meal.id].length - 1)];
  let perDay, total, saved;
  if (priceRow && priceRow[days]) {
    total = priceRow[days];
    perDay = Math.round(total / days);
    const firstDays = Math.min.apply(null, Object.keys(priceRow).map(Number));
    const baseDay = priceRow[firstDays] / firstDays;
    saved = Math.max(0, Math.round(baseDay * days) - total);
  } else {
    perDay = Math.round(plan.price * meal.factor * calFactor);
    const discount = planDurationDiscount[days] || 0;
    const subtotal = perDay * days;
    total = Math.round(subtotal * (1 - discount));
    saved = subtotal - total;
  }

  const addToCart = () => {
    setDrawerOpen(false);
    onAdd && onAdd(plan, { total, perDay, days, mealLabel: meal.label, meals: meal.meals, calorieLabel: meal.calories[calIdx] + " kcal/day", excluded });
  };

  const calc = { mealId, setMealId, calIdx, setCalIdx, days, setDays, excluded, meal, perDay, saved, total, addToCart, mealConfigs: planMealConfigs, durations: planDurations, durationDiscount: planDurationDiscount };

  return (
    <>
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "40px 32px 88px" }}>
        <button onClick={onBack} style={{ background: "none", border: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", marginBottom: "28px" }}>
          <i data-lucide="arrow-left" style={{ width: 16, height: 16 }}></i> All meal plans
        </button>

        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start" }}>
          {/* LEFT — title, short description, photo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {heroSpec ? (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>{heroSpec.eyebrow}</span>
                  <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1, fontSize: "clamp(34px, 5vw, 58px)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>{plan.name}</h1>
                  {heroSpec.hook && <p style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, lineHeight: 1.25, fontSize: "22px", color: "var(--text-strong)" }}>{heroSpec.hook}</p>}
                  <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.55, color: "var(--text-muted)", maxWidth: "46ch" }}>{plan.long || plan.blurb}</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", background: "var(--clay-100)", color: "var(--clay-600)", borderRadius: "var(--radius-pill)", padding: "5px 11px" }}>{heroSpec.chip}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", background: "var(--green-100)", color: "var(--green-800)", borderRadius: "var(--radius-pill)", padding: "5px 11px" }}>Dairy-free</span>
                    <span style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", background: "var(--green-100)", color: "var(--green-800)", borderRadius: "var(--radius-pill)", padding: "5px 11px" }}>Gluten-free</span>
                    <span style={{ display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", background: "var(--green-100)", color: "var(--green-800)", borderRadius: "var(--radius-pill)", padding: "5px 11px" }}>Sugar-free</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {heroSpec.facts.map((it) => (
                    <div key={it.n} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--green-600)", lineHeight: 1.3 }}>{it.n}</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-strong)" }}>{it.h}</span>
                        <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{it.p}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#" className="hk-btn-ghost" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "var(--font-body)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", lineHeight: 1, border: "1.5px solid var(--green-700)", borderRadius: "var(--radius-md)", cursor: "pointer", textDecoration: "none", padding: "14px 26px", fontSize: "14px", background: "transparent", color: "var(--green-700)", marginTop: "4px" }}>
                  <i data-lucide="message-circle" style={{ width: 17, height: 17 }}></i> WhatsApp Us
                </a>
              </>
            ) : (
              <>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {plan.tags.map((t) => <Tag key={t} tone="clay" variant="soft">{t}</Tag>)}
                    <Tag tone="green" variant="soft">Dairy-free</Tag>
                    <Tag tone="green" variant="soft">Gluten-free</Tag>
                    <Tag tone="green" variant="soft">Sugar-free</Tag>
                  </div>
                  <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1, fontSize: "clamp(30px, 6vw, 44px)", color: "var(--text-strong)" }}>{plan.name}</h1>
                  <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "var(--text-muted)" }}>{plan.long || plan.blurb}</p>
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["Delivered daily, 7 AM–12 PM", "Customize up to 3 ingredients", "Clean food, chef-made, eco-packaged"].map((i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "center", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-body)" }}>
                      <i data-lucide="check" style={{ width: 17, height: 17, color: "var(--green-600)" }}></i> {i}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* RIGHT — photo */}
          <div style={{ display: "flex", flexDirection: "column", alignSelf: "stretch" }}>
            {plan.slug === "longevity" || plan.slug === "gut-healing" || plan.slug === "muscle-up" || plan.slug === "low-fodmap" || plan.slug === "easy-detox" || plan.slug === "detox-cleanse" || plan.slug === "autoimmune" || plan.slug === "anticandida"
              ? <div style={{ position: "relative", width: "100%", flex: "1 1 auto", minHeight: "520px", borderRadius: "18px", overflow: "hidden" }}>
                  <img src={plan.slug === "longevity" ? "assets/meals/longevity-hero.jpg" : plan.slug === "muscle-up" ? "assets/meals/mu-hero.jpg" : plan.slug === "low-fodmap" ? "assets/meals/lf-hero.jpg" : plan.slug === "easy-detox" ? "assets/meals/ed-hero.jpg" : plan.slug === "detox-cleanse" ? "assets/meals/dc-hero.jpg" : plan.slug === "autoimmune" ? "assets/meals/aip-hero.jpg" : plan.slug === "anticandida" ? "assets/meals/ac-hero.jpg" : "assets/meals/gut-hero.jpg"} alt={plan.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              : <image-slot id={"hk-prod-" + plan.slug} style={{ width: "100%", flex: "1 1 auto", minHeight: "520px", display: "block" }} shape="rounded" radius="18" placeholder={"Drop a photo of " + plan.name}></image-slot>}
          </div>
        </div>
      </div>
    </section>

      {customizeOpen && (
        <IngredientModal selected={excluded} onToggle={toggleIngredient} onClose={() => setCustomizeOpen(false)} />
      )}

      {plan.slug === "muscle-up" ? (
        <>
          <MuscleUpGap />
          <MuscleUpMenu />
          <MuscleUpWhy />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <MuscleUpFAQ />
        </>
      ) : plan.slug === "gut-healing" ? (
        <>
          <GutHealingGamble />
          <GutHealingMenu />
          <GutHealingPhases />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <GutHealingFAQ />
        </>
      ) : plan.slug === "autoimmune" ? (
        <>
          <AutoimmuneGamble />
          <AutoimmuneMenu />
          <AutoimmunePhases />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <AutoimmuneFAQ />
        </>
      ) : plan.slug === "anticandida" ? (
        <>
          <AnticandidaGamble />
          <AnticandidaMenu />
          <AnticandidaPhases />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <AnticandidaFAQ />
        </>
      ) : plan.slug === "easy-detox" ? (
        <>
          <EasyDetoxGamble />
          <EasyDetoxMenu />
          <EasyDetoxPhases />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <EasyDetoxFAQ />
        </>
      ) : plan.slug === "detox-cleanse" ? (
        <>
          <DetoxCleanseGamble />
          <DetoxCleanseMenu />
          <DetoxCleansePhases />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <DetoxCleanseFAQ />
        </>
      ) : plan.slug === "low-fodmap" ? (
        <>
          <LowFodmapGamble />
          <LowFodmapMenu />
          <LowFodmapPhases />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <LowFodmapFAQ />
        </>
      ) : plan.slug === "longevity" ? (
        <>
          <LongevityEvidence />
          <LongevityMenu />
          <LongevityFoods />
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <LongevityFAQ />
        </>
      ) : (
        <>
          <CalculatorBand calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} plan={plan} />
          <Reviews />
          <FAQ />
        </>
      )}

      {/* ---- Sticky bottom bar ---- */}
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 55, background: "var(--green-900)", boxShadow: "0 -6px 24px rgba(0,0,0,0.18)" }}>
        <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "12px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "18px", color: "var(--ivory-50)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{plan.name}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--green-200)", whiteSpace: "nowrap" }}>{meal.label} · {days} days · <strong style={{ color: "var(--ivory-50)" }}>{total} AED</strong></span>
          </div>
          <Button variant="inverse" size="md" iconLeft={<i data-lucide="calculator" style={{ width: 16, height: 16 }}></i>} onClick={() => setDrawerOpen(true)}>
            Build your plan
          </Button>
        </div>
      </div>

      {/* ---- Calculator drawer (opened from sticky bar) ---- */}
      {drawerOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 70 }}>
          <div onClick={() => setDrawerOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(12,25,18,0.45)" }}></div>
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "min(480px, 100%)", background: "var(--bg-page)", boxShadow: "var(--shadow-lg)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", borderBottom: "1px solid var(--border-subtle)" }}>
              <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "18px", color: "var(--text-strong)" }}>{plan.name}</span>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close" style={{ background: "none", border: 0, cursor: "pointer", color: "var(--text-muted)", display: "grid", placeItems: "center", width: 36, height: 36 }}>
                <i data-lucide="x" style={{ width: 20, height: 20 }}></i>
              </button>
            </div>
            <div style={{ overflowY: "auto", padding: "20px 24px 32px" }}>
              <PlanCalculator calc={calc} onOpenCustomize={() => setCustomizeOpen(true)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Calculator section before Q&A / reviews ---------- */
function CalculatorBand({ calc, onOpenCustomize, plan }) {
  return (
    <section style={{ position: "relative", background: "#E6EACE", borderTop: "1px solid var(--green-100)", overflow: "hidden" }}>
      <img
        src="assets/botanical-pattern.png"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, pointerEvents: "none" }}
      />
      <div className="hk-container hk-grid-2" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "64px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>Ready when you are</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "var(--leading-tight)", color: "var(--text-strong)" }}>
            Build your {plan.name}
          </h2>
          <p style={{ margin: 0, maxWidth: "40ch", fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "var(--text-muted)" }}>
            Pick your meals, calories and subscription length — your price updates instantly. Longer plans unlock bigger discounts.
          </p>
        </div>
        <PlanCalculator calc={calc} onOpenCustomize={onOpenCustomize} />
      </div>
    </section>
  );
}

window.ProductDetail = ProductDetail;
window.PlanCalculator = PlanCalculator;
