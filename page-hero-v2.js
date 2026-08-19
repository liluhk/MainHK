const { Button, Tag } = window.HealthyKitchenDesignSystem_f4c763;

const HK_HERO_PHOTO = (window.HK_ASSET_BASE ?? "") + "assets/brand/hero-banner.jpg";

const heroV2Eyebrow = {
  fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500,
  textTransform: "uppercase", letterSpacing: "var(--tracking-widest)",
};

function HeroScrollCue({ color = "var(--ivory-50)" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", color }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", opacity: 0.75 }}>Scroll</span>
      <span style={{ width: "1px", height: "34px", background: "currentColor", opacity: 0.5 }}></span>
      <svg className="hk-bob" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5L8 11L14 5" stroke="currentColor" strokeWidth="1.6"></path></svg>
    </div>
  );
}

/* ---- 1a — full-bleed photo statement ---- */
function HeroFullBleed({ onExplore }) {
  return (
    <section style={{ position: "relative", height: "min(88vh, 840px)", minHeight: "620px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `url('${HK_HERO_PHOTO}') center 30% / cover` }}></div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,50,28,0.12) 0%, rgba(6,50,28,0.04) 35%, rgba(6,50,28,0.82) 100%)" }}></div>
      <div className="hk-container" style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 48px 52px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ ...heroV2Eyebrow, color: "var(--green-200)" }}>Chef-made · Delivered daily in Dubai</span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 0.94, letterSpacing: "0.01em", fontSize: "clamp(44px, 5.6vw, 72px)", color: "var(--ivory-50)" }}>
            Personalized<br />functional<br />meal plans
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.55, color: "var(--green-100)", maxWidth: "38ch" }}>
            Always dairy-free, gluten-free, and sugar-free — cooked fresh every
            morning, on your table by noon.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
            <Button variant="inverse" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
            <Button variant="ghost" size="lg" style={{ color: "var(--ivory-50)", borderColor: "rgba(255,255,255,0.6)" }}>WhatsApp Us</Button>
          </div>
        </div>
        <HeroScrollCue />
      </div>
    </section>
  );
}

/* ---- 1b — split, photo panel + peek strip ---- */
function HeroSplit({ onExplore }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--bg-page)" }}>
      <div className="hk-grid-2 hk-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.08fr 0.92fr", alignItems: "center", minHeight: "680px" }}>
        <div className="hk-container" style={{ padding: "56px 30px 100px 48px", display: "flex", flexDirection: "column", gap: "22px" }}>
          <span style={{ ...heroV2Eyebrow, color: "var(--text-faint)" }}>Chef-made · Delivered daily in Dubai</span>
          <h1 style={{ margin: "0 0 0 -4px", fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 0.88, letterSpacing: 0, fontSize: "clamp(54px, 7vw, 92px)", color: "var(--text-strong)" }}>
            Personalized<br />functional<br />meal plans
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.55, color: "var(--text-muted)", maxWidth: "36ch" }}>
            Meal plans built around how your body actually feels — cooked daily
            and delivered before noon.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
            <Button variant="primary" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
            <Button variant="ghost" size="lg">WhatsApp Us</Button>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Tag tone="green" variant="soft">Dairy-free</Tag>
            <Tag tone="green" variant="soft">Gluten-free</Tag>
            <Tag tone="green" variant="soft">Sugar-free</Tag>
            <Tag tone="green" variant="soft">Clean food</Tag>
          </div>
        </div>
        <div style={{ position: "relative", alignSelf: "stretch", minHeight: "680px" }}>
          <div style={{ position: "absolute", top: 0, bottom: "46px", left: "36px", right: 0, borderRadius: "28px 0 0 0", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: `url('${HK_HERO_PHOTO}') center 45% / cover` }}></div>
          </div>
          <div style={{ position: "absolute", left: "14px", top: "64px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "14px 18px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "26px", color: "var(--green-700)", lineHeight: 1 }}>fresh daily</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>7 AM – 12 PM delivery</span>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "46px", background: "var(--green-700)", display: "flex", alignItems: "center", padding: "0 48px", overflow: "hidden" }}>
        <span style={{ color: "var(--green-100)", fontFamily: "var(--font-display)", fontSize: "28px", letterSpacing: "0.02em", whiteSpace: "nowrap", transform: "translateY(5px)" }}>
          — Why our clients never go back to takeout —
        </span>
      </div>
    </section>
  );
}

