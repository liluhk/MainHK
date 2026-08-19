const { Button, Input } = window.HealthyKitchenDesignSystem_f4c763;

function Promo() {
  const [done, setDone] = React.useState(false);
  return (
    <section style={{ position: "relative", background: "#E6EACE", borderTop: "1px solid var(--green-100)", borderBottom: "1px solid var(--green-100)", overflow: "hidden" }}>
      <img
        src="assets/botanical-pattern.png"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, pointerEvents: "none" }}
      />
      <div className="hk-container" style={{ position: "relative", maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "64px 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "clamp(28px, 5vw, 38px)", color: "var(--green-800)" }}>
          Get 10% off your first order
        </h2>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--text-muted)" }}>
          Join the list — we'll send your code and a few clean-eating tips.
        </p>
        {done ? (
          <p style={{ fontFamily: "var(--font-body)", color: "var(--green-700)", fontWeight: 500 }}>Thanks! Check your inbox for your code.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="hk-promo-form" style={{ display: "flex", gap: "10px", width: "100%", maxWidth: "440px" }}>
            <Input type="email" placeholder="you@email.com" required style={{ height: "48px" }} />
            <Button variant="primary" type="submit">Get Code</Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer({ onNav }) {
  const cols = [
    { head: "Explore", items: ["Meal Plans", "Consultations", "Intolerance Testing", "Blog"] },
    { head: "Company", items: ["About Us", "Contact Us", "FAQs"] },
  ];
  return (
    <footer style={{ position: "relative", background: "var(--green-900)", color: "var(--green-100)", overflow: "hidden" }}>
      <img
        src="assets/botanical-pattern.png"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.02, pointerEvents: "none" }}
      />
      <div className="hk-container hk-grid-4 hk-footer-grid" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "40px" }}>
        <div className="hk-footer-brand">
          <img
            src={window.HK_LOGO_SRC || ((window.HK_ASSET_BASE || "") + "assets/brand/healthy-kitchen-logo.png")}
            alt="Healthy Kitchen — Healing food delivery"
            className="hk-footer-logo"
            style={{ height: "82px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
          />
          <p style={{ marginTop: "20px", fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "var(--green-200)", maxWidth: "30ch" }}>
            Chef-made, gut-friendly meal plans delivered daily across Dubai, 7 AM–12 PM.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.head} className="hk-footer-col">
            <h4 style={{ margin: "0 0 16px", fontFamily: "var(--font-body)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>{c.head}</h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {c.items.map((i) => (
                <li key={i}><button onClick={() => onNav && onNav(i)} style={{ background: "none", border: 0, padding: 0, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--green-100)" }}>{i}</button></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="hk-footer-col">
          <h4 style={{ margin: "0 0 16px", fontFamily: "var(--font-body)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--green-300)" }}>Get in touch</h4>
          <p style={{ margin: "0 0 14px", fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--ivory-50)" }}>+971 58 512 97 92</p>
          <div style={{ display: "flex", gap: "12px" }}>
            {["instagram", "message-circle", "phone"].map((ic) => (
              <span key={ic} style={{ width: 38, height: 38, borderRadius: "var(--radius-circle)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-100)" }}>
                <i data-lucide={ic} style={{ width: 16, height: 16 }}></i>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="hk-container hk-footer-bottom" style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--green-300)" }}>
          <span>© 2024 Healthy Kitchen Delivery</span>
          <span style={{ display: "flex", gap: "20px" }}><button onClick={() => onNav && onNav("Privacy Policy")} style={{ background: "none", border: 0, padding: 0, cursor: "pointer", font: "inherit", color: "inherit" }}>Privacy Policy</button><button onClick={() => onNav && onNav("Terms & Conditions")} style={{ background: "none", border: 0, padding: 0, cursor: "pointer", font: "inherit", color: "inherit" }}>Terms &amp; Conditions</button></span>
        </div>
      </div>
    </footer>
  );
}

window.Promo = Promo;
window.Footer = Footer;
