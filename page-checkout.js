const { Button, Input } = window.HealthyKitchenDesignSystem_f4c763;

const fmt = (n) => Number(n).toLocaleString("en-US");

const TIME_SLOTS = [
  { id: "6-8", label: "6–8 AM" },
  { id: "7-9", label: "7–9 AM" },
  { id: "8-10", label: "8–10 AM" },
  { id: "9-11", label: "9–11 AM" },
  { id: "10-12", label: "10–12 PM" },
];

// First-order promo — only applied when the customer enters this code.
const PROMO_CODES = { WELCOME10: 0.10 };

const TILE_HEIGHT = "52px";

/**
 * Healthy Kitchen — Checkout
 * Address & delivery-details step between the cart and placing the order.
 * Left: contact + delivery form (date & 2-hour time slots as uniform tiles).
 * Right: sticky order summary with an optional promo-code discount.
 */
function Checkout({ items = [], currency = "AED", depositAmount = 180, depositLabel = "Refundable bag deposit", onBack, onContinue }) {
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", address: "", area: "", date: "", timeSlot: "", notes: "", whatsapp: "" });
  const [errors, setErrors] = React.useState({});
  const [showWhatsapp, setShowWhatsapp] = React.useState(false);
  const [promoCode, setPromoCode] = React.useState("");
  const [appliedPromo, setAppliedPromo] = React.useState(null);
  const [promoError, setPromoError] = React.useState("");

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const discountAmount = appliedPromo ? Math.round(subtotal * appliedPromo.pct) : 0;
  const total = Math.max(0, subtotal - discountAmount) + Number(depositAmount || 0);

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (!code) { setPromoError("Enter a code"); return; }
    const pct = PROMO_CODES[code];
    if (!pct) { setPromoError("Invalid promo code"); setAppliedPromo(null); return; }
    setAppliedPromo({ code, pct });
    setPromoError("");
  };
  const removePromo = () => { setAppliedPromo(null); setPromoCode(""); setPromoError(""); };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your full name";
    if (!form.phone.trim()) e.phone = "Enter a phone number";
    if (!form.email.trim()) e.email = "Enter your email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address";
    if (!form.address.trim()) e.address = "Enter your delivery address";
    if (!form.date) e.date = "Pick a start date";
    if (!form.timeSlot) e.timeSlot = "Choose a delivery time";
    if (showWhatsapp && !form.whatsapp.trim()) e.whatsapp = "Enter your WhatsApp number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const slot = TIME_SLOTS.find((t) => t.id === form.timeSlot);
    const summary = {
      subtotal,
      discountAmount,
      discountLabel: appliedPromo ? `Promo ${appliedPromo.code} (\u2212${Math.round(appliedPromo.pct * 100)}%)` : null,
      depositAmount: Number(depositAmount || 0),
      depositLabel,
      total,
    };
    onContinue && onContinue({ ...form, timeSlotLabel: slot ? slot.label : "" }, summary);
  };

  const labelStyle = { margin: "0 0 14px", fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" };
  const stepNo = (n) => (
    <span style={{ width: 20, height: 20, borderRadius: "var(--radius-circle)", background: "var(--green-100)", color: "var(--green-800)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flex: "none" }}>{n}</span>
  );
  const fieldLabel = { fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", display: "block", marginBottom: "7px" };
  const fieldError = { display: "block", marginTop: "7px", fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--error)" };
  const dateTileStyle = {
    height: TILE_HEIGHT, width: "100%", boxSizing: "border-box", padding: "0 16px",
    fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-strong)",
    background: "var(--white)", border: `1.5px solid ${errors.date ? "var(--error)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)", outline: "none",
  };

  if (items.length === 0) {
    return (
      <section style={{ background: "var(--bg-page)", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-muted)" }}>Your cart is empty.</p>
          <Button variant="primary" onClick={onBack}>Back to Meal Plans</Button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "40px 32px 96px" }}>
        <button onClick={onBack} style={{ background: "none", border: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", marginBottom: "28px" }}>
          <i data-lucide="arrow-left" style={{ width: 16, height: 16 }}></i> Back
        </button>

        <h1 style={{ margin: "0 0 32px", fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", fontSize: "clamp(28px, 6vw, 40px)", color: "var(--text-strong)" }}>
          Checkout
        </h1>

        <div className="hk-grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "56px", alignItems: "start" }}>
          {/* LEFT — delivery form */}
          <form id="checkout-form" onSubmit={submit} style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "28px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <p style={labelStyle}>{stepNo(1)} Contact details</p>
              <div className="hk-grid-2-tight" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <Input label="Full name" placeholder="Alexandra Doe" value={form.name} onChange={set("name")} error={errors.name} />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Input label="Phone number" type="tel" placeholder="+971 5X XXX XXXX" value={form.phone} onChange={set("phone")} error={errors.phone} />
                  {!showWhatsapp ? (
                    <Button type="button" variant="link" size="sm" onClick={() => setShowWhatsapp(true)} style={{ alignSelf: "flex-start" }}>
                      WhatsApp number is different
                    </Button>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <Input label="WhatsApp number" type="tel" placeholder="+971 5X XXX XXXX" value={form.whatsapp} onChange={set("whatsapp")} error={errors.whatsapp} />
                      <Button type="button" variant="link" size="sm" onClick={() => { setShowWhatsapp(false); setForm((f) => ({ ...f, whatsapp: "" })); }} style={{ alignSelf: "flex-start" }}>
                        Same as phone number
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ marginTop: "14px" }}>
                <Input label="Email address" type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} error={errors.email} />
              </div>
            </div>

            <div>
              <p style={labelStyle}>{stepNo(2)} Delivery address</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <Input as="textarea" label="Address" placeholder="Building, street, apartment / villa number" value={form.address} onChange={set("address")} error={errors.address} />
                <Input label="Area / Community" placeholder="e.g. Business Bay" value={form.area} onChange={set("area")} hint="Delivery available across Dubai only" />
              </div>
            </div>

            <div>
              <p style={labelStyle}>{stepNo(3)} Delivery schedule</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <span style={fieldLabel}>Start date</span>
                  <input type="date" value={form.date} onChange={set("date")} style={dateTileStyle} />
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>
                    Orders placed before 12 PM are delivered the next day; after 12 PM, delivery takes one extra day.
                  </span>
                  {errors.date && <span style={fieldError}>{errors.date}</span>}
                </div>

                <div>
                  <span style={fieldLabel}>Delivery time</span>
                  <div className="hk-timeslot-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
                    {TIME_SLOTS.map((t) => {
                      const active = form.timeSlot === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, timeSlot: t.id }))}
                          style={{
                            height: TILE_HEIGHT, boxSizing: "border-box", padding: "0 4px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            borderRadius: "var(--radius-md)", textAlign: "center", cursor: "pointer",
                            background: active ? "var(--green-700)" : "var(--white)",
                            color: active ? "var(--ivory-50)" : "var(--text-body)",
                            border: "1.5px solid " + (active ? "var(--green-700)" : (errors.timeSlot ? "var(--error)" : "var(--border-default)")),
                            fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, lineHeight: 1.15,
                            transition: "all var(--dur-base) var(--ease-out)",
                          }}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeSlot && <span style={fieldError}>{errors.timeSlot}</span>}
                </div>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Input as="textarea" label="Delivery notes (optional)" placeholder="Gate code, preferred contact method, allergies…" value={form.notes} onChange={set("notes")} />
              </div>
            </div>
          </form>

          {/* RIGHT — order summary */}
          <div className="hk-sticky" style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "20px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "26px" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "20px", color: "var(--text-strong)" }}>
              Order Summary
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {items.map((it) => (
                <div key={it.id} style={{ display: "flex", justifyContent: "space-between", gap: "10px", paddingBottom: "14px", borderBottom: "1px solid var(--border-subtle)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontSize: "15px", color: "var(--text-strong)" }}>{it.title}</span>
                    {it.meta && <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>{it.meta}</span>}
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-muted)" }}>{it.qty} days · {fmt(it.price)} {currency}/day</span>
                    {it.excluded && it.excluded.length > 0 && (
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-faint)" }}>Excluding: {it.excluded.join(", ")}</span>
                    )}
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "14px", color: "var(--text-strong)", whiteSpace: "nowrap" }}>
                    {fmt(it.price * it.qty)} {currency}
                  </span>
                </div>
              ))}
            </div>

            {/* Promo code — discount only applies if a valid code is entered */}
            {appliedPromo ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", background: "var(--green-50)", border: "1px solid var(--green-200)", borderRadius: "var(--radius-md)", padding: "11px 14px" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--green-800)" }}>
                  Promo <strong>{appliedPromo.code}</strong> applied · {Math.round(appliedPromo.pct * 100)}% off
                </span>
                <button type="button" onClick={removePromo} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-faint)", fontSize: "12px", fontFamily: "var(--font-body)", textDecoration: "underline" }}>Remove</button>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <Input placeholder="Promo code" value={promoCode} onChange={(e) => { setPromoCode(e.target.value); if (promoError) setPromoError(""); }} style={{ height: "44px" }} />
                  <Button type="button" variant="secondary" onClick={applyPromo} style={{ flex: "0 0 auto", alignSelf: "flex-start", height: "44px" }}>Apply</Button>
                </div>
                {promoError && <span style={{ ...fieldError, marginTop: "6px" }}>{promoError}</span>}
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "13.5px", color: "var(--text-muted)" }}>
                <span>Subtotal</span><span>{fmt(subtotal)} {currency}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "13.5px", color: "var(--text-brand)" }}>
                  <span>Promo {appliedPromo.code} (−{Math.round(appliedPromo.pct * 100)}%)</span><span>− {fmt(discountAmount)} {currency}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "13.5px", color: "var(--text-muted)" }}>
                <span>Delivery</span><span>Free</span>
              </div>
              {Number(depositAmount) > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "13.5px", color: "var(--text-muted)" }}>
                  <span>{depositLabel}</span><span>{fmt(depositAmount)} {currency}</span>
                </div>
              )}
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: "6px", paddingTop: "14px", borderTop: "1px solid var(--border-default)" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-body)" }}>Total</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--text-brand)" }}>
                  {fmt(total)} <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, color: "var(--text-faint)" }}>{currency}</span>
                </span>
              </div>
            </div>

            <Button type="submit" form="checkout-form" variant="primary" size="lg" fullWidth>Place Order</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Checkout = Checkout;