/* ---- 1c — marquee ticker + centered tilted photo ---- */
function HeroMarquee({ onExplore }) {
  const ticker = "Dairy-free · Gluten-free · Sugar-free · Clean food · Delivered daily · Dairy-free · Gluten-free · Sugar-free · Clean food · Delivered daily ·";
  const tickerStyle = { fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--green-100)" };
  return (
    <section style={{ background: "var(--bg-page)", overflow: "hidden" }}>
      <div style={{ background: "var(--green-700)", overflow: "hidden", whiteSpace: "nowrap", padding: "12px 0" }}>
        <div className="hk-marquee" style={{ display: "inline-flex", gap: "40px" }}>
          <span style={tickerStyle}>{ticker}</span>
          <span style={tickerStyle}>{ticker}</span>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "52px 32px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
        <span style={{ ...heroV2Eyebrow, color: "var(--text-faint)" }}>Chef-made · Delivered daily in Dubai</span>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 0.94, fontSize: "clamp(42px, 4.8vw, 62px)", color: "var(--text-strong)" }}>
          Personalized functional<br />meal plans
        </h1>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.55, color: "var(--text-muted)", maxWidth: "46ch" }}>
          Clean, simple, and built around your body. Always dairy-free,
          gluten-free, and sugar-free — see a real day on the table below.
        </p>
        <Button variant="primary" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
      </div>
      <div style={{ position: "relative", height: "420px", marginTop: "30px" }}>
        <div style={{ position: "absolute", left: "50%", top: 0, width: "min(760px, 82vw)", height: "500px", transform: "translateX(-50%) rotate(-2deg)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 60px rgba(28,33,29,0.22)", border: "8px solid var(--white)", background: `url('${HK_HERO_PHOTO}') center 40% / cover` }}></div>
      </div>
    </section>
  );
}

/* ---- 1d — green editorial, arch photo window ---- */
function HeroGreen({ onExplore }) {
  return (
    <section style={{ position: "relative", background: "var(--green-700)", overflow: "hidden" }}>
      <div className="hk-grid-2 hk-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", alignItems: "end", minHeight: "660px", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px", padding: "72px 0 84px" }}>
          <span style={{ ...heroV2Eyebrow, color: "var(--green-300)" }}>Chef-made · Delivered daily in Dubai</span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 0.92, letterSpacing: "0.01em", fontSize: "clamp(48px, 6vw, 80px)", color: "var(--ivory-50)" }}>
            Personalized<br />functional<br />meal plans
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.55, color: "var(--green-200)", maxWidth: "38ch" }}>
            Always dairy-free, gluten-free, and sugar-free — cooked fresh every
            morning, on your table by noon.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
            <Button variant="inverse" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
            <Button variant="ghost" size="lg" style={{ color: "var(--ivory-50)", borderColor: "rgba(255,255,255,0.5)" }}>WhatsApp Us</Button>
          </div>
          <span style={{ fontFamily: "var(--font-script)", fontSize: "32px", color: "var(--green-300)", lineHeight: 1, marginTop: "6px" }}>fresh every morning</span>
        </div>
        <div style={{ position: "relative", alignSelf: "end", justifySelf: "center", width: "min(420px, 100%)", height: "560px", borderRadius: "999px 999px 0 0", overflow: "hidden", boxShadow: "0 24px 60px rgba(6,50,28,0.45)" }}>
          <div style={{ position: "absolute", inset: 0, background: `url('${HK_HERO_PHOTO}') center 40% / cover` }}></div>
        </div>
      </div>
    </section>
  );
}

