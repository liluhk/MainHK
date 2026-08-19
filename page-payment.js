const { Button } = window.HealthyKitchenDesignSystem_f4c763;

const fmt = (n) => Number(n).toLocaleString("en-US");

/**
 * Healthy Kitchen — Payment
 * Card entry itself happens on the payment provider's own hosted page (out of
 * scope for this design system) — this screen represents the hand-off to that
 * provider, plus the two outcomes it can redirect back with: success and failure.
 * On failure, nothing is charged and the cart is preserved so the customer can retry.
 */
function Payment({ total = 0, currency = "AED", onBack, onDone, onSuccess }) {
  const [outcome, setOutcome] = React.useState(null); // null | "success" | "failure"
  const [processing, setProcessing] = React.useState(false);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const resolve = (result) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOutcome(result);
      if (result === "success") onSuccess && onSuccess();
    }, 700);
  };

  if (outcome === "success") {
    return (
      <section style={{ background: "var(--bg-page)", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "440px", textAlign: "center", display: "flex", flexDirection: "column", gap: "18px", alignItems: "center", padding: "60px 24px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "var(--radius-circle)", background: "var(--green-100)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i data-lucide="check" style={{ width: 30, height: 30, color: "var(--green-700)" }}></i>
          </div>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(24px, 5vw, 32px)", color: "var(--text-strong)" }}>Payment Successful</h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-muted)" }}>
            Your payment of {fmt(total)} {currency} went through. We've sent your order and delivery details to our team — get ready for your first delivery.
          </p>
          <Button variant="primary" onClick={onDone}>Back to Home</Button>
        </div>
      </section>
    );
  }

  if (outcome === "failure") {
    return (
      <section style={{ background: "var(--bg-page)", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "440px", textAlign: "center", display: "flex", flexDirection: "column", gap: "18px", alignItems: "center", padding: "60px 24px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "var(--radius-circle)", background: "var(--clay-100)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i data-lucide="x" style={{ width: 30, height: 30, color: "var(--clay-600)" }}></i>
          </div>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(24px, 5vw, 32px)", color: "var(--text-strong)" }}>Payment Failed</h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-muted)" }}>
            Your payment couldn't be processed. Nothing was charged, and your cart has been saved — please try again.
          </p>
          <Button variant="primary" onClick={onBack}>Back to Checkout</Button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "var(--bg-page)", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>
      <div style={{ width: "100%", maxWidth: "460px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "32px", display: "flex", flexDirection: "column", gap: "22px", alignItems: "center", textAlign: "center" }}>
        <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-circle)", background: "var(--green-50)", border: "1px solid var(--green-200)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i data-lucide="shield-check" style={{ width: 20, height: 20, color: "var(--green-700)" }}></i>
        </div>
        <div>
          <h1 style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "26px", color: "var(--text-strong)" }}>Continue to Payment</h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "var(--text-muted)" }}>
            Card details are collected securely on our payment provider's hosted page.
          </p>
        </div>

        <div style={{ width: "100%", display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "16px 18px", background: "var(--bg-subtle)", borderRadius: "var(--radius-md)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)" }}>Amount due</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--text-brand)" }}>
            {fmt(total)} <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>{currency}</span>
          </span>
        </div>

        <Button variant="primary" size="lg" fullWidth disabled={processing} onClick={() => resolve("success")}>
          {processing ? "Redirecting…" : "Continue to Payment Provider"}
        </Button>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px", paddingTop: "6px", borderTop: "1px dashed var(--border-subtle)" }}>
          <p style={{ margin: "10px 0 0", fontFamily: "var(--font-body)", fontSize: "11.5px", color: "var(--text-faint)" }}>
            Prototype preview — the provider's hosted page isn't built here. Simulate its response:
          </p>
          <div className="hk-payment-sim-row" style={{ display: "flex", gap: "8px" }}>
            <Button type="button" variant="secondary" size="sm" fullWidth disabled={processing} onClick={() => resolve("success")}>Simulate success</Button>
            <Button type="button" variant="ghost" size="sm" fullWidth disabled={processing} onClick={() => resolve("failure")} style={{ borderColor: "var(--clay-600)", color: "var(--clay-600)" }}>Simulate failure</Button>
          </div>
        </div>

        <button type="button" onClick={onBack} style={{ background: "none", border: 0, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)" }}>
          Back to delivery details
        </button>
      </div>
    </section>
  );
}

window.Payment = Payment;
