const { Button, SectionHeading, Tag } = window.HealthyKitchenDesignSystem_f4c763;

const HK_WA = "https://wa.me/971585129792";
const bookSession = () => window.open(HK_WA, "_blank");

/* ---------- Hero ---------- */
function ConsultHero() {
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container hk-grid-2 hk-hero-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 32px 64px", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: "56px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
            Consultations
          </span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.02, fontSize: "clamp(36px, 5.5vw, 60px)", color: "var(--text-strong)" }}>
            Expert guidance,<br />
            <span style={{ color: "var(--green-700)" }}>personal to you</span>
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "48ch" }}>
            Discover the nutrition plan that best suits your body with expert guidance from the doctors at our partner clinic. Each consultation gives you comprehensive insight into your dietary needs — so every meal moves you toward optimal health.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="primary" size="lg" onClick={bookSession}>Book a Session</Button>
            <Tag tone="green" variant="soft">Online or in-clinic</Tag>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="assets/brand/consult-hero.jpg" alt="Consultation at the partner clinic" style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "50% 30%", borderRadius: "18px", display: "block" }} />
          <div style={{ position: "absolute", left: "-18px", bottom: "30px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "30px", color: "var(--green-700)", lineHeight: 1 }}>doctors, not guesswork</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>partner clinic · Dubai</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works — interactive steps ---------- */
const HK_CONSULT_STEPS = [
  { n: "01", icon: "route", title: "Choose your format", body: "City life leaves little time for clinic visits — consult online from home, or come meet our doctors in person at the partner clinic. Both paths get you the same depth of guidance." },
  { n: "02", icon: "calendar-check", title: "Book at your convenience", body: "Tap “Book a Session” and you'll land in our WhatsApp chat. Our managers will find a time slot that fits your schedule — usually within a day or two." },
  { n: "03", icon: "clipboard-list", title: "Prepare your questions", body: "Online: have your weight and height ready, plus any nutrition questions on your mind. In person: the doctor takes your measurements at the clinic and addresses every concern on the spot." },
  { n: "04", icon: "stethoscope", title: "Meet with the doctor", body: "Connect through your preferred online platform, or visit the clinic at your scheduled time — and leave with personalized, actionable advice for your health journey." },
];

function ConsultSteps() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [active]);
  return (
    <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <SectionHeading eyebrow="How it works" title="Four simple steps" />
        </div>
        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "56px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {HK_CONSULT_STEPS.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.n}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                  style={{
                    display: "flex", alignItems: "center", gap: "18px", width: "100%", textAlign: "left",
                    padding: "20px 14px", margin: 0, border: 0, borderTop: "1px solid var(--border-subtle)",
                    borderBottom: i === HK_CONSULT_STEPS.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    background: isActive ? "var(--green-50, rgba(46,89,60,0.06))" : "none",
                    cursor: "pointer", font: "inherit", color: "inherit",
                    transition: "background var(--dur-base) var(--ease-out)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: 1, color: isActive ? "var(--green-700)" : "var(--text-faint)", width: "44px", flexShrink: 0, transition: "color var(--dur-base) var(--ease-out)" }}>{s.n}</span>
                  <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "19px", color: "var(--text-strong)", flex: 1 }}>{s.title}</span>
                  <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0, background: isActive ? "var(--green-700)" : "var(--border-subtle)", transition: "background var(--dur-base) var(--ease-out)" }}></span>
                </button>
              );
            })}
          </div>
          <div style={{
            background: "var(--green-700)", color: "var(--ivory-50)", borderRadius: "var(--radius-lg)",
            padding: "40px 38px", minHeight: "280px", display: "flex", flexDirection: "column", gap: "20px",
            position: "relative", overflow: "hidden",
          }}>
            <span aria-hidden="true" style={{ position: "absolute", right: "-14px", bottom: "-34px", fontFamily: "var(--font-script)", fontSize: "140px", lineHeight: 1, color: "rgba(253,252,248,0.06)", pointerEvents: "none", userSelect: "none" }}>{HK_CONSULT_STEPS[active].n}</span>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", display: "grid", placeItems: "center", border: "1.5px solid rgba(253,252,248,0.35)", background: "rgba(253,252,248,0.08)" }}>
              <i data-lucide={HK_CONSULT_STEPS[active].icon} style={{ width: 24, height: 24, color: "var(--green-200)" }}></i>
            </div>
            <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "26px", color: "var(--ivory-50)" }}>{HK_CONSULT_STEPS[active].title}</h3>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.65, color: "var(--green-100)", maxWidth: "52ch", position: "relative" }}>{HK_CONSULT_STEPS[active].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Formats & pricing ---------- */
const HK_CONSULT_FORMATS = [
  {
    slot: "hk-consult-f2f", photo: "assets/brand/consult-f2f-new.jpg", badge: "In person", title: "Face-to-Face Consultation", price: 495,
    body: "A personalized in-person session with our expert dietitians. A comprehensive evaluation of your dietary needs — lifestyle, medical history, preferences — with tailored advice on portion sizes, macronutrient distribution, food choices, and meal planning. Perfect if you value direct, hands-on interaction.",
    perks: ["Full evaluation at the clinic", "Measurements taken for you", "Tailored meal-planning strategy"],
  },
  {
    slot: "hk-consult-online", photo: "assets/brand/consult-online.jpg", badge: "From home", title: "Online Consultation", price: 495,
    body: "The same expert nutritional guidance, from the comfort of your home. Our dietitians assess your dietary habits, medical background, and health goals to build a customized meal plan — comprehensive, actionable advice that fits even the busiest schedule.",
    perks: ["Any platform you prefer", "Flexible time slots", "Customized meal plan"],
  },
];

function ConsultFormats() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <SectionHeading eyebrow="Choose your format" title="Two ways to meet" />
        </div>
        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "stretch" }}>
          {HK_CONSULT_FORMATS.map((f) => (
            <div key={f.slot} className="hk-consult-card" style={{
              background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
              overflow: "hidden", display: "flex", flexDirection: "column",
              transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ position: "relative" }}>
                {f.photo
                  ? <img src={f.photo} alt={f.title} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }} />
                  : <image-slot id={f.slot} style={{ width: "100%", height: "auto", aspectRatio: "16 / 9", display: "block", borderRadius: "0" }} shape="rect" placeholder={"Drop a photo — " + f.title}></image-slot>}
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
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 1, color: "var(--green-700)" }}>{f.price}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>AED / session</span>
                  </span>
                  <Button variant="primary" size="md" onClick={bookSession}>Book a Session</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ + CTA ---------- */
