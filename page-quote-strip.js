function QuoteStrip() {
  return (
    <section style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", position: "relative", overflow: "hidden" }}>
      <span aria-hidden="true" style={{ position: "absolute", left: "24px", top: "-14px", fontFamily: "var(--font-display)", fontSize: "180px", lineHeight: 1, color: "var(--green-100)", pointerEvents: "none", userSelect: "none" }}>&ldquo;</span>
      <div style={{ position: "relative", maxWidth: "640px", margin: "0 auto", padding: "28px 32px", display: "flex", alignItems: "flex-start", gap: "28px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "25px", lineHeight: 1.4, color: "var(--text-strong)" }}>
            We built Healthy Kitchen on one belief: <span style={{ fontFamily: "var(--font-script)", color: "var(--green-700)" }}>food should heal, not harm.</span><br />
            Every plate we send out is made the way we'd feed our own family.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px", flexShrink: 0 }}>
          <img
            src="assets/brand/natalia.jpg"
            alt="Natalia Belaiche"
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
