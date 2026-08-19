const { Button, Tag } = window.HealthyKitchenDesignSystem_f4c763;

function Hero({ onExplore }) {
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container hk-grid-2 hk-hero-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 32px 80px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "56px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
            Chef-made · Delivered daily in Dubai
          </span>
          <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 0.98, fontSize: "clamp(38px, 6.5vw, 68px)", color: "var(--text-strong)" }}>
            Personalized<br />functional<br />meal plans
          </h1>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.55, color: "var(--text-muted)", maxWidth: "46ch" }}>
            Clean, simple, and functional. Our daily-delivered meals are always
            dairy-free, gluten-free, and sugar-free — perfect for gut health, vibrant
            energy, and peak performance. Discover the taste of clean eating.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "4px" }}>
            <Button variant="primary" size="lg" onClick={onExplore}>Explore Meal Plans</Button>
            <Button variant="ghost" size="lg" iconLeft={<i data-lucide="message-circle" style={{ width: 17, height: 17 }}></i>}>WhatsApp Us</Button>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            <Tag tone="green" variant="soft">Dairy-free</Tag>
            <Tag tone="green" variant="soft">Gluten-free</Tag>
            <Tag tone="green" variant="soft">Sugar-free</Tag>
            <Tag tone="green" variant="soft">Clean food</Tag>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <image-slot id="hk-hero" style={{ width: "100%", aspectRatio: "4 / 5", display: "block" }} shape="rounded" radius="18" placeholder="Drop a hero dish photo"></image-slot>
          <div style={{ position: "absolute", left: "-18px", bottom: "34px", background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "var(--font-script)", fontSize: "30px", color: "var(--green-700)", lineHeight: 1 }}>fresh daily</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>7 AM – 12 PM delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
