const { Button, SectionHeading, Tag } = window.HealthyKitchenDesignSystem_f4c763;

const HK_IT_WA = "https://wa.me/971585129792";
const itBook = () => window.open(HK_IT_WA, "_blank");

/* ---------- Hero ---------- */
function ItHero() {
  const stats = [
    { v: "283", l: "ingredients tested" },
    { v: "5 min", l: "test at the clinic" },
    { v: "2 days", l: "results by email" },
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container hk-grid-2 hk-hero-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 32px 64px", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "56px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
            Intolerance Testing
          </span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.02, fontSize: "clamp(36px, 5.5vw, 60px)", color: "var(--text-strong)" }}>
            Find what your<br />
            <span style={{ color: "var(--green-700)" }}>body rejects</span>
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "50ch" }}>
            Unlike allergies, intolerances cause chronic symptoms — digestive issues, headaches, fatigue, skin problems. Our test identifies the foods and substances your body doesn't tolerate well, so you can make informed dietary choices and feel the difference.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="primary" size="lg" onClick={itBook}>Book a Session</Button>
          </div>
          <div style={{ display: "flex", gap: "0", marginTop: "6px", borderTop: "1px solid var(--border-subtle)" }}>
            {stats.map((s, i) => (
              <div key={s.l} style={{ flex: 1, padding: "18px 18px 0 " + (i === 0 ? "0" : "18px"), borderLeft: i === 0 ? "none" : "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "30px", lineHeight: 1, color: "var(--green-700)" }}>{s.v}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="assets/it-hero.jpg" alt="Blood sample being taken at the clinic" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "18px", display: "block" }} />
          <div style={{ position: "absolute", left: "-18px", bottom: "30px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "30px", color: "var(--green-700)", lineHeight: 1 }}>know, don't guess</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>partner clinic · Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works — timeline ---------- */
const HK_IT_STEPS = [
  { n: "01", icon: "list-checks", title: "Choose your option", body: "With consultation — our experts guide you through dietary adjustments and lifestyle changes. Without — you get the results and manage your diet independently." },
  { n: "02", icon: "calendar-check", title: "Make an appointment", body: "Tap “Book a Session” to reach us on WhatsApp. Our managers will schedule a convenient time for your test." },
  { n: "03", icon: "test-tube", title: "Do the test", body: "The test takes just 5 minutes at our clinic. Samples are analyzed and results are emailed to you within 2 working days." },
  { n: "04", icon: "file-check", title: "Check the results", body: "You'll see clearly which foods to avoid. Chose the consultation option? Schedule a follow-up with our doctor for personalized advice." },
];

function ItSteps() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "52px" }}>
          <SectionHeading eyebrow="How it works" title="From booking to answers" />
        </div>
        <div className="hk-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "22px" }}>
          {HK_IT_STEPS.map((s) => (
            <div key={s.n} style={{
              background: "var(--bg-page)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
              padding: "26px 24px", display: "flex", flexDirection: "column", gap: "14px",
              transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 1, color: "transparent", WebkitTextStroke: "1.1px var(--green-700)" }}>{s.n}</span>
                <span style={{ width: "44px", height: "44px", borderRadius: "50%", display: "grid", placeItems: "center", border: "1.5px solid var(--green-300)", background: "var(--green-50, rgba(46,89,60,0.06))" }}>
                  <i data-lucide={s.icon} style={{ width: 20, height: 20, color: "var(--green-700)" }}></i>
                </span>
              </div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "19px", color: "var(--text-strong)" }}>{s.title}</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.6, color: "var(--text-muted)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Packages ---------- */
const HK_IT_PACKAGES = [
  {
    slot: "hk-it-test", photo: "assets/it-combo.jpg", badge: "Results only", title: "Intolerance Test", price: 2000,
    body: "Quickly identify foods and substances your body may not tolerate well. A simple 5-minute test at our clinic — results emailed within 2 working days with essential information about which foods to avoid.",
    perks: ["283 ingredients screened", "5-minute clinic visit", "Results in 2 working days"],
  },
  {
    slot: "hk-it-combo", photo: "assets/it-test.jpg", badge: "Most complete", title: "Test + Consultation", price: 2495,
    body: "Combine the test with a comprehensive consultation. After receiving your results, meet our expert dietitians to discuss them in detail — personalized advice and a tailored meal plan to manage your intolerances and reach your health goals.",
    perks: ["Everything in the test", "Follow-up with a dietitian", "Tailored meal plan included"],
  },
];

function ItPackages() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <SectionHeading eyebrow="Pricing" title="Two ways to test" />
        </div>
        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "stretch" }}>
          {HK_IT_PACKAGES.map((f) => (
            <div key={f.slot} style={{
              background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
              overflow: "hidden", display: "flex", flexDirection: "column",
              transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ position: "relative" }}>
                {f.photo ? <img src={f.photo} alt={f.title} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }} /> : <image-slot id={f.slot} style={{ width: "100%", height: "auto", aspectRatio: "16 / 9", display: "block", borderRadius: "0" }} shape="rect" placeholder={"Drop a photo — " + f.title}></image-slot>}
                <span style={{ position: "absolute", top: "16px", left: "16px" }}><Tag tone="green" variant="solid">{f.badge}</Tag></span>
              </div>
              <div style={{ padding: "30px 28px 32px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "24px", color: "var(--text-strong)" }}>{f.title}</h3>
                <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.62, color: "var(--text-muted)" }}>{f.body}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {f.perks.map((p) => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-body)" }}>
                      <i data-lucide="check" style={{ width: 16, height: 16, color: "var(--green-700)", flexShrink: 0 }}></i>{p}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 1, color: "var(--green-700)" }}>{f.price.toLocaleString("en-US")}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>AED</span>
                  </span>
                  <Button variant="primary" size="md" onClick={itBook}>Book a Session</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Ingredient explorer — interactive ---------- */
function ItIngredients() {
  const cats = window.HK_INTOLERANCE_CATS || [];
  const total = cats.reduce((s, c) => s + c.items.length, 0);
  const [activeKey, setActiveKey] = React.useState(cats.length ? cats[0].key : "");
  const [query, setQuery] = React.useState("");

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [activeKey, query]);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const results = searching
    ? cats.map((c) => ({ ...c, items: c.items.filter((it) => it.toLowerCase().includes(q)) })).filter((c) => c.items.length)
    : cats.filter((c) => c.key === activeKey);
  const found = results.reduce((s, c) => s + c.items.length, 0);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", right: "-26px", top: "0px", fontFamily: "var(--font-script)", fontSize: "200px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>283</span>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>What we test</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(30px, 4.5vw, 46px)", lineHeight: 1.06, color: "var(--ivory-50)" }}>
              All {total} ingredients,<br />
              <span style={{ color: "var(--green-300)" }}>one simple test</span>
            </h2>
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(253,252,248,0.08)", border: "1px solid rgba(253,252,248,0.25)", borderRadius: "var(--radius-pill)", padding: "12px 18px", minWidth: "min(320px, 100%)" }}>
            <i data-lucide="search" style={{ width: 17, height: 17, color: "var(--green-200)", flexShrink: 0 }}></i>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search an ingredient…"
              style={{ background: "none", border: 0, outline: "none", color: "var(--ivory-50)", fontFamily: "var(--font-body)", fontSize: "15px", width: "100%" }}
            />
            {searching && (
              <button onClick={() => setQuery("")} aria-label="Clear search" style={{ background: "none", border: 0, cursor: "pointer", color: "var(--green-200)", display: "grid", placeItems: "center", padding: 0 }}>
                <i data-lucide="x" style={{ width: 15, height: 15 }}></i>
              </button>
            )}
          </label>
        </div>

        {!searching && (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "34px" }}>
            {cats.map((c) => {
              const isActive = c.key === activeKey;
              return (
                <button key={c.key} onClick={() => setActiveKey(c.key)} style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "9px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
                  fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em",
                  background: isActive ? "var(--ivory-50)" : "rgba(253,252,248,0.06)",
                  color: isActive ? "var(--green-800)" : "var(--green-100)",
                  border: `1px solid ${isActive ? "var(--ivory-50)" : "rgba(253,252,248,0.25)"}`,
                  transition: "all var(--dur-base) var(--ease-out)",
                }}>
                  {c.label}
                  <span style={{ fontSize: "11px", opacity: 0.65 }}>{c.items.length}</span>
                </button>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {results.map((c) => (
            <div key={c.key} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {searching && (
                <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>{c.label} · {c.items.length}</span>
              )}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {c.items.map((it) => (
                  <span key={it} style={{
                    padding: "8px 14px", borderRadius: "var(--radius-pill)",
                    background: "rgba(253,252,248,0.08)", border: "1px solid rgba(253,252,248,0.16)",
                    fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--ivory-50)",
                  }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
          {searching && found === 0 && (
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--green-100)" }}>
              Nothing matching “{query}” — try a shorter word, or ask us on WhatsApp.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ + CTA ---------- */
const HK_IT_FAQ = [
  { q: "What is the process for undergoing intolerance testing?", a: "The test takes 5 minutes at our partner clinic. Afterward, results are emailed within 2 working days, detailing which foods and substances to avoid." },
  { q: "What options do I have for receiving my results?", a: "You can receive your results with or without a follow-up consultation. The consultation adds personalized advice on managing your intolerances." },
  { q: "How does the consultation enhance the test?", a: "It helps interpret your results and provides tailored advice on diet, portion sizes, and recommendations on food groups." },
  { q: "What types of intolerances can the test identify?", a: "A wide range — dairy, meats, seafood, cereals, nuts, fruits, vegetables, spices, and more. 283 ingredients in total." },
  { q: "How quickly can I book and complete the test?", a: "Book a session via WhatsApp; the testing itself takes just 5 minutes at our partner clinic." },
  { q: "What does the test cost, and what's included?", a: "The test is 2000 AED. With the consultation option it's 2495 AED, including personalized dietary guidance." },
];

function ItCta() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section style={{ background: "#E6EACE", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-script)", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--green-700)", lineHeight: 1 }}>five minutes</span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(30px, 5vw, 48px)", lineHeight: "var(--leading-tight)", color: "var(--text-strong)", maxWidth: "34ch" }}>
          For answers<br />your body has been asking for
        </h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={itBook}>Book a Session</Button>
          <Button variant="ghost" size="lg" iconLeft={<i data-lucide="message-circle" style={{ width: 17, height: 17 }}></i>} onClick={itBook}>WhatsApp Us</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function IntoleranceTesting() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <>
      <ItHero />
      <ItSteps />
      <ItPackages />
      <ItIngredients />
      <FAQ items={HK_IT_FAQ} eyebrow="Intolerance testing FAQs" titleTop="Questions" titleBottom="& Answers" />
      <ItCta />
    </>
  );
}

window.IntoleranceTesting = IntoleranceTesting;
