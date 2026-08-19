const { Button } = window.HealthyKitchenDesignSystem_f4c763;

function Logo({ tone = "dark", height = 58, onClick }) {
  const src = window.HK_LOGO_SRC || ((window.HK_ASSET_BASE || "") + "assets/brand/healthy-kitchen-logo.png");
  return (
    <button onClick={onClick} aria-label="Healthy Kitchen — home" style={{ background: "none", border: 0, cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center" }}>
      <img
        src={src}
        alt="Healthy Kitchen — Healing food delivery"
        style={{ height: height + "px", width: "auto", display: "block", filter: tone === "light" ? "brightness(0) invert(1)" : "none" }}
      />
    </button>
  );
}

function Header({ cartCount = 0, onNav, onHome, onCart, onSelectPlan }) {
  const links = ["Meal Plans", "Consultations", "Intolerance Testing", "Blog", "About Us"];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [plansOpen, setPlansOpen] = React.useState(false);
  const [mPlansOpen, setMPlansOpen] = React.useState(false);
  const plans = window.HK_PLANS || [];

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [menuOpen, plansOpen, mPlansOpen]);

  const nav = (l) => { setMenuOpen(false); onNav && onNav(l); };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(253,252,248,0.88)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
        <div className="hk-logo"><Logo onClick={onHome} /></div>
        <nav className="hk-nav-desktop" style={{ display: "flex", gap: "28px", flexShrink: 0 }}>
          {links.map((l) => (
            l === "Meal Plans" ? (
              <div
                key={l}
                style={{ position: "relative" }}
                onMouseEnter={() => setPlansOpen(true)}
                onMouseLeave={() => setPlansOpen(false)}
              >
                <button onClick={() => onNav && onNav(l)} style={{
                  background: "none", border: 0, cursor: "pointer",
                  fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500,
                  textTransform: "uppercase", letterSpacing: "var(--tracking-wide)",
                  color: plansOpen ? "var(--green-700)" : "var(--text-body)",
                  transition: "color var(--dur-base) var(--ease-out)",
                  display: "inline-flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap",
                }}>
                  {l}
                  <i data-lucide="chevron-down" style={{ width: 13, height: 13, transform: plansOpen ? "rotate(180deg)" : "none", transition: "transform var(--dur-base) var(--ease-out)" }}></i>
                </button>
                <div style={{
                  position: "absolute", top: "100%", left: "50%", paddingTop: "14px",
                  transform: plansOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(6px)",
                  opacity: plansOpen ? 1 : 0, pointerEvents: plansOpen ? "auto" : "none",
                  transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
                }}>
                <div style={{
                  background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)",
                  padding: "10px", minWidth: "180px", width: "auto", display: "flex", flexDirection: "column", gap: "2px", zIndex: 60,
                }}>
                  {plans.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => { setPlansOpen(false); onSelectPlan ? onSelectPlan(p) : onNav && onNav(l); }}
                      style={{
                        background: "none", border: 0, cursor: "pointer", textAlign: "left",
                        display: "block", whiteSpace: "nowrap",
                        padding: "10px 12px", borderRadius: "var(--radius-md)",
                        fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-body)",
                        transition: "background var(--dur-base) var(--ease-out)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--green-50)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                    >
                      <span>{p.name}</span>
                    </button>
                  ))}
                </div>
                </div>
              </div>
            ) : (
              <button key={l} onClick={() => onNav && onNav(l)} style={{
                background: "none", border: 0, cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500,
                textTransform: "uppercase", letterSpacing: "var(--tracking-wide)",
                color: "var(--text-body)", transition: "color var(--dur-base) var(--ease-out)", whiteSpace: "nowrap",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--green-700)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-body)")}
              >{l}</button>
            )
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={onCart} style={{ background: "none", border: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "7px", color: "var(--text-body)", fontFamily: "var(--font-body)", fontSize: "13px", letterSpacing: "var(--tracking-wide)" }}>
            <i data-lucide="shopping-bag" style={{ width: 18, height: 18 }}></i>
            <span>{cartCount}</span>
          </button>
          <div className="hk-header-cta">
            <Button variant="primary" size="sm" onClick={() => onNav && onNav("Meal Plans")}>Explore Meal Plans</Button>
          </div>
          <button
            className="hk-nav-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{ alignItems: "center", justifyContent: "center", width: "38px", height: "38px", background: "none", border: 0, cursor: "pointer", color: "var(--text-strong)" }}
          >
            <i data-lucide={menuOpen ? "x" : "menu"} style={{ width: 22, height: 22 }}></i>
          </button>
        </div>
      </div>

      <div style={{
        maxHeight: menuOpen ? (mPlansOpen ? "1200px" : "460px") : "0px", overflow: "hidden",
        transition: "max-height var(--dur-slow) var(--ease-out)",
        borderTop: menuOpen ? "1px solid var(--border-subtle)" : "none",
        background: "var(--bg-page)",
      }}>
        <nav style={{ display: "flex", flexDirection: "column", padding: "8px 24px 20px" }}>
          {links.map((l) => (
            l === "Meal Plans" ? (
              <div key={l} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <button onClick={() => nav(l)} style={{
                    flex: 1, background: "none", border: 0, cursor: "pointer", textAlign: "left",
                    padding: "16px 4px", fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500,
                    textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-body)",
                  }}>{l}</button>
                  <button
                    onClick={() => setMPlansOpen((o) => !o)}
                    aria-label={mPlansOpen ? "Hide plans" : "Show plans"}
                    aria-expanded={mPlansOpen}
                    style={{
                      background: "none", border: 0, cursor: "pointer", width: "48px", minHeight: "48px",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-700)",
                    }}
                  >
                    <i data-lucide="chevron-down" style={{ width: 18, height: 18, transform: mPlansOpen ? "rotate(180deg)" : "none", transition: "transform var(--dur-base) var(--ease-out)" }}></i>
                  </button>
                </div>
                <div style={{ maxHeight: mPlansOpen ? "760px" : "0px", overflow: "hidden", transition: "max-height var(--dur-slow) var(--ease-out)" }}>
                  <div style={{ display: "flex", flexDirection: "column", paddingBottom: "10px" }}>
                    {plans.map((p) => (
                      <button
                        key={p.slug}
                        onClick={() => { setMenuOpen(false); setMPlansOpen(false); onSelectPlan ? onSelectPlan(p) : onNav && onNav(l); }}
                        style={{
                          background: "none", border: 0, cursor: "pointer", textAlign: "left",
                          padding: "13px 4px 13px 16px", minHeight: "46px", borderLeft: "2px solid var(--green-100)",
                          fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-body)",
                        }}
                      >{p.name || p.title}</button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button key={l} onClick={() => nav(l)} style={{
                background: "none", border: 0, borderBottom: "1px solid var(--border-subtle)", cursor: "pointer", textAlign: "left",
                padding: "16px 4px", fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 500,
                textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-body)",
              }}>{l}</button>
            )
          ))}
          <div style={{ marginTop: "18px" }}>
            <Button variant="primary" size="md" fullWidth onClick={() => nav("Meal Plans")}>Explore Meal Plans</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

window.Logo = Logo;
window.Header = Header;