/* ---- 1e — type-first, rotating word + photo band ---- */
function HeroRotatingWord({ words, interval = 2200 }) {
  const [i, setI] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setI((x) => (x + 1) % words.length); setVisible(true); }, 260);
    }, interval);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{ display: "inline-grid", textAlign: "left" }}>
      {words.map((w, k) => (
        <span key={w} style={{ gridArea: "1 / 1", fontStyle: "italic", fontWeight: 700, color: "var(--green-600)", visibility: k === i ? "visible" : "hidden", opacity: k === i && visible ? 1 : 0, transform: k === i && visible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.26s ease, transform 0.26s ease" }}>
          {w}
        </span>
      ))}
    </span>
  );
}

function HeroKinetic({ onExplore }) {
  return (
    <section className="hk-hero-kinetic" style={{ position: "relative", background: "var(--bg-page)", overflow: "hidden" }}>
      <div className="hk-hero-kinetic-copy" style={{ textAlign: "center", padding: "48px 32px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", maxWidth: "860px", margin: "0 auto" }}>
        <span style={{ ...heroV2Eyebrow, color: "var(--text-faint)" }}>Chef-made · Delivered daily in Dubai</span>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 1.05, fontSize: "clamp(38px, 4.2vw, 64px)", color: "var(--text-strong)", whiteSpace: "nowrap" }}>
          <span className="hk-hero-line1"><span className="hk-hero-word">Personalized</span>{" "}<HeroRotatingWord words={["functional", "dairy-free", "gluten-free", "sugar-free"]} /></span>{" "}
          <span className="hk-hero-line2">meal plans</span>
        </h1>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.55, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
          Clean, simple, and built around your body — cooked fresh every morning, delivered before noon
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "2px" }}>
          <Button variant="primary" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
          <Button variant="ghost" size="lg">WhatsApp Us</Button>
        </div>
      </div>
      <div className="hk-hero-kinetic-band" style={{ position: "relative", height: "400px", marginTop: "40px" }}>
        <div style={{ position: "absolute", inset: 0, background: `url('${HK_HERO_PHOTO}') center 42% / cover` }}></div>
      </div>
    </section>
  );
}

/* ---- 1f — triptych crops ---- */
function HeroTriptych({ onExplore }) {
  const crops = ["18% 30%", "50% 48%", "84% 62%"];
  return (
    <section style={{ background: "var(--bg-page)", overflow: "hidden" }}>
      <div style={{ textAlign: "center", padding: "56px 32px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
        <span style={{ ...heroV2Eyebrow, color: "var(--text-faint)" }}>Chef-made · Delivered daily in Dubai</span>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, lineHeight: 0.94, fontSize: "clamp(44px, 5vw, 66px)", color: "var(--text-strong)" }}>
          Personalized functional<br />meal plans
        </h1>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
          <Button variant="ghost" size="lg">WhatsApp Us</Button>
        </div>
      </div>
      <div className="hk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", maxWidth: "var(--container-max)", margin: "44px auto 0", padding: "0 48px", height: "380px" }}>
        {crops.map((pos, i) => (
          <div key={i} style={{ borderRadius: "18px 18px 0 0", overflow: "hidden", position: "relative", transform: i === 1 ? "translateY(-20px)" : "none" }}>
            <div style={{ position: "absolute", inset: 0, background: `url('${HK_HERO_PHOTO}') ${pos} / 240% auto` }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroV2({ variant = "1a", onExplore }) {
  if (variant === "1b") return <HeroSplit onExplore={onExplore} />;
  if (variant === "1c") return <HeroMarquee onExplore={onExplore} />;
  if (variant === "1d") return <HeroGreen onExplore={onExplore} />;
  if (variant === "1e") return <HeroKinetic onExplore={onExplore} />;
  if (variant === "1f") return <HeroTriptych onExplore={onExplore} />;
  return <HeroFullBleed onExplore={onExplore} />;
}

Object.assign(window, { HeroV2, HeroFullBleed, HeroSplit, HeroMarquee, HeroGreen, HeroKinetic, HeroTriptych });