const HK_CONSULT_FAQ = [
  { q: "What can I expect during an individual consultation?", a: "Our expert dietitian conducts a thorough analysis of your lifestyle, medical history, and dietary preferences. You'll leave with a personalized meal plan designed around your health goals." },
  { q: "How are meal plans customized to my health needs?", a: "The dietitian tailors your plan based on the consultation, ensuring it fits your unique dietary requirements, health objectives, and any specific challenges you face." },
  { q: "How is the online consultation different from face-to-face?", a: "The face-to-face session offers an in-depth, hands-on evaluation at the clinic, while the online consultation delivers the same expert advice on diet, portions, and meal planning — from wherever you are." },
  { q: "How do follow-up consultations work?", a: "Follow-ups monitor your progress, adjust your meal plan as needed, and make sure you're continually moving toward your health goals." },
  { q: "Can the dietitian address specific restrictions or conditions?", a: "Yes — our dietitians create meal plans that cater to specific dietary restrictions and medical conditions, so your meals always support your overall health." },
  { q: "What ongoing support is available afterwards?", a: "Regular check-ins with your dietitian, meal-plan adjustments as necessary, and continuous guidance to help you maintain a healthy lifestyle." },
];

function ConsultFAQ() {
  return <FAQ items={HK_CONSULT_FAQ} eyebrow="Consultation FAQs" titleTop="Questions" titleBottom="& Answers" />;
}

function ConsultCta() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--green-700)", color: "var(--ivory-50)" }}>
      <span aria-hidden="true" className="hk-watermark" style={{ position: "absolute", left: "-24px", bottom: "-40px", fontFamily: "var(--font-script)", fontSize: "200px", lineHeight: 1, color: "rgba(253,252,248,0.05)", pointerEvents: "none", userSelect: "none" }}>listen</span>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "88px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center", position: "relative" }}>
        <span style={{ fontFamily: "var(--font-script)", fontSize: "clamp(28px, 4vw, 40px)", color: "var(--green-200)", lineHeight: 1 }}>your body is talking</span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "clamp(30px, 5vw, 48px)", lineHeight: "var(--leading-tight)", color: "var(--ivory-50)", maxWidth: "22ch" }}>
          Let a doctor help you understand it
        </h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="inverse" size="lg" onClick={bookSession}>Book a Session</Button>
          <Button variant="ghost" size="lg" style={{ borderColor: "rgba(253,252,248,0.5)", color: "var(--ivory-50)" }} iconLeft={<i data-lucide="message-circle" style={{ width: 17, height: 17 }}></i>} onClick={bookSession}>WhatsApp Us</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function Consultations() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <>
      <ConsultHero />
      <ConsultSteps />
      <ConsultFormats />
      <ConsultFAQ />
      <ConsultCta />
    </>
  );
}

window.Consultations = Consultations;
