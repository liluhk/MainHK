const { ProductCard, SectionHeading } = window.HealthyKitchenDesignSystem_f4c763;

const HK_PLAN_COVERS = { "longevity": "assets/plans/longevity-cover.jpg", "gut-healing": "assets/plans/gut-healing-cover.jpg", "muscle-up": "assets/plans/muscle-up-cover.jpg", "autoimmune": "assets/plans/autoimmune-cover.jpg", "low-fodmap": "assets/plans/low-fodmap-cover.jpg", "easy-detox": "assets/plans/easy-detox-cover.jpg", "detox-cleanse": "assets/plans/detox-cleanse-cover.jpg", "anticandida": "assets/plans/anticandida-cover.jpg" };

window.HK_PLAN_COVERS = HK_PLAN_COVERS;

function MealPlans({ onSelect }) {
  const plans = window.HK_PLANS;
  const railRef = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const CARD = 340; // card width
  const GAP = 24;

  const update = React.useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    update();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [update]);

  // keep arrow icons rendered after state-driven re-renders
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [atStart, atEnd]);

  const scrollBy = (dir) => {
    const el = railRef.current;
    if (el) el.scrollBy({ left: dir * (CARD + GAP) * 2, behavior: "smooth" });
  };

  const Arrow = ({ dir, disabled }) => (
    <button
      onClick={() => scrollBy(dir)}
      disabled={disabled}
      aria-label={dir < 0 ? "Previous" : "Next"}
      style={{
        width: 40, height: 40, flex: "none", borderRadius: "var(--radius-circle)",
        border: "1px solid var(--border-subtle)",
        background: "rgba(253,252,248,0.7)",
        color: "var(--text-muted)",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.25 : 0.55, display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "var(--shadow-xs)",
        transition: "opacity var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.opacity = "1"; e.currentTarget.style.background = "var(--white)"; } }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = disabled ? "0.25" : "0.55"; e.currentTarget.style.background = "rgba(253,252,248,0.7)"; }}
    >
      <i data-lucide={dir < 0 ? "chevron-left" : "chevron-right"} style={{ width: 18, height: 18 }}></i>
    </button>
  );

  return (
    <section id="meal-plans" className="hk-plans-section" style={{ background: "var(--bg-subtle)", borderTop: "1px solid var(--border-subtle)", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 0 84px" }}>
        <div className="hk-container" style={{ padding: "0 32px", marginBottom: "36px" }}>
          <SectionHeading eyebrow="Our menus" title="Meal Plans Built Around You" align="left">
            Medically-tailored plans for gut healing, longevity, detox and performance — chef-made and delivered to your door.
          </SectionHeading>
        </div>

        <div style={{ position: "relative" }}>
          <div
            ref={railRef}
            className="hk-rail hk-container"
            style={{
              display: "flex", gap: GAP + "px", overflowX: "auto", scrollSnapType: "x mandatory",
              padding: "8px 32px 24px", scrollPaddingLeft: "32px",
            }}
          >
            {plans.map((p) => (
              <div key={p.slug} style={{ flex: `0 0 ${CARD}px`, scrollSnapAlign: "start" }}>
                <ProductCard
                  title={p.name}
                  blurb={p.blurb}
                  price={p.price}
                  tags={p.tags}
                  image={HK_PLAN_COVERS[p.slug] ? <img src={HK_PLAN_COVERS[p.slug]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : null}
                  onView={() => onSelect && onSelect(p)}
                />
              </div>
            ))}
            <div style={{ flex: "0 0 8px" }}></div>
          </div>
          {/* edge fades */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "40px", height: "100%", pointerEvents: "none", background: "linear-gradient(90deg, var(--bg-subtle), transparent)", opacity: atStart ? 0 : 1, transition: "opacity var(--dur-base)" }}></div>
          <div style={{ position: "absolute", top: 0, right: 0, width: "56px", height: "100%", pointerEvents: "none", background: "linear-gradient(270deg, var(--bg-subtle), transparent)", opacity: atEnd ? 0 : 1, transition: "opacity var(--dur-base)" }}></div>
        </div>

        <div className="hk-container" style={{ display: "flex", alignItems: "center", gap: "4px", padding: "0 32px", marginTop: "20px" }}>
          <Arrow dir={-1} disabled={atStart} />
          <Arrow dir={1} disabled={atEnd} />
        </div>
      </div>
    </section>
  );
}

window.MealPlans = MealPlans;
