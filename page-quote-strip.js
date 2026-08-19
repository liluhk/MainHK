function QuoteStrip() {
  return (
    <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", position: "relative", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: "24px", top: "-14px", fontFamily: "var(--font-display)", fontSize: "180px", lineHeight: 1, color: "var(--green-100)", pointerEvents: "none", userSelect: "none" }}>&ldquo;</span>
      <div className="hk-quote-row" style={{ position: "relative", maxWidth: "640px", margin: "0 auto", padding: "28px 32px", display: "flex", alignItems: "flex-start", gap: "28px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
          <p className="hk-quote-text" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "25px", lineHeight: 1.4, color: "var(--text-strong)" }}>
            <span className="hk-quote-line" style={{ display: "block" }}>We built Healthy Kitchen on one belief:</span>
            <span className="hk-quote-line" style={{ display: "block", fontFamily: "var(--font-script)", color: "var(--green-700)" }}>food should heal, not harm.</span>
            <span className="hk-quote-line hk-quote-line-last" style={{ display: "block" }}>Every plate we send out is made the way we'd feed our own family.</span>
          </p>
        </div>
        <div className="hk-quote-author" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px", flexShrink: 0 }}>
          <img
            src="assets/brand/natalia.jpg"
            alt="Natalia Belaiche"
            className="hk-quote-photo"
            style={{ width: "130px", height: "130px", objectFit: "cover", borderRadius: "var(--radius-md)", display: "block" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 700, color: "var(--text-strong)" }}>Natalia Belaiche</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.02em", color: "var(--text-faint)" }}>
              Founder, Functional Nutritionist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.QuoteStrip = QuoteStrip;
